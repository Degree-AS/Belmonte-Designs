# Belmonte-Designs

Design systems for Belmonte Beverage Group brand sites, published on GitHub Pages:
https://degree-as.github.io/Belmonte-Designs/

## Brands

- Bottinor (Wine Merchant) - prototype: https://degree-as.github.io/Belmonte-Designs/bottinor/, design system: https://degree-as.github.io/Belmonte-Designs/bottinor/design-system.html ([DESIGN.md](bottinor/DESIGN.md))
- Core Beverages
- Provenance Wines (proposal) - prototype: https://degree-as.github.io/Belmonte-Designs/provenance/, design system: https://degree-as.github.io/Belmonte-Designs/provenance/design-system.html ([DESIGN.md](provenance/DESIGN.md))

## Structure

- `<brand>/` - one folder per brand (`bottinor/`, `core/`, `provenance/`): `design-tokens.json`, CSS custom properties, `DESIGN.md`, preview, logos
- Prototypes use only components that already exist in the belmonte frontend; a new brand changes styles, not structure
- `shared/prototype.js` - the prototype engine shared by all brands: components, pages, router and dev view, mirroring the app's components. A brand adds `assets/brand.js` (content, sample data, home/article blocks), `assets/tokens.css` and its theme CSS
- Static files, no build: open `<brand>/index.html` through any static server (`python3 -m http.server`)
- The belmonte frontend pins a git tag or commit of this repo, never the live `main`

Based on [Molde-Jarnvare-Designs](https://github.com/Degree-AS/Molde-Jarnvare-Designs), without its `versions/vN/` folders.
Backlog: Azure DevOps Epic #20262 (Feature #20284 - AI design).
