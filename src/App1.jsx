import "./App.css";
import { useState } from "react";
import { districts } from "./districts";

const schemes = [
  // =========================================================
  // 1. CM-YUVA - UTTAR PRADESH
  // =========================================================
  {
    id: "cm-yuva",

    name: "Mukhyamantri Yuva Udyami Vikas Abhiyan (CM-YUVA)",

    purpose: "business",

    minAge: 21,
    maxAge: 40,

    minEducation: 8,

    maxIncome: Infinity,

    maxProjectCost: 500000,

    state: ["Uttar Pradesh"],

    category: "any",
    occupation: "any",

    benefits: [
      "Interest-free loan up to ₹5 lakh in Phase 1",
      "100% interest subsidy for four years",
      "10% margin money subsidy",
      "Entrepreneurship support and training"
    ],

    maxLoan: "₹5,00,000",
    interest: "0% with interest subsidy",
    emi: "As per approved loan",

    documents: [
      "Aadhaar Card",
      "Age Proof",
      "Education Certificate",
      "Project Report",
      "Bank Account Details",
      "UP Residence Proof"
    ],

    partnerTypes: [
      "Directorate of Industries / UPMSME",
      "District Industries Centre (DIC)",
      "Participating Bank"
    ],

    officialSource: "UP MSME / UP RAMP",

    sourceUrl:
      "https://msme1connect.up.gov.in/Home/SchemesList/18"
  },


  // =========================================================
  // 2. PMEGP - BUSINESS / SERVICE
  // =========================================================
  {
    id: "pmegp",

    name: "Prime Minister's Employment Generation Programme (PMEGP)",

    purpose: "business",

    minAge: 18,
    maxAge: Infinity,

    minEducation: 0,

    maxIncome: Infinity,

    maxProjectCost: 2000000,

    state: ["All India"],

    category: "any",
    occupation: "any",

    benefits: [
      "Credit-linked margin money subsidy",
      "Supports new micro enterprises",
      "15%–35% subsidy depending on category and location",
      "Supports manufacturing and business/service projects"
    ],

    maxLoan: "₹20,00,000 project limit",
    interest: "Bank applicable",
    emi: "As per bank loan",

    documents: [
      "Aadhaar Card",
      "PAN Card",
      "Bank Account Details",
      "Project Report",
      "Education Certificate if applicable",
      "Category Certificate if applicable"
    ],

    partnerTypes: [
      "KVIC",
      "KVIB",
      "District Industries Centre (DIC)",
      "Participating Bank"
    ],

    officialSource: "Ministry of MSME / KVIC",

    sourceUrl:
      "https://common-pmegp.msme.gov.in/"
  },


  // =========================================================
  // 3. PM MUDRA YOJANA
  // =========================================================
  {
    id: "mudra",

    name: "Pradhan Mantri MUDRA Yojana (PMMY)",

    purpose: "business",

    // FIX: was `null` for both, which made `age <= maxAge` evaluate as
    // `age <= 0` (always false). Use 0 / Infinity to mean "no restriction".
    minAge: 0,
    maxAge: Infinity,

    minEducation: 0,

    maxIncome: Infinity,

    maxProjectCost: 2000000,

    state: ["All India"],

    category: "any",

    occupation: [
      "business",
      "self-employed",
      "poultry",
      "dairy",
      "beekeeping"
    ],

    benefits: [
      "Collateral-free institutional credit",
      "Shishu loans up to ₹50,000",
      "Kishor loans above ₹50,000 up to ₹5 lakh",
      "Tarun loans above ₹5 lakh up to ₹10 lakh",
      "Tarun Plus up to ₹20 lakh for eligible previous Tarun borrowers"
    ],

    maxLoan: "Up to ₹20,00,000",
    interest: "Lender applicable",
    emi: "As per lender",

    documents: [
      "Aadhaar Card",
      "PAN Card",
      "Bank Account Details",
      "Business / Activity Details",
      "KYC Documents"
    ],

    partnerTypes: [
      "Public Sector Banks",
      "Private Sector Banks",
      "Regional Rural Banks",
      "Small Finance Banks",
      "NBFCs",
      "MFIs"
    ],

    officialSource: "Department of Financial Services",

    sourceUrl:
      "https://financialservices.gov.in/pradhan-mantri-mudra-yojana-pmmy"
  },


  // =========================================================
  // 4. PM SVANIDHI
  // =========================================================
  {
    id: "svanidhi",

    name: "PM Street Vendor's AtmaNirbhar Nidhi (PM SVANidhi)",

    purpose: "street-vending",

    // FIX: null -> 0 / Infinity (see note on mudra above)
    minAge: 0,
    maxAge: Infinity,

    minEducation: 0,

    maxIncome: Infinity,

    maxProjectCost: 50000,

    state: ["All India"],

    category: "any",

    occupation: ["street-vendor"],

    benefits: [
      "Working capital loan up to ₹10,000 initially",
      "Enhanced loan up to ₹20,000 on repayment",
      "Enhanced loan up to ₹50,000 in third tranche",
      "7% interest subsidy for regular repayment",
      "Digital transaction incentives"
    ],

    maxLoan: "Up to ₹50,000",
    interest: "7% interest subsidy",
    emi: "As per loan terms",

    documents: [
      "Aadhaar Card",
      "Certificate of Vending / ID Card",
      "Letter of Recommendation if applicable",
      "Bank Account Details",
      "KYC Documents"
    ],

    partnerTypes: [
      "Urban Local Body (ULB)",
      "Town Vending Committee",
      "Participating Bank / Lending Institution"
    ],

    officialSource: "Ministry of Housing & Urban Affairs",

    sourceUrl:
      "https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=1945493"
  },


  // =========================================================
  // 5. PM VISHWAKARMA
  // =========================================================
  {
    id: "vishwakarma",

    name: "PM Vishwakarma",

    purpose: "artisan",

    minAge: 18,
    maxAge: Infinity,

    minEducation: 0,

    maxIncome: Infinity,

    maxProjectCost: 300000,

    state: ["All India"],

    category: "any",

    occupation: [
      "carpenter",
      "boat-maker",
      "armourer",
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
      "fishing-net-maker"
    ],

    benefits: [
      "PM Vishwakarma Certificate and ID Card",
      "Basic and advanced skill training",
      "₹500 per day training stipend",
      "Toolkit incentive up to ₹15,000",
      "Collateral-free enterprise development loan up to ₹3 lakh",
      "5% concessional interest rate",
      "Digital transaction incentive",
      "Marketing support"
    ],

    maxLoan: "Up to ₹3,00,000",
    interest: "5%",
    emi: "As per loan tranche",

    documents: [
      "Aadhaar Card",
      "Mobile Number",
      "Bank Account Details",
      "Trade / Artisan Verification",
      "PM Vishwakarma Registration"
    ],

    partnerTypes: [
      "Common Service Centre (CSC)",
      "Gram Panchayat / ULB",
      "District Implementation Committee",
      "Participating Bank"
    ],

    officialSource: "Ministry of MSME",

    sourceUrl:
      "https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=1959098"
  },


  // =========================================================
  // 6. PM KISAN
  // =========================================================
  {
    id: "pm-kisan",

    name: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",

    purpose: "agriculture",

    // FIX: null -> 0 / Infinity
    minAge: 0,
    maxAge: Infinity,

    minEducation: 0,

    maxIncome: Infinity,

    maxProjectCost: Infinity,

    state: ["All India"],

    category: "any",

    occupation: ["farmer"],

    requiresLandholding: true,

    benefits: [
      "Income support for eligible landholding farmer families",
      "Benefit transferred through DBT"
    ],

    maxLoan: "Not a loan scheme",
    interest: "Not applicable",
    emi: "Not applicable",

    documents: [
      "Aadhaar",
      "Land Records",
      "Bank Account Details",
      "State / UT required documents"
    ],

    partnerTypes: [
      "State / UT Agriculture Department",
      "Local Revenue / Land Records Authorities",
      "Bank"
    ],

    officialSource: "PM-KISAN",

    sourceUrl:
      "https://pmkisan.gov.in/"
  },


  // =========================================================
  // 7. KISAN CREDIT CARD
  // =========================================================
  {
    id: "kcc",

    name: "Kisan Credit Card (KCC)",

    purpose: "agriculture",

    // FIX: null -> 0 / Infinity
    minAge: 0,
    maxAge: Infinity,

    minEducation: 0,

    maxIncome: Infinity,

    maxProjectCost: 300000,

    state: ["All India"],

    category: "any",

    occupation: ["farmer"],

    benefits: [
      "Credit support for cultivation",
      "Post-harvest expenses",
      "Working capital for farm assets",
      "Agriculture allied activities",
      "Animal husbandry and fisheries working capital"
    ],

    maxLoan: "Up to ₹3,00,000 under specified KCC limits",
    interest: "As per applicable government/bank provisions",
    emi: "As per bank terms",

    documents: [
      "Aadhaar / KYC",
      "Land / Cultivation Documents where applicable",
      "Bank Account Details",
      "Farmer / Activity Details"
    ],

    partnerTypes: [
      "Public Sector Bank",
      "Regional Rural Bank",
      "Cooperative Bank",
      "Other eligible lending institution"
    ],

    officialSource: "Department of Financial Services",

    sourceUrl:
      "https://www.financialservices.gov.in/agriculture-credit"
  },


  // =========================================================
  // 8. POST MATRIC SCHOLARSHIP - SC
  // =========================================================
  {
    id: "pms-sc",

    name: "Post-Matric Scholarship for SC Students",

    purpose: "education",

    // FIX: null -> 0 / Infinity
    minAge: 0,
    maxAge: Infinity,

    minEducation: 10,

    maxIncome: 250000,

    maxProjectCost: Infinity,

    state: ["All India"],

    category: ["SC"],

    occupation: ["student"],

    requiresStudent: true,

    benefits: [
      "Financial assistance for post-matric/post-secondary education",
      "Applicable to eligible SC students studying in India"
    ],

    maxLoan: "Not a loan scheme",
    interest: "Not applicable",
    emi: "Not applicable",

    documents: [
      "Aadhaar",
      "Caste Certificate",
      "Income Certificate",
      "Previous Academic Certificate",
      "Admission / Institution Details",
      "Bank Account Details"
    ],

    partnerTypes: [
      "State / UT Scholarship Department",
      "District Social Welfare Office",
      "National Scholarship Portal"
    ],

    officialSource:
      "Department of Social Justice & Empowerment",

    sourceUrl:
      "https://socialjustice.gov.in/schemes/25"
  },


  // =========================================================
  // 9. PM-USP CENTRAL SECTOR SCHOLARSHIP
  // =========================================================
  {
    id: "pm-usp-csss",

    name: "PM-USP Central Sector Scheme of Scholarship",

    purpose: "education",

    // FIX: null -> 0 / Infinity
    minAge: 0,
    maxAge: Infinity,

    minEducation: 12,

    maxIncome: 450000,

    maxProjectCost: Infinity,

    state: ["All India"],

    category: "any",

    occupation: ["student"],

    requiresStudent: true,

    requires80Percentile: true,

    benefits: [
      "Merit-cum-means scholarship",
      "Financial assistance for college and university students",
      "Scholarship support for day-to-day educational expenses"
    ],

    maxLoan: "Not a loan scheme",
    interest: "Not applicable",
    emi: "Not applicable",

    documents: [
      "Class XII Certificate / Marks",
      "Income Certificate",
      "Aadhaar",
      "Bank Account Details",
      "Institution Details"
    ],

    partnerTypes: [
      "National Scholarship Portal",
      "Department of Higher Education",
      "Participating Educational Institution"
    ],

    officialSource:
      "Ministry of Education",

    sourceUrl:
      "https://www.education.gov.in/sites/upload_files/mhrd/files/upload_document/FAQs_PM_USP_CSSS_scheme_AY_2025_26.pdf"
  },


  // =========================================================
  // 10. PRE-MATRIC SCHOLARSHIP FOR SC
  // =========================================================
  {
    id: "prematric-sc",

    name: "Pre-Matric Scholarship for SC Students",

    purpose: "education",

    // FIX: null -> 0 / Infinity
    minAge: 0,
    maxAge: Infinity,

    minEducation: 8,

    maxIncome: Infinity,

    maxProjectCost: Infinity,

    state: ["All India"],

    category: ["SC"],

    occupation: ["student"],

    requiresStudent: true,

    benefits: [
      "Educational support for eligible SC students",
      "Implemented through State Governments and UT administrations"
    ],

    maxLoan: "Not a loan scheme",
    interest: "Not applicable",
    emi: "Not applicable",

    documents: [
      "Aadhaar",
      "Caste Certificate",
      "School Certificate",
      "Bank Account Details",
      "Income / Other documents as required"
    ],

    partnerTypes: [
      "State / UT Government",
      "District Social Welfare Department",
      "School / Institution"
    ],

    officialSource:
      "Department of Social Justice & Empowerment",

    sourceUrl:
      "https://socialjustice.gov.in/schemes/23"
  }
];

