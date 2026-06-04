# Windows editing notes

This is a static quotation tool. It can be edited with VS Code or any code editor.

## Start preview

1. Install Python for Windows if it is not installed.
2. Double-click `start-windows.bat`.
3. Open `http://127.0.0.1:8000/index.html` if the browser does not open automatically.

## Main files

- `index.html`: main quote editing page.
- `customer-quote.html`: customer-facing quote page.
- `customer-quote-pdf.html`: print/PDF layout.
- `app.js`: quote logic, translations and page behavior.
- `quote-math.js`: quote calculation helper.
- `styles.css`: page styles.
- `assets/shanhai-logo.png`: logo image.
- `tests/quote-math.test.js`: calculation tests.

## Optional test

If Node.js is installed, run:

```bat
node --test tests\quote-math.test.js
```
