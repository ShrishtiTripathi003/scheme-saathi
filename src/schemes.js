/* ============================================================
   SCHEME DATA
   Scheme Saathi — MVP verified against official sources
   ============================================================ */

export const districts = {
  "Uttar Pradesh": [
    "Agra", "Aligarh", "Ayodhya", "Azamgarh", "Bareilly",
    "Ghaziabad", "Gorakhpur", "Kanpur Nagar", "Lucknow",
    "Prayagraj", "Sitapur", "Varanasi"
  ],
  Maharashtra: [
    "Ahmednagar", "Akola", "Amravati", "Aurangabad",
    "Mumbai City", "Mumbai Suburban", "Nagpur", "Nashik",
    "Pune", "Thane"
  ],
  Bihar: [
    "Araria", "Arwal", "Aurangabad", "Bhagalpur",
    "Darbhanga", "Gaya", "Muzaffarpur", "Patna",
    "Purnia", "Vaishali"
  ],
  Rajasthan: [
    "Ajmer", "Alwar", "Bharatpur", "Bikaner",
    "Jaipur", "Jaisalmer", "Jodhpur", "Kota", "Udaipur"
  ],
  "Madhya Pradesh": [
    "Bhopal", "Indore", "Jabalpur", "Gwalior",
    "Ujjain", "Sagar", "Rewa"
  ],
  Delhi: [
    "Central Delhi", "East Delhi", "New Delhi",
    "North Delhi", "North East Delhi", "North West Delhi",
    "Shahdara", "South Delhi", "South East Delhi",
    "South West Delhi", "West Delhi"
  ],
};

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

/* ============================================================
   SCHEMES
   ============================================================ */

