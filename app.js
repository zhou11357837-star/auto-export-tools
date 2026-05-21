// ==========================================================
// EASY EDIT AREA
// Change your business values and wording here.
// ==========================================================
const businessSettings = {
  // 1) Default interface language: "zh", "ru", or "en".
  defaultLanguage: "zh",

  // 2) Brand / logo settings.
  logo: {
    // Put a logo file next to index.html, then use "./logo.png".
    // Leave imagePath blank to use the SH text logo.
    imagePath: "./assets/shanhai-logo.png",
    initials: "SH",
    name: "SHANHAI HUB",
    tagline: "Auto Export China",
  },

  // 3) Contact settings.
  contact: {
    // Edit personName. The person getter keeps the current page code compatible.
    personName: "Frank",
    get person() {
      return this.personName;
    },
    wechat: "Frank_SHUB",
    whatsapp: "+861561135787",
    telegram: "@Frank Jion",
  },

  // 4) Quotation reference settings.
  // Current output format is PREFIX-YYYYMMDD-SEQUENCE.
  // Example: SHH-QT-20260428-001.
  quoteReference: {
    prefix: "SHH-QT",
    sequence: "001",
  },

  // 5) Exchange rate settings.
  exchangeRate: {
    // Live daily exchange rate settings:
    // The app tries live rates first, then falls back to these editable defaults.
    usdToRub: 74.8081,
    usdToCny: 7.24,
    todayDefaultUsdRub: 74.8081,
    todayDefaultUsdCny: 7.24,
    liveRateUrl: "https://www.cbr-xml-daily.ru/daily_json.js",

    // Works from a static file page. If unavailable, editable defaults above are used.
    tryLiveExchangeRate: true,
  },

  validation: {
    carPriceUsd: { min: 0, max: 300000 },
    freightUsd: { min: 0, max: 30000 },
    profitUsd: { min: 0, max: 50000 },
    clearanceRub: { min: 0, max: 5000000 },
    taxRub: { min: 0, max: 10000000 },
    exchangeRate: { min: 1, max: 300 },
  },

  // 6) Russia personal-use import tax estimate rules.
  // Keep all duty / recycling assumptions here so future rule changes are easy to edit.
  taxRules: {
    defaultMode: "manual", // "manual" or "ruPersonalUse"
    defaultPersonalUse: true,
    vehicleType: "passengerCar",
    usdToEur: 0.93,
    personalUseNote: "Personal use estimated calculation",

    utilizationFee: {
      personalUseRub: 5200,
    },

    // Passenger car duty estimate for individual / personal use.
    // Duty is the greater of valuePercent or minEurPerCc in each applicable bracket.
    passengerCarPersonalUse: {
      under3Years: [
        { maxCustomsValueEur: 8500, valuePercent: 0.54, minEurPerCc: 2.5 },
        { maxCustomsValueEur: 16700, valuePercent: 0.48, minEurPerCc: 3.5 },
        { maxCustomsValueEur: 42300, valuePercent: 0.48, minEurPerCc: 5.5 },
        { maxCustomsValueEur: 84500, valuePercent: 0.48, minEurPerCc: 7.5 },
        { maxCustomsValueEur: 169000, valuePercent: 0.48, minEurPerCc: 15 },
        { maxCustomsValueEur: Infinity, valuePercent: 0.48, minEurPerCc: 20 },
      ],
      over3Years: [
        { maxDisplacementCc: 1000, eurPerCc: 1.5 },
        { maxDisplacementCc: 1500, eurPerCc: 1.7 },
        { maxDisplacementCc: 1800, eurPerCc: 2.5 },
        { maxDisplacementCc: 2300, eurPerCc: 2.7 },
        { maxDisplacementCc: 3000, eurPerCc: 3 },
        { maxDisplacementCc: Infinity, eurPerCc: 3.6 },
      ],
    },
  },

  // 7) Delivery city preset settings.
  // Edit city names and default logistics costs here.
  deliveryCityPresets: [
    { zh: "塔什干", ru: "Ташкент", freightUsd: 900, clearanceRub: 0 },
    { zh: "阿拉木图", ru: "Алматы", freightUsd: 550, clearanceRub: 0 },
    { zh: "比什凯克", ru: "Бишкек", freightUsd: 900, clearanceRub: 0 },
    { zh: "明斯克", ru: "Минск", freightUsd: 1600, clearanceRub: 0 },
    { zh: "巴库", ru: "Баку", freightUsd: 1700, clearanceRub: 0 },
    { zh: "埃里温", ru: "Ереван", freightUsd: 1850, clearanceRub: 0 },
    { zh: "阿什哈巴德", ru: "Ашхабад", freightUsd: 1500, clearanceRub: 0 },
    { zh: "莫斯科", ru: "Москва", freightUsd: 1600, clearanceRub: 0 },
    { zh: "圣彼得堡", ru: "Санкт-Петербург", freightUsd: 1700, clearanceRub: 0 },
    { zh: "喀山", ru: "Казань", freightUsd: 1800, clearanceRub: 0 },
    { zh: "图拉", ru: "Тула", freightUsd: 1550, clearanceRub: 0 },
    { zh: "乌里扬诺夫斯克", ru: "Ульяновск", freightUsd: 1800, clearanceRub: 0 },
    { zh: "萨马拉", ru: "Самара", freightUsd: 1800, clearanceRub: 0 },
    { zh: "叶卡捷琳堡", ru: "Екатеринбург", freightUsd: 1800, clearanceRub: 0 },
    { zh: "新西伯利亚", ru: "Новосибирск", freightUsd: 1800, clearanceRub: 0 },
    { zh: "克拉斯诺达尔", ru: "Краснодар", freightUsd: 1800, clearanceRub: 0 },
    { zh: "弗拉基米尔", ru: "Владимир", freightUsd: 1800, clearanceRub: 0 },
    { zh: "下诺夫哥罗德", ru: "Нижний Новгород", freightUsd: 1800, clearanceRub: 0 },
    { zh: "纳贝列日尼切尔尼", ru: "Набережные Челны", freightUsd: 1800, clearanceRub: 0 },
    { zh: "奥伦堡", ru: "Оренбург", freightUsd: 1800, clearanceRub: 0 },
    { zh: "布良斯克", ru: "Брянск", freightUsd: 1800, clearanceRub: 0 },
    { zh: "萨拉托夫", ru: "Саратов", freightUsd: 1800, clearanceRub: 0 },
    { zh: "罗斯托夫", ru: "Ростов-на-Дону", freightUsd: 1800, clearanceRub: 0 },
    { zh: "斯摩棱斯克", ru: "Смоленск", freightUsd: 2000, clearanceRub: 0 },
    { zh: "阿斯特拉罕", ru: "Астрахань", freightUsd: 1800, clearanceRub: 0 },
    { zh: "车里雅宾斯克", ru: "Челябинск", freightUsd: 1800, clearanceRub: 0 },
    { zh: "阔勒买中立区", ru: "Нейтральная зона Колбая", freightUsd: 330, clearanceRub: 0 },
  ],
  vehicleImages: {
    // Optional helper only. Paste the source page here while collecting image URLs.
    sourcePageUrl: "",

    // Use local files next to index.html, for example "./vehicle-main.jpg".
    // You can also paste image URLs in the page fields.
    imageUrls: ["", "", "", "", ""],
  },

  // 8) Vehicle model dictionary.
  // Add or edit records here. Matching uses fixed dictionary names only,
  // so brand and model stay paired correctly.
  modelDictionary: [
    {
      brandZh: "马自达",
      brandEn: "Mazda",
      brandRu: "Mazda",
      modelZh: "CX-5",
      modelEn: "CX-5",
      modelRu: "CX-5",
      fullNameZh: "马自达 CX-5",
      fullNameEn: "Mazda CX-5",
      fullNameRu: "Mazda CX-5",
      aliases: ["马自达cx5", "马自达 CX5", "cx5", "CX5", "cx-5", "CX-5"],
    },
    {
      brandZh: "丰田",
      brandEn: "Toyota",
      brandRu: "Toyota",
      modelZh: "卡罗拉",
      modelEn: "Corolla",
      modelRu: "Corolla",
      fullNameZh: "丰田 卡罗拉",
      fullNameEn: "Toyota Corolla",
      fullNameRu: "Toyota Corolla",
      aliases: ["卡罗拉", "丰田卡罗拉", "corolla", "Corolla", "toyota corolla"],
    },
    {
      brandZh: "丰田",
      brandEn: "Toyota",
      brandRu: "Toyota",
      modelZh: "RAV4",
      modelEn: "RAV4",
      modelRu: "RAV4",
      fullNameZh: "丰田 RAV4",
      fullNameEn: "Toyota RAV4",
      fullNameRu: "Toyota RAV4",
      aliases: ["rav4", "RAV4", "丰田rav4", "丰田 RAV4", "toyota rav4"],
    },
    {
      brandZh: "丰田",
      brandEn: "Toyota",
      brandRu: "Toyota",
      modelZh: "凯美瑞",
      modelEn: "Camry",
      modelRu: "Camry",
      fullNameZh: "丰田 凯美瑞",
      fullNameEn: "Toyota Camry",
      fullNameRu: "Toyota Camry",
      aliases: ["凯美瑞", "丰田凯美瑞", "camry", "Camry", "toyota camry"],
    },
    {
      brandZh: "丰田",
      brandEn: "Toyota",
      brandRu: "Toyota",
      modelZh: "卡罗拉锐放",
      modelEn: "Corolla Cross",
      modelRu: "Corolla Cross",
      fullNameZh: "丰田 卡罗拉锐放",
      fullNameEn: "Toyota Corolla Cross",
      fullNameRu: "Toyota Corolla Cross",
      aliases: ["卡罗拉锐放", "丰田卡罗拉锐放", "corollacross", "Corolla Cross", "toyota corolla cross"],
    },
    {
      brandZh: "马自达",
      brandEn: "Mazda",
      brandRu: "Mazda",
      modelZh: "CX-30",
      modelEn: "CX-30",
      modelRu: "CX-30",
      fullNameZh: "马自达 CX-30",
      fullNameEn: "Mazda CX-30",
      fullNameRu: "Mazda CX-30",
      aliases: ["马自达cx30", "马自达 CX30", "cx30", "CX30", "cx-30", "CX-30"],
    },
    {
      brandZh: "马自达",
      brandEn: "Mazda",
      brandRu: "Mazda",
      modelZh: "马自达3",
      modelEn: "Mazda 3",
      modelRu: "Mazda 3",
      fullNameZh: "马自达 马自达3",
      fullNameEn: "Mazda 3",
      fullNameRu: "Mazda 3",
      aliases: ["马自达3", "马自达 3", "mazda3", "Mazda3", "mazda 3", "Mazda 3"],
    },
    {
      brandZh: "大众",
      brandEn: "Volkswagen",
      brandRu: "Volkswagen",
      modelZh: "途岳",
      modelEn: "Tharu",
      modelRu: "Tharu",
      fullNameZh: "大众 途岳",
      fullNameEn: "Volkswagen Tharu",
      fullNameRu: "Volkswagen Tharu",
      aliases: ["途岳", "大众途岳", "tharu", "Tharu", "volkswagen tharu"],
    },
    {
      brandZh: "大众",
      brandEn: "Volkswagen",
      brandRu: "Volkswagen",
      modelZh: "探岳",
      modelEn: "Tayron",
      modelRu: "Tayron",
      fullNameZh: "大众 探岳",
      fullNameEn: "Volkswagen Tayron",
      fullNameRu: "Volkswagen Tayron",
      aliases: ["探岳", "大众探岳", "tayron", "Tayron", "volkswagen tayron"],
    },
    {
      brandZh: "大众",
      brandEn: "Volkswagen",
      brandRu: "Volkswagen",
      modelZh: "途观",
      modelEn: "Tiguan",
      modelRu: "Tiguan",
      fullNameZh: "大众 途观",
      fullNameEn: "Volkswagen Tiguan",
      fullNameRu: "Volkswagen Tiguan",
      aliases: ["途观", "大众途观", "tiguan", "Tiguan", "volkswagen tiguan"],
    },
    {
      brandZh: "起亚",
      brandEn: "Kia",
      brandRu: "Kia",
      modelZh: "赛图斯",
      modelEn: "Seltos",
      modelRu: "Seltos",
      fullNameZh: "起亚 赛图斯",
      fullNameEn: "Kia Seltos",
      fullNameRu: "Kia Seltos",
      aliases: ["赛图斯", "起亚赛图斯", "seltos", "Seltos", "kia seltos"],
    },
    {
      brandZh: "起亚",
      brandEn: "Kia",
      brandRu: "Kia",
      modelZh: "狮铂拓界",
      modelEn: "Sportage",
      modelRu: "Sportage",
      fullNameZh: "起亚 狮铂拓界",
      fullNameEn: "Kia Sportage",
      fullNameRu: "Kia Sportage",
      aliases: ["狮铂拓界", "起亚狮铂拓界", "sportage", "Sportage", "kia sportage"],
    },
    {
      brandZh: "现代",
      brandEn: "Hyundai",
      brandRu: "Hyundai",
      modelZh: "伊兰特",
      modelEn: "Elantra",
      modelRu: "Elantra",
      fullNameZh: "现代 伊兰特",
      fullNameEn: "Hyundai Elantra",
      fullNameRu: "Hyundai Elantra",
      aliases: ["伊兰特", "现代伊兰特", "elantra", "Elantra", "hyundai elantra"],
    },
    {
      brandZh: "现代",
      brandEn: "Hyundai",
      brandRu: "Hyundai",
      modelZh: "途胜",
      modelEn: "Tucson",
      modelRu: "Tucson",
      fullNameZh: "现代 途胜",
      fullNameEn: "Hyundai Tucson",
      fullNameRu: "Hyundai Tucson",
      aliases: ["途胜", "现代途胜", "tucson", "Tucson", "hyundai tucson"],
    },
    {
      brandZh: "理想",
      brandEn: "Li Auto",
      brandRu: "Li Auto",
      modelZh: "L6",
      modelEn: "L6",
      modelRu: "L6",
      fullNameZh: "理想 L6",
      fullNameEn: "Li Auto L6",
      fullNameRu: "Li Auto L6",
      aliases: ["理想l6", "理想 L6", "l6", "L6", "li auto l6"],
    },
    {
      brandZh: "理想",
      brandEn: "Li Auto",
      brandRu: "Li Auto",
      modelZh: "L7",
      modelEn: "L7",
      modelRu: "L7",
      fullNameZh: "理想 L7",
      fullNameEn: "Li Auto L7",
      fullNameRu: "Li Auto L7",
      aliases: ["理想l7", "理想 L7", "l7", "L7", "li auto l7"],
    },
    {
      brandZh: "理想",
      brandEn: "Li Auto",
      brandRu: "Li Auto",
      modelZh: "L8",
      modelEn: "L8",
      modelRu: "L8",
      fullNameZh: "理想 L8",
      fullNameEn: "Li Auto L8",
      fullNameRu: "Li Auto L8",
      aliases: ["理想l8", "理想 L8", "l8", "L8", "li auto l8"],
    },
    {
      brandZh: "理想",
      brandEn: "Li Auto",
      brandRu: "Li Auto",
      modelZh: "L9",
      modelEn: "L9",
      modelRu: "L9",
      fullNameZh: "理想 L9",
      fullNameEn: "Li Auto L9",
      fullNameRu: "Li Auto L9",
      aliases: ["理想l9", "理想 L9", "l9", "L9", "li auto l9"],
    },
    {
      brandZh: "比亚迪",
      brandEn: "BYD",
      brandRu: "BYD",
      modelZh: "宋PLUS",
      modelEn: "Song Plus",
      modelRu: "Song Plus",
      fullNameZh: "比亚迪 宋PLUS",
      fullNameEn: "BYD Song Plus",
      fullNameRu: "BYD Song Plus",
      aliases: ["宋plus", "宋PLUS", "比亚迪宋plus", "songplus", "Song Plus", "byd song plus"],
    },
    {
      brandZh: "比亚迪",
      brandEn: "BYD",
      brandRu: "BYD",
      modelZh: "秦PLUS",
      modelEn: "Qin Plus",
      modelRu: "Qin Plus",
      fullNameZh: "比亚迪 秦PLUS",
      fullNameEn: "BYD Qin Plus",
      fullNameRu: "BYD Qin Plus",
      aliases: ["秦plus", "秦PLUS", "比亚迪秦plus", "qinplus", "Qin Plus", "byd qin plus"],
    },
    {
      brandZh: "比亚迪",
      brandEn: "BYD",
      brandRu: "BYD",
      modelZh: "海豹",
      modelEn: "Seal",
      modelRu: "Seal",
      fullNameZh: "比亚迪 海豹",
      fullNameEn: "BYD Seal",
      fullNameRu: "BYD Seal",
      aliases: ["海豹", "比亚迪海豹", "seal", "Seal", "byd seal"],
    },
    {
      brandZh: "长安",
      brandEn: "Changan",
      brandRu: "Changan",
      modelZh: "CS75 PLUS",
      modelEn: "CS75 Plus",
      modelRu: "CS75 Plus",
      fullNameZh: "长安 CS75 PLUS",
      fullNameEn: "Changan CS75 Plus",
      fullNameRu: "Changan CS75 Plus",
      aliases: ["cs75plus", "CS75 PLUS", "CS75Plus", "长安cs75plus", "changan cs75 plus"],
    },
    {
      brandZh: "长安",
      brandEn: "Changan",
      brandRu: "Changan",
      modelZh: "UNI-K",
      modelEn: "UNI-K",
      modelRu: "UNI-K",
      fullNameZh: "长安 UNI-K",
      fullNameEn: "Changan UNI-K",
      fullNameRu: "Changan UNI-K",
      aliases: ["unik", "UNI-K", "UNI K", "长安unik", "changan uni-k"],
    },
    {
      brandZh: "长安",
      brandEn: "Changan",
      brandRu: "Changan",
      modelZh: "UNI-V",
      modelEn: "UNI-V",
      modelRu: "UNI-V",
      fullNameZh: "长安 UNI-V",
      fullNameEn: "Changan UNI-V",
      fullNameRu: "Changan UNI-V",
      aliases: ["univ", "UNI-V", "UNI V", "长安univ", "changan uni-v"],
    },
  ],
  vehicleStatusOptions: [
    { value: "inStock", zh: "现车", en: "In stock", ru: "В наличии" },
    { value: "availableToOrder", zh: "可订", en: "Available to order", ru: "Под заказ" },
    { value: "inTransit", zh: "在途", en: "In transit", ru: "В пути" },
    { value: "sold", zh: "已售", en: "Sold", ru: "Продано" },
  ],
  sellingPoints: {
    zh: "车况清晰，配置完整，适合出口交付。报价包含采购、物流、清关和服务执行。",
    ru: "Понятное состояние автомобиля, полная комплектация и готовность к экспортной поставке.",
    en: "Clear vehicle condition, complete specification and suitable export delivery.",
  },

  noteText: {
    zh: "报价为预估金额，最终价格以车辆确认、汇率、运输路线及清关要求为准。",
    ru: "Расчет предварительный; финальная сумма зависит от автомобиля, курса, маршрута и таможенных условий.",
    en: "This quotation is an estimate. Final pricing depends on vehicle confirmation, exchange rate, route and customs requirements.",
  },

  validityText: {
    zh: "报价有效期：24小时，最终价格以车辆确认、汇率、运输路线及清关条件为准。",
    ru: "Срок действия предложения: 24 часа. Финальная стоимость зависит от подтверждения автомобиля, курса, маршрута и таможенных условий.",
    en: "Quotation valid for 24 hours. Final cost depends on vehicle confirmation, exchange rate, route and customs conditions.",
  },

  text: {
    zh: {
      eyebrow: "中国汽车出口报价",
      subtitle: "您在中国的采购与出口执行团队",
      systemLabel: "报价系统",
      systemTitle: "中国汽车采购与出口报价系统",
      systemText: "用于客户车辆采购、出口执行、物流与交付的专业报价。",
    vehicleSectionTitle: "车辆信息",
    vehicleSectionHelp: "用于客户报价单的车辆基础信息。",
    modelLabel: "车型",
    vehicleNameLabel: "车辆名称",
    modelZhLabel: "中文车型名",
    modelRuLabel: "俄文车型名",
    trimLabel: "配置版本",
    autoModelPreviewTitle: "自动识别结果",
    autoModelZhLabel: "中文",
    autoModelEnLabel: "英文",
    autoModelRuLabel: "俄文",
    autoModelTrimLabel: "配置",
    autoModelMatchedText: "已匹配车型字典",
    autoModelUnmatchedText: "未匹配到车型，请手动确认",
      yearLabel: "年份",
      mileageLabel: "里程 km",
      colorLabel: "颜色",
      engineLabel: "发动机",
      transmissionLabel: "变速箱",
      horsepowerLabel: "马力",
      statusLabel: "车辆状态",
      destinationLabel: "交付城市",
      costSectionTitle: "报价成本",
      costSectionHelp: "选择城市后自动带入参考费用，所有金额均可手动调整。",
      imageSectionTitle: "车辆图片",
      imageSectionHelp: "可粘贴图片链接，或上传本地图片预览。",
      sourcePageLabel: "图片来源网页 URL",
      mainImageUrlLabel: "主图 URL",
      thumbnailUrlLabel: "缩略图 URL",
      imageUploadLabel: "本地上传",
      imagePlaceholderText: "暂无车辆图片",
      carPriceLabel: "车辆价格 USD",
      freightLabel: "物流费用 USD",
      clearanceLabel: "清关服务费 RUB",
      taxLabel: "税费 RUB",
      profitLabel: "服务费用 USD",
      clientProfitLabel: "采购与出口服务 USD",
      exchangeRateLabel: "实时汇率 USD-RUB",
      displayCurrencyLabel: "总价显示币种",
      taxModeLabel: "税费模式",
      taxModeManual: "手动输入",
      taxModePersonal: "俄罗斯个人购买（personal use）",
      vehicleAgeLabel: "车辆年限",
      engineDisplacementLabel: "发动机排量 cc",
      personalUseLabel: "个人购买",
      customsDutyLabel: "进口关税 RUB",
      recyclingFeeLabel: "回收费 RUB",
      estimatedTaxTotalLabel: "预估税费合计 RUB",
      finalLandedCostLabel: "最终落地成本 RUB",
      quoteCardTitle: "客户车辆报价",
      singleVehicleTitle: "单车详情卡",
      sellingPointsTitle: "核心卖点",
      priceStructureTitle: "费用明细",
      grandTotalLabel: "总费用",
      quoteRefLabel: "报价编号",
      dateLabel: "日期",
      selectedVehicleLabel: "报价车辆",
      deliveryCityLabel: "交付城市",
      clientTotalRubLabel: "客户总价 RUB",
      totalUsdLabel: "总价 USD",
      selectedTotalLabel: "总价",
      usdCostsLabel: "USD 成本",
      rubCostsLabel: "RUB 成本",
      rateLabel: "汇率",
      noteTitle: "报价说明",
      contactPersonLabel: "联系人",
      footerText: "中国汽车采购与出口执行",
      openCustomerQuoteLabel: "查看客户报价单",
      printQuoteLabel: "打印 / 导出 PDF",
      exportValidationTitle: "请先补全以下报价信息：",
      exportValidationImage: "至少 1 张车辆图片",
      exportValidationTotal: "总价必须大于 0",
    },
    ru: {
      eyebrow: "Экспорт автомобилей из Китая",
      subtitle: "Ваша команда по закупкам и поставкам в Китае",
      systemLabel: "Система расчета",
      systemTitle: "Система расчета стоимости закупки и экспорта автомобилей из Китая",
      systemText: "Профессиональное предложение для закупки, экспорта, логистики и поставки автомобиля клиенту.",
    vehicleSectionTitle: "Данные автомобиля",
    vehicleSectionHelp: "Основные данные автомобиля для клиентского предложения.",
    modelLabel: "Модель",
    vehicleNameLabel: "Название автомобиля",
    modelZhLabel: "Название модели на китайском",
    modelRuLabel: "Название модели на русском",
    trimLabel: "Версия комплектации",
    autoModelPreviewTitle: "Результат распознавания",
    autoModelZhLabel: "Кит.",
    autoModelEnLabel: "Англ.",
    autoModelRuLabel: "Рус.",
    autoModelTrimLabel: "Комплектация",
    autoModelMatchedText: "Модель найдена в словаре",
    autoModelUnmatchedText: "Модель не найдена, проверьте вручную",
      yearLabel: "Год выпуска",
      mileageLabel: "Пробег km",
      colorLabel: "Цвет",
      engineLabel: "Двигатель",
      transmissionLabel: "КПП",
      horsepowerLabel: "Л.с.",
      statusLabel: "Статус",
      destinationLabel: "Город доставки",
      costSectionTitle: "Расчет стоимости",
      costSectionHelp: "После выбора города подставляются ориентировочные расходы. Все суммы можно изменить вручную.",
      imageSectionTitle: "Фотографии автомобиля",
      imageSectionHelp: "Можно вставить ссылки на изображения или загрузить локальные файлы для предпросмотра.",
      sourcePageLabel: "URL страницы-источника",
      mainImageUrlLabel: "URL главного фото",
      thumbnailUrlLabel: "URL миниатюры",
      imageUploadLabel: "Локальная загрузка",
      imagePlaceholderText: "Фото автомобиля не добавлено",
      carPriceLabel: "Цена автомобиля USD",
      freightLabel: "Логистика USD",
      clearanceLabel: "Стоимость таможенного оформления RUB",
      taxLabel: "Налоги и сборы RUB",
      profitLabel: "Сервисная комиссия USD",
      clientProfitLabel: "Сервисное сопровождение USD",
      exchangeRateLabel: "Текущий курс USD-RUB",
      displayCurrencyLabel: "Валюта итога",
      taxModeLabel: "Режим расчета налогов",
      taxModeManual: "Ручной ввод",
      taxModePersonal: "Покупка физлицом / personal use",
      vehicleAgeLabel: "Возраст автомобиля",
      engineDisplacementLabel: "Объем двигателя cc",
      personalUseLabel: "Личное пользование",
      customsDutyLabel: "Пошлина RUB",
      recyclingFeeLabel: "Утильсбор RUB",
      estimatedTaxTotalLabel: "Оценка налогов RUB",
      finalLandedCostLabel: "Итоговая стоимость RUB",
      quoteCardTitle: "Коммерческое предложение",
      singleVehicleTitle: "Карточка автомобиля",
      sellingPointsTitle: "Преимущества",
      priceStructureTitle: "Структура цены",
      grandTotalLabel: "Общая стоимость",
      quoteRefLabel: "Номер предложения",
      dateLabel: "Дата",
      selectedVehicleLabel: "Автомобиль в расчете",
      deliveryCityLabel: "Город доставки",
      clientTotalRubLabel: "Итого к оплате RUB",
      totalUsdLabel: "Итого USD",
      selectedTotalLabel: "Итого",
      usdCostsLabel: "Расходы USD",
      rubCostsLabel: "Расходы RUB",
      rateLabel: "Курс",
      noteTitle: "Примечание",
      contactPersonLabel: "Контактное лицо",
      footerText: "Закупка и экспорт автомобилей из Китая",
      openCustomerQuoteLabel: "Открыть клиентское предложение",
      printQuoteLabel: "Печать / Экспорт PDF",
      exportValidationTitle: "Заполните данные перед экспортом:",
      exportValidationImage: "Минимум 1 фото автомобиля",
      exportValidationTotal: "Итоговая стоимость должна быть больше 0",
    },
    en: {
      eyebrow: "China Vehicle Export Quotation",
      subtitle: "Your sourcing and export execution team in China",
      systemLabel: "Quotation System",
      systemTitle: "China vehicle sourcing and export quotation system",
      systemText: "Professional quotation for vehicle sourcing, export handling, logistics and delivery.",
    vehicleSectionTitle: "Vehicle Details",
    vehicleSectionHelp: "Vehicle information used in the customer quotation.",
    modelLabel: "Model",
    vehicleNameLabel: "Vehicle name",
    modelZhLabel: "Chinese model name",
    modelRuLabel: "Russian model name",
    trimLabel: "Trim version",
    autoModelPreviewTitle: "Auto match result",
    autoModelZhLabel: "Chinese",
    autoModelEnLabel: "English",
    autoModelRuLabel: "Russian",
    autoModelTrimLabel: "Trim",
    autoModelMatchedText: "Matched in model dictionary",
    autoModelUnmatchedText: "Model not matched, please confirm manually",
      yearLabel: "Year",
      mileageLabel: "Mileage km",
      colorLabel: "Color",
      engineLabel: "Engine",
      transmissionLabel: "Transmission",
      horsepowerLabel: "Horsepower",
      statusLabel: "Status",
      destinationLabel: "Destination city",
      costSectionTitle: "Cost Calculation",
      costSectionHelp: "Destination presets fill reference costs automatically. Every amount remains editable.",
      imageSectionTitle: "Vehicle Images",
      imageSectionHelp: "Paste image links or upload local files for preview.",
      sourcePageLabel: "Source webpage URL",
      mainImageUrlLabel: "Main image URL",
      thumbnailUrlLabel: "Thumbnail URL",
      imageUploadLabel: "Local upload",
      imagePlaceholderText: "No vehicle image added",
      carPriceLabel: "Car price USD",
      freightLabel: "Freight USD",
      clearanceLabel: "Customs service fee RUB",
      taxLabel: "Tax RUB",
      profitLabel: "Service margin USD",
      clientProfitLabel: "Sourcing & export service USD",
      exchangeRateLabel: "Live exchange rate USD-RUB",
      displayCurrencyLabel: "Total display currency",
      taxModeLabel: "Tax mode",
      taxModeManual: "Manual input",
      taxModePersonal: "Russia personal use",
      vehicleAgeLabel: "Vehicle age",
      engineDisplacementLabel: "Engine displacement cc",
      personalUseLabel: "Personal use",
      customsDutyLabel: "Customs duty RUB",
      recyclingFeeLabel: "Utilization fee RUB",
      estimatedTaxTotalLabel: "Estimated tax total RUB",
      finalLandedCostLabel: "Final landed cost RUB",
      quoteCardTitle: "Customer Vehicle Quotation",
      singleVehicleTitle: "Single Vehicle Card",
      sellingPointsTitle: "Key Advantages",
      priceStructureTitle: "Price Structure",
      grandTotalLabel: "Total Cost",
      quoteRefLabel: "Quotation Ref.",
      dateLabel: "Date",
      selectedVehicleLabel: "Selected vehicle",
      deliveryCityLabel: "Delivery city",
      clientTotalRubLabel: "Client total in RUB",
      totalUsdLabel: "Total in USD",
      selectedTotalLabel: "Total",
      usdCostsLabel: "USD costs",
      rubCostsLabel: "RUB costs",
      rateLabel: "Rate",
      noteTitle: "Quotation note",
      contactPersonLabel: "Contact person",
      footerText: "China vehicle sourcing and export execution",
      openCustomerQuoteLabel: "Open Customer Quote",
      printQuoteLabel: "Print / Export PDF",
      exportValidationTitle: "Please complete the quote before export:",
      exportValidationImage: "At least 1 vehicle image",
      exportValidationTotal: "Total must be greater than 0",
    },
  },
};
const deliveryCityLegacyAliases = {
  Moscow: "莫斯科",
  Almaty: "阿拉木图",
  Minsk: "明斯克",
};
const deliveryCityEnglishLabels = {
  塔什干: "Tashkent",
  阿拉木图: "Almaty",
  比什凯克: "Bishkek",
  明斯克: "Minsk",
  巴库: "Baku",
  埃里温: "Yerevan",
  阿什哈巴德: "Ashgabat",
  莫斯科: "Moscow",
  圣彼得堡: "Saint Petersburg",
  喀山: "Kazan",
  图拉: "Tula",
  乌里扬诺夫斯克: "Ulyanovsk",
  萨马拉: "Samara",
  叶卡捷琳堡: "Yekaterinburg",
  新西伯利亚: "Novosibirsk",
  克拉斯诺达尔: "Krasnodar",
  弗拉基米尔: "Vladimir",
  下诺夫哥罗德: "Nizhny Novgorod",
  纳贝列日尼切尔尼: "Naberezhnye Chelny",
  奥伦堡: "Orenburg",
  布良斯克: "Bryansk",
  萨拉托夫: "Saratov",
  罗斯托夫: "Rostov-on-Don",
  斯摩棱斯克: "Smolensk",
  阿斯特拉罕: "Astrakhan",
  车里雅宾斯克: "Chelyabinsk",
  阔勒买中立区: "Kolbay Neutral Zone",
};
const destinationPresets = Object.fromEntries(
  businessSettings.deliveryCityPresets.map((preset) => [
    preset.zh,
    {
      ...preset,
      label: `${preset.zh} / ${preset.ru}`,
    },
  ]),
);
const maxPreviewThumbnails = 4;
const mainVehicleImageIndex = 0;

