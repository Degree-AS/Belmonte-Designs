/* Core Beverages — brand content for the shared prototype engine (../../shared/prototype.js).
   No website copy or brand guide was supplied: positioning, text, wines, producers, articles and people
   are example content to react to. */
(() => {
  const producers = [
    { slug: "altamira", name: "Bodegas Altamira", country: "Spain", district: "La Mancha", region: "Valdepeñas", founded: "1962", ha: "420", wines: "12", bottles: "2 400 000", winemaker: "Javier Ortega", varietals: "Tempranillo, Airén, Garnacha", scene: "amber",
      intro: "A cooperative of three hundred growers on the high plain of La Mancha. Modern cellars and strict sorting give fruit-driven wines at prices that work every day." },
    { slug: "valdoro", name: "Cantine Valdoro", country: "Italy", district: "Puglia", region: "Salento", founded: "1971", ha: "260", wines: "9", bottles: "1 600 000", winemaker: "Lucia Carrisi", varietals: "Primitivo, Negroamaro", scene: "amber",
      intro: "Warm, sea-cooled vineyards in the heel of Italy. Generous Primitivo and Negroamaro, made in the same style year after year." },
    { slug: "trois-rivieres", name: "Domaine des Trois Rivières", country: "France", district: "Languedoc", region: "Pays d’Oc", founded: "1984", ha: "180", wines: "8", bottles: "900 000", winemaker: "Mathieu Roux", varietals: "Merlot, Chardonnay, Syrah", scene: "mist",
      intro: "Three river valleys and one cellar. Single-varietal Pays d’Oc wines with clear fruit and a dependable house style." },
    { slug: "kaltberg", name: "Weingut Kaltberg", country: "Germany", district: "Pfalz", region: "Südliche Weinstraße", founded: "1924", ha: "95", wines: "10", bottles: "650 000", winemaker: "Anna Becker", varietals: "Riesling, Pinot Blanc, Dornfelder", scene: "mist",
      intro: "A family estate in the sunny southern Pfalz. Dry Riesling and Pinot Blanc for the table, bottled under screwcap to keep them fresh." },
    { slug: "cordillera", name: "Viña Cordillera", country: "Chile", district: "Central Valley", region: "Colchagua", founded: "1993", ha: "540", wines: "11", bottles: "3 200 000", winemaker: "Rodrigo Vergara", varietals: "Cabernet Sauvignon, Carmenère, Sauvignon Blanc", scene: "graphite",
      intro: "Vineyards between the Andes and the coast range. Ripe, clean varietal wines with consistent quality across large volumes." },
    { slug: "lago-azul", name: "Quinta do Lago Azul", country: "Portugal", district: "Vinho Verde", region: "Minho", founded: "1979", ha: "120", wines: "6", bottles: "800 000", winemaker: "Inês Barbosa", varietals: "Loureiro, Alvarinho, Arinto", scene: "mist",
      intro: "Green, rainy Minho and the light, crisp whites it is known for. Low alcohol, lively acidity and a fair price." },
    { slug: "red-gum-plains", name: "Red Gum Plains", country: "Australia", district: "South Australia", region: "Riverland", founded: "1988", ha: "610", wines: "9", bottles: "4 000 000", winemaker: "Tom Mercer", varietals: "Shiraz, Chardonnay, Cabernet Sauvignon", scene: "amber",
      intro: "Irrigated vineyards along the Murray River. Ripe, round Shiraz and Chardonnay made for easy drinking." },
  ];

  const T = (body, freshness, tannins, sweetness, oak, herb, fruitness) => ({ body, freshness, tannins, sweetness, oak, herb, fruitness });
  const wines = [
    { slug: "altamira-tempranillo-2023", name: "Altamira Tempranillo 2023", producer: "altamira", type: "Red", alc: "13.5 %", price: 149.9, vm: "3456801", shape: "bordeaux", glass: "red", capsule: "#D4882B", grapes: "100% Tempranillo", pairing: ["Beef", "Pork", "Pasta"], taste: T(6, 7, 5, 1, 2, 4, 9),
      char: "Ripe cherry, plum and a soft, round finish.", desc: "Fermented in steel and kept fresh in tank. Made to the same profile every vintage." },
    { slug: "altamira-reserva-2019", name: "Altamira Reserva 2019", producer: "altamira", type: "Red", alc: "14 %", price: 199.9, vm: "3456802", shape: "bordeaux", glass: "red", capsule: "#0B0F0F", grapes: "Tempranillo, Garnacha", pairing: ["Lamb", "Beef", "Mature cheese"], taste: T(7, 6, 6, 1, 6, 4, 8),
      char: "Dried cherry, vanilla and gentle spice.", desc: "Twelve months in American oak and two years in bottle before release." },
    { slug: "valdoro-primitivo-2023", name: "Valdoro Primitivo 2023", producer: "valdoro", type: "Red", alc: "14 %", price: 169.9, vm: "3456803", shape: "burgundy", glass: "red", capsule: "#D4882B", grapes: "100% Primitivo", pairing: ["Barbecue", "Pasta", "Pizza"], taste: T(8, 6, 5, 2, 3, 3, 10),
      char: "Blackberry jam, fig and a warm, velvety finish.", desc: "Late-harvested Primitivo from Salento, part aged in large oak." },
    { slug: "valdoro-negroamaro-2022", name: "Valdoro Negroamaro 2022", producer: "valdoro", type: "Red", alc: "13.5 %", price: 159.9, vm: "3456804", shape: "bordeaux", glass: "red", capsule: "#2A2F2E", grapes: "100% Negroamaro", pairing: ["Pasta", "Pork", "Vegetables"], taste: T(7, 7, 6, 1, 2, 5, 8),
      char: "Dark cherry, herbs and a lightly bitter finish.", desc: "Classic Salento red, fermented warm and aged in concrete." },
    { slug: "trois-rivieres-chardonnay-2024", name: "Trois Rivières Chardonnay 2024", producer: "trois-rivieres", type: "White", alc: "13 %", price: 139.9, vm: "3456805", shape: "burgundy", glass: "white", capsule: "#E0E1D8", grapes: "100% Chardonnay", pairing: ["Fish", "Poultry", "Vegetables"], taste: T(6, 8, 0, 1, 1, 3, 8),
      char: "Yellow apple, melon and a clean, fresh finish.", desc: "Unoaked Chardonnay from cooler river-valley sites, bottled young." },
    { slug: "trois-rivieres-merlot-2023", name: "Trois Rivières Merlot 2023", producer: "trois-rivieres", type: "Red", alc: "13.5 %", price: 139.9, vm: "3456806", shape: "bordeaux", glass: "red", capsule: "#D4882B", grapes: "100% Merlot", pairing: ["Poultry", "Pork", "Pasta"], taste: T(6, 7, 4, 1, 1, 3, 9),
      char: "Plum, redcurrant and soft tannins.", desc: "Made for everyday drinking: short maceration, no new oak." },
    { slug: "kaltberg-riesling-trocken-2024", name: "Kaltberg Riesling Trocken 2024", producer: "kaltberg", type: "White", alc: "12 %", price: 179.9, vm: "3456807", shape: "alsace", glass: "white", capsule: "#0B0F0F", grapes: "100% Riesling", pairing: ["Fish", "Shellfish", "Spicy food"], taste: T(5, 11, 0, 1, 0, 4, 8),
      char: "Lime, green apple and a crisp, dry finish.", desc: "Estate Riesling, fermented cool in steel and bottled under screwcap." },
    { slug: "kaltberg-pinot-blanc-2024", name: "Kaltberg Pinot Blanc 2024", producer: "kaltberg", type: "White", alc: "12.5 %", price: 169.9, vm: "3456808", shape: "alsace", glass: "white", capsule: "#E0E1D8", grapes: "100% Pinot Blanc", pairing: ["Fish", "Vegetables", "Poultry"], taste: T(5, 9, 0, 1, 0, 3, 7),
      char: "Pear, almond and a smooth, gentle texture.", desc: "From loess soils, kept on fine lees for three months." },
    { slug: "cordillera-cabernet-2023", name: "Cordillera Cabernet Sauvignon 2023", producer: "cordillera", type: "Red", alc: "13.5 %", price: 149.9, vm: "3456809", shape: "bordeaux", glass: "red", capsule: "#0B0F0F", grapes: "100% Cabernet Sauvignon", pairing: ["Beef", "Barbecue", "Lamb"], taste: T(7, 7, 6, 1, 2, 4, 9),
      char: "Blackcurrant, mint and a firm, clean finish.", desc: "Colchagua Cabernet with a short stay in older oak." },
    { slug: "cordillera-sauvignon-2025", name: "Cordillera Sauvignon Blanc 2025", producer: "cordillera", type: "White", alc: "12.5 %", price: 129.9, vm: "3456810", shape: "bordeaux", glass: "white", capsule: "#D4882B", grapes: "100% Sauvignon Blanc", pairing: ["Shellfish", "Fish", "Aperitif"], taste: T(4, 10, 0, 1, 0, 7, 8),
      char: "Grapefruit, passion fruit and fresh herbs.", desc: "Night-harvested from coastal-influenced vineyards." },
    { slug: "lago-azul-vinho-verde-2025", name: "Lago Azul Vinho Verde 2025", producer: "lago-azul", type: "White", alc: "10.5 %", price: 119.9, vm: "3456811", shape: "alsace", glass: "white", capsule: "#E0E1D8", grapes: "Loureiro, Arinto, Trajadura", pairing: ["Aperitif", "Shellfish", "Fish"], taste: T(3, 11, 0, 2, 0, 4, 8),
      char: "Lime, green apple and a light spritz.", desc: "Bottled young with a touch of natural carbon dioxide." },
    { slug: "red-gum-shiraz-2023", name: "Red Gum Plains Shiraz 2023", producer: "red-gum-plains", type: "Red", alc: "14 %", price: 159.9, vm: "3456812", shape: "bordeaux", glass: "red", capsule: "#D4882B", grapes: "100% Shiraz", pairing: ["Barbecue", "Beef", "Lamb"], taste: T(8, 6, 5, 2, 3, 3, 10),
      char: "Blackberry, pepper and a round, soft finish.", desc: "Warm-climate Shiraz with oak staves for a touch of vanilla." },
    { slug: "red-gum-chardonnay-2024", name: "Red Gum Plains Chardonnay 2024", producer: "red-gum-plains", type: "White", alc: "13.5 %", price: 149.9, vm: "3456813", shape: "burgundy", glass: "white", capsule: "#2A2F2E", grapes: "100% Chardonnay", pairing: ["Poultry", "Fish", "Pasta"], taste: T(7, 7, 0, 2, 4, 2, 9),
      char: "Peach, pineapple and a creamy finish.", desc: "Partly barrel-fermented for texture; ready to drink on release." },
  ];

  const articles = [
    { slug: "house-wine-matters", title: "Why the house wine is the most important wine on the list", sub: "The by-the-glass wine is what most guests remember. Here is how we choose it.", img: { scene: "graphite", seed: 4 } },
    { slug: "bag-in-box-norway", title: "Bag-in-box: the Norwegian favourite", sub: "Why the box is so popular in Norway, and what it takes to put a good wine in one.", img: { scene: "amber", seed: 6 } },
    { slug: "consistency-every-vintage", title: "Same quality, every vintage", sub: "What we ask of producers who supply wines in large volumes.", img: { scene: "mist", seed: 2 } },
    { slug: "planning-a-launch", title: "How we plan a Vinmonopolet launch", sub: "From product request to shelf, step by step.", img: { scene: "lines-ink", seed: 3 } },
    { slug: "weekday-wines", title: "Five wines for the weekday table", sub: "Dependable choices under 200 kroner.", img: { scene: "amber", seed: 8 } },
    { slug: "visiting-cordillera", title: "Harvest at Viña Cordillera", sub: "A week in Colchagua as the Cabernet comes in.", img: { scene: "graphite", seed: 5 } },
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
    },
    nav: [["Producers", "#producers", "producer"], ["Our selection", "#products", "product"], ["News", "#articles", "article"]],
    footerSecondary: ["Privacy policy", "Cookie settings", "Alcohol and health", "LinkedIn"],
    titles: { articles: "News" },
    demo: { product: "altamira-tempranillo-2023", producer: "cordillera" },
    storyScene: "cellar",
    producers, wines, articles,
    team: {
      lead: { ...person("Kristian Holm", "Managing Director"), bio: [
        "Kristian has built wine ranges for Norwegian restaurants and Vinmonopolet for fifteen years, most of them in the everyday price segment.",
        "He believes the wines people drink most often deserve the same care as the rare ones.",
      ] },
      members: [person("Line Andersen", "Sales Director"), person("Martin Eide", "Key Account Manager"), person("Hanne Bakke", "Category Manager"), person("Sander Lund", "Area Sales Manager"), person("Ida Berg", "Area Sales Manager"), person("Per Vik", "Supply Chain Manager"), person("Nora Solheim", "Marketing Coordinator")],
    },

    // domain shape › blocks[] (only blocks FetchDomainPage requests)
    home: [
      { type: "banner", title: "The core of<br>a good wine list.", intro: "Dependable wines from producers who deliver the same quality, vintage after vintage.", image: { scene: "graphite", seed: 3, note: "Brand photography" } },
      { type: "intro", label: "Core Beverages",
        lead: "Core Beverages builds the everyday core of Norwegian wine lists and shelves: dependable wines at fair prices, from producers who deliver every vintage.",
        body: ["We work with established producers who can supply large volumes without losing quality.", "Our job is to keep the right wines available, priced right and supported in the market."],
        links: [["Our selection", "#products"], ["Our producers", "#producers"]] },
      { type: "groupImage", large: { scene: "mist", seed: 5, note: "Vineyard photography" }, small: { scene: "amber", seed: 9, note: "Product photography" } },
      { type: "intro", label: "What we offer", lead: "Three things restaurants and Vinmonopolet can count on." },
      { type: "paragraphs", rows: [
        { title: "Consistency", heading: "The same wine, every vintage.", body: "We choose producers with the vineyards, cellars and discipline to make the same style year after year, so the house wine on your list does not change without warning." },
        { title: "Availability", heading: "In stock when you need it.", body: "Forecasting, safety stock and close contact with our producers keep the core range available all year, including the busy seasons." },
        { title: "Value", heading: "Fair prices, honest wines.", body: "Wines in the everyday price range that are well made and easy to recommend, by the glass, by the bottle and in the box." },
      ] },
      { type: "richText", html: "<blockquote>“The house wine is the most important wine on the list.”</blockquote><p class=\"label\">Core Beverages</p>" },
      { type: "intro", label: "Our producers", lead: "Seven producers in six countries, chosen for quality they can repeat at scale." },
      { type: "producerList", link: "All producers" },
      { type: "employees", label: "Your contact" },
      { type: "latestArticles", label: "News" },
      { type: "newsletter", title: "Market updates for the trade, every quarter.", checkboxes: ["I work in hospitality", "I am a producer"], done: "Thank you. You will receive the next update." },
    ],

    // article shape › blocks[] (after the cover singleImage, which comes from the article's thumbnail)
    articleBlocks: [
      { type: "richText", html: `<p>Most guests never see the wine list in full. They order the house red or the house white, and that glass is what they remember about the wine at your restaurant.</p>
        <p>That is why we treat the house wine as the most important wine on the list. It has to be good on its own and with food, it has to be priced for the glass, and it has to taste the same in March as it did in October.</p>
        <h2>What we look for</h2>
        <ul><li>A producer that can supply the volume without changing the wine</li><li>Clean fruit and moderate alcohol, so it works with many dishes</li><li>A stable price over the year</li><li>A version in bottle and in bag-in-box</li></ul>
        <blockquote>Consistency is a promise you keep every vintage.</blockquote>` },
      { type: "groupImage", reverse: true, large: { scene: "mist", seed: 41, note: "Group image" }, small: { scene: "amber", seed: 12, note: "Product" } },
      { type: "counter", items: [["Producers", "7"], ["Wines in the core range", "65"], ["Countries", "6"]] },
      { type: "quote", quote: "“The wines people drink most often deserve the same care as the rare ones.”", attribution: "Kristian Holm, Managing Director" },
    ],

    // producer shape › story[] (title, body); {placeholders} filled from the producer
    producerStory: [
      { title: "The estate", body: "{region} in {district}. {ha} hectares of {varietals}, with modern cellars built for consistent quality at volume." },
      { title: "Our partnership", body: "We plan volumes with {winemaker} a year ahead, so the core wines stay in stock and taste the same from one vintage to the next." },
    ],

    // contact shape › introModule
    contact: {
      label: "Contact",
      lead: "Looking for a house wine, a reliable core range or a partner for Vinmonopolet? We would like to hear from you.",
      body: ["For restaurants, hotels and bars, contact our sales team.", "For producers and partnerships, contact Kristian Holm at kristian@corebeverages.no."],
    },
  };
})();
