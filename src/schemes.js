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
      "National Scheduled Castes Finance and Development Corporation (NSFDC)",

    officialUrl:
      "https://nsfdc.nic.in/faqs",
  },


  // ==========================================================
  // 3. NSFDC — TERM LOAN
  // ==========================================================

  {
    id: "nsfdc-term-loan",

    name: "NSFDC Term Loan",

    description:
      "Concessional term finance for larger viable income-generating projects of eligible SC beneficiaries.",

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

    projectRange: {
      min: 140001,
      max: 5000000,
    },

    loanAmount:
      "Up to ₹45 lakh",

    interest:
      "8% p.a. beneficiary rate",

    repayment:
      "Up to 7 years including 6-month moratorium; longer moratorium may apply for specified activities",

    benefits: [
      "For viable income-generating projects above ₹1.40 lakh and up to ₹50 lakh.",
      "Maximum loan up to ₹45 lakh.",
      "Beneficiary interest rate of 8% p.a.",
      "Up to 90% of project cost may be financed under applicable provisions.",
    ],

    documents: [
      "Valid SC / Caste Certificate",
      "Income Certificate",
      "Aadhaar / KYC",
      "Project Report",
      "Bank Account Details",
    ],

    implementingAgency: [
      "State Channelizing Agencies (SCAs)",
      "Other authorized Channelizing Agencies",
    ],

    officialSource:
      "National Scheduled Castes Finance and Development Corporation (NSFDC)",

    officialUrl:
      "https://nsfdc.nic.in/faqs",
  },


  // ==========================================================
  // 4. NSFDC — UDYAM NIDHI YOJANA
  // ==========================================================

  {
    id: "nsfdc-uny",

    name: "NSFDC Udyam Nidhi Yojana (UNY)",

    description:
      "Finance for eligible SC beneficiaries pursuing small and micro income-generating activities.",

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

    maxProjectCost: 500000,

    loanAmount:
      "Up to ₹4.50 lakh",

    interest:
      "13%–15% p.a. depending on implementing channel",

    repayment:
      "Up to 5 years including 3-month moratorium",

    benefits: [
      "Project cost up to ₹5 lakh.",
      "Maximum loan up to ₹4.50 lakh.",
      "13% beneficiary rate through applicable cooperative channels and 15% through applicable SFB channels.",
    ],

    documents: [
      "Valid SC / Caste Certificate",
      "Income Certificate",
      "Aadhaar / KYC",
      "Bank Account Details",
      "Project / Activity Details",
    ],

    implementingAgency: [
      "Cooperative Societies",
      "Cooperative Banks",
      "Small Finance Banks",
      "Other authorized Channelizing Agencies",
    ],

    officialSource:
      "National Scheduled Castes Finance and Development Corporation (NSFDC)",

    officialUrl:
      "https://nsfdc.nic.in/faqs",
  },


  // ==========================================================
  // 5. NSFDC — EDUCATIONAL LOAN SCHEME
  // ==========================================================

  {
    id: "nsfdc-els",

    name: "NSFDC Educational Loan Scheme (ELS)",

    description:
      "Educational loans for eligible SC students pursuing recognized full-time professional or technical courses in India or abroad.",

    category: "education",

    beneficiaryCategory: "SC",

    purposes: [
      "education",
    ],

    projectTypes: [
      "education",
    ],

    occupations: [
      "student",
    ],

    states: "all",

    age: {
      min: 16,
      max: Infinity,
    },

    incomeLimit: 500000,

    minimumEducationRank: 3,

    loanAmount:
      "Up to ₹40 lakh or 90% of course fee, whichever is lower",

    interest:
      "6.5% p.a.",

    repayment:
      "Up to 10–12 years depending on applicable loan/disbursement provisions",

    benefits: [
      "For regular full-time professional / technical recognized courses.",
      "Courses may be pursued in India or abroad.",
      "Up to ₹40 lakh or 90% of course fee, whichever is lower.",
      "Concessional beneficiary interest rate.",
    ],

    documents: [
      "Valid SC / Caste Certificate",
      "Income Certificate",
      "Aadhaar / KYC",
      "Admission / Offer Letter",
      "Course Fee Details",
      "Bank Account Details",
    ],

    implementingAgency: [
      "State Channelizing Agencies (SCAs)",
      "Other authorized Channelizing Agencies",
    ],

    officialSource:
      "National Scheduled Castes Finance and Development Corporation (NSFDC)",

    officialUrl:
      "https://nsfdc.nic.in/faqs",
  },


  // ==========================================================
  // 6. PMEGP
  // ==========================================================

  {
    id: "pmegp",

    name:
      "Prime Minister's Employment Generation Programme (PMEGP)",

    description:
      "Credit-linked margin money subsidy support for eligible new micro enterprises.",

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

    projectLimits: {
      manufacturing: 5000000,
      service: 2000000,
      trading: 2000000,
    },

    benefits: [
      "Credit-linked margin money subsidy.",
      "Margin money subsidy generally ranges from 15% to 35% depending on applicable category and location.",
      "Maximum project cost for subsidy: ₹50 lakh for manufacturing and ₹20 lakh for business/service.",
      "No income ceiling for new PMEGP units.",
      "Projects above the subsidy ceiling may receive additional bank finance without Government subsidy subject to applicable rules.",
    ],

    loanAmount:
      "Project finance through participating banks; subsidy-eligible ceiling ₹50 lakh manufacturing / ₹20 lakh business-service",

    interest:
      "Normal bank rate as applicable",

    emi:
      "As per approved bank loan",

    repayment:
      "Generally 3–7 years after applicable initial moratorium",

    documents: [
      "Aadhaar Card",
      "PAN Card",
      "Photograph",
      "Project Report",
      "Bank Account Details",
      "Category Certificate where applicable",
    ],

    implementingAgency: [
      "Khadi and Village Industries Commission (KVIC)",
      "Khadi and Village Industries Boards (KVIBs)",
      "District Industries Centres (DICs)",
      "Participating Banks",
    ],

    officialSource:
      "Ministry of MSME / KVIC",

    officialUrl:
      "https://kviconline.gov.in/pmegpeportal/pmegphome/",
  },


  // ==========================================================
  // 7. PM MUDRA YOJANA
  // ==========================================================

  {
    id: "mudra",

    name:
      "Pradhan Mantri MUDRA Yojana (PMMY)",

    description:
      "Collateral-free institutional credit for non-corporate, non-farm micro and small enterprises and eligible allied agricultural activities.",

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

    loanCategories: [
      "Shishu: up to ₹50,000",
      "Kishore: above ₹50,000 to ₹5 lakh",
      "Tarun: above ₹5 lakh to ₹10 lakh",
      "Tarun Plus: above ₹10 lakh to ₹20 lakh for eligible previous Tarun borrowers who successfully repaid",
    ],

    loanAmount:
      "Up to ₹20 lakh under applicable MUDRA category",

    interest:
      "As per lending institution / applicable lending policy",

    benefits: [
      "Collateral-free institutional credit.",
      "Shishu, Kishore, Tarun and Tarun Plus categories.",
      "Term loan and working capital requirements can be met.",
      "Applicable allied activities include poultry, dairy and beekeeping among others.",
    ],

    documents: [
      "Aadhaar / KYC",
      "PAN Card where applicable",
      "Address Proof",
      "Business / Activity Details",
      "Bank Account Details",
    ],

    implementingAgency: [
      "Public Sector Banks",
      "Private Sector Banks",
      "Regional Rural Banks",
      "Small Finance Banks",
      "NBFCs",
      "MFIs",
      "NBFC-MFIs",
    ],

    officialSource:
      "Department of Financial Services",

    officialUrl:
      "https://financialservices.gov.in/pradhan-mantri-mudra-yojana-pmmy",
  },


  // ==========================================================
  // 8. PM VISHWAKARMA
  // ==========================================================

  {
    id: "pm-vishwakarma",

    name:
      "PM Vishwakarma",

    description:
      "End-to-end support for traditional artisans and craftspeople working with hands and tools.",

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

    loanAmount:
      "Up to ₹3 lakh in two tranches: ₹1 lakh + ₹2 lakh",

    interest:
      "5% p.a. concessional beneficiary rate",

    repayment:
      "First tranche: 18 months; Second tranche: 30 months",

    benefits: [
      "PM Vishwakarma Certificate and ID Card.",
      "Basic and advanced skill training.",
      "₹500 per day training stipend.",
      "Toolkit incentive up to ₹15,000.",
      "Collateral-free enterprise development loans up to ₹3 lakh.",
      "Digital transaction and marketing support.",
    ],

    documents: [
      "Aadhaar Card",
      "Mobile Number",
      "Bank Account Details",
      "Trade / Beneficiary Verification",
      "PM Vishwakarma Registration",
    ],

    implementingAgency: [
      "Ministry of MSME",
      "Common Service Centres (CSCs)",
      "Banks / Lending Institutions",
      "State / District Authorities",
    ],

    officialSource:
      "Ministry of MSME / PM Vishwakarma",

    officialUrl:
      "https://pmvishwakarma.gov.in/",
  },


  // ==========================================================
  // 9. PM SVANIDHI
  // ==========================================================

  {
    id: "pm-svanidhi",

    name:
      "PM Street Vendor's AtmaNirbhar Nidhi (PM SVANidhi)",

    description:
      "Collateral-free working-capital credit support for eligible street vendors.",

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

    loanCategories: [
      "First tranche: up to ₹15,000",
      "Second tranche: up to ₹25,000",
      "Third tranche: up to ₹50,000",
    ],

    loanAmount:
      "Up to ₹50,000 through progressive tranches",

    interest:
      "Lender rate applicable; eligible timely repayment receives 7% interest subsidy",

    repayment:
      "12 months / 18 months / 36 months for first / second / third tranche respectively",

    benefits: [
      "Collateral-free working-capital loans.",
      "Progressive loan tranches of ₹15,000, ₹25,000 and ₹50,000.",
      "7% interest subsidy for eligible timely repayment.",
      "Digital transaction incentives.",
      "UPI-linked RuPay Credit Card up to ₹30,000 for eligible vendors.",
      "Scheme lending period extended to March 2030.",
    ],

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
      "Ministry of Housing and Urban Affairs / Government of India",

    officialUrl:
      "https://pmsvanidhi.mohua.gov.in/",
  },


  // ==========================================================
  // 10. PM-KUSUM
  // ==========================================================

  {
    id: "pm-kusum",

    name:
      "Pradhan Mantri Kisan Urja Suraksha evam Utthaan Mahabhiyan (PM-KUSUM)",

    description:
      "Solar-energy support for specified agricultural and renewable-energy applications.",

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

    components: [
      "Component A – decentralized grid-connected renewable energy plants",
      "Component B – standalone solar agricultural pumps",
      "Component C – solarisation of grid-connected agricultural pumps including feeder-level solarisation",
    ],

    loanAmount:
      "Component- and state-specific financing arrangement",

    interest:
      "As applicable to the financing arrangement",

    benefits: [
      "Central Financial Assistance and state support vary by component and geography.",
      "Component B and Component C can involve bank finance for eligible beneficiary contribution.",
      "Higher CFA rates apply in specified North-Eastern, hilly and Island regions under scheme guidelines.",
      "PM-KUSUM 1.0 has been extended to 31 March 2027.",
    ],

    documents: [
      "Aadhaar / KYC",
      "Land / Agricultural Documents where applicable",
      "Bank Account Details",
      "Farmer Identity Documents",
      "Electricity / Pump Details where applicable",
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
      "https://mnre.gov.in/en/pradhan-mantri-kisan-urja-suraksha-evam-utthaan-mahabhiyaan-pm-kusum/",
  },


  // ==========================================================
  // 11. NATIONAL LIVESTOCK MISSION
  // ==========================================================

  {
    id: "nlm-edp",

    name:
      "National Livestock Mission (NLM) – Entrepreneurship Development Programme",

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
      "Poultry",
      "Sheep",
      "Goat",
      "Pig",
      "Horse",
      "Camel",
      "Donkey",
      "Feed and fodder units",
    ],

    maxSubsidy:
      5000000,

    loanAmount:
      "Project financing through eligible bank / financial institution arrangements",

    interest:
      "As applicable by lending institution",

    benefits: [
      "50% capital subsidy for eligible NLM-EDP projects.",
      "Subsidy can be up to ₹50 lakh for eligible activities under applicable scheme provisions.",
      "Covers specified livestock breeding and feed/fodder entrepreneurship activities.",
    ],

    documents: [
      "Aadhaar / KYC",
      "PAN Card where applicable",
      "Bank Account Details",
      "Detailed Project Report",
      "Land / Lease Documents where required",
      "Entity Documents where applicable",
    ],

    implementingAgency: [
      "Department of Animal Husbandry & Dairying",
      "State Animal Husbandry Departments",
      "Eligible Banks / Financial Institutions",
    ],

    officialSource:
      "Department of Animal Husbandry & Dairying",

    officialUrl:
      "https://dahd.gov.in/en/schemes/programmes/national_livestock_mission",
  },


  // ==========================================================
  // 12. KISAN CREDIT CARD
  // ==========================================================

  {
    id: "kcc",

    name:
      "Kisan Credit Card (KCC)",

    description:
      "Timely institutional credit for eligible farmers and specified agricultural and allied activities.",

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

    loanAmount:
      "Up to ₹5 lakh under the applicable MISS ceiling, subject to scheme and lender norms",

    interest:
      "7% p.a. subsidized rate; effective 4% for eligible prompt repayment after applicable 3% incentive",

    benefits: [
      "Credit for crop cultivation and eligible agricultural working-capital needs.",
      "Coverage of specified allied agricultural activities.",
      "Modified Interest Subvention Scheme provides concessional short-term agricultural credit.",
      "Collateral-free agricultural loan limit has been raised to ₹2 lakh under RBI directions.",
    ],

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
      "Government of India / Department of Financial Services / Agriculture Ministry",

    officialUrl:
      "https://financialservices.gov.in/beta/sites/default/files/2025-02/budget.pdf",
  },
];