function applyStableBusinessText() {
  businessSettings.sellingPoints.zh = "车况清晰，配置完整，适合出口交付。报价包含采购、物流、清关和服务执行。";
  businessSettings.sellingPoints.ru = "Понятное состояние автомобиля, полная комплектация и готовность к экспортной поставке.";
  businessSettings.sellingPoints.en = "Clear vehicle condition, complete specification and suitable export delivery.";

  businessSettings.noteText.zh = "报价为预估金额，最终价格以车辆确认、汇率、运输路线及清关要求为准。";
  businessSettings.noteText.ru = "Расчет предварительный; финальная сумма зависит от автомобиля, курса, маршрута и таможенных условий.";
  businessSettings.noteText.en = "This quotation is an estimate. Final pricing depends on vehicle confirmation, exchange rate, route and customs requirements.";
  businessSettings.validityText.zh = "报价有效期：24小时，最终价格以车辆确认、汇率、运输路线及清关条件为准。";
  businessSettings.validityText.ru = "Срок действия предложения: 24 часа. Финальная стоимость зависит от подтверждения автомобиля, курса, маршрута и таможенных условий.";
  businessSettings.validityText.en = "Quotation valid for 24 hours. Final cost depends on vehicle confirmation, exchange rate, route and customs conditions.";

  businessSettings.text.zh = {
    documentTitle: "SHANHAI HUB 车辆报价",
    eyebrow: "中国汽车出口报价",
    subtitle: "您在中国的采购与出口执行团队",
    systemLabel: "报价系统",
    systemTitle: "中国汽车采购与出口报价系统",
    systemText: "用于客户车辆采购、出口执行、物流与交付的专业报价。",
    vehicleSectionTitle: "车辆信息",
    vehicleSectionHelp: "用于客户报价单的车辆基础信息。",
    modelLabel: "车型",
    vehicleNameLabel: "车辆名称",
    modelZhLabel: "中文车型名",
    modelRuLabel: "俄文车型名",
    trimLabel: "配置版本",
    autoModelPreviewTitle: "自动识别结果",
    autoModelZhLabel: "中文",
    autoModelEnLabel: "英文",
    autoModelRuLabel: "俄文",
    autoModelTrimLabel: "配置",
    autoModelMatchedText: "已匹配车型字典",
    autoModelUnmatchedText: "未匹配到车型，请手动确认",
    yearLabel: "年份",
    mileageLabel: "里程 km",
    colorLabel: "颜色",
    engineLabel: "发动机",
    transmissionLabel: "变速箱",
    horsepowerLabel: "马力",
    statusLabel: "车辆状态",
    destinationLabel: "交付城市",
    costSectionTitle: "报价成本",
    costSectionHelp: "选择城市后自动带入参考费用，所有金额均可手动调整。",
    imageSectionTitle: "车辆图片",
    imageSectionHelp: "可粘贴图片链接，或上传本地图片预览。",
    sourcePageLabel: "图片来源网页 URL",
    mainImageUrlLabel: "主图 URL",
    thumbnailUrlLabel: "缩略图 URL",
    imageUploadLabel: "本地上传",
    imagePlaceholderText: "暂无车辆图片",
    carPriceLabel: "车辆价格 USD",
    freightLabel: "物流费用 USD",
    clearanceLabel: "清关服务费 RUB",
    taxLabel: "税费 RUB",
    taxModeLabel: "税费模式",
    taxModeManual: "手动输入",
    taxModePersonal: "俄罗斯个人购买（personal use）",
    personalUseYes: "是",
    personalUseNo: "否",
    vehicleAgeLabel: "车辆年限",
    engineDisplacementLabel: "发动机排量 cc",
    personalUseLabel: "个人购买",
    customsDutyLabel: "进口关税 RUB",
    recyclingFeeLabel: "回收费 RUB",
    estimatedTaxTotalLabel: "预估税费合计 RUB",
    finalLandedCostLabel: "最终落地成本 RUB",
    profitLabel: "服务费用 USD",
    clientProfitLabel: "采购与出口服务 USD",
    exchangeRateLabel: "实时汇率 USD-RUB",
    displayCurrencyLabel: "总价显示币种",
    quoteCardTitle: "客户车辆报价",
    singleVehicleTitle: "单车详情卡",
    sellingPointsTitle: "核心卖点",
    priceStructureTitle: "费用明细",
    grandTotalLabel: "总费用",
    quoteRefLabel: "报价编号",
    dateLabel: "日期",
    selectedVehicleLabel: "报价车辆",
    deliveryCityLabel: "交付城市",
    clientTotalRubLabel: "客户总价 RUB",
    totalUsdLabel: "总价 USD",
    selectedTotalLabel: "总价",
    usdCostsLabel: "USD 成本",
    rubCostsLabel: "RUB 成本",
    rateLabel: "汇率",
    noteTitle: "报价说明",
    contactPersonLabel: "联系人",
    footerText: "中国汽车采购与出口执行",
    openCustomerQuoteLabel: "查看客户报价单",
    printQuoteLabel: "打印 / 导出 PDF",
    exportValidationTitle: "请先补全以下报价信息：",
    exportValidationImage: "至少 1 张车辆图片",
    exportValidationTotal: "总价必须大于 0",
  };

  businessSettings.text.ru = {
    documentTitle: "SHANHAI HUB Коммерческое предложение",
    eyebrow: "Экспорт автомобилей из Китая",
    subtitle: "Ваша команда по закупкам и поставкам в Китае",
    systemLabel: "Система расчета",
    systemTitle: "Система расчета стоимости закупки и экспорта автомобилей из Китая",
    systemText: "Профессиональное предложение для закупки, логистики, таможни и поставки автомобиля.",
    vehicleSectionTitle: "Данные автомобиля",
    vehicleSectionHelp: "Основные данные автомобиля для клиентского предложения.",
    modelLabel: "Модель",
    vehicleNameLabel: "Название автомобиля",
    modelZhLabel: "Название модели на китайском",
    modelRuLabel: "Название модели на русском",
    trimLabel: "Версия комплектации",
    autoModelPreviewTitle: "Результат распознавания",
    autoModelZhLabel: "Кит.",
    autoModelEnLabel: "Англ.",
    autoModelRuLabel: "Рус.",
    autoModelTrimLabel: "Комплектация",
    autoModelMatchedText: "Модель найдена в словаре",
    autoModelUnmatchedText: "Модель не найдена, проверьте вручную",
    yearLabel: "Год выпуска",
    mileageLabel: "Пробег km",
    colorLabel: "Цвет",
    engineLabel: "Двигатель",
    transmissionLabel: "КПП",
    horsepowerLabel: "Л.с.",
    statusLabel: "Статус",
    destinationLabel: "Город доставки",
    costSectionTitle: "Расчет стоимости",
    costSectionHelp: "После выбора города подставляются ориентировочные расходы. Все суммы можно изменить вручную.",
    imageSectionTitle: "Фотографии автомобиля",
    imageSectionHelp: "Можно вставить ссылки на изображения или загрузить локальные файлы для предпросмотра.",
    sourcePageLabel: "URL страницы-источника",
    mainImageUrlLabel: "URL главного фото",
    thumbnailUrlLabel: "URL миниатюры",
    imageUploadLabel: "Локальная загрузка",
    imagePlaceholderText: "Фото автомобиля не добавлено",
    carPriceLabel: "Цена автомобиля USD",
    freightLabel: "Логистика USD",
    taxLabel: "Налоги и сборы RUB",
    profitLabel: "Сервисная комиссия USD",
    clientProfitLabel: "Сервисное сопровождение USD",
    exchangeRateLabel: "Текущий курс USD-RUB",
    displayCurrencyLabel: "Валюта итога",
    taxModeLabel: "Режим расчета налогов",
    taxModeManual: "Ручной ввод",
    taxModePersonal: "Покупка физлицом / personal use",
    clearanceLabel: "Стоимость таможенного оформления RUB",
    vehicleAgeLabel: "Возраст автомобиля",
    engineDisplacementLabel: "Объем двигателя cc",
    personalUseLabel: "Личное пользование",
    personalUseYes: "Да",
    personalUseNo: "Нет",
    customsDutyLabel: "Пошлина RUB",
    recyclingFeeLabel: "Утильсбор RUB",
    estimatedTaxTotalLabel: "Оценка налогов RUB",
    finalLandedCostLabel: "Итоговая стоимость RUB",
    quoteCardTitle: "Коммерческое предложение",
    singleVehicleTitle: "Карточка автомобиля",
    sellingPointsTitle: "Преимущества",
    priceStructureTitle: "Структура цены",
    grandTotalLabel: "Общая стоимость",
    quoteRefLabel: "Номер предложения",
    dateLabel: "Дата",
    selectedVehicleLabel: "Автомобиль в расчете",
    deliveryCityLabel: "Город доставки",
    clientTotalRubLabel: "Итого к оплате RUB",
    totalUsdLabel: "Итого USD",
    selectedTotalLabel: "Итого",
    usdCostsLabel: "Расходы USD",
    rubCostsLabel: "Расходы RUB",
    rateLabel: "Курс",
    noteTitle: "Примечание",
    contactPersonLabel: "Контактное лицо",
    footerText: "Закупка и экспорт автомобилей из Китая",
    openCustomerQuoteLabel: "Открыть клиентское предложение",
    printQuoteLabel: "Печать / Экспорт PDF",
    exportValidationTitle: "Заполните данные перед экспортом:",
    exportValidationImage: "Минимум 1 фото автомобиля",
    exportValidationTotal: "Итоговая стоимость должна быть больше 0",
  };

  businessSettings.text.en = {
    documentTitle: "SHANHAI HUB Vehicle Quotation",
    eyebrow: "China Vehicle Export Quotation",
    subtitle: "Your sourcing and export execution team in China",
    systemLabel: "Quotation system",
    systemTitle: "China vehicle sourcing and export quotation system",
    systemText: "Professional quotation for vehicle sourcing, export execution, logistics and delivery.",
    vehicleSectionTitle: "Vehicle Details",
    vehicleSectionHelp: "Vehicle information used in the customer quotation.",
    modelLabel: "Model",
    vehicleNameLabel: "Vehicle name",
    modelZhLabel: "Chinese model name",
    modelRuLabel: "Russian model name",
    trimLabel: "Trim version",
    autoModelPreviewTitle: "Auto match result",
    autoModelZhLabel: "Chinese",
    autoModelEnLabel: "English",
    autoModelRuLabel: "Russian",
    autoModelTrimLabel: "Trim",
    autoModelMatchedText: "Matched in model dictionary",
    autoModelUnmatchedText: "Model not matched, please confirm manually",
    yearLabel: "Year",
    mileageLabel: "Mileage km",
    colorLabel: "Color",
    engineLabel: "Engine",
    transmissionLabel: "Transmission",
    horsepowerLabel: "Horsepower",
    statusLabel: "Status",
    destinationLabel: "Destination city",
    costSectionTitle: "Cost Calculation",
    costSectionHelp: "Destination presets fill reference costs automatically. Every amount remains editable.",
    imageSectionTitle: "Vehicle Images",
    imageSectionHelp: "Paste image links or upload local files for preview.",
    sourcePageLabel: "Source webpage URL",
    mainImageUrlLabel: "Main image URL",
    thumbnailUrlLabel: "Thumbnail URL",
    imageUploadLabel: "Local upload",
    imagePlaceholderText: "No vehicle image added",
    carPriceLabel: "Car price USD",
    freightLabel: "Freight USD",
    taxLabel: "Tax RUB",
    profitLabel: "Service margin USD",
    clientProfitLabel: "Sourcing & export service USD",
    exchangeRateLabel: "Live exchange rate USD-RUB",
    displayCurrencyLabel: "Total display currency",
    taxModeLabel: "Tax mode",
    taxModeManual: "Manual input",
    taxModePersonal: "Russia personal use",
    clearanceLabel: "Customs service fee RUB",
    vehicleAgeLabel: "Vehicle age",
    engineDisplacementLabel: "Engine displacement cc",
    personalUseLabel: "Personal use",
    personalUseYes: "Yes",
    personalUseNo: "No",
    customsDutyLabel: "Customs duty RUB",
    recyclingFeeLabel: "Utilization fee RUB",
    estimatedTaxTotalLabel: "Estimated tax total RUB",
    finalLandedCostLabel: "Final landed cost RUB",
    quoteCardTitle: "Customer Vehicle Quotation",
    singleVehicleTitle: "Single Vehicle Card",
    sellingPointsTitle: "Key Advantages",
    priceStructureTitle: "Price Structure",
    grandTotalLabel: "Total Cost",
    quoteRefLabel: "Quotation Ref.",
    dateLabel: "Date",
    selectedVehicleLabel: "Selected vehicle",
    deliveryCityLabel: "Delivery city",
    clientTotalRubLabel: "Client total in RUB",
    totalUsdLabel: "Total in USD",
    selectedTotalLabel: "Total",
    usdCostsLabel: "USD costs",
    rubCostsLabel: "RUB costs",
    rateLabel: "Rate",
    noteTitle: "Quotation note",
    contactPersonLabel: "Contact person",
    footerText: "China vehicle sourcing and export execution",
    openCustomerQuoteLabel: "Open Customer Quote",
    printQuoteLabel: "Print / Export PDF",
    exportValidationTitle: "Please complete the quote before export:",
    exportValidationImage: "At least 1 vehicle image",
    exportValidationTotal: "Total must be greater than 0",
  };
}

