# CLAUDE.md

Guidance for Claude Code (and people) editing this repository.

## What this repo is

Static HTML/CSS/JS **design prototypes** for the brand sites of Belmonte Beverage Group (BBG). All BBG brands run on
one shared Next.js frontend (the private `belmonte` app, Crystallize CMS). Each brand is a **theme** of that app: same
components and same CMS content model, different styles. These prototypes show a new brand's theme to the client
before it is built in the app.

Published on GitHub Pages from `main` (repo root): https://degree-as.github.io/Belmonte-Designs/

**No build, no package.json, no framework, no tests.** Everything is a plain file. Working language: English
(copy, code comments, docs).

## The one rule

**A brand may only change styles, never structure.** Every element on a prototype page must correspond to a
component and CMS field that already exist in the belmonte app, so that implementing the brand later means adding a
theme entry to the app's style maps, not building new components.

- Do not add sections, fields, buttons or page elements that the app does not have (no contact forms, no category
  badges on article tiles, no "share" rows, no extra labels under page titles, etc.).
- Different looks are fine when they are pure CSS: colours, fonts, spacing, borders, radii, alignment, hover effects,
  pseudo-elements (`::before` counters/dots/rules), and choosing a layout another app theme already uses
  (e.g. a centred single-column product page as belmonte/arcade, framed tiles as pinnacle/bona-fide).
- If a request needs new structure, say so and explain it would need a new app component or CMS field. Do not
  build it silently.

## Repository layout

```
index.html              Brand list (landing page on GitHub Pages)
README.md
shared/prototype.js     Prototype engine shared by every brand (components, pages, router, dev view)
<brand>/                bottinor/, provenance/, core/
  index.html            Prototype entry: loads tokens.css, <brand>.css, assets/brand.js, ../shared/prototype.js
  design-system.html    Client-facing design system page (logo, colours, type, components…)
  DESIGN.md             Decisions, component-by-component mapping to the app, open questions
  design-tokens.json    Tokens as JSON (for developers)
  assets/tokens.css     Tokens as CSS custom properties (--<brand>-*)
  assets/<brand>.css    The theme (see "Theme CSS" below)
  assets/brand.js       Content + sample data for the engine (window.BRAND)
  assets/*.png|svg|jpg  Logos cut/recoloured for web, group logo, images
  logos/                Logo files as supplied by the client (renamed), reference only
```

Brand status: **bottinor** has a brand guide and real copy (from the client); **provenance** follows the client's
Visual Identity v1.0 (2026-10-30) with placeholder photography in `provenance/assets/photos/`; **core** is a proposal
(only logo files were supplied; colours, fonts, copy and all data are invented examples). Wines, sample producers,
articles and people are invented examples in every brand.

## How to run and check

Open `<brand>/index.html` directly in a browser (`file://` works), or serve the repo root:

```bash
python3 -m http.server 8000
```

then browse to `http://localhost:8000/bottinor/`. Pages are hash routes:
`#home`, `#products`, `#p.<wine-slug>`, `#producers`, `#pr.<producer-slug>`, `#articles`, `#a.<article-slug>`,
`#team`, `#contact`. The dark pill bar at the bottom is the prototype navigator (not part of the design);
`index.html?dev` (or the **Dev view** button) turns on the dev view.

For full-page screenshots without a browser window, headless Chrome works well:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --hide-scrollbars \
  --window-size=1440,6000 --virtual-time-budget=5000 --screenshot=/tmp/home.png "file://$PWD/core/index.html#home"
```

Headless Chrome ignores `#anchor` scrolling and has a minimum window width of ~500 px; check mobile layouts in a real
browser at 375 px instead. After any change, check every brand that shares the file you touched (see below).

## Architecture

### shared/prototype.js (the engine)

Reads `window.BRAND` (from `<brand>/assets/brand.js`) and renders the whole site into `#app`. It contains:

- **Components** mirroring the app: `productTile`, `articleTile`, `teamTile`, `counters`, `introModule`,
  `latestArticles`, header (`LogoRenderer` + `BrandRenderer` + header links + MENU), `menuDialog` (HeaderDialog),
  `footer`.