// ============================================================
// SCHEME OPTIONS FOR UI
//
// These expose the ACTUAL VERIFIED SCHEME NAMES to the UI.
// Use these when showing scheme choices after purpose/project
// selection.
// ============================================================

export const SCHEME_OPTIONS_BY_PURPOSE = {
  business: schemes
    .filter((scheme) =>
      scheme.purposes.includes("business")
    )
    .map((scheme) => ({
      value: scheme.id,
      label: scheme.name,
    })),

  "street-vending": schemes
    .filter((scheme) =>
      scheme.purposes.includes("street-vending")
    )
    .map((scheme) => ({
      value: scheme.id,
      label: scheme.name,
    })),

  artisan: schemes
    .filter((scheme) =>
      scheme.purposes.includes("artisan")
    )
    .map((scheme) => ({
      value: scheme.id,
      label: scheme.name,
    })),

  agriculture: schemes
    .filter((scheme) =>
      scheme.purposes.includes("agriculture")
    )
    .map((scheme) => ({
      value: scheme.id,
      label: scheme.name,
    })),

  solar: schemes
    .filter((scheme) =>
      scheme.purposes.includes("solar")
    )
    .map((scheme) => ({
      value: scheme.id,
      label: scheme.name,
    })),

  livestock: schemes
    .filter((scheme) =>
      scheme.purposes.includes("livestock")
    )
    .map((scheme) => ({
      value: scheme.id,
      label: scheme.name,
    })),

  education: schemes
    .filter((scheme) =>
      scheme.purposes.includes("education")
    )
    .map((scheme) => ({
      value: scheme.id,
      label: scheme.name,
    })),
};


