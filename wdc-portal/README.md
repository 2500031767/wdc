# Women Development Cell — KLEF portal

A rebuilt front end for `kluniversity.in/wdc`. Every piece of content from the
live site (about, visionary, convenor, core / department / student committees,
all 139 academic events, FemFlare, Women's Summit, Women's Day, scholarships,
contacts) is carried over — the layout, typography and navigation are new, and
an admin page lets you edit all of it without touching code.

## Files

```
wdc-portal/
├── index.html          public site (hash-routed, one shell for all pages)
├── admin.html          content admin — password gated
├── assets/
│   ├── css/style.css   site styles
│   ├── css/admin.css   admin styles
│   └── js/data.js      ALL content + the localStorage store
│   └── js/app.js       site renderer + router
│   └── js/admin.js     admin panel
└── README.md
```

## Running it

It is plain static HTML — no build step, no dependencies.

```bash
cd wdc-portal
python3 -m http.server 8000
```

Then open `http://localhost:8000/` for the site and
`http://localhost:8000/admin.html` for the admin.

Opening the files directly with `file://` also works.

## Admin

Default password: `wdc@2026` — change it under **Site & footer → Access**.

What you can edit: site title, banner, footer text and credit; the hero,
slideshow, headline numbers, vision, mission and USP list; the About page and
its objectives; the visionary and convenor profiles and every section of their
write-ups; contacts and the map; the gallery; scholarship documents; and all
eight data tables, cell by cell, with add / delete row and CSV download.

**Backup & reset** exports everything as JSON, imports a JSON file, edits raw
JSON directly, or restores the original content.

### How saving works

`assets/js/data.js` holds the default content. The admin writes an edited copy
to `localStorage` under `wdc_data_v1`; the site reads that copy when it exists.
That means edits live in the browser that made them.

To publish edits for everyone: open **Backup & reset → Export content as JSON**,
then paste the exported object into `data.js` as the value of `DEFAULT_DATA`
(or have a small backend serve it). Clearing the browser's site data wipes
unsaved-to-file edits, so export before big changes.

The password gate is client-side. It keeps casual visitors out of the editor,
which is the right level for a static campus page — if you need real access
control, put `admin.html` behind a server login (`.htpasswd`, a college SSO
proxy, or a small Node/PHP backend that owns the JSON file).

## Deploying

Upload the whole folder to any static host — the existing `/wdc/` directory on
the university server, GitHub Pages, Netlify, Vercel or Cloudflare Pages. No
server runtime is needed.

Images and PDFs currently point at `kluniversity.in`. If the site moves off
that domain, download the assets into `assets/img/` and `assets/pdf/` and
update the URLs in the admin.

---

Developed and designed by **CHINTA BALA MURALI SRIRAM**
