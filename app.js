// ==========================================================
// EASY EDIT AREA
// Change your business values and wording here.
// ==========================================================
const businessSettings = {
  // 1) Default interface language: "zh", "ru", or "en".
  defaultLanguage: "zh",
  defaultVehicleQuoteType: "new",

  // 2) Brand / logo settings.
  logo: {
    // Put a logo file next to index.html, then use "./logo.png".
    // Leave imagePath blank to use the SH text logo.
    imagePath: "./assets/shanhai-logo.png",
    initials: "SH",
    name: "SHANHAI HUB",
    tagline: "Auto Export China",
  },

  // 3) Quotation reference settings.
  // Current output format is PREFIX-YYYYMMDD-SEQUENCE.
  // Example: SHH-QT-20260428-001.
  quoteReference: {
    prefix: "SHH-QT",
    sequence: "001",
  },

  // 4) Exchange rate settings.
  exchangeRate: {
    // Live daily exchange rate settings:
    // The app tries live rates first, then falls back to these editable defaults.
    cnyToRub: 10.3326,
    cnyToUsd: 0.138122,
    todayDefaultCnyToRub: 10.3326,
    todayDefaultCnyToUsd: 0.138122,
    liveRateUrl: "https://www.cbr-xml-daily.ru/daily_json.js",

    // Works from a static file page. If unavailable, editable defaults above are used.
    tryLiveExchangeRate: true,
  },

  validation: {
    carPriceUsd: { min: 0, max: 1000000 },
    freightUsd: { min: 0, max: 100000 },
    chinaLogisticsUsd: { min: 0, max: 100000 },
    exportProcessingUsd: { min: 0, max: 100000 },
    profitUsd: { min: 0, max: 100000 },
    clearanceRub: { min: 0, max: 50000000 },
    taxRub: { min: 0, max: 100000000 },
    exchangeRate: { min: 1, max: 300 },
    exchangeRateCny: { min: 0.000001, max: 1 },
  },

  // 5) Russia personal-use import tax source.
  // TKS has captcha protection, so this static app does not scrape it.
  // Use the TKS official calculator button, then paste its result into the fields below.
  taxRules: {
    defaultMode: "manual", // "manual" or "ruPersonalUse"
    defaultPersonalUse: true,
    vehicleType: "passengerCar",
    source: "tksOfficialManual",
    officialCalculatorUrl: "https://www.tks.ru/auto/calc/",
    personalUseNote: "TKS official calculator result",
  },

  // 6) Delivery city preset settings.
  // Edit city names and default logistics costs here.
  // Rates updated based on 2026-06-02 Carticle Logistics + User Custom Clearance Rates
  deliveryCityPresets: [
    { zh: "莫斯科", ru: "Москва", freightUsd: 1800, clearanceRub: 100000 },
    { zh: "乌苏里斯克", ru: "Уссурийск", freightUsd: 1300, clearanceRub: 80000 }, // Based on border freight + buffer
    { zh: "后贝加尔", ru: "Забайкальск", freightUsd: 1300, clearanceRub: 80000 },
    { zh: "塔什干", ru: "Ташкент", freightUsd: 1100, clearanceRub: 0 },
    { zh: "阿拉木图", ru: "Алматы", freightUsd: 750, clearanceRub: 0 },
    { zh: "比什凯克", ru: "Бишкек", freightUsd: 1100, clearanceRub: 0 },
    { zh: "明斯克", ru: "Минск", freightUsd: 1800, clearanceRub: 0 },
    { zh: "巴库", ru: "Баку", freightUsd: 1900, clearanceRub: 0 },
    { zh: "埃里温", ru: "Ереван", freightUsd: 2050, clearanceRub: 0 },
  ],
  // 6.1) Cross-border small-loop freight (CNY)
  borderFreightCny: {
    "horgos_nurzholy": 2000,
    "manzhouli_zabaikalsk": 2000,
    "suifenhe_ussuriysk": 2000
  },
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
      fullNameZh: "马自达3",
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
    {
      brandZh: "本田",
      brandEn: "Honda",
      brandRu: "Honda",
      modelZh: "CR-V",
      modelEn: "CR-V",
      modelRu: "CR-V",
      fullNameZh: "本田 CR-V",
      fullNameEn: "Honda CR-V",
      fullNameRu: "Honda CR-V",
      aliases: ["本田crv", "本田 CRV", "crv", "CRV", "cr-v", "CR-V", "honda cr-v"],
    },
    {
      brandZh: "本田",
      brandEn: "Honda",
      brandRu: "Honda",
      modelZh: "思域",
      modelEn: "Civic",
      modelRu: "Civic",
      fullNameZh: "本田 思域",
      fullNameEn: "Honda Civic",
      fullNameRu: "Honda Civic",
      aliases: ["思域", "本田思域", "civic", "Honda Civic", "honda civic"],
    },
    {
      brandZh: "本田",
      brandEn: "Honda",
      brandRu: "Honda",
      modelZh: "雅阁",
      modelEn: "Accord",
      modelRu: "Accord",
      fullNameZh: "本田 雅阁",
      fullNameEn: "Honda Accord",
      fullNameRu: "Honda Accord",
      aliases: ["雅阁", "本田雅阁", "accord", "Honda Accord", "honda accord"],
    },
    {
      brandZh: "日产",
      brandEn: "Nissan",
      brandRu: "Nissan",
      modelZh: "轩逸",
      modelEn: "Sylphy",
      modelRu: "Sylphy",
      fullNameZh: "日产 轩逸",
      fullNameEn: "Nissan Sylphy",
      fullNameRu: "Nissan Sylphy",
      aliases: ["轩逸", "日产轩逸", "sylphy", "nissan sylphy"],
    },
    {
      brandZh: "日产",
      brandEn: "Nissan",
      brandRu: "Nissan",
      modelZh: "奇骏",
      modelEn: "X-Trail",
      modelRu: "X-Trail",
      fullNameZh: "日产 奇骏",
      fullNameEn: "Nissan X-Trail",
      fullNameRu: "Nissan X-Trail",
      aliases: ["奇骏", "日产奇骏", "xtrail", "x-trail", "nissan x-trail"],
    },
    {
      brandZh: "日产",
      brandEn: "Nissan",
      brandRu: "Nissan",
      modelZh: "逍客",
      modelEn: "Qashqai",
      modelRu: "Qashqai",
      fullNameZh: "日产 逍客",
      fullNameEn: "Nissan Qashqai",
      fullNameRu: "Nissan Qashqai",
      aliases: ["逍客", "日产逍客", "qashqai", "nissan qashqai"],
    },
    {
      brandZh: "吉利",
      brandEn: "Geely",
      brandRu: "Geely",
      modelZh: "星越L",
      modelEn: "Monjaro",
      modelRu: "Monjaro",
      fullNameZh: "吉利 星越L",
      fullNameEn: "Geely Monjaro",
      fullNameRu: "Geely Monjaro",
      aliases: ["星越l", "吉利星越l", "monjaro", "geely monjaro", "xingyuel"],
    },
    {
      brandZh: "吉利",
      brandEn: "Geely",
      brandRu: "Geely",
      modelZh: "缤越",
      modelEn: "Coolray",
      modelRu: "Coolray",
      fullNameZh: "吉利 缤越",
      fullNameEn: "Geely Coolray",
      fullNameRu: "Geely Coolray",
      aliases: ["缤越", "吉利缤越", "coolray", "geely coolray"],
    },
    {
      brandZh: "哈弗",
      brandEn: "Haval",
      brandRu: "Haval",
      modelZh: "H6",
      modelEn: "H6",
      modelRu: "H6",
      fullNameZh: "哈弗 H6",
      fullNameEn: "Haval H6",
      fullNameRu: "Haval H6",
      aliases: ["哈弗h6", "哈弗 H6", "haval h6", "h6"],
    },
    {
      brandZh: "哈弗",
      brandEn: "Haval",
      brandRu: "Haval",
      modelZh: "大狗",
      modelEn: "Dargo",
      modelRu: "Dargo",
      fullNameZh: "哈弗 大狗",
      fullNameEn: "Haval Dargo",
      fullNameRu: "Haval Dargo",
      aliases: ["大狗", "哈弗大狗", "dargo", "haval dargo"],
    },
    {
      brandZh: "奇瑞",
      brandEn: "Chery",
      brandRu: "Chery",
      modelZh: "瑞虎7 PLUS",
      modelEn: "Tiggo 7 Plus",
      modelRu: "Tiggo 7 Plus",
      fullNameZh: "奇瑞 瑞虎7 PLUS",
      fullNameEn: "Chery Tiggo 7 Plus",
      fullNameRu: "Chery Tiggo 7 Plus",
      aliases: ["瑞虎7plus", "瑞虎7 PLUS", "奇瑞瑞虎7plus", "tiggo7plus", "chery tiggo 7 plus"],
    },
    {
      brandZh: "奇瑞",
      brandEn: "Chery",
      brandRu: "Chery",
      modelZh: "瑞虎8 PRO",
      modelEn: "Tiggo 8 Pro",
      modelRu: "Tiggo 8 Pro",
      fullNameZh: "奇瑞 瑞虎8 PRO",
      fullNameEn: "Chery Tiggo 8 Pro",
      fullNameRu: "Chery Tiggo 8 Pro",
      aliases: ["瑞虎8pro", "瑞虎8 PRO", "奇瑞瑞虎8pro", "tiggo8pro", "chery tiggo 8 pro"],
    },
    {
      brandZh: "捷途",
      brandEn: "Jetour",
      brandRu: "Jetour",
      modelZh: "旅行者",
      modelEn: "Traveller",
      modelRu: "Traveller",
      fullNameZh: "捷途 旅行者",
      fullNameEn: "Jetour Traveller",
      fullNameRu: "Jetour Traveller",
      aliases: ["旅行者", "捷途旅行者", "traveller", "traveler", "jetour traveller"],
    },
    {
      brandZh: "红旗",
      brandEn: "Hongqi",
      brandRu: "Hongqi",
      modelZh: "HS5",
      modelEn: "HS5",
      modelRu: "HS5",
      fullNameZh: "红旗 HS5",
      fullNameEn: "Hongqi HS5",
      fullNameRu: "Hongqi HS5",
      aliases: ["红旗hs5", "hongqi hs5", "hs5"],
    },
    {
      brandZh: "小米",
      brandEn: "Xiaomi",
      brandRu: "Xiaomi",
      modelZh: "SU7",
      modelEn: "SU7",
      modelRu: "SU7",
      fullNameZh: "小米 SU7",
      fullNameEn: "Xiaomi SU7",
      fullNameRu: "Xiaomi SU7",
      aliases: ["小米su7", "xiaomi su7", "su7"],
    },
    {
      brandZh: "问界",
      brandEn: "AITO",
      brandRu: "AITO",
      modelZh: "M7",
      modelEn: "M7",
      modelRu: "M7",
      fullNameZh: "问界 M7",
      fullNameEn: "AITO M7",
      fullNameRu: "AITO M7",
      aliases: ["问界m7", "aito m7", "m7"],
    },
    {
      brandZh: "问界",
      brandEn: "AITO",
      brandRu: "AITO",
      modelZh: "M9",
      modelEn: "M9",
      modelRu: "M9",
      fullNameZh: "问界 M9",
      fullNameEn: "AITO M9",
      fullNameRu: "AITO M9",
      aliases: ["问界m9", "aito m9", "m9"],
    },
    {
      brandZh: "极氪",
      brandEn: "Zeekr",
      brandRu: "Zeekr",
      modelZh: "001",
      modelEn: "001",
      modelRu: "001",
      fullNameZh: "极氪 001",
      fullNameEn: "Zeekr 001",
      fullNameRu: "Zeekr 001",
      aliases: ["极氪001", "zeekr001", "zeekr 001", "001"],
    },
    {
      brandZh: "蔚来",
      brandEn: "NIO",
      brandRu: "NIO",
      modelZh: "ES6",
      modelEn: "ES6",
      modelRu: "ES6",
      fullNameZh: "蔚来 ES6",
      fullNameEn: "NIO ES6",
      fullNameRu: "NIO ES6",
      aliases: ["蔚来es6", "nio es6", "es6"],
    },
    {
      brandZh: "小鹏",
      brandEn: "XPeng",
      brandRu: "XPeng",
      modelZh: "G6",
      modelEn: "G6",
      modelRu: "G6",
      fullNameZh: "小鹏 G6",
      fullNameEn: "XPeng G6",
      fullNameRu: "XPeng G6",
      aliases: ["小鹏g6", "xpeng g6", "g6"],
    },
    {
      brandZh: "特斯拉",
      brandEn: "Tesla",
      brandRu: "Tesla",
      modelZh: "Model Y",
      modelEn: "Model Y",
      modelRu: "Model Y",
      fullNameZh: "特斯拉 Model Y",
      fullNameEn: "Tesla Model Y",
      fullNameRu: "Tesla Model Y",
      aliases: ["特斯拉modely", "modely", "model y", "tesla model y"],
    },
    {
      brandZh: "奥迪",
      brandEn: "Audi",
      brandRu: "Audi",
      modelZh: "Q5L",
      modelEn: "Q5L",
      modelRu: "Q5L",
      fullNameZh: "奥迪 Q5L",
      fullNameEn: "Audi Q5L",
      fullNameRu: "Audi Q5L",
      aliases: ["奥迪q5l", "audi q5l", "q5l"],
    },
    {
      brandZh: "宝马",
      brandEn: "BMW",
      brandRu: "BMW",
      modelZh: "X3",
      modelEn: "X3",
      modelRu: "X3",
      fullNameZh: "宝马 X3",
      fullNameEn: "BMW X3",
      fullNameRu: "BMW X3",
      aliases: ["宝马x3", "bmw x3", "x3"],
    },
    {
      brandZh: "奔驰",
      brandEn: "Mercedes-Benz",
      brandRu: "Mercedes-Benz",
      modelZh: "GLC",
      modelEn: "GLC",
      modelRu: "GLC",
      fullNameZh: "奔驰 GLC",
      fullNameEn: "Mercedes-Benz GLC",
      fullNameRu: "Mercedes-Benz GLC",
      aliases: ["奔驰glc", "mercedes glc", "mercedes-benz glc", "glc"],
    },
  ],
  vehicleStatusOptions: [
    { value: "inStock", zh: "现车", en: "In stock", ru: "В наличии" },
    { value: "availableToOrder", zh: "可订", en: "Available to order", ru: "Под заказ" },
    { value: "inTransit", zh: "在途", en: "In transit", ru: "В пути" },
    { value: "inspected", zh: "已验车", en: "Inspected", ru: "Проверен" },
    { value: "reserved", zh: "已预订", en: "Reserved", ru: "Забронирован" },
    { value: "sold", zh: "已售", en: "Sold", ru: "Продано" },
  ],
  vehicleQuoteTypeSettings: {
    new: {
      defaultMileage: "0",
      defaultStatus: "inStock",
      statusValues: ["inStock", "availableToOrder", "inTransit", "sold"],
      sellingPoints: {
        zh: "新车资源，配置清晰，适合出口交付。报价包含车辆采购、出口服务和对应运输方案。",
        ru: "Новый автомобиль, понятная комплектация и готовность к экспортной поставке.",
        en: "New vehicle supply with clear specification and export-ready delivery plan.",
      },
    },
    used: {
      defaultMileage: "",
      defaultStatus: "inspected",
      statusValues: ["inStock", "inspected", "reserved", "inTransit", "sold"],
      sellingPoints: {
        zh: "二手车报价以实车车况、里程、图片和检测结果为基础，适合客户确认后执行采购与出口。",
        ru: "Предложение по автомобилю с пробегом основано на фактическом состоянии, пробеге, фото и проверке.",
        en: "Used vehicle quotation is based on actual condition, mileage, photos and inspection result.",
      },
    },
  },
  conditionGradeOptions: [
    {
      value: "aPlus",
      grade: "A+",
      zh: "几乎像新车",
      en: "Almost like new",
      ru: "Почти как новая",
      description: {
        zh: "无事故、无水泡、无火烧，几乎无维修，低里程，内饰和车身接近新车状态。",
        en: "No accident, flood or fire damage; almost no repair, low mileage, interior and body close to new condition.",
        ru: "Без ДТП, затопления и пожара; почти без ремонта, малый пробег, салон и кузов близки к состоянию нового автомобиля.",
      },
    },
    {
      value: "a",
      grade: "A",
      zh: "优秀车况",
      en: "Excellent condition",
      ru: "Отличное состояние",
      description: {
        zh: "无结构性损伤，仅有轻微使用痕迹，机械和电气系统正常。",
        en: "No structural damage, only minor signs of use; mechanical and electrical systems are normal.",
        ru: "Без структурных повреждений, только незначительные следы эксплуатации; механика и электрика в норме.",
      },
    },
    {
      value: "b",
      grade: "B",
      zh: "良好车况",
      en: "Good condition",
      ru: "Хорошее состояние",
      description: {
        zh: "无严重事故、水泡或火烧，可能有局部喷漆或常规维修，不影响正常使用。",
        en: "No serious accident, flood or fire damage; local repainting or normal repair may exist and does not affect use.",
        ru: "Без серьезных ДТП, затопления или пожара; возможны локальные окрасы или обычный ремонт, не влияющие на эксплуатацию.",
      },
    },
    {
      value: "c",
      grade: "C",
      zh: "可接受 / 需整备",
      en: "Acceptable / needs preparation",
      ru: "Приемлемое / требует подготовки",
      description: {
        zh: "无严重事故、水泡或火烧，但存在明显维修、瑕疵、功能问题或需要整备。",
        en: "No serious accident, flood or fire damage, but visible repair, defects, functional issues or preparation may be needed.",
        ru: "Без серьезных ДТП, затопления или пожара, но есть заметный ремонт, дефекты, функциональные вопросы или нужна подготовка.",
      },
    },
    {
      value: "d",
      grade: "D",
      zh: "高风险 / 不推荐",
      en: "High risk / not recommended",
      ru: "Высокий риск / не рекомендуется",
      description: {
        zh: "存在严重事故、水泡、火烧、调表、严重机械故障或重大缺陷，通常不建议采购。",
        en: "Serious accident, flood, fire damage, mileage rollback, major mechanical failure or major defects; generally not recommended.",
        ru: "Серьезное ДТП, затопление, пожар, скрученный пробег, серьезные механические неисправности или крупные дефекты; обычно не рекомендуется.",
      },
    },
  ],
  conditionDescriptionPhrases: [
    { zh: "外观良好", en: "Exterior is in good condition", ru: "Кузов в хорошем состоянии" },
    { zh: "外观正常", en: "Exterior condition is normal", ru: "Состояние кузова нормальное" },
    { zh: "内饰干净", en: "Interior is clean", ru: "Салон чистый" },
    { zh: "内饰整洁", en: "Interior is tidy", ru: "Салон аккуратный" },
    { zh: "无事故", en: "No accident record", ru: "Без ДТП" },
    { zh: "无重大事故", en: "No major accident record", ru: "Без серьезных ДТП" },
    { zh: "无水泡", en: "No flood damage", ru: "Без следов затопления" },
    { zh: "无火烧", en: "No fire damage", ru: "Без следов пожара" },
    { zh: "原版原漆", en: "Original body panels and paint", ru: "Оригинальные кузовные элементы и окраска" },
    { zh: "少量补漆", en: "Minor repainting", ru: "Незначительные окрасы" },
    { zh: "局部补漆", en: "Partial repainting", ru: "Локальные окрасы" },
    { zh: "保养记录完整", en: "Complete service history", ru: "Полная история обслуживания" },
    { zh: "保养记录齐全", en: "Service records are complete", ru: "Документы по обслуживанию в наличии" },
    { zh: "车况良好", en: "Vehicle condition is good", ru: "Автомобиль в хорошем состоянии" },
    { zh: "车况精品", en: "Excellent vehicle condition", ru: "Отличное состояние автомобиля" },
    { zh: "实表里程", en: "Verified actual mileage", ru: "Подтвержденный фактический пробег" },
    { zh: "公里数真实", en: "Mileage is verified", ru: "Пробег подтвержден" },
    { zh: "发动机正常", en: "Engine works normally", ru: "Двигатель работает штатно" },
    { zh: "变速箱正常", en: "Transmission works normally", ru: "КПП работает штатно" },
    { zh: "底盘正常", en: "Chassis condition is normal", ru: "Ходовая часть в нормальном состоянии" },
    { zh: "轮胎良好", en: "Tires are in good condition", ru: "Шины в хорошем состоянии" },
    { zh: "检测通过", en: "Inspection passed", ru: "Проверка пройдена" },
    { zh: "支持第三方检测", en: "Third-party inspection is available", ru: "Возможна проверка третьей стороной" },
  ],
  colorOptions: [
    { value: "white", zh: "白色", en: "White", ru: "Белый" },
    { value: "black", zh: "黑色", en: "Black", ru: "Черный" },
    { value: "gray", zh: "灰色", en: "Gray", ru: "Серый" },
    { value: "silver", zh: "银色", en: "Silver", ru: "Серебристый" },
    { value: "blue", zh: "蓝色", en: "Blue", ru: "Синий" },
    { value: "red", zh: "红色", en: "Red", ru: "Красный" },
    { value: "green", zh: "绿色", en: "Green", ru: "Зеленый" },
    { value: "pearlWhite", zh: "珍珠白", en: "Pearl White", ru: "Перламутровый белый" },
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

  cipTaxNotice: {
    zh: "温馨提示：当前为 CIP 到达价，关税、清关及落地费用为预估，最终以实际清关结果为准。",
    ru: "Внимание: указана цена CIP до города. Пошлины, таможенное оформление и расходы до полной поставки являются предварительной оценкой.",
    en: "Notice: this is a CIP delivered price. Duties, customs clearance and landed costs are estimated and subject to actual clearance.",
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
    emissionStandardLabel: "环保标准",
    fuelTypeLabel: "燃油类型",
    conditionDescriptionLabel: "车况描述",
    conditionDescriptionHelp: "用于二手车客户报价中的车况说明。",
    conditionDescriptionTitle: "车况描述",
    conditionDescriptionPlaceholder: "二手车可填写：外观、内饰、事故/补漆、保养记录、检测结论等。",
    conditionGradeLabel: "车况等级",
    destinationLabel: "交付城市",
    costSectionTitle: "报价成本",
    costSectionHelp: "选择城市后自动带入参考费用，所有金额均可手动调整。",
    advancedTaxTitle: "高级税费 / TKS 校验",
    advancedTaxHelp: "需要核对俄罗斯个人进口税费时再展开。",
    imageSectionTitle: "车辆图片",
      imageSectionHelp: "可粘贴图片链接，或上传本地图片预览。",
      sourcePageLabel: "图片来源网页 URL",
      mainImageUrlLabel: "主图 URL",
      thumbnailUrlLabel: "缩略图 URL",
      imageUploadLabel: "本地上传",
      imagePlaceholderText: "暂无车辆图片",
      carPriceLabel: "车辆价格",
      chinaLogisticsLabel: "国内物流费用",
      exportProcessingLabel: "出口手续费",
      freightLabel: "国际物流费用",
      clearanceLabel: "清关服务费",
      taxLabel: "税费",
      profitLabel: "服务费用",
      clientProfitLabel: "采购与出口服务 USD",
      exchangeRateLabel: "汇率（默认实时，可手工修改）",
      usdRubRateLabel: "人民币兑卢布",
      usdCnyRateLabel: "人民币兑美元",
      displayCurrencyLabel: "总价显示币种",
      costCurrencyLabel: "报价录入币种",
      taxModeLabel: "税费模式",
    taxModeManual: "手动输入",
    taxModePersonal: "TKS 官方结果（俄罗斯个人购买）",
    includeTaxInTotalLabel: "报价方式",
    fobPriceLabel: "FOB 离岸价",
    cipPriceLabel: "CIP 到达价",
    ddpPriceLabel: "DDP 全包落地价",
    fobDetailsTitle: "FOB 离岸价明细",
    cipDetailsTitle: "CIP 到达价明细",
    ddpDetailsTitle: "DDP 全包落地价明细",
    landedModeOnLabel: "已显示全包落地价",
    openTksCalculatorLabel: "打开 TKS 官方计算器校验",
    tksCalculatorHint: "会打开 TKS 页面并复制当前参数；请以 TKS 计算结果填入下方税费字段。",
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
      fobPriceLabel: "FOB 离岸价",
      cipPriceLabel: "CIP 到达价",
      ddpPriceLabel: "DDP 全包落地价",
      landedPriceLabel: "DDP 全包落地价",
      fobDetailsTitle: "FOB 离岸价明细",
      cipDetailsTitle: "CIP 到达价明细",
      ddpDetailsTitle: "DDP 全包落地价明细",
      landedDetailsTitle: "DDP 全包落地价明细",
      taxEstimateDetailsTitle: "预估税费明细",
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
      footerText: "中国汽车采购与出口执行",
    openCustomerQuoteLabel: "查看客户报价单",
    printQuoteLabel: "打印 / 导出 PDF",
    newQuoteLabel: "新建报价",
    exportValidationTitle: "请先补全以下报价信息：",
    exportValidationImage: "至少 1 张车辆图片",
    exportValidationTotal: "总价必须大于 0",
    exportValidationClearance: "清关服务费",
    exportValidationTax: "税费 / 税费模式",
    exportValidationDdpTax: "DDP 需要清关服务费和税费信息",
    resetQuoteConfirm: "确定新建报价？当前填写内容会清空。",
    missingQuoteTitle: "未找到报价数据",
    missingQuoteText: "请先在报价首页填写车辆和费用信息，再生成客户报价单。",
    missingQuoteAction: "返回报价首页",
    termNoticeFob: "当前为 FOB 离岸价，仅包含车辆采购与出口服务；国际物流、清关及目的地税费不包含在本报价内。",
    termNoticeCip: "当前为 CIP 到达价，包含车辆采购、出口服务和到指定城市的物流；不包含关税、清关服务费及目的地落地费用。",
    termNoticeDdp: "当前为 DDP 全包落地价，包含车辆采购、出口服务、物流、清关服务费和预估税费；最终金额以车辆确认、汇率、路线及清关结果为准。",
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
    mileageLabel: "Пробег, км",
    colorLabel: "Цвет",
    engineLabel: "Двигатель",
    transmissionLabel: "КПП",
    horsepowerLabel: "Л.с.",
    statusLabel: "Статус",
    emissionStandardLabel: "Экологический стандарт",
    fuelTypeLabel: "Тип топлива",
    conditionDescriptionLabel: "Описание состояния",
    conditionDescriptionHelp: "Для описания состояния автомобиля с пробегом в клиентском предложении.",
    conditionDescriptionTitle: "Состояние автомобиля",
    conditionDescriptionPlaceholder: "Для авто с пробегом: кузов, салон, ДТП/окрасы, обслуживание, результат проверки.",
    conditionGradeLabel: "Класс состояния",
    destinationLabel: "Город доставки",
    costSectionTitle: "Расчет стоимости",
    costSectionHelp: "После выбора города подставляются ориентировочные расходы. Все суммы можно изменить вручную.",
    advancedTaxTitle: "Налоги / проверка TKS",
    advancedTaxHelp: "Открывайте для проверки расчета импорта физлицом.",
    imageSectionTitle: "Фотографии автомобиля",
      imageSectionHelp: "Можно вставить ссылки на изображения или загрузить локальные файлы для предпросмотра.",
      sourcePageLabel: "URL страницы-источника",
      mainImageUrlLabel: "URL главного фото",
      thumbnailUrlLabel: "URL миниатюры",
      imageUploadLabel: "Локальная загрузка",
      imagePlaceholderText: "Фото автомобиля не добавлено",
      carPriceLabel: "Цена автомобиля",
      chinaLogisticsLabel: "Расходы на логистику по Китаю",
      exportProcessingLabel: "Экспортное оформление",
      freightLabel: "Расходы на международную логистику",
      clearanceLabel: "Стоимость таможенного оформления",
      taxLabel: "Налоги и сборы",
      profitLabel: "Сервисная комиссия",
      clientProfitLabel: "Закупка и экспортное сопровождение USD",
      exchangeRateLabel: "Курс CNY (авто / ручной ввод)",
      usdRubRateLabel: "CNY-RUB",
      usdCnyRateLabel: "CNY-USD",
      displayCurrencyLabel: "Валюта итога",
      taxModeLabel: "Режим расчета налогов",
      taxModeManual: "Ручной ввод",
      taxModePersonal: "Покупка физлицом / personal use",
      vehicleAgeLabel: "Возраст автомобиля",
      engineDisplacementLabel: "Объем двигателя, см3",
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
      cipPriceLabel: "CIP до города",
      landedPriceLabel: "Полная стоимость с таможней",
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
      footerText: "Закупка и экспорт автомобилей из Китая",
    openCustomerQuoteLabel: "Открыть клиентское предложение",
    printQuoteLabel: "Печать / Экспорт PDF",
    newQuoteLabel: "Новый расчет",
    exportValidationTitle: "Заполните данные перед экспортом:",
    exportValidationImage: "Минимум 1 фото автомобиля",
    exportValidationTotal: "Итоговая стоимость должна быть больше 0",
    exportValidationClearance: "Стоимость таможенного оформления",
    exportValidationTax: "Налоги / режим расчета налогов",
    exportValidationDdpTax: "Для DDP нужны таможенное оформление и данные по налогам",
    resetQuoteConfirm: "Создать новый расчет? Текущие данные будут очищены.",
    missingQuoteTitle: "Данные расчета не найдены",
    missingQuoteText: "Сначала заполните данные автомобиля и стоимости на главной странице, затем создайте клиентское предложение.",
    missingQuoteAction: "Вернуться к расчету",
    termNoticeFob: "Указана цена FOB: включает закупку автомобиля и экспортное сопровождение; международная логистика, таможня и налоги в стране назначения не включены.",
    termNoticeCip: "Указана цена CIP до города: включает закупку, экспортное сопровождение и международную логистику до указанного города; пошлины, таможенное оформление и расходы после прибытия не включены.",
    termNoticeDdp: "Указана цена DDP: включает закупку, экспортное сопровождение, международную логистику, таможенное оформление и предварительную оценку налогов; финальная сумма зависит от подтверждения автомобиля, курса, маршрута и таможенного оформления.",
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
    emissionStandardLabel: "Emission standard",
    fuelTypeLabel: "Fuel type",
    conditionDescriptionLabel: "Condition description",
    conditionDescriptionHelp: "Used for describing a used vehicle in the customer quotation.",
    conditionDescriptionTitle: "Vehicle condition",
    conditionDescriptionPlaceholder: "For used vehicles: exterior, interior, accident/paintwork, service history and inspection result.",
    conditionGradeLabel: "Condition grade",
    destinationLabel: "Destination city",
    costSectionTitle: "Cost Calculation",
    costSectionHelp: "Destination presets fill reference costs automatically. Every amount remains editable.",
    advancedTaxTitle: "Advanced tax / TKS check",
    advancedTaxHelp: "Open when you need to verify Russia personal import duties.",
    imageSectionTitle: "Vehicle Images",
      imageSectionHelp: "Paste image links or upload local files for preview.",
      sourcePageLabel: "Source webpage URL",
      mainImageUrlLabel: "Main image URL",
      thumbnailUrlLabel: "Thumbnail URL",
      imageUploadLabel: "Local upload",
      imagePlaceholderText: "No vehicle image added",
      carPriceLabel: "Car price",
      chinaLogisticsLabel: "China domestic logistics cost",
      exportProcessingLabel: "Export processing",
      freightLabel: "International logistics cost",
      clearanceLabel: "Customs service fee",
      taxLabel: "Tax",
      profitLabel: "Service margin",
      clientProfitLabel: "Sourcing and export service USD",
      exchangeRateLabel: "CNY rate (live or manual)",
      usdRubRateLabel: "CNY-RUB",
      usdCnyRateLabel: "CNY-USD",
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
      cipPriceLabel: "CIP delivered price",
      landedPriceLabel: "All-inclusive landed price",
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
      footerText: "China vehicle sourcing and export execution",
    openCustomerQuoteLabel: "Open Customer Quote",
    printQuoteLabel: "Print / Export PDF",
    newQuoteLabel: "New quote",
    exportValidationTitle: "Please complete the quote before export:",
    exportValidationImage: "At least 1 vehicle image",
    exportValidationTotal: "Total must be greater than 0",
    exportValidationClearance: "Customs service fee",
    exportValidationTax: "Tax amount / tax mode",
    exportValidationDdpTax: "DDP requires customs service fee and tax details",
    resetQuoteConfirm: "Create a new quote? Current input will be cleared.",
    missingQuoteTitle: "No quote data found",
    missingQuoteText: "Fill in vehicle and cost details on the main quote page before generating a customer quote.",
    missingQuoteAction: "Back to quote page",
    termNoticeFob: "Current term is FOB: includes vehicle sourcing and export service only. International freight, customs clearance and destination taxes are not included.",
    termNoticeCip: "Current term is CIP delivered price: includes vehicle sourcing, export service and international logistics to the selected city. Duties, customs service and post-arrival landed costs are not included.",
    termNoticeDdp: "Current term is DDP landed price: includes vehicle sourcing, export service, international logistics, customs service fee and estimated taxes. Final cost depends on vehicle confirmation, exchange rate, route and customs clearance.",
    },
  },
};
const quoteMath = globalThis.QuoteMath;
const exchangeRateState = {
  isLive: false,
  updatedAt: null,
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
  businessSettings.sellingPoints.zh = "车辆信息、价格结构和交付条款清晰，适合个人及企业客户确认采购、出口与物流执行。";
  businessSettings.sellingPoints.ru = "Прозрачные данные автомобиля, структура цены и условия поставки для частных и корпоративных клиентов.";
  businessSettings.sellingPoints.en = "Clear vehicle data, price structure and delivery terms for both private and corporate customers.";

  businessSettings.vehicleQuoteTypeSettings.new.sellingPoints.zh = "新车资源，配置清晰，适合出口交付。报价列明车辆采购、出口服务、物流条款和后续执行边界。";
  businessSettings.vehicleQuoteTypeSettings.new.sellingPoints.ru = "Новый автомобиль с понятной комплектацией и экспортным планом. Предложение показывает закупку, экспортное сопровождение, логистику и границы ответственности.";
  businessSettings.vehicleQuoteTypeSettings.new.sellingPoints.en = "New vehicle supply with clear specification and export plan. The quotation separates sourcing, export service, logistics and execution scope.";
  businessSettings.vehicleQuoteTypeSettings.used.sellingPoints.zh = "二手车报价基于实车车况、里程、图片和检测信息，便于客户在确认车辆后安排采购与出口。";
  businessSettings.vehicleQuoteTypeSettings.used.sellingPoints.ru = "Предложение по авто с пробегом основано на фактическом состоянии, пробеге, фото и проверке, чтобы клиент мог подтвердить автомобиль перед закупкой и экспортом.";
  businessSettings.vehicleQuoteTypeSettings.used.sellingPoints.en = "Used vehicle quotation is based on actual condition, mileage, photos and inspection details so the customer can confirm before sourcing and export.";

  businessSettings.noteText.zh = "报价为预估金额，最终价格以车辆确认、汇率、运输路线及清关要求为准。";
  businessSettings.noteText.ru = "Расчет предварительный; финальная сумма зависит от автомобиля, курса, маршрута и таможенных условий.";
  businessSettings.noteText.en = "This quotation is an estimate. Final pricing depends on vehicle confirmation, exchange rate, route and customs requirements.";
  businessSettings.cipTaxNotice.zh = "";
  businessSettings.cipTaxNotice.ru = "";
  businessSettings.cipTaxNotice.en = "";
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
    vehicleQuoteTypeLabel: "报价类型",
    newVehicleQuoteLabel: "新车报价",
    usedVehicleQuoteLabel: "二手车报价",
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
    emissionStandardLabel: "环保标准",
    fuelTypeLabel: "燃油类型",
    conditionDescriptionLabel: "车况描述",
    conditionDescriptionHelp: "用于二手车客户报价中的车况说明。",
    conditionDescriptionTitle: "车况描述",
    conditionDescriptionPlaceholder: "二手车可填写：外观、内饰、事故/补漆、保养记录、检测结论等。",
    destinationLabel: "交付城市",
    costSectionTitle: "报价成本",
    costSectionHelp: "选择城市后自动带入参考费用，所有金额均可手动调整。",
    advancedTaxTitle: "高级税费 / TKS 校验",
    advancedTaxHelp: "需要核对俄罗斯个人进口税费时再展开。",
	    imageSectionTitle: "车辆图片",
	    imageSectionHelp: "可粘贴图片链接，或上传本地图片预览。",
	    imageAdvancedTitle: "更多图片和来源",
	    imageAdvancedHelp: "需要展示多图或记录来源时再展开。",
	    sourcePageLabel: "图片来源网页 URL",
    mainImageUrlLabel: "主图 URL",
    thumbnailUrlLabel: "缩略图 URL",
    imageUploadLabel: "本地上传",
    imagePlaceholderText: "暂无车辆图片",
    carPriceLabel: "车辆价格",
    chinaLogisticsLabel: "国内物流费用",
    exportProcessingLabel: "出口手续费",
    freightLabel: "国际物流费用",
    clearanceLabel: "清关服务费",
    taxLabel: "税费",
    taxModeLabel: "税费模式",
    taxModeManual: "手动输入",
    taxModePersonal: "俄罗斯个人购买（personal use）",
    includeTaxInTotalLabel: "显示全包落地价",
    landedModeOnLabel: "已显示全包落地价",
    openTksCalculatorLabel: "打开 TKS 官方计算器校验",
    tksCalculatorHint: "会打开 TKS 页面，并复制当前车辆参数便于粘贴核对。",
    personalUseYes: "是",
    personalUseNo: "否",
    vehicleAgeLabel: "车辆年限",
    engineDisplacementLabel: "发动机排量 cc",
    personalUseLabel: "个人购买",
    customsDutyLabel: "TKS 进口关税 RUB",
    recyclingFeeLabel: "回收费 RUB",
    estimatedTaxTotalLabel: "TKS 税费合计 RUB",
    finalLandedCostLabel: "最终落地成本 RUB",
    profitLabel: "服务费用",
    clientProfitLabel: "采购与出口服务 USD",
    exchangeRateLabel: "汇率（默认实时，可手工修改）",
    usdRubRateLabel: "人民币兑卢布",
    usdCnyRateLabel: "人民币兑美元",
    displayCurrencyLabel: "总价显示币种",
    costCurrencyLabel: "报价录入币种",
    quoteCardTitle: "客户车辆报价",
    quoteForLabel: "适用客户",
    privateCorporateLabel: "个人 / 企业客户",
    quoteTermScopeLabel: "贸易条款",
    quoteTermScopeText: "FOB / CIP / DDP",
    validityShortLabel: "有效期",
    validityShortText: "24 小时",
    singleVehicleTitle: "单车详情卡",
    sellingPointsTitle: "核心卖点",
    serviceScopeTitle: "服务范围",
    serviceScopeSubtitle: "为个人和企业客户清晰呈现采购与出口执行边界。",
    scopeSourcingTitle: "车辆确认",
    scopeSourcingText: "车型、配置、图片和车况信息确认",
    scopeExportTitle: "出口文件",
    scopeExportText: "中国采购、出口手续与交付资料协调",
    scopeLogisticsTitle: "国际物流",
    scopeLogisticsText: "按报价条款安排至指定城市的运输方案",
    scopeClearanceTitle: "清关估算",
    scopeClearanceText: "按客户类型和目的地提供税费参考",
    priceStructureTitle: "费用明细",
    grandTotalLabel: "总费用",
    cipPriceLabel: "CIP 到达价",
    landedPriceLabel: "全包落地价",
    cipDetailsTitle: "CIP 到达价明细",
    landedDetailsTitle: "全包落地价明细",
    taxEstimateDetailsTitle: "预估税费明细",
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
	    rateLiveLabel: "实时汇率",
	    rateFallbackLabel: "手工汇率",
	    rateUpdatedAtLabel: "更新时间",
	    noteTitle: "报价说明",
    footerText: "中国汽车采购与出口执行",
    openCustomerQuoteLabel: "查看客户报价单",
    printQuoteLabel: "打印 / 导出 PDF",
    newQuoteLabel: "新建报价",
    exportValidationTitle: "请先补全以下报价信息：",
    exportValidationImage: "至少 1 张车辆图片",
    exportValidationTotal: "总价必须大于 0",
    exportValidationClearance: "清关服务费",
    exportValidationTax: "税费 / 税费模式",
    exportValidationDdpTax: "DDP 需要清关服务费和税费信息",
    resetQuoteConfirm: "确定新建报价？当前填写内容会清空。",
    missingQuoteTitle: "未找到报价数据",
    missingQuoteText: "请先在报价首页填写车辆和费用信息，再生成客户报价单。",
    missingQuoteAction: "返回报价首页",
    termNoticeFob: "当前为 FOB 离岸价，仅包含车辆采购与出口服务；国际物流、清关及目的地税费不包含在本报价内。",
    termNoticeCip: "当前为 CIP 到达价，包含车辆采购、出口服务和到指定城市的物流；不包含关税、清关服务费及目的地落地费用。",
    termNoticeDdp: "当前为 DDP 全包落地价，包含车辆采购、出口服务、物流、清关服务费和预估税费；最终金额以车辆确认、汇率、路线及清关结果为准。",
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
    vehicleQuoteTypeLabel: "Тип предложения",
    newVehicleQuoteLabel: "Новый автомобиль",
    usedVehicleQuoteLabel: "Автомобиль с пробегом",
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
    mileageLabel: "Пробег, км",
    colorLabel: "Цвет",
    engineLabel: "Двигатель",
    transmissionLabel: "КПП",
    horsepowerLabel: "Л.с.",
    statusLabel: "Статус",
    emissionStandardLabel: "Экологический стандарт",
    fuelTypeLabel: "Тип топлива",
    conditionDescriptionLabel: "Описание состояния",
    conditionDescriptionHelp: "Для описания состояния автомобиля с пробегом в клиентском предложении.",
    conditionDescriptionTitle: "Состояние автомобиля",
    conditionDescriptionPlaceholder: "Для авто с пробегом: кузов, салон, ДТП/окрасы, обслуживание, результат проверки.",
    destinationLabel: "Город доставки",
    costSectionTitle: "Расчет стоимости",
    costSectionHelp: "После выбора города подставляются ориентировочные расходы. Все суммы можно изменить вручную.",
    advancedTaxTitle: "Налоги / проверка TKS",
    advancedTaxHelp: "Открывайте для проверки расчета импорта физлицом.",
	    imageSectionTitle: "Фотографии автомобиля",
	    imageSectionHelp: "Можно вставить ссылки на изображения или загрузить локальные файлы для предпросмотра.",
	    imageAdvancedTitle: "Дополнительные фото и источник",
	    imageAdvancedHelp: "Открывайте, если нужно показать больше фото или сохранить источник.",
	    sourcePageLabel: "URL страницы-источника",
    mainImageUrlLabel: "URL главного фото",
    thumbnailUrlLabel: "URL миниатюры",
    imageUploadLabel: "Локальная загрузка",
    imagePlaceholderText: "Фото автомобиля не добавлено",
    carPriceLabel: "Цена автомобиля",
    chinaLogisticsLabel: "Расходы на логистику по Китаю",
    exportProcessingLabel: "Экспортное оформление",
    freightLabel: "Расходы на международную логистику",
    taxLabel: "Налоги и сборы",
    profitLabel: "Сервисная комиссия",
    clientProfitLabel: "Закупка и экспортное сопровождение USD",
    exchangeRateLabel: "Курс CNY (авто / ручной ввод)",
    usdRubRateLabel: "CNY-RUB",
    usdCnyRateLabel: "CNY-USD",
    displayCurrencyLabel: "Валюта итога",
    costCurrencyLabel: "Валюта ввода цен",
    taxModeLabel: "Режим расчета налогов",
    taxModeManual: "Ручной ввод",
    taxModePersonal: "Результат TKS / физлицо",
    includeTaxInTotalLabel: "Условия предложения",
    fobPriceLabel: "FOB цена",
    cipPriceLabel: "CIP до города",
    ddpPriceLabel: "DDP полная стоимость",
    fobDetailsTitle: "Детализация FOB",
    cipDetailsTitle: "Детализация CIP до города",
    ddpDetailsTitle: "Детализация DDP",
    landedModeOnLabel: "Полная стоимость включена",
    openTksCalculatorLabel: "Открыть калькулятор TKS",
    tksCalculatorHint: "Откроет TKS и скопирует параметры; внесите результат TKS в поля ниже.",
    clearanceLabel: "Стоимость таможенного оформления",
    vehicleAgeLabel: "Возраст автомобиля",
    engineDisplacementLabel: "Объем двигателя, см3",
    personalUseLabel: "Личное пользование",
    personalUseYes: "Да",
    personalUseNo: "Нет",
    customsDutyLabel: "Пошлина TKS RUB",
    recyclingFeeLabel: "Утильсбор RUB",
    estimatedTaxTotalLabel: "Итого по TKS RUB",
    finalLandedCostLabel: "Итоговая стоимость RUB",
    quoteCardTitle: "Коммерческое предложение",
    quoteForLabel: "Клиент",
    privateCorporateLabel: "Физлицо / компания",
    quoteTermScopeLabel: "Условия",
    quoteTermScopeText: "FOB / CIP / DDP",
    validityShortLabel: "Срок",
    validityShortText: "24 часа",
    singleVehicleTitle: "Карточка автомобиля",
    sellingPointsTitle: "Преимущества",
    serviceScopeTitle: "Объем услуг",
    serviceScopeSubtitle: "Понятные границы закупки и экспортного сопровождения для частных и корпоративных клиентов.",
    scopeSourcingTitle: "Подтверждение авто",
    scopeSourcingText: "Модель, комплектация, фото и состояние",
    scopeExportTitle: "Экспортные документы",
    scopeExportText: "Координация закупки, экспорта и передаточных документов",
    scopeLogisticsTitle: "Международная логистика",
    scopeLogisticsText: "Маршрут до указанного города по выбранному условию",
    scopeClearanceTitle: "Оценка таможни",
    scopeClearanceText: "Ориентир по налогам с учетом типа клиента и страны назначения",
    priceStructureTitle: "Структура цены",
      grandTotalLabel: "Общая стоимость",
      fobPriceLabel: "FOB цена",
      cipPriceLabel: "CIP до города",
      ddpPriceLabel: "DDP полная стоимость",
      landedPriceLabel: "DDP полная стоимость",
      fobDetailsTitle: "Детализация FOB",
      cipDetailsTitle: "Детализация CIP до города",
      ddpDetailsTitle: "Детализация DDP",
      landedDetailsTitle: "Детализация DDP",
      taxEstimateDetailsTitle: "Предварительная оценка налогов",
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
	    rateLiveLabel: "Актуальный курс",
	    rateFallbackLabel: "Ручной курс",
	    rateUpdatedAtLabel: "Обновлено",
	    noteTitle: "Примечание",
    footerText: "Закупка и экспорт автомобилей из Китая",
    openCustomerQuoteLabel: "Открыть клиентское предложение",
    printQuoteLabel: "Печать / Экспорт PDF",
    newQuoteLabel: "Новый расчет",
    exportValidationTitle: "Заполните данные перед экспортом:",
    exportValidationImage: "Минимум 1 фото автомобиля",
    exportValidationTotal: "Итоговая стоимость должна быть больше 0",
    exportValidationClearance: "Стоимость таможенного оформления",
    exportValidationTax: "Налоги / режим расчета налогов",
    exportValidationDdpTax: "Для DDP нужны таможенное оформление и данные по налогам",
    resetQuoteConfirm: "Создать новый расчет? Текущие данные будут очищены.",
    missingQuoteTitle: "Данные расчета не найдены",
    missingQuoteText: "Сначала заполните данные автомобиля и стоимости на главной странице, затем создайте клиентское предложение.",
    missingQuoteAction: "Вернуться к расчету",
    termNoticeFob: "Указана цена FOB: включает закупку автомобиля и экспортное сопровождение; международная логистика, таможня и налоги в стране назначения не включены.",
    termNoticeCip: "Указана цена CIP до города: включает закупку, экспортное сопровождение и международную логистику до указанного города; пошлины, таможенное оформление и расходы после прибытия не включены.",
    termNoticeDdp: "Указана цена DDP: включает закупку, экспортное сопровождение, международную логистику, таможенное оформление и предварительную оценку налогов; финальная сумма зависит от подтверждения автомобиля, курса, маршрута и таможенного оформления.",
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
    vehicleQuoteTypeLabel: "Quote type",
    newVehicleQuoteLabel: "New vehicle quote",
    usedVehicleQuoteLabel: "Used vehicle quote",
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
    emissionStandardLabel: "Emission standard",
    fuelTypeLabel: "Fuel type",
    conditionDescriptionLabel: "Condition description",
    conditionDescriptionHelp: "Used for describing a used vehicle in the customer quotation.",
    conditionDescriptionTitle: "Vehicle condition",
    conditionDescriptionPlaceholder: "For used vehicles: exterior, interior, accident/paintwork, service history and inspection result.",
    destinationLabel: "Destination city",
    costSectionTitle: "Cost Calculation",
    costSectionHelp: "Destination presets fill reference costs automatically. Every amount remains editable.",
    advancedTaxTitle: "Advanced tax / TKS check",
    advancedTaxHelp: "Open when you need to verify Russia personal import duties.",
	    imageSectionTitle: "Vehicle Images",
	    imageSectionHelp: "Paste image links or upload local files for preview.",
	    imageAdvancedTitle: "More images and source",
	    imageAdvancedHelp: "Open only when you need more photos or source tracking.",
	    sourcePageLabel: "Source webpage URL",
    mainImageUrlLabel: "Main image URL",
    thumbnailUrlLabel: "Thumbnail URL",
    imageUploadLabel: "Local upload",
    imagePlaceholderText: "No vehicle image added",
    carPriceLabel: "Car price",
    chinaLogisticsLabel: "China domestic logistics cost",
    exportProcessingLabel: "Export processing",
    freightLabel: "International logistics cost",
    taxLabel: "Tax",
    profitLabel: "Service margin",
    clientProfitLabel: "Sourcing and export service USD",
    exchangeRateLabel: "CNY rate (live or manual)",
    usdRubRateLabel: "CNY-RUB",
    usdCnyRateLabel: "CNY-USD",
    displayCurrencyLabel: "Total display currency",
    costCurrencyLabel: "Cost input currency",
    taxModeLabel: "Tax mode",
    taxModeManual: "Manual input",
    taxModePersonal: "TKS official result",
    includeTaxInTotalLabel: "Quote term",
    fobPriceLabel: "FOB price",
    cipPriceLabel: "CIP delivered price",
    ddpPriceLabel: "DDP landed price",
    fobDetailsTitle: "FOB price details",
    cipDetailsTitle: "CIP delivered price details",
    ddpDetailsTitle: "DDP landed price details",
    landedModeOnLabel: "All-inclusive landed price shown",
    openTksCalculatorLabel: "Open TKS official calculator",
    tksCalculatorHint: "Opens TKS and copies current parameters; paste the TKS result into the fields below.",
    clearanceLabel: "Customs service fee",
    vehicleAgeLabel: "Vehicle age",
    engineDisplacementLabel: "Engine displacement cc",
    personalUseLabel: "Personal use",
    personalUseYes: "Yes",
    personalUseNo: "No",
    customsDutyLabel: "TKS customs duty RUB",
    recyclingFeeLabel: "Utilization fee RUB",
    estimatedTaxTotalLabel: "TKS tax total RUB",
    finalLandedCostLabel: "Final landed cost RUB",
    quoteCardTitle: "Customer Vehicle Quotation",
    quoteForLabel: "Client type",
    privateCorporateLabel: "Private / corporate",
    quoteTermScopeLabel: "Terms",
    quoteTermScopeText: "FOB / CIP / DDP",
    validityShortLabel: "Validity",
    validityShortText: "24 hours",
    singleVehicleTitle: "Single Vehicle Card",
    sellingPointsTitle: "Key Advantages",
    serviceScopeTitle: "Service Scope",
    serviceScopeSubtitle: "Clear sourcing and export execution boundaries for private and corporate customers.",
    scopeSourcingTitle: "Vehicle confirmation",
    scopeSourcingText: "Model, trim, photos and condition details",
    scopeExportTitle: "Export documents",
    scopeExportText: "China sourcing, export handling and handover documents",
    scopeLogisticsTitle: "International logistics",
    scopeLogisticsText: "Delivery route to the selected city according to quote term",
    scopeClearanceTitle: "Customs estimate",
    scopeClearanceText: "Duty and tax reference based on client type and destination",
    priceStructureTitle: "Price Structure",
      grandTotalLabel: "Total Cost",
      fobPriceLabel: "FOB price",
      cipPriceLabel: "CIP delivered price",
      ddpPriceLabel: "DDP landed price",
      landedPriceLabel: "DDP landed price",
      fobDetailsTitle: "FOB price details",
      cipDetailsTitle: "CIP delivered price details",
      ddpDetailsTitle: "DDP landed price details",
      landedDetailsTitle: "DDP landed price details",
      taxEstimateDetailsTitle: "Estimated tax details",
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
	    rateLiveLabel: "Live rate",
	    rateFallbackLabel: "Manual rate",
	    rateUpdatedAtLabel: "Updated",
	    noteTitle: "Quotation note",
    footerText: "China vehicle sourcing and export execution",
    openCustomerQuoteLabel: "Open Customer Quote",
    printQuoteLabel: "Print / Export PDF",
    newQuoteLabel: "New quote",
    exportValidationTitle: "Please complete the quote before export:",
    exportValidationImage: "At least 1 vehicle image",
    exportValidationTotal: "Total must be greater than 0",
    exportValidationClearance: "Customs service fee",
    exportValidationTax: "Tax amount / tax mode",
    exportValidationDdpTax: "DDP requires customs service fee and tax details",
    resetQuoteConfirm: "Create a new quote? Current input will be cleared.",
    missingQuoteTitle: "No quote data found",
    missingQuoteText: "Fill in vehicle and cost details on the main quote page before generating a customer quote.",
    missingQuoteAction: "Back to quote page",
    termNoticeFob: "Current term is FOB: includes vehicle sourcing and export service only. International freight, customs clearance and destination taxes are not included.",
    termNoticeCip: "Current term is CIP delivered price: includes vehicle sourcing, export service and international logistics to the selected city. Duties, customs service and post-arrival landed costs are not included.",
    termNoticeDdp: "Current term is DDP landed price: includes vehicle sourcing, export service, international logistics, customs service fee and estimated taxes. Final cost depends on vehicle confirmation, exchange rate, route and customs clearance.",
  };
}

