# Bearbeitungsstatus ClearFlow Website

## Änderungen (07.03.2026)

### ✅ Marquee / Laufband – Schriftfarbe aufgehellt
- **Datei:** `index.html`, `.marquee-item`
- **Vorher:** `color: var(--text-muted)` (`#5c6b80`)
- **Jetzt:** `color: rgba(255, 255, 255, 0.55)`
- **Status:** Live ✅

### ✅ Logo im Header
- Logo-Bild (`Bilder-Website/ClearFlow-Logo.png`) links neben "ClearFlow"-Text
- CSS: `.nav-logo-img` mit `height: 32px`
- **Status:** Live ✅

### ✅ Stat-Karten Hover-Glow
- `.stat-item:hover` mit `box-shadow` Glow-Effekt und hellerem Hintergrund
- **Status:** Live ✅

### ✅ Problem-Statement unter Crisis-Kacheln
- Satz: „The microplastic crisis is a $50B market problem. We built the solution!"
- Gradient-Text (accent-gradient), font-weight 900, gleicher Stil wie Stat-Nummern
- Hover-Effekt: Text leuchtet heller auf (brightness + text-shadow)
- Abstand 4rem (gleich wie Kacheln zum Text)
- **Status:** Live ✅

### ✅ Domain-Umstellung auf Vercel
- **Domain:** `itsclearflow.com` + `www.itsclearflow.com`
- **Cloudflare DNS:** A-Record → `76.76.21.21`, CNAME www → `cname.vercel-dns.com`
- **Proxy-Status:** Beide auf "Nur DNS" (graue Wolke)
- **HTTP:** Funktioniert ✅
- **HTTPS/SSL:** Vercel erstellt Zertifikat automatisch (kann bis zu 1h dauern) ⏳

## Änderungen (15.03.2026)

### ✅ Digitalwerk24 Backlink im Footer
- **Datei:** `index.html`, `.footer-credit-badge`
- Badge-Style Link unter dem Copyright im Footer
- Text: „Website created by Digitalwerk24 — Web Design & Google Ads for SMBs"
- Link: `https://www.digitalwerk24.com` (target="_blank", rel="noopener")
- Pill-Design mit Cyan-Border, Hover-Effekt (Farbe + Border heller)
- **Zweck:** SEO-Backlink für digitalwerk24.com
- **Status:** Live ✅

## Änderungen (29.03.2026)

