# Brand Design — Bethke & Partner

> Letzte Aktualisierung: April 2026

---

## 1. Marke

**Name:** Bethke & Partner
**Kurzform:** B&P (nur intern)
**Rechtsform:** Einzelunternehmen
**Gründer:** Alexis Bethke-Pittadakis
**Sitz:** Nürnberg

**Positionierung in einem Satz:**
Bethke & Partner ist eine B2B-Vertriebsagentur, die Neukunden für SaaS-Unternehmen und IT-Dienstleister gewinnt — durch erfahrene Vertriebler oder einen autonomen Outbound Agent.

---

## 2. Farbpalette

| Name | Hex | Verwendung |
|------|-----|------------|
| Navy | `#0D1B2A` | Primärfarbe, Buttons, Dark Sections, Texte |
| Navy 2 | `#1A3050` | Hover-States dunkel |
| Blue | `#1C4380` | Akzentfarbe, Links, Highlights |
| Blue Mid | `#2B5BA8` | Tags, Labels, aktive Elemente |
| Slate | `#6B85A0` | Sekundärtext, dezente Elemente |
| Slate 2 | `#9DB0C4` | Placeholder, Muted Text |
| Slate 3 | `#C8D5DF` | Borders, Trennlinien |
| Background | `#F2F5F8` | Seitenhintergrund |
| Background 2 | `#E8EDF2` | Hover-States hell |
| White | `#FFFFFF` | Karten, Alt-Sections |
| Text | `#1E2F40` | Haupttext |
| Text 2 | `#4A6070` | Sekundärtext |

**Grundprinzip:** Navy-dominiert, viel Weißraum, keine grellen Farben. Professionell, nicht verspielt.

---

## 3. Typografie

| Schrift | Gewicht | Einsatz |
|---------|---------|---------|
| **Cormorant Garamond** | 300 (Light) | Headlines, Zahlen, Zitate |
| **Cormorant Garamond** | 400 (Regular Italic) | Betonungen in Headlines |
| **DM Sans** | 300 (Light) | Fließtext |
| **DM Sans** | 400 (Regular) | Links, Navigation |
| **DM Sans** | 500 (Medium) | Labels, Tags, Buttons |

**Basis:** 15px, Zeilenhöhe 1.8
**Headlines:** Serif (Cormorant Garamond), leicht, großzügig
**Body:** Sans-Serif (DM Sans), leicht, gut lesbar

---

## 4. Logo

**Primär (Text):** „Bethke & Partner" — DM Sans, 500 weight
- „Bethke" in Navy
- „& Partner" in Slate, 300 weight

**Bildmarke:** Dunkel auf hell oder hell auf dunkel (Logo-Dateien im Repo unter `public/`)

**Verwendung:**
- Navigation: Textlogo
- Favicon: Bildmarke (dunkel)
- Social/OG: Bildmarke auf weißem Hintergrund

---

## 5. Tonalität

### Grundregeln
- **Anrede:** Sie (formell, aber nicht steif)
- **Sprache:** Deutsch, direkt, konkret
- **Satzlänge:** Kurz. Kein Schachtelsatz.
- **Zahlen:** Wenn möglich, Zahlen statt Adjektive

### Do
- Konkrete Aussagen mit Zahlen und Beispielen
- Unbequeme Wahrheiten aussprechen
- Ehrlich sagen, wenn etwas nicht passt
- Klare Handlungsaufforderungen

### Don't
- Buzzwords: „transparent", „partnerschaftlich", „ganzheitlich", „nachhaltig"
- Übertreibungen: „revolutionär", „disruptiv", „einzigartig"
- KI-Begriffe auf der Outbound-Agent-Seite: kein „KI", „Künstliche Intelligenz", „AI-powered"
- Generische Drei-Satz-Muster mit Punkt am Ende (wirkt nach KI-Text)
- Mehr als zwei Aufzählungszeichen pro Absatz

### Beispiele

**Schlecht:**
> Wir sind Ihr ganzheitlicher Partner für transparente und nachhaltige Vertriebslösungen im B2B-Bereich.

**Gut:**
> Wir akquirieren Neukunden für SaaS-Unternehmen und IT-Dienstleister.

**Schlecht:**
> Unsere innovative Lösung revolutioniert die Art und Weise, wie Unternehmen Outbound betreiben.

**Gut:**
> Das System recherchiert Firmen, prüft jeden Kontakt und schreibt individuelle E-Mails. Sie bekommen Antworten.

---

## 6. Design-Elemente

### Dot-Grid
Subtiles Punktraster als Hintergrundtextur in Hero-Sections.
`radial-gradient(circle, rgba(107,133,160,0.22) 1px, transparent 1px)` bei 36px Spacing.

### Linienzeichnungen
SVG-Illustrationen im minimalistischen Linienstil (z.B. Nürnberg-Skyline).
Farbe: `rgba(107,133,160,0.25)` — subtil, nicht dominant.

### Karten
Weiß auf hellem Hintergrund, 1px Border in `rgba(107,133,160,0.18)`.
Hover: leichter Hintergrundwechsel zu `#E8EDF2`.

### Buttons
- **Primär:** Navy Hintergrund, weiße Schrift, Uppercase, 12px, 500 weight
- **Sekundär (auf Dunkel):** Weißer Hintergrund, Navy Schrift
- **Ghost:** Border only, Slate Farbe

### Scroll-Reveal
Elemente faden beim Scrollen von unten ein (24px translateY, 0.7s).
Kein Parallax, keine komplexen Animationen.

---

## 7. Dateien

```
public/
├── favicon.ico
├── favicon-16x16.png
├── favicon-32x32.png
├── apple-touch-icon.png
├── site.webmanifest
├── bethke_partner_logo_google.png      (dunkel)
├── bethke_partner_logo_google_hell.png (hell)
└── alexis-bethke.jpg
```

---

## 8. Kontakt

**Alexis Bethke-Pittadakis**
alexis@bethke-und-partner.de
+49 176 757 267 91
Ostendstraße 111, 90482 Nürnberg
