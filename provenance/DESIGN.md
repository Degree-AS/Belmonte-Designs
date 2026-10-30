# Provenance Wines — design

Live prototype: https://degree-as.github.io/Belmonte-Designs/provenance/
Design system: https://degree-as.github.io/Belmonte-Designs/provenance/design-system.html

Provenance is a new theme for the belmonte frontend. Like Bottinor, the prototype uses **only components that
already exist in the app**: implementing it means adding a `provenance` entry to the theme style maps.

Source material:

- **Provenance Wines Visual Identity**, proposal v1.0, 29 October 2026 ("A sense of place", 32 pages; received
  2026-10-30). It defines the signature, colours, typography, photography, tone and the core introduction text.
- The logo package (`LOGO_PROVENANCE_WINES_OVERVIEW.pdf/.ai`, PNG exports); the SVGs arrived empty.
- Photos chosen by the client (2026-10-30) to show the direction — see "Photography" below.

## Client brief (2026-10-30)

Keep the website layout as it is (agreed on 2026-10-27) and apply the new visual identity (logo, colours, fonts),
with real photos as a general idea of the site. Done as follows:

- **Layout: unchanged.** Same pages, blocks, order and alignment as agreed on 2026-10-27.
- **Visual identity: replaced.** The earlier proposal (Charcoal/Blush, Fraunces + Instrument Sans, arch-shaped
  images) is gone; everything now follows the brand book.
- **Photos:** illustrations replaced by photographs everywhere except the team portraits (no team photos yet) and
  the product bottles (illustrated, as before).

## Visual identity applied

- **Colours** (brand book p.12–14, 29): Warm Ivory `#F7F3EF` page ground; Forest Green `#1B2B1D` for headlines,
  navigation, dark panels and buttons; Signature Pink `#F5A092` for the logo and controlled emphasis, only on Forest.
  Supporting: Charcoal `#454342` body text, Earth Red `#8B463B` links and emphasis, Sage `#A9B1A2` quiet panels,
  Stone `#E8E3DF` dividers and secondary surfaces. Pink is never used for text on Ivory (1.84:1).
- **Type** (p.15–16): Manrope for headlines (Medium), body (Regular 18/28), labels (Semibold 12 px uppercase) and data;
  Newsreader as the editorial accent — slogan/introduction in the hero, intro standfirsts, quotations, producer intro.
- **Logo** (p.07–11): Pink on Forest (footer, menu, design system) and Forest on light (header); Earth Red as the warm
  alternative. Recoloured from the supplied PNG to the brand book's HEX values. "Part of Belmonte Beverage Group" stays
  as the endorsement in the header.
- **Shapes:** square images and buttons, thin rules; Earth Red accent rules on labels and under the producer name
  (from the producer profile, p.23). Buttons Forest with Ivory text; links Earth Red with an underline (p.22).
- **Copy:** the "Our story" text on home is the brand book's core introduction (p.05); the slogan is used exactly.
  All other text is placeholder in the brand's voice.

## Photography

