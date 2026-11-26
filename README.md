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

## Aanpassen

- **Tekst**: de koppen en alinea's staan in `index.html`, per `<section>`.
- **E-mailadres**: in `index.html`, het `href="mailto:..."` van de knop "Mail John".
- **Kleuren**: in `assets/css/style.css` bij `:root` (de poster en de
  schemerstand) en in de `@media (prefers-color-scheme: dark)` blok
  daaronder (diepere nacht).
- **Lettertypen**: Archivo (koppen, variabel in breedte en gewicht) en
  Instrument Sans (tekst), geladen via Google Fonts.

## Ontwerp

De pagina is een filmposter. De bovenste helft is een zonsondergang: een
verloop van diep paars via magenta en rood naar goud, met de zon als schijf
achter het midden van het voetbalveld. "JOHN" staat in grote goudkleurige
letters boven de horizon, het veld is een silhouet onderaan.

Onder de poster gaat de pagina verder in schemer: donker plum met goud
als accent. Dat is de nacht na de zonsondergang.

Alle kleurcontrasten zijn gemeten en voldoen aan WCAG 2.2 AA, in zowel de
lichte als de donkere modus.

- **Poster**: `--sky-1` tot `--sky-7` in `assets/css/style.css`.
- **Lichaam**: `--bg`, `--surface`, `--ink`, `--accent` in dezelfde `:root`.