applyStableBusinessText();

const fields = {
  model: document.querySelector("#model"),
  modelZh: document.querySelector("#modelZh"),
  modelRu: document.querySelector("#modelRu"),
  vehicleQuoteType: document.querySelector("#vehicleQuoteType"),
  vehicleQuoteTypeButtons: document.querySelectorAll(".vehicle-type-button"),
  trim: document.querySelector("#trim"),
  year: document.querySelector("#year"),
  mileage: document.querySelector("#mileage"),
  color: document.querySelector("#color"),
  engine: document.querySelector("#engine"),
  transmission: document.querySelector("#transmission"),
  horsepower: document.querySelector("#horsepower"),
  status: document.querySelector("#status"),
  emissionStandard: document.querySelector("#emissionStandard"),
  fuelType: document.querySelector("#fuelType"),
  conditionGrade: document.querySelector("#conditionGrade"),
  conditionDescription: document.querySelector("#conditionDescription"),
  destination: document.querySelector("#destination"),
  carPriceUsd: document.querySelector("#carPriceUsd"),
  chinaLogisticsUsd: document.querySelector("#chinaLogisticsUsd"),
  exportProcessingUsd: document.querySelector("#exportProcessingUsd"),
  freightUsd: document.querySelector("#freightUsd"),
  clearanceRub: document.querySelector("#clearanceRub"),
  taxRub: document.querySelector("#taxRub"),
  includeTaxInTotal: document.querySelector("#includeTaxInTotal"),
  quoteTerm: document.querySelector("#quoteTerm"),
  quoteTermButtons: document.querySelectorAll(".quote-term-button"),
  quoteCostCurrency: document.querySelector("#quoteCostCurrency"),
  costCurrencyButtons: document.querySelectorAll(".cost-currency-button"),
  landedModeToggle: document.querySelector("#landedModeToggle"),
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
	  exchangeRateCny: document.querySelector("#exchangeRateCny"),
	  liveRateSummary: document.querySelector("#liveRateSummary"),
	  rateMeta: document.querySelector("#rateMeta"),
  sourcePageUrl: document.querySelector("#sourcePageUrl"),
  imageUrlInputs: document.querySelectorAll(".vehicle-image-url"),
  imageFileInputs: document.querySelectorAll(".vehicle-image-file"),
  openCustomerQuote: document.querySelector("#openCustomerQuote"),
  newQuote: document.querySelector("#newQuote"),
  openTksCalculator: document.querySelector("#openTksCalculator"),
  printQuote: document.querySelector("#printQuote"),
  displayCurrency: document.querySelector("#displayCurrency"),
  displayCurrencyControls: document.querySelectorAll(".display-currency-control"),
};

