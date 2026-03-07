# Bearbeitungsstatus ClearFlow Website

## Aktuelle Änderung (07.03.2026)

### Marquee / Laufband – Schriftfarbe aufhellen
- **Datei:** `index.html`, Zeile ~537 (`.marquee-item`)
- **Ursprünglicher Wert:** `color: var(--text-muted);` → entspricht `#5c6b80`
- **Aktueller Wert:** `color: rgba(255, 255, 255, 0.55);`
- **Status:** Änderung in der Datei gespeichert, aber im Browser des Users wird die Änderung nicht sichtbar

### Ursache für nicht sichtbare Änderungen
- Die Website läuft auf **Vercel** (`clearflow-website.vercel.app`)
- Lokale Änderungen werden erst nach Commit + Push sichtbar (Vercel Auto-Deploy)

### Logo im Header
- **Datei:** `index.html`, Zeile ~1149
- Logo-Bild (`Bilder-Website/ClearFlow-Logo.png`) wurde links neben "ClearFlow"-Text im Header eingefügt
- CSS: `.nav-logo-img` mit `height: 32px`
- **Status:** Lokal geändert, noch nicht deployed

### Nächster Schritt
- Änderungen committen und pushen, damit Vercel automatisch neu baut
