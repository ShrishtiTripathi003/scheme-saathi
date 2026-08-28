export const PURPOSE_OPTIONS = [
  { value: "business", label: "Start / Expand a Business" },
  { value: "manufacturing", label: "Manufacturing" },
  { value: "service", label: "Service Business" },
  { value: "trading", label: "Trading Business" },
  { value: "food_processing", label: "Food Processing" },
  { value: "agriculture", label: "Agriculture" },
  { value: "livestock", label: "Livestock & Dairy" },
  { value: "artisan", label: "Artisan / Handicraft Work" },
  { value: "street_vendor", label: "Street Vending" },
  { value: "solar", label: "Solar / Renewable Energy" },
];

export const ALL_STATES = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Delhi",
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
  "Jammu and Kashmir",
  "Ladakh",
  "Puducherry",
  "Chandigarh",
  "Andaman and Nicobar Islands",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Lakshadweep",
];
export const CATEGORY_OPTIONS = [
  { value: "business", label: "Business & Entrepreneurship" },
  { value: "food", label: "Food Processing" },
  { value: "agriculture", label: "Agriculture" },
  { value: "livestock", label: "Livestock & Dairy" },
  { value: "artisan", label: "Artisans & Handicrafts" },
  { value: "street_vendor", label: "Street Vendors" },
  { value: "solar", label: "Solar & Renewable Energy" },
];

export const PROJECT_TYPE_OPTIONS = [
  { value: "manufacturing", label: "Manufacturing" },
  { value: "service", label: "Service" },
  { value: "trading", label: "Trading" },
  { value: "agriculture", label: "Agriculture" },
  { value: "food_processing", label: "Food Processing" },
  { value: "livestock", label: "Livestock" },
];

export const EDUCATION_LEVELS = [
  { value: "below8", label: "Below Class 8" },
  { value: "8", label: "Class 8" },
  { value: "10", label: "Class 10" },
  { value: "12", label: "Class 12" },
  { value: "graduate", label: "Graduate" },
  { value: "postgraduate", label: "Postgraduate" },
  { value: "skill", label: "Skill / Diploma / ITI / Training" },
];

export const OCCUPATION_OPTIONS = [
  { value: "student", label: "Student" },
  { value: "farmer", label: "Farmer" },
  { value: "artisan", label: "Artisan / Craftsperson" },
  { value: "street_vendor", label: "Street Vendor" },
  { value: "self_employed", label: "Self-employed" },
  { value: "unemployed", label: "Unemployed" },
  { value: "business_owner", label: "Business Owner" },
  { value: "other", label: "Other" },
];

// ============================================================
// HELPER
// ============================================================

const normalize = (value) =>
  String(value ?? "")
    .trim()
    .toLowerCase();

const numberValue = (value) => {
  const n = Number(String(value ?? "").replace(/,/g, ""));
  return Number.isFinite(n) ? n : 0;
};


// ============================================================
// 10 VERIFIED SCHEMES
// ============================================================