applyStableBusinessText();

const fields = {
  model: document.querySelector("#model"),
  modelZh: document.querySelector("#modelZh"),
  modelRu: document.querySelector("#modelRu"),
  trim: document.querySelector("#trim"),
  year: document.querySelector("#year"),
  mileage: document.querySelector("#mileage"),
  color: document.querySelector("#color"),
  engine: document.querySelector("#engine"),
  transmission: document.querySelector("#transmission"),
  horsepower: document.querySelector("#horsepower"),
  status: document.querySelector("#status"),
  destination: document.querySelector("#destination"),
  carPriceUsd: document.querySelector("#carPriceUsd"),
  freightUsd: document.querySelector("#freightUsd"),
  clearanceRub: document.querySelector("#clearanceRub"),
  taxRub: document.querySelector("#taxRub"),
  taxMode: document.querySelector("#taxMode"),
  vehicleAgeYears: document.querySelector("#vehicleAgeYears"),
  engineDisplacementCc: document.querySelector("#engineDisplacementCc"),
  personalUse: document.querySelector("#personalUse"),
  customsDutyRub: document.querySelector("#customsDutyRub"),
  recyclingFeeRub: document.querySelector("#recyclingFeeRub") || document.querySelector("#utilizationFeeRub"),
  utilizationFeeRub: document.querySelector("#utilizationFeeRub") || document.querySelector("#recyclingFeeRub"),
  estimatedTaxTotalRub: document.querySelector("#estimatedTaxTotalRub"),
  finalLandedCostRub: document.querySelector("#finalLandedCostRub"),
  profitUsd: document.querySelector("#profitUsd"),
  exchangeRate: document.querySelector("#exchangeRate"),
  sourcePageUrl: document.querySelector("#sourcePageUrl"),
  imageUrlInputs: document.querySelectorAll(".vehicle-image-url"),
  imageFileInputs: document.querySelectorAll(".vehicle-image-file"),
  openCustomerQuote: document.querySelector("#openCustomerQuote"),
  printQuote: document.querySelector("#printQuote"),
  displayCurrency: document.querySelector("#displayCurrency"),
};

