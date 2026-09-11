/* NULLBYTE — minimal client-side JPEG EXIF reader.
   Parses APP1/TIFF/IFD0 + Exif sub-IFD + GPS IFD. No dependencies, no upload.
   NBEXIF.parse(ArrayBuffer) -> { tags:{name:value...}, gps:{lat,lon,alt} | null, error? } */
(function (root) {
  const TAGS = {
    0x010F:'Make', 0x0110:'Model', 0x0112:'Orientation', 0x0131:'Software', 0x0132:'DateTime',
    0x013B:'Artist', 0x8298:'Copyright', 0x829A:'ExposureTime', 0x829D:'FNumber', 0x8827:'ISO',
    0x9003:'DateTimeOriginal', 0x9004:'DateTimeDigitized', 0x920A:'FocalLength',
    0xA002:'PixelXDimension', 0xA003:'PixelYDimension', 0xA433:'LensMake', 0xA434:'LensModel',
    0x9209:'Flash', 0xA005:'InteropIFD', 0x9207:'MeteringMode', 0xA403:'WhiteBalance'
  };
  const GPSTAGS = {
    0x0001:'GPSLatitudeRef', 0x0002:'GPSLatitude', 0x0003:'GPSLongitudeRef', 0x0004:'GPSLongitude',
    0x0005:'GPSAltitudeRef', 0x0006:'GPSAltitude', 0x0007:'GPSTimeStamp', 0x001D:'GPSDateStamp'
  };

  function parse(buffer) {
    const view = new DataView(buffer);
    if (view.byteLength < 4 || view.getUint16(0) !== 0xFFD8) {
      return { error: 'Not a JPEG. EXIF is usually only in .jpg/.jpeg — PNG/WebP/HEIC rarely carry it.' };
    }
    let offset = 2;
    while (offset + 4 < view.byteLength) {
      if (view.getUint8(offset) !== 0xFF) { offset++; continue; }
      const marker = view.getUint8(offset + 1);
      if (marker === 0xE1) return parseAPP1(view, offset + 4);
      if (marker === 0xDA || marker === 0xD9) break; // start of scan / end
      offset += 2 + view.getUint16(offset + 2);
    }
    return { error: 'No EXIF block found. The image may have been stripped (most social networks remove it).' };
  }

  function parseAPP1(view, start) {
    if (view.getUint32(start) !== 0x45786966) return { error: 'APP1 present but no "Exif" header.' };
    const tiff = start + 6;
    const little = view.getUint16(tiff) === 0x4949;
    const get16 = o => view.getUint16(o, little), get32 = o => view.getUint32(o, little);
    if (get16(tiff + 2) !== 0x002A) return { error: 'Malformed TIFF header.' };

    const r0 = readIFD(view, tiff, tiff + get32(tiff + 4), little, TAGS);
    const tags = Object.assign({}, r0.values);
    if (r0.exifPtr) Object.assign(tags, readIFD(view, tiff, tiff + r0.exifPtr, little, TAGS).values);
    let gps = null, gpsRaw = {};
    if (r0.gpsPtr) { gpsRaw = readIFD(view, tiff, tiff + r0.gpsPtr, little, GPSTAGS).values; gps = convertGPS(gpsRaw); }
    return { tags, gps, gpsRaw };
  }

  function readIFD(view, tiffStart, dirStart, little, tagmap) {
    const get16 = o => view.getUint16(o, little), get32 = o => view.getUint32(o, little);
    const out = {}; let exifPtr = 0, gpsPtr = 0;
    if (dirStart + 2 > view.byteLength) return { values: out, exifPtr, gpsPtr };
    const n = get16(dirStart);
    for (let i = 0; i < n; i++) {
      const e = dirStart + 2 + i * 12;
      if (e + 12 > view.byteLength) break;
      const tag = get16(e), type = get16(e + 2), count = get32(e + 4);
      if (tag === 0x8769) { exifPtr = get32(e + 8); continue; }
      if (tag === 0x8825) { gpsPtr = get32(e + 8); continue; }
      const name = tagmap[tag];
      if (!name) continue;
      out[name] = readVal(view, tiffStart, e, type, count, little);
    }
    return { values: out, exifPtr, gpsPtr };
  }

  const SIZES = { 1:1, 2:1, 3:2, 4:4, 5:8, 6:1, 7:1, 8:2, 9:4, 10:8 };
  function readVal(view, tiffStart, entry, type, count, little) {
    const get16 = o => view.getUint16(o, little), get32 = o => view.getUint32(o, little),
          gets32 = o => view.getInt32(o, little);
    const total = (SIZES[type] || 1) * count;
    let data = entry + 8;
    if (total > 4) data = tiffStart + get32(entry + 8);
    if (data < 0 || data + total > view.byteLength) return null;

    if (type === 2) { // ASCII
      let s = ''; for (let i = 0; i < count; i++) { const c = view.getUint8(data + i); if (c === 0) break; s += String.fromCharCode(c); }
      return s.trim();
    }
    const one = o => {
      switch (type) {
        case 1: case 6: case 7: return view.getUint8(o);
        case 3: case 8: return get16(o);
        case 4: return get32(o);
        case 9: return gets32(o);
        case 5: { const d = get32(o + 4); return d ? get32(o) / d : 0; }
        case 10: { const d = gets32(o + 4); return d ? gets32(o) / d : 0; }
        default: return view.getUint8(o);
      }
    };
    const sz = SIZES[type] || 1;
    if (count === 1) return one(data);
    const arr = []; for (let i = 0; i < count; i++) arr.push(one(data + i * sz));
    return arr;
  }

  function convertGPS(g) {
    const dms = (a, ref) => {
      if (!Array.isArray(a) || a.length < 3) return null;
      let dec = a[0] + a[1] / 60 + a[2] / 3600;
      if (ref === 'S' || ref === 'W') dec = -dec;
      return dec;
    };
    const lat = dms(g.GPSLatitude, g.GPSLatitudeRef), lon = dms(g.GPSLongitude, g.GPSLongitudeRef);
    if (lat == null || lon == null) return null;
    return { lat, lon, alt: typeof g.GPSAltitude === 'number' ? g.GPSAltitude : null };
  }

  root.NBEXIF = { parse };
})(typeof window !== 'undefined' ? window : globalThis);
