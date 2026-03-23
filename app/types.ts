export interface Cabinet {
  id: number;
  name: string;
  w: number;
  h: number;
  d: number;
  qty: number;
}

export interface MaterialSettings {
  sheetW: number;
  sheetH: number;
  sheetPrice: number;
  hdfW: number;
  hdfH: number;
  hdfPrice: number;
  kerf: number;
  thickness: number;
  hourRate: number;
}

export interface Element {
  name: string;
  w: number;
  h: number;
  mat: 'wiórowa' | 'pilśniowa';
  color: string;
  cab: string;
}

export interface PlacedPiece extends Element {
  x: number;
  y: number;
}

export interface Sheet {
  pieces: PlacedPiece[];
  curX: number;
  curY: number;
  stripH: number;
  eff?: number;
}

export interface PackResult {
  n: number;
  data: Sheet[];
}

export interface CalculationResult {
  elements: Element[];
  wiRes: PackResult;
  hdfRes: PackResult;
  laborH: number;
  laborCost: number;
  grand: number;
}