// Purposes offered in the form's "purpose" dropdown. Kept in one place so the
// <select> options and the scoring logic can't drift apart.
const PURPOSE_OPTIONS = [
  { value: "business", label: "Start / Expand a Business" },
  { value: "education", label: "Education" },
  { value: "street-vending", label: "Street Vending" },
  { value: "artisan", label: "Artisan / Traditional Trade" },
  { value: "agriculture", label: "Agriculture / Farming" }
];

const CATEGORY_OPTIONS = ["General", "OBC", "SC", "ST", "EWS", "Other"];

const OCCUPATION_OPTIONS = [
  { value: "business", label: "Business Owner" },
  { value: "self-employed", label: "Self-Employed" },
  { value: "farmer", label: "Farmer" },
  { value: "street-vendor", label: "Street Vendor" },
  { value: "artisan", label: "Artisan / Traditional Trade Worker" },
  { value: "student", label: "Student" },
  { value: "other", label: "Other" }
];

// Highest education level completed, mapped to the numeric `minEducation`
// values used on the scheme objects (years of schooling).
const EDUCATION_LEVEL_OPTIONS = [
  { value: "0", label: "Below 8th Standard" },
  { value: "8", label: "8th Pass" },
  { value: "10", label: "10th Pass" },
  { value: "12", label: "12th Pass" },
  { value: "15", label: "Graduate or Above" }
];

