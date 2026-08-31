// ============================================================
// SCHEME SAATHI
// schemes.js
//
// Verified / government-source-aligned scheme data
// + eligibility + relevance matching engine.
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
      en: "Start / expand a business",
      hi: "व्यवसाय शुरू / बढ़ाएं",
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
      en: "Agriculture / farm credit",
      hi: "कृषि / कृषि ऋण",
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
  {
    value: "education",
    label: {
      en: "Professional / technical education",
      hi: "व्यावसायिक / तकनीकी शिक्षा",
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
      en: "Livestock / poultry / dairy",
      hi: "पशुधन / पोल्ट्री / डेयरी",
    },
  },
  {
    value: "education",
    label: {
      en: "Professional / technical education",
      hi: "व्यावसायिक / तकनीकी शिक्षा",
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

// ============================================================
// ALL STATES / UTs
// ============================================================

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
// PM VISHWAKARMA — 18 OFFICIAL TRADES
// ============================================================

const VISHWAKARMA_TRADES = [
  "Carpenter",
  "Boat Maker",
  "Armourer",
  "Metal Artisan",
  "Tool Kit Maker",
  "Locksmith",
  "Goldsmith",
  "Potter",
  "Sculptor / Stone Worker",
  "Cobbler / Footwear Artisan",
  "Mason",
  "Basket / Mat / Broom Maker",
  "Toy Maker (Traditional)",
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
  // 1. NSFDC — MICRO FINANCE SCHEME
  // ==========================================================

  {
    id: "nsfdc-mfs",

    name: "NSFDC Micro Finance Scheme (MFS)",

    description:
      "Micro-credit support for eligible Scheduled Caste beneficiaries for viable small income-generating activities.",

    category: "business",

    beneficiaryCategory: "SC",

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

    incomeLimit: 500000,

    maxProjectCost: 140000,

    loanAmount:
      "Up to ₹1.25 lakh",

    interest:
      "6.5% p.a. beneficiary rate",

    repayment:
      "Up to 3 years including 3-month moratorium",

    benefits: [
      "Up to 90% of project cost can be financed under applicable NSFDC provisions.",
      "Maximum project cost: ₹1.40 lakh.",
      "Maximum loan: ₹1.25 lakh.",
      "Beneficiary interest rate: 6.5% p.a.",
    ],

    documents: [
      "Valid SC / Caste Certificate",
      "Income Certificate",
      "Aadhaar / KYC",
      "Bank Account Details",
      "Project / Activity Details",
    ],

    implementingAgency: [
      "State Channelizing Agencies (SCAs)",
      "Other authorized Channelizing Agencies (CAs)",
    ],

    officialSource:
      "National Scheduled Castes Finance and Development Corporation (NSFDC)",

    officialUrl:
      "https://nsfdc.nic.in/faqs",
  },


  // ==========================================================
  // 2. NSFDC — AAJEEVIKA MICRO-FINANCE YOJANA
  // ==========================================================

  {
    id: "nsfdc-amy",

    name: "NSFDC Aajeevika Micro-Finance Yojana (AMY)",

    description:
      "Need-based micro-finance support for eligible SC beneficiaries through selected NBFC-MFIs.",

    category: "business",

    beneficiaryCategory: "SC",

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

    incomeLimit: 500000,

    maxProjectCost: 140000,

    loanAmount:
      "Up to ₹1.25 lakh",

    interest:
      "15% p.a. beneficiary rate",

    repayment:
      "Up to 3 years including 3-month moratorium",

    benefits: [
      "Micro-finance for viable small income-generating activities.",
      "Project cost up to ₹1.40 lakh.",
      "Maximum loan up to ₹1.25 lakh.",
      "Implemented through selected NBFC-MFIs.",
    ],

    documents: [
      "Valid SC / Caste Certificate",
      "Income Certificate",
      "Aadhaar / KYC",
      "Bank Account Details",
      "Project / Activity Details",
    ],

    implementingAgency: [
      "Authorized NBFC-MFIs",
      "Other authorized Channelizing Agencies",
    ],

    officialSource:
      "National Scheduled Castes Finance and Development Corporation (NSFDC)",    officialUrl:
      "https://nsfdc.nic.in/faqs",
  },


  // ==========================================================
  // 3. PMEGP
  // ==========================================================

  {
    id: "pmegp",

    name: "Prime Minister's Employment Generation Programme (PMEGP)",

    description:
      "Credit-linked subsidy scheme for setting up new micro-enterprises in manufacturing and service sectors.",

    category: "business",

    beneficiaryCategory: "all",

    purposes: [
      "business",
    ],

    projectTypes: [
      "manufacturing",
      "service",
    ],

    occupations: [
      "business",
      "self-employed",
      "student",
      "other",
    ],

    states: "all",

    age: {
      min: 18,
      max: Infinity,
    },

    educationRequirement: {
      requiredForProjectAbove: 500000,
      minimumLevel: "8",
    },

    maxProjectCost: {
      manufacturing: 5000000,
      service: 2000000,
    },

    loanAmount:
      "Project-based bank finance with subsidy support",

    interest:
      "As per lending bank norms",

    repayment:
      "As per bank and scheme guidelines",

    benefits: [
      "Margin money subsidy support for eligible beneficiaries.",
      "Supports new micro-enterprises.",
      "Manufacturing projects can have higher project limits.",
      "Service sector projects are supported within applicable limits.",
    ],

    documents: [
      "Aadhaar / Identity Proof",
      "Project Report",
      "Educational Qualification Certificate where applicable",
      "Bank Account Details",
      "Category Certificate where applicable",
    ],

    implementingAgency: [
      "KVIC",
      "KVIB",
      "District Industries Centres",
      "Participating Banks",
    ],

    officialSource:
      "Prime Minister's Employment Generation Programme",

    officialUrl:
      "https://www.kviconline.gov.in/pmegpeportal/",
  },


  // ==========================================================
  // 4. PRADHAN MANTRI MUDRA YOJANA
  // ==========================================================

  {
    id: "mudra",

    name: "Pradhan Mantri MUDRA Yojana (PMMY)",

    description:
      "Collateral-free credit support for eligible micro and small business activities through participating lending institutions.",

    category: "business",

    beneficiaryCategory: "all",

    purposes: [
      "business",
      "artisan",
      "street-vending",
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
      "artisan",
      "street-vendor",
      "farmer",
      "student",
      "other",
    ],

    states: "all",

    age: {
      min: 18,
      max: Infinity,
    },

    loanAmount:
      "Up to applicable MUDRA category limits",

    interest:
      "As per lending institution",

    repayment:
      "As per lending institution and loan category",

    benefits: [
      "Credit support for micro-enterprises.",
      "Suitable for manufacturing, trading and service activities.",
      "Available through eligible banks and lending institutions.",
      "No fixed annual family income condition for general PMMY eligibility.",
    ],

    documents: [
      "Aadhaar / KYC",
      "PAN where required",
      "Business / Project Details",
      "Bank Account Details",
      "Other documents requested by lender",
    ],

    implementingAgency: [
      "Banks",
      "NBFCs",
      "Micro Finance Institutions",
      "Other participating lenders",
    ],

    officialSource:
      "Pradhan Mantri MUDRA Yojana",

    officialUrl:
      "https://www.mudra.org.in/",
  },


  // ==========================================================
  // 5. PM SVANIDHI
  // ==========================================================

  {
    id: "pm-svanidhi",

    name: "PM SVANidhi",

    description:
      "Working capital loan support for eligible street vendors.",

    category: "street-vending",

    beneficiaryCategory: "all",

    purposes: [
      "street-vending",
      "business",
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

    loanAmount:
      "Working capital loan as per current PM SVANidhi guidelines",

    interest:
      "As per scheme and lending guidelines",

    repayment:
      "As per applicable loan cycle",

    benefits: [
      "Working capital support for eligible street vendors.",
      "Encourages timely repayment.",
      "Supports digital transactions under applicable scheme provisions.",
    ],

    documents: [
      "Street Vendor Certificate / Identity where applicable",
      "Aadhaar / KYC",
      "Bank Account Details",
      "Local body verification documents where applicable",
    ],

    implementingAgency: [
      "Urban Local Bodies",
      "Participating Lending Institutions",
    ],

    officialSource:
      "PM SVANidhi",

    officialUrl:
      "https://pmsvanidhi.mohua.gov.in/",
  },


  // ==========================================================
  // 6. PM VISHWAKARMA
  // ==========================================================

  {
    id: "pm-vishwakarma",

    name: "PM Vishwakarma",

    description:
      "Support for eligible traditional artisans and craftspeople engaged in notified trades.",

    category: "artisan",

    beneficiaryCategory: "all",

    purposes: [
      "artisan",
      "business",
    ],

    projectTypes: [
      "manufacturing",
      "service",
      "trading",
    ],

    occupations: [
      "artisan",
      "self-employed",
    ],

    states: "all",

    age: {
      min: 18,
      max: Infinity,
    },

    requiredTrade:
      VISHWAKARMA_TRADES,

    loanAmount:
      "Collateral-free enterprise development loans as per scheme guidelines",

    interest:
      "Concessional interest as per scheme provisions",

    repayment:
      "As per applicable PM Vishwakarma guidelines",

    benefits: [
      "Recognition and support for eligible traditional artisans.",
      "Skill upgradation opportunities.",
      "Toolkit incentive where applicable.",
      "Credit support for enterprise development.",
      "Marketing and other support as per scheme guidelines.",
    ],

    documents: [
      "Aadhaar",
      "Identity / Residence Details",
      "Trade / occupation verification where required",
      "Bank Account Details",
    ],

    implementingAgency: [
      "Ministry of MSME",
      "Common Service Centres",
      "Authorized implementing agencies",
    ],

    officialSource:
      "PM Vishwakarma",

    officialUrl:
      "https://pmvishwakarma.gov.in/",
  },


  // ==========================================================
  // 7. KISAN CREDIT CARD
  // ==========================================================

  {
    id: "kisan-credit-card",

    name: "Kisan Credit Card (KCC)",

    description:
      "Credit support for eligible farmers for agriculture and allied activities.",

    category: "agriculture",

    beneficiaryCategory: "all",

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

    loanAmount:
      "Based on scale of finance and applicable bank assessment",

    interest:
      "As per applicable KCC and bank guidelines",

    repayment:
      "Based on crop cycle / bank guidelines",

    benefits: [
      "Short-term credit support for eligible agricultural activities.",
      "Can support allied activities under applicable guidelines.",
      "Credit limit depends on bank assessment and scale of finance.",
    ],

    documents: [
      "Aadhaar / KYC",
      "Land / cultivation documents where applicable",
      "Bank Account Details",
      "Agricultural activity details",
    ],

    implementingAgency: [
      "Banks",
      "Cooperative Banks",
      "Regional Rural Banks",
    ],

    officialSource:
      "Kisan Credit Card",

    officialUrl:
      "https://pmkisan.gov.in/",
  },


  // ==========================================================
  // 8. PM-KUSUM
  // ==========================================================

  {
    id: "pm-kusum",

    name: "PM-KUSUM",

    description:
      "Support framework for solar pumps and decentralized solar energy applications for eligible beneficiaries under applicable components.",

    category: "solar",

    beneficiaryCategory: "all",

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
      "self-employed",
    ],

    states: "all",

    age: {
      min: 18,
      max: Infinity,
    },

    loanAmount:
      "Depends on component, state implementation and beneficiary eligibility",

    interest:
      "Depends on financing arrangement",

    repayment:
      "Depends on financing arrangement",

    benefits: [
      "Support for eligible solar agriculture applications.",
      "May include solar pumps or decentralized solar generation depending on applicable component.",
      "Implementation and subsidy structure can vary by component and state.",
    ],

    documents: [
      "Aadhaar / KYC",
      "Land / agricultural documents where applicable",
      "Bank Details",
      "State-specific documents",
    ],

    implementingAgency: [
      "State Nodal Agencies",
      "DISCOMs",
      "Other authorized agencies",
    ],

    officialSource:
      "PM-KUSUM",

    officialUrl:
      "https://pmkusum.mnre.gov.in/",
  },


  // ==========================================================
  // 9. NATIONAL LIVESTOCK MISSION
  // ==========================================================

  {
    id: "national-livestock-mission",

    name: "National Livestock Mission (NLM)",

    description:
      "Support for eligible livestock and allied sector activities under applicable mission components.",

    category: "livestock",

    beneficiaryCategory: "all",

    purposes: [
      "livestock",
      "agriculture",
      "business",
    ],

    projectTypes: [
      "livestock",
      "agriculture",
    ],

    occupations: [
      "farmer",
      "self-employed",
      "business",
      "other",
    ],

    states: "all",

    age: {
      min: 18,
      max: Infinity,
    },

    loanAmount:
      "Project and component dependent",

    interest:
      "Depends on bank and applicable financing structure",

    repayment:
      "As per financing and component guidelines",

    benefits: [
      "Supports eligible livestock development activities.",
      "Assistance depends on selected component and current implementation guidelines.",
      "Suitable for eligible poultry, sheep, goat and other livestock-related projects where applicable.",
    ],

    documents: [
      "Aadhaar / KYC",
      "Project Report",
      "Land / infrastructure documents where required",
      "Bank Account Details",
      "Other component-specific documents",
    ],

    implementingAgency: [
      "Department of Animal Husbandry and Dairying",
      "State Animal Husbandry Departments",
      "Authorized implementing agencies",
    ],

    officialSource:
      "National Livestock Mission",

    officialUrl:
      "https://nlm.udyamimitra.in/",
  },


  // ==========================================================
  // 10. STAND-UP INDIA
  // ==========================================================

  {
    id: "stand-up-india",

    name: "Stand-Up India",

    description:
      "Bank loan support for eligible SC/ST and women entrepreneurs for setting up greenfield enterprises.",

    category: "business",

    beneficiaryCategory: [
      "SC",
      "ST",
      "Women",
    ],

    purposes: [
      "business",
    ],

    projectTypes: [
      "manufacturing",
      "service",
      "trading",
      "agriculture",
    ],

    occupations: [
      "business",
      "self-employed",
      "student",
      "other",
    ],

    states: "all",

    age: {
      min: 18,
      max: Infinity,
    },

    minProjectCost: 1000000,

    maxProjectCost: 10000000,

    loanAmount:
      "₹10 lakh to ₹1 crore for eligible greenfield enterprises",

    interest:
      "As per Stand-Up India and lending bank guidelines",

    repayment:
      "As per bank guidelines",

    benefits: [
      "Supports eligible SC/ST and women entrepreneurs.",
      "For greenfield enterprises in eligible sectors.",
      "Loan range generally starts from ₹10 lakh.",
    ],

    documents: [
      "Aadhaar / KYC",
      "Category Certificate where applicable",
      "Project Report",
      "Bank Account Details",
      "Business and financial documents requested by bank",
    ],

    implementingAgency: [
      "Scheduled Commercial Banks",
      "Stand-Up India ecosystem",
    ],

    officialSource:
      "Stand-Up India",

    officialUrl:
      "https://www.standupmitra.in/",
  },

];


// ============================================================
// MATCHING ENGINE HELPERS
// ============================================================

function getEducationRank(level) {

  const normalized =
    normalize(level);

  const found =
    EDUCATION_LEVELS.find(
      (item) =>
        normalize(item.value) ===
        normalized
    );

  return found
    ? found.rank
    : 0;

}


function valueMatches(
  userValue,
  allowedValues
) {

  if (
    allowedValues === undefined ||
    allowedValues === null ||
    allowedValues === "all"
  ) {

    return true;

  }


  if (
    !Array.isArray(
      allowedValues
    )
  ) {

    return (
      normalize(userValue) ===
      normalize(allowedValues)
    );

  }


  return allowedValues.some(
    (value) =>
      normalize(value) ===
      normalize(userValue)
  );

}


// ============================================================
// ADD CHECK
// ============================================================

function createCheck({
  key,
  en,
  hi,
  ok,
  hard = false,
}) {

  return {
    key,
    en,
    hi,
    ok:
      Boolean(ok),
    hard:
      Boolean(hard),
  };

}


// ============================================================
// EVALUATE A SINGLE SCHEME
// ============================================================

function evaluateScheme(
  scheme,
  formData = {}
) {

  const checks = [];

  const factors = [];


  const addCheck = ({
    key,
    en,
    hi,
    ok,
    hard = false,
  }) => {

    checks.push(
      createCheck({
        key,
        en,
        hi,
        ok,
        hard,
      })
    );

  };


  // ==========================================================
  // USER DATA
  // ==========================================================

  const age =
    numberValue(
      formData.age
    );

  const income =
    numberValue(
      formData.income
    );

  const projectCost =
    numberValue(
      formData.projectCost
    );

  const category =
    formData.category ||
    "";

  const occupation =
    formData.occupation ||
    "";

  const purpose =
    formData.purpose ||
    "";

  const projectType =
    formData.projectType ||
    "";

  const state =
    formData.state ||
    "";

  const education =
    formData.education ||
    "";

  const gender =
    formData.gender ||
    "";

  const trade =
    formData.trade ||
    formData.businessType ||
    "";


  // ==========================================================
  // AGE
  //
  // Age remains a hard condition when explicitly specified.
  // ==========================================================

  if (
    scheme.age &&
    age > 0
  ) {

    const minAge =
      scheme.age.min ??
      0;

    const maxAge =
      scheme.age.max ??
      Infinity;

    const ageOK =
      age >= minAge &&
      age <= maxAge;


    addCheck({

      key: "age",

      en:
        `Age requirement: ${minAge}+ years.`,

      hi:
        `आयु आवश्यकता: ${minAge}+ वर्ष।`,

      ok:
        ageOK,

      hard:
        true,

    });


    factors.push({

      points: 15,

      matched:
        ageOK,

      reason: {

        en:
          "Your age fits this scheme.",

        hi:
          "आपकी आयु इस योजना के लिए उपयुक्त है।",

      },

    });

  }


  // ==========================================================
  // CATEGORY
  //
  // Explicit beneficiary category remains a hard requirement.
  // ==========================================================

  if (
    scheme.beneficiaryCategory &&
    scheme.beneficiaryCategory !== "all"
  ) {

    let categoryOK =
      false;


    if (
      Array.isArray(
        scheme.beneficiaryCategory
      )
    ) {

      categoryOK =
        scheme.beneficiaryCategory.some(
          (allowed) =>
            normalize(allowed) ===
            normalize(category)
        );

    } else {

      categoryOK =
        normalize(category) ===
        normalize(
          scheme.beneficiaryCategory
        );

    }


    // Women category can also match gender
    if (
      !categoryOK &&
      Array.isArray(
        scheme.beneficiaryCategory
      ) &&
      scheme.beneficiaryCategory.some(
        (item) =>
          normalize(item) === "women"
      )
    ) {

      categoryOK =
        normalize(gender) === "female" ||
        normalize(gender) === "woman";

    }


    addCheck({

      key: "category",

      en:
        "Your beneficiary category matches the scheme.",

      hi:
        "आपकी श्रेणी योजना की पात्र श्रेणी से मेल खाती है।",

      ok:
        categoryOK,

      hard:
        true,

    });


    factors.push({

      points: 20,

      matched:
        categoryOK,

      reason: {

        en:
          "Your category is relevant for this scheme.",

        hi:
          "आपकी श्रेणी इस योजना के लिए प्रासंगिक है।",

      },

    });

  }


  // ==========================================================
  // PURPOSE
  //
  // Flexible recommendation condition.
  // ==========================================================

  if (
    scheme.purposes &&
    purpose
  ) {

    const purposeOK =
      valueMatches(
        purpose,
        scheme.purposes
      );


    addCheck({

      key: "purpose",

      en:
        "Your selected purpose is relevant to this scheme.",

      hi:
        "आपका चयनित उद्देश्य इस योजना के लिए प्रासंगिक है।",

      ok:
        purposeOK,

      hard:
        false,

    });


    factors.push({

      points: 15,

      matched:
        purposeOK,

      reason: {

        en:
          "Your purpose matches this scheme.",

        hi:
          "आपका उद्देश्य इस योजना से मेल खाता है।",

      },

    });

  }


  // ==========================================================
  // PROJECT TYPE
  //
  // Flexible recommendation condition.
  // ==========================================================

  if (
    scheme.projectTypes &&
    projectType
  ) {

    const projectTypeOK =
      valueMatches(
        projectType,
        scheme.projectTypes
      );


    addCheck({

      key: "project-type",

      en:
        "The selected project type is supported by this scheme.",

      hi:
        "चुना गया परियोजना प्रकार इस योजना में समर्थित है।",

      ok:
        projectTypeOK,

      hard:
        false,

    });


    factors.push({

      points: 15,

      matched:
        projectTypeOK,

      reason: {

        en:
          "Your project type is relevant to this scheme.",

        hi:
          "आपका परियोजना प्रकार इस योजना के लिए प्रासंगिक है।",

      },

    });

  }


  // ==========================================================
  // OCCUPATION
  //
  // Flexible recommendation condition.
  // ==========================================================

  if (
    scheme.occupations &&
    occupation
  ) {

    const occupationOK =
      valueMatches(
        occupation,
        scheme.occupations
      );


    addCheck({

      key: "occupation",

      en:
        "Your occupation matches the scheme beneficiary profile.",

      hi:
        "आपका व्यवसाय योजना की लाभार्थी प्रोफ़ाइल से मेल खाता है।",

      ok:
        occupationOK,

      hard:
        false,

    });


    factors.push({

      points: 10,

      matched:
        occupationOK,

      reason: {

        en:
          "Your occupation is relevant to this scheme.",

        hi:
          "आपका व्यवसाय इस योजना के लिए प्रासंगिक है।",

      },

    });

  }


  // ==========================================================
  // STATE
  //
  // Flexible because availability may depend on implementation.
  // ==========================================================

  if (
    scheme.states &&
    state &&
    scheme.states !== "all"
  ) {

    const stateOK =
      valueMatches(
        state,
        scheme.states
      );


    addCheck({

      key: "state",

      en:
        "The scheme is available for the selected location.",

      hi:
        "योजना चयनित स्थान के लिए उपलब्ध है।",

      ok:
        stateOK,

      hard:
        false,

    });


    factors.push({

      points: 10,

      matched:
        stateOK,

      reason: {

        en:
          "Your location matches this scheme.",

        hi:
          "आपका स्थान इस योजना से मेल खाता है।",

      },

    });

  }


  // ==========================================================
  // INCOME
  //
  // IMPORTANT:
  // Income is flexible and is NOT a universal rejection.
  // ==========================================================

  if (
    scheme.incomeLimit !== undefined &&
    scheme.incomeLimit !== null &&
    income > 0
  ) {

    const incomeOK =
      income <=
      scheme.incomeLimit;


    addCheck({

      key: "income",

      en:
        `Declared family income is within the listed scheme income criterion.`,

      hi:
        "घोषित पारिवारिक आय योजना की सूचीबद्ध आय सीमा के अंतर्गत है।",

      ok:
        incomeOK,

      hard:
        false,

    });


    factors.push({

      points: 10,

      matched:
        incomeOK,

      reason: {

        en:
          "Your income profile fits this scheme's listed criterion.",

        hi:
          "आपकी आय प्रोफ़ाइल इस योजना के सूचीबद्ध मानदंड से मेल खाती है।",

      },

    });

  }


  // ==========================================================
  // PROJECT COST
  //
  // Flexible recommendation condition.
  // ==========================================================

  if (
    projectCost > 0 &&
    (
      scheme.minProjectCost !== undefined ||
      scheme.maxProjectCost !== undefined
    )
  ) {

    let costOK =
      true;


    if (
      typeof scheme.maxProjectCost ===
      "object"
    ) {

      const projectTypeLimit =
        scheme.maxProjectCost[
          projectType
        ];


      if (
        projectTypeLimit
      ) {

        costOK =
          projectCost <=
          projectTypeLimit;

      }

    } else {

      if (
        scheme.minProjectCost !== undefined &&
        projectCost <
          scheme.minProjectCost
      ) {

        costOK =
          false;

      }


      if (
        scheme.maxProjectCost !== undefined &&
        projectCost >
          scheme.maxProjectCost
      ) {

        costOK =
          false;

      }

    }


    addCheck({

      key: "project-cost",

      en:
        "Project cost is within the listed scheme range.",

      hi:
        "परियोजना लागत योजना की सूचीबद्ध सीमा में है।",

      ok:
        costOK,

      hard:
        false,

    });


    factors.push({

      points: 10,

      matched:
        costOK,

      reason: {

        en:
          "Your project cost fits the listed scheme range.",

        hi:
          "आपकी परियोजना लागत योजना की सूचीबद्ध सीमा से मेल खाती है।",

      },

    });

  }


  // ==========================================================
  // EDUCATION
  //
  // Flexible recommendation / verification condition.
  // ==========================================================

  if (
    scheme.educationRequirement &&
    education
  ) {

    const requirement =
      scheme.educationRequirement;

    let educationOK =
      true;


    if (
      requirement.minimumLevel
    ) {

      const userRank =
        getEducationRank(
          education
        );

      const requiredRank =
        getEducationRank(
          requirement.minimumLevel
        );


      if (
        projectCost >
          (requirement.requiredForProjectAbove ?? Infinity)
      ) {

        educationOK =
          userRank >=
          requiredRank;

      }

    }


    addCheck({

      key: "education",

      en:
        "Education requirement should be verified for the selected project.",

      hi:
        "चयनित परियोजना के लिए शिक्षा आवश्यकता सत्यापित की जानी चाहिए।",

      ok:
        educationOK,

      hard:
        false,

    });


    factors.push({

      points: 5,

      matched:
        educationOK,

      reason: {

        en:
          "Your education level is relevant to this scheme.",

        hi:
          "आपकी शिक्षा स्तर इस योजना के लिए प्रासंगिक है।",

      },

    });

  }


  // ==========================================================
  // PM VISHWAKARMA TRADE CHECK
  //
  // Flexible recommendation condition.
  // ==========================================================

  if (
    scheme.requiredTrade &&
    trade
  ) {

    const tradeOK =
      scheme.requiredTrade.some(
        (allowedTrade) =>
          normalize(
            allowedTrade
          ) ===
          normalize(
            trade
          )
      );


    addCheck({

      key: "trade",

      en:
        "Your selected trade matches a supported traditional trade.",

      hi:
        "आपका चयनित व्यवसाय समर्थित पारंपरिक व्यवसाय से मेल खाता है।",

      ok:
        tradeOK,

      hard:
        false,

    });


    factors.push({

      points: 15,

      matched:
        tradeOK,

      reason: {

        en:
          "Your trade is relevant to this scheme.",

        hi:
          "आपका व्यवसाय इस योजना के लिए प्रासंगिक है।",

      },

    });

  }


  // ==========================================================
  // CALCULATE HARD ELIGIBILITY
  // ==========================================================

  const hardChecks =
    checks.filter(
      (check) =>
        check.hard
    );


  const eligible =
    hardChecks.every(
      (check) =>
        check.ok
    );


  // ==========================================================
  // CALCULATE MATCH SCORE
  // ==========================================================

  const totalPoints =
    factors.reduce(
      (total, factor) =>
        total +
        factor.points,
      0
    );


  const earnedPoints =
    factors.reduce(
      (total, factor) =>

        factor.matched

          ? total +
            factor.points

          : total,

      0
    );


  let match =

    totalPoints > 0

      ? Math.round(
          (
            earnedPoints /
            totalPoints
          ) * 100
        )

      : 50;


  // Keep score in valid range
  match =
    Math.max(
      0,
      Math.min(
        100,
        match
      )
    );


  // ==========================================================
  // DETERMINE RECOMMENDATION LEVEL
  // ==========================================================

  let recommendationLevel;


  if (
    eligible &&
    match >= 70
  ) {

    recommendationLevel =
      "Highly Recommended";

  }

  else if (
    eligible
  ) {

    recommendationLevel =
      "Recommended";

  }

  else if (
    match >= 40
  ) {

    recommendationLevel =
      "Possible Match";

  }

  else {

    recommendationLevel =
      "Explore & Verify";

  }


  // ==========================================================
  // REASONS
  // ==========================================================

  const matchedReasons =
    factors
      .filter(
        (factor) =>
          factor.matched
      )
      .map(
        (factor) =>
          factor.reason
      );


  const failedChecks =
    checks.filter(
      (check) =>
        !check.ok
    );


  return {

    ...scheme,

    eligible,

    applicable:
      true,

    match,

    recommendationLevel,

    checks,

    matchedReasons,

    failedChecks,

  };

}


// ============================================================
// GET MATCHED SCHEMES
//
// IMPORTANT:
// This is a recommendation system.
//
// Schemes are NOT removed simply because a flexible condition
// such as income, project cost, occupation, purpose or project
// type does not match.
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


  const results =
    evaluated.map(
      (scheme) => ({

        ...scheme,

        applicable:
          true,

      })
    );


  // ==========================================================
  // SORTING
  //
  // Priority:
  //
  // 1. Fully eligible schemes
  // 2. Higher match percentage
  // ==========================================================

  return results.sort(
    (a, b) => {

      if (
        a.eligible &&
        !b.eligible
      ) {

        return -1;

      }


      if (
        !a.eligible &&
        b.eligible
      ) {

        return 1;

      }


      return (
        b.match -
        a.match
      );

    }
  );

}


// ============================================================
// GET A SINGLE SCHEME
// ============================================================

export function getSchemeById(
  id
) {

  return schemes.find(
    (scheme) =>
      scheme.id === id
  );

}


// ============================================================
// DEFAULT EXPORT
// ============================================================

export default schemes;

// ============================================================
// BACKWARD COMPATIBILITY EXPORT
// ============================================================

export const SCHEME_OPTIONS_BY_PURPOSE = PURPOSE_OPTIONS;
