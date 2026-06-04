const assert = require("node:assert/strict");
const test = require("node:test");
const QuoteMath = require("../quote-math.js");

test("CNY input value is not inflated by an extra multiplier", () => {
  const usdToCny = 6.7616;
  const cnyInput = 10000;
  const carPriceUsd = cnyInput / usdToCny;
  const result = QuoteMath.calculateQuoteTotals({
    carPriceUsd,
    exchangeRate: 72.5597,
    quoteTerm: "cip",
  });
  const totals = QuoteMath.getQuoteCnyTotals(result, usdToCny);

  assert.equal(Math.ceil(totals.carPriceCny), 10000);
  assert.equal(Math.ceil(totals.cipTotalCny), 10000);
});

test("FOB total excludes international freight and destination costs", () => {
  const result = QuoteMath.calculateQuoteTotals({
    carPriceUsd: 10000,
    chinaLogisticsUsd: 200,
    exportProcessingUsd: 300,
    freightUsd: 1500,
    profitUsd: 500,
    clearanceRub: 100000,
    taxRub: 200000,
    exchangeRate: 70,
    quoteTerm: "fob",
  });

  assert.equal(result.totalUsd, 11000);
  assert.equal(result.totalRub, 770000);
});

test("CIP total includes freight but excludes customs and tax", () => {
  const result = QuoteMath.calculateQuoteTotals({
    carPriceUsd: 10000,
    chinaLogisticsUsd: 200,
    exportProcessingUsd: 300,
    freightUsd: 1500,
    profitUsd: 500,
    clearanceRub: 100000,
    taxRub: 200000,
    exchangeRate: 70,
    quoteTerm: "cip",
  });

  assert.equal(result.totalUsd, 12500);
  assert.equal(result.totalRub, 875000);
});

test("DDP total includes freight, customs service and tax", () => {
  const result = QuoteMath.calculateQuoteTotals({
    carPriceUsd: 10000,
    chinaLogisticsUsd: 200,
    exportProcessingUsd: 300,
    freightUsd: 1500,
    profitUsd: 500,
    clearanceRub: 100000,
    taxRub: 200000,
    exchangeRate: 70,
    quoteTerm: "ddp",
  });

  assert.equal(result.totalRub, 1175000);
  assert.equal(result.totalUsd, 1175000 / 70);
});

test("currency amount sets use the same USD-CNY rate for all CNY display values", () => {
  const amounts = QuoteMath.getCurrencyAmountSet(100, 7255.97, 6.7616);

  assert.deepEqual(amounts, {
    USD: 100,
    RUB: 7255.97,
    CNY: 676.16,
  });
});

test("CNY-base rates keep CNY input as the primary total", () => {
  const cnyToRub = 10;
  const cnyToUsd = 0.14;
  const usdToRub = cnyToRub / cnyToUsd;
  const usdToCny = 1 / cnyToUsd;
  const result = QuoteMath.calculateQuoteTotals({
    carPriceUsd: 100000 * cnyToUsd,
    chinaLogisticsUsd: 8000 * cnyToUsd,
    exportProcessingUsd: 5000 * cnyToUsd,
    freightUsd: 25000 * cnyToUsd,
    profitUsd: 12000 * cnyToUsd,
    exchangeRate: usdToRub,
    quoteTerm: "cip",
  });
  const totals = QuoteMath.getQuoteCnyTotals(result, usdToCny);

  assert.ok(Math.abs(totals.cipTotalCny - 150000) < 0.0001);
  assert.ok(Math.abs(result.cipTotalUsd - 21000) < 0.0001);
  assert.ok(Math.abs(result.cipTotalRub - 1500000) < 0.0001);
});