const preview = {
  logoImage: document.querySelector("#logoImage"),
  logoInitials: document.querySelector("#logoInitials"),
  logoName: document.querySelector("#logoName"),
  logoTagline: document.querySelector("#logoTagline"),
  miniLogoText: document.querySelector("#miniLogoText"),
  modelZh: document.querySelector("#previewModelZh"),
  modelRu: document.querySelector("#previewModelRu"),
  trim: document.querySelector("#previewTrim"),
  destination: document.querySelector("#previewDestination"),
  specModel: document.querySelector("#specModel"),
  specYear: document.querySelector("#specYear"),
  specMileage: document.querySelector("#specMileage"),
  specEngine: document.querySelector("#specEngine"),
  specTransmission: document.querySelector("#specTransmission"),
  specColor: document.querySelector("#specColor"),
  specHorsepower: document.querySelector("#specHorsepower"),
  specStatus: document.querySelector("#specStatus"),
  totalRub: document.querySelector("#totalRub"),
  totalUsd: document.querySelector("#totalUsd"),
  totalUsdHero: document.querySelector("#totalUsdHero"),
  selectedTotalLabel: document.querySelector("#selectedTotalLabel"),
  usdSubtotal: document.querySelector("#usdSubtotal"),
  rubSubtotal: document.querySelector("#rubSubtotal"),
  priceCar: document.querySelector("#priceCar"),
  priceFreight: document.querySelector("#priceFreight"),
  priceProfit: document.querySelector("#priceProfit"),
  priceClearance: document.querySelector("#priceClearance"),
  priceCustomsDuty: document.querySelector("#priceCustomsDuty"),
  priceRecyclingFee: document.querySelector("#priceRecyclingFee"),
  priceTax: document.querySelector("#priceTax"),
  priceEstimatedTaxTotal: document.querySelector("#priceEstimatedTaxTotal"),
  priceGrandTotal: document.querySelector("#priceGrandTotal"),
  priceFinalLandedCost: document.querySelector("#priceFinalLandedCost"),
  rate: document.querySelector("#ratePreview"),
  quoteNumber: document.querySelector("#quoteNumber"),
  quoteDate: document.querySelector("#quoteDate"),
  noteText: document.querySelector("#noteText"),
  validityText: document.querySelector("#validityText"),
  mainVehicleImage: document.querySelector("#mainVehicleImageImg"),
  imagePlaceholder: document.querySelector("#imagePlaceholder"),
  quoteImageGrid: document.querySelector("#quoteImageGrid"),
  thumbnailStrip: document.querySelector("#thumbnailStrip"),
  sellingPointsText: document.querySelector("#sellingPointsText"),
  contactPerson: document.querySelector("#contactPerson"),
  wechat: document.querySelector("#wechat"),
  whatsapp: document.querySelector("#whatsapp"),
  telegram: document.querySelector("#telegram"),
  autoModelZh: document.querySelector("#autoModelZh"),
  autoModelEn: document.querySelector("#autoModelEn"),
  autoModelRu: document.querySelector("#autoModelRu"),
  autoModelTrim: document.querySelector("#autoModelTrim"),
  autoModelStatus: document.querySelector("#autoModelStatus"),
  manualModelFallback: document.querySelector("#manualModelFallback"),
};

