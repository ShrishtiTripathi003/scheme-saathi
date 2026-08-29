// ============================================================
// SCHEME SAATHI
// schemes.js
// ============================================================

const normalize = (value) =>
  String(value ?? "")
    .trim()
    .toLowerCase()
    .replace(/_/g, "-");

const numberValue = (value) => {
  const n = Number(
    String(value ?? "").replace(/,/g, "")
  );

  return Number.isFinite(n) ? n : 0;
};

// ============================================================
// FORM OPTIONS
// ============================================================

export const PURPOSE_OPTIONS = [
  {
    value: "business",
    label: {
      en: "Start / expand a micro business",
      hi: "सूक्ष्म व्यवसाय शुरू / बढ़ाएं",
    },
  },
  {
    value: "street-vending",
    label: {
      en: "Street vending",
      hi: "रेहड़ी-पटरी व्यापार",
    },
  },
  {
    value: "artisan",
    label: {
      en: "Traditional artisan trade",
      hi: "पारंपरिक शिल्प व्यापार",
    },
  },
  {
    value: "agriculture",
    label: {
      en: "Crop cultivation / farm credit",
      hi: "फसल / कृषि ऋण",
    },
  },
  {
    value: "solar",
    label: {
      en: "Solar agriculture / irrigation",
      hi: "सौर कृषि / सिंचाई",
    },
  },
  {
    value: "livestock",
    label: {
      en: "Livestock / poultry / dairy",
      hi: "पशुधन / पोल्ट्री / डेयरी",
    },
  },
];

export const CATEGORY_OPTIONS = [
  { value: "General", label: "General" },
  { value: "OBC", label: "OBC" },
  { value: "SC", label: "SC" },
  { value: "ST", label: "ST" },
  { value: "EWS", label: "EWS" },
  { value: "Other", label: "Other" },
];

export const OCCUPATION_OPTIONS = [
  {
    value: "business",
    label: {
      en: "Business owner",
      hi: "व्यवसाय स्वामी",
    },
  },
  {
    value: "self-employed",
    label: {
      en: "Self-employed",
      hi: "स्व-नियोजित",
    },
  },
  {
    value: "farmer",
    label: {
      en: "Farmer",
      hi: "किसान",
    },
  },
  {
    value: "street-vendor",
    label: {
      en: "Street vendor",
      hi: "रेहड़ी-पटरी विक्रेता",
    },
  },
  {
    value: "artisan",
    label: {
      en: "Artisan / craftsperson",
      hi: "शिल्पकार",
    },
  },
  {
    value: "other",
    label: {
      en: "Other",
      hi: "अन्य",
    },
  },
];

export const PROJECT_TYPE_OPTIONS = [
  {
    value: "manufacturing",
    label: {
      en: "Manufacturing",
      hi: "विनिर्माण",
    },
  },
  {
    value: "service",
    label: {
      en: "Service",
      hi: "सेवा",
    },
  },
  {
    value: "trading",
    label: {
      en: "Trading",
      hi: "व्यापार",
    },
  },
  {
    value: "agriculture",
    label: {
      en: "Agriculture",
      hi: "कृषि",
    },
  },
  {
    value: "solar",
    label: {
      en: "Solar / irrigation",
      hi: "सौर / सिंचाई",
    },
  },
  {
    value: "livestock",
    label: {
      en: "Livestock / poultry",
      hi: "पशुधन / पोल्ट्री",
    },
  },
];

export const EDUCATION_LEVELS = [
  {
    value: "below8",
    rank: 0,
    label: {
      en: "Below Class 8",
      hi: "कक्षा 8 से कम",
    },
  },
  {
    value: "8",
    rank: 1,
    label: {
      en: "Class 8",
      hi: "कक्षा 8",
    },
  },
  {
    value: "10",
    rank: 2,
    label: {
      en: "Class 10",
      hi: "कक्षा 10",
    },
  },
  {
    value: "12",
    rank: 3,
    label: {
      en: "Class 12",
      hi: "कक्षा 12",
    },
  },
  {
    value: "graduate",
    rank: 4,
    label: {
      en: "Graduate",
      hi: "स्नातक",
    },
  },
  {
    value: "postgraduate",
    rank: 5,
    label: {
      en: "Postgraduate",
      hi: "स्नातकोत्तर",
    },
  },
];

export const ALL_STATES = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry",
];

// ============================================================
// PM VISHWAKARMA
// Officially 18 family-based trades.
// ============================================================