export const schemes = [

  // ==========================================================
  // 1. PMEGP
  // ==========================================================

  {
    id: "pmegp",

    name: "Prime Minister's Employment Generation Programme",
    shortName: "PMEGP",

    category: "business",

    description:
      "A credit-linked subsidy programme for creating new micro enterprises and generating employment.",

    purpose: [
      "business",
      "manufacturing",
      "service",
      "trading",
    ],

    projectTypes: [
      "manufacturing",
      "service",
      "trading",
    ],

    states: "all",

    age: {
      min: 18,
      max: null,
    },

    education: {
      minimum: "below8",
      specialRule:
        "For projects above ₹10 lakh in manufacturing or ₹5 lakh in service/business, the applicant should be at least Class 8 pass.",
    },

    income: {
      max: null,
    },

    projectCost: {
      manufacturingMax: 5000000,
      serviceMax: 2000000,
    },

    eligibility: [
      "Applicant must generally be at least 18 years old.",
      "Scheme is primarily for new viable micro enterprises.",
      "For larger projects, minimum Class 8 qualification applies as specified in PMEGP guidelines.",
      "Existing units that have already availed government subsidy are generally not eligible as new units.",
    ],

    benefits: [
      "Credit-linked margin money subsidy.",
      "Subsidy generally ranges from 15% to 35% depending on category and location.",
      "Maximum project cost: ₹50 lakh for manufacturing.",
      "Maximum project cost: ₹20 lakh for service/business.",
      "Balance project cost is financed through bank credit and beneficiary contribution.",
    ],

    subsidy: "15%–35% margin money subsidy",

    loanAmount:
      "Up to ₹50 lakh for manufacturing and ₹20 lakh for service/business",

    documents: [
      "Aadhaar Card",
      "PAN Card",
      "Passport-size photograph",
      "Educational qualification certificate, where applicable",
      "Project report",
      "Bank account details",
      "Category certificate, if applicable",
      "Special category / rural area documents, if applicable",
    ],

    implementingAgency: [
      "Khadi and Village Industries Commission (KVIC)",
      "KVIB",
      "District Industries Centre (DIC)",
      "Coir Board",
      "Participating banks",
    ],

    officialUrl:
      "https://kviconline.gov.in/pmegpeportal/pmegphome/",

    officialSource:
      "KVIC / PMEGP official portal",

    tags: [
      "business",
      "entrepreneur",
      "manufacturing",
      "service",
      "employment",
      "loan",
      "subsidy",
    ],
  },


  // ==========================================================
  // 2. PM MUDRA
  // ==========================================================

  {
    id: "mudra",

    name: "Pradhan Mantri MUDRA Yojana",
    shortName: "PMMY / MUDRA",

    category: "business",

    description:
      "Collateral-free institutional credit for micro enterprises and income-generating activities.",

    purpose: [
      "business",
      "manufacturing",
      "service",
      "trading",
      "livestock",
    ],

    projectTypes: [
      "manufacturing",
      "service",
      "trading",
      "livestock",
    ],

    states: "all",

    age: {
      min: 18,
      max: null,
    },

    education: {
      minimum: "below8",
    },

    income: {
      max: null,
    },

    projectCost: {
      max: 2000000,
    },

    eligibility: [
      "Micro enterprises and eligible income-generating activities can seek MUDRA credit.",
      "Activities may include non-agricultural businesses and certain allied agricultural activities.",
      "Loan approval is subject to the lending institution's assessment.",
    ],

    benefits: [
      "Shishu: loans up to ₹50,000.",
      "Kishor: above ₹50,000 up to ₹5 lakh.",
      "Tarun: above ₹5 lakh up to ₹10 lakh.",
      "Tarun Plus: above ₹10 lakh up to ₹20 lakh for eligible entrepreneurs who have successfully repaid a previous Tarun loan.",
      "Collateral is not required under PMMY.",
    ],

    subsidy: "No direct capital subsidy; credit facility",

    loanAmount: "Up to ₹20 lakh under applicable MUDRA category",

    documents: [
      "Aadhaar Card",
      "PAN Card",
      "Address proof",
      "Business / activity proof",
      "Bank account details",
      "Project / business details",
      "Photograph",
      "Additional documents requested by lender",
    ],

    implementingAgency: [
      "Public Sector Banks",
      "Private Sector Banks",
      "Regional Rural Banks",
      "Small Finance Banks",
      "NBFCs",
      "MFIs",
    ],

    officialUrl:
      "https://financialservices.gov.in/pradhan-mantri-mudra-yojana-pmmy",

    officialSource:
      "Department of Financial Services, Ministry of Finance",

    tags: [
      "business",
      "micro enterprise",
      "loan",
      "collateral free",
      "startup",
      "self employment",
    ],
  },


  // ==========================================================
  // 3. PMFME
  // ==========================================================

  {
    id: "pmfme",

    name: "Pradhan Mantri Formalisation of Micro Food Processing Enterprises",
    shortName: "PMFME",

    category: "food",

    description:
      "Supports formalisation and upgradation of micro food-processing enterprises.",

    purpose: [
      "food_processing",
      "business",
      "manufacturing",
    ],

    projectTypes: [
      "food_processing",
      "manufacturing",
    ],

    states: "all",

    age: {
      min: 18,
      max: null,
    },

    education: {
      minimum: "below8",
    },

    income: {
      max: null,
    },

    projectCost: {
      max: null,
    },

    eligibility: [
      "Individuals and eligible organisations engaged in micro food processing can be supported.",
      "The scheme supports individual units as well as eligible groups and common infrastructure.",
      "ODOP alignment is important for relevant components.",
    ],

    benefits: [
      "Credit-linked capital subsidy of 35% of eligible project cost for eligible individual units.",
      "Maximum subsidy of ₹10 lakh per unit for individual upgradation/new units under the applicable component.",
      "Support for FPOs, SHGs, cooperatives and common infrastructure.",
      "Seed capital support is available for eligible SHG members under applicable provisions.",
      "Training, capacity building, branding and marketing support.",
    ],

    subsidy: "35% credit-linked capital subsidy for eligible individual units",

    loanAmount:
      "Loan-linked support; subsidy up to ₹10 lakh per eligible individual unit",

    documents: [
      "Aadhaar Card",
      "PAN Card",
      "Bank account details",
      "Business / enterprise details",
      "Project report",
      "Food processing activity details",
      "Udyam registration, where applicable",
      "Group / SHG / FPO documents, where applicable",
      "ODOP-related details, where applicable",
    ],

    implementingAgency: [
      "Ministry of Food Processing Industries (MoFPI)",
      "State Nodal Agencies",
      "District-level agencies",
      "Banks",
    ],

    officialUrl:
      "https://pmfme.mofpi.gov.in/",

    officialSource:
      "Ministry of Food Processing Industries",

    tags: [
      "food",
      "food processing",
      "ODOP",
      "micro enterprise",
      "subsidy",
      "FPO",
      "SHG",
    ],
  },


  // ==========================================================
  // 4. STAND-UP INDIA
  // ==========================================================

  {
    id: "stand_up_india",

    name: "Stand-Up India Scheme",
    shortName: "Stand-Up India",

    category: "business",

    description:
      "Bank loans for greenfield enterprises promoted by women and SC/ST entrepreneurs.",

    purpose: [
      "business",
      "manufacturing",
      "service",
      "trading",
    ],

    projectTypes: [
      "manufacturing",
      "service",
      "trading",
    ],

    states: "all",

    age: {
      min: 18,
      max: null,
    },

    education: {
      minimum: "below8",
    },

    income: {
      max: null,
    },

    projectCost: {
      min: 1000000,
      max: 10000000,
    },

    eligibility: [
      "Applicant must be above 18 years of age.",
      "Applicant should be a woman entrepreneur OR belong to SC/ST category.",
      "Enterprise should be a greenfield enterprise.",
      "Eligible sectors include manufacturing, services, trading and activities allied to agriculture.",
      "Borrower should not be in default to any bank or financial institution.",
    ],

    benefits: [
      "Composite bank loan from ₹10 lakh to ₹1 crore.",
      "Supports greenfield enterprises.",
      "Repayment period can extend up to 7 years including moratorium.",
      "Margin money support can be converged with eligible government schemes.",
      "Borrower generally needs to bring at least 10% of project cost as own contribution.",
    ],

    subsidy: "No universal direct subsidy; margin/convergence support may apply",

    loanAmount: "₹10 lakh to ₹1 crore",

    documents: [
      "Aadhaar Card",
      "PAN Card",
      "Address proof",
      "SC/ST certificate, if applicable",
      "Business/project report",
      "Bank account details",
      "Business registration documents, where applicable",
      "Quotation / project cost documents",
    ],

    implementingAgency: [
      "Scheduled Commercial Banks",
      "Department of Financial Services",
    ],

    officialUrl:
      "https://www.financialservices.gov.in/stand-india-scheme-supi",

    officialSource:
      "Department of Financial Services, Ministry of Finance",

    tags: [
      "women",
      "SC",
      "ST",
      "business",
      "greenfield",
      "loan",
      "manufacturing",
      "service",
    ],
  },


  // ==========================================================
  // 5. PM VISHWAKARMA
  // ==========================================================

  {
    id: "pm_vishwakarma",

    name: "PM Vishwakarma",
    shortName: "PM Vishwakarma",

    category: "artisan",

    description:
      "End-to-end support for traditional artisans and craftspeople working with hands and tools.",

    purpose: [
      "artisan",
      "business",
      "manufacturing",
      "service",
    ],

    projectTypes: [
      "manufacturing",
      "service",
    ],

    states: "all",

    age: {
      min: 18,
      max: null,
    },

    education: {
      minimum: "below8",
    },

    income: {
      max: null,
    },

    projectCost: {
      max: null,
    },

    eligibility: [
      "Applicant should be engaged in one of the 18 covered traditional trades.",
      "Applicant must generally be at least 18 years old.",
      "Applicant should be actively engaged in the relevant trade.",
      "Only one member per family is generally eligible.",
      "Government employee and their family members are excluded under the scheme rules.",
    ],

    eligibleTrades: [
      "Carpenter",
      "Boat Maker",
      "Armourer",
      "Blacksmith",
      "Hammer and Tool Kit Maker",
      "Locksmith",
      "Goldsmith",
      "Potter",
      "Sculptor / Stone Worker",
      "Cobbler / Footwear Artisan",
      "Mason",
      "Basket / Mat / Broom Maker",
      "Traditional Toy Maker",
      "Barber",
      "Garland Maker",
      "Washerman",
      "Tailor",
      "Fishing Net Maker",
    ],

    benefits: [
      "Recognition through PM Vishwakarma certificate and ID card.",
      "Skill verification and training.",
      "Toolkit incentive.",
      "Credit support through collateral-free loans.",
      "Interest support on eligible credit.",
      "Digital transaction incentive.",
      "Marketing support.",
    ],

    subsidy: "Toolkit and interest support under scheme provisions",

    loanAmount:
      "Credit support in stages under PM Vishwakarma provisions",

    documents: [
      "Aadhaar Card",
      "Mobile number linked with Aadhaar",
      "Bank account details",
      "Trade-related information",
      "Other documents required during verification",
    ],

    implementingAgency: [
      "Ministry of Micro, Small & Medium Enterprises",
      "CSC network",
      "Banks / lending institutions",
      "State / district implementing authorities",
    ],

    officialUrl:
      "https://pmvishwakarma.gov.in/",

    officialSource:
      "Ministry of Micro, Small & Medium Enterprises / PM Vishwakarma",

    tags: [
      "artisan",
      "craft",
      "traditional",
      "skill",
      "toolkit",
      "loan",
      "self employment",
    ],
  },


  // ==========================================================
  // 6. PM SVANIDHI
  // ==========================================================

  {
    id: "pm_svanidhi",

    name: "Prime Minister Street Vendor's AtmaNirbhar Nidhi",
    shortName: "PM SVANidhi",

    category: "street_vendor",

    description:
      "Working-capital support for eligible street vendors.",

    purpose: [
      "street_vendor",
      "business",
      "trading",
      "service",
    ],

    projectTypes: [
      "trading",
      "service",
    ],

    states: "all",

    age: {
      min: 18,
      max: null,
    },

    education: {
      minimum: "below8",
    },

    income: {
      max: null,
    },

    projectCost: {
      max: null,
    },

    eligibility: [
      "Designed for eligible street vendors.",
      "Vendor status is established through the applicable survey, certificate of vending, identity card or Letter of Recommendation process.",
      "Eligibility is subject to the scheme's current operational guidelines.",
    ],

    benefits: [
      "Working-capital credit support.",
      "Interest subsidy for timely repayment under applicable provisions.",
      "Digital transaction incentives under applicable scheme provisions.",
      "Subsequent loan cycles may provide higher credit limits subject to eligibility and repayment performance.",
    ],

    subsidy: "Interest subsidy for eligible timely repayment",

    loanAmount:
      "Working-capital loans with progressive limits under the scheme",

    documents: [
      "Street Vendor Certificate / ID Card, where available",
      "Letter of Recommendation, where applicable",
      "Aadhaar Card",
      "Mobile number",
      "Bank account details",
      "Other KYC documents as required",
    ],

    implementingAgency: [
      "Ministry of Housing and Urban Affairs",
      "Urban Local Bodies",
      "SIDBI",
      "Participating lending institutions",
    ],

    officialUrl:
      "https://pmsvanidhi.mohua.gov.in/",

    officialSource:
      "Ministry of Housing and Urban Affairs",

    tags: [
      "street vendor",
      "vendor",
      "small business",
      "working capital",
      "loan",
    ],
  },


  // ==========================================================
  // 7. PM-KUSUM
  // ==========================================================

  {
    id: "pm_kusum",

    name: "Pradhan Mantri Kisan Urja Suraksha evam Utthaan Mahabhiyan",
    shortName: "PM-KUSUM",

    category: "solar",

    description:
      "Supports solar energy applications in agriculture including solar pumps and solarisation of agricultural pumps.",

    purpose: [
      "solar",
      "agriculture",
    ],

    projectTypes: [
      "agriculture",
    ],

    states: "all",

    age: {
      min: 18,
      max: null,
    },

    education: {
      minimum: "below8",
    },

    income: {
      max: null,
    },

    projectCost: {
      max: null,
    },

    eligibility: [
      "Individual farmers and other eligible beneficiary categories can participate under applicable components.",
      "Eligibility depends on the selected PM-KUSUM component and state implementation arrangements.",
      "State implementing agency and available allocation are important for application.",
    ],

    benefits: [
      "Central financial assistance for eligible solar agricultural pumps.",
      "State subsidy is also applicable under the scheme structure.",
      "Farmers can use solar pumps for agricultural irrigation.",
      "Component A can support grid-connected solar power plants up to 2 MW under applicable conditions.",
      "Solarisation can reduce dependence on diesel/grid electricity for eligible agricultural pumping.",
    ],

    subsidy:
      "Central subsidy up to 30% or 50% depending on component/category and applicable rules",

    loanAmount:
      "Bank finance may be available for eligible beneficiary contribution",

    documents: [
      "Aadhaar Card",
      "Land / agricultural land documents",
      "Bank account details",
      "Farmer identity documents",
      "Existing pump / electricity details, where applicable",
      "Other documents required by the state implementing agency",
    ],

    implementingAgency: [
      "Ministry of New and Renewable Energy",
      "State Government designated departments",
      "DISCOMs",
      "Agriculture / Irrigation departments, depending on component",
    ],

    officialUrl:
      "https://pmkusum.mnre.gov.in/",

    officialSource:
      "Ministry of New and Renewable Energy",

    tags: [
      "farmer",
      "agriculture",
      "solar",
      "solar pump",
      "renewable energy",
      "irrigation",
    ],
  },


  // ==========================================================
  // 8. NATIONAL LIVESTOCK MISSION
  // ==========================================================

  {
    id: "national_livestock_mission",

    name: "National Livestock Mission - Entrepreneurship Development Programme",
    shortName: "NLM-EDP",

    category: "livestock",

    description:
      "Entrepreneurship support for livestock and poultry breeding and feed/fodder-related activities.",

    purpose: [
      "livestock",
      "agriculture",
      "business",
    ],

    projectTypes: [
      "livestock",
      "agriculture",
    ],

    states: "all",

    age: {
      min: 18,
      max: null,
    },

    education: {
      minimum: "below8",
    },

    income: {
      max: null,
    },

    projectCost: {
      max: null,
    },

    eligibility: [
      "Eligible beneficiaries can include individuals and specified organisations such as FPOs, SHGs, JLGs, FCOs and Section 8 companies.",
      "Project must fall within an eligible NLM entrepreneurship activity.",
      "Project must satisfy applicable technical and financial requirements.",
      "Beneficiary contribution / bank finance requirements apply.",
    ],

    eligibleActivities: [
      "Rural poultry breeding farms",
      "Sheep breeding",
      "Goat breeding",
      "Piggery",
      "Fodder block production",
      "Hay / silage / TMR units",
      "Fodder seed processing, grading and storage",
    ],

    benefits: [
      "Capital subsidy of 50% for eligible projects.",
      "Subsidy ceiling can be up to ₹50 lakh depending on the eligible activity.",
      "Supports entrepreneurship in poultry, sheep, goat, piggery and feed/fodder sectors.",
    ],

    subsidy: "50% capital subsidy up to applicable ceiling",

    loanAmount:
      "Project financing through bank loan / own contribution as applicable",

    documents: [
      "Aadhaar Card",
      "PAN Card",
      "Bank account details",
      "Land / lease documents where required",
      "Detailed project report",
      "Training / technical documents where applicable",
      "Entity registration documents for organisations",
      "Other documents required under NLM guidelines",
    ],

    implementingAgency: [
      "Department of Animal Husbandry & Dairying",
      "State Animal Husbandry Departments",
      "Banks / lending institutions",
    ],

    officialUrl:
      "https://dahd.gov.in/schemes/programmes/national_livestock_mission",

    officialSource:
      "Department of Animal Husbandry & Dairying",

    tags: [
      "livestock",
      "poultry",
      "goat",
      "sheep",
      "piggery",
      "fodder",
      "farmer",
      "subsidy",
    ],
  },


  // ==========================================================
  // 9. CM-YUVA - UTTAR PRADESH
  // ==========================================================

  {
    id: "cm_yuva",

    name: "Mukhyamantri Yuva Udyami Vikas Abhiyan",
    shortName: "CM-YUVA",

    category: "business",

    description:
      "Uttar Pradesh initiative supporting youth entrepreneurship and self-employment.",

    purpose: [
      "business",
      "manufacturing",
      "service",
      "trading",
    ],

    projectTypes: [
      "manufacturing",
      "service",
      "trading",
    ],

    states: [
      "Uttar Pradesh",
      "UP",
    ],

    age: {
      min: 21,
      max: 40,
    },

    education: {
      minimum: "8",
    },

    income: {
      max: null,
    },

    projectCost: {
      phase1Max: 500000,
      phase2Max: 2000000,
    },

    eligibility: [
      "Applicant must be a permanent resident of Uttar Pradesh.",
      "Applicant must generally be between 21 and 40 years of age.",
      "Minimum educational qualification is Class 8 or equivalent under the current scheme information.",
      "Preference is given to trained applicants under government schemes / recognised skill programmes.",
      "Applicant should satisfy the scheme's restrictions regarding simultaneous benefits from other loan-subsidy schemes.",
    ],

    benefits: [
      "Phase 1: interest subsidy covering interest on loans up to ₹5 lakh for the applicable period.",
      "Phase 2: loans from ₹10 lakh to ₹20 lakh with 50% interest subsidy for the applicable period.",
      "Supports self-employment and enterprise creation.",
      "Handholding and project guidance may be available through the UP MSME system.",
    ],

    subsidy: "Interest subsidy; Phase 1 up to ₹5 lakh loan support",

    loanAmount:
      "Phase 1 up to ₹5 lakh; Phase 2 ₹10 lakh–₹20 lakh under applicable rules",

    documents: [
      "Aadhaar Card",
      "Proof of age",
      "Proof of Uttar Pradesh residence",
      "Educational qualification certificate",
      "Training / skill certificate, where applicable",
      "Project report",
      "Caste certificate, if applicable",
      "Disability certificate, if applicable",
      "Bank account details",
    ],

    implementingAgency: [
      "Government of Uttar Pradesh",
      "UP MSME / Directorate of Industries",
      "District Industries and Enterprise Promotion Centres",
      "Participating banks",
    ],

    officialUrl:
      "https://msme1connect.up.gov.in/scheme-list/mukhyamantri-yuva-udyami-vikas-abhiyan",

    officialSource:
      "UP MSME 1-Connect / Government of Uttar Pradesh",

    tags: [
      "UP",
      "Uttar Pradesh",
      "youth",
      "business",
      "entrepreneur",
      "self employment",
      "loan",
    ],
  },


  // ==========================================================
  // 10. KISAN CREDIT CARD
  // ==========================================================

  {
    id: "kisan_credit_card",

    name: "Kisan Credit Card",
    shortName: "KCC",

    category: "agriculture",

    description:
      "Institutional credit facility for farmers' agricultural and allied activity needs.",

    purpose: [
      "agriculture",
      "livestock",
      "business",
    ],

    projectTypes: [
      "agriculture",
      "livestock",
    ],

    states: "all",

    age: {
      min: 18,
      max: null,
    },

    education: {
      minimum: "below8",
    },

    income: {
      max: null,
    },

    projectCost: {
      max: null,
    },

    eligibility: [
      "Farmers and eligible agricultural borrowers can apply subject to bank and scheme norms.",
      "Eligible activities may include crop cultivation and specified allied agricultural activities.",
      "The lending institution verifies land, crop/activity and repayment-related details.",
    ],

    benefits: [
      "Timely agricultural credit.",
      "Working-capital support for crop-related expenses.",
      "Credit can support eligible allied agricultural activities.",
      "Simplifies access to institutional agricultural credit through the KCC mechanism.",
    ],

    subsidy:
      "Interest support / applicable concessions may apply under prevailing government and RBI rules",

    loanAmount:
      "Credit limit determined according to crop, land, scale of finance and applicable norms",

    documents: [
      "Aadhaar Card / identity proof",
      "Land records / cultivation proof",
      "Bank account details",
      "Passport-size photograph",
      "Crop / agricultural activity details",
      "Other documents requested by bank",
    ],

    implementingAgency: [
      "Scheduled Commercial Banks",
      "Regional Rural Banks",
      "Cooperative Banks",
      "Other eligible lending institutions",
    ],

    officialUrl:
      "https://www.pmkisan.gov.in/",

    officialSource:
      "Government of India agricultural credit / PM-KISAN ecosystem",

    tags: [
      "farmer",
      "agriculture",
      "crop",
      "credit",
      "livestock",
      "working capital",
    ],
  },
];


