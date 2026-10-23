/* Bottinor prototype — sample data, SVG illustration helpers, page renderers and a hash router.
   Wine, producer and article data below is example content for the prototype only. */
(() => {
  "use strict";

  // ---------- Icons ----------
  const I = {
    arrow: `<svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 11 11 3M5 3h6v6"/></svg>`,
    search: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" aria-hidden="true"><circle cx="7" cy="7" r="5"/><path d="m11 11 3.5 3.5"/></svg>`,
    check: `<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m2.5 6.2 2.3 2.3 4.7-5"/></svg>`,
    chevron: `<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m2.5 4.5 3.5 3.5 3.5-3.5"/></svg>`,
    menu: `<svg viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" aria-hidden="true"><path d="M2 5.5h14M2 12.5h14"/></svg>`,
    close: `<svg viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" aria-hidden="true"><path d="m4 4 10 10M14 4 4 14"/></svg>`,
    mail: `<svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linejoin="round" aria-hidden="true"><rect x="1.5" y="3" width="11" height="8"/><path d="m1.5 3.5 5.5 4 5.5-4"/></svg>`,
    phone: `<svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linejoin="round" aria-hidden="true"><path d="M3 1.5h2l1 3-1.5 1a7 7 0 0 0 4 4l1-1.5 3 1v2A1.5 1.5 0 0 1 11 12.5 9.5 9.5 0 0 1 1.5 3 1.5 1.5 0 0 1 3 1.5Z"/></svg>`,
    file: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9.5 1.5H4a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5Z"/><path d="M9.5 1.5V5H13M8 7.5v4.5M6 10l2 2 2-2"/></svg>`,
    image: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linejoin="round" aria-hidden="true"><rect x="1.5" y="2.5" width="13" height="11"/><circle cx="5.5" cy="6" r="1.2"/><path d="m1.5 12 4-4 3 3 2-2 4 4"/></svg>`,
    // Spec icons, drawn in the brand's illustration direction: bottle-green line, rounded ends
    taste: `<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 3h12l-.6 7a5.4 5.4 0 0 1-10.8 0Z"/><path d="M8.3 7.5h11.4M14 15.5V24M9.5 24.5h9"/></svg>`,
    pairing: `<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 3v8a2.5 2.5 0 0 0 5 0V3M9.5 3v22M19 25V3c3 1.5 4 6 4 10h-4"/></svg>`,
    grape: `<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2.5v4M14 5c2-2 5-2 6.5-1"/><circle cx="10" cy="10" r="3"/><circle cx="16" cy="10" r="3"/><circle cx="13" cy="15" r="3"/><circle cx="19" cy="15" r="3"/><circle cx="7" cy="15" r="3"/><circle cx="10" cy="20" r="3"/><circle cx="16" cy="20" r="3"/><circle cx="13" cy="25" r="2.4"/></svg>`,
  };

  // ---------- Data (example content) ----------
  const producers = [
    { slug: "combe-haute", name: "Domaine de la Combe Haute", country: "France", district: "Bourgogne", region: "Côte de Beaune", founded: "1952", ha: "14", wines: "9", bottles: "60 000", winemaker: "Claire Moreau", varietals: "Pinot Noir, Chardonnay", scene: "lees",
      intro: "A family domaine on the limestone slopes above Meursault, farming fourteen hectares by hand across twenty-two small parcels. Three generations have worked the same rows, and the wines still carry the quiet precision of the place." },
    { slug: "ca-del-vento", name: "Tenuta Ca’ del Vento", country: "Italy", district: "Piemonte", region: "Langhe", founded: "1968", ha: "21", wines: "7", bottles: "95 000", winemaker: "Marco Ferrero", varietals: "Nebbiolo, Barbera, Dolcetto", scene: "dusk",
      intro: "High on the ridge at La Morra, where the wind keeps the Nebbiolo healthy through long autumns. Traditional large-cask ageing and patience define a house style of perfume over power." },
    { slug: "pena-alta", name: "Bodegas Peña Alta", country: "Spain", district: "Rioja", region: "Rioja Alta", founded: "1931", ha: "48", wines: "6", bottles: "240 000", winemaker: "Lucía Etxeberria", varietals: "Tempranillo, Garnacha, Viura", scene: "lees",
      intro: "Old bush vines at 600 metres and a cellar dug into the hillside in the 1930s. Peña Alta makes classic Rioja with time in barrel and in bottle, released only when it is ready." },
    { slug: "steinterrassen", name: "Weingut Steinterrassen", country: "Germany", district: "Mosel", region: "Mittelmosel", founded: "1896", ha: "11", wines: "8", bottles: "70 000", winemaker: "Johannes Kerp", varietals: "Riesling", scene: "sage",
      intro: "Steep blue-slate terraces above the river, most of them too steep for machines. Riesling only, from bone-dry to delicately sweet, fermented with native yeasts in old Fuder casks." },
    { slug: "ribeira-funda", name: "Quinta da Ribeira Funda", country: "Portugal", district: "Douro", region: "Cima Corgo", founded: "1987", ha: "32", wines: "5", bottles: "130 000", winemaker: "Rita Sampaio", varietals: "Touriga Nacional, Touriga Franca, Tinta Roriz", scene: "dusk",
      intro: "Schist terraces dropping to a side valley of the Douro. Field blends of old vines, foot-trodden in granite lagares, give dry reds with depth and freshness." },
    { slug: "lemaire-fontaine", name: "Champagne Lemaire-Fontaine", country: "France", district: "Champagne", region: "Montagne de Reims", founded: "1921", ha: "9", wines: "5", bottles: "55 000", winemaker: "Hélène Lemaire", varietals: "Pinot Noir, Chardonnay, Pinot Meunier", scene: "night",
      intro: "A grower house in a Premier Cru village, making Champagne only from its own vines. Long ageing on lees and low dosage keep the wines vinous and precise." },
    { slug: "alpenrand", name: "Kellerei Alpenrand", country: "Italy", district: "Alto Adige", region: "Südtirol", founded: "1907", ha: "26", wines: "8", bottles: "160 000", winemaker: "Thomas Pichler", varietals: "Pinot Grigio, Lagrein, Pinot Bianco", scene: "sage",
      intro: "A small cooperative of mountain growers below the Dolomites. Cool nights and high vineyards give white wines of real clarity and reds with fresh, dark fruit." },
    { slug: "clos-des-garrigues", name: "Clos des Garrigues", country: "France", district: "Languedoc", region: "Pic Saint-Loup", founded: "2004", ha: "17", wines: "4", bottles: "70 000", winemaker: "Antoine Delmas", varietals: "Syrah, Grenache, Mourvèdre", scene: "green",
      intro: "Organic vineyards cut out of the scrubland beneath the Pic Saint-Loup. Mediterranean warmth balanced by cool nights from the Cévennes." },
  ];
  const P = Object.fromEntries(producers.map((p) => [p.slug, p]));

  const T = (body, freshness, tannins, sweetness, oak, herb, fruitness) => ({ body, freshness, tannins, sweetness, oak, herb, fruitness });
  const wines = [
    { slug: "meursault-les-narvaux-2023", name: "Meursault Les Narvaux 2023", producer: "combe-haute", type: "White", alc: "13 %", price: 549.9, vm: "1245601", shape: "burgundy", glass: "white", capsule: "#C5AD8E", grapes: "100% Chardonnay", pairing: ["Fish", "Shellfish", "Poultry"], taste: T(8, 8, 0, 1, 5, 3, 7),
      char: "Ripe citrus, hazelnut and a stony, saline finish.", desc: "From a high, thin-soiled lieu-dit above the village. Fermented and aged for 14 months in barrel, of which 20% new, then bottled without fining." },
    { slug: "bourgogne-pinot-noir-2023", name: "Bourgogne Pinot Noir 2023", producer: "combe-haute", type: "Red", alc: "12.5 %", price: 289.9, vm: "1245602", shape: "burgundy", glass: "red", capsule: "#66050A", grapes: "100% Pinot Noir", pairing: ["Poultry", "Pork", "Mushrooms"], taste: T(5, 9, 5, 1, 3, 4, 8),
      char: "Red cherry, raspberry and a light, cool earthiness.", desc: "Declassified parcels from around Meursault and Pommard, aged in older barrels to keep the fruit bright." },
    { slug: "barolo-la-morra-2020", name: "Barolo del Comune di La Morra 2020", producer: "ca-del-vento", type: "Red", alc: "14.5 %", price: 449.9, vm: "1245603", shape: "burgundy", glass: "red", capsule: "#262B47", grapes: "100% Nebbiolo", pairing: ["Beef", "Game", "Mature cheese"], taste: T(9, 8, 10, 1, 5, 6, 7),
      char: "Rose, tar and sour cherry with firm, fine tannins.", desc: "Thirty months in large Slavonian oak casks. Drinking well from now and will develop for another fifteen years." },
    { slug: "langhe-nebbiolo-2023", name: "Langhe Nebbiolo 2023", producer: "ca-del-vento", type: "Red", alc: "13.5 %", price: 259.9, vm: "1245604", shape: "burgundy", glass: "red", capsule: "#49362B", grapes: "100% Nebbiolo", pairing: ["Pasta", "Pork", "Mushrooms"], taste: T(6, 9, 7, 1, 2, 5, 8),
      char: "Floral and juicy, with redcurrant and a gentle grip.", desc: "Younger vines from the estate, aged briefly in cask to show the grape’s perfume early." },
    { slug: "rioja-reserva-2019", name: "Rioja Reserva 2019", producer: "pena-alta", type: "Red", alc: "14 %", price: 239.9, vm: "1245605", shape: "bordeaux", glass: "red", capsule: "#66050A", grapes: "90% Tempranillo, 10% Garnacha", pairing: ["Lamb", "Beef", "Mature cheese"], taste: T(8, 6, 7, 1, 8, 5, 7),
      char: "Dried plum, vanilla and leather, long and savoury.", desc: "Two years in American and French oak and two more in bottle in the hillside cellar before release." },
    { slug: "rioja-blanco-barrica-2022", name: "Rioja Blanco Fermentado en Barrica 2022", producer: "pena-alta", type: "White", alc: "13 %", price: 219.9, vm: "1245606", shape: "bordeaux", glass: "white", capsule: "#D8C9A7", grapes: "85% Viura, 15% Malvasía", pairing: ["Fish", "Poultry", "Vegetables"], taste: T(7, 7, 0, 1, 6, 4, 6),
      char: "Yellow apple, almond and gentle toasty oak.", desc: "Old-vine Viura fermented in barrel and aged on its lees for eight months with regular stirring." },
    { slug: "riesling-kabinett-graach-2023", name: "Graacher Riesling Kabinett 2023", producer: "steinterrassen", type: "White", alc: "8.5 %", price: 229.9, vm: "1245607", shape: "alsace", glass: "white", capsule: "#879684", grapes: "100% Riesling", pairing: ["Spicy food", "Shellfish", "Dessert"], taste: T(4, 11, 0, 6, 0, 3, 9),
      char: "Green apple, peach and slate, with a lifted sweetness.", desc: "From the steepest parcel of the estate. Fermentation stopped naturally, leaving a fine balance of sugar and acidity." },
    { slug: "riesling-trocken-schiefer-2023", name: "Riesling Trocken Schieferterrassen 2023", producer: "steinterrassen", type: "White", alc: "12 %", price: 199.9, vm: "1245608", shape: "alsace", glass: "white", capsule: "#162A19", grapes: "100% Riesling", pairing: ["Fish", "Shellfish", "Vegetables"], taste: T(5, 11, 0, 1, 0, 4, 8),
      char: "Lime, white flowers and a crisp mineral line.", desc: "A blend of terraced parcels, fermented dry in old Fuder casks." },
    { slug: "douro-tinto-2021", name: "Douro Tinto 2021", producer: "ribeira-funda", type: "Red", alc: "14 %", price: 189.9, vm: "1245609", shape: "bordeaux", glass: "red", capsule: "#49362B", grapes: "Touriga Nacional, Touriga Franca, Tinta Roriz", pairing: ["Beef", "Lamb", "Barbecue"], taste: T(8, 7, 7, 1, 4, 5, 9),
      char: "Blackberry, violet and warm spice, firm and fresh.", desc: "Foot-trodden in granite lagares and aged for twelve months in used French oak." },
    { slug: "champagne-brut-reserve", name: "Champagne Brut Réserve", producer: "lemaire-fontaine", type: "Sparkling", alc: "12 %", price: 449.9, vm: "1245610", shape: "flute", glass: "sparkling", capsule: "#C5AD8E", grapes: "50% Pinot Noir, 35% Chardonnay, 15% Pinot Meunier", pairing: ["Aperitif", "Shellfish", "Fish"], taste: T(6, 10, 0, 2, 2, 3, 7),
      char: "Brioche, lemon and a fine, persistent mousse.", desc: "Forty percent reserve wines and 36 months on the lees. Dosage 5 g/l." },
    { slug: "champagne-rose-premier-cru", name: "Champagne Rosé Premier Cru", producer: "lemaire-fontaine", type: "Sparkling", alc: "12 %", price: 549.9, vm: "1245611", shape: "flute", glass: "sparkling", capsule: "#D5A7A3", grapes: "70% Pinot Noir, 30% Chardonnay", pairing: ["Aperitif", "Fish", "Dessert"], taste: T(6, 10, 1, 2, 2, 3, 8),
      char: "Wild strawberry, chalk and a creamy finish.", desc: "Rosé d’assemblage with 12% still Pinot Noir from the estate’s oldest vines." },
    { slug: "pinot-grigio-alto-adige-2024", name: "Pinot Grigio Alto Adige 2024", producer: "alpenrand", type: "White", alc: "13 %", price: 199.9, vm: "1245612", shape: "alsace", glass: "white", capsule: "#879684", grapes: "100% Pinot Grigio", pairing: ["Fish", "Vegetables", "Aperitif"], taste: T(5, 9, 0, 1, 0, 3, 7),
      char: "Pear, white pepper and alpine freshness.", desc: "Mountain vineyards between 450 and 600 metres, fermented in stainless steel." },
    { slug: "lagrein-riserva-2021", name: "Lagrein Riserva 2021", producer: "alpenrand", type: "Red", alc: "13.5 %", price: 299.9, vm: "1245613", shape: "burgundy", glass: "red", capsule: "#262B47", grapes: "100% Lagrein", pairing: ["Game", "Beef", "Mushrooms"], taste: T(8, 8, 6, 1, 5, 4, 8),
      char: "Dark cherry, cocoa and a cool, fresh structure.", desc: "Aged eighteen months in large and small oak, from vineyards on the valley floor near Bolzano." },
    { slug: "pic-saint-loup-rose-2024", name: "Pic Saint-Loup Rosé 2024", producer: "clos-des-garrigues", type: "Rosé", alc: "13 %", price: 189.9, vm: "1245614", shape: "bordeaux", glass: "rose", capsule: "#D5A7A3", grapes: "Grenache, Syrah, Cinsault", pairing: ["Aperitif", "Fish", "Vegetables"], taste: T(4, 9, 0, 1, 0, 4, 8),
      char: "Redcurrant, peach and Mediterranean herbs.", desc: "Direct-press rosé, picked at night and fermented cool." },
    { slug: "pic-saint-loup-rouge-2022", name: "Pic Saint-Loup Rouge 2022", producer: "clos-des-garrigues", type: "Red", alc: "14 %", price: 229.9, vm: "1245615", shape: "bordeaux", glass: "red", capsule: "#66050A", grapes: "Syrah, Grenache, Mourvèdre", pairing: ["Lamb", "Barbecue", "Game"], taste: T(8, 7, 7, 1, 3, 8, 8),
      char: "Blackberry, olive and garrigue herbs.", desc: "Organic grapes, whole-bunch Syrah and a year in concrete and old barrels." },
  ];
  const W = Object.fromEntries(wines.map((w) => [w.slug, w]));
  wines.forEach((w) => { const p = P[w.producer]; w.country = p.country; w.region = p.district; });

  const articles = [
    { slug: "vinmonopolet-tender", cat: "Market insight", title: "Inside a Vinmonopolet tender, from request to shelf", sub: "How a product request becomes a listing, and where a local partner makes the difference.", date: "14 October 2026", read: "6 min read", img: { photo: "assets/hero-bottles.jpg" } },
    { slug: "harvest-langhe", cat: "Producers", title: "Harvest notes from the Langhe", sub: "A week on the ridge at La Morra as the Nebbiolo comes in.", date: "2 October 2026", read: "4 min read", img: { scene: "dusk", seed: 3 } },
    { slug: "sommeliers-norway", cat: "On-trade", title: "What Norwegian sommeliers look for in a wine list", sub: "Conversations with restaurants across the country.", date: "18 September 2026", read: "5 min read", img: { scene: "cellar", seed: 1 } },
    { slug: "small-portfolio", cat: "Philosophy", title: "Why we keep our portfolio deliberately small", sub: "Every producer represents something we believe in.", date: "4 September 2026", read: "3 min read", img: { photo: "assets/crop-hand-portrait.jpg" } },
    { slug: "meet-pena-alta", cat: "Producers", title: "Meet the producer: Bodegas Peña Alta", sub: "Old bush vines, a hillside cellar and the patience of classic Rioja.", date: "21 August 2026", read: "5 min read", img: { scene: "lees", seed: 5 } },
    { slug: "rose-norway", cat: "Market insight", title: "Rosé in Norway, a category that keeps growing", sub: "What the numbers tell us about summer and beyond.", date: "7 August 2026", read: "4 min read", img: { scene: "rose", seed: 2 } },
    { slug: "riesling-table", cat: "Food & wine", title: "Riesling and the Norwegian table", sub: "Why Mosel Riesling works with shellfish, cured fish and spice.", date: "24 July 2026", read: "4 min read", img: { scene: "sage", seed: 4 } },
    { slug: "belmonte-family", cat: "News", title: "Part of a bigger family: Bottinor and Belmonte Beverage Group", sub: "A personal commitment, backed by a collective strength.", date: "10 July 2026", read: "3 min read", img: { photo: "assets/crop-bottles-portrait.jpg" } },
  ];
  const A = Object.fromEntries(articles.map((a) => [a.slug, a]));

  const team = {
    founder: { name: "Christoffer Bergsted", role: "Founder & Managing Director", email: "christoffer@bottinor.no", phone: "+47 000 00 000" },
    sales: [
      ["Simon Pizzoni", "Commercial Director Sales"], ["Silje Lindqvist", "Key Account Manager"], ["Petter Svanæs", "Area Sales Manager"], ["Maira Scapin", "Area Sales Manager"],
      ["Håkon Fjelli", "Area Sales Manager"], ["Emil Wang", "Area Sales Manager"], ["Alf Erik Efraimsen", "Area Sales Manager"], ["Maren Gunnvelt", "Area Sales Manager"],
      ["Linus Larup", "Field Sales Manager"], ["Alen Tupkovic", "Area Sales Manager"], ["Tinius Schie Berntsen", "Area Sales Manager"],
    ].map(([name, role]) => ({ name, role, email: name.split(" ")[0].toLowerCase().replace("å", "a").replace("æ", "ae") + "@belmonte.no", phone: "+47 000 00 000" })),
  };

  // ---------- SVG illustration helpers ----------
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const kr = (n) => "Kr " + n.toFixed(2).replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  const rand = (seed) => { let s = seed * 9301 + 49297; return () => ((s = (s * 9301 + 49297) % 233280) / 233280); };

  const SHAPES = {
    bordeaux: { path: "M33 8h14v78c0 16 21 24 21 46v152c0 5-3 8-8 8H20c-5 0-8-3-8-8V132c0-22 21-30 21-46Z", cap: 62, label: [17, 168, 46, 78] },
    burgundy: { path: "M34 8h12v58c0 32 24 52 24 88v130c0 5-3 8-8 8H18c-5 0-8-3-8-8V154c0-36 24-56 24-88Z", cap: 56, label: [15, 176, 50, 74] },
    flute: { path: "M33 8h14v54c0 36 26 54 26 92v130c0 5-3 8-8 8H15c-5 0-8-3-8-8V154c0-38 26-56 26-92Z", cap: 84, label: [13, 180, 54, 64] },
    alsace: { path: "M35 8h10v92c0 22 17 30 17 52v132c0 5-3 8-8 8H26c-5 0-8-3-8-8V152c0-22 17-30 17-52Z", cap: 58, label: [21, 182, 38, 72] },
  };
  const GLASS = { red: ["#1c1714", "#2c2420"], white: ["#b9b98a", "#d4d3ab"], rose: ["#e2aea4", "#efc9c0"], sparkling: ["#1c2a1d", "#2b3d2c"] };

  function bottle(w) {
    const s = SHAPES[w.shape], g = GLASS[w.glass], p = P[w.producer];
    const [lx, ly, lw, lh] = s.label;
    const id = "g" + w.vm;
    const initials = p.name.split(/\s+/).filter((x) => /^[A-ZÀ-Ý]/.test(x)).slice(-2).map((x) => x[0]).join("");
    const short = w.name.replace(/\s\d{4}$/, "").split(" ").slice(0, 2).join(" ");
    return `<svg viewBox="0 0 80 300" role="img" aria-label="${esc(w.name)}"><defs><linearGradient id="${id}" x1="0" x2="1"><stop offset="0" stop-color="${g[0]}"/><stop offset=".35" stop-color="${g[1]}"/><stop offset="1" stop-color="${g[0]}"/></linearGradient></defs>
      <path d="${s.path}" fill="url(#${id})"/>
      <path d="M${s.path.match(/^M(\d+)/)[1]} 8h${s.path.match(/h(\d+)/)[1]}v${s.cap - 8}h-${s.path.match(/h(\d+)/)[1]}Z" fill="${w.capsule}"/>
      <rect x="${lx}" y="${ly}" width="${lw}" height="${lh}" fill="#F3F2F0"/>
      <rect x="${lx + 3}" y="${ly + 3}" width="${lw - 6}" height="${lh - 6}" fill="none" stroke="#162A19" stroke-width=".4"/>
      <text x="40" y="${ly + lh * 0.38}" text-anchor="middle" font-family="Newsreader, Georgia, serif" font-size="11" fill="#162A19">${esc(initials)}</text>
      <line x1="${40 - lw * 0.22}" x2="${40 + lw * 0.22}" y1="${ly + lh * 0.5}" y2="${ly + lh * 0.5}" stroke="#162A19" stroke-width=".4"/>
      <text x="40" y="${ly + lh * 0.66}" text-anchor="middle" font-family="Manrope, Arial, sans-serif" font-size="3.6" letter-spacing=".4" fill="#171717">${esc(short.toUpperCase())}</text>
      <text x="40" y="${ly + lh * 0.8}" text-anchor="middle" font-family="Manrope, Arial, sans-serif" font-size="3" fill="#5b5d56">${esc(p.district.toUpperCase())}</text>
      <rect x="${lx + 4}" y="${s.cap + 30}" width="2.2" height="${ly - s.cap - 40}" fill="#fff" opacity=".12" rx="1"/>
    </svg>`;
  }

  const PALETTES = {
    lees: ["#D8C9A7", "#C5AD8E", "#879684", "#162A19", "#F3F2F0"],
    sage: ["#E3E3D3", "#AFB7A4", "#879684", "#162A19", "#F0F0E5"],
    dusk: ["#D5A7A3", "#A5674D", "#49362B", "#21170f", "#D8C9A7"],
    night: ["#262B47", "#3a4062", "#1d2138", "#11142a", "#D8C9A7"],
    green: ["#24402a", "#879684", "#2f4a33", "#162A19", "#D8C9A7"],
    rose: ["#EBD2CE", "#D5A7A3", "#A5674D", "#66050A", "#F3F2F0"],
  };

  function scene(kind, seed = 1, note = "") {
    const r = rand(seed);
    if (kind === "cellar") {
      let barrels = "";
      for (let row = 0; row < 3; row++) for (let i = 0; i < 6; i++) {
        const cx = 40 + i * 64 + (row % 2) * 32, cy = 230 - row * 56;
        barrels += `<ellipse cx="${cx}" cy="${cy}" rx="28" ry="27" fill="#49362B" stroke="#C5AD8E" stroke-width="1.2"/><ellipse cx="${cx}" cy="${cy}" rx="18" ry="17" fill="none" stroke="#C5AD8E" stroke-width=".8" opacity=".7"/><circle cx="${cx}" cy="${cy}" r="2" fill="#C5AD8E"/>`;
      }
      return `<span class="ph" ${note ? `data-note="${esc(note)}"` : ""}><svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="400" height="300" fill="#21170f"/><path d="M0 0h400v40Q200 -10 0 40Z" fill="#49362B"/>${barrels}</svg></span>`;
    }
    const [sky, h1, h2, h3, line] = PALETTES[kind] || PALETTES.lees;
    const hill = (base, amp, n) => {
      let d = `M0 ${base}`;
      for (let i = 1; i <= n; i++) { const x = (400 / n) * i, y = base - amp * (0.4 + r()); d += ` Q${x - 200 / n} ${y - amp * r()} ${x} ${y}`; }
      return d + " V300 H0Z";
    };
    const sunX = 80 + r() * 240, sunY = 60 + r() * 40;
    let rows = "";
    const vx = 120 + r() * 160, vy = 168;
    for (let i = -6; i <= 14; i++) rows += `<path d="M${vx} ${vy} L${i * 34} 300" stroke="${line}" stroke-width="1.2" stroke-linecap="round" opacity=".55"/>`;
    let posts = "";
    for (let i = 0; i < 9; i++) posts += `<path d="M${20 + i * 46} 300 v-${18 + r() * 10}" stroke="${line}" stroke-width="1.4" stroke-linecap="round" opacity=".4"/>`;
    return `<span class="ph ${kind === "sage" || kind === "rose" ? "light" : ""}" ${note ? `data-note="${esc(note)}"` : ""}><svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="400" height="300" fill="${sky}"/>
      <circle cx="${sunX}" cy="${sunY}" r="${22 + r() * 14}" fill="${line}" opacity=".55"/>
      <path d="${hill(120, 34, 3)}" fill="${h1}"/>
      <path d="${hill(150, 26, 4)}" fill="${h2}"/>
      <path d="M0 ${vy + 2} Q200 ${vy - 18} 400 ${vy + 6} V300 H0Z" fill="${h3}"/>
      ${rows}${posts}
    </svg></span>`;
  }

  function portrait(name, seed = 1) {
    const bgs = ["#E4E1D4", "#D8C9A7", "#C9CEC0", "#E6D3CF"];
    const bg = bgs[seed % bgs.length];
    const ini = name.split(" ").map((x) => x[0]).slice(0, 2).join("");
    return `<span class="ph light" data-note="Portrait"><svg viewBox="0 0 312 304" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Portrait placeholder for ${esc(name)}">
      <rect width="312" height="304" fill="${bg}"/>
      <circle cx="156" cy="128" r="50" fill="none" stroke="#162A19" stroke-width="1.3" opacity=".55"/>
      <path d="M62 304c6-62 46-96 94-96s88 34 94 96" fill="none" stroke="#162A19" stroke-width="1.3" stroke-linecap="round" opacity=".55"/>
      <text x="156" y="52" text-anchor="middle" font-family="Newsreader, Georgia, serif" font-size="22" fill="#162A19" opacity=".7">${esc(ini)}</text>
    </svg></span>`;
  }

  const media = (img, note) => img.photo ? `<img class="cover" src="${img.photo}" alt="" loading="lazy">` : scene(img.scene, img.seed, note);

  function meter(v) {
    const C = 2 * Math.PI * 8.45, len = (v / 12) * C;
    return `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11.4" fill="none" stroke="#162A19" stroke-width=".6"/><circle cx="12" cy="12" r="5.5" fill="none" stroke="#162A19" stroke-width=".6"/><circle cx="12" cy="12" r="8.45" fill="none" stroke="#162A19" stroke-width="5.6" stroke-dasharray="${len} ${C}" transform="rotate(-90 12 12)"/></svg>`;
  }

  // ---------- Dev view annotations ----------
  // cms(): a Crystallize shape / block / piece and the app component that renders it (orange label in dev view).
  // fld(): the Crystallize field (or code source) behind one element (blue label in dev view).
  const cms = (source, comp, detail = "") => ` data-cms="${esc(source)}" data-comp="${esc(comp)}" data-tip="${esc(source + " → " + comp + (detail ? "\n" + detail : ""))}"`;
  const fld = (name) => ` data-field="${esc(name)}" data-tip="${esc("Field: " + name)}"`;

  // ---------- Shared components ----------
  // Each helper mirrors one component of the belmonte app; only fields that component renders are shown.
  const tlink = (text, href, cls = "", extra = "") => `<a class="tlink ${cls}" href="${href}"${extra}>${esc(text)} ${I.arrow}</a>`;
  // Product page key info (FetchProductPage has region); the list query does not fetch region
  const keyInfo = (w) => [w.type, w.country, w.region, "0,75 L", w.alc.replace(".", ",")].join(" | ");
  const tileInfo = (w) => [w.type, w.country, "0,75 L", w.alc.replace(".", ",")].join(" | ");

  // features/product-tile/product-tile.tsx ← defaultProduct
  const productTile = (w) => `<a class="p-tile" href="#p.${w.slug}"${cms("defaultProduct", "features/product-tile", "Fields: name, productSubtype, country, volume, alcoholContent, defaultVariant.priceVariants, defaultVariant.firstImage")}>
      <div class="img"${fld("defaultVariant.firstImage")}>${bottle(w)}</div>
      <h2${fld("name")}>${esc(w.name)}</h2>
      <p class="meta"${fld("productSubtype · country · volume · alcoholContent")}>${esc(tileInfo(w))}</p>
      <p class="price"${fld("priceVariants › vinmonopolet-price")}>${kr(w.price)}</p>
      <p class="vm">price at Vinmonopolet incl. VAT</p>
    </a>`;

  // features/article/article-tile.tsx ← article (child of articles)
  const articleTile = (a) => `<a class="a-tile" href="#a.${a.slug}"${cms("article", "features/article/article-tile", "Fields: thumbnail, name, path or externalLink")}>
      <div class="img"${fld("thumbnail")}>${media(a.img)}</div>
      <h5${fld("name")}>${esc(a.title)}</h5>
      <span class="tlink">Read article ${I.arrow}</span>
    </a>`;

  // features/team-members/team-member-tile.tsx ← employee
  const teamTile = (m, i) => `<article class="t-tile"${cms("employee", "features/team-members/team-member-tile", "Fields: picture, name, roles.position, bio, email, phone")}>
      <div class="img"${fld("picture")}>${portrait(m.name, i)}</div>
      <h3${fld("name")}>${esc(m.name)}</h3>
      <p class="role"${fld("roles › position")}>${esc(m.role)}</p>
      <div class="contact"><span${fld("email")}>${I.mail}${esc(m.email)}</span><span${fld("phone")}>${I.phone}${esc(m.phone)}</span></div>
    </article>`;

  // blocks/counter ← counterModule (counters: label, value) or producer attributes.properties
  const counters = (items, n = 4, source = "counterModule") => `<dl class="counters" style="--n:${n}"${cms(source, "blocks/counter")}>${items.map(([label, value]) => `<div><dt>${esc(label)}</dt><dd class="${value.length > 7 ? "text" : ""}">${esc(value)}</dd></div>`).join("")}</dl>`;

  // blocks/intro ← introModule (label, intro, body, links.items, textAlignment, smallVerticalSpace)
  const introModule = ({ label, lead, body = [], links = [], source = "blocks › introModule" }) => `<section class="container intro-module"${cms(source, "blocks/intro", "Fields: label, intro, body, links.items (name, path), textAlignment, smallVerticalSpace")}>
      ${label ? `<span class="label rule"${fld("label")}>${esc(label)}</span>` : "<span></span>"}
      <div class="text">
        <p class="lead"${fld("intro")}>${esc(lead)}</p>
        ${body.length ? `<div class="body"${fld("body")}>${body.map((p) => `<p>${esc(p)}</p>`).join("")}</div>` : ""}
        ${links.length ? `<div class="links"${fld("links")}>${links.map(([t, h]) => tlink(t, h)).join("")}</div>` : ""}
      </div>
    </section>`;

  // blocks/latest-articles ← latestArticles (label, link) + latest article children
  const latestArticles = (title, list) => `<section class="container"${cms("blocks › latestArticles", "blocks/latest-articles", "Fields: label, link. Tiles: latest article items")}>
      <div class="module-head"><span class="label rule"${fld("label")}>${esc(title)}</span>${tlink("All articles", "#articles", "", fld("link"))}</div>
      <div class="article-list">${list.slice(0, 4).map(articleTile).join("")}</div>
    </section>`;

  // ---------- Header / footer / menu ----------
  const NAV = [["Producers", "#producers", "producer"], ["Our selection", "#products", "product"], ["Articles", "#articles", "article"]];

  function header(route) {
    const overlay = route === "home";
    const tone = overlay ? "greige" : "bottle-green";
    return `<header class="site-header ${overlay ? "overlay" : ""}"${cms("layout › header (HeaderPiece)", "layout/header", "Fields: headerLinks, menuLinks, color, hideLogo, hideBrand")}>
      <div class="container">
        <a class="hdr-logo" href="#home" aria-label="Back to home"${fld("code: LogoRenderer")}><img src="assets/belmonte-group-logo-${tone}.svg" alt=""><span>part of Belmonte Beverage Group</span></a>
        <a class="hdr-brand" href="#home" aria-label="Bottinor Wine Merchant, home"${fld("code: BrandRenderer")}><img src="assets/wordmark-${tone}.png" alt="Bottinor Wine Merchant"></a>
        <nav class="hdr-right" aria-label="Main">
          <span class="hdr-links"${fld("headerLinks")}>${NAV.map(([t, h, k]) => `<a href="${h}" class="${route.startsWith(k) ? "on" : ""}">${t}</a>`).join("")}</span>
          <button class="menu-btn" type="button" data-open-menu aria-haspopup="dialog"${fld("menuLinks → opens HeaderDialog")}>${I.menu}<b>MENU</b></button>
        </nav>
      </div>
    </header>`;
  }

  function menuDialog() {
    return `<div class="menu-dialog dark" role="dialog" aria-modal="true" aria-label="Menu" hidden${cms("layout › header › menuLinks", "layout/header/header-dialog")}>
      <div class="container top">
        <img src="assets/belmonte-group-logo-greige.svg" alt="">
        <button class="close" type="button" data-close-menu>CLOSE ${I.close}</button>
      </div>
      <div class="container menu-body">
        <span></span>
        <nav aria-label="Menu"${fld("menuLinks")}>
          <a href="#home">Home</a><a href="#producers">Our producers</a><a href="#products">Our selection</a><a href="#articles">Articles</a><a href="#team">Our team</a><a href="#contact">Contact</a>
        </nav>
      </div>
    </div>`;
  }

  function footer() {
    return `<footer class="site-footer dark"${cms("layout › footer (FooterPiece)", "layout/footer", "Fields: footerLinks, footerSecondaryLinks, hideLogo, hideBrand")}>
      <div class="container">
        <nav class="ft-primary" aria-label="Footer"${fld("footerLinks")}>
          <a href="#producers">Our producers</a><a href="#products">Our selection</a><a href="#articles">Articles</a><a href="#team">Our team</a><a href="#contact">Contact</a>
        </nav>
        <nav class="ft-secondary" aria-label="Footer secondary"${fld("footerSecondaryLinks")}>
          <a>Privacy policy</a><a>Cookie settings</a><a>Alcohol and health</a><a>Instagram</a><a>LinkedIn</a>
        </nav>
        <div class="ft-bottom"${fld("code: LogoRenderer + BrandRenderer + copyright")}>
          <img class="logo" src="assets/belmonte-group-logo-greige.svg" alt="Belmonte Beverage Group">
          <img class="brand" src="assets/wordmark-greige.png" alt="Bottinor Wine Merchant">
          <span class="copy">Copyright © ${new Date().getFullYear()} Belmonte Beverage Group</span>
        </div>
      </div>
    </footer>`;
  }

  // ---------- Pages ----------
  const pages = {};

  // Home: app/(home)/page.tsx ← domain shape, blocks[] limited to the blocks FetchDomainPage requests
  pages.home = () => `
    <section class="banner" aria-label="Banner"${cms("domain › blocks › bannerFullscreen", "blocks/banner", "Fields: title, intro, image, useParallax")}>
      <img src="assets/hero-bottles.jpg" alt="A hand arranging dark wine bottles"${fld("image")}>
      <div class="container">
        <h1${fld("title")}>Committed to your wines.<br>Focused on Norway.</h1>
        <p class="intro"${fld("intro")}>Personal partnerships. Local insight. A lasting commitment to your winery.</p>
      </div>
    </section>
    <div class="blocks">
      ${introModule({
        source: "domain › blocks › introModule",
        label: "A personal approach to wine",
        lead: "Bottinor is a Norwegian wine company and part of the Belmonte Beverage Group. We work closely with a select group of producers, acting as an extension of their wineries in Norway.",
        body: ["Our role is to represent their wines, values and ambitions with care. We combine close personal partnerships with a structured approach to the Norwegian market.", "Together, we build lasting market positions that reflect each winery’s identity and long-term strategy."],
        links: [["Our producers", "#producers"], ["Meet the team", "#team"]],
      })}

      <section class="container group-image" aria-label="Images"${cms("domain › blocks › groupImageModule", "blocks/group-image", "Fields: primaryImage, secondaryImage, reverseOrder, imagePosition")}>
        <div class="large"${fld("primaryImage")}><img class="cover" src="assets/hero-bottles.jpg" alt="" style="object-position:62% 40%"></div>
        <div class="small"${fld("secondaryImage")}>${scene("lees", 7, "Producer photography")}</div>
      </section>

      <div>
        ${introModule({ source: "domain › blocks › introModule", label: "How we work", lead: "Your ambitions. Our shared direction. We combine local market expertise with close, hands-on partnerships." })}
        <section class="container paragraphs" style="margin-top:clamp(40px,5vw,64px)"${cms("domain › blocks › paragraphCollection", "blocks/paragraph-collection", "Repeated: title, body (rich text)")}>
          <div class="row"><span class="label"${fld("title")}>Understand</span><div${fld("body")}><h3>Start with the winery.</h3><p>Every collaboration begins with understanding the winery, its identity, priorities and ambitions. Together, we develop a strategy for Norway that connects those ambitions with the opportunities in the market.</p></div></div>
          <div class="row"><span class="label">Build</span><div><h3>Find the right route.</h3><p>Our work covers the full route to market, from portfolio strategy, pricing and Vinmonopolet tenders to distribution, sales, marketing and on-trade development.</p></div></div>
          <div class="row"><span class="label">Develop</span><div><h3>Stay closely involved.</h3><p>After launch, we monitor performance, share market insight and identify opportunities for further development. Clear priorities, measurable objectives and transparent reporting keep our producers involved in both decisions and results.</p></div></div>
        </section>
      </div>

      <section class="container" aria-label="Quote"${cms("domain › blocks › richTextModule", "blocks/rich-text", "Fields: text (rich text with a quote), textAlign, largeVerticalSpacing, textColor")}>
        <div class="rich-text"${fld("text")}>
          <blockquote>“I want the producers I work with to feel that they have a colleague here.”</blockquote>
          <p class="label muted">Christoffer Bergsted, Founder</p>
        </div>
      </section>

      <div>
        ${introModule({ source: "domain › blocks › introModule", label: "Our producers", lead: "A small group of wineries, each keeping its own identity. We provide the local relationship." })}
        <section class="container producer-list-block" aria-label="Producers" style="margin-top:clamp(32px,4vw,48px)"${cms("domain › blocks › producerList", "blocks/producer-list", "Fields: maxQuantity, allProducersLink. Names: producer items")}>
          <div class="producer-names"${fld("producer › name")}>${producers.map((p) => `<a href="#pr.${p.slug}">${esc(p.name)}</a>`).join("")}</div>
          ${tlink("Show all producers", "#producers", "", fld("allProducersLink"))}
        </section>
      </div>

      <section class="container employee-block" aria-label="Employees"${cms("domain › blocks › employees", "blocks/employee", "Fields: label, employeeList → employee (name, roles, picture, email, phone, bio)")}>
        <p class="label rule"${fld("label")}>A personal introduction</p>
        <article class="employee">
          <div class="img"${fld("employee › picture")}>${portrait(team.founder.name, 1)}</div>
          <div>
            <h4${fld("employee › name")}>${esc(team.founder.name)}</h4>
            <p class="role"${fld("employee › roles")}>${esc(team.founder.role)}</p>
            <div class="contact"${fld("employee › email, phone")}><span>${esc(team.founder.email)}</span><span>${esc(team.founder.phone)}</span></div>
            <div class="bio"${fld("employee › bio")}>
              <p>Christoffer founded Bottinor out of a genuine passion for wine, the people behind it, and the challenge of building long-lasting positions in the Norwegian market.</p>
              <p>His approach is personal and hands-on: understanding each winery, what matters to the people behind it, and how to represent them well in Norway.</p>
            </div>
          </div>
        </article>
      </section>

      ${introModule({
        source: "domain › blocks › introModule",
        label: "Part of a bigger family",
        lead: "A personal commitment. A collective strength.",
        body: ["Belmonte Beverage Group has hand-picked key employees with over 250 years of industry experience combined, and has quickly established itself as an innovative challenger in the Norwegian import industry.", "Through Strawberry Equities, the Stordalen family is the majority owner of Belmonte Beverage Group."],
      })}

      ${latestArticles("Latest articles", articles)}

      <section class="container" aria-label="Newsletter"${cms("domain › blocks › newsletter", "blocks/newsletter", "Fields: formTitle, checkboxes, confirmationTitle, confirmationDescription, milchampConfig")}>
        <div class="newsletter">
          <h2${fld("formTitle")}>Market notes from Norway, four times a year.</h2>
          <form data-newsletter novalidate>
            <div class="checks"${fld("checkboxes")}><label><input type="checkbox" id="nl-prod" checked> I am a producer</label><label><input type="checkbox" id="nl-trade"> I work in hospitality</label></div>
            <div class="input"><label for="nl-email" class="sr">Email</label><input id="nl-email" type="email" placeholder="Your email" required><button type="submit" aria-label="Subscribe">${I.arrow}</button></div>
            <p class="done" hidden${fld("confirmationTitle / confirmationDescription")}>Thank you. You will receive the next issue.</p>
          </form>
        </div>
      </section>
    </div>`;

  // Products list: app/(commerce)/products/page.tsx ← defaultProduct catalogue + facets
  const state = { q: "", type: new Set(), country: new Set(), producer: new Set(), price: new Set(), sort: "relevance" };
  const PRICE = [["0–199 kr", 0, 199.99], ["200–399 kr", 200, 399.99], ["400–599 kr", 400, 599.99], ["600+ kr", 600, 1e9]];
  const facet = (key, values, label) => `<details ${key === "type" || key === "country" ? "open" : ""}><summary>${label}</summary><div class="opts">${values.map(([v, n]) => `<label><input type="checkbox" data-f="${key}" value="${esc(v)}" ${state[key].has(v) ? "checked" : ""}><span class="box">${I.check}</span>${esc(v)}<span class="n">${n}</span></label>`).join("")}</div></details>`;
  const staticFacet = (label, values) => `<details><summary>${label}</summary><div class="opts">${values.map((v) => `<label><input type="checkbox"><span class="box">${I.check}</span>${v}</label>`).join("")}</div></details>`;
  const countBy = (fn) => Object.entries(wines.reduce((m, w) => ((m[fn(w)] = (m[fn(w)] || 0) + 1), m), {})).sort();

  function filtered() {
    const list = wines.filter((w) =>
      (!state.q || (w.name + P[w.producer].name + w.country + w.region).toLowerCase().includes(state.q.toLowerCase())) &&
      (!state.type.size || state.type.has(w.type)) &&
      (!state.country.size || state.country.has(w.country)) &&
      (!state.producer.size || state.producer.has(P[w.producer].name)) &&
      (!state.price.size || PRICE.some(([l, a, b]) => state.price.has(l) && w.price >= a && w.price <= b)));
    const s = state.sort;
    if (s === "name-asc") list.sort((a, b) => a.name.localeCompare(b.name));
    if (s === "name-desc") list.sort((a, b) => b.name.localeCompare(a.name));
    if (s === "price-asc") list.sort((a, b) => a.price - b.price);
    if (s === "price-desc") list.sort((a, b) => b.price - a.price);
    return list;
  }

  pages.products = () => `
    <section class="container page-title"${cms("translation: Products.ourSelection", "app/(commerce)/products/page.tsx", "Title is a translation key, not CMS content")}><h1>Our selection</h1></section>
    <section class="container products-page">
      <aside class="side" aria-label="Search and filters">
        <div class="search"${cms("query: search text", "features/product-search")}>${I.search}<label for="q" class="sr">Search</label><input id="q" type="search" placeholder="Search our selection" value="${esc(state.q)}"></div>
        <button class="filter-toggle" type="button" data-toggle-filters>Filter ${I.chevron}</button>
        <div class="filters"${cms("FetchProductFacets (defaultProduct facets)", "features/product-filters", "Facets: productSubtype, country, price, producer, foodPairing, volume, alcoholContent, certification, packaging. Config: product-filters.config.ts")}>
          ${facet("type", countBy((w) => w.type), "Type")}
          ${facet("country", countBy((w) => w.country), "Country")}
          ${facet("price", PRICE.map(([l, a, b]) => [l, wines.filter((w) => w.price >= a && w.price <= b).length]).filter(([, n]) => n), "Price")}
          ${facet("producer", countBy((w) => P[w.producer].name), "Producer")}
          ${staticFacet("Food Pairing", ["Aperitif", "Fish", "Shellfish", "Beef", "Lamb", "Game"])}
          ${staticFacet("Volume", ["0,75 L"])}
          ${staticFacet("Alcohol Content", ["Under 10 %", "10–12,9 %", "13 % and above"])}
          ${staticFacet("Certification", ["Organic"])}
          ${staticFacet("Packaging", ["Glass bottle"])}
        </div>
      </aside>
      <div>
        <div class="list-top"><div class="tags" data-tags${cms("selected filters", "features/product-filters (tags)")}></div>
          <div class="sort"${cms("sorting: DefaultProductSort", "features/product-sorting")}><label for="sort" class="sr">Sort by</label><select id="sort">
            ${[["relevance", "Relevance"], ["name-asc", "Name (Ascending)"], ["name-desc", "Name (Descending)"], ["price-asc", "Price (Lowest first)"], ["price-desc", "Price (Highest first)"]].map(([v, t]) => `<option value="${v}" ${state.sort === v ? "selected" : ""}>${t}</option>`).join("")}
          </select>${I.chevron}</div>
        </div>
        <div class="product-list cols-3" data-list${cms("FetchProductList → defaultProduct[]", "features/product-list", "12 per page, infinite scroll")}></div>
      </div>
    </section>`;

  function renderList() {
    const list = filtered();
    const el = document.querySelector("[data-list]");
    if (!el) return;
    el.innerHTML = list.length ? list.map(productTile).join("") : `<p class="empty">No wines match these filters.</p>`;
    const tags = [];
    ["type", "country", "price", "producer"].forEach((k) => state[k].forEach((v) => tags.push(`<button class="tag" type="button" data-remove="${k}" data-v="${esc(v)}">${esc(v)} ${I.close}</button>`)));
    document.querySelector("[data-tags]").innerHTML = tags.length ? tags.join("") + `<button class="tag clear" type="button" data-clear>Remove all</button>` : "";
    applyDev();
  }

  // Product detail: app/(product)/producers/[slug]/[productSlug] ← defaultProduct + parent producer
  pages.product = (slug) => {
    const w = W[slug] || wines[0], p = P[w.producer];
    const related = wines.filter((x) => x.producer === w.producer && x.slug !== w.slug);
    const t = w.taste;
    const PD = "features/product-detail";
    return `
    <div class="container pd"${cms("defaultProduct", PD + "/product-detail", "Section order: default branch of product-detail.tsx")}>
      <div class="pd-image"${cms("defaultVariant.firstImage", PD + "/product-image")}>${bottle(w)}</div>
      <section class="pd-section" aria-label="Product details">
        <div class="pd-title"${cms("name + parent producer", PD + "/product-title")}>
          <a class="producer" href="#pr.${p.slug}"${fld("parent › producer.name, path")}>${esc(p.name)} ${I.arrow}</a>
          <h1${fld("name")}>${esc(w.name)}</h1>
        </div>
        <p class="pd-key"${cms("productSubtype · country · region · volume · alcoholContent", PD + "/product-key-info")}>${esc(keyInfo(w))}</p>
        <div class="pd-block"${cms("shortDescription", PD + "/product-characteristic")}><p class="label">Characteristics</p><p class="pd-char">${esc(w.char)}</p></div>
        <div class="pd-price"${cms("defaultVariant.priceVariants + vinmonopoletId", PD + "/product-price", "Bottinor uses vinmonopolet-price (belmonte uses horeca-price)")}>
          <div><p class="amount"${fld("priceVariants › vinmonopolet-price")}>${kr(w.price)}</p><p class="label">Price at Vinmonopolet incl. VAT</p></div>
          ${tlink("Vinmonopolet", "#p." + w.slug, "", fld("vinmonopoletId → vinmonopolet.no/p/{id}"))}
        </div>
        <div${cms("tasteProfile · foodPairing · grapeVariety", PD + "/product-specification")}>
          <div class="spec-row"${fld("tasteProfile (0–12)")}>${I.taste}<ul class="meters">${[["Body", t.body], ["Freshness", t.freshness], ["Tannins", t.tannins], ["Sweetness", t.sweetness], ["Oak", t.oak], ["Herb", t.herb], ["Fruitness", t.fruitness]].map(([l, v]) => `<li title="${l}: ${v} of 12">${l} ${meter(v)}</li>`).join("")}</ul></div>
          <div class="spec-row"${fld("foodPairing")}>${I.pairing}<p>${w.pairing.join(", ")}</p></div>
          <div class="spec-row"${fld("grapeVariety")}>${I.grape}<p>${esc(w.grapes)}</p></div>
        </div>
        <div class="pd-block"${cms("description", PD + "/about-product")}><p class="label">About wine</p><p>${esc(w.desc)}</p></div>
        <ul class="pd-table"${cms("packagingType, closureType, sugarContent, country, region, subRegion, skanlogNumber, vinmonopoletId, epdNumber, gtin, allergens", PD + "/product-table", "Rows render only when the field has a value")}>
          ${[["Packaging type", "Glass bottle"], ["Closure type", w.type === "Sparkling" ? "Cork with muselet" : "Natural cork"], ["Sugar", w.taste.sweetness > 3 ? "38 g/l" : "Under 3 g/l"], ["Country", w.country], ["Location", p.district], ["Region", p.region], ["Vinmonopol number", w.vm], ["GTIN", "70" + w.vm + "00012"], ["Allergens", "Contains sulphites"]].map(([a, b]) => `<li><span>${a}</span><span>${esc(b)}</span></li>`).join("")}
        </ul>
        <div class="pd-attach"${cms("code: product sheet PDF + image download", PD + "/product-attachments")}>
          <div class="dl"><a>${I.file}Download product sheet</a><a>${I.image}Download product image</a></div>
          <span class="muted">Alcohol use can have various harmful effects. <u>Click here to read more.</u></span>
        </div>
      </section>
    </div>
    <section class="about-producer dark" aria-label="About the producer"${cms("parent › producer (name, intro, hero, path)", PD + "/about-producer")}>
      <div class="container">
        <div class="img"${fld("hero")}>${scene(p.scene, 11, "Producer hero")}</div>
        <div>
          <span class="label rule">About the producer</span>
          <h2${fld("name")}>${esc(p.name)}</h2>
          <p class="intro"${fld("intro")}>${esc(p.intro)}</p>
          ${tlink("Read more", "#pr." + p.slug, "", fld("path"))}
        </div>
      </div>
    </section>
    ${related.length ? `<section class="container" style="padding-block:var(--gap)" aria-label="Related wines"${cms("parent › producer.children (defaultProduct)", PD + "/related-products")}>
      <div class="module-head"><span class="label rule">Wines from ${esc(p.name)}</span></div>
      <div class="product-list">${related.map(productTile).join("")}</div>
    </section>` : ""}`;
  };

  // Producers list: app/(producers)/producers/page.tsx ← producers folder + producer items
  const pstate = { q: "", country: "" };
  pages.producers = () => `
    <section class="container page-title"${cms("producers (folder) › title", "app/(producers)/producers/page.tsx", "Also: backgroundColor, meta")}><h1>Our producers</h1></section>
    <div class="container">
      <div class="producers-controls">
        <div class="search"${cms("query: search text", "features/producer (ProducerSearch)")}>${I.search}<label for="pq" class="sr">Search producers</label><input id="pq" type="search" placeholder="Search our producers" value="${esc(pstate.q)}"></div>
        <div class="sort"${cms("FetchProducerFacets › Country", "features/producer (ProducerFilterCountry)")}><label for="pc" class="sr">Country</label><select id="pc"><option value="">All countries</option>${countBy((w) => w.country).map(([c]) => `<option ${pstate.country === c ? "selected" : ""} value="${esc(c)}">${esc(c)} - ${producers.filter((p) => p.country === c).length}</option>`).join("")}</select>${I.chevron}</div>
      </div>
      <div class="producer-list" data-plist${cms("FetchProducerList → producer[]", "features/producer/producer-list", "50 per page, infinite scroll")}></div>
    </div>`;

  function renderProducers() {
    const el = document.querySelector("[data-plist]");
    if (!el) return;
    const list = producers.filter((p) => (!pstate.country || p.country === pstate.country) && (!pstate.q || (p.name + p.district + p.country).toLowerCase().includes(pstate.q.toLowerCase())));
    el.innerHTML = list.length ? list.map((p, i) => `<a class="producer-row" href="#pr.${p.slug}"${i === 0 ? cms("producer", "features/producer/single-producer", "Fields: name, path, hero, attributes.properties (Country, District)") : ""}>
        <h2${i === 0 ? fld("name") : ""}>${esc(p.name)}</h2><span class="country"${i === 0 ? fld("properties › Country") : ""}>${esc(p.country)}</span><span class="district"${i === 0 ? fld("properties › District") : ""}>${esc(p.district)}</span>
        <span class="float" aria-hidden="true">${scene(p.scene, i + 2)}</span>
      </a>`).join("") : `<p class="empty">No producers match your search.</p>`;
    applyDev();
  }

  // Producer detail: app/(producers)/producers/[slug] ← producer shape
  pages.producer = (slug) => {
    const p = P[slug] || producers[0];
    const list = wines.filter((w) => w.producer === p.slug);
    const PRD = "features/producer-detail";
    return `
    <div class="container producer-head"${cms("producer › name + attributes.properties", PRD, "Header: name, #Country | #District, All wines link")}>
      <h1${fld("name")}>${esc(p.name)}</h1>
      <div class="row"><span${fld("properties › Country, District")}>#${esc(p.country)} | #${esc(p.district)}</span>${tlink("All wines", "#all-wines", "down")}</div>
    </div>
    <div class="container"><div class="producer-hero"${cms("producer › hero", PRD + " (hero image)")}>${scene(p.scene, 21, "Producer hero")}</div></div>
    <div class="container producer-intro"${cms("producer › intro", PRD + " (intro, rich text)")}><p>${esc(p.intro)}</p></div>
    <div class="container">
      ${counters([["Founded", p.founded], ["Hectares of Land (Approximately)", p.ha], ["Numbers of different wines", p.wines], ["Production Per year (bottles)", p.bottles], ["Winemaker", p.winemaker], ["Varietals", p.varietals]], 3, "producer › attributes.properties")}
    </div>
    <div class="container story">
      <figure class="single-image large"${cms("producer › story[0].firstImage", "blocks/single-image")}>${scene("cellar", 31, "Story image")}</figure>
      <div class="paragraphs"${cms("producer › story[0] (title, body)", "blocks/paragraph-collection")}>
        <div class="row"><span class="label"${fld("title")}>The vineyards</span><p${fld("body")}>${esc(p.varietals)} grown in ${esc(p.region)}. Work in the vineyard follows the seasons and the needs of each parcel, with as little intervention as possible and a clear focus on healthy soils.</p></div>
      </div>
      <div class="paragraphs"${cms("producer › story[1] (title, body)", "blocks/paragraph-collection")}>
        <div class="row"><span class="label">In the cellar</span><p>Gentle handling, native fermentations where possible and patient ageing. The aim is wines that express where they come from and the people behind them.</p></div>
      </div>
    </div>
    <section class="container" id="all-wines" style="padding-block:var(--gap)" aria-label="Wines"${cms("producer children → defaultProduct[]", "features/product-list (#all-wines)")}>
      <div class="module-head"><span class="label rule">Wines from ${esc(p.name)}</span></div>
      <div class="product-list">${list.map(productTile).join("")}</div>
    </section>`;
  };

  // Articles list: views/articles-view ← articles shape + article children
  pages.articles = () => `
    <section class="container page-title"${cms("articles › title", "views/articles-view")}><h1>Articles</h1></section>
    <section class="container" style="padding-bottom:var(--gap)">
      <div class="article-list"${cms("articles › children (shape: article)", "features/article/article-list", "16 per page, infinite scroll")}>${articles.map(articleTile).join("")}</div>
    </section>`;

  // Article: views/article-view ← article shape: title, subtitle, blocks[] (no latestArticles in article blocks)
  pages.article = (slug) => {
    const a = A[slug] || articles[0];
    return `
    <header class="container article-head"${cms("article › title, subtitle", "features/article/article-title")}>
      <h1${fld("title")}>${esc(a.title)}</h1>
      <p${fld("subtitle")}>${esc(a.sub)}</p>
    </header>
    <div class="blocks" style="padding-top:0">
      <div class="container"><figure class="single-image large"${cms("article › blocks › singleImageModule", "blocks/single-image", "Fields: image, size")}>${media(a.img, "Single image")}</figure></div>
      <div class="container"${cms("article › blocks › richTextModule", "blocks/rich-text", "Fields: text, textAlign, largeVerticalSpacing, textColor")}>
        <div class="rich-text"${fld("text")}>
          <p>For an international producer, Norway can look simple from a distance: one retail monopoly, one set of rules, one route to the consumer. In practice it is one of the most structured and demanding wine markets in the world, and the details decide whether a wine finds its place.</p>
          <p>Most new listings at Vinmonopolet start with a product request. It describes the kind of wine the monopoly is looking for, often down to country, style, grape, price range and volume, and importers respond with the wines they believe fit.</p>
          <h2>From request to tasting</h2>
          <p>Choosing which wine to put forward is the first and most important decision. We look at the request together with the producer and ask a simple question: is this a wine that will represent the winery well, and can we support it after it is listed?</p>
          <blockquote>A listing is not the finish line. It is the start of the work.</blockquote>
          <ul><li>Agree the strategy and which wines to put forward</li><li>Prepare documentation, pricing and samples</li><li>Follow up after listing with sales, on-trade and reporting</li></ul>
        </div>
      </div>
      <section class="container group-image reverse" aria-label="Images"${cms("article › blocks › groupImageModule", "blocks/group-image", "reverseOrder: true")}>
        <div class="large"${fld("primaryImage")}>${scene("lees", 41, "Group image")}</div>
        <div class="small"${fld("secondaryImage")}><img class="cover" src="assets/crop-hand-portrait.jpg" alt=""></div>
      </section>
      <section class="container quote-block" aria-label="Quote"${cms("article › blocks › quoteModule", "blocks/quote", "Fields: quote, attribution")}>
        <blockquote${fld("quote")}>“Being a winery’s local representative is a responsibility we take seriously.”</blockquote>
        <cite class="label muted"${fld("attribution")}>Christoffer Bergsted, Founder</cite>
      </section>
    </div>`;
  };

  // Team: views/team-view (non-belmonte TeamView) ← team-members shape + employee children
  pages.team = () => `
    <section class="container page-title"${cms("team-members › title", "views/team-view")}><h1>Our team</h1></section>
    <section class="container team-tiles"${cms("team-members › children (shape: employee)", "views/team-view (tiles)")}>${[team.founder, ...team.sales].map(teamTile).join("")}</section>`;

  // Contact: views/contact-view ← contact shape: introModule piece + employeeList piece
  pages.contact = () => `
    <div class="contact-view">
      ${introModule({
        source: "contact › introModule",
        label: "Contact",
        lead: "Whether you are a winery looking for representation in Norway, or a restaurant interested in our wines, we would like to hear from you.",
        body: ["For producers and partnerships, contact Christoffer Bergsted at christoffer@bottinor.no.", "For restaurants, hotels and wine bars, our on-trade team works with key accounts and independent venues across Norway."],
      })}
      <div class="container"${cms("contact › employeeList (employeeContact, link)", "views/contact-view")}>
        <div class="team-grid"${fld("employeeContact.items")}>${[team.founder, ...team.sales.slice(0, 3)].map(teamTile).join("")}</div>
        <div style="margin-top:40px">${tlink("View all team members", "#team", "", fld("link"))}</div>
      </div>
    </div>`;

  // Shared with design-system.html, which renders component previews from the same helpers.
  window.Bottinor = { I, wines, W, producers, articles, team, bottle, scene, portrait, meter, tlink, keyInfo, tileInfo, kr, productTile, articleTile, teamTile, counters, introModule };
  if (!document.getElementById("app")) return;

  // ---------- Router ----------
  const ROUTES = [
    ["home", "Home", "#home"], ["products", "Products", "#products"], ["product", "Product", "#p.barolo-la-morra-2020"],
    ["producers", "Producers", "#producers"], ["producer", "Producer", "#pr.ca-del-vento"],
    ["articles", "Articles", "#articles"], ["article", "Article", "#a.vinmonopolet-tender"], ["team", "Our team", "#team"], ["contact", "Contact", "#contact"],
  ];

  function parse(hash) {
    const h = (hash || "").replace(/^#/, "");
    if (h.startsWith("p.")) return ["product", h.slice(2)];
    if (h.startsWith("pr.")) return ["producer", h.slice(3)];
    if (h.startsWith("a.")) return ["article", h.slice(2)];
    if (pages[h]) return [h];
    return ["home"];
  }

  const app = document.getElementById("app");
  const store = { get: (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } }, set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) { /* storage unavailable */ } } };
  let protoHidden = store.get("bottinor-proto-hidden") === "1";
  let dev = /(^|[?&])dev\b/.test(location.search) || store.get("bottinor-dev") === "1";

  // Dev view: annotated elements need a positioning context for their labels
  function applyDev() {
    document.body.classList.toggle("dev", dev);
    document.querySelectorAll("[data-tip]").forEach((el) => (dev ? (el.title = el.dataset.tip) : el.removeAttribute("title")));
    if (!dev) return;
    document.querySelectorAll("[data-cms],[data-field]").forEach((el) => {
      if (getComputedStyle(el).position === "static") el.style.position = "relative";
    });
  }

  function proto(route) {
    if (protoHidden) return `<button class="proto-min" type="button" data-proto-show>Pages</button>`;
    return `<nav class="proto" aria-label="Prototype pages"><span class="t">Bottinor prototype</span>${ROUTES.map(([k, t, h]) => `<a href="${h}" class="${k === route ? "on" : ""}">${t}</a>`).join("")}<a href="design-system.html">Design system</a><button class="dev-toggle ${dev ? "on" : ""}" type="button" data-dev aria-pressed="${dev}">Dev view</button><button type="button" data-proto-hide aria-label="Hide page navigator">×</button></nav>`;
  }

  const devLegend = () => `<aside class="dev-legend" aria-label="Dev view legend"><b>Dev view</b><span><i class="k-cms"></i>Crystallize shape / block → app component</span><span><i class="k-fld"></i>Field</span><span class="hint">Hover an outlined element for its full field list.</span></aside>`;

  function render() {
    const [route, slug] = parse(location.hash);
    app.innerHTML = `${header(route)}<main>${pages[route](slug)}</main>${footer()}${menuDialog()}${proto(route)}${devLegend()}`;
    if (route === "products") renderList();
    if (route === "producers") renderProducers();
    applyDev();
    window.scrollTo(0, 0);
  }

  // ---------- Events ----------
  const closeMenu = () => { document.querySelector(".menu-dialog").hidden = true; document.body.style.overflow = ""; };

  window.addEventListener("hashchange", () => { if (location.hash !== "#all-wines") render(); });

  document.addEventListener("click", (e) => {
    const t = e.target.closest("[data-open-menu],[data-close-menu],[data-remove],[data-clear],[data-proto-hide],[data-proto-show],[data-toggle-filters],[data-dev],.menu-dialog nav a,a[href='#all-wines']");
    if (!t) return;
    if (t.matches("a[href='#all-wines']")) { e.preventDefault(); document.getElementById("all-wines")?.scrollIntoView({ behavior: "smooth" }); return; }
    if (t.matches("[data-open-menu]")) { const d = document.querySelector(".menu-dialog"); d.hidden = false; document.body.style.overflow = "hidden"; d.querySelector("[data-close-menu]").focus(); applyDev(); }
    if (t.matches("[data-close-menu], .menu-dialog nav a")) closeMenu();
    if (t.matches("[data-remove]")) { state[t.dataset.remove].delete(t.dataset.v); document.querySelectorAll(`[data-f="${t.dataset.remove}"]`).forEach((c) => { if (c.value === t.dataset.v) c.checked = false; }); renderList(); }
    if (t.matches("[data-clear]")) { ["type", "country", "price", "producer"].forEach((k) => state[k].clear()); document.querySelectorAll("[data-f]").forEach((c) => (c.checked = false)); renderList(); }
    if (t.matches("[data-toggle-filters]")) document.querySelector(".filters").classList.toggle("open");
    if (t.matches("[data-dev]")) {
      dev = !dev;
      store.set("bottinor-dev", dev ? "1" : "0");
      t.classList.toggle("on", dev);
      t.setAttribute("aria-pressed", String(dev));
      if (!dev) document.querySelectorAll("[data-cms],[data-field]").forEach((el) => (el.style.position = ""));
      applyDev();
    }
    if (t.matches("[data-proto-hide],[data-proto-show]")) {
      protoHidden = t.matches("[data-proto-hide]");
      store.set("bottinor-proto-hidden", protoHidden ? "1" : "0");
      (document.querySelector(".proto") || document.querySelector(".proto-min")).outerHTML = proto(parse(location.hash)[0]);
    }
  });

  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !document.querySelector(".menu-dialog")?.hidden) closeMenu(); });

  document.addEventListener("change", (e) => {
    const t = e.target;
    if (t.matches("[data-f]")) { t.checked ? state[t.dataset.f].add(t.value) : state[t.dataset.f].delete(t.value); renderList(); }
    if (t.id === "sort") { state.sort = t.value; renderList(); }
    if (t.id === "pc") { pstate.country = t.value; renderProducers(); }
  });

  document.addEventListener("input", (e) => {
    if (e.target.id === "q") { state.q = e.target.value; renderList(); }
    if (e.target.id === "pq") { pstate.q = e.target.value; renderProducers(); }
  });

  document.addEventListener("submit", (e) => {
    e.preventDefault();
    const done = e.target.querySelector(".done");
    if (done) done.hidden = false;
  });

  render();
})();
