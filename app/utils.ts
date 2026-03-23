import { Element, Sheet, PackResult, PlacedPiece } from './types';

export function packSheets(elems: Element[], sw: number, sh: number, kerf: number): PackResult {
  const sorted = [...elems].sort((a, b) => b.h - a.h);
  const sheets: Sheet[] = [];

  sorted.forEach(el => {
    let placed = false;
    for (const s of sheets) {
      if (s.curX + el.w <= sw && s.curY + el.h <= sh) {
        s.pieces.push({ ...el, x: s.curX, y: s.curY });
        s.curX += el.w + kerf;
        s.stripH = Math.max(s.stripH, el.h);
        placed = true;
        break;
      }
      const ny = s.curY + s.stripH + kerf;
      if (ny + el.h <= sh && el.w <= sw) {
        s.curY = ny;
        s.curX = el.w + kerf;
        s.stripH = el.h;
        s.pieces.push({ ...el, x: 0, y: ny });
        placed = true;
        break;
      }
    }
    if (!placed) {
      sheets.push({
        pieces: [{ ...el, x: 0, y: 0 } as PlacedPiece],
        curX: el.w + kerf,
        curY: 0,
        stripH: el.h,
      });
    }
  });

  sheets.forEach(s => {
    const used = s.pieces.reduce((a, p) => a + p.w * p.h, 0);
    s.eff = Math.round((used / (sw * sh)) * 100);
  });

  return { n: sheets.length, data: sheets };
}
