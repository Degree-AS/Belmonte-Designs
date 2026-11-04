# Core Beverages — design (proposal)

Live prototype: https://degree-as.github.io/Belmonte-Designs/core/
Design system: https://degree-as.github.io/Belmonte-Designs/core/design-system.html

Core is a new theme for the belmonte frontend. Like Bottinor and Provenance, the prototype uses **only components
that already exist in the app**: implementing it means adding a `core` entry to the theme style maps.

Source material: the logo package (PNG exports and `Logo Core Beverages.ai`) and, from the review on 2026-11-04, the
client's producer list with descriptions, the company text and the bios of the two main contacts. No colours or
typefaces were specified. **Ink `#0B0F0F` and Mist `#E0E1D8` are the colours used in the logo files**; the other
colours and the typefaces are proposals.

**Core sells spirits, not wine** (client, 2026-11-04). The wine-list positioning below was replaced in that review;
see "Review 2026-11-04".

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

- **Positioning (client text):** a curated portfolio of spirits "with a soul and a clear origin", from heritage houses
  to independent craft producers, for the Norwegian trade and Vinmonopolet.
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
| `blocks/banner` | Centred title, deep Ink overlay; home hero image is the Graphite landscape with agave fields (`assets/hero-landscape.svg`) | default |
| `blocks/intro` | Default left layout, Amber bar before the label | default |
| `blocks/rich-text`, `blocks/quote` | Upright Archivo quotes with Amber rule | — |
| `blocks/producer-list` | Box outline on hover instead of underline | pinnacle |
| `blocks/counter` | Adjacent framed counters | bona-fide / pinnacle |
| `blocks/newsletter` | Ink panel, Amber action | — |
| `ProductTile` | Framed Chalk card, Ink frame on hover | pinnacle |
| Products page | Framed filter accordion, open/hover state inverted to Ink, Ink filter tags | pinnacle / bona-fide |
| `ProductDetail` | Image left, **framed section with internal rules**, Amber Vinmonopolet button; default section order | magma layout + pinnacle frame |
| `AboutProducer` | Ink band, Amber label | magma |
| `SingleProducer` | Row inverts to Ink on hover, **no hover image** (client 2026-11-04) | provenance |
| `blocks/employee` | Main contacts as alternating rows (picture left, then right), then the sales team as tiles | bottinor |
| `ContactView` | Main contacts first, then the sales team, as two labelled groups | — |
| `ArticleTile` | Framed card, ruled title | pinnacle / bona-fide |
| `TeamMemberTile` | Framed tile, image ruled off | pinnacle |

## Code registration needed besides style maps

Same as any new theme: `ThemeKey` + `THEME_KEYS`, hostname in `theme-resolver.ts`, fonts in `src/fonts/index.ts`,
a `[data-domain="core"]` block in `globals.css`, the brand SVG in `brand-renderer.tsx`, the arrow in
`themed-actions-elements.tsx`, `core` in the group-logo branch of `logo-renderer.tsx`, entries in the
`Record<ThemeKey, …>` maps (cookie consent, GA, draft bar), and `domainOrder` in `TeamsView`.
In Crystallize: a `/core` folder (home, layout, articles, team, contact) and a `publishInDomains_Core` field on producers.

## Open questions for the client

- Brand colours and typefaces: everything except Ink and Mist is a proposal. In the review the client liked the
  black-and-white look with one colour that lights up the front page (Amber today).
- Only PNG logos were supplied; vector artwork is needed.
- All website copy will be rewritten by the client (English first; Norwegian/English to be decided). The home copy is
  written from the client's company text; articles and the sales team are samples.
- Spelling of Sabrina's surname: the client's bio text has "Spinicic-Stuvland", Degree has "Spincic-Stuvland" (used).

## Review 2026-10-27

Core was not discussed in the review (time ran out). In the meeting the group said all three new sites should start
from the Magma home layout.

## Review 2026-11-04 (Tor Arne Fuglestveit, Sabrina Spincic-Stuvland, Degree)

Agreed in the meeting and built in the prototype:

- **Core sells spirits, not wine.** Copy, products, producers, articles and placeholder art were changed to spirits.
- Producers: the 15 from the client's list, with the client's English descriptions. Key facts on the producer page
  are Founded, Based in and Known for (producer `attributes.properties`).
- Products: real products of these producers as listed at Vinmonopolet (name, number, price, volume, alcohol and
  photo, checked 2026-11-04), one or two per producer. Brother's Bond is not at Vinmonopolet and keeps the drawn
  bottle (the agreed fallback). The full list comes from the client.
- Home hero: title **"Quality at the heart of everything we do."** (from Sabrina by email after the meeting, "Core —
  quality at the heart of everything we do."; the logo above supplies "Core"), intro "Spirits with a soul and a clear
  origin, curated by people who know the trade." (proposal). Image: the original Graphite landscape with **agave
  fields instead of vine rows** ("perfekt"). Busier options (back bar, apothecary shelves, botanical plates, photos
  around the title) were tried and dropped as "too much".
- No cognac in Core's own copy.
- Team: Tor Arne Fuglestveit (Portfolio Director) and Sabrina Spincic-Stuvland (Managing Director) first, with
  bios, alternating left and right; then the sales team as tiles with email and phone only, and "Meet the team".
  The contact page shows the same two groups.
- News stays: mostly new agencies (producers) and Vinmonopolet tenders. Newsletter stays.
- Producers page: no hover image.
- **No links to producers' websites** (alcohol law: links and QR codes to producers count as advertising; the client
  had them before and removed them).

Needs app/CMS work (shown in the dev view as "NEW FIELD"):

- `employees`: choose which employee, picture on the right, several employees as tiles plus a team link.
- Contact page: the employee list in labelled groups (main contacts, sales team).
- Product taste profile: the app's meters are the wine ones (Tannins, Oak…); spirits need their own dimensions.

Data and next steps:

- The client sends a Word document with screenshots and comments, producer images in one folder per producer
  ("Bilde 1" for the hero, "Bilde 2" etc. for story images; producers with several brands can have more, one story
  section per brand) and the product list.
- Core is not yet its own company in the ERP (F&O); its products are under Belmonte Wine for You until Core has its
  approvals. Until then Degree loads the products into Crystallize manually (with AI); about 50 more come in the new
  year. Product photos come from Vinmonopolet by product number.
- The sales team's details are on Belmonte's website (in Norwegian).
