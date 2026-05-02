# GSC Indexierungsplan – ClearFlow

**Stand:** 02.05.2026
**Domain:** https://itsclearflow.com
**Property in GSC:** itsclearflow.com (verifiziert über `googledb90f2b2aeb96592.html` + `googlecf81cbf6a723b28c.html`)

---

## Schritt 1 – Sitemap (neu) einreichen

In Google Search Console → linke Navigation → **„Sitemaps"**:

1. Falls eine alte Sitemap-Version gelistet ist (3 oder 6 URLs, Stand vor 30.04.2026): über die drei-Punkte-Menü **„Sitemap entfernen"**.
2. Im Feld „Neue Sitemap hinzufügen" eintragen: `sitemap.xml`
3. Auf **„Senden"** klicken.
4. Status sollte innerhalb weniger Minuten auf **„Erfolgreich"** mit **16 erkannten URLs** wechseln.

> Verifizierung: Die aktuelle Sitemap liegt unter `https://itsclearflow.com/sitemap.xml` und enthält 16 Einträge (Stand 01.05.2026).

---

## Schritt 2 – URL Inspection + Indexierung beantragen

Für jede der folgenden 11 neuen URLs in GSC:
1. Oben in der Suchleiste die volle URL einfügen.
2. „URL ist nicht auf Google" oder „URL ist auf Google" wird angezeigt.
3. Auf **„Indexierung beantragen"** klicken.
4. Google prüft Live-Erreichbarkeit → bei Erfolg „Indexierungsanfrage gesendet".

**Pro URL ca. 30–60 Sekunden. Kontingent: 10–12 Anfragen pro Tag pro Property.**
→ Empfehlung: Tag 1 die Pillars + 4 Cluster (6 URLs), Tag 2 die restlichen 5 Cluster.

### Tag 1 (Priorität – Pillars + halbe Cluster)

| # | URL | Typ | Target-Keyword |
|---|-----|-----|----------------|
| 1 | https://itsclearflow.com/microplastics-in-drinking-water | Pillar 1 | microplastics in drinking water |
| 2 | https://itsclearflow.com/portable-water-filter-guide | Pillar 2 | portable water filter |
| 3 | https://itsclearflow.com/0-2-micron-filtration-explained | Cluster | 0.2 micron filter |
| 4 | https://itsclearflow.com/are-microplastics-dangerous | Cluster P1 | are microplastics dangerous |
| 5 | https://itsclearflow.com/best-portable-water-filter-2026 | Cluster P2 | best portable water filter |
| 6 | https://itsclearflow.com/microplastics-bottled-water | Cluster P1 | microplastics in bottled water |

### Tag 2 (restliche Cluster)

| # | URL | Typ | Target-Keyword |
|---|-----|-----|----------------|
| 7 | https://itsclearflow.com/microplastics-tap-water | Cluster P1 | microplastics in tap water |
| 8 | https://itsclearflow.com/travel-water-filter | Cluster P2 | travel water filter |
| 9 | https://itsclearflow.com/activated-carbon-vs-ultrafiltration | Cluster P2 | activated carbon vs ultrafiltration |
| 10 | https://itsclearflow.com/water-filter-for-gym-office | Cluster P2 | water filter for gym/office |
| 11 | https://itsclearflow.com/blog/microplastics-prostate-cancer-study | Cluster Blog | microplastics prostate cancer |

### Bestehende Brand-Pages (nur falls noch nicht indexiert)

Vor dem Beantragen kurz mit URL-Inspection prüfen — wenn bereits indexiert, überspringen:

- https://itsclearflow.com/
- https://itsclearflow.com/product
- https://itsclearflow.com/about
- https://itsclearflow.com/contact
- https://itsclearflow.com/blog

---

## Schritt 3 – Indexierungs-Tracking (1× pro Woche)

Jeden **Montag** in GSC:

1. **Seiten-Bericht** (linke Nav → „Seiten") → Anzahl indexierter URLs notieren.
2. **Leistung-Bericht** (Impressionen/Klicks/Position) → Filter „Datum: letzte 7 Tage" + „Seite enthält /microplastics" bzw. „/portable-water" oder „/0-2-micron".
3. Eintragen in `SEO_TRACKING.md` (siehe unten).

**Erwartete Timeline:**
- Indexierung der 11 Seiten: **3–14 Tage** (oft schon nach 48 h)
- Erste Long-Tail-Rankings (Cluster): **2–4 Wochen**
- Pillar-Rankings (umkämpfter): **1–3 Monate**
- Stabile Top-10-Positionen: **3–6 Monate** (abhängig von Backlinks → siehe `SEO_BACKLINK_OUTREACH.md`)

---

## Schritt 4 – Tracking-Tabelle (SEO_TRACKING.md anlegen)

Einfache Wochen-Tabelle, die parallel zur GSC mitgeführt wird:

```
| Woche       | URLs indexiert | Impressionen | Klicks | Top-Keywords (Position) |
|-------------|----------------|--------------|--------|--------------------------|
| 02.05.2026  | 5 / 16         | 12           | 0      | "microplastics filter" P78 |
| 09.05.2026  | …              | …            | …      | …                        |
```

---

## Schritt 5 – Quick-Wins direkt nach Indexierung

Sobald GSC für eine Pillar **erste Impressionen** zeigt (typisch nach 5–10 Tagen):

1. **Coverage-Check** → keine `Crawled - currently not indexed`-Fehler? Falls doch: Content-Qualität prüfen oder erneut Indexierung beantragen.
2. **Mobile Usability** unter „Erfahrung" → alles grün?
3. **Core Web Vitals** → CLS / LCP / INP grün? Wenn nicht: Hero-Video-Größe prüfen.
4. **Internal Links erweitern** sobald sich ein Cluster gut entwickelt (z. B. weitere Mentions im Footer oder Cross-Links innerhalb anderer Cluster).

---

## Schritt 6 – Bing Webmaster Tools (Bonus, 5 Min)

Bing-Anteil DACH ~5 %, USA ~6 % — lohnt sich:
1. https://www.bing.com/webmasters → mit Google-Account einloggen
2. **„Import from Google Search Console"** wählen → spart die Verifizierung
3. Sitemap submitten: `https://itsclearflow.com/sitemap.xml`

---

## Checkliste

- [ ] Sitemap in GSC eingereicht (16 URLs erkannt)
- [ ] Tag 1: 6 URLs zur Indexierung beantragt
- [ ] Tag 2: 5 URLs zur Indexierung beantragt
- [ ] `SEO_TRACKING.md` angelegt + Woche 1 ausgefüllt
- [ ] Bing Webmaster Tools eingerichtet
- [ ] Calendar-Reminder „GSC-Check Montag 09:00" gesetzt