The photos are **art-direction placeholders, not the final website photography** (client: "this will not be the final
photos"). They are not portraits of the sample producers on the site.

| File | Source |
|---|---|
| `assets/photos/lqp-*.jpg` | lesquatrepiliers.com (Les Quatre Piliers; several credited Marco Strullu on the site) |
| `assets/photos/lqp-house-vines.jpg`, `curley-horse-tower.jpg`, `boxler-village.jpg`, `cecillon-portrait.jpg`, `cecillon-horse.jpg`, `cecillon-terraces.jpg`, `desloges-portrait.jpg` | Client's photo folder (filemail, 2026-10-30) |

Not used: `hammeken ff.jpg` — Hammeken Cellars is listed in the brand book as a prospect, and prospects must not be
shown as partners (p.24). Rights and producer approval are needed before any public use; the prototype is published
on GitHub Pages, so treat the link as internal.

## Files

| File | What it is |
|---|---|
| `design-system.html` | Design system page: logo, colours with live contrast ratios, typography, shape, icons, photography, component previews |
| `index.html` | Prototype entry, same routes as the other brands; `?dev` turns on the dev view |
| `assets/tokens.css`, `design-tokens.json` | Tokens (CSS custom properties and JSON), HEX values from the brand book |
| `assets/provenance.css` | Theme: shared component base + a "Provenance variants" section per component |
| `assets/brand.js` | Content, sample data and photo assignments (home and article as CMS block lists) |
| `assets/wordmark-{forest,pink,earth,white}.png` | Signature recoloured to the brand colours |
| `assets/photos/` | Placeholder photography (see above) |
| `logos/` | Supplied PNG exports (renamed) and the old overview's last page, reference only |

The page markup comes from `../shared/prototype.js`, shared by every brand. Producer photos use the engine's
`producer.photo` / `producer.storyPhoto` fields (illustration fallback).

## Components

Every row is a `provenance` entry in an existing `*.styles.ts` map, choosing among layouts other themes already use.

| App component | Provenance styling | Precedent |
|---|---|---|
| `layout/header` + `LogoRenderer` | Ivory, group logo + "part of…" left, Forest signature centred (196 px), MENU only on the right | arcade/magma |
| `HeaderDialog` | Forest, centred Ivory Manrope links, Pink on hover | arcade (centred) |
| `layout/footer` | **Forest `#1B2B1D`** (brand structure colour; replaces the interim Belmonte green), centred links, Pink signature | pinnacle (dark green + pink) |
| `blocks/banner-gallery` | Home hero: Forest headline, Newsreader intro in Earth Red, four photographs | magma |
| `ThemedLink` | Earth Red with underline on light, Pink on Forest; long horizontal arrow | new arrow SVG |
| `blocks/intro` | `textAlignment: center`, uppercase label with Earth rule, Newsreader standfirst | CMS field |
| `blocks/group-image`, `single-image` | Square photographs | default |
| `blocks/rich-text`, `blocks/quote` | Newsreader quotations, Earth rule | — |
| `blocks/producer-list` | Centred Manrope names, Earth dot separators; two links under the names | — |
| `blocks/counter` | Centred values, no rules | belmonte/arcade |
| `blocks/employee` | Tiles with centred text | — |
| `blocks/newsletter` | Forest panel, Pink action | — |
| `ProductTile` | Stone card, white on hover | — |
| Products page | Forest filter tags with Ivory text, Forest checkboxes | — |
| `ProductDetail` | **One centred column**, square image, Forest Vinmonopolet button, Stone zebra table; default section order | belmonte/arcade |
| `AboutProducer` | Forest band, **stacked and centred**, photograph, Pink name | belmonte/arcade |
| `SingleProducer` | Earth Red on hover, **no hover image** | bona-fide |
| `ProducerDetail` | Name left with a rounded "All wines" pill right, #Country \| #District with Earth rule, Newsreader intro with indent, key facts as adjacent framed boxes | bona-fide |
| `ArticleTile`, `ArticleTitle` | 4:5 photographs; Newsreader subtitle in Earth Red | — |
| `TeamMemberTile` | Centred text | arcade |

## Code registration needed besides style maps

Same as any new theme: `ThemeKey` + `THEME_KEYS`, hostname in `theme-resolver.ts`, fonts in `src/fonts/index.ts`
(Manrope and Newsreader — both already used by Bottinor), a `[data-domain="provenance"]` block in `globals.css`, the
signature SVG in `brand-renderer.tsx`, the arrow in `themed-actions-elements.tsx`, `provenance` in the
arcade/magma/bona-fide branch of `logo-renderer.tsx`, and `domainOrder` in `TeamsView`.

Note: the `feature/provenance-theme-latest-articles` branch of the belmonte app was built on the earlier proposal
(Fraunces, Blush, arches) and needs the same update.

## Review 2026-10-27 (Romain, Christoffer, Degree)

Agreed in the meeting and still built this way:

- Home follows the **Magma** layout: banner-gallery hero → Our producers (intro + names + "Meet all producers" and
  "See full selection") → Our story → single image → What we do + group image → Our team (tiles + "Meet the team")
  → latest articles → newsletter.
- Header: MENU only. Footer: dark green with a reminder of Belmonte (now the brand's Forest Green).
- Producers page: rows without the hover image. Producer page: as Bona Fide's producer page.
- Products page and product page: kept as they were.
- Wording: "producers", never "growers".
- Team: a slot for the colleague who joins in January 2027 (name and role to come).

Needs app/CMS work (shown in the dev view as "NEW FIELD"):

- `producerList`: a second link next to `allProducersLink` (full selection).
- `employees` block on home: several employees as tiles plus a link to the team page.
- `banner-gallery` exists in the app (magma) but must be allowed for the provenance domain.
- Team page grouping (management team and the rest of the team) needs a group field. Not built.

## Open questions for the client

- **Alignment:** the brand book prefers left-aligned paragraphs and shared edges (p.16–17); the agreed layout centres
  the intros, product page and footer. Keep the agreed layout or left-align?
- **Footer colour:** Forest `#1B2B1D` now replaces the interim Belmonte green `#162A19` — confirm.
- **Logo:** the master SVG is needed for the app.
- **Photography:** final photography, rights and producer approval; team portraits.
- **Content:** real producers, wines, articles and people in Crystallize; the rest of the website copy.