let currentLanguage = businessSettings.defaultLanguage;
let activeImageIndex = 0;
let hasRestoredQuoteData = false;
const vehicleImageUrlSources = [...businessSettings.vehicleImages.imageUrls];
const vehicleImageLocalSources = Array(vehicleImageUrlSources.length).fill("");
const vehicleImageSourceNames = Array(vehicleImageUrlSources.length).fill("");
const pendingVehicleImageReads = Array(vehicleImageUrlSources.length).fill(Promise.resolve());
const quoteStorageKey = "shanhaiHubQuoteData";
const quoteStorageBackupKey = "shanhaiHubLatestQuoteData";

function getVehicleImageSource(index) {
  const localSource = vehicleImageLocalSources[index] || "";
  const urlSource = vehicleImageUrlSources[index] || "";

  return localSource || urlSource;
}

function getVehicleImageSlots() {
  return Array.from({ length: 5 }, (_, index) => ({
    index,
    src: getVehicleImageSource(index),
  }));
}

function getMainVehicleImageSource() {
  return getVehicleImageSlots()[mainVehicleImageIndex]?.src || "";
}

function normalizeDeliveryCityValue(value) {
  return deliveryCityLegacyAliases[value] || value;
}

function getDeliveryCityPreset(value) {
  const normalizedValue = normalizeDeliveryCityValue(value);

  return destinationPresets[normalizedValue]
    || businessSettings.deliveryCityPresets.find((preset) => preset.ru === value)
    || null;
}

function getDeliveryCityLabel(preset) {
  if (!preset) {
    return "";
  }

  if (currentLanguage === "ru") {
    return preset.ru;
  }

  if (currentLanguage === "en") {
    return deliveryCityEnglishLabels[preset.zh] || preset.ru || preset.zh;
  }

  return preset.zh;
}

function getOptionByValue(options, value) {
  const normalizedValue = String(value || "").trim().toLowerCase();

  return options.find((option) => {
    return [option.value, option.zh, option.en, option.ru]
      .some((name) => String(name || "").trim().toLowerCase() === normalizedValue);
  }) || null;
}

function getTrilingualOptionLabel(option) {
  return option ? `${option.zh} / ${option.en} / ${option.ru}` : "";
}

function getStatusDisplay(value) {
  const option = getOptionByValue(businessSettings.vehicleStatusOptions, value);

  if (!option) {
    return value || "-";
  }

  if (currentLanguage === "ru") {
    return option.ru;
  }

  if (currentLanguage === "en") {
    return option.en;
  }

  return option.zh;
}

function formatHorsepower(value) {
  const text = String(value || "").trim();

  if (!text) {
    return "-";
  }

  return /\bhp\b/i.test(text) ? text : `${text} hp`;
}

function getSelectedDisplayCurrency() {
  if (fields.displayCurrency) {
    return fields.displayCurrency.value || "RUB";
  }

  if (currentLanguage === "zh") {
    return "CNY";
  }

  if (currentLanguage === "en") {
    return "USD";
  }

  return "RUB";
}

function getSecondaryDisplayCurrencies(primaryCurrency) {
  return ["RUB", "USD", "CNY"].filter((currency) => currency !== primaryCurrency);
}

function getTotalByCurrency(result, currency) {
  if (currency === "USD") {
    return result.totalUsd;
  }

  if (currency === "CNY") {
    return result.totalUsd * businessSettings.exchangeRate.usdToCny;
  }

  return result.totalRub;
}

function formatCurrencyAmount(value, currency) {
  if (currency === "USD") {
    return formatUsd(value);
  }

  if (currency === "CNY") {
    return `¥${Math.round(value).toLocaleString("en-US")}`;
  }

  return formatRub(value);
}

function formatSecondaryTotals(result, primaryCurrency) {
  return getSecondaryDisplayCurrencies(primaryCurrency)
    .map((currency) => formatCurrencyAmount(getTotalByCurrency(result, currency), currency))
    .join(" / ");
}

function numberFromInput(input) {
  return Number(input.value) || 0;
}

function clampNumber(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function validateMoneyInput(input, rule) {
  const originalValue = Number(input.value);

  if (!Number.isFinite(originalValue)) {
    input.value = rule.min;
    input.title = `Value reset to minimum ${rule.min}`;
    return;
  }

  const nextValue = clampNumber(originalValue, rule.min, rule.max);

  if (nextValue !== originalValue) {
    input.value = nextValue;
    input.title = `Adjusted to allowed range: ${rule.min} - ${rule.max}`;
  } else {
    input.title = "";
  }
}

function validateAllMoneyInputs() {
  Object.entries(businessSettings.validation).forEach(([key, rule]) => {
    if (fields[key]) {
      validateMoneyInput(fields[key], rule);
    }
  });
}

function formatUsd(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

function formatRub(amount) {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  }).format(amount);
}

function calculateRussiaPersonalUseTax({ customsValueUsd, ageYears, displacementCc, usdRub }) {
  const rules = businessSettings.taxRules;
  const safeUsdRub = Number(usdRub) > 0 ? Number(usdRub) : businessSettings.exchangeRate.usdToRub;
  const eurRub = safeUsdRub / rules.usdToEur;
  const customsValueEur = Math.max(Number(customsValueUsd) || 0, 0) * rules.usdToEur;
  const safeDisplacementCc = Math.max(Number(displacementCc) || 0, 0);
  const safeAgeYears = Math.max(Number(ageYears) || 0, 0);
  let importDutyEur = 0;

  if (safeAgeYears < 3) {
    const bracket = rules.passengerCarPersonalUse.under3Years.find((item) => customsValueEur <= item.maxCustomsValueEur);
    importDutyEur = Math.max(customsValueEur * bracket.valuePercent, safeDisplacementCc * bracket.minEurPerCc);
  } else {
    const bracket = rules.passengerCarPersonalUse.over3Years.find((item) => safeDisplacementCc <= item.maxDisplacementCc);
    importDutyEur = safeDisplacementCc * bracket.eurPerCc;
  }

  const customsDutyRub = Math.round(importDutyEur * eurRub);
  const recyclingFeeRub = Math.round(rules.utilizationFee.personalUseRub);
  const estimatedTaxTotalRub = customsDutyRub + recyclingFeeRub;

  return {
    customsDutyRub,
    recyclingFeeRub,
    estimatedTaxTotalRub,
    note: rules.personalUseNote,
  };
}

function isRussiaPersonalUseMode() {
  const value = String(fields.taxMode?.value || "").toLowerCase();
  return value === "rupersonaluse" || value.includes("personal");
}

function isPersonalUseSelected() {
  const value = String(fields.personalUse?.value || "yes").toLowerCase();
  return value === "yes" || value === "true" || value === "1";
}

function updateTaxOutputs({ customsDutyRub = 0, recyclingFeeRub = 0, estimatedTaxTotalRub = 0, finalLandedCostRub = 0 }) {
  if (fields.customsDutyRub) {
    fields.customsDutyRub.value = Math.round(customsDutyRub).toLocaleString("ru-RU");
  }
  if (fields.recyclingFeeRub) {
    fields.recyclingFeeRub.value = Math.round(recyclingFeeRub).toLocaleString("ru-RU");
  }
  if (fields.utilizationFeeRub) {
    fields.utilizationFeeRub.value = Math.round(recyclingFeeRub).toLocaleString("ru-RU");
  }
  if (fields.estimatedTaxTotalRub) {
    fields.estimatedTaxTotalRub.value = Math.round(estimatedTaxTotalRub).toLocaleString("ru-RU");
  }
  if (fields.finalLandedCostRub) {
    fields.finalLandedCostRub.value = Math.round(finalLandedCostRub).toLocaleString("ru-RU");
  }
}

function setElementHidden(element, hidden) {
  if (element) {
    element.hidden = hidden;
  }
}

