/* Core Beverages — brand content for the shared prototype engine (../../shared/prototype.js).
   Core sells spirits (client, 2026-11-04). Producers and their descriptions, and the "about" text, come from the
   client's producer list (English column; the about text translated from Norwegian). Products are the client's
   product list with data from Vinmonopolet (see below). Producer photos are the client's (2026-11-10, resized in
   assets/photos). Tor Arne, Sabrina, Stein-Erik and Simon are the real team (bios from the client, portraits from
   belmonte.vercel.app/team); the sales team, articles and contact details are sample content to react to. */
(() => {
  const producers = [
    { slug: "alias-smith", photo: "assets/photos/alias-smith-agave.jpg", name: "Alias Smith", country: "Sweden", district: "Stockholm", region: "Stockholm", base: "Stockholm", founded: "2004", style: "Additive-free Mexican spirits", scene: "amber",
      intro: "Alias Smith is a Swedish spirits importer and brand builder founded in 2004 by Claes Puebla Smith. Headquartered in Stockholm, the company is recognized as one of Europe’s leading authorities on authentic, additive-free Mexican spirits." },
    { slug: "altamura-vodka", photo: "assets/photos/altamura-wheat.jpg", storyPhoto: "assets/photos/altamura-murgia.jpg", name: "Altamura Vodka", country: "Italy", district: "Puglia", region: "Altamura", base: "Puglia", founded: "2022", style: "Vodka from Altamura durum wheat", scene: "mist",
      intro: "Launched in 2022, Altamura Vodka is a super-premium Italian vodka distilled exclusively from 100% Altamura durum wheat (Grano di Altamura DOP) from Puglia, Southern Italy—the same ancient grain used for the famous DOP Altamura bread." },
    { slug: "barsol", photo: "assets/photos/barsol-bodega.jpg", storyPhoto: "assets/photos/barsol-barrels.jpg", name: "Barsol Pisco", country: "Peru", district: "Ica", region: "Ica Valley", base: "Bodega San Isidro, Ica", founded: "2002", style: "Pisco", scene: "amber",
      intro: "Barsol Pisco was founded in 2002 by Diego Loret de Mola and Carlos Ferreyros, who restored the historic Bodega San Isidro in Peru's Ica Valley. Barsol is crafted under strict artisanal Peruvian regulations: single-distilled in copper pot stills from 100% fresh grape wine, with no added water, sugar, yeast, or oak aging." },
    { slug: "williams-humbert", photo: "assets/photos/williams-humbert-cellar.jpg", storyPhoto: "assets/photos/williams-humbert-vineyard.jpg", name: "Bodegas Williams & Humbert", country: "Spain", district: "Andalucía", region: "Jerez de la Frontera", base: "Jerez de la Frontera", founded: "1877", style: "Sherry and brandy", scene: "amber",
      intro: "Founded in 1877 by Sir Alexander Williams and Arthur Humbert, Bodegas Williams & Humbert is one of the most historic sherry houses in Jerez de la Frontera, Spain. Today fully owned by the Medina family, the bodega operates Europe's largest single-roof cellar complex, housing over 60,000 casks." },
    { slug: "brothers-bond", photo: "assets/photos/brothers-bond-barrels.jpg", storyPhoto: "assets/photos/brothers-bond-founders.jpg", name: "Brother’s Bond Bourbon", country: "USA", district: "Kentucky", region: "Kentucky", base: "Kentucky", founded: "2020", style: "Bourbon whiskey", scene: "graphite",
      intro: "Brother’s Bond Bourbon is an ultra-premium whiskey brand created in 2020 by actors Ian Somerhalder and Paul Wesley." },
    { slug: "constellation-brands", photo: "assets/photos/constellation-green-brier.jpg", storyPhoto: "assets/photos/constellation-barrels.jpg", name: "Constellation Brands", country: "USA", district: "New York", region: "Victor", base: "Victor, New York", founded: "1945", style: "Tequila Mi Campo, Nelson’s Green Brier", scene: "graphite",
      intro: "Constellation Brands is a global leader in beer, wine, and spirits based in Victor, New York. While dominating the U.S. imported beer market with Corona, Modelo Especial, and Pacifico, its spirits division focuses heavily on premium craft brands with authentic provenance such as Tequila Mi Campo and Nelsons Green Brier Tennessee Whiskey." },
    { slug: "famiglia-santoni", photo: "assets/photos/santoni-garden.jpg", storyPhoto: "assets/photos/santoni-still.jpg", name: "Famiglia Santoni", country: "Italy", district: "Tuscany", region: "Chianciano Terme", base: "Chianciano Terme", founded: "1961", style: "Tuscan liqueurs and amari", scene: "amber",
      intro: "Founded in 1961 by Gabriello Santoni in Chianciano Terme, Tuscany, Famiglia Santoni produces classic Tuscan liqueurs and amari. Led today by Stefano Santoni, the family balances traditional cold-maceration techniques with modern aperitivo culture." },
    { slug: "henkell-freixenet", photo: "assets/photos/henkell-batida.jpg", name: "Henkell-Freixenet", country: "Germany", district: "Hesse", region: "Wiesbaden", base: "Wiesbaden", founded: "1832", style: "Mangaroca Batida de Côco", scene: "mist",
      intro: "Henkell-Freixenet (part of the Geschwister Oetker group) is a global sparkling wine and spirits giant based in Wiesbaden, Germany. Beyond its lead in sparkling wine (Freixenet, Mionetto, Henkell), its spirits portfolio features the coconut liqueur Mangaroca Batida de Côco." },
    { slug: "maison-ferrand", photo: "assets/photos/ferrand-bonbonnet.jpg", storyPhoto: "assets/photos/ferrand-cellar.jpg", name: "Maison Ferrand", country: "France", district: "Cognac", region: "Ars", base: "Château de Bonbonnet", founded: "1989", style: "Planteray Rum, Citadelle Gin", scene: "amber",
      intro: "Maison Ferrand is one of the most dynamic and respected independent spirits houses in France, founded in 1989 by Alexandre Gabriel. Built on a mission to revive traditional artisanal production methods and breathe new life into heritage spirits categories, the company operates out of Château de Bonbonnet in the heart of Cognac. While rooted in fine Cognac, Maison Ferrand is best known globally for its pioneering work with Planteray Rum and Citadelle Gin." },
    { slug: "gabriel-boudier", photo: "assets/photos/boudier-dijon.jpg", storyPhoto: "assets/photos/boudier-lab.jpg", name: "Maison Gabriel Boudier", country: "France", district: "Burgundy", region: "Dijon", base: "Dijon", founded: "1874", style: "Fruit liqueurs and cocktail ingredients", scene: "graphite",
      intro: "Founded in 1874 in Dijon, France, Maison Gabriel Boudier is an iconic producer of premium fruit liqueurs, cocktail ingredients, and craft spirits." },
    { slug: "lazzaroni", photo: "assets/photos/lazzaroni-factory.jpg", storyPhoto: "assets/photos/lazzaroni-amaretto.jpg", name: "Paolo Lazzaroni & Figli", country: "Italy", district: "Lombardy", region: "Saronno", base: "Saronno", founded: "1700s", style: "Italian liqueurs", scene: "amber",
      intro: "Based in Saronno, Italy, Lazzaroni is a historic family-owned producer of traditional Italian liqueurs and confectioneries. The company is world-renowned for its authentic maceration processes using real ingredients rather than synthetic flavor extracts." },
    { slug: "perola", photo: "assets/photos/perola-razels.jpg", storyPhoto: "assets/photos/perola-old-fashioned.jpg", name: "Perola Fine Spirits", country: "Germany", district: "Bavaria", region: "Schnaittach", base: "Schnaittach", founded: "2010", style: "Boutique craft spirits", scene: "mist",
      intro: "Perola Fine Spirits (Perola GmbH) is an independent German importer and brand developer founded in 2010 in Bavaria by Arno Schmid-Eibl. Perola focuses on boutique, additive-free craft spirits with strong terroir roots." },
    { slug: "salmari", photo: "assets/photos/salmari-logo.jpg", storyPhoto: "assets/photos/salmari-heisse-ware.jpg", name: "Salmari", country: "Finland", district: "Finland", region: "Finland", base: "Salmari Oy", founded: "—", style: "Salty liquorice liqueur", scene: "graphite",
      intro: "Salmari is a premium Finnish salty liquorice liqueur (salmiakkilikööri) produced by Salmari Oy. Distinct from mass-market shot brands, Salmari is crafted using natural liquorice root extracts and premium ammonium chloride (salmiak salt), resulting in a dark, opaque liqueur with lower sugar content, intense flavor, and a balanced alcohol bite (25% ABV). It is packaged in a matte-black glass bottle with minimalist typography." },
    { slug: "takamaka", photo: "assets/photos/takamaka-la-plaine.jpg", storyPhoto: "assets/photos/takamaka-sugarcane.jpg", name: "Takamaka Rum", country: "Seychelles", district: "Mahé", region: "La Plaine St. André", base: "Trois Frères Distillery, Mahé", founded: "2002", style: "Rum", scene: "amber",
      intro: "Takamaka Rum is the flagship spirit of the Seychelles, founded in 2002 by brothers Richard and Bernard d’Offay at the historic Trois Frères Distillery on Mahé island. Takamaka combines island culture with versatile rum production methods, using both local sugarcane juice (agricole style) and molasses." },
    { slug: "whistlepig", photo: "assets/photos/whistlepig-farm.jpg", storyPhoto: "assets/photos/whistlepig-bar.jpg", name: "WhistlePig", country: "USA", district: "Vermont", region: "Shoreham", base: "Shoreham, Vermont", founded: "2007", style: "Rye whiskey", scene: "graphite",
      intro: "Founded in 2007 on a farm in Shoreham, Vermont, WhistlePig is a producer of ultra-premium rye whiskey. Pioneered alongside the late Master Distiller Dave Pickerell, WhistlePig focuses on high-rye mash bills, farm-sourced grain, and experimental wood finishes." },
  ];

  // Taste profile 0–12 (the engine's meter labels are still the wine ones)
  const T = (body, freshness, tannins, sweetness, oak, herb, fruitness) => ({ body, freshness, tannins, sweetness, oak, herb, fruitness });
  // The client's product list ("products for web", 2026-11-10), in its order. Name, product number, type, price,
  // volume, alcohol, sugar, ingredients, taste profile, description and pairing come from Vinmonopolet
  // (fetched 2026-11-10, Norwegian translated to English). Vinmonopolet gives 2–3 taste values per product
  // (Fylde → body, Friskhet → freshness, Sødme → sweetness, Fat → oak, Krydder/Urt → herb, Frukt → fruitness);
  // the meters it does not give are 0. Serves where Vinmonopolet gives no pairing are sample text.
  // vmPhoto shows the Vinmonopolet photo. Brother's Bond (launch in January) and Salmari 300 cl are not at
  // Vinmonopolet: packshot (photo) and facts from the producer's site (brothersbondbourbon.com) and a retailer
  // (Salmari 3 L, urban-drinks.com); price, taste values and serves are samples. Barsol Pisco Quebranta has no
  // taste values at Vinmonopolet (sample).
  const vm = (n) => ({ vm: n, vmPhoto: n });
  const wines = [
    { slug: "razels-salted-caramel", name: "Razel’s Salted Caramel Liqueur", producer: "perola", type: "Liqueur", alc: "26 %", volume: "0,5 L", price: 399.9, ...vm("21016102"), sugar: "330 g/l", grapes: "Caribbean rum, caramel, Madagascar vanilla, fleur de sel, natural flavours", pairing: ["Neat, chilled", "Over ice cream"], taste: T(8, 10, 0, 2, 0, 0, 0),
      char: "Salted caramel, vanilla and lightly toasted nuts; full and creamy.", desc: "Caribbean rum blended with caramel, Madagascar vanilla and fleur de sel before filtering and bottling." },
    { slug: "razels-choco-brownie", name: "Razel’s Choco Brownie Liqueur", producer: "perola", type: "Liqueur", alc: "38.1 %", volume: "0,5 L", price: 459.9, ...vm("21015502"), sugar: "178,8 g/l", grapes: "Caribbean rum, natural chocolate, cocoa, vanilla and coffee flavours", pairing: ["Neat", "With coffee"], taste: T(8, 3, 0, 8, 0, 0, 0),
      char: "Dark chocolate, brownie, coffee and vanilla; creamy and sweet.", desc: "Caribbean rum blended with natural flavours to recreate freshly baked chocolate brownies." },
    { slug: "razels-banana-bread", name: "Razel’s Banana Bread Liqueur", producer: "perola", type: "Liqueur", alc: "38.1 %", volume: "0,5 L", price: 459.9, ...vm("21015802"), sugar: "131,5 g/l", grapes: "Caribbean rum, banana and walnut distillates, natural flavours", pairing: ["Aperitif", "Cheese", "Dessert"], taste: T(8, 7, 0, 3, 0, 0, 0),
      char: "Ripe banana, walnut, cocoa and fresh banana bread.", desc: "Caribbean rum blended with distillates of real bananas and walnuts and natural flavours." },
    { slug: "seven-keys-falernum", name: "Seven Keys Falernum", producer: "perola", type: "Liqueur", alc: "15 %", volume: "0,7 L", price: 429.9, ...vm("21015601"), sugar: "362 g/l", grapes: "Rum, ginger, almond, cinnamon, allspice, nutmeg, clove, tonka bean", pairing: ["Tiki cocktails", "Corn ’n’ Oil"], taste: T(7, 4, 0, 8, 0, 0, 0),
      char: "Lime, ginger, clove and warm spice.", desc: "A blend of Jamaican and Barbadian rum infused with ginger, almond, cinnamon, allspice, nutmeg, clove and tonka bean." },
    { slug: "barsol-perfecto-amor", name: "Barsol Perfecto Amor Aperitif", producer: "barsol", type: "Aperitif wine", alc: "17 %", volume: "0,75 L", price: 359.9, ...vm("20946801"), sugar: "26,5 g/l", grapes: "Quebranta 33 %, Italia 33 %, Torontel 34 %", pairing: ["Aperitif", "Cheese", "Dessert"], taste: T(8, 4, 0, 8, 0, 0, 0),
      char: "Raisin, dried apricot, caramel and nuts; rich and long.", desc: "The grapes are pressed and fermented separately, and fermentation is stopped with pisco before blending. No oak." },
    { slug: "mathilde-pear", name: "Mathilde Liqueur Pear", producer: "maison-ferrand", type: "Liqueur", alc: "18 %", volume: "0,7 L", price: 359.9, ...vm("20868901"), sugar: "340 g/l", grapes: "Williams pear distillate, pears, quince", pairing: ["With sparkling wine", "Cocktails"], taste: T(7, 6, 0, 10, 0, 0, 0),
      char: "Ripe pear with white flowers and a hint of quince.", desc: "Pears are pressed, fermented and distilled, then macerated for a week with a touch of quince." },
    { slug: "mathilde-peach", name: "Mathilde Liqueur Peach", producer: "maison-ferrand", type: "Liqueur", alc: "18 %", volume: "0,7 L", price: 359.9, ...vm("20866601"), sugar: "340 g/l", grapes: "Spirit, cane sugar, peach", pairing: ["With sparkling wine", "Cocktails"], taste: T(7, 6, 0, 8, 0, 0, 0),
      char: "Sweet, juicy peach with floral and stone-fruit notes.", desc: "Whole peaches are macerated in neutral alcohol, then cane sugar and water are added." },
    { slug: "dry-sack", name: "Dry Sack", producer: "williams-humbert", type: "Sherry", alc: "15 %", volume: "0,75 L", price: 209.9, ...vm("1212701"), sugar: "45 g/l", grapes: "Palomino 90 %, Pedro Ximénez 10 %", pairing: ["Cheese", "Vegetables"], taste: T(6, 6, 0, 4, 0, 0, 0),
      char: "Dried fruit, nuts and cask spice; raisin and orange marmalade.", desc: "A blend of Palomino and Pedro Ximénez, aged in the solera system." },
    { slug: "pando-fino", name: "Pando Fino Sherry", producer: "williams-humbert", type: "Sherry", alc: "15 %", volume: "0,75 L", price: 209.9, ...vm("21017901"), sugar: "Under 3 g/l", grapes: "100% Palomino Fino", pairing: ["Aperitif", "Cheese", "Dessert"], taste: T(7, 1, 0, 8, 0, 0, 0),
      char: "Flor, almonds, nuts and a light salty note; very dry.", desc: "Palomino Fino aged under flor in a traditional solera for at least five years, in American oak." },
    { slug: "manzanilla-alegria", name: "Manzanilla Alegria", producer: "williams-humbert", type: "Sherry", alc: "15 %", volume: "0,75 L", price: 209.9, ...vm("21017401"), sugar: "Under 3 g/l", grapes: "100% Palomino Fino", pairing: ["Aperitif", "Shellfish", "Cheese"], taste: T(6, 1, 0, 8, 0, 0, 0),
      char: "Flor, almonds, chamomile and sea minerals; very dry and fresh.", desc: "Palomino Fino aged under flor in a traditional solera in Sanlúcar de Barrameda." },
    { slug: "zafiro-gin", name: "Zafiro Gin", producer: "williams-humbert", type: "Gin", alc: "37.5 %", volume: "0,7 L", price: 399.9, ...vm("21017601"), sugar: "10 g/l", grapes: "Grain spirit, juniper, coriander seed, lemon peel, botanicals", pairing: ["Gin & tonic", "Martini"], taste: T(4, 0, 0, 2, 0, 7, 0),
      char: "Juniper, citrus, coriander and light floral notes; dry.", desc: "Juniper and botanicals are macerated and distilled in copper stills." },
    { slug: "zafiro-strawberry-gin", name: "Zafiro Strawberry Gin", producer: "williams-humbert", type: "Gin", alc: "37.5 %", volume: "0,7 L", price: 399.9, ...vm("21017801"), sugar: "32 g/l", grapes: "Grain spirit, juniper, citrus peel, botanicals, natural strawberry", pairing: ["With tonic", "Spritz"], taste: T(5, 0, 0, 5, 0, 5, 0),
      char: "Ripe strawberry, juniper, citrus and white flowers.", desc: "Distilled in copper stills and flavoured with natural strawberry after distillation." },
    { slug: "zafiro-orange-gin", name: "Zafiro Orange Gin", producer: "williams-humbert", type: "Gin", alc: "37.5 %", volume: "0,7 L", price: 399.9, ...vm("21018001"), sugar: "35 g/l", grapes: "Neutral spirit, juniper, citrus, natural orange-blossom flavour", pairing: ["With tonic", "Spritz"], taste: T(5, 0, 0, 4, 0, 6, 0),
      char: "Sweet orange, citrus peel, juniper and botanicals.", desc: "Made by the traditional gin distillation method." },
    { slug: "dos-maderas-5-5", name: "Williams & Humbert Ron Dos Maderas 5+5 YO", producer: "williams-humbert", type: "Rum", alc: "40 %", volume: "0,7 L", price: 699.9, ...vm("9750401"), sugar: "35 g/l", grapes: "Rum from sugarcane molasses", pairing: ["Neat", "After dinner"], taste: T(9, 0, 0, 5, 7, 0, 0),
      char: "Vanilla, raisin, dried fruit, caramel and oak.", desc: "Rum from Barbados and Guyana, aged five years in the Caribbean and five more in Dos Cortados Palo Cortado sherry casks." },
    { slug: "bruxo-x", name: "Bruxo X Mezcal", producer: "alias-smith", type: "Mezcal", alc: "40 %", volume: "0,7 L", price: 659.9, ...vm("11237601"), grapes: "Agave Espadín 80 %, Agave Barril 20 %", pairing: ["Neat", "Mezcal negroni"], taste: T(6, 0, 0, 0, 7, 0, 3),
      char: "Citrus, ripe fruit and flowers; dried chamomile, minerals and honey.", desc: "An artisanal ensamble, double-distilled in copper stills." },
    { slug: "bruxo-no-1", name: "BruXo No 1 Espadín Joven", producer: "alias-smith", type: "Mezcal", alc: "43 %", volume: "0,7 L", price: 789.9, ...vm("20903101"), grapes: "100% Agave Espadín", pairing: ["Neat", "Paloma"], taste: T(8, 0, 0, 0, 5, 0, 2),
      char: "Campfire smoke, baked agave, citrus peel and dried herbs.", desc: "Agave baked in earth pits, crushed with a tahona stone, fermented naturally and distilled in copper." },
    { slug: "lazzaroni-amaretto", name: "Lazzaroni Amaretto", producer: "lazzaroni", type: "Liqueur", alc: "24 %", volume: "0,7 L", price: 429.9, ...vm("16596801"), sugar: "430 g/l", grapes: "Amaretti di Saronno biscuits, apricot kernels, herbs, spices", pairing: ["Amaretto sour", "With coffee"], taste: T(9, 1, 0, 11, 0, 0, 0),
      char: "Almond biscuits, marzipan, dried apricot and vanilla.", desc: "Amaretti di Saronno biscuits macerated in neutral spirit, with sugar and a distillate of herbs and spices." },
    { slug: "lazzaroni-limoncino", name: "Lazzaroni Limoncino", producer: "lazzaroni", type: "Liqueur", alc: "32 %", volume: "0,5 L", price: 359.9, ...vm("20897502"), sugar: "310 g/l", grapes: "Neutral spirit, lemon, sugar", pairing: ["Ice cold", "After dinner"], taste: T(8, 7, 0, 9, 0, 0, 0),
      char: "Fresh lemon peel and zesty citrus oils.", desc: "Sicilian lemon peel macerated in neutral spirit." },
    { slug: "lazzaroni-amaro", name: "Lazzaroni Amaro", producer: "lazzaroni", type: "Liqueur", alc: "25 %", volume: "0,7 L", price: 429.9, ...vm("20897801"), sugar: "200 g/l", grapes: "60 herbs, roots, berries and seeds", pairing: ["Neat", "With tonic"], taste: T(6, 5, 0, 7, 0, 0, 0),
      char: "Peppermint, dark berries and gentian root; dry, long finish.", desc: "Herbs, roots and berries are macerated separately in neutral alcohol, then blended." },
    { slug: "lazzaroni-crema-panettone", name: "Lazzaroni Crema Panettone", producer: "lazzaroni", type: "Liqueur", alc: "17 %", volume: "0,5 L", price: 289.9, ...vm("20897402"), sugar: "280 g/l", grapes: "Cream, panettone infusion, butter, sugar", pairing: ["Chilled", "With dessert"], taste: T(11, 2, 0, 11, 0, 0, 0),
      char: "Fresh brioche, butter, vanilla and candied orange.", desc: "Candied citrus peel and raisins macerated in neutral spirit, with vanilla, sugar and fresh cream." },
    { slug: "lazzaroni-crema-pistacchio", name: "Lazzaroni Crema al Pistacchio", producer: "lazzaroni", type: "Liqueur", alc: "17 %", volume: "0,5 L", price: 219.9, ...vm("21150502"), sugar: "300 g/l", grapes: "Pistachio paste, milk and cream, sugar", pairing: ["Chilled", "With coffee"], taste: T(6, 2, 0, 11, 0, 0, 0),
      char: "Roasted pistachio and cream; thick and silky.", desc: "Roasted Italian pistachios ground to a paste and emulsified with fresh cream, sugar and neutral alcohol." },
    { slug: "boudier-cassis-35", name: "Gabriel Boudier Crème de Cassis de Dijon", producer: "gabriel-boudier", type: "Liqueur", alc: "20 %", volume: "0,35 L", price: 239.8, ...vm("3037302"), sugar: "520 g/l", grapes: "Blackcurrants, sugar, spirit", pairing: ["Kir", "Kir royal"], taste: T(4, 3, 0, 8, 0, 0, 0),
      char: "Intense blackcurrant with cool herbal notes.", desc: "Made the traditional way, macerated in rotating tanks." },
    { slug: "boudier-cassis-70", name: "Gabriel Boudier Crème de Cassis de Dijon", producer: "gabriel-boudier", type: "Liqueur", alc: "20 %", volume: "0,7 L", price: 399.9, ...vm("21015401"), sugar: "520 g/l", grapes: "Noir de Bourgogne and Royal de Naples blackcurrants", pairing: ["Kir", "Kir royal"], taste: T(11, 8, 0, 12, 0, 0, 0),
      char: "Fresh blackcurrant and crushed leaves; sweet, thick and fresh.", desc: "The blackcurrants are picked ripe and frozen, then macerated in neutral spirit with sugar and water." },
    { slug: "boudier-guignolet", name: "Gabriel Boudier Guignolet de Dijon", producer: "gabriel-boudier", type: "Liqueur", alc: "18 %", volume: "0,7 L", price: 399.9, ...vm("20897901"), sugar: "180 g/l", grapes: "Cherries, almond, sugar", pairing: ["Neat, chilled", "With tonic"], taste: T(5, 6, 0, 7, 0, 0, 0),
      char: "Dark and sour cherries with bitter almond.", desc: "Four cherry varieties macerated in neutral alcohol in rotating tanks." },
    { slug: "boudier-curacao-bleu", name: "Gabriel Boudier Curaçao Bleu", producer: "gabriel-boudier", type: "Liqueur", alc: "25 %", volume: "0,5 L", price: 359.9, ...vm("5071502"), sugar: "250 g/l", grapes: "Curaçao orange peel, sweet orange peel", pairing: ["Cocktails"], taste: T(7, 8, 0, 8, 0, 0, 0),
      char: "Bitter orange peel and citrus with a light floral note.", desc: "Distilled from the peel of bitter Curaçao oranges." },
    { slug: "boudier-creme-de-cacao", name: "Gabriel Boudier White Crème de Cacao", producer: "gabriel-boudier", type: "Liqueur", alc: "15 %", volume: "0,5 L", price: 289.9, ...vm("20897702"), sugar: "250 g/l", grapes: "Roasted cocoa beans, vanilla distillate", pairing: ["Grasshopper", "Alexander"], taste: T(8, 1, 0, 11, 0, 0, 0),
      char: "White chocolate, vanilla and roasted cocoa beans.", desc: "A dark maceration of cocoa, distilled in traditional copper stills." },
    { slug: "boudier-creme-de-figues", name: "Gabriel Boudier Crème Figues", producer: "gabriel-boudier", type: "Liqueur", alc: "20 %", volume: "0,5 L", price: 329.9, ...vm("20898102"), sugar: "300 g/l", grapes: "Figs, sugar, neutral spirit", pairing: ["With sparkling wine", "Over ice"], taste: T(10, 2, 0, 11, 0, 0, 0),
      char: "Fig, fig jam and honey with toasted nuts.", desc: "Figs macerated in neutral beet spirit, then blended cold with sugar syrup and water." },
    { slug: "boudier-rhubarb", name: "Gabriel Boudier Rhubarb Liqueur", producer: "gabriel-boudier", type: "Liqueur", alc: "15 %", volume: "0,5 L", price: 289.9, ...vm("20890602"), sugar: "250 g/l", grapes: "Rhubarb stalks, lemon juice, beet sugar", pairing: ["Spritz", "With tonic"], taste: T(4, 8, 0, 6, 0, 0, 0),
      char: "Fresh rhubarb, green apple and citrus.", desc: "Rhubarb stalks are macerated, then lemon juice, beet sugar and spring water are added." },
    { slug: "boudier-mango", name: "Gabriel Boudier Liqueur de Mango", producer: "gabriel-boudier", type: "Liqueur", alc: "20 %", volume: "0,5 L", price: 329.9, ...vm("21060002"), sugar: "200 g/l", grapes: "Mango, sugar, neutral spirit", pairing: ["Cocktails", "With sparkling wine"], taste: T(7, 6, 0, 9, 0, 0, 0),
      char: "Ripe mango and tropical fruit.", desc: "Mango steeped in neutral spirit and blended with sugar syrup and water." },
    { slug: "suro-elderflower", name: "Suro Elderflower", producer: "gabriel-boudier", type: "Liqueur", alc: "20 %", volume: "0,7 L", price: 439.9, ...vm("20897601"), sugar: "255 g/l", grapes: "Grape spirit, elderflowers, cane sugar, citrus", pairing: ["Spritz", "With tonic"], taste: T(6, 6, 0, 9, 0, 0, 0),
      char: "Elderflower, lychee, white peach and citrus peel.", desc: "An elderflower infusion, gently filtered and blended." },
    { slug: "fontbonne-1874", name: "Fontbonne 1874 Liqueur de Plantes", producer: "gabriel-boudier", type: "Liqueur", alc: "45 %", volume: "0,7 L", price: 749.9, ...vm("21016001"), sugar: "250 g/l", grapes: "26 herbs, plants, roots and spices", pairing: ["Neat", "Cocktails"], taste: T(9, 7, 0, 8, 0, 0, 0),
      char: "Spearmint, eucalyptus, sage, star anise and pine.", desc: "Plants macerated in neutral alcohol, then distilled in traditional copper stills." },
    { slug: "santoni-rosso-amaro", name: "Santoni Rosso Amaro Bitter", producer: "famiglia-santoni", type: "Bitter", alc: "25 %", volume: "0,7 L", price: 449.9, ...vm("20886201"), sugar: "240 g/l", grapes: "Natural plant extracts", pairing: ["Negroni", "Spritz"], taste: T(7, 0, 0, 8, 0, 6, 0),
      char: "Bitter herbs, citrus peel and rhubarb.", desc: "Dried botanicals cold-macerated in neutral spirit, then blended with sugar and water." },
    { slug: "santoni-vermouth-rabarbaro", name: "Santoni Vermouth al Rabarbaro", producer: "famiglia-santoni", type: "Vermouth", alc: "18 %", volume: "0,75 L", price: 389.9, ...vm("20898001"), sugar: "185 g/l", grapes: "White wine, Chinese rhubarb root, wormwood, spices, citrus", pairing: ["Aperitif", "Cheese", "Dessert"], taste: T(6, 6, 0, 6, 0, 0, 0),
      char: "Citrus peel, fresh rhubarb and light spice.", desc: "Spices macerated in neutral spirit and blended with white wine." },
    { slug: "santoni-aperitivo", name: "Santoni Aperitivo", producer: "famiglia-santoni", type: "Aperitivo", alc: "16 %", volume: "0,7 L", price: 459.9, ...vm("20886101"), sugar: "230 g/l", grapes: "34 botanicals: herbs, roots, flowers and citrus", pairing: ["Spritz", "With soda"], taste: T(5, 7, 0, 6, 0, 0, 0),
      char: "Spice, dried roots and herbs, then fresh citrus and a bitter finish.", desc: "34 botanicals, led by Tuscan iris and rhubarb, macerated separately in neutral spirit." },
    { slug: "mi-campo-blanco", name: "Mi Campo Tequila Blanco", producer: "constellation-brands", type: "Tequila", alc: "40 %", volume: "0,7 L", price: 689.9, ...vm("21017301"), grapes: "100% Weber blue agave", pairing: ["Margarita", "Paloma"], taste: T(5, 0, 0, 0, 6, 0, 3),
      char: "Agave, white pepper, ripe mango and lemongrass.", desc: "Made with techniques from the wine world, with a short rest in French oak." },
    { slug: "mi-campo-reposado", name: "Mi Campo Tequila Reposado", producer: "constellation-brands", type: "Tequila", alc: "40 %", volume: "0,7 L", price: 699.9, ...vm("21017501"), grapes: "100% Weber blue agave", pairing: ["Neat", "Old fashioned"], taste: T(7, 0, 0, 0, 5, 0, 4),
      char: "Agave, honey, white pepper, cocoa and dark berries.", desc: "Rested in French Napa Valley red-wine casks, then blended and filtered." },
    { slug: "nelsons-green-brier", name: "Nelson’s Green Brier Tennessee Whisky", producer: "constellation-brands", type: "Whisky", alc: "45.5 %", volume: "0,7 L", price: 699.9, ...vm("21015901"), grapes: "Corn, wheat, malted barley", pairing: ["Neat", "Cocktails"], taste: T(6, 0, 0, 0, 5, 0, 0),
      char: "Brown sugar, caramel and vanilla; toffee and baked apple.", desc: "Charcoal-mellowed by the Lincoln County Process and matured in new oak." },
    { slug: "mangaroca-batida", name: "Mangaroca Batida de Côco", producer: "henkell-freixenet", type: "Liqueur", alc: "16 %", volume: "0,7 L", price: 279.9, ...vm("21015701"), sugar: "230 g/l", grapes: "Coconut milk and extract, skimmed milk", pairing: ["With pineapple juice", "Cocktails"], taste: T(9, 1, 0, 10, 0, 0, 0),
      char: "Fresh coconut, coconut cream and vanilla.", desc: "Coconut extract blended with skimmed milk, neutral spirit and sugar syrup." },
    { slug: "takamaka-blanc", name: "Takamaka Rum Blanc", producer: "takamaka", type: "Rum", alc: "40.2 %", volume: "0,7 L", price: 449.9, ...vm("19630501"), grapes: "Rum from sugarcane molasses", pairing: ["Daiquiri", "Mojito"], taste: T(4, 0, 0, 2, 3, 0, 0),
      char: "Sugarcane, citrus and tropical fruit; light and clean.", desc: "Distilled from fermented sugarcane molasses and filtered before bottling." },
    { slug: "takamaka-zenn", name: "Takamaka Rum Zenn", producer: "takamaka", type: "Rum", alc: "40 %", volume: "0,7 L", price: 469.9, ...vm("19512501"), sugar: "8 g/l", grapes: "Rum from sugarcane molasses", pairing: ["Daiquiri", "Neat"], taste: T(6, 0, 0, 4, 5, 0, 0),
      char: "Vanilla, honey, caramel and mild spice.", desc: "A blend of pot-still and column rum, finished on ex-bourbon oak and rested in steel." },
    { slug: "takamaka-extra-noir", name: "Takamaka Extra Noir Charred Cask Rum", producer: "takamaka", type: "Rum", alc: "43 %", volume: "0,7 L", price: 659.9, ...vm("21017701"), grapes: "Rum from sugarcane molasses", pairing: ["Neat", "Old fashioned"], taste: T(9, 0, 0, 5, 8, 0, 0),
      char: "Caramel, toasted oak, cocoa and dark fruit, lightly smoky.", desc: "Pot and column still rum, matured in French oak, ex-bourbon, charred and French rum casks." },
    { slug: "takamaka-zepis-kreol", name: "Takamaka Zepis Kreol", producer: "takamaka", type: "Rum", alc: "43 %", volume: "0,7 L", price: 699.9, ...vm("19630401"), sugar: "14 g/l", grapes: "Rum from sugarcane molasses, local spices", pairing: ["Neat", "With ginger beer"], taste: T(8, 0, 0, 4, 10, 0, 0),
      char: "Cinnamon, nutmeg, clove and vanilla.", desc: "Molasses rum with local spices, aged in oak." },
    { slug: "brothers-bond-7-bib", name: "Brother’s Bond 7 Years Bottled in Bond Whiskey", producer: "brothers-bond", type: "Whisky", alc: "50 %", volume: "0,7 L", price: 899.9, vm: "", photo: "assets/photos/product-brothers-bond-7-bib.jpg", grapes: "51% corn, 39% rye, 10% malted rye", pairing: ["Neat", "Old fashioned"], taste: T(8, 5, 0, 4, 8, 2, 8),
      char: "Vanilla, toasted oak, sweet caramel and subtle baking spice; layers of fruit, spice and earth.", desc: "Made to the Bottled in Bond Act of 1897: distilled at one distillery in one season and aged at least seven years in a bonded warehouse. Deep barrel char, non-chill filtered, bottled at 100 proof." },
    { slug: "brothers-bond-bourbon", name: "Brother’s Bond Straight Bourbon", producer: "brothers-bond", type: "Whisky", alc: "40 %", volume: "0,7 L", price: 599.9, vm: "", photo: "assets/photos/product-brothers-bond-bourbon.jpg", grapes: "65% corn, 22% rye, 13% wheat and barley", pairing: ["Neat", "Old fashioned"], taste: T(7, 5, 0, 4, 7, 2, 8),
      char: "Caramel, vanilla and subtle oak; rich and balanced, with a touch of sweetness and spice.", desc: "A four-grain, high-rye straight bourbon, distilled in a copper column and pot doubler and aged at least four years in virgin American oak (char #4 on the staves, #2 on the heads)." },
    { slug: "salmari", name: "Salmari Premium Salmiak Liquor", producer: "salmari", type: "Liqueur", alc: "25 %", volume: "0,7 L", price: 389.9, ...vm("15656401"), sugar: "102 g/l", grapes: "Spirit, sugar, liquorice root, salmiak", pairing: ["Ice cold", "Shot"], taste: T(8, 3, 0, 8, 0, 0, 0),
      char: "Salmiak and liquorice; full and sweet with a salty note.", desc: "Handmade in Finland to the house recipe, with salmiak and liquorice." },
    { slug: "salmari-24x3cl", name: "Salmari Premium Salmiak Liquor (24 × 3 cl)", producer: "salmari", type: "Liqueur", alc: "25 %", volume: "24 × 3 cl", price: 683.3, ...vm("21101108"), sugar: "102 g/l", grapes: "Spirit, sugar, liquorice root, salmiak", pairing: ["Ice cold", "Shot"], taste: T(8, 3, 0, 8, 0, 0, 0),
      char: "Salmiak and liquorice; full and sweet with salty notes.", desc: "Salmiak and liquorice, in single-serve 3 cl bottles." },
    { slug: "salmari-300cl", name: "Salmari Premium Salmiak Liquor 300 cl", producer: "salmari", type: "Liqueur", alc: "25 %", volume: "3 L", price: 1499.9, vm: "", photo: "assets/photos/product-salmari-300cl.jpg", sugar: "102 g/l", grapes: "Spirit, sugar, liquorice root, salmiak", pairing: ["Ice cold", "Shot"], taste: T(8, 3, 0, 8, 0, 0, 0),
      char: "Salmiak and liquorice; full and sweet with a salty note.", desc: "The 3-litre XL bottle for bars, for the on-trade only (not at Vinmonopolet)." },
    { slug: "barsol-quebranta", name: "Barsol Pisco Quebranta", producer: "barsol", type: "Pisco", alc: "41.3 %", volume: "0,7 L", price: 589.9, ...vm("12812201"), grapes: "100% Quebranta grapes", pairing: ["Pisco sour", "Neat"], taste: T(6, 8, 0, 1, 0, 5, 8),
      char: "Pear, red apple, fresh-cut grass, cocoa and citrus.", desc: "Single-distilled in copper pot stills from fresh grape wine, with no added water, sugar or oak." },
    { slug: "altamura-vodka", name: "Altamura Vodka", producer: "altamura-vodka", type: "Vodka", alc: "43 %", volume: "0,7 L", price: 659.9, ...vm("19346301"), grapes: "100% Altamura durum wheat", pairing: ["Neat, chilled", "Martini"], taste: T(8, 0, 0, 1, 0, 0, 0),
      char: "Umami, grain sweetness, vanilla, citrus and light pepper.", desc: "Distilled from Altamura wheat in a five-step distillation process." },
  ];

  // News: the client's articles (2026-11-10), title and text as supplied, no subtitles. Each article has its own
  // body (article › blocks[]: one richText); the cover is a producer photo from assets/photos.
  const text = (...paras) => [{ type: "richText", html: paras.map((p) => (p.startsWith("## ") ? `<h2>${p.slice(3)}</h2>` : `<p>${p}</p>`)).join("") }];
  const articles = [
    { slug: "altamura-durum-wheat", title: "Altamura Distilleries and the durum wheat of Puglia", img: { photo: "assets/photos/altamura-wheat.jpg" }, blocks: text(
      "Altamura Distilleries Vodka is distilled from durum wheat grown in Altamura and neighbouring municipalities in Puglia, southern Italy. The distillery uses the same type of wheat used to make Pane di Altamura, a local bread registered by the European Union as a Protected Designation of Origin, known in Italy as DOP.",
      "The bread’s specification defines both where the wheat is grown and which varieties are used. At least 80% of the wheat used for its semolina must come from one or more of four durum wheat varieties grown in the designated area: Appulo, Arcangelo, Duilio and Simeto. The bread is made with durum wheat semolina, sourdough starter, water and sea salt.",
      "Co-founder Frank Grillo first worked with flour from Altamura while learning Puglian recipes ahead of a move to the region. He found the flour in the United States and baked a loaf at home in Atlanta. That led him to explore whether the grain could also be used for distillation. In Puglia, he discussed the idea with Andrea Cappiello and his family, who have grown wheat in the area for generations.") },
    { slug: "tenders", title: "Tenders", img: { scene: "lines-ink", seed: 3 }, blocks: text(
      "Vinmonopolet publishes its tenders twice a year. The next round is expected in December, and we’ll post the details here once they’re available.") },
    { slug: "takamaka-beginnings", title: "Takamaka’s beginnings in the Seychelles", img: { photo: "assets/photos/takamaka-la-plaine.jpg" }, blocks: text(
      "In 2000, Bernard d’Offay and his father, Robert, began experimenting with rum distillation. Their interest grew out of a family tradition. Bernard’s grandfather, René Michel d’Offay, made rum arrangé, a Creole preparation in which fruit, spices and other botanicals are steeped in rum.",
      "Distilling equipment was difficult to source locally, so Bernard and Robert used their backyard swimming pool to cool an improvised condenser. Inspired by the ways in which sailors would preserve fruits and spices in alcohol, Rum Arrangé was made by macerating leaves, fruit, seeds, bark and other ingredients for up to six months after which it was enjoyed as a digestive or sweetened with cane sugar syrup.",
      "With limited access to conventional distillation parts, Bernard and his father used their own backyard swimming pool as an interim cooling tower for their makeshift condenser, went off to their local supermarket to buy yeast and refined sugar, and began experimenting.",
      "They were joined by Bernard’s older brother, Richard, and after more than a year of testing - resulting in both some truly questionable as well as some rather remarkable trial rums - in February 2002 they officially opened Trois Frères Distillery in Seychelles. Soon after, they distilled and delivered their first ever order of Takamaka dark rum.",
      "Over the years, Richard and Bernard have honed their craft through their own sense of curiosity and discovery, but also through the limitations and curve balls that go hand in hand with the remoteness of the Seychelles. It’s impacted how they blend and age their rum, it’s forged the role they play in their community and it’s shaped who they are today as people, and as rum makers.",
      "The Jorre de St. Jorre family established La Plaine St André in 1792. The estate was named after Jean-François Jorre de St. Jorre’s birthplace on Réunion. At its largest, it covered more than 60 acres. In the 20th century, it grew cinnamon, vanilla, coconuts and patchouli for export to Europe.",
      "Over the years, the estate housed a coconut mill, a boat repair yard, a museum and an art gallery. It was rebuilt after a fire and later fell into disrepair. In 2008, Trois Frères Distillery secured a 50-year lease and spent the next two years restoring the property. Richard and Bernard have worked with the Seychelles Heritage Foundation to preserve the site and its history.") },
    { slug: "gabriello-santoni-origins", title: "Gabriello Santoni and the origins of the Tuscan distillery", img: { photo: "assets/photos/santoni-still.jpg" }, blocks: text(
      "The story of Distilleria Santoni began in 1961 in Chianciano Terme, a spa town in southern Tuscany. Founder Gabriello Santoni had long wanted to create his own amaro. He developed a recipe using a blend of 34 herbs and roots. The resulting liqueur became known as l’amaro con la carta geografica, or “the amaro with the map”.",
      "Santoni’s amaro was served in the bars of Chianciano Terme during the years associated with Federico Fellini’s La Dolce Vita. Over time, the distillery combined its traditional production methods with the development of new recipes, expanding its range to include other liqueurs and spirits.",
      "The Gabriello Santoni name brings together the family’s roots in Chianciano Terme, its approach to production and the range that grew out of that first amaro.") },
    { slug: "lazzaroni", title: "Lazzaroni", img: { photo: "assets/photos/lazzaroni-factory.jpg" }, blocks: text(
      "The Lazzaroni family’s story began in Saronno, a town in Lombardy in northern Italy. Carlo Lazzaroni developed the family’s production of amaretti, small, crisp biscuits associated with the town. In the 19th century, his sons took the business in two directions. Davide continued making amaretti in Saronno, while Paolo moved to nearby Monza in 1847 and began producing confectionery and liqueurs.",
      "The two branches of the family’s work came together in Amaretto Lazzaroni, first produced in 1851 according to the company. The recipe uses an infusion of Amaretti Chiostro di Saronno biscuits, making the biscuits themselves an ingredient in the liqueur.",
      "Today, Paolo Lazzaroni & Figli’s liqueur range includes limoncino, amaro and cream liqueurs such as Crema al Pistacchio and Crema al Panettone. The amaretto remains the product that connects the family’s biscuit-making and liqueur traditions.") },
    { slug: "boudier-blackcurrants", title: "Gabriel Boudier and the blackcurrants of Dijon", img: { photo: "assets/photos/boudier-dijon.jpg" }, blocks: text(
      "Maison Gabriel Boudier traces its history to 1874 in Dijon, Burgundy. The house grew out of the city’s tradition of making Crème de Cassis de Dijon, a liqueur made with blackcurrants. The Battault family took over in 1936 and continued producing crème de cassis as successive generations broadened the range.",
      "Among the blackcurrant varieties Boudier uses is Noir de Bourgogne. To make its crème de cassis, the house steeps blackcurrants and raspberries in distilled alcohol, a process known as maceration. The fruit’s flavour and colour pass into the liquid during this stage. Sugar is then dissolved directly in the infusion without heating it.",
      "Blackcurrant was the starting point for a range that now includes other fruit liqueurs, such as cherry-based guignolet and rhubarb liqueur, as well as orange-based curaçao. Crème de Cassis de Dijon remains part of the range more than a century after the house began.") },
    { slug: "williams-humbert-jerez", title: "Williams & Humbert and the wines of Jerez", img: { photo: "assets/photos/williams-humbert-cellar.jpg" }, blocks: text(
      "In 1877, Alexander Williams and Arthur Humbert founded Williams & Humbert in Jerez de la Frontera, in southern Spain. Their business was built around bringing the region’s sherries and brandies to markets abroad. The house later took part in establishing the Jerez-Xérès-Sherry designation of origin.",
      "The sherry range includes Dry Sack Medium, Pando Fino and Alegría Manzanilla. These wines represent different styles from the sherry region, from dry fino and manzanilla to medium sherry. The house’s sherry casks also play a role in making rum. The rum spends its first five years ageing in the Caribbean before travelling to Jerez. There, it spends three years in casks that previously held Dos Cortados, a Palo Cortado sherry, followed by two years in casks that held Don Guido, a Pedro Ximénez sherry. The two stages in Jerez connect the rum’s production directly to the house’s sherry-making history.") },
    { slug: "brothers-bond-bourbon", title: "Brother’s Bond Bourbon", img: { photo: "assets/photos/brothers-bond-founders.jpg" }, blocks: text(
      "## Ian Somerhalder, Paul Wesley and Brother’s Bond",
      "Ian Somerhalder and Paul Wesley played brothers Damon and Stefan Salvatore on The Vampire Diaries. While filming in the American South, they developed a shared interest in bourbon. That interest eventually became a business they called Brother’s Bond, a name that refers to both their on-screen roles and their friendship off-screen.",
      "The two visited distilleries, explored different mash bills—the proportions of grains used to make whiskey—and selected whiskeys to try in different blends. They spent about a year working on the blend in Somerhalder’s kitchen and were also involved in choosing the bottle, label and name. Brother’s Bond Bourbon launched in May 2021.") },
    { slug: "brothers-bond-whiskey-range", title: "The whiskey range", img: { photo: "assets/photos/brothers-bond-barrels.jpg" }, blocks: text(
      "The original Brother’s Bond Straight Bourbon is a four-grain whiskey bottled at 40% alcohol by volume. The range also includes a cask-strength bourbon and an American blended rye whiskey. The seven-year Bottled-in-Bond release is a straight bourbon bottled at 50% alcohol by volume, equivalent to 100 US proof.",
      "Bottled in Bond is a regulated US designation that sets conditions for how a whiskey is distilled, aged and bottled. The whiskey must come from one distiller at one distillery in a single distilling season, age for at least four years and be bottled at exactly 100 proof. The seven-year age statement indicates that this bourbon was aged for three years beyond that minimum.") },
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
    demo: { product: "lazzaroni-amaretto", producer: "maison-ferrand" },
    storyScene: "cellar",
    // Producer key facts (producer › attributes.properties): spirits houses instead of the wine defaults
    producerFacts: [["Founded", "founded"], ["Based in", "base"], ["Known for", "style"]],
    producers, wines, articles,
    team: {
      lead: { ...person("Tor Arne Fuglestveit", "Portfolio Director"), photo: "assets/photos/team-tor-arne.jpg", bio: [
        "Tor Arne has more than 15 years on wine and spirits industry, he brings extensive marketing and brand-building expertise, along with a unique understanding of the Norwegian on-trade and consumer landscape. He has built excellent relationships across the trade and has strong Vinmonopolet expertise.",
        "With a genuine passion for quality and the stories behind each product, he creates a strong connection between producers and the market, adding both authenticity and a personal touch.",
      ] },
      members: [{ ...person("Sabrina Spincic-Stuvland", "Managing Director"), photo: "assets/photos/team-sabrina.jpg", bio: [
        "Sabrina has a strong background in fast-moving consumer goods (FMCG) and marketing, from The Coca-Cola Company, Allied Domecq, Altia/Anora and combined with WSET certifications in wine, spirits, and beer, she brings exceptional tasting skills and a deep understanding of quality.",
        "She also has extensive experience in strategy and product development, with a sharp focus on pricing excellence. Sabrina has built long-term relationships across the industry and has a proven track record of delivering excellent results—both in building brands and driving volume growth.",
      ] }, { ...person("Stein-Erik Helverschou-Treverket", "CEO"), photo: "assets/photos/team-stein-erik.jpg", bio: [
        "Extensive experience in the wine and spirit industry, including 16 years at Solera. Background in the hotel industry with a degree in supply chain management.",
        "Played a key role in building and structuring the nightlife scene in Norway and Sweden for Solera. Achieved strong financial results and negotiated major chain agreements in Norway and Sweden. Strong relationships both nationally and internationally.",
      ] }, { ...person("Simon Pizzoni", "Brand Director"), photo: "assets/photos/team-simon.jpg", bio: [
        "Simon has extensive experience within the wine and spirits industry, with a deep understanding of both the on-trade and off-trade channels.",
        "Throughout his career, he has played a key role in building and developing leading wine and spirits brands in the Norwegian market. He has worked with internationally recognized brands such as Stolichnaya, Jose Cuervo, Belvedere, and several other premium spirits brands, successfully driving brand growth, market penetration, and commercial performance.",
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
      { type: "employees", member: "Stein-Erik Helverschou-Treverket" },
      { type: "employees", member: "Simon Pizzoni", reverse: true },
      { type: "employees", label: "Our sales team", tiles: 7, skip: 4, link: "Meet the team" },
      { type: "latestArticles", label: "News" },
      { type: "newsletter", title: "Market updates for the trade, every quarter.", checkboxes: ["I work in hospitality", "I am a producer"], done: "Thank you. You will receive the next update." },
    ],

    // producer shape › story[] (title, body); {placeholders} filled from the producer
    producerStory: [
      { title: "The house", body: "{base}, {country}. Founded in {founded}, and known for {style}." },
      { title: "Our partnership", body: "We work with {name} on range, logistics and launches in Norway, from Vinmonopolet tenders to bars and restaurants." },
    ],

    // contact › employeeList in two groups (client 2026-11-04): the main contacts first, then the sales team
    contactGroups: [
      { label: "Your contacts", names: ["Tor Arne Fuglestveit", "Sabrina Spincic-Stuvland", "Stein-Erik Helverschou-Treverket", "Simon Pizzoni"] },
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
