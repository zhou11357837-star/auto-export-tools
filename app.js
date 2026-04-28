const cityPresets = {
  Moscow: { freightUsd: 1800, clearanceRub: 220000 },
  Almaty: { freightUsd: 2100, clearanceRub: 195000 },
  Minsk: { freightUsd: 1700, clearanceRub: 205000 }
};

const i18n = {
  zh: {
    heroTag: "SHANHAI HUB AUTO EXPORT",
    title: "SHANHAI HUB Quote Calculator",
    subtitle: "汽车出口专业报价工具 / Профессиональный калькулятор экспорта авто",
    langLabel: "界面语言 / Язык интерфейса",
    formTitle: "车辆与成本信息",
    labelModel: "车型 / Модель",
    labelYear: "年份 / Год",
    labelMileage: "里程（km）/ Пробег (km)",
    labelColor: "颜色 / Цвет",
    labelDestination: "目的城市 / Город назначения",
    labelCarPrice: "车价（USD）/ Цена авто (USD)",
    labelFreight: "运费（USD）/ Фрахт (USD)",
    labelProfit: "利润（USD）/ Маржа (USD)",
    labelClearance: "清关费（RUB）/ Оформление (RUB)",
    labelTax: "税费（RUB）/ Налог (RUB)",
    labelRate: "汇率 USD→RUB / Курс USD→RUB",
    previewTitle: "SHANHAI HUB Quote Preview",
    cardModelLabel: "车型",
    cardYearLabel: "年份",
    cardMileageLabel: "里程",
    cardColorLabel: "颜色",
    totalRubLabel: "总价（RUB）",
    totalUsdLabel: "总价（USD）",
    summaryLabel: "客户报价摘要 / Текст для клиента",
    calculateBtn: "计算报价 / Рассчитать",
    generateBtn: "Generate customer quote",
    printBtn: "Print quote",
    footerNote: "Send model / budget / destination city for a full quote.",
    summaryTemplate: (d) => `SHANHAI HUB 客户报价\n日期: ${new Date().toLocaleDateString()}\n\n车型: ${d.carModel}\n年份: ${d.carYear}\n里程: ${d.mileage} km\n颜色: ${d.color}\n目的城市: ${d.destinationCity}\n\n车价: $${d.carPriceUsd.toFixed(2)}\n运费: $${d.freightUsd.toFixed(2)}\n利润: $${d.profitUsd.toFixed(2)}\n清关费: ₽${d.clearanceRub.toFixed(2)}\n税费: ₽${d.taxRub.toFixed(2)}\n汇率: ${d.exchangeRate.toFixed(4)}\n\n最终总价: ₽${d.finalRub.toFixed(2)} / $${d.finalUsd.toFixed(2)}\n\nSend model / budget / destination city for a full quote.`
  },
  ru: {
    heroTag: "SHANHAI HUB AUTO EXPORT",
    title: "SHANHAI HUB Quote Calculator",
    subtitle: "Профессиональный калькулятор экспорта авто / 汽车出口专业报价工具",
    langLabel: "Язык интерфейса / 界面语言",
    formTitle: "Данные автомобиля и расходы",
    labelModel: "Модель / 车型",
    labelYear: "Год / 年份",
    labelMileage: "Пробег (km) / 里程（km）",
    labelColor: "Цвет / 颜色",
    labelDestination: "Город назначения / 目的城市",
    labelCarPrice: "Цена авто (USD) / 车价（USD）",
    labelFreight: "Фрахт (USD) / 运费（USD）",
    labelProfit: "Маржа (USD) / 利润（USD）",
    labelClearance: "Оформление (RUB) / 清关费（RUB）",
    labelTax: "Налог (RUB) / 税费（RUB）",
    labelRate: "Курс USD→RUB / 汇率 USD→RUB",
    previewTitle: "SHANHAI HUB Quote Preview",
    cardModelLabel: "Модель",
    cardYearLabel: "Год",
    cardMileageLabel: "Пробег",
    cardColorLabel: "Цвет",
    totalRubLabel: "Итого (RUB)",
    totalUsdLabel: "Итого (USD)",
    summaryLabel: "Сводка для клиента / 客户报价摘要",
    calculateBtn: "Рассчитать / 计算报价",
    generateBtn: "Generate customer quote",
    printBtn: "Print quote",
    footerNote: "Send model / budget / destination city for a full quote.",
    summaryTemplate: (d) => `Коммерческое предложение SHANHAI HUB\nДата: ${new Date().toLocaleDateString()}\n\nМодель: ${d.carModel}\nГод: ${d.carYear}\nПробег: ${d.mileage} km\nЦвет: ${d.color}\nГород назначения: ${d.destinationCity}\n\nЦена авто: $${d.carPriceUsd.toFixed(2)}\nФрахт: $${d.freightUsd.toFixed(2)}\nМаржа: $${d.profitUsd.toFixed(2)}\nОформление: ₽${d.clearanceRub.toFixed(2)}\nНалог: ₽${d.taxRub.toFixed(2)}\nКурс: ${d.exchangeRate.toFixed(4)}\n\nФинальная стоимость: ₽${d.finalRub.toFixed(2)} / $${d.finalUsd.toFixed(2)}\n\nSend model / budget / destination city for a full quote.`
  }
};