// Does this scheme's occupation requirement match the user's occupation?
function occupationMatches(scheme, formData) {
  if (scheme.occupation === "any") return true;
  if (!Array.isArray(scheme.occupation)) return false;

  if (scheme.occupation.includes(formData.occupation)) return true;

  // PM Vishwakarma lists specific trades (carpenter, blacksmith, etc.)
  // rather than a generic "artisan" tag - treat the form's broad
  // "artisan / traditional trade worker" option as a match for it.
  if (formData.occupation === "artisan" && scheme.id === "vishwakarma") {
    return true;
  }

  return false;
}

// Does the user satisfy any special eligibility flags this scheme carries
// (student status, landholding, minimum percentile)?
function specialFlagsSatisfied(scheme, formData) {
  if (scheme.requiresStudent && !formData.isStudent) return false;
  if (scheme.requiresLandholding && !formData.ownsLand) return false;
  if (scheme.requires80Percentile) {
    const percentile = Number(formData.percentile);
    if (!percentile || percentile < 80) return false;
  }
  return true;
}

function categoryMatches(scheme, formData) {
  if (scheme.category === "any") return true;
  if (!Array.isArray(scheme.category)) return false;
  return scheme.category.includes(formData.category);
}

function App() {
  const [showForm, setShowForm] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [recommendedScheme, setRecommendedScheme] = useState(null);

  const [formData, setFormData] = useState({
    purpose: "",
    age: "",
    income: "",
    projectCost: "",
    educationLevel: "",
    category: "",
    occupation: "",
    isStudent: false,
    ownsLand: false,
    percentile: "",
    state: "",
    district: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const nextValue = type === "checkbox" ? checked : value;

    // FIX: use the functional update form so we never overwrite a change
    // based on stale `formData` from an earlier render. This also fixes the
    // old bug where `state` changes were briefly written twice with the
    // same (correct, but fragile) result.
    setFormData((prev) => ({
      ...prev,
      [name]: nextValue,
      // Reset district whenever state changes
      ...(name === "state" ? { district: "" } : {}),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const age = Number(formData.age);
    const income = Number(formData.income);
    const projectCost = Number(formData.projectCost);
    const educationLevel = Number(formData.educationLevel);

    const matchedSchemes = schemes.map((scheme) => {
      let score = 0;

      // ---------------- PURPOSE (25 pts) ----------------
      if (scheme.purpose === formData.purpose) {
        score += 25;
      }

      // ---------------- AGE (15 pts) ----------------
      if (age >= scheme.minAge && age <= scheme.maxAge) {
        score += 15;
      }

      // ---------------- INCOME (10 pts) ----------------
      if (income <= scheme.maxIncome) {
        score += 10;
      }

      // ---------------- PROJECT COST (10 pts) ----------------
      if (projectCost <= scheme.maxProjectCost) {
        score += 10;
      }

      // ---------------- EDUCATION (10 pts) ----------------
      // FIX: schemes store `minEducation` (a number of years), not
      // `education`. Compare against the numeric level the user picked.
      if (educationLevel >= scheme.minEducation) {
        score += 10;
      }

      // ---------------- STATE (10 pts) ----------------
      if (
        scheme.state.includes("All India") ||
        scheme.state.includes(formData.state)
      ) {
        score += 10;
      }

      // ---------------- CATEGORY (10 pts) ----------------
      if (categoryMatches(scheme, formData)) {
        score += 10;
      }

      // ---------------- OCCUPATION + SPECIAL FLAGS (10 pts) ----------------
      if (
        occupationMatches(scheme, formData) &&
        specialFlagsSatisfied(scheme, formData)
      ) {
        score += 10;
      }

      return {
        ...scheme,
        match: Math.min(score, 100),
      };
    });

    matchedSchemes.sort((a, b) => b.match - a.match);

    setRecommendedScheme(matchedSchemes[0]);
    setShowResult(true);
  };

  // ================= RESULT PAGE =================

  if (showResult) {
    const educationLevel = Number(formData.educationLevel);

    return (
      <div className="form-page">

        <nav className="navbar">

          <div className="logo">

            <span>🤝</span>

            <div>
              <h2>Scheme Saathi</h2>
              <p>Your path to the right scheme</p>
            </div>

          </div>

        </nav>


        <div className="result-container">

          <button
            className="back-btn"
            onClick={() => setShowResult(false)}
          >
            ← Back to Form
          </button>


          <div className="form-header">

            <div className="form-badge">
              🎯 Smart Scheme Matching
            </div>

            <h1>Your Recommended Scheme</h1>

            <p>
              Based on the information you provided,
              we found a suitable scheme for you.
            </p>

          </div>


          {recommendedScheme && (

            <div className="scheme-result-card">

              {/* TOP SECTION */}

              <div className="result-top">

                <div>

                  <span className="best-match">
                    🎯 Best Match
                  </span>

                  <h2>
                    {recommendedScheme.name}
                  </h2>

                  <p>
                    A suitable scheme based on your
                    purpose, income and project
                    requirements.
                  </p>

                </div>


                <div className="match-score">

                  <strong>
                    {recommendedScheme.match}%
                  </strong>

                  <span>
                    Match
                  </span>

                </div>

              </div>


              {/* ELIGIBILITY */}

              <div className="result-section">

                <h3>
                  ✓ Why you're eligible
                </h3>

                <p>
                  Your information was compared
                  with the eligibility criteria of
                  this scheme.
                </p>


                <div className="eligibility-list">

                  {/* Purpose */}

                  <div>

                    {recommendedScheme.purpose ===
                      formData.purpose
                      ? "✓ Purpose eligibility"
                      : "✗ Purpose does not match"}

                  </div>


                  {/* Age */}
                  {/* FIX: this used to be a stray editable <input> instead
                      of an eligibility readout like every other field. */}

                  <div>

                    {Number(formData.age) >= recommendedScheme.minAge &&
                      Number(formData.age) <= recommendedScheme.maxAge

                      ? "✓ Age eligibility"

                      : "✗ Age outside eligible range"}

                  </div>


                  {/* Income */}

                  <div>

                    {Number(formData.income) <=
                      recommendedScheme.maxIncome

                      ? "✓ Income eligibility"

                      : "✗ Income exceeds eligibility limit"}

                  </div>


                  {/* Project Cost */}

                  <div>

                    {Number(formData.projectCost) <=
                      recommendedScheme.maxProjectCost

                      ? "✓ Project cost suitable"

                      : "✗ Project cost exceeds limit"}

                  </div>


                  {/* Education */}

                  <div>

                    {educationLevel >= recommendedScheme.minEducation

                      ? "✓ Education eligibility"

                      : "✗ Education requirement not satisfied"}

                  </div>


                  {/* State */}

                  <div>

                    {recommendedScheme.state.includes(
                      "All India"
                    ) ||
                      recommendedScheme.state.includes(
                        formData.state
                      )

                      ? "✓ Location eligibility"

                      : "✗ Location not covered"}

                  </div>


                  {/* Category */}

                  <div>

                    {categoryMatches(recommendedScheme, formData)

                      ? "✓ Category eligibility"

                      : "✗ Category requirement not satisfied"}

                  </div>


                  {/* Occupation / special eligibility */}

                  <div>

                    {occupationMatches(recommendedScheme, formData) &&
                      specialFlagsSatisfied(recommendedScheme, formData)

                      ? "✓ Occupation / special eligibility"

                      : "✗ Occupation or special eligibility not satisfied"}

                  </div>

                </div>

              </div>


              {/* SCHEME DETAILS */}

              <div className="scheme-details">

                <div className="detail-box">

                  <span>💰</span>

                  <small>
                    Maximum Loan
                  </small>

                  <strong>
                    {recommendedScheme.maxLoan}
                  </strong>

                </div>


                <div className="detail-box">

                  <span>📊</span>

                  <small>
                    Interest Rate
                  </small>

                  <strong>
                    {recommendedScheme.interest}
                  </strong>

                </div>


                <div className="detail-box">

                  <span>💳</span>

                  <small>
                    Estimated EMI
                  </small>

                  <strong>
                    {recommendedScheme.emi}
                  </strong>

                </div>

              </div>


              {/* SUBSIDY / BENEFITS */}
              {/* FIX: schemes never had a `subsidy` string field - only a
                  `benefits` array. Render that instead of a blank field. */}

              <div className="result-section">

                <h3>
                  💰 Financial Benefit
                </h3>

                <ul className="documents-list">

                  {recommendedScheme.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}

                </ul>

              </div>


              {/* DOCUMENTS */}

              <div className="result-section">

                <h3>
                  📄 Required Documents
                </h3>

                <ul className="documents-list">

                  {recommendedScheme.documents.map(
                    (document, index) => (

                      <li key={index}>
                        {document}
                      </li>

                    )
                  )}

                </ul>

              </div>


              {/* PARTNERS */}

              <div className="result-section">

                <h3>
                  📍 Nearby Channel Partners
                </h3>

                <p>

                  Showing potential partners in:

                  <strong>
                    {" "}
                    {formData.district},{" "}
                    {formData.state}
                  </strong>

                </p>


                <div className="partner-card">
                  🏦 District Financial Centre
                </div>


                <div className="partner-card">

                  🏦 Partner Bank –{" "}
                  {formData.district}

                </div>


                <div className="partner-card">

                  🏢 State Channel Partner –{" "}
                  {formData.state}

                </div>

              </div>

            </div>

          )}

        </div>

      </div>
    );
  }


  // ================= FORM PAGE =================

  if (showForm) {

    return (

      <div className="form-page">

        <nav className="navbar">

          <div className="logo">

            <span>🤝</span>

            <div>
              <h2>Scheme Saathi</h2>
              <p>Your path to the right scheme</p>
            </div>

          </div>

        </nav>


        <div className="form-container">

          <button
            className="back-btn"
            onClick={() => setShowForm(false)}
          >
            ← Back
          </button>


          <div className="form-header">

            <div className="form-badge">
              🎯 Smart Scheme Matching
            </div>

            <h1>
              Tell us about yourself
            </h1>

            <p>
              Provide a few details and we'll find
              suitable government schemes for you.
            </p>

          </div>


          <form onSubmit={handleSubmit}>

            {/* PURPOSE */}

            <div className="form-group">

              <label>
                What do you need help with?
              </label>

              <select
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                required
              >

                <option value="">
                  Select purpose
                </option>

                {PURPOSE_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}

              </select>

            </div>


            {/* AGE */}

            <div className="form-group">

              <label>
                Age
              </label>

              <input
                type="number"
                name="age"
                placeholder="Enter your age"
                value={formData.age}
                onChange={handleChange}
                min="1"
                required
              />

            </div>


            {/* INCOME */}

            <div className="form-group">

              <label>
                Annual Family Income
              </label>

              <div className="input-wrapper">

                <span>₹</span>

                <input
                  type="number"
                  name="income"
                  placeholder="e.g. 300000"
                  value={formData.income}
                  onChange={handleChange}
                  min="0"
                  required
                />

              </div>

            </div>


            {/* PROJECT COST */}

            <div className="form-group">

              <label>
                Estimated Project / Education Cost
              </label>

              <div className="input-wrapper">

                <span>₹</span>

                <input
                  type="number"
                  name="projectCost"
                  placeholder="e.g. 100000"
                  value={formData.projectCost}
                  onChange={handleChange}
                  min="0"
                  required
                />

              </div>

            </div>


            {/* EDUCATION LEVEL */}
            {/* FIX: was a yes/no "currently pursuing education" question that
                could never line up with a scheme's numeric `minEducation`.
                Now asks for highest level completed instead. */}

            <div className="form-group">

              <label>
                Highest Education Level Completed
              </label>

              <select
                name="educationLevel"
                value={formData.educationLevel}
                onChange={handleChange}
                required
              >

                <option value="">
                  Select option
                </option>

                {EDUCATION_LEVEL_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}

              </select>

            </div>


            {/* CATEGORY */}

            <div className="form-group">

              <label>
                Category
              </label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >

                <option value="">
                  Select category
                </option>

                {CATEGORY_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}

              </select>

            </div>


            {/* OCCUPATION */}

            <div className="form-group">

              <label>
                Occupation
              </label>

              <select
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                required
              >

                <option value="">
                  Select occupation
                </option>

                {OCCUPATION_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}

              </select>

            </div>


            {/* STUDENT STATUS */}

            <div className="form-group">

              <label>
                <input
                  type="checkbox"
                  name="isStudent"
                  checked={formData.isStudent}
                  onChange={handleChange}
                  style={{ marginRight: "8px" }}
                />
                I am currently a student
              </label>

            </div>


            {/* PERCENTILE - only relevant once "student" is checked */}

            {formData.isStudent && (

              <div className="form-group">

                <label>
                  Your Last Exam Percentile (if applicable)
                </label>

                <input
                  type="number"
                  name="percentile"
                  placeholder="e.g. 85"
                  value={formData.percentile}
                  onChange={handleChange}
                  min="0"
                  max="100"
                />

              </div>

            )}


            {/* LANDHOLDING */}

            <div className="form-group">

              <label>
                <input
                  type="checkbox"
                  name="ownsLand"
                  checked={formData.ownsLand}
                  onChange={handleChange}
                  style={{ marginRight: "8px" }}
                />
                My family owns agricultural land
              </label>

            </div>


            {/* STATE */}

            <div className="form-group">

              <label>
                State / Union Territory
              </label>

              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
              >

                <option value="">
                  Select State / UT
                </option>

                <option value="Andhra Pradesh">
                  Andhra Pradesh
                </option>

                <option value="Arunachal Pradesh">
                  Arunachal Pradesh
                </option>

                <option value="Assam">
                  Assam
                </option>

                <option value="Bihar">
                  Bihar
                </option>

                <option value="Chhattisgarh">
                  Chhattisgarh
                </option>

                <option value="Goa">
                  Goa
                </option>

                <option value="Gujarat">
                  Gujarat
                </option>

                <option value="Haryana">
                  Haryana
                </option>

                <option value="Himachal Pradesh">
                  Himachal Pradesh
                </option>

                <option value="Jharkhand">
                  Jharkhand
                </option>

                <option value="Karnataka">
                  Karnataka
                </option>

                <option value="Kerala">
                  Kerala
                </option>

                <option value="Madhya Pradesh">
                  Madhya Pradesh
                </option>

                <option value="Maharashtra">
                  Maharashtra
                </option>

                <option value="Manipur">
                  Manipur
                </option>

                <option value="Meghalaya">
                  Meghalaya
                </option>

                <option value="Mizoram">
                  Mizoram
                </option>

                <option value="Nagaland">
                  Nagaland
                </option>

                <option value="Odisha">
                  Odisha
                </option>

                <option value="Punjab">
                  Punjab
                </option>

                <option value="Rajasthan">
                  Rajasthan
                </option>

                <option value="Sikkim">
                  Sikkim
                </option>

                <option value="Tamil Nadu">
                  Tamil Nadu
                </option>

                <option value="Telangana">
                  Telangana
                </option>

                <option value="Tripura">
                  Tripura
                </option>

                <option value="Uttar Pradesh">
                  Uttar Pradesh
                </option>

                <option value="Uttarakhand">
                  Uttarakhand
                </option>

                <option value="West Bengal">
                  West Bengal
                </option>

                <option value="Andaman and Nicobar Islands">
                  Andaman and Nicobar Islands
                </option>

                <option value="Chandigarh">
                  Chandigarh
                </option>

                <option value="Dadra and Nagar Haveli and Daman and Diu">
                  Dadra and Nagar Haveli and Daman and Diu
                </option>

                <option value="Delhi">
                  Delhi
                </option>

                <option value="Jammu and Kashmir">
                  Jammu and Kashmir
                </option>

                <option value="Ladakh">
                  Ladakh
                </option>

                <option value="Lakshadweep">
                  Lakshadweep
                </option>

                <option value="Puducherry">
                  Puducherry
                </option>

              </select>

            </div>


            {/* DISTRICT */}

            <div className="form-group">

              <label>
                District
              </label>

              <select
                name="district"
                value={formData.district}
                onChange={handleChange}
                required
                disabled={!formData.state}
              >

                <option value="">

                  {formData.state
                    ? "Select District"
                    : "Select State first"}

                </option>


                {formData.state &&
                  districts[formData.state]?.map(
                    (district) => (

                      <option
                        key={district}
                        value={district}
                      >
                        {district}
                      </option>

                    )
                  )}

              </select>

            </div>


            {/* SUBMIT */}

            <button
              className="submit-btn"
              type="submit"
            >
              Find My Scheme →
            </button>

          </form>

        </div>

      </div>
    );
  }


  // ================= HOME PAGE =================

  return (

    <div className="app">

      <nav className="navbar">

        <div className="logo">

          <span>🤝</span>

          <div>
            <h2>Scheme Saathi</h2>
            <p>Your path to the right scheme</p>
          </div>

        </div>


        <div className="nav-right">

          <button className="language-btn">
            हिन्दी
          </button>

          <button className="login-btn">
            Login
          </button>

        </div>

      </nav>


      <main className="hero">

        <div className="hero-content">

          <div className="badge">
            🇮🇳 Government Scheme Assistance
          </div>


          <h1>

            Find the Right

            <span>
              {" "}Government Scheme{" "}
            </span>

            for You

          </h1>


          <p className="hero-text">

            Tell us about your needs and get
            personalized scheme recommendations,
            financial guidance and nearby eligible
            channel partners.

          </p>


          <button
            className="primary-btn"
            onClick={() => setShowForm(true)}
          >

            Find My Scheme

            <span>→</span>

          </button>


          <p className="small-text">

            Simple • Personalized • Accessible

          </p>

        </div>


        <div className="hero-card">

          <div className="card-header">

            <span className="card-icon">
              🎯
            </span>

            <div>

              <h3>
                Smart Scheme Matching
              </h3>

              <p>
                Get recommendations based
                on your needs
              </p>

            </div>

          </div>


          <div className="match-box">

            <div className="match-top">

              <span>
                Best Match
              </span>

              <strong>

                {recommendedScheme
                  ? `${recommendedScheme.match}%`
                  : "94%"}

              </strong>

            </div>


            <h3>

              {recommendedScheme
                ? recommendedScheme.name
                : "Micro Finance Scheme"}

            </h3>


            <div className="checks">

              <p>
                ✓ Income eligibility
              </p>

              <p>
                ✓ Purpose eligibility
              </p>

              <p>
                ✓ Project cost suitable
              </p>

            </div>

          </div>


          <div className="card-footer">

            <div>

              <span>💰</span>

              <p>
                Financial Calculator
              </p>

            </div>


            <div>

              <span>📍</span>

              <p>
                Nearby Partners
              </p>

            </div>

          </div>

        </div>

      </main>


      <section className="features">

        <div className="feature">

          <div className="feature-icon">
            🎯
          </div>

          <h3>
            Smart Matching
          </h3>

          <p>
            Find schemes that best match
            your income, purpose and
            requirements.
          </p>

        </div>


        <div className="feature">

          <div className="feature-icon">
            💰
          </div>

          <h3>
            Financial Calculator
          </h3>

          <p>
            Estimate your EMI and understand
            your potential repayment.
          </p>

        </div>


        <div className="feature">

          <div className="feature-icon">
            📍
          </div>

          <h3>
            Find Nearby Partners
          </h3>

          <p>
            Locate eligible channel partners
            near your location.
          </p>

        </div>

      </section>

    </div>
  );
}

export default App;