- **CMS blocks** (`BLOCKS`), rendered from block lists in `brand.js`, like the app's `blocks.tsx`.
- **Pages** (`pages.home`, `products`, `product`, `producers`, `producer`, `articles`, `article`, `team`, `contact`),
  each matching an app route/view.
- **Placeholder art**: `bottle()` (SVG wine bottles), `scene()` (landscape, cellar and flowing-line illustrations),
  `portrait()`, `meter()` (taste profile 0–12). Colours come from `BRAND.colors`.
- **Dev view** annotations and the hash router.
- It exposes `window.Proto` (helpers + data) so `design-system.html` can render live component previews.

The engine is shared: **a change here affects every brand.** Keep markup and class names stable; brands style them.
Only change the engine for things every brand needs (a component behaving like the app, a bug, a new data field).

### Components and their app counterparts

| Engine markup (class) | App component | CMS source |
|---|---|---|
| `.site-header` | `layout/header` + `LogoRenderer` + `BrandRenderer` | `layout › header` (HeaderPiece: headerLinks, menuLinks, color) |
| `.menu-dialog` | `layout/header/header-dialog` | HeaderPiece.menuLinks |
| `.site-footer` | `layout/footer` | `layout › footer` (FooterPiece: footerLinks, footerSecondaryLinks) |
| `.banner` | `blocks/banner` | bannerFullscreen (title, intro, image) |
| `.intro-module` | `blocks/intro` | introModule (label, intro, body, links, textAlignment) |
| `.group-image` | `blocks/group-image` | groupImageModule (primaryImage, secondaryImage, reverseOrder) |
| `.single-image` | `blocks/single-image` | singleImageModule |
| `.paragraphs .row` | `blocks/paragraph-collection` | paragraphCollection (title, body) |
| `.rich-text` | `blocks/rich-text` | richTextModule (text, textAlign) |
| `.quote-block` | `blocks/quote` | quoteModule (quote, attribution) |
| `.producer-names` | `blocks/producer-list` | producerList (allProducersLink) |
| `.employee` | `blocks/employee` | employees (label, employeeList → employee) |
| `.counters` | `blocks/counter` | counterModule, or producer `attributes.properties` |
| `.module-head` + `.article-list` | `blocks/latest-articles` | latestArticles (label, link) |
| `.newsletter` | `blocks/newsletter` | newsletter (formTitle, checkboxes) |
| `.p-tile` | `features/product-tile` | defaultProduct (name, productSubtype, country, volume, alcoholContent, priceVariants, firstImage) |
| `.a-tile` | `features/article/article-tile` | article (thumbnail, name, path/externalLink) |
| `.t-tile` | `features/team-members/team-member-tile` | employee (picture, name, roles, email, phone) |
| `.products-page`, `.filters`, `.tags`, `.sort` | products page, `product-filters`, `ui/select` | defaultProduct facets |
| `.pd`, `.pd-*`, `.spec-row`, `.pd-table` | `features/product-detail/*` | defaultProduct |
| `.about-producer` | `features/product-detail/about-producer` | parent producer (name, intro, hero) |
| `.producer-row` | `features/producer/single-producer` | producer (name, hero, Country, District) |
| `.producer-head`, `.producer-hero`, `.producer-intro`, `.story` | `features/producer-detail` | producer (name, hero, intro, attributes, story[]) |
| `.article-head` | `features/article/article-title` | article (title, subtitle) |
| `.team-tiles` | `views/team-view` | team-members › employee children |
| `.contact-view` | `views/contact-view` | contact (introModule, employeeList) |
| `.tlink` | `ui/themed-actions-elements` (ThemedLink + per-theme arrow) | — |