function getNumber(id) {
  const value = Number(document.getElementById(id).value);
  return Number.isFinite(value) ? value : 0;
}

function formatMoney(value, symbol) {
  return `${symbol} ${new Intl.NumberFormat(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value)}`;
}

function updateLanguage(lang) {
  const dict = i18n[lang];
  Object.keys(dict).forEach((key) => {
    const node = document.getElementById(key);
    if (node && typeof dict[key] === "string") {
      node.textContent = dict[key];
    }
  });
}

function applyCityDefaults() {
  const city = document.getElementById("destinationCity").value;
  const preset = cityPresets[city];
  if (!preset) return;

  document.getElementById("freightUsd").value = preset.freightUsd;
  document.getElementById("clearanceRub").value = preset.clearanceRub;
}

function collectData() {
  return {
    carModel: document.getElementById("carModel").value || "-",
    carYear: document.getElementById("carYear").value || "-",
    mileage: document.getElementById("mileage").value || "-",
    color: document.getElementById("color").value || "-",
    destinationCity: document.getElementById("destinationCity").value,
    carPriceUsd: getNumber("carPriceUsd"),
    freightUsd: getNumber("freightUsd"),
    profitUsd: getNumber("profitUsd"),
    clearanceRub: getNumber("clearanceRub"),
    taxRub: getNumber("taxRub"),
    exchangeRate: getNumber("exchangeRate") || 1
  };
}

function calculateQuote(data) {
  const usdSubtotal = data.carPriceUsd + data.freightUsd + data.profitUsd;
  const finalRub = usdSubtotal * data.exchangeRate + data.clearanceRub + data.taxRub;
  const finalUsd = finalRub / data.exchangeRate;
  return { ...data, finalRub, finalUsd };
}

function renderCard(quote) {
  document.getElementById("quoteCity").textContent = quote.destinationCity;
  document.getElementById("cardModelValue").textContent = quote.carModel;
  document.getElementById("cardYearValue").textContent = quote.carYear;
  document.getElementById("cardMileageValue").textContent = quote.mileage;
  document.getElementById("cardColorValue").textContent = quote.color;
}

function renderQuote() {
  const lang = document.getElementById("languageSelect").value;
  const quote = calculateQuote(collectData());

  document.getElementById("finalRub").textContent = formatMoney(quote.finalRub, "₽");
  document.getElementById("finalUsd").textContent = formatMoney(quote.finalUsd, "$");
  document.getElementById("quoteSummary").value = i18n[lang].summaryTemplate(quote);
  renderCard(quote);
}

document.getElementById("languageSelect").addEventListener("change", (event) => {
  updateLanguage(event.target.value);
  renderQuote();
});

document.getElementById("destinationCity").addEventListener("change", () => {
  applyCityDefaults();
  renderQuote();
});

document.getElementById("calculateBtn").addEventListener("click", renderQuote);
document.getElementById("generateBtn").addEventListener("click", renderQuote);
document.getElementById("printBtn").addEventListener("click", () => window.print());

updateLanguage("zh");
applyCityDefaults();
renderQuote();