// ============================================================
// BASIC MATCH HELPERS
// ============================================================

function stateMatches(scheme, state) {
  if (!state) return null;

  if (scheme.states === "all") {
    return true;
  }

  if (!Array.isArray(scheme.states)) {
    return false;
  }

  return scheme.states.some(
    (item) =>
      normalize(item) ===
      normalize(state)
  );
}

function purposeMatches(scheme, purpose) {
  if (!purpose) return false;

  return Boolean(
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

  if (!scheme.projectTypes) {
    return null;
  }

  return scheme.projectTypes.some(
    (item) =>
      normalize(item) ===
      normalize(projectType)
  );
}

function occupationMatches(
  scheme,
  occupation
) {
  if (!occupation) {
    return null;
  }

  if (!scheme.occupations) {
    return null;
  }

  return scheme.occupations.some(
    (item) =>
      normalize(item) ===
      normalize(occupation)
  );
}

function educationRank(value) {
  const option =
    EDUCATION_LEVELS.find(
      (item) =>
        item.value ===
        value
    );

  return option?.rank ?? 0;
}


// ============================================================
// GENERIC SCHEME EVALUATION
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

  const education =
    normalize(
      formData.education
    );

  const state =
    normalize(
      formData.state
    );

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

  const checks = [];
  const factors = [];
  const reasons = [];
  const warnings = [];

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
  // PURPOSE
  // ----------------------------------------------------------

  const purposeOK =
    purposeMatches(
      scheme,
      purpose
    );

  if (!purposeOK) {
    return {
      ...scheme,
      applicable: false,
      eligible: false,
      match: 0,
      matchScore: 0,
      matchLevel: "Not applicable",
      checks: [],
      reasons: [],
      warnings: [
        {
          en: "The selected purpose does not match this scheme.",
          hi: "चुना गया उद्देश्य इस योजना से मेल नहीं खाता।",
        },
      ],
    };
  }

  factors.push({
    points: 40,
    matched: true,
    reason: {
      en: "Your selected purpose matches the scheme.",
      hi: "आपका चुना हुआ उद्देश्य इस योजना से मेल खाता है।",
    },
  });

  // ----------------------------------------------------------
  // AGE — HARD ELIGIBILITY
  // ----------------------------------------------------------

  if (scheme.age) {
    const ageProvided =
      age > 0;

    const ageOK =
      ageProvided &&
      age >= scheme.age.min &&
      age <= scheme.age.max;

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
      }${
        Number.isFinite(
          scheme.age.max
        )
          ? ` से ${scheme.age.max} वर्ष`
          : " वर्ष या अधिक"
      } होनी चाहिए।`,
      ok: ageOK,
      hard: true,
      include: ageProvided,
    });
  }

  // ----------------------------------------------------------
  // INCOME — HARD ELIGIBILITY WHERE APPLICABLE
  // ----------------------------------------------------------

  if (
    typeof scheme.incomeLimit ===
      "number"
  ) {
    const incomeProvided =
      income >= 0 &&
      String(
        formData.income ?? ""
      ).trim() !== "";

    const incomeOK =
      incomeProvided &&
      income <=
        scheme.incomeLimit;

    addCheck({
      key: "income",
      en: `Annual family income must not exceed ₹${scheme.incomeLimit.toLocaleString(
        "en-IN"
      )}.`,
      hi: `वार्षिक पारिवारिक आय ₹${scheme.incomeLimit.toLocaleString(
        "en-IN"
      )} से अधिक नहीं होनी चाहिए।`,
      ok: incomeOK,
      hard: true,
      include: incomeProvided,
    });
  }

  // ----------------------------------------------------------
  // CATEGORY — NSFDC SC ONLY
  // ----------------------------------------------------------

  if (
    scheme.beneficiaryCategory
  ) {
    addCheck({
      key: "category",
      en: "Applicant must belong to the Scheduled Caste (SC) category.",
      hi: "आवेदक अनुसूचित जाति (SC) वर्ग से होना चाहिए।",
      ok:
        category ===
        "sc",
      hard: true,
    });
  }

  // ----------------------------------------------------------
  // STATE
  // ----------------------------------------------------------

  const locationOK =
    stateMatches(
      scheme,
      state
    );

  addCheck({
    key: "location",
    en: "The selected location is covered.",
    hi: "चुना गया स्थान योजना के अंतर्गत आता है।",
    ok: locationOK,
    hard: true,
    include: Boolean(state),
  });

  factors.push({
    points: 10,
    matched:
      locationOK === true,
    reason: {
      en: "Your selected location is covered.",
      hi: "आपका चुना हुआ स्थान योजना के अंतर्गत आता है।",
    },
  });

  // ----------------------------------------------------------
  // PROJECT TYPE
  // ----------------------------------------------------------

  const projectTypeResult =
    projectTypeMatches(
      scheme,
      projectType
    );

  if (
    projectTypeResult !==
    null
  ) {
    addCheck({
      key: "project-type",
      en: "The selected project type is supported by this scheme.",
      hi: "चुना गया परियोजना प्रकार इस योजना में समर्थित है।",
      ok:
        projectTypeResult,
      hard: true,
    });

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

  // ----------------------------------------------------------
  // OCCUPATION
  // ----------------------------------------------------------

  const occupationResult =
    occupationMatches(
      scheme,
      occupation
    );

  if (
    occupationResult !==
    null
  ) {
    addCheck({
      key: "occupation",
      en: "Your occupation matches the scheme's beneficiary/activity profile.",
      hi: "आपका व्यवसाय योजना की लाभार्थी/गतिविधि प्रोफ़ाइल से मेल खाता है।",
      ok:
        occupationResult,
      hard: true,
    });

    factors.push({
      points: 15,
      matched:
        occupationResult,
      reason: {
        en: "Your occupation matches the beneficiary/activity profile.",
        hi: "आपका व्यवसाय लाभार्थी/गतिविधि प्रोफ़ाइल से मेल खाता है।",
      },
    });
  }

  // ----------------------------------------------------------
  // GENERIC PROJECT COST CHECK
  // ----------------------------------------------------------

  let costRelevant = false;
  let costOK = true;

  if (
    scheme.maxProjectCost
  ) {
    costRelevant = true;

    costOK =
      projectCost > 0 &&
      projectCost <=
        scheme.maxProjectCost;
  }

  if (
    scheme.projectRange
  ) {
    costRelevant = true;

    costOK =
      projectCost >=
        scheme.projectRange.min &&
      projectCost <=
        scheme.projectRange.max;
  }

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

      costOK =
        projectCost > 0 &&
        projectCost <=
          limit;
    }
  }

  if (costRelevant) {
    addCheck({
      key: "project-cost",
      en: "Project cost is within the applicable scheme limit/range.",
      hi: "परियोजना लागत योजना की लागू सीमा में है।",
      ok: costOK,
      hard: true,
    });

    factors.push({
      points: 15,
      matched:
        costOK,
      reason: {
        en: "Your project cost fits the applicable scheme range.",
        hi: "आपकी परियोजना लागत योजना की लागू सीमा में है।",
      },
    });
  }

  // ----------------------------------------------------------
  // EDUCATIONAL LOAN
  // ----------------------------------------------------------

  if (
    scheme.id ===
    "nsfdc-els"
  ) {
    const rank =
      educationRank(
        education
      );

    const educationOK =
      rank >=
      scheme.minimumEducationRank;

    addCheck({
      key: "education",
      en: "Student should have completed Class 12 or meet the applicable course-entry requirement.",
      hi: "छात्र को कक्षा 12 या लागू पाठ्यक्रम प्रवेश आवश्यकता पूरी करनी चाहिए।",
      ok:
        educationOK,
      hard: true,
      include: Boolean(
        education
      ),
    });

    factors.push({
      points: 15,
      matched:
        educationOK,
      reason: {
        en: "Your education profile is suitable for the course requirement.",
        hi: "आपकी शिक्षा प्रोफ़ाइल पाठ्यक्रम की आवश्यकता के अनुकूल है।",
      },
    });
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
      en: "Applicant is an eligible traditional artisan/craftsperson.",
      hi: "आवेदक पात्र पारंपरिक शिल्पकार होना चाहिए।",
      ok:
        occupation ===
        "artisan",
      hard: true,
    });

    factors.push({
      points: 20,
      matched:
        occupation ===
        "artisan",
      reason: {
        en: "Your occupation matches the artisan profile.",
        hi: "आपका व्यवसाय शिल्पकार प्रोफ़ाइल से मेल खाता है।",
      },
    });

    const selectedTrade =
      normalize(
        formData.artisanTrade
      );

    if (
      selectedTrade
    ) {
      const tradeOK =
        scheme.eligibleTrades.some(
          (trade) =>
            normalize(
              trade
            ) ===
            selectedTrade
        );

      addCheck({
        key: "trade",
        en: "Selected trade is one of the covered PM Vishwakarma trades.",
        hi: "चुना गया ट्रेड PM Vishwakarma के शामिल ट्रेडों में से है।",
        ok:
          tradeOK,
        hard: true,
      });
    }
  }

  // ----------------------------------------------------------
  // PM SVANIDHI
  // ----------------------------------------------------------

  if (
    scheme.id ===
    "pm-svanidhi"
  ) {
    const vendorOK =
      occupation ===
      "street-vendor";

    addCheck({
      key: "vendor",
      en: "Applicant is an eligible street vendor.",
      hi: "आवेदक पात्र स्ट्रीट वेंडर होना चाहिए।",
      ok: vendorOK,
      hard: true,
    });

    factors.push({
      points: 25,
      matched:
        vendorOK,
      reason: {
        en: "Your occupation matches the street-vendor profile.",
        hi: "आपका व्यवसाय स्ट्रीट वेंडर प्रोफ़ाइल से मेल खाता है।",
      },
    });

    const proof =
      normalize(
        formData.streetVendorProof
      );

    if (proof) {
      addCheck({
        key: "vendor-proof",
        en: "Applicable street-vendor identification/proof is available.",
        hi: "लागू स्ट्रीट वेंडर पहचान/प्रमाण उपलब्ध है।",
        ok:
          proof ===
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
    const farmerOK =
      occupation ===
        "farmer" ||
      normalize(
        formData.farmerStatus
      ) === "yes";

    addCheck({
      key: "farmer",
      en: "Applicant has an eligible agricultural beneficiary profile.",
      hi: "आवेदक पात्र कृषि लाभार्थी प्रोफ़ाइल में होना चाहिए।",
      ok: farmerOK,
      hard: true,
    });

    factors.push({
      points: 20,
      matched:
        farmerOK,
      reason: {
        en: "Your profile matches the agricultural beneficiary requirement.",
        hi: "आपकी प्रोफ़ाइल कृषि लाभार्थी आवश्यकता से मेल खाती है।",
      },
    });
  }

  // ----------------------------------------------------------
  // NLM
  // ----------------------------------------------------------

  if (
    scheme.id ===
    "nlm-edp"
  ) {
    const livestockOK =
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
      key: "livestock",
      en: "Applicant profile and proposed activity fit an eligible livestock entrepreneurship category.",
      hi: "आवेदक प्रोफ़ाइल और गतिविधि पात्र पशुधन उद्यमिता श्रेणी से मेल खाती है।",
      ok: livestockOK,
      hard: true,
    });

    factors.push({
      points: 25,
      matched:
        livestockOK,
      reason: {
        en: "Your profile matches the livestock entrepreneurship purpose.",
        hi: "आपकी प्रोफ़ाइल पशुधन उद्यमिता उद्देश्य से मेल खाती है।",
      },
    });
  }

  // ----------------------------------------------------------
  // KCC
  // ----------------------------------------------------------

  if (
    scheme.id ===
    "kcc"
  ) {
    const farmerOK =
      occupation ===
        "farmer" ||
      normalize(
        formData.farmerStatus
      ) === "yes";

    addCheck({
      key: "farmer",
      en: "Applicant is a farmer / eligible agricultural borrower.",
      hi: "आवेदक किसान / पात्र कृषि उधारकर्ता होना चाहिए।",
      ok: farmerOK,
      hard: true,
    });

    factors.push({
      points: 25,
      matched:
        farmerOK,
      reason: {
        en: "Your profile matches the agricultural credit requirement.",
        hi: "आपकी प्रोफ़ाइल कृषि ऋण आवश्यकता से मेल खाती है।",
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
  // HARD ELIGIBILITY
  // ----------------------------------------------------------

  const hardFailures =
    checks.filter(
      (check) =>
        check.hard &&
        !check.ok
    );

  const eligible =
    hardFailures.length ===
    0;

  checks
    .filter(
      (check) =>
        !check.ok
    )
    .forEach(
      (check) =>
        warnings.push(
          check.label
        )
    );

  checks
    .filter(
      (check) =>
        check.ok
    )
    .forEach(
      (check) =>
        reasons.push(
          check.label
        )
    );

  // ----------------------------------------------------------
  // MATCH LEVEL
  // ----------------------------------------------------------

  let matchLevel;

  if (!eligible) {
    matchLevel =
      "Not Eligible";
  } else if (
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

    eligible,

    match,

    matchScore:
      match,

    matchLevel,

    checks,

    reasons,

    warnings,
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

  const eligible =
    evaluated.filter(
      (scheme) =>
        scheme.applicable &&
        scheme.eligible
    );

  // CRITICAL:
  // Never return an ineligible scheme as the final recommendation.
  return eligible.sort(
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


// ============================================================
// DEFAULT EXPORT
// ============================================================

export default schemes;