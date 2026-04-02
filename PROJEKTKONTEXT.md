# Projektkontext – Bethke & Partner Website

> Diese Dokumentation wird fortlaufend aktuell gehalten und dient als zentrale Referenz für das Projekt.

**Letzte Aktualisierung:** 2026-04-02

---

## Unternehmen

**Bethke & Partner** ist eine spezialisierte B2B-Vertriebsagentur mit Sitz in Nürnberg (Ostendstr. 111, 90482 Nürnberg). Das Unternehmen bietet leistungsbasierte Kaltakquise, qualifizierte Terminlegung und den Aufbau skalierbarer Vertriebsstrukturen.

- **Gründer & Geschäftsführer:** Alexis Bethke-Pittadakis
- **E-Mail:** alexis@bethke-und-partner.de
- **Telefon:** +49 176 757 267 91
- **Domain:** www.bethke-und-partner.de

### Zielgruppen
- SaaS-Unternehmen
- IT-Unternehmen
- Marketing-Agenturen
- Personaldienstleister

### Kernleistungen
1. Prozess- & Vertriebsberatung
2. B2B Kaltakquise (SDR as a Service)
3. B2B Kundenrückgewinnung

---

## Technischer Stack

| Komponente | Technologie |
|------------|-------------|
| **Framework** | [Astro](https://astro.build/) v5.x |
| **Sprache** | HTML, CSS, JavaScript (kein JS-Framework nötig) |
| **Styling** | CSS mit Custom Properties (Design Tokens) |
| **Fonts** | Cormorant Garamond (Headings), DM Sans (Body) via Google Fonts |
| **Hosting** | [Netlify](https://www.netlify.com/) |
| **Repository** | GitHub – alexis-beep-debug/website-bethke-partner |
| **Build** | `npm run build` → `dist/` |
| **Formulare** | Netlify Forms (Kontaktformular) |

---

## Projektstruktur

```
website-bethke-partner/
├── astro.config.mjs          # Astro-Konfiguration
├── netlify.toml               # Netlify Deploy-Konfiguration
├── package.json
├── tsconfig.json
├── PROJEKTKONTEXT.md          # Diese Datei
│
├── public/                    # Statische Assets (werden 1:1 kopiert)
│   ├── favicon.ico            # (TODO: Favicon hinzufügen)
│   ├── favicon-32x32.png      # (TODO)
│   ├── favicon-16x16.png      # (TODO)
│   ├── apple-touch-icon.png   # (TODO)
│   └── bethke_partner_logo.png
│
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro   # Haupt-Layout (Head, Meta, Fonts, Structured Data)
│   │
│   ├── components/
│   │   ├── Nav.astro          # Navigation (mit Mobile-Menü)
│   │   ├── Footer.astro       # Footer
│   │   └── ScrollReveal.astro # Scroll-Animation (IntersectionObserver)
│   │
│   ├── styles/
│   │   └── global.css         # Design Tokens, Nav/Footer CSS, Utilities
│   │
│   └── pages/
│       ├── index.astro        # Startseite
│       ├── kontakt.astro      # Kontaktformular (Netlify Forms)
│       ├── blog.astro         # Blog-Übersicht
│       ├── blog/
│       │   └── sdr-aufbau.astro # Blog-Artikel: SDR-Aufbau
│       ├── fallstudien.astro  # Case Studies
│       ├── datenschutz.astro  # Datenschutzerklärung (noindex)
│       └── impressum.astro    # Impressum (noindex)
```

---

## Design System

### Farbpalette
| Token | Hex | Verwendung |
|-------|-----|------------|
| `--navy` | `#0D1B2A` | Primärfarbe, Buttons, Dark Sections |
| `--blue` | `#1C4380` | Akzent, Hover-States |
| `--blue-mid` | `#2B5BA8` | Tags, Labels |
| `--slate` | `#6B85A0` | Sekundärtext, dezente Elemente |
| `--bg` | `#F2F5F8` | Hintergrund |
| `--white` | `#FFFFFF` | Karten, Alt-Sections |
| `--text` | `#1E2F40` | Haupttext |
| `--text-2` | `#4A6070` | Sekundärtext |

### Typografie
- **Headings:** Cormorant Garamond, 300 weight, Serif
- **Body:** DM Sans, 300 weight, Sans-Serif
- **Base font-size:** 15px, line-height 1.8

### Designprinzipien
- Minimalistisch, professionell, viel Weißraum
- Navy-dominierte Dark Sections für Kontrast
- Subtile Animationen (Scroll Reveal, Fade-Up)
- Dot-Grid-Pattern als Hintergrundtextur

---

## Seiten-Übersicht

| Seite | Route | SEO | Beschreibung |
|-------|-------|-----|-------------|
| **Startseite** | `/` | index | Hero, Leistungen, Statement, Zielgruppen, Vorteile, Prozess, Pricing, Vergleich, Über uns, CTA |
| **Kontakt** | `/kontakt` | index | Kontaktformular (Netlify), Sidebar mit Kontaktdaten |
| **Blog** | `/blog` | index | Blog-Übersicht mit Featured Article + kommende Artikel |
| **Blog: SDR** | `/blog/sdr-aufbau` | index | Artikel über internes SDR-Aufbau-Scheitern |
| **Fallstudien** | `/fallstudien` | index | Case Study: 2,2 Mio. € Umsatz, weitere Projekte |
| **Datenschutz** | `/datenschutz` | noindex | DSGVO-konforme Datenschutzerklärung |
| **Impressum** | `/impressum` | noindex | Pflichtangaben nach § 5 TMG |

---

## Deployment

### Netlify-Setup
1. Repository mit Netlify verbinden (GitHub Integration)
2. Build-Einstellungen werden automatisch aus `netlify.toml` gelesen:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
   - **Node Version:** 20
3. Formulare: Netlify erkennt `data-netlify="true"` automatisch

### Branches
- `main` — Production
- `claude/setup-bethke-netlify-HQmEe` — Feature-Branch für initiale Astro-Migration

---

## Offene Aufgaben / TODOs

- [ ] Neues Favicon + Logo einbinden (wartet auf Dateien vom Kunden)
- [ ] Netlify-Konto mit GitHub-Repo verbinden
- [ ] Custom Domain (bethke-und-partner.de) in Netlify konfigurieren
- [ ] SSL-Zertifikat aktivieren (automatisch über Netlify)
- [ ] Kontaktformular in Netlify-Dashboard verifizieren
- [ ] OG:Image für Social Sharing erstellen und einbinden
- [ ] Performance-Optimierung: Bilder als WebP, Lazy Loading
- [ ] Weitere Blog-Artikel hinzufügen (Markdown-basiert in Zukunft möglich)

---

## Entwicklung

```bash
# Dependencies installieren
npm install

# Lokaler Dev-Server
npm run dev

# Production Build
npm run build

# Build lokal testen
npm run preview
```

---

## Kontakt für Rückfragen

**Alexis Bethke-Pittadakis**
alexis@bethke-und-partner.de
+49 176 757 267 91
