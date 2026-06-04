# SHANHAI HUB Vehicle Quote Tool

Static bilingual vehicle export quote calculator for SHANHAI HUB.

## What it does

- Supports new and used vehicle quotes.
- Supports FOB, CIP and DDP quote terms.
- Uses CNY as the main working currency, with USD and RUB conversion support.
- Loads live CNY-RUB and CNY-USD rates from CBR daily rates, and allows manual edits.
- Generates a customer quote page and print/PDF page.
- Transfers quote data through browser session storage.

## Project files

- `index.html`: main quote input page and live preview.
- `customer-quote.html`: customer-facing quote page.
- `customer-quote-pdf.html`: print/PDF layout.
- `styles.css`: visual layout and print styles.
- `quote-math.js`: shared quotation formulas and currency conversion helpers.
- `app.js`: business settings, translations, state transfer and rendering.
- `tests/quote-math.test.js`: automated checks for core quotation math.

## Run locally

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000/index.html`.

## Test

```bash
node --check quote-math.js
node --check app.js
node --test tests/quote-math.test.js
```

## Edit guide

- Business defaults: edit `businessSettings` in `app.js`.
- City freight and customs presets: edit `businessSettings.deliveryCityPresets`.
- Calculation logic: edit `quote-math.js`, then run the tests above.
- Interface text: edit `applyStableBusinessText()` in `app.js`.
- Visual layout: edit `styles.css`.

## Formula

- FOB CNY = vehicle price + China logistics + export processing + service fee.
- CIP CNY = FOB CNY + freight.
- CIP RUB = CIP CNY x CNY-RUB rate.
- DDP RUB = CIP RUB + customs service fee + tax.
- USD display = CNY amount x CNY-USD rate.

Vehicle price in CNY remains the base amount; changing the rate recalculates USD/RUB references without inflating the CNY input.
