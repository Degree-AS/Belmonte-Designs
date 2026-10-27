# Core Beverages — design (proposal)

Live prototype: https://degree-as.github.io/Belmonte-Designs/core/
Design system: https://degree-as.github.io/Belmonte-Designs/core/design-system.html

Core is a new theme for the belmonte frontend. Like Bottinor and Provenance, the prototype uses **only components
that already exist in the app**: implementing it means adding a `core` entry to the theme style maps.

Source material: the logo package only (PNG exports and `Logo Core Beverages.ai`). No colours, typefaces or copy
were specified. **Ink `#0B0F0F` and Mist `#E0E1D8` are the colours used in the logo files**; everything else is a
proposal, including the positioning.

## Files

| File | What it is |
|---|---|
| `design-system.html` | Design system page: logo, colours with live contrast ratios, typography, shapes, icons, component previews |
| `index.html` | Prototype entry, same routes as the other brands; `?dev` turns on the dev view |
| `assets/tokens.css`, `design-tokens.json` | Tokens (CSS custom properties and JSON) |
| `assets/core.css` | Theme: shared component base + a "Core variants" section per component |
| `assets/brand.js` | Content and sample data (home and article as CMS block lists) |
| `assets/full-*`, `wordmark-*`, `monogram-*` | Logo cut from the transparent PNG: full logo, CORE BEVERAGES wordmark and CB monogram, in Ink and Mist |
| `logos/` | Supplied PNG exports, renamed and resized to 1600 px |

## Proposed direction

- **Positioning (to confirm):** the everyday core of Norwegian wine lists and shelves — house wines and a dependable
  core range at fair prices, from producers who deliver the same quality every vintage.
- **Palette:** Mist page ground, Ink for the header (dark on every page), footer, menu and dark bands. Chalk for cards,
  Graphite as a second dark, Slate for secondary text. **Amber `#D4882B`** is the single accent, used for rules,
  underlines and the one call to action per page; it is never used for text on light backgrounds.
- **Type:** Archivo semi-expanded (width 112%) for headings and labels, echoing the wide CORE wordmark; labels are
  uppercase with wide tracking like BEVERAGES. Hanken Grotesk for body and UI.
- **Shape:** square corners and 1 px Ink frames around tiles, counters, filters and the product section.

## Components

Every row is a `core` entry in an existing `*.styles.ts` map, choosing among styles other themes already use.

| App component | Core styling | Precedent |
|---|---|---|
| `layout/header` + `LogoRenderer` | Ink header on every page, group logo + "part of…" left, Mist wordmark centred | CMS header colour Black |
| `HeaderDialog` | Ink, Mist links in Archivo, Amber on hover | — |
| `layout/footer` | Ink, Archivo primary links | default footer |
| `ThemedLink` | Uppercase 12 px, Amber underline, bold arrow | new arrow SVG |
| `blocks/banner` | Centred title, deep Ink overlay | default |
| `blocks/intro` | Default left layout, Amber bar before the label | default |
| `blocks/rich-text`, `blocks/quote` | Upright Archivo quotes with Amber rule | — |
| `blocks/producer-list` | Box outline on hover instead of underline | pinnacle |
| `blocks/counter` | Adjacent framed counters | bona-fide / pinnacle |
| `blocks/newsletter` | Ink panel, Amber action | — |
| `ProductTile` | Framed Chalk card, Ink frame on hover | pinnacle |
| Products page | Framed filter accordion, open/hover state inverted to Ink, Ink filter tags | pinnacle / bona-fide |
| `ProductDetail` | Image left, **framed section with internal rules**, Amber Vinmonopolet button; default section order | magma layout + pinnacle frame |
| `AboutProducer` | Ink band, Amber label | magma |
| `SingleProducer` | Row inverts to Ink on hover | — |
| `ArticleTile` | Framed card, ruled title | pinnacle / bona-fide |
| `TeamMemberTile` | Framed tile, image ruled off | pinnacle |

## Code registration needed besides style maps

Same as any new theme: `ThemeKey` + `THEME_KEYS`, hostname in `theme-resolver.ts`, fonts in `src/fonts/index.ts`,
a `[data-domain="core"]` block in `globals.css`, the brand SVG in `brand-renderer.tsx`, the arrow in
`themed-actions-elements.tsx`, `core` in the group-logo branch of `logo-renderer.tsx`, entries in the
`Record<ThemeKey, …>` maps (cookie consent, GA, draft bar), and `domainOrder` in `TeamsView`.
In Crystallize: a `/core` folder (home, layout, articles, team, contact) and a `publishInDomains_Core` field on producers.

## Open questions for the client

- Brand colours and typefaces: everything except Ink and Mist is a proposal.
- Positioning and assortment: is Core the everyday/house-wine range? Spirits, beer or bag-in-box too?
- Only PNG logos were supplied; vector artwork is needed.
- No copy, photography or team details were supplied. Producers, wines, articles and people are samples.

## Review 2026-10-27

Core was not discussed in the review (time ran out). It still has its original proposal. In the meeting the group
said all three new sites should start from the Magma home layout; the `bannerGallery` block and the other new
prototype options (see `CLAUDE.md`) are available for Core when it is reviewed.