const preview = {
  logoImage: document.querySelector("#logoImage"),
  logoInitials: document.querySelector("#logoInitials"),
  logoName: document.querySelector("#logoName"),
  logoTagline: document.querySelector("#logoTagline"),
  miniLogoText: document.querySelector("#miniLogoText"),
  modelZh: document.querySelector("#previewModelZh"),
  modelRu: document.querySelector("#previewModelRu"),
  vehicleQuoteType: document.querySelector("#previewVehicleQuoteType"),
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
  specEmissionStandard: document.querySelector("#specEmissionStandard"),
  specFuelType: document.querySelector("#specFuelType"),
  conditionGradePreview: document.querySelector("#conditionGradePreview"),
  conditionGradeBadge: document.querySelector("#conditionGradeBadge"),
  conditionGradeTitle: document.querySelector("#conditionGradeTitle"),
  conditionGradeText: document.querySelector("#conditionGradeText"),
  conditionDescriptionPreview: document.querySelector("#conditionDescriptionPreview"),
  totalRub: document.querySelector("#totalRub"),
  totalUsd: document.querySelector("#totalUsd"),
  totalUsdHero: document.querySelector("#totalUsdHero"),
  primaryPriceLabel: document.querySelector("#primaryPriceLabel"),
  primaryDetailsHeading: document.querySelector("#primaryDetailsHeading"),
  cipTotalMain: document.querySelector("#cipTotalMain"),
  cipTotalSub: document.querySelector("#cipTotalSub"),
  landedTotalMain: document.querySelector("#landedTotalMain"),
  landedTotalSub: document.querySelector("#landedTotalSub"),
  selectedTotalLabel: document.querySelector("#selectedTotalLabel"),
  usdSubtotal: document.querySelector("#usdSubtotal"),
  rubSubtotal: document.querySelector("#rubSubtotal"),
  priceCar: document.querySelector("#priceCar"),
  priceChinaLogistics: document.querySelector("#priceChinaLogistics"),
  priceExportProcessing: document.querySelector("#priceExportProcessing"),
  priceFreight: document.querySelector("#priceFreight"),
  priceProfit: document.querySelector("#priceProfit"),
  landedPriceCar: document.querySelector("#landedPriceCar"),
  landedPriceChinaLogistics: document.querySelector("#landedPriceChinaLogistics"),
  landedPriceExportProcessing: document.querySelector("#landedPriceExportProcessing"),
  landedPriceFreight: document.querySelector("#landedPriceFreight"),
  landedPriceProfit: document.querySelector("#landedPriceProfit"),
  priceClearance: document.querySelector("#priceClearance"),
  priceCustomsDuty: document.querySelector("#priceCustomsDuty"),
  priceRecyclingFee: document.querySelector("#priceRecyclingFee"),
  priceTax: document.querySelector("#priceTax"),
  priceEstimatedTaxTotal: document.querySelector("#priceEstimatedTaxTotal"),
  priceCipTotal: document.querySelector("#priceCipTotal"),
  priceGrandTotal: document.querySelector("#priceGrandTotal"),
  priceFinalLandedCost: document.querySelector("#priceFinalLandedCost"),
  landedDetailsHeading: document.querySelector("#landedDetailsHeading"),
	  rate: document.querySelector("#ratePreview"),
	  rateMeta: document.querySelector("#rateMetaPreview"),
  quoteNumber: document.querySelector("#quoteNumber"),
  quoteDate: document.querySelector("#quoteDate"),
  noteText: document.querySelector("#noteText"),
  cipTaxNotice: document.querySelector("#cipTaxNotice"),
  validityText: document.querySelector("#validityText"),
  mainVehicleImage: document.querySelector("#mainVehicleImageImg"),
  imagePlaceholder: document.querySelector("#imagePlaceholder"),
  quoteImageGrid: document.querySelector("#quoteImageGrid"),
  thumbnailStrip: document.querySelector("#thumbnailStrip"),
  sellingPointsText: document.querySelector("#sellingPointsText"),
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
const isCustomerOutputPage = document.body.classList.contains("customer-print-page")
  || document.body.classList.contains("pdf-output-page");
const vehicleImageUrlSources = [...businessSettings.vehicleImages.imageUrls];
const vehicleImageLocalSources = Array(vehicleImageUrlSources.length).fill("");
const vehicleImageSourceNames = Array(vehicleImageUrlSources.length).fill("");
const pendingVehicleImageReads = Array(vehicleImageUrlSources.length).fill(Promise.resolve());
const quoteStorageKey = "shanhaiHubQuoteData";
const quoteStorageBackupKey = "shanhaiHubLatestQuoteData";
const quoteLandedModeKey = "shanhaiHubShowLandedPrice";
const quoteTermStorageKey = "shanhaiHubQuoteTerm";

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
  const rawValue = String(value || "").trim();

  if (!rawValue) {
    return "";
  }

  if (deliveryCityLegacyAliases[rawValue]) {
    return deliveryCityLegacyAliases[rawValue];
  }

  const normalizedValue = rawValue.toLowerCase();
  const preset = businessSettings.deliveryCityPresets.find((item) => {
    const en = deliveryCityEnglishLabels[item.zh] || "";
    const labels = [
      item.zh,
      item.ru,
      en,
      `${item.zh} / ${item.ru}`,
      `${en} / ${item.zh} / ${item.ru}`,
    ];

    return labels.some((label) => String(label || "").trim().toLowerCase() === normalizedValue);
  });

  return preset ? preset.zh : rawValue;
}