export const schemes = [

  /* ----------------------------------------------------------
     CM YUVA
     ---------------------------------------------------------- */
  {
    id: "cm-yuva",
    name: "Mukhyamantri Yuva Udyami Vikas Abhiyan (CM-YUVA)",

    purpose: "business",

    age: {
      min: 21,
      max: 40,
    },

    educationMin: 8,

    state: ["Uttar Pradesh"],

    occupations: [
      "business",
      "self-employed",
    ],

    projectTypes: [
      "business",
      "service",
      "manufacturing",
    ],

    maxProjectCost: 500000,

    benefits: [
      "Phase 1 assistance through loans up to ₹5 lakh",
      "100% interest subsidy for four years in Phase 1",
      "Phase 2 loans from ₹10 lakh to ₹20 lakh with 50% interest subsidy for three years",
      "Entrepreneurship guidance and handholding",
    ],

    maxLoan: "Up to ₹5 lakh in Phase 1",
    interest: "100% interest subsidy for 4 years in Phase 1",
    repayment: "As per approved bank loan",

    documents: [
      "Identity proof",
      "Age proof",
      "Education certificate",
      "Project report",
      "Bank account details",
      "UP residence proof",
      "Other documents as required",
    ],

    partners: [
      "Directorate of Industries / UPMSME",
      "District Industries Centre (DIC)",
      "Participating Bank",
    ],

    sourceName: "UP MSME / UP RAMP",
    sourceUrl:
      "https://msme1connect.up.gov.in/scheme-list/mukhyamantri-yuva-udyami-vikas-abhiyan",

    specialRules: {
      needsUpResidence: true,
    },
  },

  /* ----------------------------------------------------------
     PMEGP
     ---------------------------------------------------------- */
  {
    id: "pmegp",
    name: "Prime Minister's Employment Generation Programme (PMEGP)",

    purpose: "business",

    age: {
      min: 18,
      max: Infinity,
    },

    educationMin: 0,

    state: ["All India"],

    occupations: [
      "business",
      "self-employed",
    ],

    projectTypes: [
      "service",
      "manufacturing",
    ],

    projectLimits: {
      manufacturing: 5000000,
      service: 2000000,
    },

    benefits: [
      "Credit-linked margin money subsidy",
      "Supports new micro enterprises",
      "Subsidy varies by beneficiary category and project location",
      "Supports manufacturing and business/service projects",
    ],

    maxLoan: "Project limit: ₹50 lakh manufacturing / ₹20 lakh service",
    interest: "Bank applicable",
    repayment: "As per bank loan terms",

    documents: [
      "Aadhaar Card",
      "PAN Card",
      "Bank account details",
      "Project report",
      "Education certificate where applicable",
      "Category certificate where applicable",
    ],

    partners: [
      "KVIC",
      "KVIB",
      "District Industries Centre (DIC)",
      "Participating Bank",
    ],

    sourceName: "KVIC / Ministry of MSME",
    sourceUrl:
      "https://www.kviconline.gov.in/pmegpeportal/dashboard/notification/Revised_PMEGP_Scheme_Guidelines_07122023_compressed.pdf",

    specialRules: {
      requiresProjectType: true,
    },
  },

  /* ----------------------------------------------------------
     MUDRA
     ---------------------------------------------------------- */
  {
    id: "mudra",
    name: "Pradhan Mantri MUDRA Yojana (PMMY)",

    purpose: "business",

    age: {
      min: 18,
      max: Infinity,
    },

    educationMin: 0,

    state: ["All India"],

    occupations: [
      "business",
      "self-employed",
      "poultry",
      "dairy",
      "beekeeping",
    ],

    projectLimits: {
      default: 2000000,
    },

    benefits: [
      "Collateral-free institutional credit for eligible micro enterprises",
      "Shishu: up to ₹50,000",
      "Kishore: above ₹50,000 up to ₹5 lakh",
      "Tarun: above ₹5 lakh up to ₹10 lakh",
      "Tarun Plus: above ₹10 lakh up to ₹20 lakh for eligible previous Tarun borrowers",
    ],

    maxLoan: "Up to ₹20 lakh for eligible Tarun Plus borrowers",
    interest: "Lender applicable",
    repayment: "As per lender",

    documents: [
      "Aadhaar Card",
      "PAN Card",
      "Bank account details",
      "KYC documents",
      "Business / activity details",
    ],

    partners: [
      "Public Sector Banks",
      "Private Sector Banks",
      "Regional Rural Banks",
      "Small Finance Banks",
      "NBFCs",
      "MFIs",
    ],

    sourceName: "Department of Financial Services",
    sourceUrl:
      "https://financialservices.gov.in/pradhan-mantri-mudra-yojana-pmmy",

    specialRules: {
      needsIncomeGeneratingActivity: true,
    },
  },

  /* ----------------------------------------------------------
     PM SVANIDHI
     ---------------------------------------------------------- */
  {
    id: "svanidhi",
    name: "PM Street Vendor's AtmaNirbhar Nidhi (PM SVANidhi)",

    purpose: "street-vending",

    age: {
      min: 18,
      max: Infinity,
    },

    educationMin: 0,

    state: ["All India"],

    occupations: ["street-vendor"],

    projectLimits: {
      default: 50000,
    },

    benefits: [
      "Working capital loan up to ₹10,000 initially",
      "Higher loan tranche after successful repayment",
      "Loans up to ₹50,000 under the applicable tranches",
      "7% interest subsidy for regular repayment",
      "Digital transaction incentives",
    ],

    maxLoan: "Up to ₹50,000 under applicable tranches",
    interest: "7% interest subsidy",
    repayment: "As per loan terms",

    documents: [
      "Aadhaar / KYC",
      "Certificate of Vending or vending ID where applicable",
      "Letter of Recommendation where applicable",
      "Bank account details",
    ],

    partners: [
      "Urban Local Body (ULB)",
      "Town Vending Committee",
      "Participating Bank / Lending Institution",
    ],

    sourceName: "Ministry of Housing & Urban Affairs",
    sourceUrl:
      "https://www.mohua.gov.in/pm_svandhi/PMSVANidhi%20Guideline_English.pdf",

    specialRules: {
      needsStreetVendor: true,
    },
  },

  /* ----------------------------------------------------------
     PM VISHWAKARMA
     ---------------------------------------------------------- */
  {
    id: "vishwakarma",
    name: "PM Vishwakarma",

    purpose: "artisan",

    age: {
      min: 18,
      max: Infinity,
    },

    educationMin: 0,

    state: ["All India"],

    occupations: [
      "artisan",
      "carpenter",
      "boat-maker",
      "blacksmith",
      "tool-maker",
      "locksmith",
      "goldsmith",
      "potter",
      "sculptor",
      "stone-worker",
      "cobbler",
      "mason",
      "basket-maker",
      "toy-maker",
      "barber",
      "garland-maker",
      "washerman",
      "tailor",
      "fishing-net-maker",
    ],

    projectLimits: {
      default: 300000,
    },

    benefits: [
      "PM Vishwakarma Certificate and ID Card",
      "Basic and advanced skill training",
      "₹500 per day training stipend",
      "Toolkit incentive up to ₹15,000",
      "Collateral-free enterprise development loan up to ₹3 lakh",
      "Concessional interest rate of 5%",
      "Digital transaction incentives",
      "Marketing support",
    ],

    maxLoan: "Up to ₹3 lakh",
    interest: "5%",
    repayment: "As per applicable loan tranche",

    documents: [
      "Aadhaar Card",
      "Mobile number",
      "Bank account details",
      "Artisan / trade verification",
      "PM Vishwakarma registration",
    ],

    partners: [
      "Common Service Centre (CSC)",
      "Gram Panchayat / ULB",
      "District Implementation Committee",
      "Participating Bank",
    ],

    sourceName: "Ministry of MSME",
    sourceUrl:
      "https://www.pmvishwakarma.gov.in/",

    specialRules: {
      needsArtisanTrade: true,
    },
  },

  /* ----------------------------------------------------------
     PM KISAN
     ---------------------------------------------------------- */
  {
    id: "pm-kisan",
    name: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",

    purpose: "agriculture",

    age: {
      min: 18,
      max: Infinity,
    },

    educationMin: 0,

    state: ["All India"],

    occupations: ["farmer"],

    benefits: [
      "Income support for eligible landholding farmer families",
      "₹6,000 per year through DBT, subject to scheme conditions",
      "State / UT authorities identify eligible beneficiaries",
    ],

    maxLoan: "Not a loan scheme",
    interest: "Not applicable",
    repayment: "Not applicable",

    documents: [
      "Aadhaar",
      "Land / cultivable land records",
      "Bank account details",
      "State / UT required documents",
    ],

    partners: [
      "State / UT Agriculture Department",
      "Local Revenue / Land Records Authorities",
      "Bank",
    ],

    sourceName: "PM-KISAN",
    sourceUrl:
      "https://pmkisan.gov.in/",

    specialRules: {
      requiresLandholding: true,
    },
  },

  /* ----------------------------------------------------------
     KCC
     ---------------------------------------------------------- */
  {
    id: "kcc",
    name: "Kisan Credit Card (KCC)",

    purpose: "agriculture",

    age: {
      min: 18,
      max: Infinity,
    },

    educationMin: 0,

    state: ["All India"],

    occupations: ["farmer"],

    projectLimits: {
      default: 300000,
    },

    benefits: [
      "Credit support for cultivation",
      "Post-harvest expenses",
      "Working capital for farm assets",
      "Agriculture allied activities",
      "Animal husbandry and fisheries working capital",
    ],

    maxLoan: "Up to applicable credit limit",
    interest: "As per applicable government / bank provisions",
    repayment: "As per bank terms",

    documents: [
      "Aadhaar / KYC",
      "Land / cultivation documents where applicable",
      "Bank account details",
      "Farmer / activity details",
    ],

    partners: [
      "Public Sector Bank",
      "Regional Rural Bank",
      "Cooperative Bank",
      "Other eligible lending institution",
    ],

    sourceName: "Department of Financial Services",
    sourceUrl:
      "https://www.financialservices.gov.in/agriculture-credit",
  },

  /* ----------------------------------------------------------
     POST MATRIC SC
     ---------------------------------------------------------- */
  {
    id: "pms-sc",
    name: "Post-Matric Scholarship for SC Students",

    purpose: "education",

    age: {
      min: 0,
      max: Infinity,
    },

    educationMin: 10,

    state: ["All India"],

    categories: ["SC"],

    occupations: ["student"],

    incomeLimit: 250000,

    benefits: [
      "Financial assistance for eligible post-matric education",
      "Support for eligible SC students studying in India",
    ],

    maxLoan: "Not a loan scheme",
    interest: "Not applicable",
    repayment: "Not applicable",

    documents: [
      "Aadhaar",
      "Caste certificate",
      "Income certificate",
      "Previous academic certificate",
      "Admission / institution details",
      "Bank account details",
    ],

    partners: [
      "State / UT Scholarship Department",
      "District Social Welfare Office",
      "National Scholarship Portal",
    ],

    sourceName: "Department of Social Justice & Empowerment",
    sourceUrl:
      "https://socialjustice.gov.in/schemes/25",

    specialRules: {
      requiresStudent: true,
    },
  },

  /* ----------------------------------------------------------
     PM USP CSSS
     ---------------------------------------------------------- */
  {
    id: "pm-usp-csss",
    name: "PM-USP Central Sector Scheme of Scholarship",

    purpose: "education",

    age: {
      min: 0,
      max: Infinity,
    },

    educationMin: 12,

    state: ["All India"],

    occupations: ["student"],

    incomeLimit: 450000,

    benefits: [
      "Merit-cum-means scholarship",
      "Financial assistance for college and university students",
      "Scholarship support for educational expenses",
    ],

    maxLoan: "Not a loan scheme",
    interest: "Not applicable",
    repayment: "Not applicable",

    documents: [
      "Class XII certificate / marks",
      "Income certificate",
      "Aadhaar",
      "Bank account details",
      "Institution details",
    ],

    partners: [
      "National Scholarship Portal",
      "Department of Higher Education",
      "Participating Educational Institution",
    ],

    sourceName: "Ministry of Education",
    sourceUrl:
      "https://www.education.gov.in/sites/upload_files/mhrd/files/upload_document/FAQs_PM_USP_CSSS_scheme_AY_2025_26.pdf",

    specialRules: {
      requiresStudent: true,
      requires80Percentile: true,
    },
  },

  /* ----------------------------------------------------------
     PRE MATRIC SC
     ---------------------------------------------------------- */
  {
    id: "prematric-sc",
    name: "Pre-Matric Scholarship for SC Students",

    purpose: "education",

    age: {
      min: 0,
      max: Infinity,
    },

    educationMin: 8,

    state: ["All India"],

    categories: ["SC"],

    occupations: ["student"],

    benefits: [
      "Educational support for eligible SC students",
      "Implemented through State Governments and UT administrations",
    ],

    maxLoan: "Not a loan scheme",
    interest: "Not applicable",
    repayment: "Not applicable",

    documents: [
      "Aadhaar",
      "Caste certificate",
      "School certificate",
      "Bank account details",
      "Income / other documents as required",
    ],

    partners: [
      "State / UT Government",
      "District Social Welfare Department",
      "School / Institution",
    ],

    sourceName: "Department of Social Justice & Empowerment",
    sourceUrl:
      "https://socialjustice.gov.in/schemes/23",

    specialRules: {
      requiresStudent: true,
    },
  },
];

