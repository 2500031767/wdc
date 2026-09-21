/* ===================== WDC Portal — site renderer ===================== */

let D = null;
const view = document.getElementById("view");

const esc = (s) => String(s == null ? "" : s)
  .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;");

/* ------------------------------ chrome ------------------------------ */
function paintChrome() {
  document.getElementById("mastheadImg").src = D.site.headerImage;
  document.getElementById("brandTitle").textContent = D.site.title;
  document.getElementById("brandSub").textContent = D.site.subtitle;
  document.getElementById("footTitle").textContent = D.site.title;
  document.getElementById("footCopy").textContent = D.site.copyright;
  document.getElementById("footCredit").textContent =
    (D.site.credit || "").replace(/^Developed and designed by\s*/i, "");
  document.title = D.site.title + " — KLEF";

  document.getElementById("footDocs").innerHTML = D.scholarships
    .map((s) => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.name)}</a></li>`)
    .join("");

  document.getElementById("footContact").innerHTML = D.contacts
    .map((c) => `<li>${esc(c.name)} — <a href="mailto:${esc(c.email)}">${esc(c.email)}</a></li>`)
    .join("");
}

/* ------------------------------ helpers ----------------------------- */
function pageHead(title, crumb) {
  return `<div class="page-head"><div class="shell">
    <h1>${esc(title)}</h1>
    <p class="crumbs"><a href="#/">Home</a> / ${esc(crumb || title)}</p>
  </div></div>`;
}

function tableBlock(key, opts = {}) {
  const t = D.tables[key];
  if (!t) return "";
  const filterable = opts.filter !== false;
  const head = t.columns.map((c) => `<th scope="col">${esc(c)}</th>`).join("");
  const tools = filterable
    ? `<div class="table-tools">
         <input type="search" id="q-${key}" placeholder="Search ${esc(t.label.toLowerCase())}" aria-label="Search ${esc(t.label)}">
         ${opts.yearCol != null ? `<select id="y-${key}" aria-label="Filter by year"><option value="">All years</option>${
             [...new Set(t.rows.map((r) => r[opts.yearCol]))].map((y) => `<option>${esc(y)}</option>`).join("")
           }</select>` : ""}
         <span class="count" id="c-${key}"></span>
       </div>`
    : "";
  return `${tools}<div class="table-wrap"><table id="t-${key}">
      <thead><tr>${head}</tr></thead>
      <tbody>${rowsHTML(t)}</tbody>
    </table></div>`;
}

function rowsHTML(t) {
  return t.rows.map((r) => {
    const cells = t.columns.map((_, i) => {
      const v = r[i] == null ? "" : r[i];
      if (t.linkColumn != null && i === t.linkColumn && v) {
        return `<td><a href="${esc(v)}" target="_blank" rel="noopener">Open report</a></td>`;
      }
      if (/^\S+@\S+\.\S+$/.test(v)) return `<td><a href="mailto:${esc(v)}">${esc(v)}</a></td>`;
      return `<td>${esc(v)}</td>`;
    }).join("");
    return `<tr>${cells}</tr>`;
  }).join("");
}

function wireTable(key, yearCol) {
  const q = document.getElementById("q-" + key);
  const y = document.getElementById("y-" + key);
  const table = document.getElementById("t-" + key);
  const count = document.getElementById("c-" + key);
  if (!table) return;
  const apply = () => {
    const term = (q?.value || "").toLowerCase().trim();
    const year = y?.value || "";
    let shown = 0;
    [...table.tBodies[0].rows].forEach((tr) => {
      const text = tr.textContent.toLowerCase();
      const okTerm = !term || text.includes(term);
      const okYear = !year || (yearCol != null && tr.cells[yearCol].textContent === year);
      const ok = okTerm && okYear;
      tr.hidden = !ok;
      if (ok) shown++;
    });
    if (count) count.textContent = `${shown} of ${table.tBodies[0].rows.length} entries`;
  };
  q?.addEventListener("input", apply);
  y?.addEventListener("change", apply);
  apply();
}

function paras(arr) { return (arr || []).map((p) => `<p>${esc(p)}</p>`).join(""); }

/* ------------------------------- pages ------------------------------ */
const pages = {
  "/": () => `
    <section class="hero">
      <div class="hero-slides" id="slides">
        ${D.slides.map((s, i) => `<figure class="${i === 0 ? "on" : ""}"><img src="${esc(s.src)}" alt="${esc(s.caption)}"></figure>`).join("")}
      </div>
      <div class="hero-inner shell">
        <p class="kicker">${esc(D.hero.kicker)}</p>
        <h1>${esc(D.hero.heading)}</h1>
        <p class="lead">${esc(D.hero.lead)}</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="${esc(D.hero.ctaHref)}">${esc(D.hero.ctaLabel)}</a>
          <a class="btn btn-ghost" href="${esc(D.hero.videoUrl)}" target="_blank" rel="noopener">${esc(D.hero.videoLabel)}</a>
        </div>
        <div class="slide-dots" id="dots">
          ${D.slides.map((s, i) => `<button type="button" data-i="${i}" aria-current="${i === 0}" aria-label="Show ${esc(s.caption)}"></button>`).join("")}
        </div>
      </div>
    </section>

    <section class="counters"><div class="shell">
      ${D.counters.map((c) => `<div><b>${esc(c.value)}</b><span>${esc(c.label)}</span></div>`).join("")}
    </div></section>

    <section class="section"><div class="shell">
      <div class="vm">
        <article><h3>${esc(D.vision.heading)}</h3><p>${esc(D.vision.text)}</p></article>
        <article><h3>${esc(D.mission.heading)}</h3><p>${esc(D.mission.text)}</p></article>
      </div>
    </div></section>

    <section class="section tint"><div class="shell">
      <div class="section-head">
        <h2>Coming up</h2>
        <p>Programmes planned by the cell for the current academic session.</p>
      </div>
      ${tableBlock("upcoming", { filter: false })}
    </div></section>

    <section class="section"><div class="shell">
      <div class="section-head">
        <h2>What sets the cell apart</h2>
        <p>${esc(D.usp.intro)}</p>
      </div>
      <div class="usp">
        ${D.usp.items.map((u) => `<article><h3>${esc(u.title)}</h3><p>${esc(u.text)}</p></article>`).join("")}
      </div>
      <p style="margin-top:1.8rem;color:var(--muted)">${esc(D.usp.outro)}</p>
    </div></section>

    <section class="section tint"><div class="shell">
      <div class="section-head"><h2>Where to go next</h2></div>
      <div class="cards">
        <a class="card" href="#/events"><b>Event reports</b><span>Every programme held since 2018, with downloadable reports.</span></a>
        <a class="card" href="#/scholarships"><b>Scholarships & POSH toolkit</b><span>KLEF and NSP scholarship documents, ICC handbook.</span></a>
        <a class="card" href="#/dept"><b>Find your coordinator</b><span>A WDC contact in all 25 departments and offices.</span></a>
        <a class="card" href="#/contact"><b>Raise a concern</b><span>Phone, email and room numbers for the convenors.</span></a>
      </div>
    </div></section>`,

  "/about": () => `
    ${pageHead("About us", "About")}
    <section class="section"><div class="shell">
      ${paras(D.about.paragraphs)}
      <h2 style="margin-top:2.5rem">${esc(D.about.objectivesHeading)}</h2>
      <ol class="objectives">${D.about.objectives.map((o) => `<li>${esc(o)}</li>`).join("")}</ol>
    </div></section>`,

  "/visionary": () => `
    ${pageHead(D.visionary.heading, "Our visionary")}
    <section class="section"><div class="shell">
      <div class="profile">
        <figure>
          <img src="${esc(D.visionary.image)}" alt="${esc(D.visionary.name)}">
          <figcaption><b>${esc(D.visionary.name)}</b><span>${esc(D.visionary.role)}</span></figcaption>
        </figure>
        <div>
          ${paras(D.visionary.intro)}
          ${D.visionary.sections.map((s) => `
            <h3>${esc(s.title)}</h3>
            ${paras(s.paragraphs)}
            ${s.list ? `<ul>${s.list.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>` : ""}
          `).join("")}
        </div>
      </div>
    </div></section>`,

  "/convenor": () => `
    ${pageHead(D.convenor.heading, "Convenor")}
    <section class="section"><div class="shell">
      <div class="profile">
        <figure>
          <img src="${esc(D.convenor.image)}" alt="${esc(D.convenor.name)}">
          <figcaption><b>${esc(D.convenor.name)}</b><span>${esc(D.convenor.role)}</span></figcaption>
        </figure>
        <div>
          <div class="statline">
            ${D.convenor.stats.map((s) => `<div><b>${esc(s.value)}</b><span>${esc(s.label)}</span></div>`).join("")}
          </div>
          ${paras(D.convenor.paragraphs)}
        </div>
      </div>
    </div></section>`,

  "/core": () => `
    ${pageHead("Core committee", "Core committee")}
    <section class="section"><div class="shell">${tableBlock("core", { filter: false })}</div></section>`,

  "/dept": () => `
    ${pageHead("Department level committee", "Departments")}
    <section class="section"><div class="shell">
      <p style="color:var(--muted)">Every department, office and hostel has a nominated WDC coordinator. Write to the person listed for your department.</p>
      ${tableBlock("dept")}
    </div></section>`,

  "/student": () => `
    ${pageHead("Student committee", "Student committee")}
    <section class="section"><div class="shell">${tableBlock("student")}</div></section>`,

  "/events": () => `
    ${pageHead("Academic events", "Events")}
    <section class="section"><div class="shell">
      <p style="color:var(--muted)">Search by name, or filter by academic year. Reports open as PDFs.</p>
      ${tableBlock("academic", { yearCol: 1 })}
    </div></section>`,

  "/femflare": () => `
    ${pageHead("FemFlare", "FemFlare")}
    <section class="section"><div class="shell">
      <p style="color:var(--muted)">The annual women's festival of KLEF, held every March.</p>
      ${tableBlock("femflare", { filter: false })}
    </div></section>`,

  "/summit": () => `
    ${pageHead("Women's Summit", "Summit")}
    <section class="section"><div class="shell">${tableBlock("summit", { filter: false })}</div></section>`,

  "/womensday": () => `
    ${pageHead("Women's Day", "Women's Day")}
    <section class="section"><div class="shell">${tableBlock("womensday", { filter: false })}</div></section>`,

  "/gallery": () => `
    ${pageHead("Gallery", "Gallery")}
    <section class="section"><div class="shell">
      <div class="gallery">
        ${D.gallery.map((g) => `<figure><img src="${esc(g.src)}" alt="${esc(g.caption)}" loading="lazy"><figcaption>${esc(g.caption)}</figcaption></figure>`).join("")}
      </div>
    </div></section>`,

  "/scholarships": () => `
    ${pageHead("Scholarships and documents", "Scholarships")}
    <section class="section"><div class="shell">
      <ul class="linklist">
        ${D.scholarships.map((s) => `<li>
          <a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.name)}</a>
          <p>${esc(s.note)}</p>
        </li>`).join("")}
      </ul>
    </div></section>`,

  "/contact": () => `
    ${pageHead("Contact", "Contact")}
    <section class="section"><div class="shell">
      <p style="color:var(--muted);max-width:60ch">${esc(D.contactNote)}</p>
      <div class="contact-grid">
        ${D.contacts.map((c) => `<article class="contact-card">
          <h3>${esc(c.name)}</h3>
          <p class="role">${esc(c.role)}</p>
          <dl>
            <dt>Mobile</dt><dd><a href="tel:${esc(c.mobile)}">${esc(c.mobile)}</a></dd>
            <dt>Email</dt><dd><a href="mailto:${esc(c.email)}">${esc(c.email)}</a></dd>
            <dt>Room no</dt><dd>${esc(c.room)}</dd>
          </dl>
        </article>`).join("")}
      </div>
      <div class="map"><iframe src="${esc(D.mapEmbed)}" title="KL University on Google Maps" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
    </div></section>`
};

/* ------------------------------- router ----------------------------- */
function route() {
  const path = (location.hash.replace(/^#/, "") || "/").split("?")[0];
  const render = pages[path] || pages["/"];
  view.innerHTML = render();
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });

  document.querySelectorAll("nav.main a").forEach((a) => {
    a.classList.toggle("active", a.getAttribute("href") === "#" + path);
  });

  if (path === "/") startSlides();
  if (path === "/events") wireTable("academic", 1);
  if (path === "/dept") wireTable("dept");
  if (path === "/student") wireTable("student");

  document.getElementById("mainNav").classList.remove("open");
  document.getElementById("navToggle").setAttribute("aria-expanded", "false");
}

/* ------------------------------ slideshow --------------------------- */
let slideTimer;
function startSlides() {
  clearInterval(slideTimer);
  const figs = [...document.querySelectorAll("#slides figure")];
  const dots = [...document.querySelectorAll("#dots button")];
  if (!figs.length) return;
  let i = 0;
  const go = (n) => {
    i = (n + figs.length) % figs.length;
    figs.forEach((f, k) => f.classList.toggle("on", k === i));
    dots.forEach((d, k) => d.setAttribute("aria-current", String(k === i)));
  };
  dots.forEach((d) => d.addEventListener("click", () => { go(+d.dataset.i); reset(); }));
  const reset = () => {
    clearInterval(slideTimer);
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      slideTimer = setInterval(() => go(i + 1), 6000);
    }
  };
  reset();
}

/* --------------------------------- nav ------------------------------ */
document.getElementById("navToggle").addEventListener("click", (e) => {
  const nav = document.getElementById("mainNav");
  const open = nav.classList.toggle("open");
  e.currentTarget.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".drop > button").forEach((b) => {
  b.addEventListener("click", (e) => {
    e.stopPropagation();
    const parent = b.parentElement;
    document.querySelectorAll(".drop").forEach((d) => { if (d !== parent) d.classList.remove("open"); });
    const open = parent.classList.toggle("open");
    b.setAttribute("aria-expanded", String(open));
  });
});
document.addEventListener("click", () => {
  document.querySelectorAll(".drop").forEach((d) => d.classList.remove("open"));
});

window.addEventListener("hashchange", route);

// Subscribe to Firebase — re-renders the page whenever admin saves
WDCStore.subscribe((freshData) => {
  D = freshData;
  paintChrome();
  route();
});
