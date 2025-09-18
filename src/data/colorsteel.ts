/**
 * COLORSTEEL® names mapped to approximate HEX swatches for on‑screen preview.
 * IMPORTANT: Official guidance recommends viewing real metal samples.
 * Sources: COLORSTEEL® 2025 Colour Chart (names) + Resene/Dulux/ArchiPro swatch RGB approximations.
 */
export const COLORSTEEL = {
  Ebony: "#181818",          // Resene swatch representation
  FlaxPod: "#3a3a38",        // Dulux/Resene approximations vary with finish
  "Grey Friars": "#4a4f59",
  "Windsor Grey": "#3a3f46",
  "Thunder Grey": "#6a6f76",
  Slate: "#353b41",
  Ironsand: "#43413F",       // ArchiPro RGB 67,65,63 ≈ #43413F
  "Gull Grey": "#c7c9c7",
  "Sandstone Grey": "#a9a39a",
  Karaka: "#2a3a2e",
  Scoria: "#6a3b33",
  "Pioneer Red": "#9c3a31",
  Cloud: "#dee2e6",
  Lichen: "#7a7055"
} as const;

export type ColorsteelName = keyof typeof COLORSTEEL;
export const popularPalette: ColorsteelName[] = [
  "Ebony","FlaxPod","Grey Friars","Thunder Grey","Windsor Grey","Slate","Ironsand","Gull Grey","Sandstone Grey","Karaka","Scoria","Pioneer Red","Cloud","Lichen"
];
