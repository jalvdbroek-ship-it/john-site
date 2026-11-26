# Persoonlijke Site John

Een one-pagina over John: voetbal, AI en design. Statisch, geen build-stap.

De live versie staat op GitHub Pages, via de workflow in
`.github/workflows/pages.yml`.

## Starten

Dubbelklik `index.html` om de pagina te openen, of serveer de map:

```bash
python -m http.server 8000
```

Dan naar <http://localhost:8000>.

## Mappen

- `index.html` — de hele pagina, semantische HTML in het Nederlands.
- `assets/css/style.css` — alle styling, design tokens en de responsieve regels.
- `assets/js/confetti.js` — de confetti bij de knop "Vier het". Zonder
  libraries, en bij "reduced motion" geeft de knop alleen een kleurwissel.
- `assets/js/nav.js` — de navigatie krijgt een hairline zodra je scrolt.

## Aanpassen

- **Tekst**: de koppen en alinea's staan in `index.html`, per `<section>`.
- **E-mailadres**: in `index.html`, het `href="mailto:..."` van de knop "Mail John".
- **Kleuren**: in `assets/css/style.css` bij `:root`. Wit canvas, `--ink`
  voor de tekst, `--blue` voor links en knoppen, `--off-white` voor de
  afwisselende sectie.
- **Lettertypen**: Inter Tight (koppen) en Inter (tekst), geladen via
  Google Fonts.

## Ontwerp

De pagina is opgebouwd als een productpagina: wit canvas, grote strakke
titels, veel lucht, en één blauwe accentkleur voor links en knoppen.

Het middenstuk is het product: het voetbalveld in een afgerond kader met
zonsondergang, de zon als schijf in het midden. Het veld tekent zichzelf
bij het laden.

Daaronder drie secties, elk met een eigen beeld: de positiebeweging van
het voetbal, het AI-gesprek, en de letterspecimen. De contactsectie staat
centraal met twee knoppen.

Alle kleurcontrasten zijn gemeten en voldoen aan WCAG 2.2 AA.

- **Kleuren**: `--white`, `--off-white`, `--ink`, `--ink-muted`, `--blue`
  in `assets/css/style.css`.
- **Zonsondergang**: `--sky-1` tot `--sky-7` plus `--sun`, alleen gebruikt
  binnen het productkader.
