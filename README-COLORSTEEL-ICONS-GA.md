# Colorsteel Swatches + Icons + CTA Events Patch

This patch adds:
- **Approximate Colorsteel® palette** (`data/colorsteel.ts`) for on‑screen swatches
- **Wind/Rain/Shield icons** per profile category
- **GA4 event tracking** for Showcase CTAs (`select_content`, content_type=`showcase_cta`)

## Install
1) Copy `data/colorsteel.ts` and `components/icons/*` and **replace** your `components/ShowcasePlus.tsx` with this patch's version.
2) Ensure GA is set up (from previous patch): add `NEXT_PUBLIC_GA_ID` in your env and include `<GA/>` in `app/layout.tsx`.
3) Run:
```bash
npm i
npm run dev
```

## Notes
- HEX codes are **approximations** derived from public swatches (Resene/Dulux/ArchiPro). The official COLORSTEEL® site advises choosing from physical samples.
- You can replace the HEX values with your approved brand palette anytime in `data/colorsteel.ts`.