function setPriceRowHidden(valueElement, hidden) {
  const row = valueElement?.closest(".price-row, .pdf-price-grid > div");
  setElementHidden(row, hidden);
}

function updateTaxDisplayMode(mode) {
  const isPersonalUseMode = mode === "ruPersonalUse";
  const taxInputWrapper = fields.taxRub?.closest("label");
  const autoTaxWrappers = [
    fields.customsDutyRub,
    fields.recyclingFeeRub,
    fields.estimatedTaxTotalRub,
    fields.finalLandedCostRub,
  ].map((field) => field?.closest("label"));

  if (fields.taxRub) {
    fields.taxRub.readOnly = isPersonalUseMode;
    fields.taxRub.title = isPersonalUseMode
      ? "Synced from estimated personal-use tax total"
      : "";
  }

  setElementHidden(taxInputWrapper, false);
  autoTaxWrappers.forEach((wrapper) => setElementHidden(wrapper, !isPersonalUseMode));
  setPriceRowHidden(preview.priceTax, isPersonalUseMode);
  setPriceRowHidden(preview.priceCustomsDuty, !isPersonalUseMode);
  setPriceRowHidden(preview.priceRecyclingFee, !isPersonalUseMode);
  setPriceRowHidden(preview.priceEstimatedTaxTotal, !isPersonalUseMode);
  setPriceRowHidden(preview.priceGrandTotal, isPersonalUseMode);
  setPriceRowHidden(preview.priceFinalLandedCost, !isPersonalUseMode);
}

function calculateQuoteResult() {
  const carPriceUsd = numberFromInput(fields.carPriceUsd);
  const freightUsd = numberFromInput(fields.freightUsd);
  const profitUsd = numberFromInput(fields.profitUsd);
  const clearanceRub = numberFromInput(fields.clearanceRub);
  const exchangeRate = numberFromInput(fields.exchangeRate);
  const vehicleAgeYears = numberFromInput(fields.vehicleAgeYears);
  const engineDisplacementCc = numberFromInput(fields.engineDisplacementCc);
  let taxRub = numberFromInput(fields.taxRub);
  let customsDutyRub = 0;
  let recyclingFeeRub = 0;
  let estimatedTaxTotalRub = taxRub;
  const mode = isRussiaPersonalUseMode() ? "ruPersonalUse" : "manual";
  let taxEstimate = null;

  if (mode === "ruPersonalUse") {
    taxEstimate = calculateRussiaPersonalUseTax({
      customsValueUsd: carPriceUsd,
      ageYears: vehicleAgeYears,
      displacementCc: engineDisplacementCc,
      usdRub: exchangeRate,
    });
    customsDutyRub = taxEstimate.customsDutyRub;
    recyclingFeeRub = taxEstimate.recyclingFeeRub;
    estimatedTaxTotalRub = customsDutyRub + recyclingFeeRub;
    taxRub = estimatedTaxTotalRub;
    if (fields.taxRub) {
      fields.taxRub.value = Math.round(taxRub);
    }
  }

  const usdSubtotal = carPriceUsd + freightUsd + profitUsd;
  const rubSubtotal = clearanceRub + taxRub;
  const totalRub = usdSubtotal * exchangeRate + rubSubtotal;
  const totalUsd = exchangeRate > 0 ? totalRub / exchangeRate : 0;
  const result = {
    mode,
    carPriceUsd,
    freightUsd,
    profitUsd,
    clearanceRub,
    taxRub,
    exchangeRate,
    customsDutyRub,
    recyclingFeeRub,
    estimatedTaxTotalRub,
    usdSubtotal,
    rubSubtotal,
    totalRub,
    totalUsd,
  };

  return result;
}

function setPreviewText(element, value) {
  if (element) {
    element.textContent = value;
  }
}

function uniqueNonEmpty(values) {
  return values
    .map((value) => String(value || "").trim())
    .filter(Boolean)
    .filter((value, index, list) => list.indexOf(value) === index);
}

function normalizeModelName(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[·._\-＋+]/g, "")
    .replace(/\s+/g, "");
}

function getModelDictionaryNames(entry) {
  return uniqueNonEmpty([
    entry.fullNameZh,
    entry.fullNameEn,
    entry.fullNameRu,
    `${entry.brandZh} ${entry.modelZh}`,
    `${entry.brandEn} ${entry.modelEn}`,
    `${entry.brandRu} ${entry.modelRu}`,
  ]);
}

function getModelDictionaryModelAliases(entry) {
  return uniqueNonEmpty([
    entry.modelZh,
    entry.modelEn,
    entry.modelRu,
    ...(entry.aliases || []),
  ]);
}

function findModelDictionaryMatch(value) {
  const normalizedValue = normalizeModelName(value);

  if (!normalizedValue) {
    return null;
  }

  const fullNameMatch = businessSettings.modelDictionary.find((entry) => {
    return getModelDictionaryNames(entry).some((name) => normalizeModelName(name) === normalizedValue);
  });

  if (fullNameMatch) {
    return fullNameMatch;
  }

  const modelOnlyMatches = businessSettings.modelDictionary.filter((entry) => {
    return getModelDictionaryModelAliases(entry).some((name) => normalizeModelName(name) === normalizedValue);
  });

  return modelOnlyMatches.length === 1 ? modelOnlyMatches[0] : null;
}

function applyModelDictionaryMatch(sourceField) {
  const match = findModelDictionaryMatch(sourceField.value);

  if (!match) {
    sourceField.title = sourceField === fields.modelZh
      ? "未匹配到车型，请手动确认"
      : "车型字典未匹配，请手动填写";

    if (sourceField === fields.modelZh) {
      delete fields.modelZh.dataset.brandZh;
      delete fields.modelZh.dataset.autoFilled;
      delete fields.model.dataset.brandEn;
      delete fields.modelRu.dataset.brandRu;

      fields.model.value = "";
      fields.modelRu.value = "";
      delete fields.model.dataset.autoFilled;
      delete fields.modelRu.dataset.autoFilled;
    }

    updateQuote();
    saveQuoteDataForCustomerPage();
    return false;
  }

  sourceField.title = "";
  fields.modelZh.value = match.fullNameZh;
  fields.model.value = match.fullNameEn;
  fields.modelRu.value = match.fullNameRu;
  fields.modelZh.dataset.brandZh = match.brandZh;
  fields.model.dataset.brandEn = match.brandEn;
  fields.modelRu.dataset.brandRu = match.brandRu;
  fields.modelZh.dataset.autoFilled = "true";
  fields.model.dataset.autoFilled = "true";
  fields.modelRu.dataset.autoFilled = "true";
  updateQuote();
  saveQuoteDataForCustomerPage();
  return true;
}

function getVehicleModelNames() {
  const modelEn = fields.model.value.trim();
  const modelZh = fields.modelZh.value.trim();
  const modelRu = fields.modelRu.value.trim();
  const namesByLanguage = {
    zh: modelZh || modelEn || modelRu,
    en: modelEn || modelZh || modelRu,
    ru: modelRu || modelEn || modelZh,
  };
  const primary = namesByLanguage[currentLanguage] || modelZh || modelEn || modelRu || "Vehicle model";
  const secondaryCandidates = currentLanguage === "zh"
    ? [modelEn, modelRu]
    : currentLanguage === "ru"
      ? [modelZh, modelEn]
      : [modelZh, modelRu];
  const secondary = secondaryCandidates.find((name) => name && name !== primary) || "";

  return {
    primary,
    secondary,
    finalName: primary,
  };
}

function updateAutoModelPreview(isMatched = Boolean(fields.model.value.trim() && fields.modelRu.value.trim())) {
  const text = businessSettings.text[currentLanguage] || businessSettings.text.zh;

  setPreviewText(preview.autoModelZh, fields.modelZh.value.trim() || "-");
  setPreviewText(preview.autoModelEn, fields.model.value.trim() || "-");
  setPreviewText(preview.autoModelRu, fields.modelRu.value.trim() || "-");
  setPreviewText(preview.autoModelTrim, fields.trim.value.trim() || "-");
  setPreviewText(preview.autoModelStatus, isMatched ? text.autoModelMatchedText : text.autoModelUnmatchedText);

  if (preview.manualModelFallback) {
    preview.manualModelFallback.hidden = isMatched;
  }
}

function renderQuote(result) {
  updateTaxDisplayMode(result.mode);

  updateTaxOutputs({
    customsDutyRub: result.customsDutyRub,
    recyclingFeeRub: result.recyclingFeeRub,
    estimatedTaxTotalRub: result.estimatedTaxTotalRub,
    finalLandedCostRub: result.totalRub,
  });

  const selectedDestination = getDeliveryCityPreset(fields.destination.value);
  const destinationLabel = selectedDestination ? getDeliveryCityLabel(selectedDestination) : fields.destination.value;
  const deliveryCityLabel = businessSettings.text[currentLanguage].deliveryCityLabel;

  const mileageText = `${Number(numberFromInput(fields.mileage)).toLocaleString("en-US")} km`;
  const vehicleModel = getVehicleModelNames();
  updateAutoModelPreview();

  setPreviewText(preview.modelZh, vehicleModel.primary);
  setPreviewText(preview.modelRu, vehicleModel.secondary);
  setPreviewText(preview.trim, fields.trim.value || "");
  setPreviewText(preview.destination, `${deliveryCityLabel}: ${destinationLabel}`);
  setPreviewText(preview.specModel, vehicleModel.finalName);
  setPreviewText(preview.specYear, fields.year.value || "-");
  setPreviewText(preview.specMileage, mileageText);
  setPreviewText(preview.specEngine, fields.engine.value || "-");
  setPreviewText(preview.specTransmission, fields.transmission.value || "-");
  setPreviewText(preview.specColor, fields.color.value || "-");
  setPreviewText(preview.specHorsepower, formatHorsepower(fields.horsepower.value));
  setPreviewText(preview.specStatus, getStatusDisplay(fields.status.value));
  if (fields.displayCurrency) {
    const displayCurrency = getSelectedDisplayCurrency();
    const displayTotal = getTotalByCurrency(result, displayCurrency);
    setPreviewText(preview.totalRub, formatCurrencyAmount(displayTotal, displayCurrency));
    setPreviewText(preview.totalUsd, formatCurrencyAmount(displayTotal, displayCurrency));
    setPreviewText(preview.totalUsdHero, formatSecondaryTotals(result, displayCurrency));
    setPreviewText(preview.selectedTotalLabel, `${businessSettings.text[currentLanguage].selectedTotalLabel} ${displayCurrency}`);
  } else {
    const displayCurrency = getSelectedDisplayCurrency();
    const displayTotal = getTotalByCurrency(result, displayCurrency);
    setPreviewText(preview.totalRub, formatCurrencyAmount(displayTotal, displayCurrency));
    setPreviewText(preview.totalUsd, formatCurrencyAmount(displayTotal, displayCurrency));
    setPreviewText(preview.totalUsdHero, formatSecondaryTotals(result, displayCurrency));
  }
  setPreviewText(preview.usdSubtotal, formatUsd(result.usdSubtotal));
  setPreviewText(preview.rubSubtotal, formatRub(result.rubSubtotal));
  setPreviewText(preview.priceCar, formatUsd(result.carPriceUsd));
  setPreviewText(preview.priceFreight, formatUsd(result.freightUsd));
  setPreviewText(preview.priceProfit, formatUsd(result.profitUsd));
  setPreviewText(preview.priceClearance, formatRub(result.clearanceRub));
  setPreviewText(preview.priceCustomsDuty, formatRub(result.customsDutyRub));
  setPreviewText(preview.priceRecyclingFee, formatRub(result.recyclingFeeRub));
  setPreviewText(preview.priceTax, formatRub(result.taxRub));
  setPreviewText(preview.priceEstimatedTaxTotal, formatRub(result.estimatedTaxTotalRub));
  setPreviewText(preview.priceGrandTotal, formatRub(result.totalRub));
  setPreviewText(preview.priceFinalLandedCost, formatRub(result.totalRub));
  setPreviewText(preview.rate, result.exchangeRate.toLocaleString("en-US", {
    maximumFractionDigits: 4,
  }));
}