// ============================================================
// MATCHING ENGINE
// ============================================================

export function getMatchedSchemes(formData = {}) {
  const purpose = normalize(formData.purpose);
  const category = normalize(formData.category);
  const projectType = normalize(formData.projectType);
  const occupation = normalize(formData.occupation);
  const education = normalize(formData.education);
  const state = normalize(formData.state);

  const age = numberValue(formData.age);
  const income = numberValue(formData.income);
  const projectCost = numberValue(
    formData.projectCost || formData.project_cost
  );

  const isUP =
    state === "uttar pradesh" ||
    state === "up" ||
    state === "uttarpradesh";

  return schemes
    .map((scheme) => {
      let score = 0;
      const reasons = [];
      const warnings = [];

      // --------------------------------------------------------
      // STATE MATCH
      // --------------------------------------------------------

      if (scheme.states === "all") {
        score += 10;
        reasons.push("Available across India.");
      } else if (
        Array.isArray(scheme.states) &&
        scheme.states.some((s) => normalize(s) === state)
      ) {
        score += 20;
        reasons.push("Your selected state matches the scheme.");
      } else if (scheme.id === "cm_yuva" && isUP) {
        score += 20;
        reasons.push("You selected Uttar Pradesh.");
      } else {
        return null;
      }


      // --------------------------------------------------------
      // PURPOSE MATCH
      // --------------------------------------------------------

      if (purpose && scheme.purpose.includes(purpose)) {
        score += 30;
        reasons.push("Your purpose matches this scheme.");
      }

      // Category fallback
      if (category && scheme.category === category) {
        score += 20;
        reasons.push("Your selected category matches this scheme.");
      }


      // --------------------------------------------------------
      // PROJECT TYPE
      // --------------------------------------------------------

      if (
        projectType &&
        scheme.projectTypes &&
        scheme.projectTypes.includes(projectType)
      ) {
        score += 15;
        reasons.push("Your project type is supported.");
      }


      // --------------------------------------------------------
      // OCCUPATION
      // --------------------------------------------------------

      if (occupation) {
        if (
          scheme.tags.includes(occupation) ||
          (occupation === "farmer" &&
            ["agriculture", "livestock", "solar"].includes(scheme.category)) ||
          (occupation === "artisan" && scheme.id === "pm_vishwakarma") ||
          (occupation === "street_vendor" &&
            scheme.id === "pm_svanidhi")
        ) {
          score += 15;
          reasons.push("Your occupation fits the scheme.");
        }
      }


      // --------------------------------------------------------
      // AGE
      // --------------------------------------------------------

      if (age > 0) {
        if (
          scheme.age?.min !== null &&
          scheme.age?.min !== undefined &&
          age < scheme.age.min
        ) {
          warnings.push(
            `Minimum age is ${scheme.age.min} years.`
          );
          score -= 30;
        }

        if (
          scheme.age?.max !== null &&
          scheme.age?.max !== undefined &&
          age > scheme.age.max
        ) {
          warnings.push(
            `Maximum age is ${scheme.age.max} years.`
          );
          score -= 30;
        }

        if (
          (!scheme.age?.min || age >= scheme.age.min) &&
          (!scheme.age?.max || age <= scheme.age.max)
        ) {
          score += 10;
          reasons.push("Your age fits the basic age criteria.");
        }
      }


      // --------------------------------------------------------
      // EDUCATION
      // --------------------------------------------------------

      const educationRank = {
        below8: 0,
        8: 1,
        10: 2,
        12: 3,
        graduate: 4,
        postgraduate: 5,
        skill: 4,
      };

      if (education && scheme.education?.minimum) {
        const userLevel =
          educationRank[education] ?? 0;

        const requiredLevel =
          educationRank[scheme.education.minimum] ?? 0;

        if (userLevel >= requiredLevel) {
          score += 5;
          reasons.push("Your education level meets the basic requirement.");
        } else {
          score -= 10;
          warnings.push(
            "Your education level may not satisfy the minimum requirement."
          );
        }
      }


      // --------------------------------------------------------
      // PROJECT COST
      // --------------------------------------------------------

      if (projectCost > 0 && scheme.projectCost) {

        const maxValues = [
          scheme.projectCost.max,
          scheme.projectCost.manufacturingMax,
          scheme.projectCost.serviceMax,
          scheme.projectCost.phase1Max,
          scheme.projectCost.phase2Max,
        ].filter(
          (value) => typeof value === "number"
        );

        if (maxValues.length > 0) {
          const highestMax = Math.max(...maxValues);

          if (projectCost <= highestMax) {
            score += 10;
            reasons.push(
              "Your project cost falls within the scheme's broad project limit."
            );
          } else {
            warnings.push(
              "Your project cost may exceed the scheme's applicable limit."
            );
            score -= 10;
          }
        }
      }


      // --------------------------------------------------------
      // SPECIAL CM-YUVA RULE
      // --------------------------------------------------------

      if (scheme.id === "cm_yuva") {

        if (!isUP) {
          return null;
        }

        if (age > 0 && (age < 21 || age > 40)) {
          score -= 50;
          warnings.push(
            "CM-YUVA requires applicants to be between 21 and 40 years."
          );
        }

        if (projectCost > 0 && projectCost > 2000000) {
          score -= 40;
          warnings.push(
            "Your project cost is above the current Phase 2 range."
          );
        }
      }


      // --------------------------------------------------------
      // SPECIAL VISHWAKARMA RULE
      // --------------------------------------------------------

      if (scheme.id === "pm_vishwakarma") {

        if (
          occupation &&
          occupation !== "artisan" &&
          occupation !== "self_employed"
        ) {
          score -= 10;
        }

        if (purpose && purpose !== "artisan") {
          score -= 10;
        }
      }


      // --------------------------------------------------------
      // SPECIAL SVANIDHI RULE
      // --------------------------------------------------------

      if (scheme.id === "pm_svanidhi") {

        if (
          occupation === "street_vendor" ||
          purpose === "street_vendor"
        ) {
          score += 25;
          reasons.push(
            "Your profile indicates street-vending activity."
          );
        } else if (purpose && purpose !== "street_vendor") {
          score -= 25;
        }
      }


      // --------------------------------------------------------
      // SPECIAL PM-KUSUM RULE
      // --------------------------------------------------------

      if (scheme.id === "pm_kusum") {

        if (
          purpose === "solar" ||
          (purpose === "agriculture" &&
            occupation === "farmer")
        ) {
          score += 25;
          reasons.push(
            "Your agricultural/solar requirement matches PM-KUSUM."
          );
        }
      }


      // --------------------------------------------------------
      // SPECIAL NLM RULE
      // --------------------------------------------------------

      if (scheme.id === "national_livestock_mission") {

        if (purpose === "livestock") {
          score += 25;
          reasons.push(
            "Your livestock-related purpose matches NLM-EDP."
          );
        }
      }


      // --------------------------------------------------------
      // SPECIAL PMFME RULE
      // --------------------------------------------------------

      if (scheme.id === "pmfme") {

        if (purpose === "food_processing") {
          score += 25;
          reasons.push(
            "Your food-processing purpose directly matches PMFME."
          );
        }
      }


      // --------------------------------------------------------
      // SCORE NORMALISATION
      // --------------------------------------------------------

      score = Math.max(0, Math.min(100, score));

      return {
        ...scheme,
        matchScore: score,
        reasons,
        warnings,
        matchLevel:
          score >= 75
            ? "Excellent Match"
            : score >= 55
              ? "Good Match"
              : score >= 35
                ? "Possible Match"
                : "Low Match",
      };
    })

    .filter(Boolean)
    .filter((scheme) => scheme.matchScore >= 25)
    .sort((a, b) => b.matchScore - a.matchScore);
}


// ============================================================
// GET SINGLE SCHEME
// ============================================================

export function getSchemeById(id) {
  return schemes.find((scheme) => scheme.id === id);
}


// ============================================================
// DEFAULT EXPORT
// ============================================================

export default schemes;
