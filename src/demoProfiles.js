// ============================================================
// SCHEME SAATHI
// DEMO / TEST PROFILES
// ============================================================

export const DEMO_PROFILES = [
  {
    id: "pmegp-eligible",
    name: "PMEGP — Eligible New Enterprise",
    description:
      "Adult entrepreneur with a new manufacturing project within the applicable PMEGP project limit.",
    data: {
      purpose: "business",
      category: "General",
      occupation: "self-employed",
      projectType: "manufacturing",
      age: "25",
      income: "500000",
      projectCost: "800000",
      education: "10",

      isNewEnterprise: "yes",
      previousGovernmentSubsidy: "no",

      gender: "",
      artisanTrade: "",
      previousGovernmentLoanStatus: "no",
      governmentEmployee: "no",

      streetVendorProof: "",
      streetVendingBefore2020: "",

      farmerStatus: "",
      existingAgriculturalPump: "",
      gridAvailability: "",

      beneficiaryType: "",
      kusumCapacity: "",
      kusumComponent: "",
      landAvailable: "",

      isStudent: false,

      state: "Uttar Pradesh",
      district: "Lucknow",
    },
  },

  {
    id: "pmegp-education-fail",
    name: "PMEGP — Below Class 8 / High Project Cost",
    description:
      "Demonstrates the PMEGP higher-project-cost education condition failing.",
    data: {
      purpose: "business",
      category: "General",
      occupation: "self-employed",
      projectType: "manufacturing",
      age: "25",
      income: "500000",
      projectCost: "1500000",
      education: "below8",

      isNewEnterprise: "yes",
      previousGovernmentSubsidy: "no",

      gender: "",
      artisanTrade: "",
      previousGovernmentLoanStatus: "no",
      governmentEmployee: "no",

      streetVendorProof: "",
      streetVendingBefore2020: "",

      farmerStatus: "",
      existingAgriculturalPump: "",
      gridAvailability: "",

      beneficiaryType: "",
      kusumCapacity: "",
      kusumComponent: "",
      landAvailable: "",

      isStudent: false,

      state: "Uttar Pradesh",
      district: "Lucknow",
    },
  },

  {
    id: "vishwakarma-tailor",
    name: "PM Vishwakarma — Tailor",
    description:
      "Adult artisan in a covered traditional trade.",
    data: {
      purpose: "artisan",
      category: "General",
      occupation: "artisan",
      projectType: "service",
      age: "25",
      income: "300000",
      projectCost: "100000",
      education: "8",

      isNewEnterprise: "",
      previousGovernmentSubsidy: "",

      gender: "",
      artisanTrade: "Tailor",
      previousGovernmentLoanStatus: "no",
      governmentEmployee: "no",

      streetVendorProof: "",
      streetVendingBefore2020: "",

      farmerStatus: "",
      existingAgriculturalPump: "",
      gridAvailability: "",

      beneficiaryType: "",
      kusumCapacity: "",
      kusumComponent: "",
      landAvailable: "",

      isStudent: false,

      state: "Uttar Pradesh",
      district: "Lucknow",
    },
  },

  {
    id: "svanidhi-vendor",
    name: "PM SVANidhi — Street Vendor",
    description:
      "Adult street vendor with applicable vendor documentation.",
    data: {
      purpose: "street-vending",
      category: "General",
      occupation: "street-vendor",
      projectType: "trading",
      age: "30",
      income: "240000",
      projectCost: "15000",
      education: "8",

      isNewEnterprise: "",
      previousGovernmentSubsidy: "",

      gender: "",
      artisanTrade: "",
      previousGovernmentLoanStatus: "no",
      governmentEmployee: "no",

      streetVendorProof: "yes",
      streetVendingBefore2020: "yes",

      farmerStatus: "",
      existingAgriculturalPump: "",
      gridAvailability: "",

      beneficiaryType: "",
      kusumCapacity: "",
      kusumComponent: "",
      landAvailable: "",

      isStudent: false,

      state: "Uttar Pradesh",
      district: "Lucknow",
    },
  },

  {
    id: "kusum-component-c",
    name: "PM-KUSUM — Component C",
    description:
      "Farmer with an existing agricultural pump for pump solarisation.",
    data: {
      purpose: "solar",
      category: "General",
      occupation: "farmer",
      projectType: "solar",
      age: "40",
      income: "400000",
      projectCost: "300000",

      education: "8",

      isNewEnterprise: "",
      previousGovernmentSubsidy: "",

      gender: "",
      artisanTrade: "",
      previousGovernmentLoanStatus: "no",
      governmentEmployee: "no",

      streetVendorProof: "",
      streetVendingBefore2020: "",

      farmerStatus: "yes",
      existingAgriculturalPump: "yes",
      gridAvailability: "yes",

      beneficiaryType: "",
      kusumCapacity: "",
      kusumComponent: "component-c-ips",
      landAvailable: "yes",

      isStudent: false,

      state: "Uttar Pradesh",
      district: "Lucknow",
    },
  },

  {
    id: "under-18",
    name: "Under 18 — Occupation Disabled",
    description:
      "Tests the age-dependent occupation logic.",
    data: {
      purpose: "business",
      category: "General",
      occupation: "",
      projectType: "service",
      age: "13",
      income: "0",
      projectCost: "100000",
      education: "8",

      isNewEnterprise: "",
      previousGovernmentSubsidy: "",

      gender: "",
      artisanTrade: "",
      previousGovernmentLoanStatus: "",
      governmentEmployee: "",

      streetVendorProof: "",
      streetVendingBefore2020: "",

      farmerStatus: "",
      existingAgriculturalPump: "",
      gridAvailability: "",

      beneficiaryType: "",
      kusumCapacity: "",
      kusumComponent: "",
      landAvailable: "",

      isStudent: true,

      state: "Uttar Pradesh",
      district: "Lucknow",
    },
  },
];