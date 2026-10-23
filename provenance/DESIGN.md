# Provenance Wines — design (proposal)

Live prototype: https://degree-as.github.io/Belmonte-Designs/provenance/
Design system: https://degree-as.github.io/Belmonte-Designs/provenance/design-system.html

Provenance is a new theme for the belmonte frontend. Like Bottinor, the prototype uses **only components that
already exist in the app**: implementing it means adding a `provenance` entry to the theme style maps.

Source material: the logo package only (`LOGO_PROVENANCE_WINES_OVERVIEW.pdf/.ai` and PNG exports).
**Charcoal `#474545` and Blush `#EEBEB1` are measured from the last page of the PDF.** Everything else
(supporting colours, typefaces, copy, sample content) is a proposal for the client to confirm.

## Files

| File | What it is |
|---|---|
| `design-system.html` | Design system page: logo, colours with live contrast ratios, typography, shapes, icons, component previews |
| `index.html` | Prototype entry, same routes as Bottinor; `?dev` turns on the dev view |
| `assets/tokens.css`, `design-tokens.json` | Tokens (CSS custom properties and JSON) |
| `assets/provenance.css` | Theme: shared component base + a "Provenance variants" section per component |
| `assets/brand.js` | Content and sample data (home and article as CMS block lists) |
| `logos/` | Supplied PNG exports (renamed) and the PDF's last page as reference |

The page markup comes from `../shared/prototype.js`, shared by every brand.

## Proposed direction

- **Palette:** Porcelain page ground, Charcoal for dark bands (header menu, footer, about-producer, newsletter), Blush as
  the signature accent on Charcoal. Rosewood replaces Blush for text on light backgrounds, because Blush fails contrast there.
- **Type:** Fraunces (soft serif, light 300) for headings; Instrument Sans for body and UI. Labels are Fraunces italic
  instead of uppercase, echoing the handwritten logo.
- **Shape:** an arch (`rounded-t-full`) on portrait images, pill shapes for the Vinmonopolet link and filter tags,
  everything else square. Centred compositions.

## Components

Every row is a `provenance` entry in an existing `*.styles.ts` map, choosing among layouts other themes already use.

| App component | Provenance styling | Precedent |
|---|---|---|
| `layout/header` + `LogoRenderer` | Group logo + "part of…" left, signature wordmark centred (196 px), links + MENU right; Blush wordmark over the home banner | arcade/magma |
| `HeaderDialog` | Charcoal, centred Blush links | arcade (centred) |
| `layout/footer` | Charcoal, centred Blush primary links, centred secondary links | default footer |
| `ThemedLink` | Long horizontal arrow, 2px Blush underline | new arrow SVG |
| `blocks/banner` | Centred title over brand image, soft charcoal overlay | default |
| `blocks/intro` | `textAlignment: center`, one column, italic label with Blush dot | CMS field |
| `blocks/group-image` | Arch on the small image | — |
| `blocks/rich-text`, `blocks/quote` | Centred light italic quotes, Rosewood drop cap | — |
| `blocks/producer-list` | Centred names with Blush dot separators | — |
| `blocks/counter` | Centred values, no rules | belmonte/arcade (centred) |
| `blocks/employee` | Arch portrait | — |
| `blocks/newsletter` | Charcoal panel | — |
| `ProductTile` | Shell card, warms to Blush Soft on hover | — |
| Products page | Pill filter tags, rounded checkboxes | — |
| `ProductDetail` | **One centred column**, arch image, pill Vinmonopolet link, Blush zebra table; default section order | belmonte/arcade |
| `AboutProducer` | Charcoal band, **stacked and centred**, arch image, Blush name | belmonte/arcade |
| `SingleProducer` | Rosewood on hover, arch hover image | — |
| `ProducerDetail` | Default centred header, italic centred intro | belmonte/arcade |
| `ArticleTile` | 4:5 arch thumbnails | — |
| `TeamMemberTile` | Arch portrait, centred text | arcade (centred) |

## Code registration needed besides style maps

Same as any new theme: `ThemeKey` + `THEME_KEYS`, hostname in `theme-resolver.ts`, fonts in `src/fonts/index.ts`,
a `[data-domain="provenance"]` block in `globals.css`, the signature SVG in `brand-renderer.tsx`, the arrow in
`themed-actions-elements.tsx`, `provenance` in the arcade/magma/bona-fide branch of `logo-renderer.tsx`,
and `domainOrder` in `TeamsView`.

## Open questions for the client

- PDF and PNG exports disagree: Charcoal `#474545` vs `#000000`, Blush `#EEBEB1` vs `#F8BAAC`. Which are the master values?
- Confirm the proposed supporting colours and typefaces.
- The SVG logos in the package were empty (stripped by a mail filter); vector artwork is needed.
- No website copy, photography or team details were supplied. Growers, wines, articles and people in the prototype are samples.