function getDeliveryCityPreset(value) {
  const normalizedValue = normalizeDeliveryCityValue(value);

  return destinationPresets[normalizedValue]
    || businessSettings.deliveryCityPresets.find((preset) => preset.ru === value)
    || null;
}

function getDeliveryCityInputLabel(preset) {
  return preset ? getDeliveryCityLabel(preset) : "";
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

function getLocalizedManualText(value) {
  const rawValue = String(value || "").trim();

  if (!rawValue) {
    return "";
  }

  const parts = rawValue
    .split(/\s*[\/|｜]\s*/g)
    .map((part) => part.trim())
    .filter(Boolean);

  if (parts.length < 3) {
    return rawValue;
  }

  const valuesByLanguage = {
    zh: parts[0],
    en: parts[1],
    ru: parts[2],
  };

  return valuesByLanguage[currentLanguage] || rawValue;
}

function splitConditionDescription(text) {
  return String(text || "")
    .split(/([。；;，,\n]+)/g)
    .reduce((items, part) => {
      const value = part.trim();
      if (!value) {
        return items;
      }
      if (/^[。；;，,]+$/.test(value)) {
        if (items.length) {
          items[items.length - 1].separator = value;
        }
        return items;
      }
      items.push({ text: value, separator: "" });
      return items;
    }, []);
}

function translateConditionSegment(segment, language) {
  if (language === "zh") {
    return segment;
  }

  const normalized = segment.replace(/\s+/g, "");
  const phrase = businessSettings.conditionDescriptionPhrases.find((item) => {
    return normalized === item.zh.replace(/\s+/g, "");
  });

  return phrase?.[language] || segment;
}

function translateConditionDescriptionFromChinese(sourceText, language = currentLanguage) {
  const source = String(sourceText || "").trim();

  if (!source || language === "zh") {
    return source;
  }

  const joiner = language === "ru" ? "; " : "; ";
  return splitConditionDescription(source)
    .map((item) => translateConditionSegment(item.text, language))
    .filter(Boolean)
    .join(joiner);
}

function getConditionDescriptionSource() {
  if (!fields.conditionDescription) {
    return "";
  }

  if (currentLanguage === "zh") {
    fields.conditionDescription.dataset.zhSource = fields.conditionDescription.value || "";
  }

  return fields.conditionDescription.dataset.zhSource || fields.conditionDescription.value || "";
}

function syncConditionDescriptionForLanguage() {
  if (!fields.conditionDescription) {
    return;
  }

  const source = getConditionDescriptionSource();
  fields.conditionDescription.value = translateConditionDescriptionFromChinese(source, currentLanguage);
}

function getLocalizedOptionText(options, value) {
  const option = getOptionByValue(options, value);

  if (!option) {
    return "";
  }

  if (currentLanguage === "ru") {
    return option.ru;
  }

  if (currentLanguage === "en") {
    return option.en;
  }

  return option.zh;
}

function getMultilingualSourceValue(field) {
  return field?.dataset.multilingualSource || field?.value || "";
}

function getLocalizedFieldText(field, options = null) {
  const sourceValue = getMultilingualSourceValue(field);
  const optionText = options ? getLocalizedOptionText(options, sourceValue) : "";

  return optionText || getLocalizedManualText(sourceValue);
}

function setLocalizedFieldValue(field, options = null) {
  if (!field) {
    return;
  }

  const currentValue = String(field.value || "").trim();
  const sourceValue = getMultilingualSourceValue(field);
  const optionText = options ? getLocalizedOptionText(options, sourceValue) : "";
  const localizedText = optionText || getLocalizedManualText(sourceValue);

  if (sourceValue && localizedText && localizedText !== sourceValue) {
    field.dataset.multilingualSource = sourceValue;
    field.value = localizedText;
  }
}

function getStatusDisplay(value) {
  const option = getOptionByValue(businessSettings.vehicleStatusOptions, value);

  if (!option) {
    return getLocalizedManualText(value) || "-";
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

function getNumericText(value) {
  return String(value || "").replace(",", ".").match(/\d+(\.\d+)?/)?.[0] || "";
}

function getTksAgeValue() {
  const age = numberFromInput(fields.vehicleAgeYears);

  if (age < 3) return "3";
  if (age < 5) return "35";
  if (age < 7) return "57";
  return "7";
}

function getTksEngineType() {
  const text = [
    fields.engine?.value,
    fields.modelZh?.value,
    fields.model?.value,
    fields.modelRu?.value,
  ].join(" ").toLowerCase();

  if (/electric|ev|электро|电动|纯电/.test(text)) {
    return "electric";
  }

  if (/diesel|дизель|柴油/.test(text)) {
    return /hybrid|гибрид|混动|增程|理想|li auto/.test(text) ? "diesel_electric" : "diesel";
  }

  if (/hybrid|гибрид|混动|增程|理想|li auto|aito|问界/.test(text)) {
    return "petrol_electric";
  }

  return "petrol";
}

function getTksPowerValue() {
  return getNumericText(fields.horsepower?.value) || "";
}

function getTksClipboardText() {
  const engineTypeLabels = {
    petrol: "бензиновый",
    diesel: "дизельный",
    petrol_electric: "бензиновый и электрический",
    diesel_electric: "дизельный и электрический",
    electric: "электрический",
  };
  const engineType = getTksEngineType();

  return [
    "TKS calculator check data:",
    `Стоимость: ${Math.ceil(usdToCurrencyAmount(getUsdCostInput(fields.carPriceUsd), "CNY"))} CNY`,
    `Объем: ${numberFromInput(fields.engineDisplacementCc)} cc`,
    `Мощность: ${getTksPowerValue()} л.с.`,
    `Возраст: ${getTksAgeValue() === "3" ? "меньше 3 лет" : getTksAgeValue()}`,
    `Тип двигателя: ${engineTypeLabels[engineType] || engineType}`,
    `Ввозит: физическое лицо (ЕТС)`,
    `Последовательная установка: ${engineType === "petrol_electric" || engineType === "diesel_electric" ? "да, если это Li Auto / AITO / range extender" : "нет"}`,
  ].join("\n");
}

async function copyTksDataToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.info("TKS data could not be copied automatically.", error);
    return false;
  }
}

function openTksCalculator() {
  const tksData = getTksClipboardText();

  copyTksDataToClipboard(tksData);
  window.open(businessSettings.taxRules.officialCalculatorUrl, "_blank", "noopener");
}

function getSelectedDisplayCurrency() {
  if (fields.displayCurrency) {
    return fields.displayCurrency.value || "CNY";
  }

  const firstCurrencyControl = fields.displayCurrencyControls && fields.displayCurrencyControls[0];
  if (firstCurrencyControl) {
    return firstCurrencyControl.value || "CNY";
  }

  return "CNY";
}

function syncDisplayCurrencyControls(currency = getSelectedDisplayCurrency()) {
  const selectedCurrency = currency || "CNY";

  if (fields.displayCurrency && fields.displayCurrency.value !== selectedCurrency) {
    fields.displayCurrency.value = selectedCurrency;
  }

  fields.displayCurrencyControls.forEach((control) => {
    if (control.value !== selectedCurrency) {
      control.value = selectedCurrency;
    }
  });
}

function getTotalByCurrency(result, currency) {
  return quoteMath.getTotalByCurrency(result, currency, getCnyRate());
}

function getAmountByCurrency(amountUsd, amountRub, currency) {
  return quoteMath.getAmountByCurrency(amountUsd, amountRub, currency, getCnyRate());
}

function getCurrencyAmountSet(amountUsd, amountRub) {
  return quoteMath.getCurrencyAmountSet(amountUsd, amountRub, getCnyRate());
}

function getQuoteCnyTotals(result) {
  return quoteMath.getQuoteCnyTotals(result, getCnyRate());
}

function formatCurrencyAmount(value, currency) {
  if (currency === "USD") {
    return formatUsd(value);
  }

  if (currency === "CNY") {
    return `¥${Math.ceil(Number(value) || 0).toLocaleString("en-US")}`;
  }

  return formatRub(value);
}

function getCnyToRubRate() {
  const inputRate = numberFromInput(fields.exchangeRate);

  if (Number.isFinite(inputRate) && inputRate > 0) {
    return inputRate;
  }

  return businessSettings.exchangeRate.cnyToRub;
}

function getCnyToUsdRate() {
  const inputRate = numberFromInput(fields.exchangeRateCny);

  if (Number.isFinite(inputRate) && inputRate > 0) {
    return inputRate;
  }

  return businessSettings.exchangeRate.cnyToUsd;
}

function getUsdToRubRate() {
  const cnyToUsdRate = getCnyToUsdRate();
  return cnyToUsdRate > 0 ? getCnyToRubRate() / cnyToUsdRate : 0;
}

function getCnyRate() {
  const cnyToUsdRate = getCnyToUsdRate();
  return cnyToUsdRate > 0 ? 1 / cnyToUsdRate : 0;
}

function getDisplayAmountFromUsd(amountUsd, exchangeRate, currency) {
  const usdValue = Number(amountUsd) || 0;
  const rubValue = usdValue * getUsdToRubRate();

  if (currency === "CNY") {
    return usdValue * getCnyRate();
  }

  return getAmountByCurrency(usdValue, rubValue, currency);
}

function getDisplayAmountFromRub(amountRub, exchangeRate, currency) {
  const rubValue = Number(amountRub) || 0;
  const usdToRubRate = getUsdToRubRate();
  const usdValue = usdToRubRate > 0 ? rubValue / usdToRubRate : 0;
  return getAmountByCurrency(usdValue, rubValue, currency);
}

function formatDisplayFromUsd(amountUsd, result, currency) {
  return formatCurrencyAmount(getDisplayAmountFromUsd(amountUsd, result.exchangeRate, currency), currency);
}

function formatDisplayFromRub(amountRub, result, currency) {
  return formatCurrencyAmount(getDisplayAmountFromRub(amountRub, result.exchangeRate, currency), currency);
}

function setPriceLabelCurrency(valueElement, currency) {
  const label = valueElement?.closest("div")?.querySelector("span");

  if (!label || label.closest(".cost-grid")) {
    return;
  }

  label.textContent = /\s+(USD|RUB|CNY)$/i.test(label.textContent)
    ? label.textContent.replace(/\s+(USD|RUB|CNY)$/i, ` ${currency}`)
    : `${label.textContent} ${currency}`;
}

function setPreviewMoney(valueElement, text, currency) {
  setPreviewText(valueElement, text);
  setPriceLabelCurrency(valueElement, currency);
}

function currencyAmountToUsd(amount, currency, exchangeRate = numberFromInput(fields.exchangeRate)) {
  const value = Number(amount) || 0;

  if (currency === "RUB") {
    const usdToRubRate = getUsdToRubRate();
    return usdToRubRate > 0 ? value / usdToRubRate : 0;
  }

  if (currency === "CNY") {
    return value * getCnyToUsdRate();
  }

  return value;
}

function currencyAmountToRub(amount, currency, exchangeRate = numberFromInput(fields.exchangeRate)) {
  const value = Number(amount) || 0;

  if (currency === "USD") {
    return value * getUsdToRubRate();
  }

  if (currency === "CNY") {
    return value * getCnyToRubRate();
  }

  return value;
}

function usdToCurrencyAmount(amountUsd, currency, exchangeRate = numberFromInput(fields.exchangeRate)) {
  const value = Number(amountUsd) || 0;

  if (currency === "RUB") {
    return value * getUsdToRubRate();
  }

  if (currency === "CNY") {
    return value * getCnyRate();
  }

  return value;
}

function rubToCurrencyAmount(amountRub, currency, exchangeRate = numberFromInput(fields.exchangeRate)) {
  const value = Number(amountRub) || 0;

  if (currency === "USD") {
    const usdToRubRate = getUsdToRubRate();
    return usdToRubRate > 0 ? value / usdToRubRate : 0;
  }

  if (currency === "CNY") {
    const cnyToRubRate = getCnyToRubRate();
    return cnyToRubRate > 0 ? value / cnyToRubRate : 0;
  }

  return value;
}

function getSelectedCostCurrency() {
  const value = String(fields.quoteCostCurrency?.value || "CNY").toUpperCase();
  return ["CNY", "USD", "RUB"].includes(value) ? value : "CNY";
}

function isUsdCostField(field) {
  return [
    fields.carPriceUsd,
    fields.chinaLogisticsUsd,
    fields.exportProcessingUsd,
    fields.freightUsd,
    fields.profitUsd,
  ].includes(field);
}

function isRubCostField(field) {
  return [fields.clearanceRub, fields.taxRub].includes(field);
}

function storeCostFieldBaseValue(field) {
  if (!field || (!isUsdCostField(field) && !isRubCostField(field))) {
    return;
  }

  if (isUsdCostField(field)) {
    const currency = getSelectedCostCurrency();
    const exchangeRate = numberFromInput(fields.exchangeRate);
    field.dataset.baseUsd = String(currencyAmountToUsd(
      numberFromInput(field),
      currency,
      exchangeRate
    ));
    return;
  }

  field.dataset.baseRub = String(numberFromInput(field));
}

function refreshCostBaseValuesFromDisplayedInputs() {
  [
    fields.carPriceUsd,
    fields.chinaLogisticsUsd,
    fields.exportProcessingUsd,
    fields.freightUsd,
    fields.profitUsd,
  ].filter(Boolean).forEach(storeCostFieldBaseValue);
}

function ensureCostFieldBaseValue(field) {
  if (!field) {
    return;
  }

  if (isUsdCostField(field) && field.dataset.baseUsd === undefined) {
    storeCostFieldBaseValue(field);
  }

  if (isRubCostField(field) && field.dataset.baseRub === undefined) {
    storeCostFieldBaseValue(field);
  }
}

function getUsdCostInput(field) {
  ensureCostFieldBaseValue(field);
  return Number(field?.dataset.baseUsd) || 0;
}

function getRubCostInput(field) {
  return numberFromInput(field);
}

function setCostFieldFromUsd(field, amountUsd) {
  if (field) {
    field.value = formatEditableNumber(usdToCurrencyAmount(amountUsd, getSelectedCostCurrency(), numberFromInput(fields.exchangeRate)));
  }
}

function setCostFieldFromRub(field, amountRub) {
  if (field) {
    field.value = formatEditableNumber(amountRub);
  }
}

function formatEditableNumber(value) {
  const number = Number(value) || 0;
  return String(Math.ceil(number));
}

function formatExchangeRateMeta() {
  const text = businessSettings.text[currentLanguage] || businessSettings.text.zh;
  const statusLabel = exchangeRateState.isLive
    ? (text.rateLiveLabel || businessSettings.text.zh.rateLiveLabel)
    : (text.rateFallbackLabel || businessSettings.text.zh.rateFallbackLabel);

  if (!exchangeRateState.isLive || !exchangeRateState.updatedAt) {
    return statusLabel;
  }

  const updatedAt = new Date(exchangeRateState.updatedAt).toLocaleString("zh-CN", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  return `${statusLabel} · ${text.rateUpdatedAtLabel || businessSettings.text.zh.rateUpdatedAtLabel}: ${updatedAt}`;
}

function updateCostCurrencyLabels() {
  const rateMeta = formatExchangeRateMeta();

  if (fields.liveRateSummary) {
    fields.liveRateSummary.textContent = `CNY-RUB ${getCnyToRubRate().toLocaleString("en-US", {
      maximumFractionDigits: 4,
    })} / CNY-USD ${getCnyToUsdRate().toLocaleString("en-US", {
      maximumFractionDigits: 6,
    })}`;
  }

  if (fields.rateMeta) {
    fields.rateMeta.textContent = rateMeta;
  }

  if (preview.rateMeta) {
    preview.rateMeta.textContent = rateMeta;
  }
}

function syncCostCurrencyButtons() {
  const currency = getSelectedCostCurrency();
  fields.costCurrencyButtons.forEach((button) => {
    const isActive = button.dataset.costCurrency === currency;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
  updateCostCurrencyLabels();
}

function setCostCurrency(currency, options = {}) {
  const nextCurrency = ["CNY", "USD", "RUB"].includes(String(currency).toUpperCase())
    ? String(currency).toUpperCase()
    : "CNY";
  const previousCurrency = getSelectedCostCurrency();
  const shouldConvert = options.convert !== false && previousCurrency !== nextCurrency;
  const usdFields = [
    fields.carPriceUsd,
    fields.chinaLogisticsUsd,
    fields.exportProcessingUsd,
    fields.freightUsd,
    fields.profitUsd,
  ];

  if (shouldConvert) {
    usdFields.forEach(ensureCostFieldBaseValue);
    const usdValues = usdFields.map((field) => Number(field?.dataset.baseUsd) || 0);

    if (fields.quoteCostCurrency) {
      fields.quoteCostCurrency.value = nextCurrency;
    }

    usdFields.forEach((field, index) => setCostFieldFromUsd(field, usdValues[index]));
  } else if (fields.quoteCostCurrency) {
    fields.quoteCostCurrency.value = nextCurrency;
  }

  syncCostCurrencyButtons();
}

function parseMoneyNumber(value) {
  if (typeof value === "number") {
    return Number.isFinite(value) ? value : 0;
  }

  const normalized = String(value || "")
    .replace(/\u00a0/g, "")
    .replace(/\s/g, "")
    .replace(/[^\d.,-]/g, "")
    .replace(/,(?=\d{1,2}$)/, ".")
    .replace(/,/g, "");

  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : 0;
}

function numberFromInput(input) {
  return parseMoneyNumber(input?.value);
}

function clampNumber(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function validateMoneyInput(input, rule) {
  const originalValue = parseMoneyNumber(input.value);

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

function getValidationDisplayRule(key, rule) {
  const currency = getSelectedCostCurrency();

  if (["carPriceUsd", "chinaLogisticsUsd", "exportProcessingUsd", "freightUsd", "profitUsd"].includes(key)) {
    return {
      min: usdToCurrencyAmount(rule.min, currency, numberFromInput(fields.exchangeRate)),
      max: usdToCurrencyAmount(rule.max, currency, numberFromInput(fields.exchangeRate)),
    };
  }

  if (["clearanceRub", "taxRub"].includes(key)) {
    return rule;
  }

  return rule;
}

function validateAllMoneyInputs() {
  Object.entries(businessSettings.validation).forEach(([key, rule]) => {
    if (fields[key]) {
      validateMoneyInput(fields[key], getValidationDisplayRule(key, rule));
    }
  });
}

function formatUsd(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(Math.ceil(Number(amount) || 0));
}

function formatRub(amount) {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  }).format(Math.ceil(Number(amount) || 0));
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
    fields.customsDutyRub.value = Math.ceil(Number(customsDutyRub) || 0).toLocaleString("ru-RU");
  }
  if (fields.recyclingFeeRub) {
    fields.recyclingFeeRub.value = Math.ceil(Number(recyclingFeeRub) || 0).toLocaleString("ru-RU");
  }
  if (fields.utilizationFeeRub) {
    fields.utilizationFeeRub.value = Math.ceil(Number(recyclingFeeRub) || 0).toLocaleString("ru-RU");
  }
  if (fields.estimatedTaxTotalRub) {
    fields.estimatedTaxTotalRub.value = Math.ceil(Number(estimatedTaxTotalRub) || 0).toLocaleString("ru-RU");
  }
  if (fields.finalLandedCostRub) {
    fields.finalLandedCostRub.value = Math.ceil(Number(finalLandedCostRub) || 0).toLocaleString("ru-RU");
  }
}

function getTksOfficialTaxResult() {
  const customsDutyRub = numberFromInput(fields.customsDutyRub);
  const recyclingFeeRub = numberFromInput(fields.recyclingFeeRub);
  const enteredTotalRub = numberFromInput(fields.estimatedTaxTotalRub);
  const fallbackTaxRub = getRubCostInput(fields.taxRub);
  const detailTotalRub = customsDutyRub + recyclingFeeRub;
  const estimatedTaxTotalRub = detailTotalRub > 0
    ? detailTotalRub
    : (enteredTotalRub > 0 ? enteredTotalRub : fallbackTaxRub);

  return {
    customsDutyRub,
    recyclingFeeRub,
    estimatedTaxTotalRub,
    note: businessSettings.taxRules.personalUseNote,
  };
}

function setElementHidden(element, hidden) {
  if (element) {
    element.hidden = hidden;
    element.style.display = hidden ? "none" : "";
  }
}

function setPriceRowHidden(valueElement, hidden) {
  const row = valueElement?.closest(".price-row, .price-card-grid > div, .pdf-price-grid > div");
  setElementHidden(row, hidden);
}

function updateLandedPriceVisibility(showLandedPrice, quoteTerm = getSelectedQuoteTerm()) {
  syncLandedModeButton();
  const showPrimaryPrice = quoteTerm === "fob" || quoteTerm === "cip";
  const showTaxEstimate = false;
  const showDdpPrice = quoteTerm === "ddp";

  document.querySelectorAll(".cip-price-block").forEach((element) => {
    setElementHidden(element, !showPrimaryPrice);
  });

  document.querySelectorAll(".landed-price-content").forEach((element) => {
    setElementHidden(element, !showDdpPrice);
  });

  document.querySelectorAll(".landed-total-content").forEach((element) => {
    setElementHidden(element, !showDdpPrice);
  });

  document.querySelectorAll(".landed-only-row").forEach((element) => {
    setElementHidden(element, !showLandedPrice);
  });

  document.querySelectorAll(".tax-estimate-row").forEach((element) => {
    setElementHidden(element, false);
  });

  document.querySelectorAll(".cip-support-row").forEach((element) => {
    setElementHidden(element, true);
  });

  setPriceRowHidden(preview.priceFinalLandedCost, true);

  if (preview.landedDetailsHeading) {
    const text = businessSettings.text[currentLanguage] || businessSettings.text.zh;
    preview.landedDetailsHeading.textContent = showDdpPrice
      ? (text.ddpDetailsTitle || text.landedDetailsTitle)
      : text.taxEstimateDetailsTitle;
  }

  document.querySelectorAll(".landed-price-block").forEach((element) => {
    setElementHidden(element, !(showTaxEstimate || showDdpPrice));
  });

  setElementHidden(preview.cipTaxNotice, true);

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
    fields.taxRub.readOnly = false;
    fields.taxRub.title = isPersonalUseMode
      ? "Paste the TKS official total tax result here, or fill the TKS detail fields below."
      : "";
  }

  [fields.customsDutyRub, fields.recyclingFeeRub, fields.estimatedTaxTotalRub].forEach((field) => {
    if (field) {
      field.readOnly = false;
      field.title = isPersonalUseMode ? "Paste the official TKS result here." : "";
    }
  });

  if (fields.finalLandedCostRub) {
    fields.finalLandedCostRub.readOnly = true;
  }

  setElementHidden(taxInputWrapper, false);
  autoTaxWrappers.forEach((wrapper) => setElementHidden(wrapper, !isPersonalUseMode));
  setPriceRowHidden(preview.priceTax, isPersonalUseMode);
  setPriceRowHidden(preview.priceCustomsDuty, !isPersonalUseMode);
  setPriceRowHidden(preview.priceRecyclingFee, !isPersonalUseMode);
  setPriceRowHidden(preview.priceEstimatedTaxTotal, false);
  setPriceRowHidden(preview.priceFinalLandedCost, true);
}

function updatePriceDetailVisibility(mode, showLandedPrice, quoteTerm = getSelectedQuoteTerm()) {
  const isPersonalUseMode = mode === "ruPersonalUse";
  const showDdpPrice = quoteTerm === "ddp";
  const showCipTaxEstimate = false;

  document.querySelectorAll(".cip-support-row").forEach((element) => {
    setElementHidden(element, true);
  });

  document.querySelectorAll(".freight-cost-row").forEach((element) => {
    setElementHidden(element, quoteTerm === "fob");
  });

  if (!showDdpPrice) {
    document.querySelectorAll(".landed-only-row").forEach((element) => {
      setElementHidden(element, true);
    });

    document.querySelectorAll(".tax-estimate-row").forEach((element) => {
      setElementHidden(element, !showCipTaxEstimate);
    });

    setPriceRowHidden(preview.priceCustomsDuty, true);
    setPriceRowHidden(preview.priceRecyclingFee, true);
    setPriceRowHidden(preview.priceTax, true);
    setPriceRowHidden(preview.priceGrandTotal, true);
    setPriceRowHidden(preview.priceFinalLandedCost, true);
    return;
  }

  document.querySelectorAll(".landed-only-row").forEach((element) => {
    setElementHidden(element, false);
  });

  document.querySelectorAll(".tax-estimate-row").forEach((element) => {
    setElementHidden(element, false);
  });

  setPriceRowHidden(preview.priceCustomsDuty, !isPersonalUseMode);
  setPriceRowHidden(preview.priceRecyclingFee, !isPersonalUseMode);
  setPriceRowHidden(preview.priceTax, isPersonalUseMode);
  setPriceRowHidden(preview.priceFinalLandedCost, true);
}

function getSelectedQuoteTerm() {
  const rawTerm = fields.quoteTerm ? fields.quoteTerm.value : "";
  const normalized = String(rawTerm || "").toLowerCase();

  if (["fob", "cip", "ddp"].includes(normalized)) {
    return normalized;
  }

  return shouldIncludeTaxInTotal() ? "ddp" : "cip";
}

function getSelectedVehicleQuoteType() {
  const normalized = String(fields.vehicleQuoteType?.value || businessSettings.defaultVehicleQuoteType || "new").toLowerCase();
  return normalized === "used" ? "used" : "new";
}

function getVehicleQuoteTypeLabel(type = getSelectedVehicleQuoteType()) {
  const text = businessSettings.text[currentLanguage] || businessSettings.text.zh;
  return type === "used"
    ? (text.usedVehicleQuoteLabel || "Used vehicle quote")
    : (text.newVehicleQuoteLabel || "New vehicle quote");
}

function getVehicleQuoteTypeSettings(type = getSelectedVehicleQuoteType()) {
  return businessSettings.vehicleQuoteTypeSettings[type] || businessSettings.vehicleQuoteTypeSettings.new;
}

function getVehicleStatusOptionsForType(type = getSelectedVehicleQuoteType()) {
  const settings = getVehicleQuoteTypeSettings(type);
  const allowedValues = settings.statusValues || [];
  const options = businessSettings.vehicleStatusOptions.filter((option) => allowedValues.includes(option.value));
  return options.length ? options : businessSettings.vehicleStatusOptions;
}

function getVehicleTypeSellingPoints(type = getSelectedVehicleQuoteType()) {
  const settings = getVehicleQuoteTypeSettings(type);
  return settings.sellingPoints?.[currentLanguage]
    || settings.sellingPoints?.zh
    || businessSettings.sellingPoints[currentLanguage]
    || businessSettings.sellingPoints.zh;
}

function getConditionGradeOption(value = fields.conditionGrade?.value) {
  return businessSettings.conditionGradeOptions.find((option) => option.value === value)
    || businessSettings.conditionGradeOptions[0]
    || null;
}

function getConditionGradeTitle(option) {
  if (!option) {
    return "";
  }

  return option[currentLanguage] || option.zh || option.grade;
}

function getConditionGradeDescription(option) {
  if (!option) {
    return "";
  }

  return option.description?.[currentLanguage] || option.description?.zh || "";
}

function applyConditionGradeTheme(option = getConditionGradeOption()) {
  const gradeValue = option?.value || "";

  document.querySelectorAll(".vehicle-condition-field, .condition-summary, .condition-grade-preview").forEach((element) => {
    if (gradeValue) {
      element.dataset.conditionGrade = gradeValue;
    } else {
      delete element.dataset.conditionGrade;
    }
  });
}

function updateConditionGradePreview() {
  const option = getConditionGradeOption();
  const isUsed = getSelectedVehicleQuoteType() === "used";

  applyConditionGradeTheme(option);

  if (!preview.conditionGradePreview) {
    return;
  }

  setElementHidden(preview.conditionGradePreview, !isUsed || !option);
  setPreviewText(preview.conditionGradeBadge, option?.grade || "");
  setPreviewText(preview.conditionGradeTitle, getConditionGradeTitle(option));
  setPreviewText(preview.conditionGradeText, getConditionGradeDescription(option));
}

function syncVehicleQuoteTypeButtons() {
  const selectedType = getSelectedVehicleQuoteType();
  document.body.dataset.vehicleQuoteType = selectedType;
  document.querySelectorAll(".used-vehicle-only").forEach((element) => {
    setElementHidden(element, selectedType !== "used");
  });
  fields.vehicleQuoteTypeButtons.forEach((button) => {
    const isActive = button.dataset.vehicleType === selectedType;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
  if (preview.vehicleQuoteType) {
    preview.vehicleQuoteType.dataset.vehicleType = selectedType;
  }
}

function setVehicleQuoteType(type, options = {}) {
  const normalized = String(type || "").toLowerCase() === "used" ? "used" : "new";
  const settings = getVehicleQuoteTypeSettings(normalized);

  if (fields.vehicleQuoteType) {
    fields.vehicleQuoteType.value = normalized;
  }

  if (normalized === "new" && options.applyDefaults !== false) {
    if (fields.mileage && (!fields.mileage.value || Number(fields.mileage.value) < 100)) {
      fields.mileage.value = settings.defaultMileage;
    }
  }

  if (fields.status) {
    const statusOptions = getVehicleStatusOptionsForType(normalized);
    const currentStatusIsAllowed = statusOptions.some((option) => option.value === fields.status.value);

    if (!currentStatusIsAllowed || (options.applyDefaults !== false && normalized === "used" && fields.status.value === "availableToOrder")) {
      fields.status.value = settings.defaultStatus || statusOptions[0]?.value || "";
    }
  }

  syncVehicleQuoteTypeButtons();
}

function setQuoteTerm(term) {
  const normalized = ["fob", "cip", "ddp"].includes(String(term).toLowerCase())
    ? String(term).toLowerCase()
    : "cip";

  if (fields.quoteTerm) {
    fields.quoteTerm.value = normalized;
  }

  if (fields.includeTaxInTotal) {
    fields.includeTaxInTotal.checked = normalized === "ddp";
  }

  syncQuoteTermButtons();
}

function shouldIncludeTaxInTotal() {
  if (fields.quoteTerm) {
    return fields.quoteTerm.value === "ddp";
  }

  if (!fields.includeTaxInTotal) {
    return false;
  }

  if (fields.includeTaxInTotal.type === "checkbox") {
    return fields.includeTaxInTotal.checked;
  }

  return String(fields.includeTaxInTotal.value || "yes").toLowerCase() !== "no";
}

function setLandedPriceMode(value) {
  const normalized = String(value || "no").toLowerCase();
  setQuoteTerm(normalized === "yes" || normalized === "true" || normalized === "1" ? "ddp" : "cip");
}

function getSavedLandedPriceMode() {
  const termValue = new URLSearchParams(window.location.search).get("term");

  if (termValue) {
    return termValue === "ddp" ? "yes" : "no";
  }

  const urlValue = new URLSearchParams(window.location.search).get("landed");

  if (urlValue) {
    return urlValue;
  }

  try {
    return sessionStorage.getItem(quoteLandedModeKey);
  } catch (error) {
    return null;
  }
}

function getSavedQuoteTerm() {
  const urlValue = new URLSearchParams(window.location.search).get("term");

  if (["fob", "cip", "ddp"].includes(String(urlValue || "").toLowerCase())) {
    return String(urlValue).toLowerCase();
  }

  try {
    const storedTerm = sessionStorage.getItem(quoteTermStorageKey);

    if (["fob", "cip", "ddp"].includes(String(storedTerm || "").toLowerCase())) {
      return String(storedTerm).toLowerCase();
    }
  } catch (error) {
    return null;
  }

  return null;
}

function syncLandedModeButton() {
  if (!fields.landedModeToggle) {
    return;
  }

  const isActive = shouldIncludeTaxInTotal();
  const text = businessSettings.text[currentLanguage] || businessSettings.text.zh;
  fields.landedModeToggle.textContent = isActive
    ? text.landedModeOnLabel
    : text.includeTaxInTotalLabel;
  fields.landedModeToggle.setAttribute("aria-pressed", isActive ? "true" : "false");
  fields.landedModeToggle.classList.toggle("active", isActive);
}

function syncQuoteTermButtons() {
  const selectedTerm = getSelectedQuoteTerm();
  fields.quoteTermButtons.forEach((button) => {
    const isActive = button.dataset.quoteTerm === selectedTerm;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  syncLandedModeButton();
}

function getQuoteTermNotice(term = getSelectedQuoteTerm()) {
  const text = businessSettings.text[currentLanguage] || businessSettings.text.zh;
  const key = `termNotice${term.charAt(0).toUpperCase()}${term.slice(1)}`;
  return text[key] || businessSettings.noteText[currentLanguage] || businessSettings.noteText.zh;
}

function calculateQuoteResult() {
  const carPriceUsd = getUsdCostInput(fields.carPriceUsd);
  const chinaLogisticsUsd = getUsdCostInput(fields.chinaLogisticsUsd);
  const exportProcessingUsd = getUsdCostInput(fields.exportProcessingUsd);
  const freightUsd = getUsdCostInput(fields.freightUsd);
  const profitUsd = getUsdCostInput(fields.profitUsd);
  const clearanceRub = getRubCostInput(fields.clearanceRub);
  const exchangeRate = getUsdToRubRate();
  const vehicleAgeYears = numberFromInput(fields.vehicleAgeYears);
  const engineDisplacementCc = numberFromInput(fields.engineDisplacementCc);
  const quoteTerm = getSelectedQuoteTerm();
  const includeTaxInTotal = quoteTerm === "ddp";
  let taxRub = getRubCostInput(fields.taxRub);
  let customsDutyRub = 0;
  let recyclingFeeRub = 0;
  let estimatedTaxTotalRub = taxRub;
  const mode = isRussiaPersonalUseMode() ? "ruPersonalUse" : "manual";
  let taxEstimate = null;

  if (mode === "ruPersonalUse") {
    taxEstimate = getTksOfficialTaxResult();
    customsDutyRub = taxEstimate.customsDutyRub;
    recyclingFeeRub = taxEstimate.recyclingFeeRub;
    estimatedTaxTotalRub = taxEstimate.estimatedTaxTotalRub;
    taxRub = estimatedTaxTotalRub;
    if (fields.taxRub) {
      setCostFieldFromRub(fields.taxRub, taxRub);
    }
    if (fields.estimatedTaxTotalRub && numberFromInput(fields.estimatedTaxTotalRub) <= 0 && estimatedTaxTotalRub > 0) {
      fields.estimatedTaxTotalRub.value = formatEditableNumber(estimatedTaxTotalRub);
    }
  }

  const totals = quoteMath.calculateQuoteTotals({
    carPriceUsd,
    chinaLogisticsUsd,
    exportProcessingUsd,
    freightUsd,
    profitUsd,
    clearanceRub,
    taxRub,
    exchangeRate,
    quoteTerm,
  });
  const result = {
    mode,
    customsDutyRub,
    recyclingFeeRub,
    estimatedTaxTotalRub,
    cnyToRubRate: getCnyToRubRate(),
    cnyToUsdRate: getCnyToUsdRate(),
    usdToCnyRate: getCnyRate(),
    ...totals,
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

function getModelMatchFromCurrentFields() {
  return [
    fields.modelZh?.value,
    fields.model?.value,
    fields.modelRu?.value,
  ].map((value) => findModelDictionaryMatch(value)).find(Boolean) || null;
}

function getModelFullNameForLanguage(match, language = currentLanguage) {
  if (!match) {
    return "";
  }

  if (language === "ru") {
    return match.fullNameRu;
  }

  if (language === "en") {
    return match.fullNameEn;
  }

  return match.fullNameZh;
}

function setMatchedModelFields(match) {
  fields.modelZh.value = getModelFullNameForLanguage(match);
  fields.model.value = match.fullNameEn;
  fields.modelRu.value = match.fullNameRu;
  fields.modelZh.dataset.brandZh = match.brandZh;
  fields.model.dataset.brandEn = match.brandEn;
  fields.modelRu.dataset.brandRu = match.brandRu;
  fields.modelZh.dataset.autoFilled = "true";
  fields.model.dataset.autoFilled = "true";
  fields.modelRu.dataset.autoFilled = "true";
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
  setMatchedModelFields(match);
  updateQuote();
  saveQuoteDataForCustomerPage();
  return true;
}

function getVehicleModelNames() {
  const matchedModel = getModelMatchFromCurrentFields();

  if (matchedModel) {
    const primary = getModelFullNameForLanguage(matchedModel);
    const secondaryCandidates = currentLanguage === "zh"
      ? [matchedModel.fullNameEn, matchedModel.fullNameRu]
      : currentLanguage === "ru"
        ? [matchedModel.fullNameZh, matchedModel.fullNameEn]
        : [matchedModel.fullNameZh, matchedModel.fullNameRu];
    const secondary = secondaryCandidates.find((name) => name && name !== primary) || "";

    return {
      primary,
      secondary,
      finalName: primary,
    };
  }

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
  const matchedModel = getModelMatchFromCurrentFields();

  setPreviewText(preview.autoModelZh, matchedModel?.fullNameZh || fields.modelZh.value.trim() || "-");
  setPreviewText(preview.autoModelEn, matchedModel?.fullNameEn || fields.model.value.trim() || "-");
  setPreviewText(preview.autoModelRu, matchedModel?.fullNameRu || fields.modelRu.value.trim() || "-");
  setPreviewText(preview.autoModelTrim, getLocalizedFieldText(fields.trim) || "-");
  setPreviewText(preview.autoModelStatus, matchedModel || isMatched ? text.autoModelMatchedText : text.autoModelUnmatchedText);

  if (preview.manualModelFallback) {
    preview.manualModelFallback.hidden = Boolean(matchedModel || isMatched);
  }
}

function renderQuote(result) {
  updateLandedPriceVisibility(result.includeTaxInTotal, result.quoteTerm);
  updateTaxDisplayMode(result.mode);
  updatePriceDetailVisibility(result.mode, result.includeTaxInTotal, result.quoteTerm);
  updateCostCurrencyLabels();

  updateTaxOutputs({
    customsDutyRub: result.customsDutyRub,
    recyclingFeeRub: result.recyclingFeeRub,
    estimatedTaxTotalRub: result.estimatedTaxTotalRub,
    finalLandedCostRub: result.landedTotalRub,
  });

  const selectedDestination = getDeliveryCityPreset(fields.destination.value);
  const destinationLabel = selectedDestination ? getDeliveryCityLabel(selectedDestination) : getLocalizedManualText(fields.destination.value);
  const deliveryCityLabel = businessSettings.text[currentLanguage].deliveryCityLabel;

  const mileageText = `${Number(numberFromInput(fields.mileage)).toLocaleString("en-US")} km`;
  const vehicleModel = getVehicleModelNames();
  updateAutoModelPreview();

  setPreviewText(preview.vehicleQuoteType, getVehicleQuoteTypeLabel());
  setPreviewText(preview.sellingPointsText, getVehicleTypeSellingPoints());
  setPreviewText(preview.modelZh, vehicleModel.primary);
  setPreviewText(preview.modelRu, vehicleModel.secondary);
  setPreviewText(preview.trim, getLocalizedFieldText(fields.trim) || "");
  setPreviewText(preview.destination, `${deliveryCityLabel}: ${destinationLabel}`);
  setPreviewText(preview.specModel, vehicleModel.finalName);
  setPreviewText(preview.specYear, fields.year.value || "-");
  setPreviewText(preview.specMileage, mileageText);
  setPreviewText(preview.specEngine, getLocalizedFieldText(fields.engine) || "-");
  setPreviewText(preview.specTransmission, getLocalizedFieldText(fields.transmission) || "-");
  setPreviewText(preview.specColor, getLocalizedFieldText(fields.color, businessSettings.colorOptions) || "-");
  setPreviewText(preview.specHorsepower, formatHorsepower(fields.horsepower.value));
  setPreviewText(preview.specStatus, getStatusDisplay(fields.status.value));
  setPreviewText(preview.specEmissionStandard, getLocalizedFieldText(fields.emissionStandard) || "-");
  setPreviewText(preview.specFuelType, getLocalizedFieldText(fields.fuelType) || "-");
  updateConditionGradePreview();
  setPreviewText(preview.conditionDescriptionPreview, fields.conditionDescription?.value || "-");
  const displayCurrency = getSelectedDisplayCurrency();
  syncDisplayCurrencyControls(displayCurrency);
  const text = businessSettings.text[currentLanguage] || businessSettings.text.zh;
  const cnyTotals = getQuoteCnyTotals(result);
  const cipAmounts = getCurrencyAmountSet(result.cipTotalUsd, result.cipTotalRub);
  const fobAmounts = getCurrencyAmountSet(result.fobTotalUsd, result.fobTotalRub);
  const landedAmounts = getCurrencyAmountSet(result.landedTotalUsd, result.landedTotalRub);
  cipAmounts.CNY = cnyTotals.cipTotalCny;
  fobAmounts.CNY = cnyTotals.fobTotalCny;
  landedAmounts.CNY = cnyTotals.landedTotalCny;
  const primaryAmounts = result.quoteTerm === "fob" ? fobAmounts : cipAmounts;
  const primaryLabel = result.quoteTerm === "fob"
    ? text.fobPriceLabel
    : text.cipPriceLabel;
  const primaryDetailsTitle = result.quoteTerm === "fob"
    ? text.fobDetailsTitle
    : text.cipDetailsTitle;
  setPreviewText(preview.primaryPriceLabel, primaryLabel);
  setPreviewText(preview.primaryDetailsHeading, primaryDetailsTitle);
  setPreviewText(preview.totalRub, formatCurrencyAmount(primaryAmounts[displayCurrency], displayCurrency));
  setPreviewText(preview.totalUsd, formatCurrencyAmount(primaryAmounts[displayCurrency], displayCurrency));
  setPreviewText(preview.totalUsdHero, "");
  setPreviewText(preview.cipTotalMain, formatCurrencyAmount(primaryAmounts[displayCurrency], displayCurrency));
  setPreviewText(preview.cipTotalSub, "");
  setPreviewText(preview.landedTotalMain, formatCurrencyAmount(landedAmounts[displayCurrency], displayCurrency));
  setPreviewText(preview.landedTotalSub, "");
  setElementHidden(preview.totalUsdHero, true);
  setElementHidden(preview.cipTotalSub, true);
  setElementHidden(preview.landedTotalSub, true);
  setPreviewText(preview.selectedTotalLabel, `${primaryLabel} ${displayCurrency}`);
  setPreviewMoney(preview.usdSubtotal, formatDisplayFromUsd(result.quoteTerm === "fob" ? result.fobTotalUsd : result.usdSubtotal, result, displayCurrency), displayCurrency);
  setPreviewMoney(preview.rubSubtotal, formatCurrencyAmount(0, displayCurrency), displayCurrency);
  setPreviewMoney(preview.priceCar, formatDisplayFromUsd(result.carPriceUsd, result, displayCurrency), displayCurrency);
  setPreviewMoney(preview.priceChinaLogistics, formatDisplayFromUsd(result.chinaLogisticsUsd, result, displayCurrency), displayCurrency);
  setPreviewMoney(preview.priceExportProcessing, formatDisplayFromUsd(result.exportProcessingUsd, result, displayCurrency), displayCurrency);
  setPreviewMoney(preview.priceFreight, formatDisplayFromUsd(result.freightUsd, result, displayCurrency), displayCurrency);
  setPreviewMoney(preview.priceProfit, formatDisplayFromUsd(result.profitUsd, result, displayCurrency), displayCurrency);
  setPreviewMoney(preview.landedPriceCar, formatDisplayFromUsd(result.carPriceUsd, result, displayCurrency), displayCurrency);
  setPreviewMoney(preview.landedPriceChinaLogistics, formatDisplayFromUsd(result.chinaLogisticsUsd, result, displayCurrency), displayCurrency);
  setPreviewMoney(preview.landedPriceExportProcessing, formatDisplayFromUsd(result.exportProcessingUsd, result, displayCurrency), displayCurrency);
  setPreviewMoney(preview.landedPriceFreight, formatDisplayFromUsd(result.freightUsd, result, displayCurrency), displayCurrency);
  setPreviewMoney(preview.landedPriceProfit, formatDisplayFromUsd(result.profitUsd, result, displayCurrency), displayCurrency);
  setPreviewMoney(preview.priceClearance, formatRub(result.clearanceRub), "RUB");
  setPreviewMoney(preview.priceCustomsDuty, formatRub(result.customsDutyRub), "RUB");
  setPreviewMoney(preview.priceRecyclingFee, formatRub(result.recyclingFeeRub), "RUB");
  setPreviewMoney(preview.priceTax, formatRub(result.taxRub), "RUB");
  setPreviewMoney(preview.priceEstimatedTaxTotal, formatRub(result.estimatedTaxTotalRub), "RUB");
  setPreviewMoney(preview.priceCipTotal, formatCurrencyAmount(cipAmounts[displayCurrency], displayCurrency), displayCurrency);
  setPreviewMoney(preview.priceGrandTotal, formatCurrencyAmount(landedAmounts[displayCurrency], displayCurrency), displayCurrency);
  setPreviewMoney(preview.priceFinalLandedCost, formatCurrencyAmount(landedAmounts[displayCurrency], displayCurrency), displayCurrency);
  setPreviewText(preview.noteText, getQuoteTermNotice(result.quoteTerm));
  setPreviewText(preview.rate, `CNY-RUB ${getCnyToRubRate().toLocaleString("en-US", {
    maximumFractionDigits: 4,
  })} / CNY-USD ${getCnyToUsdRate().toLocaleString("en-US", {
    maximumFractionDigits: 6,
  })}`);
}

function updateQuote() {
  validateAllMoneyInputs();
  updateCostCurrencyLabels();
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
    exchangeRates: {
      cnyToRub: getCnyToRubRate(),
      cnyToUsd: getCnyToUsdRate(),
      todayDefaultCnyToRub: businessSettings.exchangeRate.todayDefaultCnyToRub,
      todayDefaultCnyToUsd: businessSettings.exchangeRate.todayDefaultCnyToUsd,
      usdToRub: getUsdToRubRate(),
      usdToCny: getCnyRate(),
    },
    fields: {
      model: fields.model.value,
      modelZh: fields.modelZh.value,
      modelRu: fields.modelRu.value,
      vehicleQuoteType: getSelectedVehicleQuoteType(),
      trim: fields.trim.value,
      year: fields.year.value,
      mileage: fields.mileage.value,
      color: fields.color.value,
      engine: fields.engine.value,
      transmission: fields.transmission.value,
      horsepower: fields.horsepower.value,
      status: fields.status.value,
      emissionStandard: fields.emissionStandard ? fields.emissionStandard.value : "",
      fuelType: fields.fuelType ? fields.fuelType.value : "",
      conditionGrade: fields.conditionGrade ? fields.conditionGrade.value : "",
      conditionDescription: fields.conditionDescription ? fields.conditionDescription.value : "",
      conditionDescriptionZhSource: fields.conditionDescription?.dataset.zhSource || fields.conditionDescription?.value || "",
      destination: fields.destination.value,
      carPriceUsd: fields.carPriceUsd.value,
      chinaLogisticsUsd: fields.chinaLogisticsUsd ? fields.chinaLogisticsUsd.value : "",
      exportProcessingUsd: fields.exportProcessingUsd ? fields.exportProcessingUsd.value : "",
      freightUsd: fields.freightUsd.value,
      clearanceRub: fields.clearanceRub.value,
      taxRub: fields.taxRub.value,
      includeTaxInTotal: fields.includeTaxInTotal ? (fields.includeTaxInTotal.checked ? "yes" : "no") : "yes",
      quoteTerm: getSelectedQuoteTerm(),
      quoteCostCurrency: getSelectedCostCurrency(),
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
      exchangeRateCny: fields.exchangeRateCny ? fields.exchangeRateCny.value : String(getCnyToUsdRate()),
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
    costBaseValues: {
      carPriceUsd: getUsdCostInput(fields.carPriceUsd),
      chinaLogisticsUsd: getUsdCostInput(fields.chinaLogisticsUsd),
      exportProcessingUsd: getUsdCostInput(fields.exportProcessingUsd),
      freightUsd: getUsdCostInput(fields.freightUsd),
      profitUsd: getUsdCostInput(fields.profitUsd),
      clearanceRub: numberFromInput(fields.clearanceRub),
      taxRub: numberFromInput(fields.taxRub),
    },
    language: currentLanguage,
  };
}

function saveQuoteDataForCustomerPage() {
  const quoteData = JSON.stringify(getQuoteDataForTransfer());
  const landedMode = shouldIncludeTaxInTotal() ? "yes" : "no";
  const quoteTerm = getSelectedQuoteTerm();

  try {
    sessionStorage.setItem(quoteStorageKey, quoteData);
    sessionStorage.setItem(quoteLandedModeKey, landedMode);
    sessionStorage.setItem(quoteTermStorageKey, quoteTerm);
  } catch (error) {
    console.info("Quote data could not be saved to session storage.", error);
  }
}

function clearSavedQuoteData() {
  try {
    sessionStorage.removeItem(quoteStorageKey);
    sessionStorage.removeItem(quoteStorageBackupKey);
    sessionStorage.removeItem(quoteLandedModeKey);
    sessionStorage.removeItem(quoteTermStorageKey);
  } catch (error) {
    console.info("Quote storage could not be cleared.", error);
  }
}

function startNewQuote() {
  const text = businessSettings.text[currentLanguage] || businessSettings.text.zh;

  if (!window.confirm(text.resetQuoteConfirm || "Create a new quote?")) {
    return;
  }

  clearSavedQuoteData();
  window.location.href = window.location.href.split("?")[0];
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

function showMissingQuoteDataNotice() {
  if (!isCustomerOutputPage || document.querySelector(".missing-quote-notice")) {
    return;
  }

  const text = businessSettings.text[currentLanguage] || businessSettings.text.zh;
  const notice = document.createElement("section");
  notice.className = "missing-quote-notice";
  notice.setAttribute("role", "status");
  notice.innerHTML = `
    <strong>${text.missingQuoteTitle || businessSettings.text.zh.missingQuoteTitle}</strong>
    <p>${text.missingQuoteText || businessSettings.text.zh.missingQuoteText}</p>
    <a href="index.html">${text.missingQuoteAction || businessSettings.text.zh.missingQuoteAction}</a>
  `;

  document.body.classList.add("missing-quote-data");
  const target = document.querySelector("main") || document.body;
  target.insertBefore(notice, target.firstChild);
}

function restoreSavedExchangeRates(data) {
  const savedRates = data?.exchangeRates || {};

  const normalizeCnyToUsdRate = (value) => {
    const number = Number(value);
    if (!Number.isFinite(number) || number <= 0) {
      return 0;
    }

    return number > 1 ? 1 / number : number;
  };

  const normalizeCnyToRubRate = (value, cnyToUsdRate = businessSettings.exchangeRate.cnyToUsd) => {
    const number = Number(value);
    if (!Number.isFinite(number) || number <= 0) {
      return 0;
    }

    return number > 30 && cnyToUsdRate > 0 ? number * cnyToUsdRate : number;
  };

  const setCnyToUsdRate = (value) => {
    const rate = normalizeCnyToUsdRate(value);
    if (!rate) {
      return false;
    }

    businessSettings.exchangeRate.cnyToUsd = rate;
    businessSettings.exchangeRate.todayDefaultCnyToUsd = rate;
    return true;
  };

  const setCnyToRubRate = (value) => {
    const rate = normalizeCnyToRubRate(value);
    if (!rate) {
      return false;
    }

    businessSettings.exchangeRate.cnyToRub = rate;
    businessSettings.exchangeRate.todayDefaultCnyToRub = rate;
    return true;
  };

  const restoredCnyToUsd = setCnyToUsdRate(
    savedRates.cnyToUsd
      ?? savedRates.todayDefaultCnyToUsd
      ?? savedRates.usdToCny
      ?? savedRates.todayDefaultUsdCny
  );
  const restoredCnyToRub = setCnyToRubRate(
    savedRates.cnyToRub
      ?? savedRates.todayDefaultCnyToRub
      ?? savedRates.usdToRub
      ?? savedRates.todayDefaultUsdRub
  );

  if (!restoredCnyToUsd && data?.fields?.exchangeRateCny) {
    setCnyToUsdRate(parseMoneyNumber(data.fields.exchangeRateCny));
  }

  if (!restoredCnyToRub && data?.fields?.exchangeRate) {
    setCnyToRubRate(parseMoneyNumber(data.fields.exchangeRate));
  }

  if (!restoredCnyToUsd && String(data?.fields?.quoteCostCurrency || "").toUpperCase() === "CNY") {
    const savedCarPriceCny = parseMoneyNumber(data.fields.carPriceUsd);
    const savedCarPriceUsd = Number(data?.costBaseValues?.carPriceUsd) || 0;
    const inferredCnyToUsd = savedCarPriceUsd / savedCarPriceCny;

    if (Number.isFinite(inferredCnyToUsd) && inferredCnyToUsd > 0) {
      setCnyToUsdRate(inferredCnyToUsd);
    }
  }

  if (fields.exchangeRate) {
    fields.exchangeRate.value = businessSettings.exchangeRate.cnyToRub.toFixed(4);
  }

  if (fields.exchangeRateCny) {
    fields.exchangeRateCny.value = businessSettings.exchangeRate.cnyToUsd.toFixed(6);
  }

  if (data?.fields) {
    data.fields.exchangeRate = businessSettings.exchangeRate.cnyToRub.toFixed(4);
    data.fields.exchangeRateCny = businessSettings.exchangeRate.cnyToUsd.toFixed(6);
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
    clearanceRub: text.exportValidationClearance || text.clearanceLabel,
    taxRub: text.exportValidationTax || text.taxLabel,
    ddpTax: text.exportValidationDdpTax || text.taxLabel,
    exchangeRate: text.exchangeRateLabel,
    total: text.exportValidationTotal,
    image: text.exportValidationImage,
  };
}

function validateQuoteBeforeExport() {
  updateQuote();

  const result = calculateQuoteResult();
  const quoteTerm = getSelectedQuoteTerm();
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
  if (quoteTerm !== "fob" && !hasText(fields.freightUsd)) missing.push(labels.freightUsd);
  if (quoteTerm === "ddp") {
    if (!hasText(fields.clearanceRub)) missing.push(labels.clearanceRub);
    if (isRussiaPersonalUseMode()) {
      if (result.estimatedTaxTotalRub <= 0) missing.push(labels.ddpTax);
    } else if (!hasText(fields.taxRub)) {
      missing.push(labels.taxRub);
    }
  }
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
  const separator = pagePath.includes("?") ? "&" : "?";
  const landedFlag = shouldIncludeTaxInTotal() ? "yes" : "no";
  const quoteTerm = getSelectedQuoteTerm();
  try {
    sessionStorage.setItem(quoteLandedModeKey, landedFlag);
    sessionStorage.setItem(quoteTermStorageKey, quoteTerm);
  } catch (error) {
    console.info("Landed price mode could not be saved.", error);
  }
  window.location.assign(`${pagePath}${separator}landed=${landedFlag}&term=${quoteTerm}`);
}

function loadQuoteDataForPage() {
  const data = getSavedQuoteData();

  if (data) {
    restoreSavedExchangeRates(data);

    Object.entries(data.fields || {}).forEach(([key, value]) => {
      if (fields[key]) {
        const normalizedValue = key === "destination" ? normalizeDeliveryCityValue(value) : value;

        if (key === "includeTaxInTotal" && fields[key].type === "checkbox") {
          setLandedPriceMode(normalizedValue);
          return;
        }

        if (fields[key].tagName === "SELECT" && !fields[key].options.length) {
          fields[key].dataset.pendingValue = normalizedValue;
        }

        fields[key].value = normalizedValue;
      }
    });

    if (fields.conditionDescription && data.fields?.conditionDescriptionZhSource) {
      fields.conditionDescription.dataset.zhSource = data.fields.conditionDescriptionZhSource;
      syncConditionDescriptionForLanguage();
    }

    if (data.costBaseValues) {
      if (fields.carPriceUsd) fields.carPriceUsd.dataset.baseUsd = String(Number(data.costBaseValues.carPriceUsd) || 0);
      if (fields.chinaLogisticsUsd) fields.chinaLogisticsUsd.dataset.baseUsd = String(Number(data.costBaseValues.chinaLogisticsUsd) || 0);
      if (fields.exportProcessingUsd) fields.exportProcessingUsd.dataset.baseUsd = String(Number(data.costBaseValues.exportProcessingUsd) || 0);
      if (fields.freightUsd) fields.freightUsd.dataset.baseUsd = String(Number(data.costBaseValues.freightUsd) || 0);
      if (fields.profitUsd) fields.profitUsd.dataset.baseUsd = String(Number(data.costBaseValues.profitUsd) || 0);
      if (fields.clearanceRub) fields.clearanceRub.dataset.baseRub = String(Number(data.costBaseValues.clearanceRub) || 0);
      if (fields.taxRub) fields.taxRub.dataset.baseRub = String(Number(data.costBaseValues.taxRub) || 0);
    }

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

    if (fields.quoteTerm) {
      setQuoteTerm(fields.quoteTerm.value || (data.fields && data.fields.quoteTerm) || "cip");
    }

    if (fields.quoteCostCurrency) {
      setCostCurrency(fields.quoteCostCurrency.value || (data.fields && data.fields.quoteCostCurrency) || "CNY", { convert: false });
      refreshCostBaseValuesFromDisplayedInputs();
    }

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
  } else {
    showMissingQuoteDataNotice();
  }

  const savedLandedMode = getSavedLandedPriceMode();
  const savedQuoteTerm = getSavedQuoteTerm();
  if (savedQuoteTerm) {
    setQuoteTerm(savedQuoteTerm);
  } else if (savedLandedMode && fields.includeTaxInTotal) {
    setLandedPriceMode(savedLandedMode);
  }
}

function fillDeliveryCityOptions() {
  if (!fields.destination) {
    return;
  }

  const currentRawValue = fields.destination.value;
  const currentValue = normalizeDeliveryCityValue(currentRawValue);
  const optionsList = fields.destination.list || document.querySelector("#destinationOptions");

  if (optionsList) {
    optionsList.innerHTML = "";

    businessSettings.deliveryCityPresets.forEach((preset) => {
      const option = document.createElement("option");
      option.value = getDeliveryCityInputLabel(preset);
      option.label = getDeliveryCityLabel(preset);
      optionsList.appendChild(option);
    });
  }

  if (!String(currentRawValue || "").trim()) {
    fields.destination.value = getDeliveryCityInputLabel(businessSettings.deliveryCityPresets[0]);
    return;
  }

  const preset = destinationPresets[currentValue];

  if (preset) {
    fields.destination.value = getDeliveryCityInputLabel(preset);
  } else {
    fields.destination.value = currentRawValue;
  }
}

function applyDestinationPreset() {
  const preset = getDeliveryCityPreset(fields.destination.value);

  if (!preset) {
    updateQuote();
    return;
  }

  fields.destination.value = getDeliveryCityInputLabel(preset);
  setCostFieldFromUsd(fields.freightUsd, preset.freightUsd);

  if (preset.clearanceRub > 0 || fields.clearanceRub.value.trim() === "") {
    setCostFieldFromRub(fields.clearanceRub, preset.clearanceRub);
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
  const selectedStatus = fields.status.dataset.pendingValue || fields.status.value || getVehicleQuoteTypeSettings().defaultStatus || "";
  const statusOptions = getVehicleStatusOptionsForType();

  fillDeliveryCityOptions();

  fillSimpleSelectOptions(fields.status, statusOptions, (option) => {
    if (currentLanguage === "ru") {
      return option.ru;
    }
    if (currentLanguage === "en") {
      return option.en;
    }
    return option.zh;
  });
  fields.status.value = getOptionByValue(statusOptions, selectedStatus)?.value || statusOptions[0]?.value || "";
  delete fields.status.dataset.pendingValue;

  if (fields.conditionGrade) {
    const selectedGrade = fields.conditionGrade.dataset.pendingValue || fields.conditionGrade.value || "b";
    fillSimpleSelectOptions(fields.conditionGrade, businessSettings.conditionGradeOptions, (option) => {
      return `${option.grade} - ${getConditionGradeTitle(option)}`;
    });
    fields.conditionGrade.value = businessSettings.conditionGradeOptions.some((option) => option.value === selectedGrade)
      ? selectedGrade
      : "b";
    delete fields.conditionGrade.dataset.pendingValue;
  }

  syncVehicleQuoteTypeButtons();
  syncLanguageSensitiveInputs();

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

function syncLanguageSensitiveInputs() {
  const matchedModel = getModelMatchFromCurrentFields();

  if (matchedModel) {
    setMatchedModelFields(matchedModel);
  }

  syncConditionDescriptionForLanguage();
  setLocalizedFieldValue(fields.trim);
  setLocalizedFieldValue(fields.color, businessSettings.colorOptions);
  setLocalizedFieldValue(fields.engine);
  setLocalizedFieldValue(fields.transmission);
  setLocalizedFieldValue(fields.emissionStandard);
  setLocalizedFieldValue(fields.fuelType);
  setLocalizedFieldValue(fields.destination);
}

function normalizeLanguageSensitiveSources() {
  const matchedModel = getModelMatchFromCurrentFields();

  if (matchedModel) {
    fields.modelZh.dataset.modelKey = normalizeModelName(matchedModel.fullNameZh);
    fields.model.dataset.modelKey = normalizeModelName(matchedModel.fullNameZh);
    fields.modelRu.dataset.modelKey = normalizeModelName(matchedModel.fullNameZh);
  }

  [fields.trim, fields.color, fields.engine, fields.transmission, fields.emissionStandard, fields.fuelType, fields.destination]
    .filter(Boolean)
    .forEach((field) => {
      if (!field.dataset.multilingualSource) {
        field.dataset.multilingualSource = field.value || "";
      }
    });

  if (fields.conditionDescription && currentLanguage === "zh") {
    fields.conditionDescription.dataset.zhSource = fields.conditionDescription.value || "";
  }
}

function fillQuoteDate() {
  const today = new Date();
  const beijingDateParts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(today).reduce((parts, item) => {
    parts[item.type] = item.value;
    return parts;
  }, {});

  preview.quoteDate.textContent = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(today);

  const year = beijingDateParts.year;
  const month = beijingDateParts.month;
  const day = beijingDateParts.day;
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
    fields.exchangeRate.value = businessSettings.exchangeRate.cnyToRub;
  }
  if (fields.exchangeRateCny && !fields.exchangeRateCny.value) {
    fields.exchangeRateCny.value = businessSettings.exchangeRate.cnyToUsd;
  }
  if (!fields.sourcePageUrl.value) {
    fields.sourcePageUrl.value = businessSettings.vehicleImages.sourcePageUrl;
  }
  if (fields.displayCurrency && !fields.displayCurrency.value) {
    fields.displayCurrency.value = "CNY";
  }
  syncDisplayCurrencyControls(getSelectedDisplayCurrency());
  if (fields.vehicleQuoteType && !fields.vehicleQuoteType.value) {
    fields.vehicleQuoteType.value = businessSettings.defaultVehicleQuoteType || "new";
  }
  syncVehicleQuoteTypeButtons();
  if (fields.quoteTerm && !fields.quoteTerm.value) {
    fields.quoteTerm.value = "cip";
  }
  syncQuoteTermButtons();
  if (fields.quoteCostCurrency && !fields.quoteCostCurrency.value) {
    fields.quoteCostCurrency.value = "CNY";
  }
  syncCostCurrencyButtons();
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

function loadExchangeRateJson(url) {
  if (typeof fetch === "function") {
    return fetch(url, { cache: "no-store" }).then((response) => {
      if (!response.ok) {
        throw new Error(`Exchange rate request failed: ${response.status}`);
      }

      return response.json();
    });
  }

  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open("GET", `${url}${url.includes("?") ? "&" : "?"}_=${Date.now()}`, true);
    request.onload = () => {
      if (request.status < 200 || request.status >= 300) {
        reject(new Error(`Exchange rate request failed: ${request.status}`));
        return;
      }

      try {
        resolve(JSON.parse(request.responseText));
      } catch (error) {
        reject(error);
      }
    };
    request.onerror = () => reject(new Error("Exchange rate request failed"));
    request.send();
  });
}

async function tryLoadLiveExchangeRate() {
  if (!businessSettings.exchangeRate.tryLiveExchangeRate) {
    exchangeRateState.isLive = false;
    exchangeRateState.updatedAt = null;
    updateCostCurrencyLabels();
    return;
  }

  try {
    const data = await loadExchangeRateJson(businessSettings.exchangeRate.liveRateUrl);
    const usd = data?.Valute?.USD;
    const cny = data?.Valute?.CNY;
    const usdRub = Number(usd?.Value) / Math.max(Number(usd?.Nominal) || 1, 1);
    const cnyRub = Number(cny?.Value) / Math.max(Number(cny?.Nominal) || 1, 1);
    const cnyUsd = usdRub > 0 ? cnyRub / usdRub : 0;

    if (!Number.isFinite(cnyRub) || cnyRub <= 0 || !Number.isFinite(cnyUsd) || cnyUsd <= 0) {
      exchangeRateState.isLive = false;
      exchangeRateState.updatedAt = null;
      updateCostCurrencyLabels();
      return;
    }

    businessSettings.exchangeRate.cnyToRub = Number(cnyRub.toFixed(4));
    businessSettings.exchangeRate.todayDefaultCnyToRub = businessSettings.exchangeRate.cnyToRub;
    businessSettings.exchangeRate.cnyToUsd = Number(cnyUsd.toFixed(6));
    businessSettings.exchangeRate.todayDefaultCnyToUsd = businessSettings.exchangeRate.cnyToUsd;

    if (fields.exchangeRateCny) {
      fields.exchangeRateCny.value = businessSettings.exchangeRate.cnyToUsd.toFixed(6);
    }

    fields.exchangeRate.value = businessSettings.exchangeRate.cnyToRub.toFixed(4);
    refreshCostBaseValuesFromDisplayedInputs();
    exchangeRateState.isLive = true;
    exchangeRateState.updatedAt = data?.Date || new Date().toISOString();
    fields.exchangeRate.title = data?.Date
      ? `Live CNY rate date (Beijing): ${new Date(data.Date).toLocaleString("zh-CN", {
        timeZone: "Asia/Shanghai",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      })}`
      : "Live exchange rate loaded";
    updateQuote();
  } catch (error) {
    exchangeRateState.isLive = false;
    exchangeRateState.updatedAt = null;
    updateCostCurrencyLabels();
    console.info("Live exchange rate unavailable. Using config fallback.", error);
  }
}

function setLanguage(language) {
  normalizeLanguageSensitiveSources();
  currentLanguage = language;
  const text = businessSettings.text[language];

  document.documentElement.lang = language === "zh" ? "zh-CN" : language;
  document.title = text.documentTitle || businessSettings.text.zh.documentTitle || document.title;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = text[key] || businessSettings.text.zh[key] || element.textContent;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    element.placeholder = text[key] || businessSettings.text.zh[key] || element.placeholder;
  });

  updateCostCurrencyLabels();

  if (preview.noteText) {
    preview.noteText.textContent = getQuoteTermNotice();
  }

  if (preview.cipTaxNotice) {
    preview.cipTaxNotice.textContent = businessSettings.cipTaxNotice[language];
  }

  if (preview.validityText) {
    preview.validityText.textContent = businessSettings.validityText[language];
  }

  if (preview.sellingPointsText) {
    preview.sellingPointsText.textContent = getVehicleTypeSellingPoints();
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
  saveQuoteDataForCustomerPage();
  window.requestAnimationFrame(() => {
    syncLanguageSensitiveInputs();
    updateQuote();
  });
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
  fields.emissionStandard,
  fields.fuelType,
  fields.conditionGrade,
  fields.conditionDescription,
  fields.destination,
  fields.carPriceUsd,
  fields.chinaLogisticsUsd,
  fields.exportProcessingUsd,
  fields.freightUsd,
  fields.clearanceRub,
  fields.taxRub,
  fields.includeTaxInTotal,
  fields.taxMode,
  fields.vehicleAgeYears,
  fields.engineDisplacementCc,
  fields.personalUse,
  fields.customsDutyRub,
  fields.recyclingFeeRub,
  fields.estimatedTaxTotalRub,
  fields.profitUsd,
  fields.exchangeRate,
  fields.exchangeRateCny,
].filter(Boolean).forEach((field) => {
  const handleFieldUpdate = (event) => {
    const isExchangeRateField = field === fields.exchangeRate || field === fields.exchangeRateCny;

    if (event.type === "blur" && (isUsdCostField(field) || isRubCostField(field))) {
      field.value = formatEditableNumber(numberFromInput(field));
    }

    if (isExchangeRateField) {
      const cnyToRubRate = numberFromInput(fields.exchangeRate);
      const cnyToUsdRate = numberFromInput(fields.exchangeRateCny);

      if (Number.isFinite(cnyToRubRate) && cnyToRubRate > 0) {
        businessSettings.exchangeRate.cnyToRub = cnyToRubRate;
        businessSettings.exchangeRate.todayDefaultCnyToRub = cnyToRubRate;
      }

      if (Number.isFinite(cnyToUsdRate) && cnyToUsdRate > 0) {
        businessSettings.exchangeRate.cnyToUsd = cnyToUsdRate;
        businessSettings.exchangeRate.todayDefaultCnyToUsd = cnyToUsdRate;
      }

      exchangeRateState.isLive = false;
      exchangeRateState.updatedAt = null;
      refreshCostBaseValuesFromDisplayedInputs();
    } else {
      storeCostFieldBaseValue(field);
    }

    if (field === fields.conditionDescription && currentLanguage === "zh") {
      field.dataset.zhSource = field.value || "";
    }
    forceRecalculateQuote();
  };

  field.addEventListener("input", handleFieldUpdate);
  field.addEventListener("change", handleFieldUpdate);
  field.addEventListener("blur", handleFieldUpdate);
});

if (fields.landedModeToggle) {
  fields.landedModeToggle.addEventListener("click", () => {
    fields.includeTaxInTotal.checked = !fields.includeTaxInTotal.checked;
    setQuoteTerm(fields.includeTaxInTotal.checked ? "ddp" : "cip");
    forceRecalculateQuote();
  });
}

fields.quoteTermButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setQuoteTerm(button.dataset.quoteTerm || "cip");
    forceRecalculateQuote();
  });
});

fields.vehicleQuoteTypeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setVehicleQuoteType(button.dataset.vehicleType || "new");
    updateLocalizedControls();
    forceRecalculateQuote();
  });
});

fields.costCurrencyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setCostCurrency(button.dataset.costCurrency || "CNY", { convert: true });
    forceRecalculateQuote();
  });
});

[fields.trim, fields.color, fields.engine, fields.transmission, fields.emissionStandard, fields.fuelType, fields.destination]
  .filter(Boolean)
  .forEach((field) => {
    field.addEventListener("input", () => {
      field.dataset.multilingualSource = field.value || "";
    });
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

fields.displayCurrencyControls.forEach((control) => {
  control.addEventListener("change", () => {
    syncDisplayCurrencyControls(control.value);
    forceRecalculateQuote();
  });
});

if (fields.displayCurrency && !fields.displayCurrency.classList.contains("display-currency-control")) {
  fields.displayCurrency.addEventListener("change", () => {
    syncDisplayCurrencyControls(fields.displayCurrency.value);
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

if (fields.newQuote) {
  fields.newQuote.addEventListener("click", startNewQuote);
}

if (fields.openTksCalculator) {
  fields.openTksCalculator.addEventListener("click", openTksCalculator);
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
loadQuoteDataForPage();
fillLogoDetails();
fillQuoteDate();
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

tryLoadLiveExchangeRate();



