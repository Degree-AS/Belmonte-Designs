/* Provenance Wines — brand content for the shared prototype engine (../../shared/prototype.js).
   No website copy was supplied: all text, wines, producers, articles and people are example content. */
(() => {
  const producers = [
    { slug: "vaillant-rey", name: "Domaine Vaillant-Rey", country: "France", district: "Loire", region: "Sancerre", founded: "1958", ha: "18", wines: "6", bottles: "90 000", winemaker: "Juliette Rey", varietals: "Sauvignon Blanc, Pinot Noir", scene: "blush",
      intro: "Flint and white chalk on the slopes around Bué. The Rey family farms eighteen hectares and bottles each soil separately, so the place shows in the glass." },
    { slug: "monte-selva", name: "Cantina Monte Selva", country: "Italy", district: "Toscana", region: "Chianti Classico", founded: "1974", ha: "24", wines: "7", bottles: "110 000", winemaker: "Davide Lucchesi", varietals: "Sangiovese, Canaiolo, Colorino", scene: "dusk",
      intro: "Galestro soils and old olive groves above Radda. Sangiovese aged in large casks, made for the table rather than for show." },
    { slug: "alcornoque", name: "Bodega Viña Alcornoque", country: "Spain", district: "Ribera del Duero", region: "Burgos", founded: "1996", ha: "30", wines: "5", bottles: "150 000", winemaker: "Marta Arranz", varietals: "Tempranillo (Tinto Fino)", scene: "stone",
      intro: "Vineyards on the high plateau at 850 metres, where cold nights keep Tinto Fino fresh. Old vines, long macerations and patient ageing." },
    { slug: "rosenhang", name: "Weingut Rosenhang", country: "Austria", district: "Wachau", region: "Spitzer Graben", founded: "1912", ha: "12", wines: "8", bottles: "60 000", winemaker: "Lukas Hofer", varietals: "Grüner Veltliner, Riesling", scene: "blush",
      intro: "Dry-stone terraces above the Danube in the cool western Wachau. Grüner Veltliner and Riesling with precision, picked by hand terrace by terrace." },
    { slug: "delorme", name: "Maison Delorme & Fils", country: "France", district: "Provence", region: "Côtes de Provence", founded: "1938", ha: "40", wines: "4", bottles: "220 000", winemaker: "Claire Delorme", varietals: "Grenache, Cinsault, Rolle", scene: "dusk",
      intro: "Pale, dry rosé from vineyards between the sea and the Massif des Maures. Night picking and gentle pressing keep the colour light and the fruit precise." },
    { slug: "haut-lavigne", name: "Château Haut-Lavigne", country: "France", district: "Bordeaux", region: "Côtes de Bourg", founded: "1890", ha: "22", wines: "4", bottles: "100 000", winemaker: "Antoine Lavigne", varietals: "Merlot, Cabernet Sauvignon, Malbec", scene: "night",
      intro: "Clay and limestone slopes looking across the Gironde. A family château making honest, food-friendly Bordeaux at a fair price." },
  ];

  const T = (body, freshness, tannins, sweetness, oak, herb, fruitness) => ({ body, freshness, tannins, sweetness, oak, herb, fruitness });
  const wines = [
    { slug: "sancerre-les-caillottes-2024", name: "Sancerre Les Caillottes 2024", producer: "vaillant-rey", type: "White", alc: "13 %", price: 289.9, vm: "2456701", shape: "burgundy", glass: "white", capsule: "#EEBEB1", grapes: "100% Sauvignon Blanc", pairing: ["Shellfish", "Goat cheese", "Fish"], taste: T(5, 11, 0, 1, 0, 6, 8),
      char: "Grapefruit, cut grass and a chalky, saline finish.", desc: "From the white limestone ‘caillottes’ soils around Bué. Fermented in stainless steel and kept on fine lees until spring." },
    { slug: "sancerre-rouge-2023", name: "Sancerre Rouge 2023", producer: "vaillant-rey", type: "Red", alc: "12.5 %", price: 299.9, vm: "2456702", shape: "burgundy", glass: "red", capsule: "#474545", grapes: "100% Pinot Noir", pairing: ["Poultry", "Pork", "Mushrooms"], taste: T(5, 9, 5, 1, 3, 4, 8),
      char: "Red cherry, rose petal and a cool, mineral line.", desc: "Pinot Noir from flint soils, aged ten months in older barrels to keep the fruit bright." },
    { slug: "cremant-de-loire-brut", name: "Crémant de Loire Brut", producer: "vaillant-rey", type: "Sparkling", alc: "12 %", price: 229.9, vm: "2456703", shape: "flute", glass: "sparkling", capsule: "#F4E7E2", grapes: "Chenin Blanc, Chardonnay, Pinot Noir", pairing: ["Aperitif", "Shellfish", "Fish"], taste: T(5, 10, 0, 2, 0, 3, 7),
      char: "Green apple, brioche and a fine, lively mousse.", desc: "Traditional method, 18 months on the lees. Dosage 6 g/l." },
    { slug: "chianti-classico-2022", name: "Chianti Classico 2022", producer: "monte-selva", type: "Red", alc: "13.5 %", price: 249.9, vm: "2456704", shape: "bordeaux", glass: "red", capsule: "#9A5A4E", grapes: "90% Sangiovese, 10% Canaiolo", pairing: ["Pasta", "Beef", "Mature cheese"], taste: T(7, 9, 7, 1, 3, 6, 8),
      char: "Sour cherry, violets and dried herbs, firm and fresh.", desc: "Twelve months in large Slavonian oak casks from the estate’s galestro vineyards." },
    { slug: "chianti-classico-riserva-2020", name: "Chianti Classico Riserva 2020", producer: "monte-selva", type: "Red", alc: "14 %", price: 349.9, vm: "2456705", shape: "bordeaux", glass: "red", capsule: "#474545", grapes: "100% Sangiovese", pairing: ["Game", "Beef", "Mushrooms"], taste: T(8, 8, 8, 1, 5, 6, 7),
      char: "Dark cherry, leather and tobacco with fine tannins.", desc: "A selection of the oldest vines, 24 months in cask and a year in bottle before release." },
    { slug: "ribera-crianza-2021", name: "Ribera del Duero Crianza 2021", producer: "alcornoque", type: "Red", alc: "14 %", price: 229.9, vm: "2456706", shape: "bordeaux", glass: "red", capsule: "#9A5A4E", grapes: "100% Tinto Fino", pairing: ["Lamb", "Barbecue", "Beef"], taste: T(8, 7, 7, 1, 6, 4, 8),
      char: "Blackberry, cocoa and spice with a cool finish.", desc: "Fourteen months in French and American oak from high-altitude vineyards." },
    { slug: "ribera-reserva-2018", name: "Ribera del Duero Reserva 2018", producer: "alcornoque", type: "Red", alc: "14.5 %", price: 389.9, vm: "2456707", shape: "bordeaux", glass: "red", capsule: "#474545", grapes: "100% Tinto Fino", pairing: ["Lamb", "Game", "Mature cheese"], taste: T(9, 7, 8, 1, 7, 5, 7),
      char: "Plum, cedar and graphite, long and structured.", desc: "Old vines over 60 years, two years in barrel and two in bottle." },
    { slug: "gruner-federspiel-2024", name: "Grüner Veltliner Federspiel 2024", producer: "rosenhang", type: "White", alc: "12.5 %", price: 239.9, vm: "2456708", shape: "alsace", glass: "white", capsule: "#EEBEB1", grapes: "100% Grüner Veltliner", pairing: ["Fish", "Vegetables", "Shellfish"], taste: T(5, 10, 0, 1, 0, 5, 7),
      char: "Green pear, white pepper and a crisp, dry finish.", desc: "From the lower terraces, fermented cool in steel to keep the pepper and freshness." },
    { slug: "riesling-smaragd-2023", name: "Riesling Smaragd 2023", producer: "rosenhang", type: "White", alc: "13.5 %", price: 349.9, vm: "2456709", shape: "alsace", glass: "white", capsule: "#474545", grapes: "100% Riesling", pairing: ["Fish", "Poultry", "Spicy food"], taste: T(7, 10, 0, 2, 0, 3, 9),
      char: "Apricot, lime zest and wet stone, full and precise.", desc: "From the steepest gneiss terrace, picked late and fermented in old acacia casks." },
    { slug: "cotes-de-provence-rose-2025", name: "Côtes de Provence Rosé 2025", producer: "delorme", type: "Rosé", alc: "13 %", price: 199.9, vm: "2456710", shape: "bordeaux", glass: "rose", capsule: "#EEBEB1", grapes: "Grenache, Cinsault, Rolle", pairing: ["Aperitif", "Shellfish", "Vegetables"], taste: T(4, 9, 0, 1, 0, 4, 8),
      char: "Redcurrant, white peach and a dry, saline finish.", desc: "Picked at night and direct-pressed for a pale colour. Fermented cool in steel." },
    { slug: "provence-rose-cuvee-2025", name: "Cuvée Massif Rosé 2025", producer: "delorme", type: "Rosé", alc: "13 %", price: 259.9, vm: "2456711", shape: "burgundy", glass: "rose", capsule: "#F4E7E2", grapes: "Grenache, Rolle", pairing: ["Fish", "Shellfish", "Poultry"], taste: T(5, 9, 0, 1, 2, 4, 8),
      char: "Wild strawberry, citrus peel and a creamy texture.", desc: "The estate’s best parcels, a third fermented in large oak for texture." },
    { slug: "cotes-de-bourg-2020", name: "Côtes de Bourg 2020", producer: "haut-lavigne", type: "Red", alc: "13.5 %", price: 189.9, vm: "2456712", shape: "bordeaux", glass: "red", capsule: "#474545", grapes: "Merlot, Cabernet Sauvignon, Malbec", pairing: ["Beef", "Lamb", "Barbecue"], taste: T(7, 7, 6, 1, 4, 4, 8),
      char: "Plum, blackcurrant and a soft, earthy finish.", desc: "Twelve months in barrel, a third new. Ready to drink with food." },
  ];

  const articles = [
    { slug: "what-provenance-means", title: "What provenance means in a glass", sub: "Why we only work with wines that can be traced to a grower, a place and a vintage.", img: { scene: "lines-charcoal", seed: 4 } },
    { slug: "a-week-in-sancerre", title: "A week in Sancerre", sub: "Harvest notes from the Rey family’s flint and chalk slopes.", img: { scene: "blush", seed: 6 } },
    { slug: "provence-rose-all-year", title: "Provence rosé is not only for summer", sub: "Pale, dry rosé and the Norwegian table, from shellfish to Sunday lunch.", img: { scene: "dusk", seed: 2 } },
    { slug: "gruner-and-nordic-food", title: "Grüner Veltliner and Nordic food", sub: "Why a Wachau Federspiel works with cured fish, root vegetables and dill.", img: { scene: "stone", seed: 8 } },
    { slug: "how-we-choose-a-grower", title: "How we choose a grower", sub: "Five questions we ask before a wine joins the portfolio.", img: { scene: "lines-blush", seed: 3 } },
    { slug: "from-vineyard-to-vinmonopolet", title: "From vineyard to Vinmonopolet", sub: "The route a bottle takes before it reaches a Norwegian shelf.", img: { scene: "night", seed: 5 } },
  ];

  const person = (name, role) => ({ name, role, email: name.split(" ")[0].toLowerCase() + "@provenancewines.no", phone: "+47 000 00 000" });

  window.BRAND = {
    key: "provenance",
    name: "Provenance Wines",
    shortName: "Provenance",
    logo: {
      brandOnLight: "assets/wordmark-charcoal.png",
      brandOnDark: "assets/wordmark-blush.png",
      groupOnLight: "assets/belmonte-group-logo-charcoal.svg",
      groupOnDark: "assets/belmonte-group-logo-porcelain.svg",
    },
    fonts: { serif: "Fraunces, Georgia, serif", sans: "Instrument Sans, Arial, sans-serif" },
    icons: {
      // Provenance ThemedLink arrow: long and horizontal
      arrow: `<svg viewBox="0 0 20 12" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 6h17M13.5 1.5 18 6l-4.5 4.5"/></svg>`,
    },
    colors: {
      labelPaper: "#FAF6F4", labelInk: "#474545", labelText: "#474545", labelMuted: "#6F6A69",
      meter: "#474545",
      portraitBgs: ["#F4E7E2", "#F2D5CC", "#E7E3E1", "#EFE4DF"], portraitInk: "#474545",
      cellar: { bg: "#2F2D2D", barrel: "#474545", line: "#EEBEB1" },
      scenes: {
        blush: ["#F4E7E2", "#EEBEB1", "#C99A8E", "#474545", "#FAF6F4"],
        dusk: ["#EEBEB1", "#C98B7E", "#6F5F5C", "#2F2D2D", "#FAF6F4"],
        stone: ["#E7E3E1", "#BDB5B2", "#8A8381", "#474545", "#FAF6F4"],
        night: ["#474545", "#5A5655", "#3A3838", "#2B2929", "#EEBEB1"],
        "lines-charcoal": ["#474545", "#EEBEB1", "#F4E7E2"],
        "lines-blush": ["#F4E7E2", "#9A5A4E", "#EEBEB1"],
      },
      lightScenes: ["blush", "stone", "lines-blush"],
    },
    nav: [["Producers", "#producers", "producer"], ["Our selection", "#products", "product"], ["Journal", "#articles", "article"]],
    footerSecondary: ["Privacy policy", "Cookie settings", "Alcohol and health", "Instagram", "LinkedIn"],
    titles: { articles: "Journal" },
    demo: { product: "cotes-de-provence-rose-2025", producer: "vaillant-rey" },
    storyScene: "cellar",
    producers, wines, articles,
    team: {
      lead: { ...person("Ingrid Solberg", "Managing Director"), bio: [
        "Ingrid has spent twenty years in the Norwegian wine trade, on the restaurant floor and as an importer.",
        "She visits every grower in the portfolio at least once a year and still tastes every new vintage before it is offered in Norway.",
      ] },
      members: [person("Jonas Berg", "Sales Director"), person("Mari Haugen", "Key Account Manager"), person("Anders Lie", "Area Sales Manager"), person("Sofie Dahl", "Brand Manager"), person("Henrik Moe", "Area Sales Manager"), person("Thea Nilsen", "On-trade Manager"), person("Erik Strand", "Area Sales Manager")],
    },

    // domain shape › blocks[] (only blocks FetchDomainPage requests)
    home: [
      { type: "banner", title: "Wines that know<br>where they come from.", intro: "Small growers, single places and honest wines, selected for Norway.", image: { scene: "lines-charcoal", seed: 3, note: "Brand photography" } },
      { type: "intro", label: "Our story",
        lead: "Provenance Wines brings wines with a clear origin to Norway. Every bottle can be traced to a grower, a place and a vintage.",
        body: ["We work with a small number of family estates and visit each of them every year. We choose wines for the place they come from, not for a trend."],
        links: [["Our producers", "#producers"], ["Our selection", "#products"]] },
      { type: "groupImage", large: { scene: "blush", seed: 5, note: "Vineyard photography" }, small: { scene: "dusk", seed: 9, note: "Grower portrait" } },
      { type: "intro", label: "What we look for", lead: "Three things every wine in our portfolio has in common." },
      { type: "paragraphs", rows: [
        { title: "A place", heading: "You can taste where it grew.", body: "Single vineyards, single villages or a clearly defined area. The soil and climate should be part of the wine, not hidden by it." },
        { title: "A grower", heading: "Someone we know by name.", body: "Family estates that farm their own vines and make their own wine. We know who picked the grapes and who decided when." },
        { title: "Balance", heading: "Made for the table.", body: "Fresh acidity, ripe fruit and moderate oak. Wines that work with food and are as good on the second glass as on the first." },
      ] },
      { type: "richText", html: "<blockquote>“A wine should taste of the place it comes from.”</blockquote><p class=\"label\">Provenance Wines</p>" },
      { type: "intro", label: "Our growers", lead: "Six family estates in four countries, each chosen for a place." },
      { type: "producerList", link: "Meet all growers" },
      { type: "employees", label: "Your contact" },
      { type: "latestArticles", label: "From the journal" },
      { type: "newsletter", title: "Stories from our growers, a few times a year.", checkboxes: ["I work in hospitality", "I am a producer"], done: "Thank you. You will receive the next letter." },
    ],

    // article shape › blocks[] (after the cover singleImage, which comes from the article's thumbnail)
    articleBlocks: [
      { type: "richText", html: `<p>Provenance is a simple idea: a wine should be able to tell you where it comes from. Not only the country or the region, but the slope, the grower and the year it was made.</p>
        <p>That is why we work with family estates that farm their own vines. When a grower knows every parcel, the decisions about picking, pressing and ageing are made for that place, and you can taste it.</p>
        <h2>Five questions we ask</h2>
        <ul><li>Does the grower farm the vineyards themselves?</li><li>Can we name the place, not just the region?</li><li>Is the wine balanced and made for food?</li><li>Will it keep its character from vintage to vintage?</li><li>Can we support it in Norway for years, not for one season?</li></ul>
        <blockquote>We would rather have six growers we know well than sixty we do not.</blockquote>` },
      { type: "groupImage", reverse: true, large: { scene: "stone", seed: 41, note: "Group image" }, small: { scene: "blush", seed: 12, note: "Portrait" } },
      { type: "quote", quote: "“The best wines in our portfolio are the ones you can place on a map with your eyes closed.”", attribution: "Ingrid Solberg, Managing Director" },
    ],

    // producer shape › story[] (title, body); {placeholders} filled from the producer
    producerStory: [
      { title: "The place", body: "{region} in {district}. The estate farms {ha} hectares of {varietals}, and each parcel is picked and vinified on its own so the differences between them stay in the wine." },
      { title: "The grower", body: "{winemaker} leads the estate today. We visit every year at harvest and taste each new vintage together before it is offered in Norway." },
    ],

    // contact shape › introModule
    contact: {
      label: "Contact",
      lead: "We would like to hear from you, whether you run a restaurant, a wine bar or a hotel, or you are a grower looking for a partner in Norway.",
      body: ["For the portfolio and new growers, contact Ingrid Solberg at ingrid@provenancewines.no.", "For restaurants, hotels and wine bars, our on-trade team works with venues across Norway."],
    },
  };
})();
