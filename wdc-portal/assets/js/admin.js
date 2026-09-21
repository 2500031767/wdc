/* ===================== WDC Portal — admin dashboard ================= */

// Guard — redirect to login if no active session
const SESSION = "wdc_admin_ok";
if (sessionStorage.getItem(SESSION) !== "1") {
  location.replace("admin.html");
}

let data = null;
let dirty = false;

const $ = (id) => document.getElementById(id);
const esc = (s) => String(s == null ? "" : s)
  .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/* ---------------------------- path access --------------------------- */
function getPath(obj, path) {
  return path.split(".").reduce((o, k) => (o == null ? o : o[k]), obj);
}
function setPath(obj, path, value) {
  const keys = path.split(".");
  const last = keys.pop();
  const target = keys.reduce((o, k) => (o[k] = o[k] ?? {}), obj);
  target[last] = value;
}

/* ------------------------------- tabs ------------------------------- */
const TABS = [
  { id: "home",         label: "Home page",             group: "Pages" },
  { id: "about",        label: "About us" },
  { id: "visionary",    label: "Our visionary" },
  { id: "convenor",     label: "Convenor" },
  { id: "contact",      label: "Contact" },
  { id: "gallery",      label: "Gallery" },
  { id: "scholarships", label: "Scholarships" },
  { id: "t-core",       label: "Core committee",        group: "Tables" },
  { id: "t-dept",       label: "Department committee" },
  { id: "t-student",    label: "Student committee" },
  { id: "t-academic",   label: "Academic events" },
  { id: "t-femflare",   label: "FemFlare" },
  { id: "t-summit",     label: "Women's Summit" },
  { id: "t-womensday",  label: "Women's Day" },
  { id: "t-upcoming",   label: "Upcoming events" },
  { id: "backup",       label: "Backup & reset",        group: "Data" }
];

/* --------------------------- field builders ------------------------- */
function text(path, label, type = "text") {
  return `<div class="field"><label for="f-${path}">${esc(label)}</label>
    <input type="${type}" id="f-${path}" data-path="${path}" value="${esc(getPath(data, path))}"></div>`;
}
function area(path, label, cls = "") {
  return `<div class="field"><label for="f-${path}">${esc(label)}</label>
    <textarea class="${cls}" id="f-${path}" data-path="${path}">${esc(getPath(data, path))}</textarea></div>`;
}
function blocks(path, label, help) {
  const val = (getPath(data, path) || []).join("\n\n");
  return `<div class="field"><label for="f-${path}">${esc(label)}</label>
    <p class="hint" style="margin:0 0 .4rem">${esc(help || "One entry per paragraph. Leave a blank line between entries.")}</p>
    <textarea class="tall" id="f-${path}" data-path="${path}" data-split="blocks">${esc(val)}</textarea></div>`;
}
function lines(path, label, help) {
  const val = (getPath(data, path) || []).join("\n");
  return `<div class="field"><label for="f-${path}">${esc(label)}</label>
    <p class="hint" style="margin:0 0 .4rem">${esc(help || "One entry per line.")}</p>
    <textarea class="tall" id="f-${path}" data-path="${path}" data-split="lines">${esc(val)}</textarea></div>`;
}
function repeater(path, label, fields, titleKey, addTemplate) {
  const arr = getPath(data, path) || [];
  const items = arr.map((item, i) => `
    <div class="repeat-item" data-index="${i}">
      <div class="repeat-head">
        <b>${esc(item[titleKey] || label + " " + (i + 1))}</b>
        <button class="btn btn-danger btn-sm" type="button" data-remove="${path}" data-i="${i}">Remove</button>
      </div>
      <div class="row">
        ${fields.map((f) => f.type === "textarea"
          ? `<div class="field" style="grid-column:1/-1"><label>${esc(f.label)}</label>
               <textarea data-path="${path}.${i}.${f.key}">${esc(item[f.key])}</textarea></div>`
          : `<div class="field"><label>${esc(f.label)}</label>
               <input type="text" data-path="${path}.${i}.${f.key}" value="${esc(item[f.key])}"></div>`
        ).join("")}
      </div>
    </div>`).join("");
  return `<fieldset><legend>${esc(label)}</legend>${items}
    <button class="btn btn-line btn-sm" type="button" data-add="${path}"
      data-template='${JSON.stringify(addTemplate).replace(/'/g, "&#39;")}'>Add ${esc(label.toLowerCase())}</button>
  </fieldset>`;
}
function gridEditor(key) {
  const t = data.tables[key];
  const head = `<tr><th></th>${t.columns.map((c) => `<th>${esc(c)}</th>`).join("")}<th></th></tr>`;
  const body = t.rows.map((r, i) => `<tr>
      <td class="rownum">${i + 1}</td>
      ${t.columns.map((_, c) => `<td><input type="text" data-path="tables.${key}.rows.${i}.${c}" value="${esc(r[c] ?? "")}"></td>`).join("")}
      <td><button class="btn btn-danger btn-sm" type="button" data-rowdel="${key}" data-i="${i}">Delete</button></td>
    </tr>`).join("");
  return `<div class="grid-wrap"><table class="edit"><thead>${head}</thead><tbody>${body}</tbody></table></div>
    <div class="actions">
      <button class="btn btn-line" type="button" data-rowadd="${key}">Add row</button>
      <button class="btn btn-line" type="button" data-csv="${key}">Download as CSV</button>
    </div>`;
}
function tablePanel(key, note) {
  const t = data.tables[key];
  return `<h2>${esc(t.label)}</h2>
    <p class="hint">${esc(note || "Edit any cell directly, add or delete rows, then save.")} ${t.linkColumn != null ? "The last column takes a PDF or page URL." : ""}</p>
    ${gridEditor(key)}`;
}

