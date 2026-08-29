// ============================================================
// SCHEME SAATHI
// schemes.js
//
// Government-aligned scheme data + matching engine.
//
// IMPORTANT:
// Match score = relevance of the user's need.
// Eligibility = mandatory scheme conditions.
//
// These are NOT government-certified eligibility decisions.
// Final verification must happen with the implementing agency.
// ============================================================


// ============================================================
// HELPERS
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
  {
    value: "General",
    label: "General",
  },
  {
    value: "OBC",
    label: "OBC",
  },
  {
    value: "SC",
    label: "SC",
  },
  {
    value: "ST",
    label: "ST",
  },
  {
    value: "EWS",
    label: "EWS",
  },
  {
    value: "Other",
    label: "Other",
  },
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
    value: "student",
    label: {
      en: "Student",
      hi: "छात्र",
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
// PM VISHWAKARMA TRADES
// ============================================================

const VISHWAKARMA_TRADES = [
  "Carpenter",
  "Boat Maker",
  "Armourer",
  "Blacksmith",
  "Hammer and Tool Kit Maker",
  "Locksmith",
  "Goldsmith",
  "Potter",
  "Sculptor",
  "Stone Worker",
  "Cobbler",
  "Mason",
  "Basket / Mat / Broom Maker",
  "Traditional Toy Maker",
  "Barber",
  "Garland Maker",
  "Washerman",
  "Tailor",
  "Fishing Net Maker",
];


// ============================================================
// SCHEMES
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
      "Credit-linked subsidy support for eligible new micro enterprises.",

    category: "business",

    purposes: [
      "business",
    ],

    projectTypes: [
      "manufacturing",
      "service",
      "trading",
    ],

    occupations: [
      "business",
      "self-employed",
      "unemployed",
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
      "Maximum eligible project cost is ₹50 lakh for manufacturing and ₹20 lakh for business/service.",
      "Designed primarily for new viable micro enterprises.",
    ],

    loanAmount:
      "Up to ₹50 lakh manufacturing / ₹20 lakh business or service",

    interest:
      "As applicable by participating bank",

    emi:
      "As per approved bank loan",

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
      "Institutional credit for eligible micro enterprises and specified income-generating activities.",

    category: "business",

    purposes: [
      "business",
    ],

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

    maxProjectCost: 2000000,

    benefits: [
      "Shishu loans up to ₹50,000.",
      "Kishor loans above ₹50,000 up to ₹5 lakh.",
      "Tarun loans above ₹5 lakh up to ₹10 lakh.",
      "Tarun Plus can go above ₹10 lakh up to ₹20 lakh for eligible previous Tarun borrowers.",
      "Collateral-free institutional credit under PMMY.",
    ],

    loanAmount:
      "Up to ₹20 lakh under applicable MUDRA category",

    interest:
      "As applicable by lending institution",

    emi:
      "As per lender",

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
  // 3. STAND-UP INDIA
  // ==========================================================

  {
    id: "stand-up-india",

    name:
      "Stand-Up India Scheme",

    description:
      "Bank credit for eligible women and SC/ST entrepreneurs setting up greenfield enterprises.",

    category: "business",

    purposes: [
      "business",
    ],

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

    projectRange: {
      min: 1000000,
      max: 10000000,
    },

    benefits: [
      "Composite loan between ₹10 lakh and ₹1 crore.",
      "For eligible women or SC/ST entrepreneurs.",
      "For setting up greenfield enterprises in manufacturing, services or trading.",
      "Agriculture-allied activities are included within the scheme framework.",
    ],

    loanAmount:
      "₹10 lakh to ₹1 crore",

    interest:
      "As applicable by lending bank",

    emi:
      "As per lender",

    documents: [
      "Aadhaar Card",
      "PAN Card",
      "Address Proof",
      "SC/ST Certificate where applicable",
      "Project Report",
      "Bank Account Details",
      "Business Documents where applicable",
    ],

    implementingAgency: [
      "Scheduled Commercial Banks",
      "Department of Financial Services",
    ],

    officialSource:
      "Department of Financial Services",

    officialUrl:
      "https://financialservices.gov.in/stand-india-scheme-supi",
  },


  // ==========================================================
  // 4. PM VISHWAKARMA
  // ==========================================================

  {
    id: "pm-vishwakarma",

    name:
      "PM Vishwakarma",

    description:
      "End-to-end support for eligible traditional artisans and craftspeople working with hands and tools.",

    category: "artisan",

    purposes: [
      "artisan",
    ],

    projectTypes: [
      "manufacturing",
      "service",
    ],

    occupations: [
      "artisan",
    ],

    states: "all",

    age: {
      min: 18,
      max: Infinity,
    },

    eligibleTrades:
      VISHWAKARMA_TRADES,

    benefits: [
      "Recognition through PM Vishwakarma Certificate and ID Card.",
      "Skill training support.",
      "Toolkit incentive.",
      "Credit support with concessional interest.",
      "Digital transaction and marketing support.",
    ],

    loanAmount:
      "Credit support in first and second tranches under scheme provisions",

    interest:
      "5% concessional rate under the scheme",

    emi:
      "As per loan tranche",

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
  // 5. PM SVANIDHI
  // ==========================================================

  {
    id: "pm-svanidhi",

    name:
      "PM Street Vendor's AtmaNirbhar Nidhi (PM SVANidhi)",

    description:
      "Working-capital credit support for eligible street vendors.",

    category: "street-vendor",

    purposes: [
      "street-vending",
    ],

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
      "Working-capital credit support.",
      "Interest subsidy for eligible timely repayment.",
      "Digital transaction incentives under applicable provisions.",
      "Progressive loan cycles subject to eligibility and repayment.",
    ],

    loanAmount:
      "Working-capital credit under applicable PM SVANidhi loan cycle",

    interest:
      "Interest subsidy for eligible borrowers",

    emi:
      "As per loan terms",

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
  // 6. PM-KUSUM
  // ==========================================================

  {
    id: "pm-kusum",

    name:
      "Pradhan Mantri Kisan Urja Suraksha evam Utthaan Mahabhiyan (PM-KUSUM)",

    description:
      "Supports specified solar-energy applications in agriculture through different scheme components.",

    category: "solar",

    purposes: [
      "solar",
      "agriculture",
    ],

    projectTypes: [
      "solar",
      "agriculture",
    ],

    occupations: [
      "farmer",
    ],

    states: "all",

    age: {
      min: 18,
      max: Infinity,
    },

    benefits: [
      "Support for eligible standalone solar agricultural pumps.",
      "Support for solarisation of eligible grid-connected agricultural pumps.",
      "Component A supports specified grid-connected renewable power plants.",
      "Financial assistance depends on component and state implementation.",
    ],

    loanAmount:
      "Component and state-specific financing arrangement",

    interest:
      "As applicable",

    emi:
      "As per financing arrangement",

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
  // 7. NATIONAL LIVESTOCK MISSION - EDP
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

    eligibleActivities: [
      "Poultry breeding",
      "Sheep breeding",
      "Goat breeding",
      "Piggery",
      "Horse / donkey / camel entrepreneurship",
      "Fodder block production",
      "Hay / silage / TMR units",
      "Fodder seed processing / storage",
    ],

    benefits: [
      "Capital subsidy support for eligible entrepreneurship projects.",
      "Support for specified livestock and poultry activities.",
      "Support for specified feed and fodder activities.",
    ],

    loanAmount:
      "Project financing through eligible bank / own contribution as applicable",

    interest:
      "As applicable",

    emi:
      "As per financing arrangement",

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
      "https://dahd.gov.in/schemes/programmes/national_livestock_mission",
  },


  // ==========================================================
  // 8. KISAN CREDIT CARD
  // ==========================================================

  {
    id: "kcc",

    name:
      "Kisan Credit Card (KCC)",

    description:
      "Timely institutional credit for eligible farmers and specified agricultural/allied activities.",

    category: "agriculture",

    purposes: [
      "agriculture",
      "livestock",
    ],

    projectTypes: [
      "agriculture",
      "livestock",
    ],

    occupations: [
      "farmer",
    ],

    states: "all",

    age: {
      min: 18,
      max: Infinity,
    },

    benefits: [
      "Credit support for crop cultivation.",
      "Post-harvest and produce-marketing related needs.",
      "Working capital for farm assets.",
      "Eligible allied activities including dairy, fisheries, poultry and other specified activities.",
    ],

    loanAmount:
      "Credit limit determined by crop, cultivated area, scale of finance and applicable norms",

    interest:
      "As applicable under prevailing government and banking provisions",

    emi:
      "As per bank terms",

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
// BASIC MATCH HELPERS
// ============================================================

function stateMatches(
  scheme,
  state
) {
  if (!state) return false;

  if (scheme.states === "all") {
    return true;
  }

  return (
    Array.isArray(
      scheme.states
    ) &&
    scheme.states.some(
      (item) =>
        normalize(item) ===
        normalize(state)
    )
  );
}


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


// ============================================================
// EVALUATE ONE SCHEME
// ============================================================

function evaluateScheme(
  scheme,
  formData
) {
  const purpose =
    normalize(
      formData.purpose
    );

  const category =
    normalize(
      formData.category
    );

  const projectType =
    normalize(
      formData.projectType
    );

  const occupation =
    normalize(
      formData.occupation
    );

  const state =
    normalize(
      formData.state
    );

  const age =
    numberValue(
      formData.age
    );

  const projectCost =
    numberValue(
      formData.projectCost
    );

  const education =
    normalize(
      formData.education
    );

  const isNewEnterprise =
    normalize(
      formData.isNewEnterprise
    );

  const previousGovernmentSubsidy =
    normalize(
      formData.previousGovernmentSubsidy
    );

  const previousTarunLoanRepaid =
    normalize(
      formData.previousTarunLoanRepaid
    );

  const artisanTrade =
    String(
      formData.artisanTrade ?? ""
    );

  const streetVendorProof =
    normalize(
      formData.streetVendorProof
    );

  const farmerStatus =
    normalize(
      formData.farmerStatus
    );

  const landAvailable =
    normalize(
      formData.landAvailable
    );

  const existingAgriculturalPump =
    normalize(
      formData.existingAgriculturalPump
    );

  const gender =
    normalize(
      formData.gender
    );

  const isAdult =
    age >= 18;


  // ----------------------------------------------------------
  // CHECK ARRAYS
  // ----------------------------------------------------------

  const checks = [];

  const addCheck = ({
    key,
    en,
    hi,
    ok,
    hard = false,
    include = true,
  }) => {
    if (!include) return;

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


  // ----------------------------------------------------------
  // APPLICABILITY
  // ----------------------------------------------------------

  const purposeOK =
    purposeMatches(
      scheme,
      purpose
    );

  if (!purposeOK) {
    return {
      ...scheme,

      match: 0,
      matchScore: 0,

      eligible: false,

      applicable: false,

      checks: [],

      reasons: [],

      warnings: [
        {
          en: "The selected purpose does not match this scheme's intended use.",
          hi: "चुना गया उद्देश्य इस योजना के उपयोग से मेल नहीं खाता।",
        },
      ],

      matchLevel:
        "Not applicable",
    };
  }


  // ----------------------------------------------------------
  // RELEVANCE FACTORS
  // ----------------------------------------------------------

  const factors = [];


  // Purpose is the strongest factor.
  factors.push({
    points: 40,
    matched: true,
    reason: {
      en: "Your selected purpose matches the scheme.",
      hi: "आपका चुना हुआ उद्देश्य इस योजना से मेल खाता है।",
    },
  });


  // Project type is relevant when user selected it.
  const projectTypeResult =
    projectTypeMatches(
      scheme,
      projectType
    );

  if (
    projectTypeResult !==
    null
  ) {
    factors.push({
      points: 20,
      matched:
        projectTypeResult,
      reason: {
        en: "Your project type is supported.",
        hi: "आपका परियोजना प्रकार समर्थित है।",
      },
    });
  }


  // Occupation only exists for adults.
  if (
    isAdult &&
    occupation
  ) {
    const occupationResult =
      occupationMatches(
        scheme,
        occupation
      );

    if (
      occupationResult !==
      null
    ) {
      factors.push({
        points: 20,
        matched:
          occupationResult,
        reason: {
          en: "Your occupation matches the beneficiary/activity profile.",
          hi: "आपका व्यवसाय लाभार्थी/गतिविधि प्रोफ़ाइल से मेल खाता है।",
        },
      });
    }
  }


  // Location
  factors.push({
    points: 10,
    matched:
      stateMatches(
        scheme,
        state
      ),
    reason: {
      en: "Your selected location is covered.",
      hi: "आपका चुना हुआ स्थान योजना के अंतर्गत आता है।",
    },
  });


  // Project cost relevance.
  let costRelevant =
    false;

  let costMatched =
    true;


  if (
    scheme.projectLimits &&
    projectType
  ) {
    const limit =
      scheme.projectLimits[
        projectType
      ];

    if (
      typeof limit ===
      "number"
    ) {
      costRelevant = true;

      costMatched =
        projectCost <= limit;
    }
  }


  if (
    scheme.maxProjectCost &&
    !costRelevant
  ) {
    costRelevant = true;

    costMatched =
      projectCost <=
      scheme.maxProjectCost;
  }


  if (
    scheme.projectRange &&
    !costRelevant
  ) {
    costRelevant = true;

    costMatched =
      projectCost >=
        scheme.projectRange.min &&
      projectCost <=
        scheme.projectRange.max;
  }


  if (costRelevant) {
    factors.push({
      points: 10,
      matched:
        costMatched,
      reason: {
        en: "Your project cost fits the scheme's applicable range.",
        hi: "आपकी परियोजना लागत योजना की लागू सीमा में है।",
      },
    });
  }


  // ----------------------------------------------------------
  // SCORE
  // ----------------------------------------------------------

  const totalPoints =
    factors.reduce(
      (sum, factor) =>
        sum + factor.points,
      0
    );

  const matchedPoints =
    factors.reduce(
      (sum, factor) =>
        sum +
        (factor.matched
          ? factor.points
          : 0),
      0
    );

  const match =
    totalPoints > 0
      ? Math.round(
          (
            matchedPoints /
            totalPoints
          ) *
            100
        )
      : 0;


  // ----------------------------------------------------------
  // GENERIC ELIGIBILITY CHECKS
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
    addCheck({
      key: "age",
      en: `Age must be ${
        scheme.age.min
      }${
        Number.isFinite(
          scheme.age.max
        )
          ? `–${scheme.age.max}`
          : "+"
      } years.`,
      hi: `आयु ${
        scheme.age.min
      } वर्ष${
        Number.isFinite(
          scheme.age.max
        )
          ? ` से ${scheme.age.max} वर्ष`
          : " या अधिक"
      } होनी चाहिए।`,
      ok:
        age >=
          scheme.age.min &&
        age <=
          scheme.age.max,
      hard: true,
    });
  }


  // ==========================================================
  // PMEGP
  // ==========================================================

  if (
    scheme.id ===
    "pmegp"
  ) {
    addCheck({
      key: "new-enterprise",
      en: "The project is a new enterprise.",
      hi: "परियोजना एक नया उद्यम है।",
      ok:
        isNewEnterprise !==
        "no",
      hard: true,
    });


    addCheck({
      key: "previous-subsidy",
      en: "No previous government subsidy has been indicated for this unit.",
      hi: "इस इकाई के लिए पहले सरकारी सब्सिडी नहीं ली गई है।",
      ok:
        previousGovernmentSubsidy !==
        "yes",
      hard: true,
    });


    // Specific higher-project education condition.
    if (
      projectCost >
      (
        projectType ===
        "manufacturing"
          ? 1000000
          : 500000
      )
    ) {
      const educationOption =
        EDUCATION_LEVELS.find(
          (item) =>
            item.value ===
            education
        );

      const educationRank =
        educationOption?.rank ??
        0;

      addCheck({
        key: "education-pmegp",
        en: "Class 8 or above is required for the applicable higher project-cost condition.",
        hi: "लागू उच्च परियोजना लागत की स्थिति में कक्षा 8 या उससे अधिक आवश्यक है।",
        ok:
          educationRank >= 1,
        hard: true,
      });
    }
  }


  // ==========================================================
  // MUDRA
  // ==========================================================

  if (
    scheme.id ===
    "mudra"
  ) {
    if (
      projectCost >
      1000000
    ) {
      addCheck({
        key: "tarun-plus",
        en: "For Tarun Plus, previous Tarun loan repayment should be verified.",
        hi: "Tarun Plus के लिए पिछले Tarun ऋण के सफल पुनर्भुगतान की पुष्टि आवश्यक है।",
        ok:
          previousTarunLoanRepaid ===
            "yes" ||
          previousTarunLoanRepaid ===
            "not-applicable" ||
          previousTarunLoanRepaid ===
            "",
        hard: false,
      });
    }
  }


  // ==========================================================
  // STAND-UP INDIA
  // ==========================================================

  if (
    scheme.id ===
    "stand-up-india"
  ) {
    const targetGroup =
      category ===
        "sc" ||
      category ===
        "st" ||
      gender ===
        "female";

    addCheck({
      key: "target-group",
      en: "Applicant is a woman or belongs to SC/ST target group.",
      hi: "आवेदक महिला है या SC/ST लक्षित समूह में है।",
      ok: targetGroup,
      hard: true,
    });


    addCheck({
      key: "greenfield",
      en: "The enterprise is a new / greenfield enterprise.",
      hi: "उद्यम नया / ग्रीनफील्ड उद्यम है।",
      ok:
        isNewEnterprise !==
        "no",
      hard: true,
    });


    addCheck({
      key: "project-range",
      en: "Project cost is within ₹10 lakh to ₹1 crore.",
      hi: "परियोजना लागत ₹10 लाख से ₹1 करोड़ के बीच है।",
      ok:
        projectCost >=
          1000000 &&
        projectCost <=
          10000000,
      hard: true,
    });
  }


  // ==========================================================
  // PM VISHWAKARMA
  // ==========================================================

  if (
    scheme.id ===
    "pm-vishwakarma"
  ) {
    addCheck({
      key: "artisan",
      en: "Applicant is an artisan / craftsperson.",
      hi: "आवेदक शिल्पकार है।",
      ok:
        occupation ===
        "artisan",
      hard: true,
    });


    const selectedTrade =
      normalize(
        artisanTrade
      );


    const tradeOK =
      Boolean(
        selectedTrade
      ) &&
      VISHWAKARMA_TRADES.some(
        (trade) =>
          normalize(
            trade
          ) ===
          selectedTrade
      );


    addCheck({
      key: "trade",
      en: "Selected trade is one of the covered traditional trades.",
      hi: "चुना गया ट्रेड शामिल पारंपरिक ट्रेडों में से एक है।",
      ok: tradeOK,
      hard: true,
    });


    addCheck({
      key: "previous-similar-loan",
      en: "No similar Central/State government self-employment loan has been taken in the relevant look-back period, subject to scheme exceptions.",
      hi: "लागू अपवादों को छोड़कर संबंधित अवधि में समान सरकारी स्व-रोजगार ऋण नहीं लिया गया है।",
      ok:
        formData.similarGovernmentLoanLast5Years !==
        "yes",
      hard: true,
    });


    addCheck({
      key: "government-service",
      en: "Applicant is not a government employee.",
      hi: "आवेदक सरकारी कर्मचारी नहीं है।",
      ok:
        formData.governmentEmployee !==
        "yes",
      hard: true,
    });
  }


  // ==========================================================
  // PM SVANIDHI
  // ==========================================================

  if (
    scheme.id ===
    "pm-svanidhi"
  ) {
    addCheck({
      key: "vendor",
      en: "Applicant is an eligible street vendor.",
      hi: "आवेदक पात्र स्ट्रीट वेंडर है।",
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
        en: "Street-vendor identification / applicable proof is available.",
        hi: "स्ट्रीट वेंडर पहचान / लागू प्रमाण उपलब्ध है।",
        ok:
          streetVendorProof ===
          "yes",
        hard: true,
      });
    }
  }


  // ==========================================================
  // PM-KUSUM
  // ==========================================================

  if (
    scheme.id ===
    "pm-kusum"
  ) {
    addCheck({
      key: "farmer",
      en: "Applicant has an agricultural beneficiary profile.",
      hi: "आवेदक कृषि लाभार्थी प्रोफ़ाइल में आता है।",
      ok:
        occupation ===
          "farmer" ||
        farmerStatus ===
          "yes",
      hard: true,
    });


    // For solar-purpose cases, pump information helps
    // determine which component may apply.
    if (
      purpose ===
      "solar"
    ) {
      addCheck({
        key: "pump-information",
        en: "Agricultural pump information has been provided.",
        hi: "कृषि पंप की जानकारी दी गई है।",
        ok:
          Boolean(
            existingAgriculturalPump
          ),
        hard: false,
      });
    }

    // Do not mark land/pump as universally mandatory here:
    // PM-KUSUM has different components.
  }


  // ==========================================================
  // NLM
  // ==========================================================

  if (
    scheme.id ===
    "nlm-edp"
  ) {
    const livestockProfile =
      purpose ===
        "livestock" &&
      [
        "farmer",
        "business",
        "self-employed",
      ].includes(
        occupation
      );

    addCheck({
      key: "activity",
      en: "Proposed activity is a livestock-related activity.",
      hi: "प्रस्तावित गतिविधि पशुधन से संबंधित है।",
      ok: purpose ===
        "livestock",
      hard: true,
    });


    addCheck({
      key: "beneficiary",
      en: "Applicant profile fits an eligible livestock entrepreneur.",
      hi: "आवेदक प्रोफ़ाइल पात्र पशुधन उद्यमी से मेल खाती है।",
      ok: livestockProfile,
      hard: true,
    });


    if (
      landAvailable
    ) {
      addCheck({
        key: "land",
        en: "Land arrangement is available where required for the project.",
        hi: "जहाँ परियोजना के लिए आवश्यक है वहाँ भूमि व्यवस्था उपलब्ध है।",
        ok:
          landAvailable ===
          "yes",
        hard: false,
      });
    }
  }


  // ==========================================================
  // KCC
  // ==========================================================

  if (
    scheme.id ===
    "kcc"
  ) {
    addCheck({
      key: "farmer",
      en: "Applicant is a farmer / eligible agricultural borrower.",
      hi: "आवेदक किसान / पात्र कृषि उधारकर्ता है।",
      ok:
        occupation ===
          "farmer" ||
        farmerStatus ===
          "yes",
      hard: true,
    });
  }


  // ==========================================================
  // ELIGIBILITY
  // ==========================================================

  const hardFailures =
    checks.filter(
      (check) =>
        check.hard &&
        !check.ok
    );


  const eligible =
    hardFailures.length ===
    0;


  // ==========================================================
  // REASONS
  // ==========================================================

  const reasons =
    factors
      .filter(
        (factor) =>
          factor.matched
      )
      .map(
        (factor) =>
          factor.reason
      );


  const warnings =
    checks
      .filter(
        (check) =>
          !check.ok
      )
      .map(
        (check) =>
          check.label
      );


  // ==========================================================
  // LEVEL
  // ==========================================================

  let matchLevel =
    "Possible Match";

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
  } else {
    matchLevel =
      "Weak Match";
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
// PUBLIC MATCHING FUNCTION
// ============================================================

export function getMatchedSchemes(
  formData = {}
) {
  const evaluated =
    schemes.map(
      (scheme) =>
        evaluateScheme(
          scheme,
          formData
        )
    );


  const applicable =
    evaluated.filter(
      (scheme) =>
        scheme.applicable
    );


  return (
    applicable.length > 0
      ? applicable
      : evaluated
  ).sort(
    (a, b) =>
      b.match -
      a.match
  );
}


// ============================================================
// GET ONE SCHEME
// ============================================================

export function getSchemeById(
  id
) {
  return schemes.find(
    (scheme) =>
      scheme.id === id
  );
}


export default schemes;