export const VISHWAKARMA_TRADES = [
  "Carpenter",
  "Boat Maker",
  "Armourer",
  "Blacksmith",
  "Hammer and Tool Kit Maker",
  "Locksmith",
  "Goldsmith",
  "Potter",
  "Sculptor / Stone Carver",
  "Cobbler / Footwear Artisan",
  "Mason",
  "Basket / Mat / Broom / Coir Maker",
  "Doll / Toy Maker",
  "Barber",
  "Garland Maker",
  "Washerman",
  "Tailor",
  "Fishing Net Maker",
];

// ============================================================
// SCHEME DATA
// ============================================================

export const schemes = [

  // ==========================================================
  // 1. PMEGP
  // ==========================================================

  {
    id: "pmegp",

    name:
      "Prime Minister's Employment Generation Programme (PMEGP)",

    description:
      "Credit-linked margin-money subsidy support for eligible new micro enterprises.",

    category: "business",

    purposes: ["business"],

    projectTypes: [
      "manufacturing",
      "service",
      "trading",
    ],

    occupations: [
      "business",
      "self-employed",
      "other",
    ],

    states: "all",

    age: {
      min: 18,
      max: Infinity,
    },

    projectLimits: {
      manufacturing: 5000000,
      service: 2000000,
      trading: 2000000,
    },

    benefits: [
      "Credit-linked margin money subsidy.",
      "Subsidy generally ranges from 15% to 35% depending on applicable category and location.",
      "Maximum project cost of ₹50 lakh for manufacturing.",
      "Maximum project cost of ₹20 lakh for business/service.",
      "Primarily for new viable micro enterprises.",
    ],

    loanAmount:
      "Up to ₹50 lakh manufacturing / ₹20 lakh business or service",

    interest:
      "Normal bank rate as applicable",

    emi:
      "As per bank loan",

    calculator: {
      enabled: true,
      defaultLoan: 500000,
      defaultInterest: null,
      defaultTenure: 5,
      minTenure: 3,
      maxTenure: 7,
    },

    documents: [
      "Aadhaar Card",
      "PAN Card",
      "Photograph",
      "Project Report",
      "Bank Account Details",
      "Education Certificate where applicable",
      "Category Certificate where applicable",
    ],

    implementingAgency: [
      "Khadi and Village Industries Commission (KVIC)",
      "KVIB",
      "District Industries Centre (DIC)",
      "Participating Banks",
    ],

    officialSource:
      "Ministry of MSME / KVIC",

    officialUrl:
      "https://kviconline.gov.in/pmegpeportal/pmegphome/",
  },

  // ==========================================================
  // 2. MUDRA
  // ==========================================================

  {
    id: "mudra",

    name:
      "Pradhan Mantri MUDRA Yojana (PMMY)",

    description:
      "Institutional collateral-free credit for eligible micro enterprises and specified allied activities.",

    category: "business",

    purposes: ["business"],

    projectTypes: [
      "manufacturing",
      "service",
      "trading",
      "livestock",
    ],

    occupations: [
      "business",
      "self-employed",
      "farmer",
      "other",
    ],

    states: "all",

    age: {
      min: 18,
      max: Infinity,
    },

    benefits: [
      "Shishu: up to ₹50,000.",
      "Kishor: above ₹50,000 up to ₹5 lakh.",
      "Tarun: above ₹5 lakh up to ₹10 lakh.",
      "Tarun Plus: above ₹10 lakh up to ₹20 lakh for eligible previous Tarun borrowers.",
      "Collateral is not required under PMMY.",
    ],

    loanAmount:
      "Up to ₹20 lakh under applicable PMMY category",

    interest:
      "As applicable by lending institution",

    emi:
      "As per lender",

    calculator: {
      enabled: true,
      defaultLoan: 500000,
      defaultInterest: null,
      defaultTenure: 5,
      minTenure: 1,
      maxTenure: 10,
    },

    documents: [
      "Aadhaar Card",
      "PAN Card",
      "Address Proof",
      "Business / Activity Details",
      "Bank Account Details",
      "KYC Documents",
    ],

    implementingAgency: [
      "Public Sector Banks",
      "Private Sector Banks",
      "Regional Rural Banks",
      "Small Finance Banks",
      "NBFCs",
      "MFIs",
    ],

    officialSource:
      "Department of Financial Services",

    officialUrl:
      "https://financialservices.gov.in/pradhan-mantri-mudra-yojana-pmmy",
  },

  // ==========================================================
  // 3. PM VISHWAKARMA
  // ==========================================================

  {
    id: "pm-vishwakarma",

    name:
      "PM Vishwakarma",

    description:
      "End-to-end support for eligible traditional artisans and craftspeople working with hands and tools.",

    category: "artisan",

    purposes: ["artisan"],

    projectTypes: [
      "manufacturing",
      "service",
    ],

    occupations: ["artisan"],

    states: "all",

    age: {
      min: 18,
      max: Infinity,
    },

    benefits: [
      "Recognition through PM Vishwakarma Certificate and ID Card.",
      "Skill training support.",
      "Toolkit incentive.",
      "Collateral-free credit support.",
      "5% concessional interest rate under the scheme.",
      "Digital transaction incentive.",
      "Marketing support.",
    ],

    loanAmount:
      "Credit support in two stages under scheme provisions",

    interest:
      "5% concessional rate",

    emi:
      "As per loan tranche",

    calculator: {
      enabled: true,
      defaultLoan: 100000,
      defaultInterest: 5,
      defaultTenure: 2,
      minTenure: 1,
      maxTenure: 3,
    },

    documents: [
      "Aadhaar Card",
      "Mobile Number",
      "Bank Account Details",
      "Trade Verification",
      "PM Vishwakarma Registration",
    ],

    implementingAgency: [
      "Ministry of Micro, Small & Medium Enterprises",
      "Common Service Centres (CSC)",
      "Banks / Lending Institutions",
      "State / District Authorities",
    ],

    officialSource:
      "Ministry of MSME / PM Vishwakarma",

    officialUrl:
      "https://pmvishwakarma.gov.in/",
  },

  // ==========================================================
  // 4. PM SVANIDHI
  // ==========================================================

  {
    id: "pm-svanidhi",

    name:
      "PM Street Vendor's AtmaNirbhar Nidhi (PM SVANidhi)",

    description:
      "Progressive working-capital credit support for eligible street vendors.",

    category: "street-vendor",

    purposes: ["street-vending"],

    projectTypes: [
      "trading",
      "service",
    ],

    occupations: [
      "street-vendor",
    ],

    states: "all",

    age: {
      min: 18,
      max: Infinity,
    },

    benefits: [
      "First tranche: up to ₹15,000.",
      "Second tranche: up to ₹25,000 after eligible repayment.",
      "Third tranche: up to ₹50,000 after eligible repayment.",
      "Interest subsidy for eligible timely repayment.",
      "Digital transaction incentives.",
      "UPI-linked RuPay credit card up to ₹30,000 for eligible vendors after timely second-tranche repayment.",
    ],

    loanAmount:
      "₹15,000 / ₹25,000 / ₹50,000 progressive tranches",

    interest:
      "Lender's rate with applicable scheme interest subsidy",

    emi:
      "As per lender and loan cycle",

    calculator: {
      enabled: true,
      defaultLoan: 15000,
      defaultInterest: null,
      defaultTenure: 1,
      minTenure: 1,
      maxTenure: 3,
    },

    documents: [
      "Certificate of Vending / ID Card where applicable",
      "Letter of Recommendation where applicable",
      "Aadhaar Card",
      "Mobile Number",
      "Bank Account Details",
      "KYC Documents",
    ],

    implementingAgency: [
      "Ministry of Housing and Urban Affairs",
      "Urban Local Bodies",
      "SIDBI",
      "Participating Lending Institutions",
    ],

    officialSource:
      "Ministry of Housing and Urban Affairs",

    officialUrl:
      "https://pmsvanidhi.mohua.gov.in/",
  },

  // ==========================================================
  // 5. PM-KUSUM
  // ==========================================================

  {
    id: "pm-kusum",

    name:
      "Pradhan Mantri Kisan Urja Suraksha evam Utthaan Mahabhiyan (PM-KUSUM)",

    description:
      "Supports specified solar-energy applications in agriculture through separate components.",

    category: "solar",

    purposes: [
      "solar",
      "agriculture",
    ],

    projectTypes: [
      "solar",
      "agriculture",
    ],

    occupations: ["farmer"],

    states: "all",

    age: {
      min: 18,
      max: Infinity,
    },

    benefits: [
      "Component A: grid-connected renewable-energy plants from 500 kW to 2 MW under applicable conditions.",
      "Component B: standalone solar agricultural pumps.",
      "Component C (IPS): solarisation of existing grid-connected agricultural pumps.",
      "Financial assistance depends on component and state implementation.",
    ],

    loanAmount:
      "Component-specific financing",

    interest:
      "As applicable to financing arrangement",

    emi:
      "As applicable",

    calculator: {
      enabled: false,
    },

    documents: [
      "Aadhaar Card",
      "Land / Agricultural Documents",
      "Bank Account Details",
      "Farmer Identity Documents",
      "Pump / Electricity Details where applicable",
    ],

    implementingAgency: [
      "Ministry of New and Renewable Energy",
      "State Designated Departments",
      "DISCOMs",
      "Agriculture / Irrigation Departments",
    ],

    officialSource:
      "Ministry of New and Renewable Energy",

    officialUrl:
      "https://pmkusum.mnre.gov.in/",
  },

  // ==========================================================
  // 6. NLM-EDP
  // ==========================================================

  {
    id: "nlm-edp",

    name:
      "National Livestock Mission - Entrepreneurship Development Programme",

    description:
      "Entrepreneurship support for specified livestock, poultry and feed/fodder activities.",

    category: "livestock",

    purposes: [
      "livestock",
    ],

    projectTypes: [
      "livestock",
    ],

    occupations: [
      "farmer",
      "business",
      "self-employed",
    ],

    states: "all",

    age: {
      min: 18,
      max: Infinity,
    },

    benefits: [
      "Capital subsidy support of up to 50% for eligible project cost.",
      "Subsidy can be up to ₹50 lakh depending on eligible activity and applicable ceiling.",
      "Supports specified poultry, sheep, goat, piggery and livestock activities.",
      "Supports specified feed and fodder entrepreneurship activities.",
    ],

    loanAmount:
      "Project-specific financing",

    interest:
      "As applicable",

    emi:
      "As applicable",

    calculator: {
      enabled: false,
    },

    documents: [
      "Aadhaar Card",
      "PAN Card",
      "Bank Account Details",
      "Detailed Project Report",
      "Land / Lease Documents where required",
      "Entity Documents where applicable",
    ],

    implementingAgency: [
      "Department of Animal Husbandry & Dairying",
      "State Animal Husbandry Departments",
      "Banks / Lending Institutions",
    ],

    officialSource:
      "Department of Animal Husbandry & Dairying",

    officialUrl:
      "https://dahd.gov.in/en/schemes/programmes/national_livestock_mission",
  },

  // ==========================================================
  // 7. KCC
  // ==========================================================

  {
    id: "kcc",

    name:
      "Kisan Credit Card (KCC)",

    description:
      "Institutional credit for eligible farmers and specified agricultural/allied activities.",

    category: "agriculture",

    purposes: [
      "agriculture",
      "livestock",
    ],

    projectTypes: [
      "agriculture",
      "livestock",
    ],

    occupations: ["farmer"],

    states: "all",

    age: {
      min: 18,
      max: Infinity,
    },

    benefits: [
      "Credit support for crop cultivation.",
      "Post-harvest and produce-marketing needs.",
      "Working capital for farm assets.",
      "Support for specified allied activities including dairy, fisheries, poultry and others.",
    ],

    loanAmount:
      "Credit limit determined according to crop, area, scale of finance and applicable norms",

    interest:
      "As applicable under prevailing government and banking provisions",

    emi:
      "As per bank terms and crop cycle",

    calculator: {
      enabled: true,
      defaultLoan: null,
      defaultInterest: null,
      defaultTenure: 1,
      minTenure: 1,
      maxTenure: 5,
    },

    documents: [
      "Aadhaar / KYC",
      "Land / Cultivation Documents where applicable",
      "Bank Account Details",
      "Farmer / Activity Details",
      "Photograph",
    ],

    implementingAgency: [
      "Scheduled Commercial Banks",
      "Regional Rural Banks",
      "Cooperative Banks",
      "Other Eligible Lending Institutions",
    ],

    officialSource:
      "Government agricultural credit / Kisan Rin Portal",

    officialUrl:
      "https://fasalrin.gov.in/eligibility",
  },
];