### ✅ Revis-1 LLC SEO-Link
- **Datei:** `index.html`, Contact-Sektion (Company)
- "Revis-1 LLC®" verlinkt auf `https://www.revis-1.com` (target="_blank", rel="noopener")
- Hover-Effekt: Schrift leuchtet blau auf (#00b4d8) mit sanftem Übergang (0.3s)
- **Zweck:** SEO-Backlink für revis-1.com
- **Status:** Live ✅

## Änderungen (11.04.2026)

### ✅ Founder-Bild aktualisiert
- **Datei:** `founder.jpeg`
- Neues professionelles Headshot-Foto (Aragon) ersetzt altes Büro-Foto
- **Status:** Live ✅

### ✅ Manuel Horn & Founder-Rolle verlinkt
- **Datei:** `index.html`, About-Sektion
- "Manuel Horn" (h3) und "Founder & CEO" verlinkt auf `https://www.revis-1.com`
- Hover-Effekt: Opacity-Übergang (0.7) für subtilen Leucht-Effekt
- **Zweck:** SEO-Backlink für revis-1.com
- **Status:** Live ✅

### ✅ Logo-Link Fix
- **Datei:** `index.html`
- Logo-Link von `href="#"` auf `href="/"` geändert
- Scroll-Script: Bei `href="#"` wird jetzt sauber nach oben gescrollt ohne `#` in der URL
- **Status:** Live ✅

### ✅ Google Search Console Verifizierung
- **Datei:** `googledb90f2b2aeb96592.html`
- HTML-Verifizierungsdatei für Google Search Console hinzugefügt
- **Status:** Verifiziert ✅

### ✅ Sitemap & robots.txt
- **Dateien:** `sitemap.xml`, `robots.txt`
- Sitemap mit 3 Seiten: Startseite, Blog-Übersicht, Blog-Artikel
- robots.txt mit Verweis auf Sitemap
- **Status:** Live ✅

### ⏳ Google-Indexierung beantragt
- URL `https://www.itsclearflow.com/index.html` zur Indexierung eingereicht
- Dauer: ca. 2-7 Tage

## Änderungen (30.04.2026) – Komplett-Redesign

### ✅ Aufteilung von Single-Page auf 4 Seiten
- **Vorher:** Eine `index.html` mit allen Sektionen (Hero, Problem, Solution, How, Stats, About, Contact)
- **Jetzt:** Vier eigenständige Seiten, navigierbar über die Top-Navigation
  - **Home** (`index.html`) — Hero, Tech-Highlights, Crisis-Daten, How-it-works-Teaser, Story-Cards
  - **Product** (`product.html`) — 3 Tech-Layer, How-it-works, Spezifikationen, Patent-Block
  - **About** (`about.html`) — Crisis-Stats, Mission, Founder Manuel Horn, Patent / Revis-1
  - **Contact** (`contact.html`) — Kontaktformular, Kontakt-Infos, Blog-Teaser
- Texte und Logos inhaltlich unverändert, nur neu verteilt
- Backup der alten Single-Page-Version unter `index-old-backup.html`
- **Status:** Live ✅

### ✅ Neues helles Design im "Observatory"-Stil
- **Referenz:** Layout & Hintergrund-Stil von gaqo-aura-build (1:1 Hintergrund-Design übernommen)
- Globales Stylesheet `styles.css` (statt Inline-CSS pro Seite)
- Globales Skript `main.js` (Reveal-Animationen, Mobile-Menu, Scroll-Verhalten, Smooth-Scroll)
- **Farb-Palette:** Helles Cream/Grau (`#f3f4f6`), weiße Karten + dunkle Kontrast-Karten (`#0e1218`), ClearFlow-Cyan-Akzent (`#00b8e6`)
- **Komponenten:** Eyebrows mit Akzent-Punkt, Pill-Buttons, Stat-Bar, CTA-Bands, Footer dunkel
- **Status:** Live ✅

### ✅ Hero mit echter Erde aus Referenz-Screenshot
- **Datei:** `Bilder-Website/hero-earth-clean.png` (725×610, aus dem Referenz-PNG `hero-earth.png` extrahiert via Python/PIL)
- Dunkler Space-Hintergrund (`#060912`) mit subtilen Sternen (CSS), Erde rechts unten platziert
- Stat-Bar überlappt halb auf Hero / halb auf den hellen Bereich darunter
- **Status:** Live ✅

### ✅ Sitemap erweitert
- **Datei:** `sitemap.xml`
- Neu: `product.html`, `about.html`, `contact.html` (jeweils Priority 0.9)
- **Status:** Live ✅

### ❌ HD-Earth-Versuch (verworfen)
- Versuch: Earth-Crop mit 2× Lanczos-Upscale + Unsharp-Mask geschärft (`hero-earth-hd.png`)
- Problem: Künstliches Sharpening erzeugte Kanten-Artefakte, war nicht wirklich schärfer
- Resultat: Per `git revert` rückgängig gemacht (Commit `cce3b14`)

## Änderungen (01.05.2026) — Hero-Visual + Blog-Redesign + Mobile-Feinschliff

### ✅ Hero-Visual: von Erde zu ClearFlow-Produktfoto, dann zu Cinematic Video
- **Schritt 1 (Tag-Anfang):** Hero-Erde durch ClearFlow-Produktfoto ersetzt (`Bilder-Website/clearflow-hero.png`, Wasser-Splash mit Flasche). Hero wechselte von dunklem Space-Look zu hellem Cyan/Wasser-Look — passender zum Brand.
- **Schritt 2 (final):** Statisches Foto durch Cinematic Background-Video ersetzt
  - **Datei:** `Bilder-Website/clearflow-hero.mp4` (864×496, 1.0 MB)
  - autoplay, muted, loop, playsinline (iOS-kompatibel), preload auto
  - Desktop: Video full-bleed, Flasche zentral, horizontaler Gradient (links → rechts) für Text-Lesbarkeit
  - Mobile: Video full-bleed mit `top: 15%; height: 85%` damit der obere Teil des Filters nicht vom Headline-Text verdeckt wird
- **Status:** Live ✅

### ✅ Headline-Highlight: "America's" in US-Flaggen-Farben
- **Datei:** `index.html`, Hero-H1
- 3-3-3-Aufteilung: `Ame` Old Glory Red (`#b22234`), `ric` Weiß mit dunklem Text-Stroke (sonst auf hellem Hintergrund unsichtbar), `a's` Old Glory Blue (`#3c3b6e`)
- Apostroph zählt zur dritten Gruppe
- **Status:** Live ✅

### ✅ Typografie kräftiger
- **Hero-Eyebrow** "Introducing ClearFlow": font-weight 600 → 700, Größe 0.7 → 0.82rem, Letter-spacing 2.5 → 3px, Farbe muted → text
- **Stat-Bar-Labels** (Microplastic Reduction / Filtration Precision / Annual Savings / Bottle Compatibility): font-weight 600 → 700, Größe 0.65 → 0.75rem, Farbe text-dim → text
- **Status:** Live ✅

### ✅ Blog-Bereich auf neues helles Design umgestellt
- **Dateien:** `blog.html` und `blog/microplastics-prostate-cancer-study.html` komplett neu geschrieben
- Inline-CSS aus altem Dark-Theme entfernt — nutzen jetzt geteiltes `styles.css` + `main.js`
- Navigation an die 4-Seiten-Struktur angepasst (Home / Product / About / Blog / Contact)
- Neue Blog-Komponenten in `styles.css`: Filter-Pills, Featured-Article-Karte, Newsletter-Block (dunkler Kontrast wie CTA-Bands), Artikel-Header, Breadcrumb, Tags, Daten-Tabelle, Zitat, CTA-Block, Quellen-Box, Disclaimer, Back-to-Blog-Pill
- Inhalt unverändert (Texte 1:1 übernommen)
- **Status:** Live ✅

### ✅ Mobile-Hero — finale Layout-Iteration
Lange Iteration durch mehrere Versuche, bis das Mobile-Hero sauber aussah:
- **Reihenfolge:** Eyebrow → Headline → Subtitle → Video (Flasche sichtbar) → Buttons → Stats
- `.hero-inner` als Flex-Spalte auf Mobile
- `.hero-ctas` mit `margin-top: auto` → Buttons rutschen automatisch ans untere Hero-Ende
- `.hero-ctas` mit `justify-content: center` → Explore + Our story mittig (nicht linksbündig)
- `.hero-video` mit `top: 15%; height: 85%` → Video startet etwas tiefer, Filter-Deckel ist nicht mehr von der Headline verdeckt
- Mobile-spezifischer 3-Zonen-Gradient: oben deckend (Text-Bereich), Mitte transparent (Video sichtbar), unten wieder deckend (sauberer Button-Hintergrund)
- **Status:** Live ✅

### ✅ Hero-Text bündig zum Rest der Seite
- **Bug:** `.hero-inner` hatte `padding: ... 0 ...` (Shorthand mit horizontalem 0), wodurch das Standard-Container-Padding von 20px auf Mobile überschrieben wurde — Eyebrow / Headline / Subtitle starteten am Viewport-Rand statt bündig zu den Karten
- **Fix:** Padding-Shorthand durch `padding-top` / `padding-bottom` ersetzt — horizontales Padding kommt jetzt sauber vom `.container`
- **Status:** Live ✅

### ✅ Zweite Google Search Console Verifikation
- **Datei:** `googlecf81cbf6a723b28c.html` ins Website-Root gelegt
- Inhalt: `google-site-verification: googlecf81cbf6a723b28c.html`
- Ergänzt die bestehende `googledb90f2b2aeb96592.html` — Property ist damit unter zwei Verifikationen gepflegt
- **Status:** Live ✅

## Änderungen (01.05.2026 — Nachmittag) — Clean URLs, Slogans, Brand-Banner

### ✅ Clean URLs ohne .html-Endung
- **Neu:** `vercel.json` mit `cleanUrls: true` und `trailingSlash: false`
- Alle internen `<a href>`-Links auf saubere Pfade umgestellt (z. B. `product` statt `product.html`) auf index, product, about, contact, blog und Artikel-Seite
- `sitemap.xml` ebenfalls aktualisiert + `lastmod` auf 2026-05-01
- Vercel redirected alte `.html`-URLs automatisch — bestehende Backlinks/Indexierung bleiben erhalten
- **Status:** Live ✅

### ✅ Mobile: Card-Grid-Override + Button-Zentrierung
- **Bug:** Inline-Style `grid-template-columns: 1fr 1.1fr` im "Simplicity"-Block überschrieb die Mobile-Media-Query — Karten blieben in 2 squished Spalten, "See how it works"-Button lief über den Karten-Rand hinaus
- **Fix 1:** `!important` auf `.card-grid.cols-2` im Mobile-Breakpoint → 1 Spalte, volle Karten-Breite
- **Fix 2:** Klasse `.card-feature-dark` auf den dunklen "Snap it on"-Karten ergänzt, CSS zentriert den Inhalt im Mobile-Breakpoint via `text-align: center`
- **Status:** Live ✅

### ✅ Werbe-Slogan in den Crisis-Block: "Protect what matters most."
- **Vorher:** "The microplastic crisis is a $50B market problem. We built the solution." — zu Business-fokussiert
- **Jetzt:** US-amerikanischer Werbe-Slogan
  - Hauptzeile **"Protect what matters most."** mit jedem Wort in einer US-Nationalfarbe:
    - "Protect" — Old Glory Red `#b22234`
    - "what" — Weiß mit dunklem Outline + Schatten (auf hellem BG sichtbar)
    - "matters" — Old Glory Blue `#3c3b6e`
    - "most." — Rot (Zyklus wiederholt)
  - Subline italic *"You. Your family. Every sip."*
  - Sign-off "— CLEARFLOW" in Cyan-Caps mit Letter-Spacing
- Eingesetzt auf `index.html` und `about.html`
- **Verworfen:** Versuch mit horizontalen US-Flag-Streifen DURCH die Buchstaben (war visuell irritierend)
- **Status:** Live ✅

### ✅ Brand-Slogan-Banner zwischen CTA und Footer
- **Datei:** alle 4 Seiten (`index`, `product`, `about`, `contact`)
- Position: zwischen CTA-Band und Footer
- **Hauptzeile:** "Cleaner water. Stronger families." (fett, dunkel)
- **Subline:** "MADE IN AMERICA." mit "America" in 2-3-2 Buchstaben-Splits in US-Nationalfarben (`Am` rot / `eri` weiß-outlined / `ca` blau)
- Heller Cream-Hintergrund (kein Trennstrich), symmetrisches Padding für vertikale Zentrierung
- **Bug-Fix:** `.cta-band` hatte `margin: clamp(3-5rem) 0` (Top + Bottom) — die Bottom-Margin schuf zusätzlichen Raum oben, sodass der Slogan nicht mittig wirkte. Auf `margin: clamp(3-5rem) 0 0` geändert (nur Top-Margin), Slogan jetzt visuell zentriert
- **Status:** Live ✅

## Änderungen (01.05.2026 — Abend) — SEO Pillar-Page-Strategie

### ✅ US-Flag-Patch im Footer
- **Datei:** `Bilder-Website/us-flag-patch.png` (220×116, dunkles Subdued-Patch-Design, Border auto-detected via PIL und entfernt)
- Position: in `.footer-brand` direkt unter "Engineered with German precision."
- CSS: 150px breit, `filter: brightness(1.7) contrast(1.15)` für Sichtbarkeit auf dunklem Footer
- Eingesetzt auf allen 6 Seiten + Blog-Artikel
- **Status:** Live ✅

### ✅ SEO Pillar 1: Microplastics in Drinking Water (Health/Educational)
- **Datei:** `microplastics-in-drinking-water.html` (1.939 Wörter)
- **Target-Keyword:** `microplastics in drinking water`
- **Sections:** Was sind Microplastics / Wie sie ins Wasser kommen / Bottled vs Tap / Health Risks / Regulations / How to Reduce / Filtration Solutions / 0.2-Micron-Standard / FAQ / Sources
- Schema.org Article + FAQPage Markup (rich-snippet-fähig)
- 7 wissenschaftliche Quellen verlinkt (NYU, Columbia, NEJM, WHO etc.)
- **Status:** Live ✅

### ✅ Pillar-1-Cluster: 4 Long-Tail-Artikel
1. **`0-2-micron-filtration-explained.html`** (1.156 W.) — Target: "0.2 micron filter"
2. **`microplastics-bottled-water.html`** (1.184 W.) — Target: "microplastics in bottled water"
3. **`microplastics-tap-water.html`** (1.076 W.) — Target: "microplastics in tap water"
4. **`are-microplastics-dangerous.html`** (1.407 W.) — Target: "are microplastics dangerous"

Plus existierender NYU-Artikel als zusätzlicher Cluster: **`blog/microplastics-prostate-cancer-study.html`**

### ✅ SEO Pillar 2: Portable Water Filter Guide (Commercial Intent)
- **Datei:** `portable-water-filter-guide.html` (2.739 Wörter)
- **Target-Keyword:** `portable water filter`
- **Sections:** 6 Filter-Typen / Filtration-Tech / Contaminants / Use-Case-Matrix / Spec-Checklist / NSF-Certifications / Cost-per-Liter / Common Mistakes / FAQ
- Schema.org Article + FAQPage Markup
- 3 Daten-Tabellen (Tech-Vergleich, Use-Case-Matching, Cost-per-Liter)
- **Status:** Live ✅

### ✅ Pillar-2-Cluster: 4 weitere Artikel
1. **`best-portable-water-filter-2026.html`** (1.344 W.) — Target: "best portable water filter"
2. **`travel-water-filter.html`** (1.303 W.) — Target: "travel water filter"
3. **`activated-carbon-vs-ultrafiltration.html`** (1.308 W.) — Target: "activated carbon vs ultrafiltration"
4. **`water-filter-for-gym-office.html`** (1.270 W.) — Target: "water filter for gym/office"

### ✅ Topic-Cluster-Verlinkung
- Jeder Cluster verlinkt zu seiner Pillar (Intro-Highlight-Box + Related-Reading-Cards + Back-to-Pillar-Pill)
- Pillars verlinken auf alle ihre Cluster (Related Reading mit 6 Cards)
- Pillar 1 ↔ Pillar 2 cross-verlinkt
- `0-2-micron-filtration-explained` dient beiden Pillars als gemeinsamer Tech-Cluster
- Alle Cluster verlinken `/product` mit konkretem CTA-Block

### ✅ SEO-Tech-Foundation
- **Sitemap:** 13 URLs gesamt (vorher 6) — Pillars Priority 0.95, Cluster 0.85, Brand-Pages 0.9-1.0
- **Schema.org:** Article Markup auf allen neuen Seiten, FAQPage zusätzlich auf beiden Pillars
- **Meta:** Title-Tags mit Target-Keywords, Meta-Description optimiert, Canonical-Tags, Open Graph, Twitter Card auf allen
- **Hierarchie:** Saubere H1 → H2 → H3 Struktur, semantische HTML

**Gesamt-Content-Footprint:** ~14.000 Wörter qualitativ hochwertiger Content über 11 SEO-optimierte Seiten

## Änderungen (02.05.2026) — SEO-Phase 2 Operativ-Pläne

### ✅ GSC-Indexierungsplan dokumentiert
- **Datei:** `SEO_INDEXIERUNG_GSC.md`
- Schritt-für-Schritt-Anleitung: Sitemap-Submit, URL-Inspection für alle 11 neuen Pillars/Cluster
- Tag-1- und Tag-2-Liste (GSC-Kontingent: ~10 Anfragen/Tag)
- Wöchentliches Tracking-Schema, Bing Webmaster Tools als Bonus
- **Status:** Plan fertig, Ausführung in GSC steht aus

### ✅ Backlink-Outreach-Plan dokumentiert
- **Datei:** `SEO_BACKLINK_OUTREACH.md`
- 4 Bucket-Strategie (Health/Wellness, Outdoor/Travel, Family, Founder/Made-in-America)
- 60 Ziel-Outlets vorgeschlagen, 4 E-Nachrichten-Templates auf Englisch (Pitch + Follow-Up)
- HARO/Connectively-Workflow + Reddit-Etikette-Guide
- 12-Wochen-Sprint-Plan mit KPIs (Backlinks, DR-Wachstum, Pillar-Rankings)
- **Status:** Plan fertig, Ausführung steht aus

### ✅ Bucket-A-Outlet-Recherche (Health/Wellness)
- **Datei:** `SEO_OUTREACH_BUCKET_A.md`
- 15 Outlets mit Steckbriefen (DR, Pitch-Pfad, Editor-Recherche-Strategie, Topic-Hooks)
- Top-4-Priorität: Mindbodygreen, Well+Good, Consumer Reports, EWG
- Direkter Today-Workflow (5 Pitches in 60–75 Min)
- Anti-Pattern-Liste
- **Status:** Liste fertig + Top-4-Editor-E-Mails via Hunter.io verifiziert (siehe SEO_TRACKING.md)

### ✅ Editor-E-Mails recherchiert (Hunter.io, browser-basiert via Claude)
- **Datei:** `SEO_TRACKING.md`
- **Mindbodygreen:** Sarah Regan (`sarah.regan@mindbodygreen.com`) — Editor — ✅ Valid
- **Well+Good:** Chloe Metzger (`chloe.metzger@wellandgood.com`) — Deputy Editor — ✅ Valid
- **EWG:** Alex Formuzis (`alex@ewg.org`) — Director of Communications — ✅ Valid
- **Consumer Reports:** keine Treffer in Hunter (Non-Profit) → Workaround via Tipline-Form + LinkedIn-DM dokumentiert
- E-Mail-Pattern für alle 3 Outlets erfasst → Backup-Kontakte ohne weitere Credit-Verschwendung ableitbar
- Hunter-Credits: 4 von 50 verbraucht, 46 verbleiben für Bucket B
- **Status:** 3 Pitch-fertige Kontakte + 1 Tipline-Workaround

## Offene Punkte
- 🔍 **GSC:** Schritte aus `SEO_INDEXIERUNG_GSC.md` ausführen (Sitemap einreichen + 11 URLs zur Indexierung beantragen)
- 🔗 **Outreach:** Sprint 1 aus `SEO_BACKLINK_OUTREACH.md` starten (Outlet-Recherche + hunter.io)
- 📊 **Tracking:** `SEO_TRACKING.md` anlegen sobald erste Impressionen in GSC sichtbar
- 📧 Kontaktformular: E-Mail-Weiterleitung an `info@revis-1.com` läuft über Formsubmit.co — funktioniert ✅
- 🔧 Optionale Pillar #3 (z. B. "Health & Family Hydration" oder "Eco-Conscious Living")

## Deployment-Workflow
- **Immer automatisch committen + pushen** nach jeder Änderung
- GitHub-Repo: `Digitalwerk24/clearflow-website` (Branch: `main`)
- Vercel Auto-Deploy bei jedem Push