/* ------------------------------- panels ----------------------------- */
const panels = {
  home: () => `
    <h2>Home page</h2>
    <p class="hint">Hero, slideshow, headline numbers, vision, mission and the USP list.</p>
    <fieldset><legend>Hero</legend>
      ${text("hero.kicker", "Small line above the headline")}
      ${area("hero.heading", "Headline")}
      ${area("hero.lead", "Intro paragraph")}
      <div class="row">${text("hero.ctaLabel", "Button label")}${text("hero.ctaHref", "Button link")}</div>
      <div class="row">${text("hero.videoLabel", "Video button label")}${text("hero.videoUrl", "Video URL")}</div>
    </fieldset>
    ${repeater("slides", "Slide", [
      { key: "src", label: "Image URL" }, { key: "caption", label: "Caption" }
    ], "caption", { src: "", caption: "" })}
    ${repeater("counters", "Number", [
      { key: "value", label: "Value" }, { key: "label", label: "Label" }
    ], "label", { value: "", label: "" })}
    <fieldset><legend>Vision & mission</legend>
      ${text("vision.heading", "Vision heading")}${area("vision.text", "Vision text")}
      ${text("mission.heading", "Mission heading")}${area("mission.text", "Mission text")}
    </fieldset>
    <fieldset><legend>USP intro and closing</legend>
      ${area("usp.intro", "Intro line")}${area("usp.outro", "Closing line")}
    </fieldset>
    ${repeater("usp.items", "USP", [
      { key: "title", label: "Title" }, { key: "text", label: "Text", type: "textarea" }
    ], "title", { title: "", text: "" })}`,

  about: () => `
    <h2>About us</h2>
    <p class="hint">The body text and the list of objectives.</p>
    ${text("about.heading", "Page heading")}
    ${blocks("about.paragraphs", "Body paragraphs")}
    ${text("about.objectivesHeading", "Objectives heading")}
    ${lines("about.objectives", "Objectives", "One objective per line. They are numbered automatically.")}`,

  visionary: () => `
    <h2>Our visionary</h2>
    <p class="hint">Profile, introduction and each titled section.</p>
    <fieldset><legend>Profile</legend>
      <div class="row">${text("visionary.name", "Name")}${text("visionary.role", "Role")}</div>
      ${text("visionary.heading", "Page heading")}
      ${text("visionary.image", "Photo URL")}
    </fieldset>
    ${blocks("visionary.intro", "Introduction paragraphs")}
    <div id="vsections">${visionarySections()}</div>
    <div class="actions"><button class="btn btn-line" type="button" id="addVSection">Add section</button></div>`,

  convenor: () => `
    <h2>Convenor</h2>
    <fieldset><legend>Profile</legend>
      <div class="row">${text("convenor.name", "Name")}${text("convenor.role", "Role")}</div>
      ${text("convenor.heading", "Page heading")}
      ${text("convenor.image", "Photo URL")}
    </fieldset>
    ${repeater("convenor.stats", "Statistic", [
      { key: "value", label: "Value" }, { key: "label", label: "Label" }
    ], "label", { value: "", label: "" })}
    ${blocks("convenor.paragraphs", "Biography paragraphs")}`,

  contact: () => `
    <h2>Contact</h2>
    ${area("contactNote", "Note shown above the cards")}
    ${repeater("contacts", "Contact", [
      { key: "name", label: "Name" }, { key: "role", label: "Role" },
      { key: "mobile", label: "Mobile" }, { key: "email", label: "Email" },
      { key: "room", label: "Room no" }
    ], "name", { name: "", role: "", mobile: "", email: "", room: "" })}
    ${area("mapEmbed", "Google Maps embed URL")}`,

  gallery: () => `
    <h2>Gallery</h2>
    <p class="hint">Paste image URLs. Upload the files to your web host first, then link them here.</p>
    ${repeater("gallery", "Photo", [
      { key: "src", label: "Image URL" }, { key: "caption", label: "Caption" }
    ], "caption", { src: "", caption: "" })}`,

  scholarships: () => `
    <h2>Scholarships and documents</h2>
    ${repeater("scholarships", "Document", [
      { key: "name", label: "Name" }, { key: "url", label: "PDF or page URL" },
      { key: "note", label: "Short note", type: "textarea" }
    ], "name", { name: "", url: "", note: "" })}`,

  "t-core":      () => tablePanel("core"),
  "t-dept":      () => tablePanel("dept"),
  "t-student":   () => tablePanel("student"),
  "t-academic":  () => tablePanel("academic", "139 events are listed. Add new rows at the bottom; the site sorts nothing, so keep the order you want."),
  "t-femflare":  () => tablePanel("femflare"),
  "t-summit":    () => tablePanel("summit"),
  "t-womensday": () => tablePanel("womensday"),
  "t-upcoming":  () => tablePanel("upcoming"),

  backup: () => `
    <h2>Backup & reset</h2>
    <p class="hint">Content is saved in Firebase. Export a JSON file as a local backup before big edits.</p>
    <div class="note">All changes are saved to Firebase Realtime Database and are immediately visible to all users.</div>
    <div class="actions">
      <button class="btn btn-primary" type="button" id="exportBtn">Export content as JSON</button>
      <label class="btn btn-line" for="importFile" style="display:inline-block">Import a JSON file</label>
      <input type="file" id="importFile" accept="application/json" hidden>
      <button class="btn btn-danger" type="button" id="resetBtn">Reset everything to the original site content</button>
    </div>
    <h3 style="margin-top:2rem">Current content</h3>
    <textarea class="tall" id="rawJson" spellcheck="false">${esc(JSON.stringify(data, null, 2))}</textarea>
    <div class="actions"><button class="btn btn-line" type="button" id="applyRaw">Apply edited JSON</button></div>`
};

