/* NULLBYTE — tiny in-browser SQL engine (teaching prototype).
   Supports: SELECT (cols / * / t.col / aggregates), FROM with alias,
   INNER JOIN ... ON a=b, WHERE (AND/OR/NOT, = <> < > <= >=, LIKE, IN list,
   IN (subquery), IS [NOT] NULL, parentheses), GROUP BY, ORDER BY, LIMIT,
   and EXPLAIN. Not a full SQL implementation — good enough to learn on. */
(function (root) {
  const KW = ['SELECT','FROM','WHERE','JOIN','INNER','LEFT','ON','AND','OR','NOT','IN',
    'LIKE','IS','NULL','ORDER','BY','GROUP','LIMIT','ASC','DESC','AS','COUNT','AVG',
    'SUM','MIN','MAX','DISTINCT','EXPLAIN'];

  function tokenize(s) {
    const toks = []; let i = 0;
    const isId = c => /[A-Za-z0-9_.*]/.test(c);
    while (i < s.length) {
      const c = s[i];
      if (/\s/.test(c)) { i++; continue; }
      if (c === "'") { let j = i + 1, str = ''; while (j < s.length && s[j] !== "'") { str += s[j]; j++; } if (j >= s.length) throw new Error('Unterminated string literal'); toks.push({ t: 'str', v: str }); i = j + 1; continue; }
      if (c === '(' || c === ')' || c === ',') { toks.push({ t: c }); i++; continue; }
      if (c === ';') { i++; continue; }
      const two = s.substr(i, 2);
      if (['<=', '>=', '<>', '!='].includes(two)) { toks.push({ t: 'op', v: two === '!=' ? '<>' : two }); i += 2; continue; }
      if (c === '=' || c === '<' || c === '>') { toks.push({ t: 'op', v: c }); i++; continue; }
      if (isId(c)) {
        let j = i, w = ''; while (j < s.length && isId(s[j])) { w += s[j]; j++; }
        const up = w.toUpperCase();
        if (KW.includes(up)) toks.push({ t: 'kw', v: up });
        else if (/^-?\d+(\.\d+)?$/.test(w)) toks.push({ t: 'num', v: parseFloat(w) });
        else toks.push({ t: 'id', v: w });
        i = j; continue;
      }
      throw new Error('Unexpected character: ' + c);
    }
    return toks;
  }

  function parse(toks) {
    let p = 0;
    const peek = () => toks[p];
    const at = (t, v) => peek() && peek().t === t && (v === undefined || peek().v === v);
    const atKw = v => at('kw', v);
    const eat = (t, v) => { const tk = peek(); if (!tk || tk.t !== t || (v !== undefined && tk.v !== v)) throw new Error('Expected ' + (v || t) + ' near ' + (tk ? (tk.v || tk.t) : 'end of query')); p++; return tk; };

    let explain = false;
    if (atKw('EXPLAIN')) { eat('kw', 'EXPLAIN'); explain = true; }
    eat('kw', 'SELECT');
    let distinct = false; if (atKw('DISTINCT')) { eat('kw', 'DISTINCT'); distinct = true; }

    const select = [];
    do { select.push(parseSelItem()); } while (at(',') && eat(','));

    eat('kw', 'FROM');
    const from = parseTableRef();
    const joins = [];
    while (atKw('JOIN') || atKw('INNER') || atKw('LEFT')) {
      const left = atKw('LEFT'); if (atKw('INNER') || atKw('LEFT')) eat('kw');
      eat('kw', 'JOIN');
      const tref = parseTableRef();
      eat('kw', 'ON');
      const a = eat('id').v; eat('op', '='); const b = eat('id').v;
      joins.push({ tref, a, b, left });
    }

    let where = null;
    if (atKw('WHERE')) { eat('kw', 'WHERE'); where = parseOr(); }

    let groupBy = null;
    if (atKw('GROUP')) { eat('kw', 'GROUP'); eat('kw', 'BY'); groupBy = eat('id').v; }

    let order = null;
    if (atKw('ORDER')) { eat('kw', 'ORDER'); eat('kw', 'BY'); const col = eat('id').v; let dir = 'ASC'; if (atKw('ASC') || atKw('DESC')) dir = eat('kw').v; order = { col, dir }; }

    let limit = null;
    if (atKw('LIMIT')) { eat('kw', 'LIMIT'); limit = eat('num').v; }

    if (peek()) throw new Error('Unexpected token near ' + (peek().v || peek().t));
    return { explain, distinct, select, from, joins, where, groupBy, order, limit };

    function parseSelItem() {
      if (peek() && peek().t === 'kw' && ['COUNT', 'AVG', 'SUM', 'MIN', 'MAX'].includes(peek().v)) {
        const fn = eat('kw').v; eat('(');
        let arg; if (at('id')) arg = eat('id').v; else throw new Error('Expected column or * inside ' + fn + '()');
        eat(')');
        let as = fn + '(' + arg + ')'; if (atKw('AS')) { eat('kw', 'AS'); as = eat('id').v; }
        return { agg: fn, arg, as };
      }
      const col = eat('id').v; let as = col; if (atKw('AS')) { eat('kw', 'AS'); as = eat('id').v; }
      return { col, as };
    }
    function parseTableRef() {
      const name = eat('id').v; let alias = name;
      if (at('id')) alias = eat('id').v; else if (atKw('AS')) { eat('kw', 'AS'); alias = eat('id').v; }
      return { name, alias };
    }
    function parseOr() { let l = parseAnd(); while (atKw('OR')) { eat('kw', 'OR'); l = { op: 'OR', l, r: parseAnd() }; } return l; }
    function parseAnd() { let l = parseNot(); while (atKw('AND')) { eat('kw', 'AND'); l = { op: 'AND', l, r: parseNot() }; } return l; }
    function parseNot() { if (atKw('NOT')) { eat('kw', 'NOT'); return { op: 'NOT', e: parseNot() }; } return parsePrimary(); }
    function parsePrimary() {
      if (at('(')) { eat('('); const e = parseOr(); eat(')'); return e; }
      return parseComparison();
    }
    function parseComparison() {
      const left = parseOperand();
      if (atKw('IS')) {
        eat('kw', 'IS'); let neg = false; if (atKw('NOT')) { eat('kw', 'NOT'); neg = true; } eat('kw', 'NULL');
        return { op: neg ? 'ISNOTNULL' : 'ISNULL', left };
      }
      if (atKw('LIKE')) { eat('kw', 'LIKE'); const v = eat('str').v; return { op: 'LIKE', left, pat: v }; }
      if (atKw('IN')) {
        eat('kw', 'IN'); eat('(');
        if (atKw('SELECT')) { const sub = parse(sliceParen()); eat(')'); return { op: 'INSUB', left, sub }; }
        const list = []; do { list.push(parseOperand()); } while (at(',') && eat(',')); eat(')');
        return { op: 'IN', left, list };
      }
      const o = eat('op').v; const right = parseOperand();
      return { op: o, left, right };
    }
    function parseOperand() {
      if (at('id')) return { kind: 'col', name: eat('id').v };
      if (at('num')) return { kind: 'lit', v: eat('num').v };
      if (at('str')) return { kind: 'lit', v: eat('str').v };
      throw new Error('Expected a value near ' + (peek() ? (peek().v || peek().t) : 'end'));
    }
    // grab tokens for a parenthesised subquery (already consumed the '(')
    function sliceParen() {
      let depth = 1; const start = p;
      while (p < toks.length && depth > 0) { if (at('(')) depth++; else if (at(')')) { depth--; if (depth === 0) break; } p++; }
      return toks.slice(start, p);
    }
  }

  // ---- evaluation ----
  function makeRow(alias, rec) { const o = {}; for (const k in rec) { o[k] = rec[k]; o[alias + '.' + k] = rec[k]; } o.__a = alias; return o; }
  function colVal(row, name) {
    if (name in row) return row[name];
    if (('.' + name) && Object.prototype.hasOwnProperty.call(row, name)) return row[name];
    throw new Error('Unknown column: ' + name);
  }
  function opVal(row, operand) { return operand.kind === 'lit' ? operand.v : colVal(row, operand.name); }
  function cmp(a, b) { if (a === null || a === undefined) return null; if (typeof a === 'number' || typeof b === 'number') return Number(a) - Number(b); return ('' + a).localeCompare('' + b); }

  function evalWhere(node, row, db) {
    switch (node.op) {
      case 'AND': return evalWhere(node.l, row, db) && evalWhere(node.r, row, db);
      case 'OR': return evalWhere(node.l, row, db) || evalWhere(node.r, row, db);
      case 'NOT': return !evalWhere(node.e, row, db);
      case 'ISNULL': return opVal(row, node.left) === null || opVal(row, node.left) === undefined;
      case 'ISNOTNULL': { const v = opVal(row, node.left); return v !== null && v !== undefined; }
      case 'LIKE': { const v = opVal(row, node.left); if (v == null) return false; const re = new RegExp('^' + node.pat.replace(/[.+^${}()|[\]\\]/g, '\\$&').replace(/%/g, '.*').replace(/_/g, '.') + '$', 'i'); return re.test('' + v); }
      case 'IN': { const v = opVal(row, node.left); return node.list.some(o => opVal(row, o) === v); }
      case 'INSUB': { const v = opVal(row, node.left); const sub = execute(node.sub, db); const key = sub.cols[0]; return sub.rows.some(r => r[key] === v); }
      default: {
        const a = opVal(row, node.left), b = opVal(row, node.right); const c = cmp(a, b);
        if (c === null) return false;
        switch (node.op) { case '=': return a === b || c === 0; case '<>': return !(a === b || c === 0); case '<': return c < 0; case '>': return c > 0; case '<=': return c <= 0; case '>=': return c >= 0; }
      }
    }
    return false;
  }

  function execute(ast, db) {
    if (!db[ast.from.name]) throw new Error('No such table: ' + ast.from.name);
    let rows = db[ast.from.name].map(r => makeRow(ast.from.alias, r));
    const tables = [ast.from.alias];

    for (const j of ast.joins) {
      if (!db[j.tref.name]) throw new Error('No such table: ' + j.tref.name);
      const right = db[j.tref.name].map(r => makeRow(j.tref.alias, r));
      const out = [];
      for (const l of rows) {
        let matched = false;
        for (const r of right) {
          const merged = Object.assign({}, l, r);
          if (colVal(merged, j.a) === colVal(merged, j.b)) { out.push(merged); matched = true; }
        }
        if (!matched && j.left) out.push(l);
      }
      rows = out; tables.push(j.tref.alias);
    }

    if (ast.where) rows = rows.filter(r => evalWhere(ast.where, r, db));

    const hasAgg = ast.select.some(s => s.agg);
    let cols, outRows;

    if (hasAgg || ast.groupBy) {
      const groups = new Map();
      for (const r of rows) { const k = ast.groupBy ? colVal(r, ast.groupBy) : '__all'; if (!groups.has(k)) groups.set(k, []); groups.get(k).push(r); }
      cols = ast.select.map(s => s.as);
      outRows = [];
      for (const [, g] of groups) {
        const o = {};
        for (const s of ast.select) {
          if (s.agg) o[s.as] = aggregate(s.agg, s.arg, g);
          else o[s.as] = g.length ? colVal(g[0], s.col) : null;
        }
        o.__src = g[0]; outRows.push(o);
      }
    } else {
      // expand * / columns
      const expanded = [];
      for (const s of ast.select) {
        if (s.col === '*') { for (const a of tables) for (const k in db[tblByAlias(ast, a)][0] || {}) expanded.push({ col: a + '.' + k, as: tables.length > 1 ? a + '.' + k : k }); }
        else if (s.col && s.col.endsWith('.*')) { const a = s.col.slice(0, -2); for (const k in db[tblByAlias(ast, a)][0] || {}) expanded.push({ col: a + '.' + k, as: tables.length > 1 ? a + '.' + k : k }); }
        else expanded.push(s);
      }
      cols = expanded.map(s => s.as);
      outRows = rows.map(r => { const o = {}; for (const s of expanded) o[s.as] = colVal(r, s.col); o.__src = r; return o; });
    }

    if (ast.order) {
      const key = ast.order.col, dir = ast.order.dir === 'DESC' ? -1 : 1;
      outRows.sort((x, y) => { const a = (key in x) ? x[key] : colVal(x.__src, key); const b = (key in y) ? y[key] : colVal(y.__src, key); const c = cmp(a, b); return (c === null ? 0 : c) * dir; });
    }
    if (ast.distinct) { const seen = new Set(); outRows = outRows.filter(o => { const k = cols.map(c => o[c]).join(''); if (seen.has(k)) return false; seen.add(k); return true; }); }
    if (ast.limit != null) outRows = outRows.slice(0, ast.limit);

    outRows.forEach(o => delete o.__src);
    return { cols, rows: outRows };
  }

  function tblByAlias(ast, alias) {
    if (ast.from.alias === alias) return ast.from.name;
    const j = ast.joins.find(j => j.tref.alias === alias);
    if (j) return j.tref.name;
    return alias; // fall back to treating alias as table name
  }

  function aggregate(fn, arg, group) {
    if (fn === 'COUNT') return arg === '*' ? group.length : group.filter(r => colVal(r, arg) != null).length;
    const nums = group.map(r => Number(colVal(r, arg))).filter(n => !isNaN(n));
    if (!nums.length) return null;
    if (fn === 'SUM') return nums.reduce((a, b) => a + b, 0);
    if (fn === 'AVG') return Math.round((nums.reduce((a, b) => a + b, 0) / nums.length) * 100) / 100;
    if (fn === 'MIN') return Math.min(...nums);
    if (fn === 'MAX') return Math.max(...nums);
  }

  function run(sql, db) {
    if (!sql || !sql.trim()) throw new Error('Empty query');
    const ast = parse(tokenize(sql));
    if (ast.explain) {
      const res = execute(ast, db);
      const usesKey = ast.where && /\b(id)\b/i.test(JSON.stringify(ast.where));
      const plan = (usesKey ? 'Index Scan using ' + ast.from.name + '_pkey on ' + ast.from.name : 'Seq Scan on ' + ast.from.name)
        + '\n  rows=' + res.rows.length
        + (ast.joins.length ? '\nNested Loop Join (' + ast.joins.length + ')' : '')
        + (ast.where ? '\n  Filter: WHERE clause' : '')
        + '\n  cost: ' + (usesKey ? '0.15..8.2 (fast)' : '0.00..' + (db[ast.from.name].length * 1.2).toFixed(1) + ' (full scan)');
      return { explain: plan };
    }
    return execute(ast, db);
  }

  root.NBSQL = { run, _parse: parse, _tokenize: tokenize };
})(typeof window !== 'undefined' ? window : globalThis);
