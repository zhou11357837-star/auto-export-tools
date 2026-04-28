# SHANHAI HUB Quote Calculator (v2)

Professional bilingual (Chinese + Russian) quote calculator for car export sales.

## Project structure

- `index.html` → page structure and field layout
- `styles.css` → visual style (premium UI, spacing, colors, card layout)
- `app.js` → calculations, bilingual text dictionary, and rendering logic

## Run (beginner friendly)

### Option A: Open directly

1. In your file manager, open the project folder.
2. Double-click `index.html`.
3. Your browser will open the calculator page.

### Option B: Local server (recommended)

1. Open terminal in this project folder.
2. Run:

```bash
python3 -m http.server 8000
```

3. Open browser and go to:

`http://localhost:8000`

## Quick self-check commands

Run these commands in terminal from project folder:

```bash
# 1) Check JS syntax
node --check app.js

# 2) Check git diff formatting
git diff --check

# 3) (Fixed version) basic file read check + git status
python3 - <<'PY'
from pathlib import Path
for p in ['index.html','styles.css','app.js','README.md']:
    text = Path(p).read_text()
    print(p, 'OK, lines =', len(text.splitlines()))
PY
git status --short
```

## Where to edit what

### Styling (look & feel)

Edit `styles.css`:
- card design
- colors
- spacing
- responsive layout

### Calculation logic

Edit `app.js` in:
- `collectData()` for inputs
- `calculateQuote()` for formula changes
- `renderQuote()` for output behavior

### Bilingual text

Edit `app.js` in the `i18n` object:
- `i18n.zh` for Chinese text
- `i18n.ru` for Russian text
- `summaryTemplate` for customer-facing message format

## Current formula

1. `USD subtotal = car price + freight + profit`
2. `Final RUB = (USD subtotal × exchange rate) + clearance + tax`
3. `Final USD = Final RUB ÷ exchange rate`

This keeps calculations simple and easy to expand for future CRM/quotation workflows.
