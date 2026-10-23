# Belmonte-Designs

Design systems for Belmonte Beverage Group brand sites, published on GitHub Pages:
https://degree-as.github.io/Belmonte-Designs/

## Brands

- Bottinor (Wine Merchant) - prototype: https://degree-as.github.io/Belmonte-Designs/bottinor/ ([DESIGN.md](bottinor/DESIGN.md))
- Core Beverages
- Provenance Wines

## Structure

- `<brand>/` - one folder per brand (`bottinor/`, `core/`, `provenance/`): `design-tokens.json`, CSS custom properties, `DESIGN.md`, preview, logos
- Prototypes use only components that already exist in the belmonte frontend; a new brand changes styles, not structure
- Static files, no build: open `<brand>/index.html` through any static server (`python3 -m http.server`)
- The belmonte frontend pins a git tag or commit of this repo, never the live `main`

Based on [Molde-Jarnvare-Designs](https://github.com/Degree-AS/Molde-Jarnvare-Designs), without its `versions/vN/` folders.
Backlog: Azure DevOps Epic #20262 (Feature #20284 - AI design).
