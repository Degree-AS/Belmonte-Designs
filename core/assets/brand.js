/* Core Beverages — brand content for the shared prototype engine (../../shared/prototype.js).
   Core sells spirits (client, 2026-11-04). Producers and their descriptions, and the "about" text, come from the
   client's producer list (English column; the about text translated from Norwegian). Products, prices,
   Vinmonopolet numbers, articles and people are sample content to react to. */
(() => {
  const producers = [
    { slug: "alias-smith", name: "Alias Smith", country: "Sweden", district: "Stockholm", region: "Stockholm", base: "Stockholm", founded: "2004", style: "Additive-free Mexican spirits", scene: "amber",
      intro: "Alias Smith is a Swedish spirits importer and brand builder founded in 2004 by Claes Puebla Smith. Headquartered in Stockholm, the company is recognized as one of Europe’s leading authorities on authentic, additive-free Mexican spirits." },
    { slug: "altamura-vodka", name: "Altamura Vodka", country: "Italy", district: "Puglia", region: "Altamura", base: "Puglia", founded: "2022", style: "Vodka from Altamura durum wheat", scene: "mist",
      intro: "Launched in 2022, Altamura Vodka is a super-premium Italian vodka distilled exclusively from 100% Altamura durum wheat (Grano di Altamura DOP) from Puglia, Southern Italy—the same ancient grain used for the famous DOP Altamura bread." },
    { slug: "barsol", name: "Barsol Pisco", country: "Peru", district: "Ica", region: "Ica Valley", base: "Bodega San Isidro, Ica", founded: "2002", style: "Pisco", scene: "amber",
      intro: "Barsol Pisco was founded in 2002 by Diego Loret de Mola and Carlos Ferreyros, who restored the historic Bodega San Isidro in Peru's Ica Valley. Barsol is crafted under strict artisanal Peruvian regulations: single-distilled in copper pot stills from 100% fresh grape wine, with no added water, sugar, yeast, or oak aging." },
    { slug: "williams-humbert", name: "Bodegas Williams & Humbert", country: "Spain", district: "Andalucía", region: "Jerez de la Frontera", base: "Jerez de la Frontera", founded: "1877", style: "Sherry and brandy", scene: "amber",
      intro: "Founded in 1877 by Sir Alexander Williams and Arthur Humbert, Bodegas Williams & Humbert is one of the most historic sherry houses in Jerez de la Frontera, Spain. Today fully owned by the Medina family, the bodega operates Europe's largest single-roof cellar complex, housing over 60,000 casks." },
    { slug: "brothers-bond", name: "Brother’s Bond Bourbon", country: "USA", district: "Kentucky", region: "Kentucky", base: "Kentucky", founded: "2020", style: "Bourbon whiskey", scene: "graphite",
      intro: "Brother’s Bond Bourbon is an ultra-premium whiskey brand created in 2020 by actors Ian Somerhalder and Paul Wesley." },
    { slug: "constellation-brands", name: "Constellation Brands", country: "USA", district: "New York", region: "Victor", base: "Victor, New York", founded: "1945", style: "Tequila Mi Campo, Nelson’s Green Brier", scene: "graphite",
      intro: "Constellation Brands is a global leader in beer, wine, and spirits based in Victor, New York. While dominating the U.S. imported beer market with Corona, Modelo Especial, and Pacifico, its spirits division focuses heavily on premium craft brands with authentic provenance such as Tequila Mi Campo and Nelsons Green Brier Tennessee Whiskey." },
    { slug: "famiglia-santoni", name: "Famiglia Santoni", country: "Italy", district: "Tuscany", region: "Chianciano Terme", base: "Chianciano Terme", founded: "1961", style: "Tuscan liqueurs and amari", scene: "amber",
      intro: "Founded in 1961 by Gabriello Santoni in Chianciano Terme, Tuscany, Famiglia Santoni produces classic Tuscan liqueurs and amari. Led today by Stefano Santoni, the family balances traditional cold-maceration techniques with modern aperitivo culture." },
    { slug: "henkell-freixenet", name: "Henkell-Freixenet", country: "Germany", district: "Hesse", region: "Wiesbaden", base: "Wiesbaden", founded: "1832", style: "Mangaroca Batida de Côco", scene: "mist",
      intro: "Henkell-Freixenet (part of the Geschwister Oetker group) is a global sparkling wine and spirits giant based in Wiesbaden, Germany. Beyond its lead in sparkling wine (Freixenet, Mionetto, Henkell), its spirits portfolio features the coconut liqueur Mangaroca Batida de Côco." },
    { slug: "maison-ferrand", name: "Maison Ferrand", country: "France", district: "Cognac", region: "Ars", base: "Château de Bonbonnet", founded: "1989", style: "Planteray Rum, Citadelle Gin", scene: "amber",
      intro: "Maison Ferrand is one of the most dynamic and respected independent spirits houses in France, founded in 1989 by Alexandre Gabriel. Built on a mission to revive traditional artisanal production methods and breathe new life into heritage spirits categories, the company operates out of Château de Bonbonnet in the heart of Cognac. While rooted in fine Cognac, Maison Ferrand is best known globally for its pioneering work with Planteray Rum and Citadelle Gin." },
    { slug: "gabriel-boudier", name: "Maison Gabriel Boudier", country: "France", district: "Burgundy", region: "Dijon", base: "Dijon", founded: "1874", style: "Fruit liqueurs and cocktail ingredients", scene: "graphite",
      intro: "Founded in 1874 in Dijon, France, Maison Gabriel Boudier is an iconic producer of premium fruit liqueurs, cocktail ingredients, and craft spirits." },
    { slug: "lazzaroni", name: "Paolo Lazzaroni & Figli", country: "Italy", district: "Lombardy", region: "Saronno", base: "Saronno", founded: "1700s", style: "Italian liqueurs", scene: "amber",
      intro: "Based in Saronno, Italy, Lazzaroni is a historic family-owned producer of traditional Italian liqueurs and confectioneries. The company is world-renowned for its authentic maceration processes using real ingredients rather than synthetic flavor extracts." },
    { slug: "perola", name: "Perola Fine Spirits", country: "Germany", district: "Bavaria", region: "Schnaittach", base: "Schnaittach", founded: "2010", style: "Boutique craft spirits", scene: "mist",
      intro: "Perola Fine Spirits (Perola GmbH) is an independent German importer and brand developer founded in 2010 in Bavaria by Arno Schmid-Eibl. Perola focuses on boutique, additive-free craft spirits with strong terroir roots." },
    { slug: "salmari", name: "Salmari", country: "Finland", district: "Finland", region: "Finland", base: "Salmari Oy", founded: "—", style: "Salty liquorice liqueur", scene: "graphite",
      intro: "Salmari is a premium Finnish salty liquorice liqueur (salmiakkilikööri) produced by Salmari Oy. Distinct from mass-market shot brands, Salmari is crafted using natural liquorice root extracts and premium ammonium chloride (salmiak salt), resulting in a dark, opaque liqueur with lower sugar content, intense flavor, and a balanced alcohol bite (25% ABV). It is packaged in a matte-black glass bottle with minimalist typography." },
    { slug: "takamaka", name: "Takamaka Rum", country: "Seychelles", district: "Mahé", region: "La Plaine St. André", base: "Trois Frères Distillery, Mahé", founded: "2002", style: "Rum", scene: "amber",
      intro: "Takamaka Rum is the flagship spirit of the Seychelles, founded in 2002 by brothers Richard and Bernard d’Offay at the historic Trois Frères Distillery on Mahé island. Takamaka combines island culture with versatile rum production methods, using both local sugarcane juice (agricole style) and molasses." },
    { slug: "whistlepig", name: "WhistlePig", country: "USA", district: "Vermont", region: "Shoreham", base: "Shoreham, Vermont", founded: "2007", style: "Rye whiskey", scene: "graphite",
      intro: "Founded in 2007 on a farm in Shoreham, Vermont, WhistlePig is a producer of ultra-premium rye whiskey. Pioneered alongside the late Master Distiller Dave Pickerell, WhistlePig focuses on high-rye mash bills, farm-sourced grain, and experimental wood finishes." },
  ];

  // Taste profile 0–12 (the engine's meter labels are still the wine ones)
  const T = (body, freshness, tannins, sweetness, oak, herb, fruitness) => ({ body, freshness, tannins, sweetness, oak, herb, fruitness });
  // Real products from the producers, as listed at Vinmonopolet (name, product number, price, volume and alcohol
  // checked 2026-11-04); vmPhoto shows the Vinmonopolet photo. Brother's Bond is not at Vinmonopolet, so it keeps the
  // illustrated bottle (the agreed fallback). Taste profiles, descriptions and serves are sample text.
  const vm = (n) => ({ vm: n, vmPhoto: n });
  const wines = [
    { slug: "citadelle-gin", name: "Citadelle Gin de France", producer: "maison-ferrand", type: "Gin", alc: "44 %", volume: "0,7 L", price: 529.9, ...vm("3271901"), grapes: "Wheat spirit, 19 botanicals", pairing: ["Gin & tonic", "Martini"], taste: T(6, 9, 0, 1, 0, 10, 6),
      char: "Juniper, citrus peel and a soft, spicy finish.", desc: "Distilled in small Cognac pot stills at Château de Bonbonnet." },
    { slug: "planteray-3-stars", name: "Planteray 3 Stars", producer: "maison-ferrand", type: "Rum", alc: "41.2 %", volume: "0,7 L", price: 449.9, ...vm("315501"), grapes: "Molasses", pairing: ["Daiquiri", "Mojito"], taste: T(5, 7, 0, 3, 1, 3, 9),
      char: "Fresh sugarcane, banana and lime zest.", desc: "A blend of rums from Barbados, Jamaica and Trinidad, made for the bar." },
    { slug: "takamaka-zenn", name: "Takamaka Rum Zenn", producer: "takamaka", type: "Rum", alc: "40 %", volume: "0,7 L", price: 469.9, ...vm("19512501"), grapes: "Sugarcane juice and molasses", pairing: ["Daiquiri", "Mojito"], taste: T(5, 8, 0, 2, 0, 4, 8),
      char: "Fresh cane, citrus and a light, clean finish.", desc: "A white rum from the Trois Frères Distillery on Mahé." },
    { slug: "barsol-quebranta", name: "Barsol Pisco Quebranta", producer: "barsol", type: "Pisco", alc: "41.3 %", volume: "0,7 L", price: 589.9, ...vm("12812201"), grapes: "100% Quebranta grapes", pairing: ["Pisco sour", "Neat"], taste: T(6, 8, 0, 1, 0, 5, 8),
      char: "Ripe grape, banana and a dry, earthy finish.", desc: "Single-distilled in copper pot stills, with no added water or oak." },
    { slug: "dos-maderas-5-5", name: "Williams & Humbert Ron Dos Maderas 5+5 YO", producer: "williams-humbert", type: "Rum", alc: "40 %", volume: "0,7 L", price: 699.9, ...vm("9750401"), grapes: "Molasses", pairing: ["Neat", "After dinner"], taste: T(9, 4, 0, 5, 8, 2, 9),
      char: "Raisin, toffee and dark sugar.", desc: "Caribbean rum aged five years in the tropics and five more in sherry casks in Jerez." },
    { slug: "brothers-bond-bourbon", name: "Brother’s Bond Straight Bourbon", producer: "brothers-bond", type: "Whisky", alc: "40 %", volume: "0,7 L", price: 599.9, vm: "3456806", shape: "spirit", glass: "amber", capsule: "#0B0F0F", grapes: "Corn, rye, malted barley", pairing: ["Neat", "Old fashioned"], taste: T(7, 5, 0, 4, 7, 2, 8),
      char: "Caramel, cherry and warm baking spice.", desc: "Straight bourbon, aged at least four years in new charred oak." },
    { slug: "mi-campo-blanco", name: "Mi Campo Tequila Blanco", producer: "constellation-brands", type: "Tequila", alc: "40 %", volume: "0,7 L", price: 689.9, ...vm("21017301"), grapes: "100% blue agave", pairing: ["Margarita", "Paloma"], taste: T(5, 9, 0, 2, 1, 7, 6),
      char: "Cooked agave, citrus and white pepper.", desc: "Highland and lowland agave, rested briefly in wine barrels." },
    { slug: "nelsons-green-brier", name: "Nelson’s Green Brier Tennessee Whisky", producer: "constellation-brands", type: "Whisky", alc: "45.5 %", volume: "0,7 L", price: 699.9, ...vm("21015901"), grapes: "Corn, wheat, malted barley", pairing: ["Neat", "Cocktails"], taste: T(7, 5, 0, 4, 6, 2, 8),
      char: "Honey, vanilla and soft wheat.", desc: "A wheated Tennessee whisky from a revived Nashville distillery." },
    { slug: "santoni-aperitivo", name: "Santoni Aperitivo", producer: "famiglia-santoni", type: "Aperitivo", alc: "16 %", volume: "0,7 L", price: 459.9, ...vm("20886101"), grapes: "Tuscan herbs, rhubarb, bitter orange", pairing: ["Spritz", "With soda"], taste: T(5, 7, 0, 6, 0, 9, 7),
      char: "Rhubarb, bitter orange and Tuscan herbs.", desc: "A Tuscan aperitivo, cold-macerated to the family recipe." },
    { slug: "mangaroca-batida", name: "Mangaroca Batida de Côco", producer: "henkell-freixenet", type: "Liqueur", alc: "16 %", volume: "0,7 L", price: 279.9, ...vm("21015701"), grapes: "Coconut", pairing: ["With pineapple juice", "Cocktails"], taste: T(5, 4, 0, 9, 0, 1, 8),
      char: "Creamy coconut and a sweet, smooth finish.", desc: "The Brazilian-inspired coconut liqueur, served long and cold." },
    { slug: "boudier-curacao-bleu", name: "Gabriel Boudier Curaçao Bleu", producer: "gabriel-boudier", type: "Liqueur", alc: "25 %", volume: "0,5 L", price: 359.9, ...vm("5071502"), grapes: "Curaçao orange peel", pairing: ["Cocktails"], taste: T(5, 7, 0, 9, 0, 2, 9),
      char: "Bitter orange peel, bright and fresh.", desc: "Orange liqueur from Dijon, a bar classic for blue cocktails." },
    { slug: "lazzaroni-amaretto", name: "Lazzaroni Amaretto", producer: "lazzaroni", type: "Liqueur", alc: "24 %", volume: "0,7 L", price: 429.9, ...vm("16596801"), grapes: "Amaretti di Saronno", pairing: ["Amaretto sour", "With coffee"], taste: T(7, 3, 0, 9, 1, 2, 7),
      char: "Almond, apricot kernel and caramel.", desc: "Macerated with the house’s own Amaretti biscuits, not synthetic flavourings." },
    { slug: "whistlepig-10", name: "WhistlePig Straight Rye Whiskey 10 YO", producer: "whistlepig", type: "Whisky", alc: "50 %", volume: "0,7 L", price: 1149.9, ...vm("10858401"), grapes: "100% rye", pairing: ["Neat", "Manhattan"], taste: T(9, 5, 0, 3, 8, 6, 7),
      char: "Rye spice, caramel and orange peel.", desc: "Ten years in new American oak, bottled at 100 proof." },
    { slug: "altamura-vodka", name: "Altamura Vodka", producer: "altamura-vodka", type: "Vodka", alc: "43 %", volume: "0,7 L", price: 659.9, ...vm("19346301"), grapes: "100% Grano di Altamura DOP", pairing: ["Neat, chilled", "Martini"], taste: T(6, 7, 0, 2, 0, 2, 3),
      char: "Bread crust, cream and a long, smooth finish.", desc: "A vodka with terroir, distilled only from Altamura durum wheat." },
    { slug: "salmari", name: "Salmari Premium Salmiak Liquor", producer: "salmari", type: "Liqueur", alc: "25 %", volume: "0,7 L", price: 389.9, ...vm("15656401"), grapes: "Liquorice root, salmiak", pairing: ["Ice cold", "Shot"], taste: T(8, 3, 0, 6, 0, 4, 2),
      char: "Salty liquorice, dark and intense.", desc: "Natural liquorice root and salmiak, with less sugar than mass-market shots." },
  ];

  // News is mostly new agencies and tenders (client 2026-11-04); sample titles
  const articles = [
    { slug: "new-agency-altamura", title: "New agency: Altamura Vodka", sub: "A vodka with terroir, made only from Altamura durum wheat, joins our portfolio.", img: { scene: "graphite", seed: 4 } },
    { slug: "tender-list-spring", title: "Vinmonopolet tender list, spring", sub: "The spirits tenders we are answering this round, and what we can offer.", img: { scene: "lines-ink", seed: 3 } },
    { slug: "new-agency-mi-campo", title: "New agency: Tequila Mi Campo", sub: "Highland and lowland agave from Jalisco, now in Norway through Core.", img: { scene: "amber", seed: 6 } },
    { slug: "tender-results", title: "Tender results: four new listings", sub: "Four of our spirits are coming to Vinmonopolet shelves.", img: { scene: "mist", seed: 2 } },
    { slug: "new-agency-whistlepig", title: "New agency: WhistlePig", sub: "Ultra-premium rye whiskey from a farm in Shoreham, Vermont.", img: { scene: "graphite", seed: 5 } },
    { slug: "tender-list-autumn", title: "Vinmonopolet tender list, autumn", sub: "Product requests for spirits this autumn, and our proposals.", img: { scene: "amber", seed: 8 } },
  ];

  const person = (name, role) => ({ name, role, email: name.split(" ")[0].toLowerCase() + "@corebeverages.no", phone: "+47 000 00 000" });

  window.BRAND = {
    key: "core",
    name: "Core Beverages",
    shortName: "Core",
    // The header is dark on every page, so it uses the light (Mist) artwork in both states
    logo: {
      brandOnLight: "assets/wordmark-mist.png",
      brandOnDark: "assets/wordmark-mist.png",
      groupOnLight: "assets/belmonte-group-logo-mist.svg",
      groupOnDark: "assets/belmonte-group-logo-mist.svg",
    },
    fonts: { serif: "Archivo, Arial, sans-serif", sans: "Hanken Grotesk, Arial, sans-serif" },
    icons: {
      // Core ThemedLink arrow: bold and geometric
      arrow: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square" aria-hidden="true"><path d="M2 8h11M9 3.5 13.5 8 9 12.5"/></svg>`,
    },
    colors: {
      labelPaper: "#F2F3EE", labelInk: "#0B0F0F", labelText: "#0B0F0F", labelMuted: "#545A57",
      meter: "#0B0F0F",
      portraitBgs: ["#D3D5CA", "#C5C7BB", "#E9EAE3", "#E8D3B4"], portraitInk: "#0B0F0F",
      cellar: { bg: "#0B0F0F", barrel: "#2A2F2E", line: "#D4882B" },
      scenes: {
        mist: ["#E0E1D8", "#C5C7BB", "#8E938A", "#0B0F0F", "#F2F3EE"],
        amber: ["#EBD2A8", "#D4882B", "#6E4A1E", "#0B0F0F", "#F2F3EE"],
        graphite: ["#2A2F2E", "#3A403E", "#1C2120", "#0B0F0F", "#D4882B"],
        "lines-ink": ["#0B0F0F", "#E0E1D8", "#D4882B"],
      },
      lightScenes: ["mist", "amber"],
      // Spirits, not wine: landscapes without vine rows and posts (client 2026-11-04)
      sceneRows: false,
    },
    nav: [["Producers", "#producers", "producer"], ["Our selection", "#products", "product"], ["News", "#articles", "article"]],
    footerSecondary: ["Privacy policy", "Cookie settings", "Alcohol and health", "LinkedIn"],
    titles: { articles: "News", allProducts: "All spirits", productsWord: "spirits" },
    demo: { product: "citadelle-gin", producer: "maison-ferrand" },
    storyScene: "cellar",
    // Producer key facts (producer › attributes.properties): spirits houses instead of the wine defaults
    producerFacts: [["Founded", "founded"], ["Based in", "base"], ["Known for", "style"]],
    producers, wines, articles,
    team: {
      lead: { ...person("Tor Arne Fuglestveit", "Portfolio Director"), bio: [
        "Tor Arne has more than 15 years on wine and spirits industry, he brings extensive marketing and brand-building expertise, along with a unique understanding of the Norwegian on-trade and consumer landscape. He has built excellent relationships across the trade and has strong Vinmonopolet expertise.",
        "With a genuine passion for quality and the stories behind each product, he creates a strong connection between producers and the market, adding both authenticity and a personal touch.",
      ] },
      members: [{ ...person("Sabrina Spincic-Stuvland", "Managing Director"), bio: [
        "Sabrina has a strong background in fast-moving consumer goods (FMCG) and marketing, from The Coca-Cola Company, Allied Domecq, Altia/Anora and combined with WSET certifications in wine, spirits, and beer, she brings exceptional tasting skills and a deep understanding of quality.",
        "She also has extensive experience in strategy and product development, with a sharp focus on pricing excellence. Sabrina has built long-term relationships across the industry and has a proven track record of delivering excellent results—both in building brands and driving volume growth.",
      ] }, person("Line Andersen", "Sales Director"), person("Martin Eide", "Key Account Manager"), person("Hanne Bakke", "Category Manager"), person("Sander Lund", "Area Sales Manager"), person("Ida Berg", "Area Sales Manager"), person("Per Vik", "Supply Chain Manager"), person("Nora Solheim", "Marketing Coordinator")],
    },

    // domain shape › blocks[] (only blocks FetchDomainPage requests)
    home: [
      { type: "banner", title: "Quality at the heart<br>of everything we do.", intro: "Spirits with a soul and a clear origin, curated by people who know the trade.", image: { photo: "assets/hero-landscape.svg" } },
      { type: "intro", label: "Core Beverages",
        lead: "Decades of industry knowledge, and an uncompromising search for the genuine.",
        body: ["Core Beverages was founded to unite decades of industry knowledge with an uncompromising search for the genuine. We are built on a solid foundation of experience, from world-leading producers to carefully selected craft products.",
          "We curate a portfolio focused on Core, the core of quality, to create a collection that is both credible and profitable."],
        links: [["Our selection", "#products"], ["Our producers", "#producers"]] },
      { type: "intro", label: "What we believe", lead: "Tomorrow’s winners in the spirits market are brands with a soul and a clear origin." },
      { type: "paragraphs", rows: [
        { title: "Curated", heading: "The core of quality.", body: "A focused portfolio, not a long list: every brand earns its place through quality, authenticity and a clear story, so the collection is both credible and profitable." },
        { title: "Craft", heading: "Stories and craftsmanship.", body: "From historic houses in Jerez, Saronno and Dijon to independent craft producers: real ingredients, honest production and a clear origin." },
        { title: "People", heading: "Our greatest strength is our people.", body: "Our team has long experience in the alcohol import business. We have seen what works, we understand logistics and the market, and we know what Norwegian consumers are looking for now." },
      ] },
      { type: "richText", html: "<blockquote>“We don’t just source spirits. We source stories and craftsmanship.”</blockquote><p class=\"label\">Core Beverages</p>" },
      { type: "intro", label: "Our producers", lead: "Fifteen producers, from heritage houses to independent craft distillers." },
      { type: "producerList", link: "All producers" },
      { type: "employees", label: "Your contacts", member: "Tor Arne Fuglestveit" },
      { type: "employees", member: "Sabrina Spincic-Stuvland", reverse: true },
      { type: "employees", label: "Our sales team", tiles: 7, skip: 2, link: "Meet the team" },
      { type: "latestArticles", label: "News" },
      { type: "newsletter", title: "Market updates for the trade, every quarter.", checkboxes: ["I work in hospitality", "I am a producer"], done: "Thank you. You will receive the next update." },
    ],

    // article shape › blocks[] (after the cover singleImage, which comes from the article's thumbnail)
    articleBlocks: [
      { type: "richText", html: `<p>The spirits market is full of brands. Very few of them have a real story to tell: a place, a family, a way of making things that cannot be copied.</p>
        <p>Those are the brands we look for. We believe tomorrow’s winners are brands with a soul and a clear origin, and we build our portfolio around them, from heritage houses to small craft producers.</p>
        <h2>What we look for</h2>
        <ul><li>A clear origin: a place, a raw material, a tradition</li><li>Honest production, with real ingredients and no shortcuts</li><li>A producer who can deliver the same quality every batch</li><li>A brand that works for Norwegian bars, restaurants and Vinmonopolet</li></ul>
        <blockquote>We don’t just source spirits. We source stories and craftsmanship.</blockquote>` },
      { type: "groupImage", reverse: true, large: { scene: "amber", seed: 41, note: "Group image" }, small: { scene: "mist", seed: 12, note: "Product" } },
      { type: "counter", items: [["Producers", "15"], ["Countries", "9"], ["Categories", "12"]] },
      { type: "quote", quote: "“We have seen what works, we understand the market, and we know what Norwegian consumers are looking for now.”", attribution: "Tor Arne Fuglestveit, Portfolio Director" },
    ],

    // producer shape › story[] (title, body); {placeholders} filled from the producer
    producerStory: [
      { title: "The house", body: "{base}, {country}. Founded in {founded}, and known for {style}." },
      { title: "Our partnership", body: "We work with {name} on range, logistics and launches in Norway, from Vinmonopolet tenders to bars and restaurants." },
    ],

    // contact › employeeList in two groups (client 2026-11-04): the main contacts first, then the sales team
    contactGroups: [
      { label: "Your contacts", names: ["Tor Arne Fuglestveit", "Sabrina Spincic-Stuvland"] },
      { label: "Sales team", names: ["Line Andersen", "Martin Eide", "Hanne Bakke", "Sander Lund", "Ida Berg", "Per Vik", "Nora Solheim"] },
    ],

    // contact shape › introModule
    contact: {
      label: "Contact",
      lead: "Looking for spirits with a clear origin for your bar, restaurant or a Vinmonopolet tender? We would like to hear from you.",
      body: ["For bars, restaurants and hotels, contact our sales team.", "For producers and partnerships, contact Tor Arne Fuglestveit at tor@corebeverages.no."],
    },
  };
})();