/* ============================================================
   EDUCATION
   ============================================================ */

export const EDUCATION_LEVELS = [
  {
    value: "0",
    label: {
      en: "Below 8th standard",
      hi: "8वीं से कम",
    },
  },
  {
    value: "8",
    label: {
      en: "8th pass",
      hi: "8वीं पास",
    },
  },
  {
    value: "10",
    label: {
      en: "10th pass",
      hi: "10वीं पास",
    },
  },
  {
    value: "12",
    label: {
      en: "12th pass",
      hi: "12वीं पास",
    },
  },
  {
    value: "15",
    label: {
      en: "Graduate or above",
      hi: "स्नातक या उच्चतर",
    },
  },
];

/* ============================================================
   FORM OPTIONS
   ============================================================ */

export const CATEGORY_OPTIONS = [
  "General",
  "OBC",
  "SC",
  "ST",
  "EWS",
  "Other",
];

export const PROJECT_TYPE_OPTIONS = [
  {
    value: "service",
    label: {
      en: "Service / business",
      hi: "सेवा / व्यवसाय",
    },
  },
  {
    value: "manufacturing",
    label: {
      en: "Manufacturing",
      hi: "विनिर्माण",
    },
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
      en: "Artisan / traditional trade worker",
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

/* ============================================================
   PURPOSE OPTIONS
   ============================================================ */

export const PURPOSE_OPTIONS = [
  {
    value: "business",
    label: {
      en: "Start / expand a business",
      hi: "व्यवसाय शुरू करें / बढ़ाएं",
    },
  },
  {
    value: "education",
    label: {
      en: "Education",
      hi: "शिक्षा",
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
      en: "Artisan / traditional trade",
      hi: "शिल्पकार / पारंपरिक व्यापार",
    },
  },
  {
    value: "agriculture",
    label: {
      en: "Agriculture / farming",
      hi: "कृषि",
    },
  },
];

/* ============================================================
   MATCHING ENGINE
   ============================================================ */

function checkAge(scheme, data) {
  const age = Number(data.age);

  if (!Number.isFinite(age)) return false;

  return (
    age >= scheme.age.min &&
    age <= scheme.age.max
  );
}

function checkIncome(scheme, data) {
  if (scheme.incomeLimit === undefined) {
    return true;
  }

  return Number(data.income) <= scheme.incomeLimit;
}

function checkEducation(scheme, data) {
  const education = Number(data.educationLevel);

  return education >= (scheme.educationMin || 0);
}

function checkPurpose(scheme, data) {
  return scheme.purpose === data.purpose;
}

function checkLocation(scheme, data) {
  return (
    scheme.state.includes("All India") ||
    scheme.state.includes(data.state)
  );
}

function checkCategory(scheme, data) {
  if (!scheme.categories) return true;

  return scheme.categories.includes(data.category);
}

function checkOccupation(scheme, data) {
  if (!scheme.occupations) return true;

  return scheme.occupations.includes(data.occupation);
}

function checkSpecialRules(scheme, data) {
  const rules = scheme.specialRules || {};

  if (rules.requiresStudent && !data.isStudent) {
    return false;
  }

  if (rules.requiresLandholding && !data.ownsLand) {
    return false;
  }

  if (rules.requires80Percentile) {
    const percentile = Number(data.percentile);

    if (!Number.isFinite(percentile) || percentile < 80) {
      return false;
    }
  }

  if (rules.needsStreetVendor) {
    if (data.occupation !== "street-vendor") {
      return false;
    }
  }

  if (rules.needsArtisanTrade) {
    if (data.occupation !== "artisan") {
      return false;
    }
  }

  return true;
}

/* ------------------------------------------------------------
   Project cost check
   ------------------------------------------------------------ */

function checkProjectCost(scheme, data) {
  if (!scheme.projectLimits) {
    return true;
  }

  const cost = Number(data.projectCost);

  if (!Number.isFinite(cost)) {
    return false;
  }

  if (scheme.projectLimits.default !== undefined) {
    return cost <= scheme.projectLimits.default;
  }

  if (scheme.projectLimits[data.projectType] !== undefined) {
    return cost <= scheme.projectLimits[data.projectType];
  }

  return true;
}

/* ------------------------------------------------------------
   Full evaluation
   ------------------------------------------------------------ */

export function evaluateScheme(scheme, formData) {
  const checks = [
    {
      key: "purpose",
      label: {
        en: "Purpose",
        hi: "उद्देश्य",
      },
      ok: checkPurpose(scheme, formData),
      required: true,
      weight: 25,
    },

    {
      key: "age",
      label: {
        en: "Age",
        hi: "आयु",
      },
      ok: checkAge(scheme, formData),
      required: true,
      weight: 15,
    },

    {
      key: "income",
      label: {
        en: "Income",
        hi: "आय",
      },
      ok: checkIncome(scheme, formData),
      required: true,
      weight: 10,
    },

    {
      key: "projectCost",
      label: {
        en: "Project / course cost",
        hi: "परियोजना / पाठ्यक्रम लागत",
      },
      ok: checkProjectCost(scheme, formData),
      required: false,
      weight: 10,
    },

    {
      key: "education",
      label: {
        en: "Education",
        hi: "शिक्षा",
      },
      ok: checkEducation(scheme, formData),
      required: true,
      weight: 10,
    },

    {
      key: "location",
      label: {
        en: "Location",
        hi: "स्थान",
      },
      ok: checkLocation(scheme, formData),
      required: true,
      weight: 10,
    },

    {
      key: "category",
      label: {
        en: "Category",
        hi: "श्रेणी",
      },
      ok: checkCategory(scheme, formData),
      required: false,
      weight: 10,
    },

    {
      key: "occupation",
      label: {
        en: "Occupation",
        hi: "व्यवसाय",
      },
      ok: checkOccupation(scheme, formData),
      required: true,
      weight: 10,
    },

    {
      key: "special",
      label: {
        en: "Special conditions",
        hi: "विशेष शर्तें",
      },
      ok: checkSpecialRules(scheme, formData),
      required: true,
      weight: 10,
    },
  ];

  const totalWeight = checks.reduce(
    (sum, check) => sum + check.weight,
    0
  );

  const earnedWeight = checks.reduce(
    (sum, check) => sum + (check.ok ? check.weight : 0),
    0
  );

  const match = Math.round(
    (earnedWeight / totalWeight) * 100
  );

  const mandatoryChecks = checks.filter(
    (check) => check.required
  );

  const eligible = mandatoryChecks.every(
    (check) => check.ok
  );

  const failedChecks = checks.filter(
    (check) => !check.ok
  );

  const reasons = checks
    .filter((check) => check.ok)
    .map((check) => check.label);

  return {
    ...scheme,
    match,
    eligible,
    checks,
    failedChecks,
    reasons,
  };
}

/* ============================================================
   SORTING
   ============================================================ */

export function getMatchedSchemes(formData) {
  return schemes
    .map((scheme) =>
      evaluateScheme(scheme, formData)
    )
    .sort((a, b) => {

      // Eligible schemes always come first.
      if (a.eligible !== b.eligible) {
        return a.eligible ? -1 : 1;
      }

      return b.match - a.match;
    });
}