Product page section order is fixed (default branch of `product-detail.tsx`):
Title · KeyInfo · Characteristics · Price · Specification · About wine · Table · Attachments. Product tiles show no
region (the app's list query does not fetch it); the product page key info does.

### Which blocks each CMS shape allows

Home and article pages are lists of blocks in `brand.js`. The engine refuses blocks the shape does not allow
(it renders a visible warning instead), mirroring the app's discovery queries:

- **`domain` (home):** `banner`, `bannerGallery`, `intro`, `groupImage`, `singleImage`, `paragraphs`, `richText`,
  `employees`, `producerList`, `latestArticles`, `newsletter`
- **`article`:** `intro`, `counter`, `singleImage`, `groupImage`, `paragraphs`, `richText`, `quote`

Not on home: products, quote, counter and links blocks (they exist only on the generic `page` shape). Use a
`richText` block with a `<blockquote>` for a quote on home. Do not edit `ALLOWED` to get around this.
(`bannerGallery` is magma's `banner-gallery` hero, which the app already renders on a domain page.)

### Proposed options (prototype only, agreed in the 2026-10-27 client review)

These were built because the clients asked for them; each needs a CMS field or small app change before it can be
implemented, and the dev view labels them "NEW FIELD". Use them only where a brand's `DESIGN.md` says so.

- Any block: `band: "ivory" | "dark"`. Consecutive blocks with the same band share one full-width coloured section
  (`.band`).
- `intro`: `layout: "split"` (label + large statement left, body right), `layout: "media"` / `"media right"` with
  `image` (image left or right, optional `image.caption`). Line breaks in `lead` with `\n` (media layout).
- `producerList`: `links: [[text, href], …]` instead of `link`; no link at all if both are left out.
- `employees`: `heading` (shown instead of the name), or `tiles: n` (+ `skipLead`, `link`) for a row of team tiles.
- Wines: `vmPhoto: "<Vinmonopolet product number>"` shows the Vinmonopolet photo; otherwise the illustrated bottle.

In `shared/prototype.js` write `\n` in strings with an editor, not through a shell heredoc (the shell eats the
backslash).

### <brand>/assets/brand.js (content and data)

Defines `window.BRAND`. Keys (see `core/assets/brand.js` for a complete example):

- `key`, `name`, `shortName`
- `logo`: `brandOnLight`, `brandOnDark`, `groupOnLight`, `groupOnDark` (image paths; "light/dark" means the header
  background — if the header is dark on every page, point both to the light artwork)
- `fonts`: `serif`, `sans` (font-family strings used inside SVG placeholders)
- `icons` (optional): overrides for engine icons, e.g. `arrow` — each app theme has its own ThemedLink arrow
- `colors`: `labelPaper`, `labelInk`, `labelText`, `labelMuted` (bottle labels), `meter`, `portraitBgs[]`,
  `portraitInk`, `cellar {bg, barrel, line}`, `scenes {name: [colours]}`, `lightScenes[]`. Landscape scenes take
  5 colours `[sky, hill1, hill2, ground, line]`; scenes named `lines-*` take 3 `[bg, a, b]`
- `nav` (header links `[label, href, routePrefix]`), `footerSecondary[]`, `titles.articles`
- `demo`: `product`, `producer` slugs used by the prototype navigator
- `producers[]`, `wines[]`, `articles[]`, `team { lead (with bio[]), members[] }`
- `home[]`: domain block list; `articleBlocks[]`: article block list (the cover image is added automatically)
- `producerStory[]`: `{title, body}` with `{field}` placeholders filled from the producer (e.g. `{region}`)
- `contact`: the contact page introModule (`label`, `lead`, `body[]`)

Images in data are `{ photo: "assets/x.jpg" }` or `{ scene: "<name>", seed: n, note: "Caption" }`.

### Theme CSS

`<brand>/assets/tokens.css` defines the brand tokens (`--<brand>-*`). `<brand>/assets/<brand>.css` has three parts:

1. A `:root` block that **aliases** brand tokens to the short names the component CSS uses
   (`--greige` page background, `--ivory` cards, `--bottle` dark surfaces, `--ink` text, `--lees` accent on dark,
   `--serif`, `--sans`, `--display`/`--h1`…, `--label-tracking`, etc.). Names are historical (from Bottinor);
   treat them as roles, not colours.
2. The **shared component base**: one commented section per app component, the same rules in every brand file
   (a few hover/zebra colours are variables in provenance/core).
3. A **"<Brand> variants"** section at the end with what differs, one commented block per app component, noting the
   app theme it borrows from where relevant.

Exception: `bottinor/assets/bottinor.css` is the original the base was taken from, so its base *is* the Bottinor
look and it has no variants section (it hard-codes `#E9E2CF` for the tile hover and a Lees tint for table rows).

Rules:

- For provenance, core and new brands, put brand differences in the variants section, not in the base. For
  Bottinor, edit its base sections directly. If a base rule must change for every brand, change it in all three
  brand CSS files.
- Use the aliases/tokens, not raw hex values.
- Keep the **dev view** and **prototype navigator** rules (at the end of the base) intact.
- Fonts come from Google Fonts only (linked in `index.html` and `design-system.html`).

### design-system.html

A standalone page per brand: nav sidebar + numbered sections (intro, voice, logo, colour, typography, shape/layout,
icons, photography, component library, implementation, open questions). Swatches and contrast ratios are computed
live from `tokens.css`; component previews use the real brand CSS and `window.Proto` helpers, so they stay in sync.
Doc-only styles live in the page's `<style>`; scope them with `.ds-sec > …` so they do not leak into component
previews.

### Dev view

Elements carry `data-cms` (Crystallize source → app component, orange label) and `data-field` (field, blue label)
via the engine's `cms()` and `fld()` helpers. When you add markup to the engine, annotate it the same way.

## Common tasks

**Restyle something in one brand:** find the component's section in `<brand>/assets/<brand>.css` (search for the app
component name, e.g. `ProductTile`) and add/adjust rules in that brand's variants section. Update `DESIGN.md` and, if
it is a documented rule, `design-system.html`.

**Change copy or sample data:** edit `<brand>/assets/brand.js`. Keep home/article blocks within the allowed lists.

**Change colours or type:** edit `<brand>/assets/tokens.css`, mirror the values in `design-tokens.json`, and check
the contrast pairs on the design-system page (body text needs 4.5:1).

**Add a new brand** (e.g. `newbrand/`):

1. Copy an existing brand folder as a starting point (`core/` is the most complete).
2. Prepare logos: trim to the artwork, export light and dark versions as PNG (and SVG if supplied), put originals in
   `logos/`. Recolour `belmonte-group-logo-*.svg` for the brand (it is the BBG group mark used in the header).
3. Write `tokens.css` (`--newbrand-*`), then rename and adapt the theme CSS: update the alias block, keep the shared
   base, rewrite the variants section.
4. Write `brand.js` (content, data, block lists, colours for placeholders).
5. Point `index.html` and `design-system.html` at the new CSS, fonts and brand; rewrite the design-system copy.
6. Write `DESIGN.md` and `design-tokens.json`; list open questions for the client.
7. Add the brand to the root `index.html` and `README.md`.
8. Check every page and the dev view, then the other brands if you touched `shared/`.

## Pitfalls (learned the hard way)

- Inside flex/grid parents, `.container` elements (with `margin-inline: auto`) shrink to their content. Parents that
  stack containers need `> * { width: 100%; }` (see `.blocks`, `.contact-view`).
- Elements with `display: flex/grid` ignore the `hidden` attribute unless `[hidden] { display: none !important; }`
  is present (it is in the base).
- Prototype pages must render complete at rest: no entrance animations that start at `opacity: 0`.
- Placeholder art is labelled (`data-note`, e.g. "Producer hero") so clients do not mistake it for final photography.
- Norwegian law bans alcohol advertising to consumers: copy and newsletters address the trade (hospitality,
  producers), not consumers.
- Supplied SVG logos have repeatedly arrived empty (stripped by mail filters). Work from PNGs and ask for vectors.

## Deploying

Commit to `main` and push; GitHub Pages republishes the repo root within about a minute. The belmonte app pins a tag
or commit of this repo, never live `main`.
