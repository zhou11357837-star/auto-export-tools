(function initQuoteMath(root, factory) {
  const api = factory();

  if (typeof module === "object" && module.exports) {
    module.exports = api;
  }

  root.QuoteMath = api;
}(typeof globalThis !== "undefined" ? globalThis : this, function createQuoteMath() {
  function toNumber(value) {
    const number = Number(value);
    return Number.isFinite(number) ? number : 0;
  }

  function positiveRate(value) {
    const rate = toNumber(value);
    return rate > 0 ? rate : 0;
  }

  function getCnyRate(usdToCny) {
    return positiveRate(usdToCny);
  }

  function getAmountByCurrency(amountUsd, amountRub, currency, usdToCny) {
    if (currency === "USD") {
      return toNumber(amountUsd);
    }

    if (currency === "CNY") {
      return toNumber(amountUsd) * getCnyRate(usdToCny);
    }

    return toNumber(amountRub);
  }

  function getTotalByCurrency(result, currency, usdToCny) {
    return getAmountByCurrency(result.totalUsd, result.totalRub, currency, usdToCny);
  }

  function getCurrencyAmountSet(amountUsd, amountRub, usdToCny) {
    return {
      USD: toNumber(amountUsd),
      RUB: toNumber(amountRub),
      CNY: toNumber(amountUsd) * getCnyRate(usdToCny),
    };
  }

  function rubToCurrencyAmount(amountRub, currency, exchangeRate, usdToCny) {
    const rubValue = toNumber(amountRub);
    const usdRubRate = positiveRate(exchangeRate);

    if (currency === "USD") {
      return usdRubRate > 0 ? rubValue / usdRubRate : 0;
    }

    if (currency === "CNY") {
      return rubToCurrencyAmount(rubValue, "USD", usdRubRate, usdToCny) * getCnyRate(usdToCny);
    }

    return rubValue;
  }

  function getQuoteCnyTotals(result, usdToCny) {
    const cnyRate = getCnyRate(usdToCny);
    const carPriceCny = toNumber(result.carPriceUsd) * cnyRate;
    const chinaLogisticsCny = toNumber(result.chinaLogisticsUsd) * cnyRate;
    const exportProcessingCny = toNumber(result.exportProcessingUsd) * cnyRate;
    const freightCny = toNumber(result.freightUsd) * cnyRate;
    const profitCny = toNumber(result.profitUsd) * cnyRate;
    const clearanceCny = rubToCurrencyAmount(result.clearanceRub, "CNY", result.exchangeRate, cnyRate);
    const taxCny = rubToCurrencyAmount(result.taxRub, "CNY", result.exchangeRate, cnyRate);
    const fobTotalCny = carPriceCny + chinaLogisticsCny + exportProcessingCny + profitCny;
    const cipTotalCny = fobTotalCny + freightCny;
    const landedTotalCny = cipTotalCny + clearanceCny + taxCny;

    return {
      carPriceCny,
      chinaLogisticsCny,
      exportProcessingCny,
      freightCny,
      profitCny,
      clearanceCny,
      taxCny,
      fobTotalCny,
      cipTotalCny,
      landedTotalCny,
    };
  }

  function calculateQuoteTotals(input) {
    const carPriceUsd = toNumber(input.carPriceUsd);
    const chinaLogisticsUsd = toNumber(input.chinaLogisticsUsd);
    const exportProcessingUsd = toNumber(input.exportProcessingUsd);
    const freightUsd = toNumber(input.freightUsd);
    const profitUsd = toNumber(input.profitUsd);
    const clearanceRub = toNumber(input.clearanceRub);
    const taxRub = toNumber(input.taxRub);
    const exchangeRate = positiveRate(input.exchangeRate);
    const quoteTerm = ["fob", "cip", "ddp"].includes(input.quoteTerm) ? input.quoteTerm : "cip";
    const includeTaxInTotal = quoteTerm === "ddp";
    const fobTotalUsd = carPriceUsd + chinaLogisticsUsd + exportProcessingUsd + profitUsd;
    const fobTotalRub = fobTotalUsd * exchangeRate;
    const usdSubtotal = fobTotalUsd + (quoteTerm === "fob" ? 0 : freightUsd);
    const taxRubForTotal = includeTaxInTotal ? taxRub : 0;
    const rubSubtotal = clearanceRub + taxRubForTotal;
    const cipTotalUsd = fobTotalUsd + freightUsd;
    const cipTotalRub = cipTotalUsd * exchangeRate;
    const landedRubSubtotal = clearanceRub + taxRub;
    const landedTotalRub = cipTotalRub + landedRubSubtotal;
    const landedTotalUsd = exchangeRate > 0 ? landedTotalRub / exchangeRate : 0;
    const totalRub = quoteTerm === "fob" ? fobTotalRub : (includeTaxInTotal ? landedTotalRub : cipTotalRub);
    const totalUsd = exchangeRate > 0 ? totalRub / exchangeRate : 0;

    return {
      quoteTerm,
      carPriceUsd,
      chinaLogisticsUsd,
      exportProcessingUsd,
      freightUsd,
      profitUsd,
      clearanceRub,
      taxRub,
      exchangeRate,
      includeTaxInTotal,
      taxRubForTotal,
      fobTotalUsd,
      fobTotalRub,
      usdSubtotal,
      rubSubtotal,
      landedRubSubtotal,
      cipTotalRub,
      cipTotalUsd,
      landedTotalRub,
      landedTotalUsd,
      totalRub,
      totalUsd,
    };
  }

  return {
    calculateQuoteTotals,
    getAmountByCurrency,
    getCurrencyAmountSet,
    getQuoteCnyTotals,
    getTotalByCurrency,
    rubToCurrencyAmount,
    toNumber,
  };
}));
