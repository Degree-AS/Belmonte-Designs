/* Belmonte Designs — shared prototype engine.
   Mirrors the components of the belmonte frontend: every brand renders the same markup and only its
   theme CSS differs, as in the app's *.styles.ts maps. Brand content and data come from window.BRAND
   (<brand>/assets/brand.js). Home and article pages are lists of CMS blocks, as in Crystallize. */
(() => {
  "use strict";
  const B = window.BRAND;

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
    taste: `<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 3h12l-.6 7a5.4 5.4 0 0 1-10.8 0Z"/><path d="M8.3 7.5h11.4M14 15.5V24M9.5 24.5h9"/></svg>`,
    pairing: `<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 3v8a2.5 2.5 0 0 0 5 0V3M9.5 3v22M19 25V3c3 1.5 4 6 4 10h-4"/></svg>`,
    grape: `<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2.5v4M14 5c2-2 5-2 6.5-1"/><circle cx="10" cy="10" r="3"/><circle cx="16" cy="10" r="3"/><circle cx="13" cy="15" r="3"/><circle cx="19" cy="15" r="3"/><circle cx="7" cy="15" r="3"/><circle cx="10" cy="20" r="3"/><circle cx="16" cy="20" r="3"/><circle cx="13" cy="25" r="2.4"/></svg>`,
  };

  // Per-theme icons (e.g. the ThemedLink arrow), as each theme has its own arrow in themed-actions-elements.tsx
  if (B.icons) Object.assign(I, B.icons);

  // ---------- Data ----------
  const { producers, wines, articles, team } = B;
  const P = Object.fromEntries(producers.map((p) => [p.slug, p]));
  const W = Object.fromEntries(wines.map((w) => [w.slug, w]));
  const A = Object.fromEntries(articles.map((a) => [a.slug, a]));
  wines.forEach((w) => { const p = P[w.producer]; w.country = p.country; w.region = p.district; });
  const C = B.colors;

  // ---------- SVG illustration helpers ----------
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const fill = (s, p) => s.replace(/\{(\w+)\}/g, (_, k) => p[k] ?? "");
  const kr = (n) => "Kr " + n.toFixed(2).replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  const rand = (seed) => { let s = seed * 9301 + 49297; return () => ((s = (s * 9301 + 49297) % 233280) / 233280); };

  const SHAPES = {
    bordeaux: { path: "M33 8h14v78c0 16 21 24 21 46v152c0 5-3 8-8 8H20c-5 0-8-3-8-8V132c0-22 21-30 21-46Z", cap: 62, label: [17, 168, 46, 78] },
    burgundy: { path: "M34 8h12v58c0 32 24 52 24 88v130c0 5-3 8-8 8H18c-5 0-8-3-8-8V154c0-36 24-56 24-88Z", cap: 56, label: [15, 176, 50, 74] },
    flute: { path: "M33 8h14v54c0 36 26 54 26 92v130c0 5-3 8-8 8H15c-5 0-8-3-8-8V154c0-38 26-56 26-92Z", cap: 84, label: [13, 180, 54, 64] },
    alsace: { path: "M35 8h10v92c0 22 17 30 17 52v132c0 5-3 8-8 8H26c-5 0-8-3-8-8V152c0-22 17-30 17-52Z", cap: 58, label: [21, 182, 38, 72] },
  };
  const GLASS = { red: ["#1c1714", "#2c2420"], white: ["#b9b98a", "#d4d3ab"], rose: ["#e2aea4", "#efc9c0"], sparkling: ["#1c2a1d", "#2b3d2c"], clear: ["#d8d2c4", "#ece7dc"] };

  function bottle(w) {
    const s = SHAPES[w.shape], g = GLASS[w.glass], p = P[w.producer];
    const [lx, ly, lw, lh] = s.label;
    const id = "g" + w.vm;
    const initials = p.name.split(/\s+/).filter((x) => /^[A-ZÀ-Ý]/.test(x)).slice(-2).map((x) => x[0]).join("");
    // Up to two words on the label, one if they would not fit
    const words = w.name.replace(/\s\d{4}$/, "").split(" ");
    const short = words.slice(0, 2).join(" ").length > 14 ? words[0] : words.slice(0, 2).join(" ");
    const cx = s.path.match(/^M(\d+)/)[1], cw = s.path.match(/h(\d+)/)[1];
    return `<svg viewBox="0 0 80 300" role="img" aria-label="${esc(w.name)}"><defs><linearGradient id="${id}" x1="0" x2="1"><stop offset="0" stop-color="${g[0]}"/><stop offset=".35" stop-color="${g[1]}"/><stop offset="1" stop-color="${g[0]}"/></linearGradient></defs>
      <path d="${s.path}" fill="url(#${id})"/>
      <path d="M${cx} 8h${cw}v${s.cap - 8}h-${cw}Z" fill="${w.capsule}"/>
      <rect x="${lx}" y="${ly}" width="${lw}" height="${lh}" fill="${C.labelPaper}"/>
      <rect x="${lx + 3}" y="${ly + 3}" width="${lw - 6}" height="${lh - 6}" fill="none" stroke="${C.labelInk}" stroke-width=".4"/>
      <text x="40" y="${ly + lh * 0.38}" text-anchor="middle" font-family="${B.fonts.serif}" font-size="11" fill="${C.labelInk}">${esc(initials)}</text>
      <line x1="${40 - lw * 0.22}" x2="${40 + lw * 0.22}" y1="${ly + lh * 0.5}" y2="${ly + lh * 0.5}" stroke="${C.labelInk}" stroke-width=".4"/>
      <text x="40" y="${ly + lh * 0.66}" text-anchor="middle" font-family="${B.fonts.sans}" font-size="3.6" letter-spacing=".4" fill="${C.labelText}">${esc(short.toUpperCase())}</text>
      <text x="40" y="${ly + lh * 0.8}" text-anchor="middle" font-family="${B.fonts.sans}" font-size="3" fill="${C.labelMuted}">${esc(p.district.toUpperCase())}</text>
      <rect x="${lx + 4}" y="${s.cap + 30}" width="2.2" height="${ly - s.cap - 40}" fill="#fff" opacity=".12" rx="1"/>
    </svg>`;
  }

  // Placeholder illustrations: landscape, cellar and flowing-line scenes, coloured from the brand palette
  function scene(kind, seed = 1, note = "") {
    const r = rand(seed);
    const noteAttr = note ? `data-note="${esc(note)}"` : "";
    if (kind === "cellar") {
      const c = C.cellar;
      let barrels = "";
      for (let row = 0; row < 3; row++) for (let i = 0; i < 6; i++) {
        const cx = 40 + i * 64 + (row % 2) * 32, cy = 230 - row * 56;
        barrels += `<ellipse cx="${cx}" cy="${cy}" rx="28" ry="27" fill="${c.barrel}" stroke="${c.line}" stroke-width="1.2"/><ellipse cx="${cx}" cy="${cy}" rx="18" ry="17" fill="none" stroke="${c.line}" stroke-width=".8" opacity=".7"/><circle cx="${cx}" cy="${cy}" r="2" fill="${c.line}"/>`;
      }
      return `<span class="ph" ${noteAttr}><svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="400" height="300" fill="${c.bg}"/><path d="M0 0h400v40Q200 -10 0 40Z" fill="${c.barrel}"/>${barrels}</svg></span>`;
    }
    const pal = C.scenes[kind] || Object.values(C.scenes)[0];
    const light = (C.lightScenes || []).includes(kind);
    if (kind.startsWith("lines")) {
      // Flowing strokes in the spirit of a handwritten signature
      const [bg, a, b] = pal;
      let paths = "";
      for (let i = 0; i < 7; i++) {
        const y0 = 40 + i * 34 + r() * 20, y1 = 30 + r() * 240, y2 = 30 + r() * 240;
        paths += `<path d="M-20 ${y0} C 120 ${y1}, 260 ${y2}, 420 ${y0 + (r() - 0.5) * 80}" fill="none" stroke="${i % 2 ? a : b}" stroke-width="${1 + r() * 1.6}" stroke-linecap="round" opacity="${0.45 + r() * 0.5}"/>`;
      }
      return `<span class="ph ${light ? "light" : ""}" ${noteAttr}><svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="400" height="300" fill="${bg}"/>${paths}</svg></span>`;
    }
    const [sky, h1, h2, h3, line] = pal;
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
    return `<span class="ph ${light ? "light" : ""}" ${noteAttr}><svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="400" height="300" fill="${sky}"/>
      <circle cx="${sunX}" cy="${sunY}" r="${22 + r() * 14}" fill="${line}" opacity=".55"/>
      <path d="${hill(120, 34, 3)}" fill="${h1}"/>
      <path d="${hill(150, 26, 4)}" fill="${h2}"/>
      <path d="M0 ${vy + 2} Q200 ${vy - 18} 400 ${vy + 6} V300 H0Z" fill="${h3}"/>
      ${rows}${posts}
    </svg></span>`;
  }

  function portrait(name, seed = 1) {
    const bg = C.portraitBgs[seed % C.portraitBgs.length];
    const ini = name.split(" ").map((x) => x[0]).slice(0, 2).join("");
    return `<span class="ph light" data-note="Portrait"><svg viewBox="0 0 312 304" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Portrait placeholder for ${esc(name)}">
      <rect width="312" height="304" fill="${bg}"/>
      <circle cx="156" cy="128" r="50" fill="none" stroke="${C.portraitInk}" stroke-width="1.3" opacity=".55"/>
      <path d="M62 304c6-62 46-96 94-96s88 34 94 96" fill="none" stroke="${C.portraitInk}" stroke-width="1.3" stroke-linecap="round" opacity=".55"/>
      <text x="156" y="52" text-anchor="middle" font-family="${B.fonts.serif}" font-size="22" fill="${C.portraitInk}" opacity=".7">${esc(ini)}</text>
    </svg></span>`;
  }

  const media = (img, note) => img.photo ? `<img class="cover" src="${img.photo}" alt="" loading="lazy">` : scene(img.scene, img.seed, note ?? img.note ?? "");

  function meter(v) {
    const c = 2 * Math.PI * 8.45, len = (v / 12) * c;
    return `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11.4" fill="none" stroke="${C.meter}" stroke-width=".6"/><circle cx="12" cy="12" r="5.5" fill="none" stroke="${C.meter}" stroke-width=".6"/><circle cx="12" cy="12" r="8.45" fill="none" stroke="${C.meter}" stroke-width="5.6" stroke-dasharray="${len} ${c}" transform="rotate(-90 12 12)"/></svg>`;
  }

  // ---------- Dev view annotations ----------
  // cms(): a Crystallize shape / block / piece and the app component that renders it (orange label in dev view).
  // fld(): the Crystallize field (or code source) behind one element (blue label in dev view).
  const cms = (source, comp, detail = "") => ` data-cms="${esc(source)}" data-comp="${esc(comp)}" data-tip="${esc(source + " → " + comp + (detail ? "\n" + detail : ""))}"`;
  const fld = (name) => ` data-field="${esc(name)}" data-tip="${esc("Field: " + name)}"`;

  // ---------- Shared components ----------
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
      <div class="img"${fld("thumbnail")}>${media(a.img, "")}</div>
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
  const latestArticles = (title, list, source = "blocks › latestArticles") => `<section class="container"${cms(source, "blocks/latest-articles", "Fields: label, link. Tiles: latest article items")}>
      <div class="module-head"><span class="label rule"${fld("label")}>${esc(title)}</span>${tlink("All articles", "#articles", "", fld("link"))}</div>
      <div class="article-list">${list.slice(0, 4).map(articleTile).join("")}</div>
    </section>`;

  // ---------- CMS blocks (blocks.tsx) ----------
  // Each renderer takes the block's content from brand.js; `shape` is the Crystallize shape that holds blocks[].
  const BLOCKS = {
    banner: (b, shape) => `<section class="banner" aria-label="Banner"${cms(shape + " › blocks › bannerFullscreen", "blocks/banner", "Fields: title, intro, image, useParallax")}>
        <div class="banner-media"${fld("image")}>${media(b.image, b.image.note || "")}</div>
        <div class="container">
          <h1${fld("title")}>${b.title}</h1>
          <p class="intro"${fld("intro")}>${esc(b.intro)}</p>
        </div>
      </section>`,
    intro: (b, shape) => introModule({ ...b, source: shape + " › blocks › introModule" }),
    groupImage: (b, shape) => `<section class="container group-image ${b.reverse ? "reverse" : ""}" aria-label="Images"${cms(shape + " › blocks › groupImageModule", "blocks/group-image", "Fields: primaryImage, secondaryImage, reverseOrder, imagePosition")}>
        <div class="large"${fld("primaryImage")}>${media(b.large)}</div>
        <div class="small"${fld("secondaryImage")}>${media(b.small)}</div>
      </section>`,
    paragraphs: (b, shape) => `<section class="container paragraphs"${cms(shape + " › blocks › paragraphCollection", "blocks/paragraph-collection", "Repeated: title, body (rich text)")}>
        ${b.rows.map((row, i) => `<div class="row"><span class="label"${i === 0 ? fld("title") : ""}>${esc(row.title)}</span><div${i === 0 ? fld("body") : ""}>${row.heading ? `<h3>${esc(row.heading)}</h3>` : ""}<p>${esc(row.body)}</p></div></div>`).join("")}
      </section>`,
    richText: (b, shape) => `<section class="container"${cms(shape + " › blocks › richTextModule", "blocks/rich-text", "Fields: text, textAlign, largeVerticalSpacing, textColor")}><div class="rich-text"${fld("text")}>${b.html}</div></section>`,
    quote: (b, shape) => `<section class="container quote-block" aria-label="Quote"${cms(shape + " › blocks › quoteModule", "blocks/quote", "Fields: quote, attribution")}>
        <blockquote${fld("quote")}>${esc(b.quote)}</blockquote>
        <cite class="label muted"${fld("attribution")}>${esc(b.attribution)}</cite>
      </section>`,
    producerList: (b, shape) => `<section class="container producer-list-block" aria-label="Producers"${cms(shape + " › blocks › producerList", "blocks/producer-list", "Fields: maxQuantity, allProducersLink. Names: producer items")}>
        <div class="producer-names"${fld("producer › name")}>${producers.map((p) => `<a href="#pr.${p.slug}">${esc(p.name)}</a>`).join("")}</div>
        ${tlink(b.link, "#producers", "", fld("allProducersLink"))}
      </section>`,
    employees: (b, shape) => {
      const m = team.lead;
      return `<section class="container employee-block" aria-label="Employees"${cms(shape + " › blocks › employees", "blocks/employee", "Fields: label, employeeList → employee (name, roles, picture, email, phone, bio)")}>
        ${b.label ? `<p class="label rule"${fld("label")}>${esc(b.label)}</p>` : ""}
        <article class="employee">
          <div class="img"${fld("employee › picture")}>${portrait(m.name, 1)}</div>
          <div>
            <h4${fld("employee › name")}>${esc(m.name)}</h4>
            <p class="role"${fld("employee › roles")}>${esc(m.role)}</p>
            <div class="contact"${fld("employee › email, phone")}><span>${esc(m.email)}</span><span>${esc(m.phone)}</span></div>
            <div class="bio"${fld("employee › bio")}>${m.bio.map((p) => `<p>${esc(p)}</p>`).join("")}</div>
          </div>
        </article>
      </section>`;
    },
    latestArticles: (b, shape, ctx) => latestArticles(b.label, ctx && ctx.exclude ? articles.filter((a) => a.slug !== ctx.exclude) : articles, shape + " › blocks › latestArticles"),
    newsletter: (b, shape) => `<section class="container" aria-label="Newsletter"${cms(shape + " › blocks › newsletter", "blocks/newsletter", "Fields: formTitle, checkboxes, confirmationTitle, confirmationDescription, milchampConfig")}>
        <div class="newsletter">
          <h2${fld("formTitle")}>${esc(b.title)}</h2>
          <form data-newsletter novalidate>
            <div class="checks"${fld("checkboxes")}>${b.checkboxes.map((c, i) => `<label><input type="checkbox" id="nl-${i}" ${i === 0 ? "checked" : ""}> ${esc(c)}</label>`).join("")}</div>
            <div class="input"><label for="nl-email" class="sr">Email</label><input id="nl-email" type="email" placeholder="Your email" required><button type="submit" aria-label="Subscribe">${I.arrow}</button></div>
            <p class="done" hidden${fld("confirmationTitle / confirmationDescription")}>${esc(b.done)}</p>
          </form>
        </div>
      </section>`,
    singleImage: (b, shape) => `<div class="container"><figure class="single-image large"${cms(shape + " › blocks › singleImageModule", "blocks/single-image", "Fields: image, size")}>${media(b.image, "Single image")}</figure></div>`,
    counter: (b, shape) => `<div class="container">${counters(b.items, b.items.length > 4 ? 3 : b.items.length, shape + " › blocks › counterModule")}</div>`,
  };
  // Blocks each shape accepts, per the belmonte discovery queries (FetchDomainPage, FetchArticlePage)
  const ALLOWED = {
    domain: ["banner", "intro", "groupImage", "singleImage", "paragraphs", "richText", "employees", "producerList", "latestArticles", "newsletter"],
    article: ["intro", "counter", "singleImage", "groupImage", "paragraphs", "richText", "quote"],
  };
  const renderBlocks = (list, shape, ctx) => list.map((b) => {
    if (!ALLOWED[shape].includes(b.type)) return `<p class="container empty">Block “${esc(b.type)}” is not available on the ${shape} shape.</p>`;
    return BLOCKS[b.type](b, shape, ctx);
  }).join("");

  // ---------- Header / footer / menu ----------
  const NAV = B.nav;

  function header(route) {
    const overlay = route === "home";
    const L = B.logo;
    return `<header class="site-header ${overlay ? "overlay" : ""}"${cms("layout › header (HeaderPiece)", "layout/header", "Fields: headerLinks, menuLinks, color, hideLogo, hideBrand")}>
      <div class="container">
        <a class="hdr-logo" href="#home" aria-label="Back to home"${fld("code: LogoRenderer")}><img src="${overlay ? L.groupOnDark : L.groupOnLight}" alt=""><span>part of Belmonte Beverage Group</span></a>
        <a class="hdr-brand" href="#home" aria-label="${esc(B.name)}, home"${fld("code: BrandRenderer")}><img src="${overlay ? L.brandOnDark : L.brandOnLight}" alt="${esc(B.name)}"></a>
        <nav class="hdr-right" aria-label="Main">
          <span class="hdr-links"${fld("headerLinks")}>${NAV.map(([t, h, k]) => `<a href="${h}" class="${route.startsWith(k) ? "on" : ""}">${t}</a>`).join("")}</span>
          <button class="menu-btn" type="button" data-open-menu aria-haspopup="dialog"${fld("menuLinks → opens HeaderDialog")}>${I.menu}<b>MENU</b></button>
        </nav>
      </div>
    </header>`;
  }

  const MENU = [["Home", "#home"], ["Our producers", "#producers"], ["Our selection", "#products"], [B.titles.articles, "#articles"], ["Our team", "#team"], ["Contact", "#contact"]];

  function menuDialog() {
    return `<div class="menu-dialog dark" role="dialog" aria-modal="true" aria-label="Menu" hidden${cms("layout › header › menuLinks", "layout/header/header-dialog")}>
      <div class="container top">
        <img src="${B.logo.groupOnDark}" alt="">
        <button class="close" type="button" data-close-menu>CLOSE ${I.close}</button>
      </div>
      <div class="container menu-body">
        <span></span>
        <nav aria-label="Menu"${fld("menuLinks")}>${MENU.map(([t, h]) => `<a href="${h}">${t}</a>`).join("")}</nav>
      </div>
    </div>`;
  }

  function footer() {
    return `<footer class="site-footer dark"${cms("layout › footer (FooterPiece)", "layout/footer", "Fields: footerLinks, footerSecondaryLinks, hideLogo, hideBrand")}>
      <div class="container">
        <nav class="ft-primary" aria-label="Footer"${fld("footerLinks")}>${MENU.slice(1).map(([t, h]) => `<a href="${h}">${t}</a>`).join("")}</nav>
        <nav class="ft-secondary" aria-label="Footer secondary"${fld("footerSecondaryLinks")}>${B.footerSecondary.map((t) => `<a>${esc(t)}</a>`).join("")}</nav>
        <div class="ft-bottom"${fld("code: LogoRenderer + BrandRenderer + copyright")}>
          <img class="logo" src="${B.logo.groupOnDark}" alt="Belmonte Beverage Group">
          <img class="brand" src="${B.logo.brandOnDark}" alt="${esc(B.name)}">
          <span class="copy">Copyright © ${new Date().getFullYear()} Belmonte Beverage Group</span>
        </div>
      </div>
    </footer>`;
  }

  // ---------- Pages ----------
  const pages = {};

  // Home: app/(home)/page.tsx ← domain shape, blocks[]
  pages.home = () => {
    const [first, ...rest] = B.home;
    const lead = first.type === "banner" ? BLOCKS.banner(first, "domain") : "";
    return `${lead}<div class="blocks">${renderBlocks(first.type === "banner" ? rest : B.home, "domain")}</div>`;
  };

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
        <div class="pd-price"${cms("defaultVariant.priceVariants + vinmonopoletId", PD + "/product-price", "Uses vinmonopolet-price (belmonte uses horeca-price)")}>
          <div><p class="amount"${fld("priceVariants › vinmonopolet-price")}>${kr(w.price)}</p><p class="label">Price at Vinmonopolet incl. VAT</p></div>
          ${tlink("Vinmonopolet", "#p." + w.slug, "", fld("vinmonopoletId → vinmonopolet.no/p/{id}"))}
        </div>
        <div class="pd-spec"${cms("tasteProfile · foodPairing · grapeVariety", PD + "/product-specification")}>
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
    ${related.length ? `<section class="container related" aria-label="Related wines"${cms("parent › producer.children (defaultProduct)", PD + "/related-products")}>
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
        <div class="sort"${cms("FetchProducerFacets › Country", "features/producer (ProducerFilterCountry)")}><label for="pc" class="sr">Country</label><select id="pc"><option value="">All countries</option>${[...new Set(producers.map((p) => p.country))].sort().map((c) => `<option ${pstate.country === c ? "selected" : ""} value="${esc(c)}">${esc(c)} - ${producers.filter((p) => p.country === c).length}</option>`).join("")}</select>${I.chevron}</div>
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
    const story = B.producerStory.map((s) => ({ title: s.title, body: fill(s.body, p) }));
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
      <figure class="single-image large"${cms("producer › story[0].firstImage", "blocks/single-image")}>${scene(B.storyScene, 31, "Story image")}</figure>
      ${story.map((s, i) => `<div class="paragraphs"${cms(`producer › story[${i}] (title, body)`, "blocks/paragraph-collection")}>
        <div class="row"><span class="label"${i === 0 ? fld("title") : ""}>${esc(s.title)}</span><p${i === 0 ? fld("body") : ""}>${esc(s.body)}</p></div>
      </div>`).join("")}
    </div>
    <section class="container all-wines" id="all-wines" aria-label="Wines"${cms("producer children → defaultProduct[]", "features/product-list (#all-wines)")}>
      <div class="module-head"><span class="label rule">Wines from ${esc(p.name)}</span></div>
      <div class="product-list">${list.map(productTile).join("")}</div>
    </section>`;
  };

  // Articles list: views/articles-view ← articles shape + article children
  pages.articles = () => `
    <section class="container page-title"${cms("articles › title", "views/articles-view")}><h1>${esc(B.titles.articles)}</h1></section>
    <section class="container articles-page">
      <div class="article-list"${cms("articles › children (shape: article)", "features/article/article-list", "16 per page, infinite scroll")}>${articles.map(articleTile).join("")}</div>
    </section>`;

  // Article: views/article-view ← article shape: title, subtitle, blocks[]
  pages.article = (slug) => {
    const a = A[slug] || articles[0];
    const blocks = [{ type: "singleImage", image: a.img }, ...B.articleBlocks];
    return `
    <header class="container article-head"${cms("article › title, subtitle", "features/article/article-title")}>
      <h1${fld("title")}>${esc(a.title)}</h1>
      <p${fld("subtitle")}>${esc(a.sub)}</p>
    </header>
    <div class="blocks article-blocks">${renderBlocks(blocks, "article", { exclude: a.slug })}</div>`;
  };

  // Team: views/team-view (non-belmonte TeamView) ← team-members shape + employee children
  pages.team = () => `
    <section class="container page-title"${cms("team-members › title", "views/team-view")}><h1>Our team</h1></section>
    <section class="container team-tiles"${cms("team-members › children (shape: employee)", "views/team-view (tiles)")}>${[team.lead, ...team.members].map(teamTile).join("")}</section>`;

  // Contact: views/contact-view ← contact shape: introModule piece + employeeList piece
  pages.contact = () => `
    <div class="contact-view">
      ${introModule({ ...B.contact, source: "contact › introModule" })}
      <div class="container"${cms("contact › employeeList (employeeContact, link)", "views/contact-view")}>
        <div class="team-grid"${fld("employeeContact.items")}>${[team.lead, ...team.members.slice(0, 3)].map(teamTile).join("")}</div>
        <div class="contact-more">${tlink("View all team members", "#team", "", fld("link"))}</div>
      </div>
    </div>`;

  // Shared with design-system.html, which renders component previews from the same helpers.
  window.Proto = { I, wines, W, producers, articles, team, bottle, scene, portrait, meter, tlink, keyInfo, tileInfo, kr, productTile, articleTile, teamTile, counters, introModule, BLOCKS };
  if (!document.getElementById("app")) return;

  // ---------- Router ----------
  const ROUTES = [
    ["home", "Home", "#home"], ["products", "Products", "#products"], ["product", "Product", "#p." + B.demo.product],
    ["producers", "Producers", "#producers"], ["producer", "Producer", "#pr." + B.demo.producer],
    ["articles", "Articles", "#articles"], ["article", "Article", "#a." + articles[0].slug], ["team", "Our team", "#team"], ["contact", "Contact", "#contact"],
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
  const KEY = "belmonte-designs-" + B.key;
  let protoHidden = store.get(KEY + "-proto-hidden") === "1";
  let dev = /(^|[?&])dev\b/.test(location.search) || store.get("belmonte-designs-dev") === "1";

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
    return `<nav class="proto" aria-label="Prototype pages"><span class="t">${esc(B.shortName)} prototype</span>${ROUTES.map(([k, t, h]) => `<a href="${h}" class="${k === route ? "on" : ""}">${t}</a>`).join("")}<a href="design-system.html">Design system</a><button class="dev-toggle ${dev ? "on" : ""}" type="button" data-dev aria-pressed="${dev}">Dev view</button><button type="button" data-proto-hide aria-label="Hide page navigator">×</button></nav>`;
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
      store.set("belmonte-designs-dev", dev ? "1" : "0");
      t.classList.toggle("on", dev);
      t.setAttribute("aria-pressed", String(dev));
      if (!dev) document.querySelectorAll("[data-cms],[data-field]").forEach((el) => (el.style.position = ""));
      applyDev();
    }
    if (t.matches("[data-proto-hide],[data-proto-show]")) {
      protoHidden = t.matches("[data-proto-hide]");
      store.set(KEY + "-proto-hidden", protoHidden ? "1" : "0");
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
