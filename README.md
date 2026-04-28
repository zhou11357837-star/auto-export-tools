# SHANHAI HUB Quote Calculator (v3)

Professional bilingual (Chinese + Russian) quote calculator for real car export sales.

## New business features

- Destination city presets: **Moscow / Almaty / Minsk**
- Auto-filled default freight and clearance values per city
- Cleaner customer quote preview card
- Print-friendly quote layout
- `Generate customer quote` button
- Bilingual note:
  `Send model / budget / destination city for a full quote.`

## Project structure

- `index.html` → page structure and business fields
- `styles.css` → premium visual styling + print layout
- `app.js` → city presets, calculations, bilingual text

## Run

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000` in browser.

## Edit guide (beginner)

- **Change design:** edit `styles.css`
- **Change formula:** edit `calculateQuote()` in `app.js`
- **Change bilingual labels/text:** edit `i18n` in `app.js`
- **Change city default freight/clearance:** edit `cityPresets` in `app.js`

## Formula

1. `USD subtotal = car price + freight + profit`
2. `Final RUB = (USD subtotal × exchange rate) + clearance + tax`
3. `Final USD = Final RUB ÷ exchange rate`
