/* Bottinor — brand content for the shared prototype engine (../../shared/prototype.js).
   Copy comes from tekst_til_nettsiden.docx; wines, producers and articles are example content. */
(() => {
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

  const team = {
    founder: { name: "Christoffer Bergsted", role: "Founder & Managing Director", email: "christoffer@bottinor.no", phone: "+47 000 00 000" },
    sales: [
      ["Simon Pizzoni", "Commercial Director Sales"], ["Silje Lindqvist", "Key Account Manager"], ["Petter Svanæs", "Area Sales Manager"], ["Maira Scapin", "Area Sales Manager"],
      ["Håkon Fjelli", "Area Sales Manager"], ["Emil Wang", "Area Sales Manager"], ["Alf Erik Efraimsen", "Area Sales Manager"], ["Maren Gunnvelt", "Area Sales Manager"],
      ["Linus Larup", "Field Sales Manager"], ["Alen Tupkovic", "Area Sales Manager"], ["Tinius Schie Berntsen", "Area Sales Manager"],
    ].map(([name, role]) => ({ name, role, email: name.split(" ")[0].toLowerCase().replace("å", "a").replace("æ", "ae") + "@belmonte.no", phone: "+47 000 00 000" })),
  };


  window.BRAND = {
    key: "bottinor",
    name: "Bottinor Wine Merchant",
    shortName: "Bottinor",
    logo: {
      brandOnLight: "assets/wordmark-bottle-green.png",
      brandOnDark: "assets/wordmark-greige.png",
      groupOnLight: "assets/belmonte-group-logo-bottle-green.svg",
      groupOnDark: "assets/belmonte-group-logo-greige.svg",
    },
    fonts: { serif: "Newsreader, Georgia, serif", sans: "Manrope, Arial, sans-serif" },
    colors: {
      labelPaper: "#F3F2F0", labelInk: "#162A19", labelText: "#171717", labelMuted: "#5b5d56",
      meter: "#162A19",
      portraitBgs: ["#E4E1D4", "#D8C9A7", "#C9CEC0", "#E6D3CF"], portraitInk: "#162A19",
      cellar: { bg: "#21170f", barrel: "#49362B", line: "#C5AD8E" },
      scenes: {
        lees: ["#D8C9A7", "#C5AD8E", "#879684", "#162A19", "#F3F2F0"],
        sage: ["#E3E3D3", "#AFB7A4", "#879684", "#162A19", "#F0F0E5"],
        dusk: ["#D5A7A3", "#A5674D", "#49362B", "#21170f", "#D8C9A7"],
        night: ["#262B47", "#3a4062", "#1d2138", "#11142a", "#D8C9A7"],
        green: ["#24402a", "#879684", "#2f4a33", "#162A19", "#D8C9A7"],
        rose: ["#EBD2CE", "#D5A7A3", "#A5674D", "#66050A", "#F3F2F0"],
      },
      lightScenes: ["sage", "rose"],
    },
    nav: [["Producers", "#producers", "producer"], ["Our selection", "#products", "product"], ["Articles", "#articles", "article"]],
    footerSecondary: ["Privacy policy", "Cookie settings", "Alcohol and health", "Instagram", "LinkedIn"],
    titles: { articles: "Articles" },
    demo: { product: "barolo-la-morra-2020", producer: "ca-del-vento" },
    storyScene: "cellar",
    producers, wines, articles,
    team: {
      lead: { ...team.founder, bio: [
        "Christoffer founded Bottinor out of a genuine passion for wine, the people behind it, and the challenge of building long-lasting positions in the Norwegian market.",
        "His approach is personal and hands-on: understanding each winery, what matters to the people behind it, and how to represent them well in Norway.",
      ] },
      members: team.sales,
    },

    // domain shape › blocks[] (only blocks FetchDomainPage requests)
    home: [
      { type: "banner", title: "Committed to your wines.<br>Focused on Norway.", intro: "Personal partnerships. Local insight. A lasting commitment to your winery.", image: { photo: "assets/hero-bottles.jpg" } },
      { type: "intro", label: "A personal approach to wine",
        lead: "Bottinor is a Norwegian wine company and part of the Belmonte Beverage Group. We work closely with a select group of producers, acting as an extension of their wineries in Norway.",
        body: ["Our role is to represent their wines, values and ambitions with care. We combine close personal partnerships with a structured approach to the Norwegian market.", "Together, we build lasting market positions that reflect each winery’s identity and long-term strategy."],
        links: [["Our producers", "#producers"], ["Meet the team", "#team"]] },
      { type: "groupImage", large: { photo: "assets/hero-bottles.jpg" }, small: { scene: "lees", seed: 7, note: "Producer photography" } },
      { type: "intro", label: "How we work", lead: "Your ambitions. Our shared direction. We combine local market expertise with close, hands-on partnerships." },
      { type: "paragraphs", rows: [
        { title: "Understand", heading: "Start with the winery.", body: "Every collaboration begins with understanding the winery, its identity, priorities and ambitions. Together, we develop a strategy for Norway that connects those ambitions with the opportunities in the market." },
        { title: "Build", heading: "Find the right route.", body: "Our work covers the full route to market, from portfolio strategy, pricing and Vinmonopolet tenders to distribution, sales, marketing and on-trade development." },
        { title: "Develop", heading: "Stay closely involved.", body: "After launch, we monitor performance, share market insight and identify opportunities for further development. Clear priorities, measurable objectives and transparent reporting keep our producers involved in both decisions and results." },
      ] },
      { type: "richText", html: "<blockquote>“I want the producers I work with to feel that they have a colleague here.”</blockquote><p class=\"label muted\">Christoffer Bergsted, Founder</p>" },
      { type: "intro", label: "Our producers", lead: "A small group of wineries, each keeping its own identity. We provide the local relationship." },
      { type: "producerList", link: "Show all producers" },
      { type: "employees", label: "A personal introduction" },
      { type: "intro", label: "Part of a bigger family", lead: "A personal commitment. A collective strength.",
        body: ["Belmonte Beverage Group has hand-picked key employees with over 250 years of industry experience combined, and has quickly established itself as an innovative challenger in the Norwegian import industry.", "Through Strawberry Equities, the Stordalen family is the majority owner of Belmonte Beverage Group."] },
      { type: "latestArticles", label: "Latest articles" },
      { type: "newsletter", title: "Market notes from Norway, four times a year.", checkboxes: ["I am a producer", "I work in hospitality"], done: "Thank you. You will receive the next issue." },
    ],

    // article shape › blocks[] (after the cover singleImage, which comes from the article's thumbnail)
    articleBlocks: [
      { type: "richText", html: `<p>For an international producer, Norway can look simple from a distance: one retail monopoly, one set of rules, one route to the consumer. In practice it is one of the most structured and demanding wine markets in the world, and the details decide whether a wine finds its place.</p>
        <p>Most new listings at Vinmonopolet start with a product request. It describes the kind of wine the monopoly is looking for, often down to country, style, grape, price range and volume, and importers respond with the wines they believe fit.</p>
        <h2>From request to tasting</h2>
        <p>Choosing which wine to put forward is the first and most important decision. We look at the request together with the producer and ask a simple question: is this a wine that will represent the winery well, and can we support it after it is listed?</p>
        <blockquote>A listing is not the finish line. It is the start of the work.</blockquote>
        <ul><li>Agree the strategy and which wines to put forward</li><li>Prepare documentation, pricing and samples</li><li>Follow up after listing with sales, on-trade and reporting</li></ul>` },
      { type: "groupImage", reverse: true, large: { scene: "lees", seed: 41, note: "Group image" }, small: { photo: "assets/crop-hand-portrait.jpg" } },
      { type: "quote", quote: "“Being a winery’s local representative is a responsibility we take seriously.”", attribution: "Christoffer Bergsted, Founder" },
    ],

    // producer shape › story[] (title, body); {placeholders} filled from the producer
    producerStory: [
      { title: "The vineyards", body: "{varietals} grown in {region}. Work in the vineyard follows the seasons and the needs of each parcel, with as little intervention as possible and a clear focus on healthy soils." },
      { title: "In the cellar", body: "Gentle handling, native fermentations where possible and patient ageing. The aim is wines that express where they come from and the people behind them." },
    ],

    // contact shape › introModule
    contact: {
      label: "Contact",
      lead: "Whether you are a winery looking for representation in Norway, or a restaurant interested in our wines, we would like to hear from you.",
      body: ["For producers and partnerships, contact Christoffer Bergsted at christoffer@bottinor.no.", "For restaurants, hotels and wine bars, our on-trade team works with key accounts and independent venues across Norway."],
    },
  };
})();
