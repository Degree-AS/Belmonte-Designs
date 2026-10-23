# Bottinor Wine Merchant — design

Live prototype: https://degree-as.github.io/Belmonte-Designs/bottinor/
Design system: https://degree-as.github.io/Belmonte-Designs/bottinor/design-system.html

Bottinor is a new theme for the belmonte frontend. The prototype is built **only from components that already
exist in the app**, so implementing it means adding a `bottinor` entry to the theme style maps. No new components,
CMS shapes or fields.

Source material: *Bottinor Website Brand Essentials* (September 2026), the logo package, the website copy
(`tekst_til_nettsiden.docx`) and the current one-page site at bottinor.com.

## Dev view

The prototype has a **Dev view** toggle in the bottom bar (or open `index.html?dev`). It outlines every element and labels it:

- **orange:** the Crystallize shape, block or piece and the app component that renders it, e.g. `domain › blocks › introModule → blocks/intro`
- **blue:** the field behind an element, e.g. `shortDescription`, `priceVariants › vinmonopolet-price`

Hover an outlined element for the full field list. Page content is limited to what the shapes allow:
`domain` (home) blocks are bannerFullscreen, bannerGallery, introModule, groupImageModule, singleImageModule,
paragraphCollection, richTextModule, employees, producerList, latestArticles, newsletter; `article` blocks are
introModule, counterModule, singleImageModule, groupImageModule, paragraphCollection, richTextModule, quoteModule.

## Files

| File | What it is |
|---|---|
| `design-system.html` | Design system page: logo rules, colours with live contrast ratios, typography, spacing, icons and live component previews |
| `index.html` | Prototype entry. Pages are hash routes: `#home`, `#products`, `#p.<slug>`, `#producers`, `#pr.<slug>`, `#articles`, `#a.<slug>`, `#team`, `#contact` |
| `assets/tokens.css` | Colour, font and type-scale tokens (CSS custom properties) |
| `design-tokens.json` | The same tokens as JSON |
| `assets/bottinor.css` | Theme styles, one section per app component (component path in each section header) |
| `assets/app.js` | Sample data, placeholder illustrations and page markup for the prototype |
| `logos/` | Brand logo PNGs: full, wordmark, monogram in Bottle Green, Greige and Ink |

## Tokens

- **Colours:** Greige `#F3F2F0` page background; Bottle Green `#162A19` brand sections, headings, primary actions;
  Ink `#171717` body text; Ivory `#F0F0E5` cards and panels. Supporting colours (Burgundy, Grape Blue, Cellar Brown,
  Cork, Lees/Champagne, Sage, Clay, Rosé Dust) are used sparingly for accents.
- **Fonts:** Newsreader (theme font, headings and storytelling) and Manrope (UI text, in the place of `font-global`).
  Both are on Google Fonts and include Norwegian characters.
- **Type scale:** display 72 / h1 64 / h2 44 / h3 32 / large 26 / medium 21 px on desktop, per brandbook p.07.

## Components

Each row is one entry in an existing `*.styles.ts` map (or the `[data-domain]` block in `globals.css`).

| App component | Bottinor styling |
|---|---|
| `layout/header` + `LogoRenderer` | Belmonte group logo + "part of Belmonte Beverage Group" left (same branch as arcade/magma/bona-fide), Bottinor wordmark centred, header links + MENU right. Overlaid in Greige on the home banner. |
| `HeaderDialog` | Bottle Green background, Greige Newsreader links in the 4/6 column. |
| `layout/footer` | Bottle Green, Greige text. Primary links stacked left in Newsreader with a growing underline; secondary links in one row; logo, wordmark, copyright on the bottom row. |
| `ThemedLink` / arrow | Thin diagonal arrow, 1px underline, arrow nudges up-right on hover. Needs a Bottinor arrow SVG in `themed-actions-elements.tsx`. |
| `blocks/banner` | Centred h1 + intro over a full-bleed photo with a dark green gradient. |
| `blocks/intro` | Label with a short rule on the left, Newsreader intro with first-line indent, body in two columns, link row above a hairline. |
| `blocks/group-image`, `single-image` | Default sizes, no frames. |
| `blocks/paragraph-collection` | Hairline rows, uppercase label left, text right. |
| `blocks/quote` | Centred italic Newsreader with a short Bottle Green rule above. |
| `blocks/products` + `ProductTile` | Ivory card; on hover the card warms to Lees and the bottle lifts (`hover:[&_img]:-translate-y-1.5`). |
| `blocks/producer-list` | Names inline in Newsreader, Cork slash separators (`::before`), underline grows on hover. |
| `blocks/counter` | Value in Newsreader above the label, hairline on top, left aligned. |
| `blocks/employee` | Default layout; label with rule, hairline above the bio. |
| `blocks/latest-articles` + `ArticleTile` | Square thumbnails with a slow zoom on hover. |
| `blocks/newsletter` | Ivory panel instead of the grey one. |
| `blocks/rich-text` | 760px measure, drop cap on the first paragraph, quotes with a Bottle Green left rule. |
| Products page, filters, select | Hairline accordion, checkbox filled Bottle Green when selected, filter tags in Lees, underline select. |
| `ProductDetail` | Image left (sticky, Ivory panel), section right, as magma's container. Section order is the default branch of `product-detail.tsx`. Taste meters in Bottle Green, table zebra in a Lees tint. |
| `AboutProducer` | Bottle Green band, square image left, text right (as magma's row layout). |
| `RelatedProducts` | "Wines from …" label, standard product list. |
| Producers page + `SingleProducer` | Hairline rows: name / country / district; hover slides text and shows the producer image. |
| `ProducerDetail` | Centred header (default branch without the side "All wines" link), full-width hero, indented Newsreader intro, counter metrics in 3 columns, story rows. |
| `ArticleTitle` | Centred h1 + Newsreader subtitle. |
| `TeamView` + `TeamMemberTile` | Default (non-belmonte) TeamView; tile with hairline under the role. |
| `ContactView` | IntroModule + team tiles + "View all team members". |

## Code registration needed besides style maps

Adding any theme also needs: `ThemeKey` + `THEME_KEYS`, hostname in `theme-resolver.ts`, fonts in `src/fonts/index.ts`,
a `[data-domain="bottinor"]` block in `globals.css`, the brand SVG in `brand-renderer.tsx`, the arrow in
`themed-actions-elements.tsx`, `bottinor` in the arcade/magma/bona-fide branch of `logo-renderer.tsx`,
and `domainOrder` in `TeamsView`.

## Placeholders in the prototype

- Wines, producers, articles, prices and Vinmonopolet numbers are sample content.
- The sales team names come from bottinor.com; emails and phone numbers are placeholders.
- Producer and portrait photos are line illustrations marked "Producer hero" / "Portrait". Real photography is needed.
- The SVG logos in the delivered package were empty (stripped by a mail filter). The prototype uses PNGs;
  SVGs are needed for `bottinor-brand.tsx`.