function updateQuote() {
  validateAllMoneyInputs();
  renderQuote(calculateQuoteResult());
}

function forceRecalculateQuote() {
  updateQuote();
  saveQuoteDataForCustomerPage();
}

function getAvailableVehicleImages() {
  return getVehicleImageSlots().filter((image) => image.src);
}

function renderQuoteImageGrid() {
  if (!preview.quoteImageGrid) {
    return;
  }

  const imageSlots = getVehicleImageSlots();
  preview.quoteImageGrid.innerHTML = "";

  imageSlots.forEach((image) => {
    const slot = document.createElement("div");
    slot.className = image.src ? "quote-image-slot" : "quote-image-slot empty";

    if (image.src) {
      const img = document.createElement("img");
      img.src = image.src;
      img.alt = `Vehicle image ${image.index + 1}`;
      slot.appendChild(img);
    } else {
      slot.innerHTML = `<span>${image.index + 1}</span>`;
    }

    preview.quoteImageGrid.appendChild(slot);
  });

  preview.quoteImageGrid.hidden = false;
}

function setMainVehicleImage(index) {
  activeImageIndex = index;
  const src = index === mainVehicleImageIndex ? getMainVehicleImageSource() : getVehicleImageSource(index);

  if (src) {
    preview.mainVehicleImage.src = src;
    preview.mainVehicleImage.hidden = false;
    preview.imagePlaceholder.hidden = true;
  } else {
    preview.mainVehicleImage.removeAttribute("src");
    preview.mainVehicleImage.hidden = true;
    preview.imagePlaceholder.hidden = false;
  }

  renderVehicleThumbnails();
  renderQuoteImageGrid();
}

function renderVehicleThumbnails() {
  const images = getAvailableVehicleImages().slice(0, maxPreviewThumbnails);
  preview.thumbnailStrip.innerHTML = "";

  if (!images.length) {
    return;
  }

  images.forEach((image) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "thumbnail-button";
    button.classList.toggle("active", image.index === activeImageIndex);
    button.addEventListener("click", () => setMainVehicleImage(image.index));

    const img = document.createElement("img");
    img.src = image.src;
    img.alt = `Vehicle image ${image.index + 1}`;

    button.appendChild(img);
    preview.thumbnailStrip.appendChild(button);
  });
}

function updateVehicleImage(index, src, sourceType = "url", sourceName = "") {
  vehicleImageSourceNames[index] = sourceName || (sourceType === "url" ? src.trim() : vehicleImageSourceNames[index]);

  if (sourceType === "local") {
    vehicleImageLocalSources[index] = src;
  } else {
    vehicleImageUrlSources[index] = src.trim();
  }

  if (index === mainVehicleImageIndex || activeImageIndex === mainVehicleImageIndex) {
    setMainVehicleImage(mainVehicleImageIndex);
    return;
  }

  renderVehicleThumbnails();
  renderQuoteImageGrid();
}

function getQuoteDataForTransfer() {
  return {
    fields: {
      model: fields.model.value,
      modelZh: fields.modelZh.value,
      modelRu: fields.modelRu.value,
      trim: fields.trim.value,
      year: fields.year.value,
      mileage: fields.mileage.value,
      color: fields.color.value,
      engine: fields.engine.value,
      transmission: fields.transmission.value,
      horsepower: fields.horsepower.value,
      status: fields.status.value,
      destination: fields.destination.value,
      carPriceUsd: fields.carPriceUsd.value,
      freightUsd: fields.freightUsd.value,
      clearanceRub: fields.clearanceRub.value,
      taxRub: fields.taxRub.value,
      taxMode: fields.taxMode ? fields.taxMode.value : "manual",
      vehicleAgeYears: fields.vehicleAgeYears ? fields.vehicleAgeYears.value : "",
      engineDisplacementCc: fields.engineDisplacementCc ? fields.engineDisplacementCc.value : "",
      personalUse: fields.personalUse ? fields.personalUse.value : "yes",
      customsDutyRub: fields.customsDutyRub ? fields.customsDutyRub.value : "",
      recyclingFeeRub: fields.recyclingFeeRub ? fields.recyclingFeeRub.value : "",
      estimatedTaxTotalRub: fields.estimatedTaxTotalRub ? fields.estimatedTaxTotalRub.value : "",
      finalLandedCostRub: fields.finalLandedCostRub ? fields.finalLandedCostRub.value : "",
      profitUsd: fields.profitUsd.value,
      exchangeRate: fields.exchangeRate.value,
      sourcePageUrl: fields.sourcePageUrl.value,
      displayCurrency: fields.displayCurrency ? getSelectedDisplayCurrency() : "",
    },
    imageSlots: getVehicleImageSlots().map((image) => ({
      index: image.index,
      src: image.src,
      url: vehicleImageUrlSources[image.index] || "",
      local: vehicleImageLocalSources[image.index] || "",
      name: vehicleImageSourceNames[image.index] || "",
    })),
    imageUrls: vehicleImageUrlSources.slice(0, 5),
    localImages: vehicleImageLocalSources.slice(0, 5),
    imageNames: vehicleImageSourceNames.slice(0, 5),
    language: currentLanguage,
  };
}

function saveQuoteDataForCustomerPage() {
  const quoteData = JSON.stringify(getQuoteDataForTransfer());

  try {
    sessionStorage.setItem(quoteStorageKey, quoteData);
  } catch (error) {
    console.info("Quote data could not be saved to session storage.", error);
  }
}

function getSavedQuoteData() {
  const saved = sessionStorage.getItem(quoteStorageKey);

  if (!saved) {
    return null;
  }

  try {
    return JSON.parse(saved);
  } catch (error) {
    console.info("Saved quote data could not be read.", error);
    return null;
  }
}

function getExportValidationLabels() {
  const text = businessSettings.text[currentLanguage] || businessSettings.text.zh;

  return {
    vehicleName: text.vehicleNameLabel,
    trim: text.trimLabel,
    year: text.yearLabel,
    color: text.colorLabel,
    destination: text.destinationLabel,
    carPriceUsd: text.carPriceLabel,
    freightUsd: text.freightLabel,
    exchangeRate: text.exchangeRateLabel,
    total: text.exportValidationTotal,
    image: text.exportValidationImage,
  };
}

function validateQuoteBeforeExport() {
  updateQuote();

  const result = calculateQuoteResult();
  const labels = getExportValidationLabels();
  const missing = [];
  const hasText = (field) => Boolean(field && String(field.value || "").trim());
  const hasPositiveNumber = (field) => hasText(field) && numberFromInput(field) > 0;

  if (!hasText(fields.modelZh)) missing.push(labels.vehicleName);
  if (!hasText(fields.trim)) missing.push(labels.trim);
  if (!hasText(fields.year)) missing.push(labels.year);
  if (!hasText(fields.color)) missing.push(labels.color);
  if (!hasText(fields.destination)) missing.push(labels.destination);
  if (!hasPositiveNumber(fields.carPriceUsd)) missing.push(labels.carPriceUsd);
  if (!hasText(fields.freightUsd)) missing.push(labels.freightUsd);
  if (!hasPositiveNumber(fields.exchangeRate)) missing.push(labels.exchangeRate);
  if (!Number.isFinite(result.totalRub) || result.totalRub <= 0) missing.push(labels.total);
  if (!getAvailableVehicleImages().length) missing.push(labels.image);

  if (!missing.length) {
    return true;
  }

  const text = businessSettings.text[currentLanguage] || businessSettings.text.zh;
  window.alert(`${text.exportValidationTitle}\n- ${missing.join("\n- ")}`);
  return false;
}

async function openQuotePage(pagePath) {
  await Promise.allSettled(pendingVehicleImageReads);

  if (!validateQuoteBeforeExport()) {
    return;
  }

  saveQuoteDataForCustomerPage();
  window.location.assign(pagePath);
}

function loadQuoteDataForPage() {
  const data = getSavedQuoteData();

  if (data) {
    Object.entries(data.fields || {}).forEach(([key, value]) => {
      if (fields[key]) {
        const normalizedValue = key === "destination" ? normalizeDeliveryCityValue(value) : value;

        if (fields[key].tagName === "SELECT" && !fields[key].options.length) {
          fields[key].dataset.pendingValue = normalizedValue;
        }

        fields[key].value = normalizedValue;
      }
    });

    const savedImageSlots = Array.isArray(data.imageSlots) ? data.imageSlots.slice(0, 5) : [];

    savedImageSlots.forEach((image, index) => {
      const slotIndex = Number.isFinite(Number(image.index)) ? Number(image.index) : index;
      const localSource = image.local || (String(image.src || "").startsWith("data:image/") ? image.src : "");
      const urlSource = image.url || (!String(image.src || "").startsWith("data:image/") ? image.src : "");

      vehicleImageLocalSources[slotIndex] = localSource || "";
      vehicleImageUrlSources[slotIndex] = urlSource || "";
      vehicleImageSourceNames[slotIndex] = image.name || urlSource || vehicleImageSourceNames[slotIndex] || "";

      if (fields.imageUrlInputs[slotIndex]) {
        fields.imageUrlInputs[slotIndex].value = urlSource || "";
      }
    });

    if (!savedImageSlots.length) {
      (data.imageUrls || []).slice(0, 5).forEach((src, index) => {
        vehicleImageUrlSources[index] = src || "";
        vehicleImageSourceNames[index] = vehicleImageSourceNames[index] || src || "";

        if (fields.imageUrlInputs[index]) {
          fields.imageUrlInputs[index].value = src || "";
        }
      });

      (data.imageNames || []).slice(0, 5).forEach((name, index) => {
        vehicleImageSourceNames[index] = name || vehicleImageSourceNames[index] || "";
      });

      (data.localImages || []).slice(0, 5).forEach((src, index) => {
        vehicleImageLocalSources[index] = src || "";
      });
    }

    if (data.language && businessSettings.text[data.language]) {
      currentLanguage = data.language;
    }

    hasRestoredQuoteData = true;
  }
}

function fillDeliveryCityOptions() {
  const currentValue = normalizeDeliveryCityValue(fields.destination.value);
  fields.destination.innerHTML = "";

  businessSettings.deliveryCityPresets.forEach((preset) => {
    const option = document.createElement("option");
    option.value = preset.zh;
    option.textContent = getDeliveryCityLabel(preset);
    fields.destination.appendChild(option);
  });

  fields.destination.value = destinationPresets[currentValue]
    ? currentValue
    : businessSettings.deliveryCityPresets[0]?.zh || "";
}

function applyDestinationPreset() {
  const preset = getDeliveryCityPreset(fields.destination.value);

  if (!preset) {
    return;
  }

  fields.destination.value = preset.zh;
  fields.freightUsd.value = preset.freightUsd;

  if (preset.clearanceRub > 0 || fields.clearanceRub.value.trim() === "") {
    fields.clearanceRub.value = preset.clearanceRub;
  }

  updateQuote();
}

function fillSimpleSelectOptions(select, options, getLabel) {
  if (!select) {
    return;
  }

  select.innerHTML = "";

  options.forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.value = option.value;
    optionElement.textContent = getLabel(option);
    select.appendChild(optionElement);
  });
}