function visionarySections() {
  return (data.visionary.sections || []).map((s, i) => `
    <fieldset data-vsec="${i}">
      <legend>${esc(s.title || "Section " + (i + 1))}</legend>
      <div class="field"><label>Title</label>
        <input type="text" data-path="visionary.sections.${i}.title" value="${esc(s.title)}"></div>
      <div class="field"><label>Paragraphs (blank line between entries)</label>
        <textarea class="tall" data-path="visionary.sections.${i}.paragraphs" data-split="blocks">${esc((s.paragraphs || []).join("\n\n"))}</textarea></div>
      <div class="field"><label>Bullet list (one per line, leave empty for none)</label>
        <textarea data-path="visionary.sections.${i}.list" data-split="lines">${esc((s.list || []).join("\n"))}</textarea></div>
      <button class="btn btn-danger btn-sm" type="button" data-remove="visionary.sections" data-i="${i}">Remove section</button>
    </fieldset>`).join("");
}

/* ------------------------------- init ------------------------------- */
async function initDashboard() {
  setStatus("Loading data…");
  data = await WDCStore.load();
  buildTabs();
  show(TABS[0].id);
  setStatus("");
}

$("signOut").addEventListener("click", () => {
  if (dirty && !confirm("You have unsaved changes. Sign out anyway?")) return;
  sessionStorage.removeItem(SESSION);
  location.href = "admin.html";
});

/* ------------------------------- tabs ------------------------------- */
function buildTabs() {
  $("tabs").innerHTML = TABS.map((t) =>
    (t.group ? `<div class="group">${esc(t.group)}</div>` : "") +
    `<button class="tab" type="button" data-tab="${t.id}">${esc(t.label)}</button>`
  ).join("");
  $("tabs").querySelectorAll("button.tab").forEach((b) =>
    b.addEventListener("click", () => show(b.dataset.tab))
  );
}

function show(id) {
  $("tabs").querySelectorAll("button.tab").forEach((b) =>
    b.setAttribute("aria-current", String(b.dataset.tab === id))
  );
  $("work").innerHTML = panels[id] ? panels[id]() : "<p>Nothing here.</p>";
  bindInputs();
  wireExtras(id);
  window.scrollTo(0, 0);
}