// ============================================================
// MATCHING ENGINE
// ============================================================

function purposeMatches(
  scheme,
  purpose
) {
  return (
    Boolean(purpose) &&
    scheme.purposes?.some(
      (item) =>
        normalize(item) ===
        normalize(purpose)
    )
  );
}

function projectTypeMatches(
  scheme,
  projectType
) {
  if (!projectType) {
    return null;
  }

  return (
    scheme.projectTypes?.some(
      (item) =>
        normalize(item) ===
        normalize(projectType)
    ) ?? false
  );
}

function occupationMatches(
  scheme,
  occupation
) {
  if (!occupation) {
    return null;
  }

  return (
    scheme.occupations?.some(
      (item) =>
        normalize(item) ===
        normalize(occupation)
    ) ?? false
  );
}

function stateMatches(
  scheme,
  state
) {
  if (!state) {
    return false;
  }

  return (
    scheme.states === "all" ||
    (
      Array.isArray(scheme.states) &&
      scheme.states.some(
        (item) =>
          normalize(item) ===
          normalize(state)
      )
    )
  );
}

// ============================================================
// EVALUATE SCHEME
// ============================================================

function evaluateScheme(
  scheme,
  formData
) {
  const purpose =
    normalize(formData.purpose);

  const category =
    normalize(formData.category);

  const projectType =
    normalize(formData.projectType);

  const occupation =
    normalize(formData.occupation);

  const state =
    normalize(formData.state);

  const age =
    numberValue(formData.age);

  const projectCost =
    numberValue(
      formData.projectCost
    );

  const education =
    normalize(formData.education);

  const isNewEnterprise =
    normalize(
      formData.isNewEnterprise
    );

  const previousGovernmentSubsidy =
    normalize(
      formData.previousGovernmentSubsidy
    );

  const artisanTrade =
    normalize(
      formData.artisanTrade
    );

  const streetVendorProof =
    normalize(
      formData.streetVendorProof
    );

  const streetVendingBefore2020 =
    normalize(
      formData.streetVendingBefore2020
    );

  const farmerStatus =
    normalize(
      formData.farmerStatus
    );

  const existingAgriculturalPump =
    normalize(
      formData.existingAgriculturalPump
    );

  const kusumComponent =
    normalize(
      formData.kusumComponent
    );

  const gridAvailability =
    normalize(
      formData.gridAvailability
    );

  const beneficiaryType =
    normalize(
      formData.beneficiaryType
    );

  const governmentEmployee =
    normalize(
      formData.governmentEmployee
    );

  const previousGovernmentLoanStatus =
    normalize(
      formData.previousGovernmentLoanStatus
    );

  const gender =
    normalize(formData.gender);

  const isAdult =
    age >= 18;

  const checks = [];
  const reasons = [];

  const addCheck = ({
    key,
    en,
    hi,
    ok,
    hard = false,
  }) => {
    checks.push({
      key,
      label: {
        en,
        hi,
      },
      ok: Boolean(ok),
      hard,
    });
  };

  const addReason = (
    en,
    hi
  ) => {
    reasons.push({
      en,
      hi,
    });
  };

  // ----------------------------------------------------------
  // APPLICABILITY
  // ----------------------------------------------------------

  if (
    !purposeMatches(
      scheme,
      purpose
    )
  ) {
    return {
      ...scheme,
      applicable: false,
      match: 0,
      matchScore: 0,
      eligible: false,
      checks: [],
      reasons: [],
      warnings: [
        {
          en:
            "Your selected purpose does not match this scheme's intended use.",
          hi:
            "आपका चुना हुआ उद्देश्य इस योजना के उपयोग से मेल नहीं खाता।",
        },
      ],
    };
  }

  // ----------------------------------------------------------
  // MATCH SCORE
  // ----------------------------------------------------------

  let possiblePoints = 0;
  let earnedPoints = 0;

  const addFactor = (
    points,
    matched,
    en,
    hi
  ) => {
    possiblePoints += points;

    if (matched) {
      earnedPoints += points;

      addReason(
        en,
        hi
      );
    }
  };

  // Purpose
  addFactor(
    40,
    true,
    "Your selected purpose matches the scheme.",
    "आपका चुना हुआ उद्देश्य इस योजना से मेल खाता है।"
  );

  // Project type
  const projectMatch =
    projectTypeMatches(
      scheme,
      projectType
    );

  if (
    projectMatch !== null
  ) {
    addFactor(
      20,
      projectMatch,
      "Your project type is supported.",
      "आपका परियोजना प्रकार समर्थित है।"
    );
  }

  // Occupation only for adults
  if (
    isAdult &&
    occupation
  ) {
    const occupationMatch =
      occupationMatches(
        scheme,
        occupation
      );

    if (
      occupationMatch !==
      null
    ) {
      addFactor(
        20,
        occupationMatch,
        "Your occupation matches the beneficiary/activity profile.",
        "आपका व्यवसाय लाभार्थी/गतिविधि प्रोफ़ाइल से मेल खाता है।"
      );
    }
  }

  // Location
  addFactor(
    10,
    stateMatches(
      scheme,
      state
    ),
    "Your selected location is covered.",
    "आपका चुना हुआ स्थान योजना के अंतर्गत आता है।"
  );

  // Project cost relevance
  let costCheck = null;

  if (
    scheme.projectLimits &&
    projectType
  ) {
    const limit =
      scheme.projectLimits[
        projectType
      ];

    if (
      typeof limit === "number"
    ) {
      costCheck =
        projectCost <= limit;
    }
  }

  if (
    costCheck === null &&
    scheme.maxProjectCost
  ) {
    costCheck =
      projectCost <=
      scheme.maxProjectCost;
  }

  if (
    costCheck !== null
  ) {
    addFactor(
      10,
      costCheck,
      "Your project cost fits the applicable project limit.",
      "आपकी परियोजना लागत लागू परियोजना सीमा में है।"
    );
  }

  const match =
    possiblePoints > 0
      ? Math.round(
          (
            earnedPoints /
            possiblePoints
          ) * 100
        )
      : 0;

  // ----------------------------------------------------------
  // COMMON ELIGIBILITY
  // ----------------------------------------------------------

  addCheck({
    key: "location",
    en: "Your selected location is covered.",
    hi: "आपका चुना हुआ स्थान योजना के अंतर्गत आता है।",
    ok: stateMatches(
      scheme,
      state
    ),
    hard: true,
  });

  if (
    scheme.age &&
    age > 0
  ) {
    const ageOK =
      age >= scheme.age.min &&
      age <= scheme.age.max;

    addCheck({
      key: "age",
      en: Number.isFinite(scheme.age.max)
        ? `Applicant must be ${scheme.age.min}–${scheme.age.max} years old.`
        : `Applicant must be at least ${scheme.age.min} years old.`,
      hi: Number.isFinite(scheme.age.max)
        ? `आवेदक की आयु ${scheme.age.min}–${scheme.age.max} वर्ष होनी चाहिए।`
        : `आवेदक की आयु कम से कम ${scheme.age.min} वर्ष होनी चाहिए।`,
      ok: ageOK,
      hard: true,
    });
  }

  // ----------------------------------------------------------
  // PMEGP
  // ----------------------------------------------------------

  if (
    scheme.id ===
    "pmegp"
  ) {
    addCheck({
      key: "new-enterprise",
      en: "The project is a new enterprise.",
      hi: "परियोजना एक नया उद्यम है।",
      ok:
        isNewEnterprise ===
        "yes",
      hard: true,
    });

    addCheck({
      key: "previous-subsidy",
      en: "The unit has not already received government subsidy.",
      hi: "इस इकाई को पहले सरकारी सब्सिडी नहीं मिली है।",
      ok:
        previousGovernmentSubsidy !==
        "yes",
      hard: true,
    });

    // PMEGP Class 8 rule for higher-cost projects.
    const higherCost =
      (
        projectType ===
        "manufacturing" &&
        projectCost >
          1000000
      ) ||
      (
        projectType !==
          "manufacturing" &&
        projectCost >
          500000
      );

    if (
      higherCost
    ) {
      const educationRank =
        EDUCATION_LEVELS.find(
          (item) =>
            item.value ===
            education
        )?.rank ?? 0;

      addCheck({
        key: "education",
        en:
          "Class 8 pass or above is required for the applicable higher project-cost condition.",
        hi:
          "लागू उच्च परियोजना लागत की स्थिति में कक्षा 8 या उससे अधिक आवश्यक है।",
        ok:
          educationRank >= 1,
        hard: true,
      });
    }
  }

  // ----------------------------------------------------------
  // MUDRA
  // ----------------------------------------------------------

  if (
    scheme.id ===
    "mudra"
  ) {
    if (
      projectCost >
      1000000
    ) {
      const tarunPlusOK =
        formData.previousTarunLoanRepaid !==
        "no";

      addCheck({
        key: "tarun-plus",
        en:
          "For amounts above ₹10 lakh, Tarun Plus eligibility requires successful repayment of a previous Tarun loan.",
        hi:
          "₹10 लाख से अधिक राशि के लिए Tarun Plus हेतु पिछले Tarun ऋण का सफल पुनर्भुगतान आवश्यक है।",
        ok:
          tarunPlusOK,
        hard: true,
      });
    }
  }

  // ----------------------------------------------------------
  // PM VISHWAKARMA
  // ----------------------------------------------------------

  if (
    scheme.id ===
    "pm-vishwakarma"
  ) {
    addCheck({
      key: "artisan",
      en: "Applicant is an artisan/craftsperson.",
      hi: "आवेदक शिल्पकार है।",
      ok:
        occupation ===
        "artisan",
      hard: true,
    });

    const tradeOK =
      VISHWAKARMA_TRADES.some(
        (trade) =>
          normalize(
            trade
          ) ===
          artisanTrade
      );

    addCheck({
      key: "trade",
      en: "The selected trade is one of the covered traditional trades.",
      hi: "चुना गया ट्रेड शामिल पारंपरिक ट्रेडों में से एक है।",
      ok: tradeOK,
      hard: true,
    });

    const previousLoanOK =
      previousGovernmentLoanStatus ===
        "no" ||
      previousGovernmentLoanStatus ===
        "mudra-repaid" ||
      previousGovernmentLoanStatus ===
        "svanidhi-repaid" ||
      previousGovernmentLoanStatus ===
        "";

    addCheck({
      key: "previous-loan",
      en: "Previous government-loan condition is satisfied.",
      hi: "पिछले सरकारी ऋण संबंधी शर्त पूरी होती है।",
      ok: previousLoanOK,
      hard: true,
    });

    addCheck({
      key: "government-service",
      en: "Applicant is not a government employee.",
      hi: "आवेदक सरकारी कर्मचारी नहीं है।",
      ok:
        governmentEmployee !==
        "yes",
      hard: true,
    });
  }

  // ----------------------------------------------------------
  // PM SVANIDHI
  // ----------------------------------------------------------

  if (
    scheme.id ===
    "pm-svanidhi"
  ) {
    addCheck({
      key: "vendor",
      en: "Applicant is a street vendor.",
      hi: "आवेदक स्ट्रीट वेंडर है।",
      ok:
        occupation ===
        "street-vendor",
      hard: true,
    });

    if (
      streetVendorProof
    ) {
      addCheck({
        key: "vendor-proof",
        en: "Applicable street-vendor identification/proof is available.",
        hi: "लागू स्ट्रीट वेंडर पहचान/प्रमाण उपलब्ध है।",
        ok:
          streetVendorProof ===
          "yes",
        hard: true,
      });
    }

    // Keep the historical eligibility question in the MVP,
    // but only apply it when the user actually answers it.
    if (
      streetVendingBefore2020
    ) {
      addCheck({
        key: "vending-history",
        en: "The applicable vending-history condition is satisfied.",
        hi: "लागू वेंडिंग-इतिहास की शर्त पूरी होती है।",
        ok:
          streetVendingBefore2020 ===
          "yes",
        hard: true,
      });
    }
  }

  // ----------------------------------------------------------
  // PM-KUSUM
  // ----------------------------------------------------------

  if (
    scheme.id ===
    "pm-kusum"
  ) {
    // Must first choose a component.
    addCheck({
      key: "kusum-component",
      en: "A PM-KUSUM component has been selected.",
      hi: "PM-KUSUM का एक घटक चुना गया है।",
      ok: Boolean(
        kusumComponent
      ),
      hard: true,
    });

    if (
      kusumComponent ===
      "component-a"
    ) {
      addCheck({
        key: "beneficiary",
        en: "Applicant fits an eligible Component A beneficiary category.",
        hi: "आवेदक घटक A की पात्र लाभार्थी श्रेणी में आता है।",
        ok:
          occupation ===
            "farmer" ||
          [
            "farmer-group",
            "cooperative",
            "panchayat",
            "fpo",
            "wua",
          ].includes(
            beneficiaryType
          ),
        hard: true,
      });

      addCheck({
        key: "land",
        en: "Suitable land is available for the proposed renewable-energy plant.",
        hi: "प्रस्तावित नवीकरणीय ऊर्जा संयंत्र के लिए उपयुक्त भूमि उपलब्ध है।",
        ok:
          formData.landAvailable ===
          "yes",
        hard: true,
      });

      if (
        formData.kusumCapacity
      ) {
        const capacity =
          Number(
            formData.kusumCapacity
          );

        addCheck({
          key: "capacity",
          en:
            "Project capacity is within the applicable 500 kW–2 MW range.",
          hi:
            "परियोजना क्षमता लागू 500 kW–2 MW सीमा में है।",
          ok:
            capacity >=
              500 &&
            capacity <=
              2000,
          hard: true,
        });
      }
    }

    if (
      kusumComponent ===
      "component-b"
    ) {
      addCheck({
        key: "farmer",
        en: "Applicant is an eligible farmer beneficiary.",
        hi: "आवेदक पात्र किसान लाभार्थी है।",
        ok:
          occupation ===
            "farmer" ||
          farmerStatus ===
            "yes",
        hard: true,
      });

      addCheck({
        key: "off-grid",
        en: "The proposed pump location is off-grid.",
        hi: "प्रस्तावित पंप स्थान ऑफ-ग्रिड है।",
        ok:
          gridAvailability ===
            "no" ||
          gridAvailability ===
            "off-grid",
        hard: true,
      });
    }

    if (
      kusumComponent ===
      "component-c-ips"
    ) {
      addCheck({
        key: "farmer",
        en: "Applicant is an eligible farmer beneficiary.",
        hi: "आवेदक पात्र किसान लाभार्थी है।",
        ok:
          occupation ===
            "farmer" ||
          farmerStatus ===
            "yes",
        hard: true,
      });

      addCheck({
        key: "grid-pump",
        en: "Applicant has an existing grid-connected agricultural pump.",
        hi: "आवेदक के पास मौजूदा ग्रिड-कनेक्टेड कृषि पंप है।",
        ok:
          existingAgriculturalPump ===
          "yes",
        hard: true,
      });
    }
  }

  // ----------------------------------------------------------
  // NLM-EDP
  // ----------------------------------------------------------

  if (
    scheme.id ===
    "nlm-edp"
  ) {
    addCheck({
      key: "livestock-activity",
      en: "The proposed activity is livestock/poultry/fodder related.",
      hi: "प्रस्तावित गतिविधि पशुधन/पोल्ट्री/चारा से संबंधित है।",
      ok:
        purpose ===
        "livestock",
      hard: true,
    });

    addCheck({
      key: "eligible-profile",
      en: "Applicant profile fits the eligible entrepreneurship profile.",
      hi: "आवेदक प्रोफ़ाइल पात्र उद्यमी प्रोफ़ाइल से मेल खाती है।",
      ok:
        [
          "farmer",
          "business",
          "self-employed",
        ].includes(
          occupation
        ),
      hard: true,
    });
  }

  // ----------------------------------------------------------
  // KCC
  // ----------------------------------------------------------

  if (
    scheme.id ===
    "kcc"
  ) {
    addCheck({
      key: "farmer",
      en: "Applicant is a farmer or eligible agricultural borrower.",
      hi: "आवेदक किसान या पात्र कृषि उधारकर्ता है।",
      ok:
        occupation ===
          "farmer" ||
        farmerStatus ===
          "yes",
      hard: true,
    });
  }

  // ----------------------------------------------------------
  // FINAL ELIGIBILITY
  // ----------------------------------------------------------

  const hardFailures =
    checks.filter(
      (check) =>
        check.hard &&
        !check.ok
    );

  const eligible =
    hardFailures.length === 0;

  const warnings =
    hardFailures.map(
      (check) =>
        check.label
    );

  let matchLevel =
    "Weak Match";

  if (
    match >= 80
  ) {
    matchLevel =
      "Strong Match";
  } else if (
    match >= 60
  ) {
    matchLevel =
      "Good Match";
  } else if (
    match >= 40
  ) {
    matchLevel =
      "Possible Match";
  }

  return {
    ...scheme,

    applicable: true,

    match,
    matchScore: match,

    eligible,

    checks,

    reasons,

    warnings,

    matchLevel,
  };
}

// ============================================================
// PUBLIC
// ============================================================

export function getMatchedSchemes(
  formData = {}
) {
  return schemes
    .map(
      (scheme) =>
        evaluateScheme(
          scheme,
          formData
        )
    )
    .filter(
      (scheme) =>
        scheme.applicable
    )
    .sort(
      (a, b) =>
        b.match -
        a.match
    );
}

export function getSchemeById(
  id
) {
  return schemes.find(
    (scheme) =>
      scheme.id === id
  );
}

export default schemes;