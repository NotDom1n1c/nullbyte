/* NULLBYTE — Firebase auth + cloud data sync.
   Loaded site-wide (shared.js dynamic-imports it; osint.html/osint-module.html
   include it directly). Provides window.NBAuth and mirrors the nb_* localStorage
   keys to a per-user Firestore doc so credits/profile/settings follow the account. */
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,
  onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, updateProfile,
  GoogleAuthProvider, signInWithPopup
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT",
  storageBucket: "YOUR_PROJECT.firebasestorage.app",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "1:YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

/* local keys that follow the account into the cloud */
const SYNC_KEYS = [
  'nb_profile', 'nb_osint', 'nb_theme', 'nb_edge', 'nb_mode', 'nb_mono', 'nb_reduce_motion', 'nb_ghost',
  'nb_notes_v1', 'nb_habits_v1', 'nb_snippets_v1', 'nb_calendar', 'nb_daily', 'nb_roadmap', 'nb_reaction_best'
];
const _setItem = localStorage.setItem.bind(localStorage);
const snapshotLocal = () => { const o = {}; SYNC_KEYS.forEach(k => { const v = localStorage.getItem(k); if (v != null) o[k] = v; }); return o; };
const applyToLocal = (data) => { if (!data) return; SYNC_KEYS.forEach(k => { if (data[k] != null) _setItem(k, data[k]); }); };
const clearSynced = () => SYNC_KEYS.forEach(k => { try { localStorage.removeItem(k); } catch (e) {} });

/* re-apply appearance + credit UI after a cloud restore, then let pages react */
function reapply() {
  try {
    if (window.nbApplyTheme) window.nbApplyTheme((window.nbCurrentTheme && window.nbCurrentTheme()) || '#ffffff', false);
    if (window.nbApplyEdge && window.nbCurrentEdge) window.nbApplyEdge(window.nbCurrentEdge(), false);
    if (window.nbApplyMode && window.nbCurrentMode) window.nbApplyMode(window.nbCurrentMode(), false);
    if (window.nbApplyMono && window.nbCurrentMono) window.nbApplyMono(window.nbCurrentMono(), false);
    if (window.nbApplyMotion && window.nbCurrentMotion) window.nbApplyMotion(window.nbCurrentMotion(), false);
    if (window.nbApplyGhost && window.nbCurrentGhost) window.nbApplyGhost(window.nbCurrentGhost() || '', false);
    if (window.osRefreshCreditUI) window.osRefreshCreditUI();
  } catch (e) {}
  window.dispatchEvent(new Event('nb-cloud-synced'));
}

/* debounced push of local → cloud */
let pushTimer = null;
async function pushLocal(uid) {
  const ts = Date.now();
  try { await setDoc(doc(db, 'users', uid), { data: snapshotLocal(), updated: ts }, { merge: true }); _setItem('nb_synced_at', String(ts)); }
  catch (e) { console.warn('[NBAuth] cloud push failed', e.code || e.message); }
}
function schedulePush() {
  const u = auth.currentUser; if (!u) return;
  clearTimeout(pushTimer); pushTimer = setTimeout(() => pushLocal(u.uid), 1200);
}
/* catch same-tab writes (the storage event only fires in other tabs) */
localStorage.setItem = function (k, v) { _setItem(k, v); if (SYNC_KEYS.includes(k)) schedulePush(); };
addEventListener('storage', e => { if (e.key && SYNC_KEYS.includes(e.key)) schedulePush(); });

/* public API */
const listeners = [];
const notify = (u) => listeners.forEach(cb => { try { cb(u); } catch (e) {} });
const friendlyError = (e) => ({
  'auth/invalid-email': 'That email address looks invalid.',
  'auth/email-already-in-use': 'An account already exists for this email.',
  'auth/weak-password': 'Password must be at least 6 characters.',
  'auth/invalid-credential': 'Wrong email or password.',
  'auth/wrong-password': 'Wrong email or password.',
  'auth/user-not-found': 'No account with that email.',
  'auth/too-many-requests': 'Too many attempts — try again later.',
  'auth/network-request-failed': 'Network error — are you offline?'
}[e && e.code] || (e && e.message) || 'Something went wrong.');

window.NBAuth = {
  ready: false, user: null,
  onUser(cb) { listeners.push(cb); if (this.ready) { try { cb(this.user); } catch (e) {} } },
  friendlyError,
  async signup(email, password, handle) {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    if (handle) {
      try { await updateProfile(cred.user, { displayName: handle }); } catch (e) {}
      // seed the local handle so the nav chip / account show it immediately (and it syncs to the cloud)
      try { const pr = JSON.parse(localStorage.getItem('nb_profile') || '{}'); if (!pr.handle) { pr.handle = handle; localStorage.setItem('nb_profile', JSON.stringify(pr)); } } catch (e) {}
    }
    try { await sendEmailVerification(cred.user); } catch (e) {}
    notify(cred.user);   // re-paint with the now-updated display name
    return cred.user;
  },
  login: (email, password) => signInWithEmailAndPassword(auth, email, password).then(c => c.user),
  loginGoogle: () => signInWithPopup(auth, new GoogleAuthProvider()).then(c => c.user),
  logout: async () => { try { if (auth.currentUser) await pushLocal(auth.currentUser.uid); } catch (e) {} return signOut(auth); },
  resetPassword: (email) => sendPasswordResetEmail(auth, email),
  verifyEmail: () => auth.currentUser ? sendEmailVerification(auth.currentUser) : Promise.reject(new Error('not signed in')),
  syncNow: () => auth.currentUser ? pushLocal(auth.currentUser.uid) : Promise.resolve()
};

onAuthStateChanged(auth, async (user) => {
  window.NBAuth.user = user;
  window.NBAuth.ready = true;
  if (user) {
    const owner = localStorage.getItem('nb_owner');   // whose data is currently in this browser
    try {
      const snap = await getDoc(doc(db, 'users', user.uid));
      const cloud = snap.exists() ? snap.data() : null;
      if (owner !== user.uid) {
        // Account switch (or first login on this browser). NEVER let the previous
        // session's local data bleed into this account.
        if (cloud && cloud.data) {                       // existing account → cloud is authoritative
          clearSynced(); applyToLocal(cloud.data); _setItem('nb_synced_at', String(cloud.updated || 0)); reapply();
        } else {                                         // brand-new account with no cloud yet
          if (owner && owner !== 'guest') { clearSynced(); reapply(); }  // came from another account → start fresh
          await pushLocal(user.uid);                     // (else: owner was guest/none → migrate the guest data)
        }
        _setItem('nb_owner', user.uid);
      } else {
        // Same account, ordinary page load: only take the cloud if it's newer than
        // our last sync, so un-pushed local changes aren't reverted.
        const localAt = +(localStorage.getItem('nb_synced_at') || 0);
        if (cloud && cloud.data && (cloud.updated || 0) > localAt) {
          clearSynced(); applyToLocal(cloud.data); _setItem('nb_synced_at', String(cloud.updated)); reapply();
        } else { await pushLocal(user.uid); }
      }
    } catch (e) { console.warn('[NBAuth] cloud sync failed', e.code || e.message); }
  } else {
    // Logged out → wipe account-scoped data so it can't leak into the next login.
    clearSynced(); _setItem('nb_owner', 'guest'); localStorage.removeItem('nb_synced_at'); reapply();
  }
  notify(user);
});