/* ----------------------------- bindings ----------------------------- */
function bindInputs() {
  $("work").querySelectorAll("[data-path]").forEach((el) => {
    el.addEventListener("input", () => {
      const path = el.dataset.path;
      let value = el.value;
      if (el.dataset.split === "blocks") {
        value = value.split(/\n\s*\n/).map((s) => s.trim()).filter(Boolean);
      } else if (el.dataset.split === "lines") {
        value = value.split("\n").map((s) => s.trim()).filter(Boolean);
      }
      setPath(data, path, value);
      markDirty();
    });
  });

  $("work").querySelectorAll("[data-remove]").forEach((b) => {
    b.addEventListener("click", () => {
      const arr = getPath(data, b.dataset.remove);
      arr.splice(+b.dataset.i, 1);
      markDirty();
      show(currentTab());
    });
  });

  $("work").querySelectorAll("[data-add]").forEach((b) => {
    b.addEventListener("click", () => {
      const arr = getPath(data, b.dataset.add);
      arr.push(JSON.parse(b.dataset.template));
      markDirty();
      show(currentTab());
    });
  });

  $("work").querySelectorAll("[data-rowadd]").forEach((b) => {
    b.addEventListener("click", () => {
      const t = data.tables[b.dataset.rowadd];
      t.rows.push(t.columns.map(() => ""));
      markDirty();
      show(currentTab());
    });
  });

  $("work").querySelectorAll("[data-rowdel]").forEach((b) => {
    b.addEventListener("click", () => {
      data.tables[b.dataset.rowdel].rows.splice(+b.dataset.i, 1);
      markDirty();
      show(currentTab());
    });
  });

  $("work").querySelectorAll("[data-csv]").forEach((b) => {
    b.addEventListener("click", () => downloadCSV(b.dataset.csv));
  });
}

function wireExtras(id) {
  if (id === "visionary") {
    $("addVSection")?.addEventListener("click", () => {
      data.visionary.sections.push({ title: "New section", paragraphs: [""] });
      markDirty();
      show("visionary");
    });
  }
  if (id === "backup") {
    $("exportBtn").addEventListener("click", exportJSON);
    $("resetBtn").addEventListener("click", async () => {
      if (!confirm("Reset all content back to the original site content? Your edits will be lost.")) return;
      setStatus("Resetting…");
      await WDCStore.reset();
      data = await WDCStore.load();
      dirty = false;
      setStatus("Content reset to the original.");
      show("backup");
    });
    $("importFile").addEventListener("change", async (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = async () => {
        try {
          const imported = Object.assign(structuredClone(DEFAULT_DATA), JSON.parse(reader.result));
          setStatus("Uploading…");
          await WDCStore.save(imported);
          data = imported;
          dirty = false;
          setStatus("Imported " + file.name + " and saved to Firebase.");
          show("backup");
        } catch (err) {
          setStatus("That file isn't valid JSON. Nothing was imported.");
        }
      };
      reader.readAsText(file);
    });
    $("applyRaw").addEventListener("click", () => {
      try {
        data = JSON.parse($("rawJson").value);
        markDirty();
        setStatus("JSON applied. Save to push it to Firebase.");
      } catch (err) {
        setStatus("That JSON won't parse — fix the syntax and try again.");
      }
    });
  }
}

function currentTab() {
  return $("tabs").querySelector('[aria-current="true"]')?.dataset.tab || TABS[0].id;
}

/* ------------------------------- saving ----------------------------- */
function markDirty() { dirty = true; setStatus("Unsaved changes"); }
function setStatus(msg) { $("status").textContent = msg; }

$("saveBtn").addEventListener("click", async () => {
  $("saveBtn").disabled = true;
  setStatus("Saving to Firebase…");
  try {
    await WDCStore.save(data);
    dirty = false;
    setStatus("Saved at " + new Date().toLocaleTimeString() + " — all users will see the update.");
  } catch (e) {
    setStatus("Save failed — check your internet connection.");
  } finally {
    $("saveBtn").disabled = false;
  }
});

$("previewBtn").addEventListener("click", () => {
  window.open("index.html", "_blank");
});

window.addEventListener("beforeunload", (e) => {
  if (dirty) { e.preventDefault(); e.returnValue = ""; }
});

/* ------------------------------ exports ----------------------------- */
function download(name, text, type) {
  const blob = new Blob([text], { type });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = name;
  a.click();
  URL.revokeObjectURL(a.href);
}

function exportJSON() {
  download("wdc-content-" + new Date().toISOString().slice(0, 10) + ".json",
    JSON.stringify(data, null, 2), "application/json");
  setStatus("Exported a JSON backup.");
}

function downloadCSV(key) {
  const t = data.tables[key];
  const q = (v) => `"${String(v ?? "").replace(/"/g, '""')}"`;
  const csv = [t.columns.map(q).join(","), ...t.rows.map((r) => t.columns.map((_, i) => q(r[i])).join(","))].join("\n");
  download(key + ".csv", csv, "text/csv");
}

// Start the dashboard
initDashboard();
