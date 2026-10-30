/* Provenance Wines — brand content for the shared prototype engine (../../shared/prototype.js).
   Visual identity: Provenance Wines Visual Identity v1.0 (29 October 2026). The "Our story" text and the slogan come
   from it; the rest of the copy, wines, producers, articles and people are example content.
   Photos (client, 2026-10-30) are art-direction placeholders, not the final website photography: assets/photos/lqp-*
   from lesquatrepiliers.com, the others from the client's folder. They are not portraits of the sample producers. */
(() => {
  const producers = [
    { slug: "vaillant-rey", photo: "assets/photos/lqp-house.jpg", storyPhoto: "assets/photos/lqp-pillar.jpg", name: "Domaine Vaillant-Rey", country: "France", district: "Loire", region: "Sancerre", founded: "1958", ha: "18", wines: "6", bottles: "90 000", winemaker: "Juliette Rey", varietals: "Sauvignon Blanc, Pinot Noir", scene: "stone",
      intro: "Flint and white chalk on the slopes around Bué. The Rey family farms eighteen hectares and bottles each soil separately, so the place shows in the glass." },
    { slug: "monte-selva", photo: "assets/photos/curley-horse-tower.jpg", storyPhoto: "assets/photos/lqp-cellar-work.jpg", name: "Cantina Monte Selva", country: "Italy", district: "Toscana", region: "Chianti Classico", founded: "1974", ha: "24", wines: "7", bottles: "110 000", winemaker: "Davide Lucchesi", varietals: "Sangiovese, Canaiolo, Colorino", scene: "earth",
      intro: "Galestro soils and old olive groves above Radda. Sangiovese aged in large casks, made for the table rather than for show." },
    { slug: "alcornoque", photo: "assets/photos/lqp-harvest.jpg", storyPhoto: "assets/photos/lqp-tanks.jpg", name: "Bodega Viña Alcornoque", country: "Spain", district: "Ribera del Duero", region: "Burgos", founded: "1996", ha: "30", wines: "5", bottles: "150 000", winemaker: "Marta Arranz", varietals: "Tempranillo (Tinto Fino)", scene: "stone",
      intro: "Vineyards on the high plateau at 850 metres, where cold nights keep Tinto Fino fresh. Old vines, long macerations and patient ageing." },
    { slug: "rosenhang", photo: "assets/photos/boxler-village.jpg", storyPhoto: "assets/photos/lqp-harvest-crate.jpg", name: "Weingut Rosenhang", country: "Austria", district: "Wachau", region: "Spitzer Graben", founded: "1912", ha: "12", wines: "8", bottles: "60 000", winemaker: "Lukas Hofer", varietals: "Grüner Veltliner, Riesling", scene: "stone",
      intro: "Dry-stone terraces above the Danube in the cool western Wachau. Grüner Veltliner and Riesling with precision, picked by hand terrace by terrace." },
    { slug: "delorme", photo: "assets/photos/lqp-vines-walk.jpg", storyPhoto: "assets/photos/lqp-table.jpg", name: "Maison Delorme & Fils", country: "France", district: "Provence", region: "Côtes de Provence", founded: "1938", ha: "40", wines: "4", bottles: "220 000", winemaker: "Claire Delorme", varietals: "Grenache, Cinsault, Rolle", scene: "earth",
      intro: "Pale, dry rosé from vineyards between the sea and the Massif des Maures. Night picking and gentle pressing keep the colour light and the fruit precise." },
    { slug: "haut-lavigne", photo: "assets/photos/lqp-house-vines.jpg", storyPhoto: "assets/photos/lqp-barrels.jpg", name: "Château Haut-Lavigne", country: "France", district: "Bordeaux", region: "Côtes de Bourg", founded: "1890", ha: "22", wines: "4", bottles: "100 000", winemaker: "Antoine Lavigne", varietals: "Merlot, Cabernet Sauvignon, Malbec", scene: "forest",
      intro: "Clay and limestone slopes looking across the Gironde. A family château making honest, food-friendly Bordeaux at a fair price." },
  ];

  const T = (body, freshness, tannins, sweetness, oak, herb, fruitness) => ({ body, freshness, tannins, sweetness, oak, herb, fruitness });
  const wines = [
    { slug: "sancerre-les-caillottes-2024", name: "Sancerre Les Caillottes 2024", producer: "vaillant-rey", type: "White", alc: "13 %", price: 289.9, vm: "2456701", shape: "burgundy", glass: "white", capsule: "#F5A092", grapes: "100% Sauvignon Blanc", pairing: ["Shellfish", "Goat cheese", "Fish"], taste: T(5, 11, 0, 1, 0, 6, 8),
      char: "Grapefruit, cut grass and a chalky, saline finish.", desc: "From the white limestone ‘caillottes’ soils around Bué. Fermented in stainless steel and kept on fine lees until spring." },
    { slug: "sancerre-rouge-2023", name: "Sancerre Rouge 2023", producer: "vaillant-rey", type: "Red", alc: "12.5 %", price: 299.9, vm: "2456702", shape: "burgundy", glass: "red", capsule: "#1B2B1D", grapes: "100% Pinot Noir", pairing: ["Poultry", "Pork", "Mushrooms"], taste: T(5, 9, 5, 1, 3, 4, 8),
      char: "Red cherry, rose petal and a cool, mineral line.", desc: "Pinot Noir from flint soils, aged ten months in older barrels to keep the fruit bright." },
    { slug: "cremant-de-loire-brut", name: "Crémant de Loire Brut", producer: "vaillant-rey", type: "Sparkling", alc: "12 %", price: 229.9, vm: "2456703", shape: "flute", glass: "sparkling", capsule: "#E8E3DF", grapes: "Chenin Blanc, Chardonnay, Pinot Noir", pairing: ["Aperitif", "Shellfish", "Fish"], taste: T(5, 10, 0, 2, 0, 3, 7),
      char: "Green apple, brioche and a fine, lively mousse.", desc: "Traditional method, 18 months on the lees. Dosage 6 g/l." },
    { slug: "chianti-classico-2022", name: "Chianti Classico 2022", producer: "monte-selva", type: "Red", alc: "13.5 %", price: 249.9, vm: "2456704", shape: "bordeaux", glass: "red", capsule: "#8B463B", grapes: "90% Sangiovese, 10% Canaiolo", pairing: ["Pasta", "Beef", "Mature cheese"], taste: T(7, 9, 7, 1, 3, 6, 8),
      char: "Sour cherry, violets and dried herbs, firm and fresh.", desc: "Twelve months in large Slavonian oak casks from the estate’s galestro vineyards." },
    { slug: "chianti-classico-riserva-2020", name: "Chianti Classico Riserva 2020", producer: "monte-selva", type: "Red", alc: "14 %", price: 349.9, vm: "2456705", shape: "bordeaux", glass: "red", capsule: "#1B2B1D", grapes: "100% Sangiovese", pairing: ["Game", "Beef", "Mushrooms"], taste: T(8, 8, 8, 1, 5, 6, 7),
      char: "Dark cherry, leather and tobacco with fine tannins.", desc: "A selection of the oldest vines, 24 months in cask and a year in bottle before release." },
    { slug: "ribera-crianza-2021", name: "Ribera del Duero Crianza 2021", producer: "alcornoque", type: "Red", alc: "14 %", price: 229.9, vm: "2456706", shape: "bordeaux", glass: "red", capsule: "#8B463B", grapes: "100% Tinto Fino", pairing: ["Lamb", "Barbecue", "Beef"], taste: T(8, 7, 7, 1, 6, 4, 8),
      char: "Blackberry, cocoa and spice with a cool finish.", desc: "Fourteen months in French and American oak from high-altitude vineyards." },
    { slug: "ribera-reserva-2018", name: "Ribera del Duero Reserva 2018", producer: "alcornoque", type: "Red", alc: "14.5 %", price: 389.9, vm: "2456707", shape: "bordeaux", glass: "red", capsule: "#1B2B1D", grapes: "100% Tinto Fino", pairing: ["Lamb", "Game", "Mature cheese"], taste: T(9, 7, 8, 1, 7, 5, 7),
      char: "Plum, cedar and graphite, long and structured.", desc: "Old vines over 60 years, two years in barrel and two in bottle." },
    { slug: "gruner-federspiel-2024", name: "Grüner Veltliner Federspiel 2024", producer: "rosenhang", type: "White", alc: "12.5 %", price: 239.9, vm: "2456708", shape: "alsace", glass: "white", capsule: "#F5A092", grapes: "100% Grüner Veltliner", pairing: ["Fish", "Vegetables", "Shellfish"], taste: T(5, 10, 0, 1, 0, 5, 7),
      char: "Green pear, white pepper and a crisp, dry finish.", desc: "From the lower terraces, fermented cool in steel to keep the pepper and freshness." },
    { slug: "riesling-smaragd-2023", name: "Riesling Smaragd 2023", producer: "rosenhang", type: "White", alc: "13.5 %", price: 349.9, vm: "2456709", shape: "alsace", glass: "white", capsule: "#1B2B1D", grapes: "100% Riesling", pairing: ["Fish", "Poultry", "Spicy food"], taste: T(7, 10, 0, 2, 0, 3, 9),
      char: "Apricot, lime zest and wet stone, full and precise.", desc: "From the steepest gneiss terrace, picked late and fermented in old acacia casks." },
    { slug: "cotes-de-provence-rose-2025", name: "Côtes de Provence Rosé 2025", producer: "delorme", type: "Rosé", alc: "13 %", price: 199.9, vm: "2456710", shape: "bordeaux", glass: "rose", capsule: "#F5A092", grapes: "Grenache, Cinsault, Rolle", pairing: ["Aperitif", "Shellfish", "Vegetables"], taste: T(4, 9, 0, 1, 0, 4, 8),
      char: "Redcurrant, white peach and a dry, saline finish.", desc: "Picked at night and direct-pressed for a pale colour. Fermented cool in steel." },
    { slug: "provence-rose-cuvee-2025", name: "Cuvée Massif Rosé 2025", producer: "delorme", type: "Rosé", alc: "13 %", price: 259.9, vm: "2456711", shape: "burgundy", glass: "rose", capsule: "#E8E3DF", grapes: "Grenache, Rolle", pairing: ["Fish", "Shellfish", "Poultry"], taste: T(5, 9, 0, 1, 2, 4, 8),
      char: "Wild strawberry, citrus peel and a creamy texture.", desc: "The estate’s best parcels, a third fermented in large oak for texture." },
    { slug: "cotes-de-bourg-2020", name: "Côtes de Bourg 2020", producer: "haut-lavigne", type: "Red", alc: "13.5 %", price: 189.9, vm: "2456712", shape: "bordeaux", glass: "red", capsule: "#1B2B1D", grapes: "Merlot, Cabernet Sauvignon, Malbec", pairing: ["Beef", "Lamb", "Barbecue"], taste: T(7, 7, 6, 1, 4, 4, 8),
      char: "Plum, blackcurrant and a soft, earthy finish.", desc: "Twelve months in barrel, a third new. Ready to drink with food." },
  ];

  const articles = [
    { slug: "what-provenance-means", title: "What provenance means in a glass", sub: "Why we only work with wines that can be traced to a producer, a place and a vintage.", img: { photo: "assets/photos/lqp-pillar.jpg" } },
    { slug: "a-week-in-sancerre", title: "A week in Sancerre", sub: "Harvest notes from the Rey family’s flint and chalk slopes.", img: { photo: "assets/photos/lqp-house.jpg" } },
    { slug: "provence-rose-all-year", title: "Provence rosé is not only for summer", sub: "Pale, dry rosé and the Norwegian table, from shellfish to Sunday lunch.", img: { photo: "assets/photos/lqp-table.jpg" } },
    { slug: "gruner-and-nordic-food", title: "Grüner Veltliner and Nordic food", sub: "Why a Wachau Federspiel works with cured fish, root vegetables and dill.", img: { photo: "assets/photos/lqp-tasting.jpg" } },
    { slug: "how-we-choose-a-producer", title: "How we choose a producer", sub: "Five questions we ask before a wine joins the portfolio.", img: { photo: "assets/photos/lqp-vines-walk.jpg" } },
    { slug: "from-vineyard-to-vinmonopolet", title: "From vineyard to Vinmonopolet", sub: "The route a bottle takes before it reaches a Norwegian shelf.", img: { photo: "assets/photos/lqp-tanks.jpg" } },
  ];

  const person = (name, role) => ({ name, role, email: name.split(" ")[0].toLowerCase() + "@provenancewines.no", phone: "+47 000 00 000" });

  window.BRAND = {
    key: "provenance",
    name: "Provenance Wines",
    shortName: "Provenance",
    logo: {
      brandOnLight: "assets/wordmark-forest.png",
      brandOnDark: "assets/wordmark-pink.png",
      groupOnLight: "assets/belmonte-group-logo-forest.svg",
      groupOnDark: "assets/belmonte-group-logo-ivory.svg",
    },
    fonts: { serif: "Manrope, Arial, sans-serif", sans: "Manrope, Arial, sans-serif" },
    icons: {
      // Provenance ThemedLink arrow: long and horizontal
      arrow: `<svg viewBox="0 0 20 12" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 6h17M13.5 1.5 18 6l-4.5 4.5"/></svg>`,
    },
    colors: {
      labelPaper: "#F7F3EF", labelInk: "#1B2B1D", labelText: "#1B2B1D", labelMuted: "#6B6662",
      meter: "#1B2B1D",
      portraitBgs: ["#E8E3DF", "#D3D8CE", "#EFE9E4", "#DDE1D8"], portraitInk: "#1B2B1D",
      cellar: { bg: "#1B2B1D", barrel: "#2C3F2E", line: "#F5A092" },
      scenes: {
        stone: ["#E8E3DF", "#C9CDC2", "#A9B1A2", "#1B2B1D", "#F7F3EF"],
        sage: ["#D3D8CE", "#A9B1A2", "#7E8A79", "#1B2B1D", "#F7F3EF"],
        forest: ["#1B2B1D", "#2C3F2E", "#22351F", "#13201A", "#F5A092"],
        earth: ["#E8D2C8", "#C98F7F", "#8B463B", "#1B2B1D", "#F7F3EF"],
      },
      lightScenes: ["stone", "sage", "earth"],
    },
    // HeaderPiece.headerLinks left empty (client: the MENU is enough)
    nav: [],
    footerSecondary: ["Privacy policy", "Cookie settings", "Alcohol and health", "Instagram", "LinkedIn"],
    titles: { articles: "Journal" },
    demo: { product: "cotes-de-provence-rose-2025", producer: "vaillant-rey" },
    storyScene: "cellar",  // fallback when a producer has no storyPhoto
    producers, wines, articles,
    team: {
      lead: { ...person("Ingrid Solberg", "Managing Director"), bio: [
        "Ingrid has spent twenty years in the Norwegian wine trade, on the restaurant floor and as an importer.",
        "She visits every producer in the portfolio at least once a year and still tastes every new vintage before it is offered in Norway.",
      ] },
      members: [person("Jonas Berg", "Sales Director"), person("Mari Haugen", "Key Account Manager"), person("Anders Lie", "Area Sales Manager"), person("Sofie Dahl", "Brand Manager"), person("Henrik Moe", "Area Sales Manager"), person("Thea Nilsen", "On-trade Manager"), person("Erik Strand", "Area Sales Manager"), person("New colleague", "Joining January 2027")],
    },

    // domain shape › blocks[] (only blocks FetchDomainPage requests)
    home: [
      { type: "bannerGallery", title: "Wines that know<br>where they come from.",
        intro: "<p>Small producers, single places and honest wines, <strong>selected for Norway.</strong></p>",
        images: [
          { photo: "assets/photos/lqp-house-vines.jpg" }, { photo: "assets/photos/lqp-old-vine.jpg" },
          { photo: "assets/photos/lqp-barrels.jpg" }, { photo: "assets/photos/lqp-harvest.jpg" },
        ] },
      // Front page agreed in the 2026-10-27 meeting: Magma layout; our producers (with links to all producers and the
      // full selection), our story, what we do, team, articles, newsletter. The second link under the producer names
      // needs a new CMS field on producerList (to do in the app).
      { type: "intro", label: "Our producers", lead: "Six family estates in four countries, each chosen for a place." },
      { type: "producerList", links: [["Meet all producers", "#producers"], ["See full selection", "#products"]] },
      { type: "intro", label: "Our story",
        // Core introduction from the brand book (p.05)
        lead: "Provenance Wines brings carefully selected wines from distinctive producers to Norway.",
        body: ["We build long-term relationships and combine specialist wine expertise with local market insight. Part of Belmonte Beverage Group."] },
      { type: "singleImage", image: { photo: "assets/photos/curley-horse-tower.jpg" } },
      { type: "intro", label: "What we do",
        lead: "We visit our producers every year, taste every new vintage with them and bring the wines to Norway ourselves.",
        body: ["From the first visit to the restaurant list, we follow each wine the whole way, so the producer's work arrives as it was meant."] },
      { type: "groupImage", large: { photo: "assets/photos/lqp-cellar-work.jpg" }, small: { photo: "assets/photos/cecillon-portrait.jpg" } },
      { type: "employees", label: "Our team", tiles: 4, link: "Meet the team" },
      { type: "latestArticles", label: "From the journal" },
      { type: "newsletter", title: "Stories from our producers, a few times a year.", checkboxes: ["I work in hospitality", "I am a producer"], done: "Thank you. You will receive the next letter." },
    ],

    // article shape › blocks[] (after the cover singleImage, which comes from the article's thumbnail)
    articleBlocks: [
      { type: "richText", html: `<p>Provenance is a simple idea: a wine should be able to tell you where it comes from. Not only the country or the region, but the slope, the producer and the year it was made.</p>
        <p>That is why we work with family estates that farm their own vines. When a producer knows every parcel, the decisions about picking, pressing and ageing are made for that place, and you can taste it.</p>
        <h2>Five questions we ask</h2>
        <ul><li>Does the producer farm the vineyards themselves?</li><li>Can we name the place, not just the region?</li><li>Is the wine balanced and made for food?</li><li>Will it keep its character from vintage to vintage?</li><li>Can we support it in Norway for years, not for one season?</li></ul>
        <blockquote>We would rather have six producers we know well than sixty we do not.</blockquote>` },
      { type: "groupImage", reverse: true, large: { photo: "assets/photos/boxler-village.jpg" }, small: { photo: "assets/photos/desloges-portrait.jpg" } },
      { type: "quote", quote: "“The best wines in our portfolio are the ones you can place on a map with your eyes closed.”", attribution: "Ingrid Solberg, Managing Director" },
    ],

    // producer shape › story[] (title, body); {placeholders} filled from the producer
    producerStory: [
      { title: "The place", body: "{region} in {district}. The estate farms {ha} hectares of {varietals}, and each parcel is picked and vinified on its own so the differences between them stay in the wine." },
      { title: "The producer", body: "{winemaker} leads the estate today. We visit every year at harvest and taste each new vintage together before it is offered in Norway." },
    ],

    // contact shape › introModule
    contact: {
      label: "Contact",
      lead: "We would like to hear from you, whether you run a restaurant, a wine bar or a hotel, or you are a producer looking for a partner in Norway.",
      body: ["For the portfolio and new producers, contact Ingrid Solberg at ingrid@provenancewines.no.", "For restaurants, hotels and wine bars, our on-trade team works with venues across Norway."],
    },
  };
})();