function updateLocalizedControls() {
  const text = businessSettings.text[currentLanguage];
  const selectedCity = fields.destination.value;
  const selectedStatus = fields.status.dataset.pendingValue || fields.status.value || businessSettings.vehicleStatusOptions[0]?.value || "";

  fillDeliveryCityOptions();
  fields.destination.value = destinationPresets[selectedCity] ? selectedCity : normalizeDeliveryCityValue(selectedCity);

  fillSimpleSelectOptions(fields.status, businessSettings.vehicleStatusOptions, (option) => {
    if (currentLanguage === "ru") {
      return option.ru;
    }
    if (currentLanguage === "en") {
      return option.en;
    }
    return option.zh;
  });
  fields.status.value = getOptionByValue(businessSettings.vehicleStatusOptions, selectedStatus)?.value || businessSettings.vehicleStatusOptions[0]?.value || "";
  delete fields.status.dataset.pendingValue;

  if (fields.taxMode) {
    const manualOption = fields.taxMode.querySelector('option[value="manual"]');
    const personalOption = fields.taxMode.querySelector('option[value="ruPersonalUse"]');

    if (manualOption) {
      manualOption.textContent = text.taxModeManual;
    }

    if (personalOption) {
      personalOption.textContent = text.taxModePersonal;
    }
  }

  if (fields.personalUse) {
    const yesOption = fields.personalUse.querySelector('option[value="yes"]');
    const noOption = fields.personalUse.querySelector('option[value="no"]');

    if (yesOption) {
      yesOption.textContent = text.personalUseYes || "Yes";
    }

    if (noOption) {
      noOption.textContent = text.personalUseNo || "No";
    }
  }

  if (fields.sourcePageUrl) {
    const placeholders = {
      zh: "可选：粘贴车辆来源网页 URL",
      ru: "Необязательно: URL страницы автомобиля",
      en: "Optional: vehicle source page URL",
    };
    fields.sourcePageUrl.placeholder = placeholders[currentLanguage] || placeholders.zh;
  }

  fields.imageUrlInputs.forEach((input, index) => {
    const placeholders = {
      zh: index === 0 ? "./vehicle-main.jpg 或图片链接" : `./vehicle-${index}.jpg 或图片链接`,
      ru: index === 0 ? "./vehicle-main.jpg или ссылка на фото" : `./vehicle-${index}.jpg или ссылка на фото`,
      en: index === 0 ? "./vehicle-main.jpg or image URL" : `./vehicle-${index}.jpg or image URL`,
    };
    input.placeholder = placeholders[currentLanguage] || placeholders.zh;
  });
}

function fillContactDetails() {
  if (preview.contactPerson) {
    preview.contactPerson.textContent = businessSettings.contact.person;
  }
  if (preview.wechat) {
    preview.wechat.textContent = businessSettings.contact.wechat;
  }
  if (preview.whatsapp) {
    preview.whatsapp.textContent = businessSettings.contact.whatsapp;
  }
  if (preview.telegram) {
    preview.telegram.textContent = businessSettings.contact.telegram;
  }
}

function fillQuoteDate() {
  const today = new Date();

  preview.quoteDate.textContent = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(today);

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  preview.quoteNumber.textContent = `${businessSettings.quoteReference.prefix}-${year}${month}${day}-${businessSettings.quoteReference.sequence}`;
}

function fillLogoDetails() {
  preview.logoInitials.textContent = businessSettings.logo.initials;
  preview.miniLogoText.textContent = businessSettings.logo.initials;
  preview.logoName.textContent = businessSettings.logo.name;
  preview.logoTagline.textContent = businessSettings.logo.tagline;

  if (businessSettings.logo.imagePath) {
    preview.logoImage.src = businessSettings.logo.imagePath;
    preview.logoImage.hidden = false;
    preview.logoInitials.hidden = true;
    preview.logoImage.closest(".logo-symbol")?.classList.add("has-logo-image");
  }
}

function applyDefaultSettings() {
  if (!fields.exchangeRate.value) {
    fields.exchangeRate.value = businessSettings.exchangeRate.usdToRub;
  }
  if (!fields.sourcePageUrl.value) {
    fields.sourcePageUrl.value = businessSettings.vehicleImages.sourcePageUrl;
  }
  if (fields.displayCurrency && !fields.displayCurrency.value) {
    fields.displayCurrency.value = "RUB";
  }
  if (fields.status && !fields.status.value) {
    fields.status.value = businessSettings.vehicleStatusOptions[0]?.value || "";
  }
  if (fields.taxMode) {
    fields.taxMode.value = businessSettings.taxRules.defaultMode;
  }
  if (fields.personalUse) {
    fields.personalUse.value = businessSettings.taxRules.defaultPersonalUse ? "yes" : "no";
  }

  fields.imageUrlInputs.forEach((input) => {
    const index = Number(input.dataset.imageIndex);
    input.value = vehicleImageUrlSources[index] || "";
  });
}

async function tryLoadLiveExchangeRate() {
  if (!businessSettings.exchangeRate.tryLiveExchangeRate) {
    return;
  }

  try {
    const response = await fetch(businessSettings.exchangeRate.liveRateUrl, { cache: "no-store" });

    if (!response.ok) {
      throw new Error(`Exchange rate request failed: ${response.status}`);
    }

    const data = await response.json();
    const usd = data?.Valute?.USD;
    const cny = data?.Valute?.CNY;
    const usdRub = Number(usd?.Value) / Math.max(Number(usd?.Nominal) || 1, 1);
    const cnyRub = Number(cny?.Value) / Math.max(Number(cny?.Nominal) || 1, 1);
    const usdCny = usdRub / cnyRub;

    if (!Number.isFinite(usdRub) || usdRub <= 0) {
      return;
    }

    businessSettings.exchangeRate.usdToRub = Number(usdRub.toFixed(4));
    businessSettings.exchangeRate.todayDefaultUsdRub = businessSettings.exchangeRate.usdToRub;

    if (Number.isFinite(usdCny) && usdCny > 0) {
      businessSettings.exchangeRate.usdToCny = Number(usdCny.toFixed(4));
      businessSettings.exchangeRate.todayDefaultUsdCny = businessSettings.exchangeRate.usdToCny;
    }

    fields.exchangeRate.value = businessSettings.exchangeRate.usdToRub.toFixed(4);
    fields.exchangeRate.title = data?.Date
      ? `Live rate date: ${new Date(data.Date).toLocaleDateString()}`
      : "Live exchange rate loaded";
    updateQuote();
  } catch (error) {
    console.info("Live exchange rate unavailable. Using config fallback.", error);
  }
}

function setLanguage(language) {
  currentLanguage = language;
  const text = businessSettings.text[language];

  document.documentElement.lang = language === "zh" ? "zh-CN" : language;
  document.title = text.documentTitle || businessSettings.text.zh.documentTitle || document.title;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = text[key] || businessSettings.text.zh[key] || element.textContent;
  });

  if (preview.noteText) {
    preview.noteText.textContent = businessSettings.noteText[language];
  }

  if (preview.validityText) {
    preview.validityText.textContent = businessSettings.validityText[language];
  }

  if (preview.sellingPointsText) {
    preview.sellingPointsText.textContent = businessSettings.sellingPoints[language];
  }
  updateLocalizedControls();

  document.querySelectorAll(".language-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === language);
    const labelsByLanguage = {
      zh: { zh: "中文", ru: "俄文", en: "英文" },
      ru: { zh: "КИТ", ru: "РУС", en: "АНГ" },
      en: { zh: "ZH", ru: "RU", en: "EN" },
    };
    const labels = labelsByLanguage[language] || labelsByLanguage.zh;
    button.textContent = labels[button.dataset.lang] || button.textContent;
  });

  updateQuote();
}

function initializeVehicleImages() {
  setMainVehicleImage(mainVehicleImageIndex);
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(String(reader.result || "")));
    reader.addEventListener("error", () => reject(reader.error));
    reader.readAsDataURL(file);
  });
}

function prepareStoredImageDataUrl(dataUrl) {
  return new Promise((resolve) => {
    const image = new Image();

    image.addEventListener("load", () => {
      const maxSize = 800;
      const scale = Math.min(1, maxSize / Math.max(image.naturalWidth, image.naturalHeight));

      if (!scale) {
        resolve(dataUrl);
        return;
      }

      const canvas = document.createElement("canvas");
      canvas.width = Math.round(image.naturalWidth * scale);
      canvas.height = Math.round(image.naturalHeight * scale);

      const context = canvas.getContext("2d");
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      resolve(canvas.toDataURL("image/jpeg", 0.62));
    });

    image.addEventListener("error", () => resolve(dataUrl));
    image.src = dataUrl;
  });
}

function readVehicleImageFile(input) {
  const file = input.files && input.files[0];

  if (!file || !file.type.startsWith("image/")) {
    return;
  }

  const index = Number(input.dataset.imageIndex);
  const fileName = file.name || "";

  pendingVehicleImageReads[index] = readFileAsDataUrl(file)
    .then((dataUrl) => prepareStoredImageDataUrl(dataUrl))
    .then((storedDataUrl) => {
      updateVehicleImage(index, storedDataUrl, "local", fileName);
      saveQuoteDataForCustomerPage();
    })
    .catch((error) => {
      console.info("Vehicle image could not be prepared for transfer.", error);
    });

  return pendingVehicleImageReads[index];
}

[
  fields.model,
  fields.modelZh,
  fields.modelRu,
  fields.trim,
  fields.year,
  fields.mileage,
  fields.color,
  fields.engine,
  fields.transmission,
  fields.horsepower,
  fields.status,
  fields.destination,
  fields.carPriceUsd,
  fields.freightUsd,
  fields.clearanceRub,
  fields.taxRub,
  fields.taxMode,
  fields.vehicleAgeYears,
  fields.engineDisplacementCc,
  fields.personalUse,
  fields.profitUsd,
  fields.exchangeRate,
].filter(Boolean).forEach((field) => {
  field.addEventListener("input", forceRecalculateQuote);
  field.addEventListener("change", forceRecalculateQuote);
  field.addEventListener("blur", forceRecalculateQuote);
});

fields.destination.addEventListener("change", applyDestinationPreset);

if (fields.modelZh) {
  fields.modelZh.addEventListener("input", () => applyModelDictionaryMatch(fields.modelZh));
}

[
  fields.modelZh,
  fields.model,
  fields.modelRu,
].filter(Boolean).forEach((field) => {
  field.addEventListener("change", () => applyModelDictionaryMatch(field));
  field.addEventListener("blur", () => applyModelDictionaryMatch(field));
});

if (fields.taxMode) {
  fields.taxMode.addEventListener("change", () => {
    forceRecalculateQuote();
  });
}

if (fields.personalUse) {
  fields.personalUse.addEventListener("change", () => {
    forceRecalculateQuote();
  });
}

if (fields.displayCurrency) {
  fields.displayCurrency.addEventListener("change", () => {
    forceRecalculateQuote();
  });
}

fields.imageUrlInputs.forEach((input) => {
  input.addEventListener("input", () => {
    updateVehicleImage(Number(input.dataset.imageIndex), input.value, "url", input.value);
    saveQuoteDataForCustomerPage();
  });
});

fields.imageFileInputs.forEach((input) => {
  input.addEventListener("click", () => {
    input.value = "";
  });

  input.addEventListener("change", () => {
    readVehicleImageFile(input);
  });
});

document.querySelectorAll(".language-button").forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
    saveQuoteDataForCustomerPage();
  });
});

if (fields.openCustomerQuote) {
  fields.openCustomerQuote.addEventListener("click", () => {
    openQuotePage("customer-quote.html");
  });
}

if (fields.printQuote) {
  fields.printQuote.addEventListener("click", () => {
    if (document.body.classList.contains("pdf-output-page")) {
      if (!validateQuoteBeforeExport()) {
        return;
      }

      window.print();
      return;
    }

    openQuotePage("customer-quote-pdf.html?print=1");
  });
}

fillDeliveryCityOptions();
applyDefaultSettings();
applyDestinationPreset();
loadQuoteDataForPage();
fillLogoDetails();
fillQuoteDate();
fillContactDetails();
initializeVehicleImages();

if (document.body.classList.contains("pdf-output-page")) {
  const shouldAutoPrint = new URLSearchParams(window.location.search).get("print") === "1";

  if (shouldAutoPrint) {
    window.setTimeout(() => {
      if (validateQuoteBeforeExport()) {
        window.print();
      }
    }, 350);
  }
}
setLanguage(currentLanguage);
const isCustomerOutputPage = document.body.classList.contains("customer-print-page")
  || document.body.classList.contains("pdf-output-page");

if (!isCustomerOutputPage || !hasRestoredQuoteData) {
  tryLoadLiveExchangeRate();
}



