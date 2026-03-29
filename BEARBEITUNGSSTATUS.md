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

## Offene Punkte
- ⏳ SSL-Zertifikat für `itsclearflow.com` (Vercel automatisch, abwarten)
- 📧 Kontaktformular: E-Mail-Weiterleitung an `info@revis-q.com` einrichten (noch nicht umgesetzt)

## Deployment-Workflow
- **Immer automatisch committen + pushen** nach jeder Änderung
- GitHub-Repo: `Digitalwerk24/clearflow-website` (Branch: `main`)
- Vercel Auto-Deploy bei jedem Push
