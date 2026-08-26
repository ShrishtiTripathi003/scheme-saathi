import "./App.css";
import { useState } from "react";
import { districts } from "./districts";

const schemes = [
  {
    name: "Mukhyamantri Yuva Udyami Vikas Abhiyan (CM-YUVA)",
    purpose: "business",

    minAge: 21,
    maxAge: 40,

    minEducation: 8,

    maxIncome: Infinity,
    maxProjectCost: 500000,

    education: "no",

    maxLoan: "₹5,00,000",
    interest: "0%",
    emi: "Interest-free",

    subsidy: "10% Margin Money Subsidy",

    state: ["Uttar Pradesh"],

    documents: [
      "Aadhaar Card",
      "Age Proof",
      "Education / Training Certificate",
      "Project Report",
      "Bank Account Details",
    ],

    officialSource: "UP MSME",
  },

  {
    name: "Prime Minister's Employment Generation Programme (PMEGP)",
    purpose: "business",

    minAge: 18,
    maxAge: Infinity,

    minEducation: 0,

    maxIncome: Infinity,
    maxProjectCost: 2000000,

    education: "no",

    maxLoan: "₹20,00,000",
    interest: "Bank applicable",
    emi: "As per bank loan",

    subsidy: "15%–35% Margin Money Subsidy",

    state: ["All India"],

    documents: [
      "Aadhaar Card",
      "PAN Card",
      "Bank Account Details",
      "Project Report",
      "Education Certificate if applicable",
      "Category Certificate if applicable",
    ],

    officialSource: "Ministry of MSME",
  },

  {
    name: "PMEGP Manufacturing Enterprise",
    purpose: "business",

    minAge: 18,
    maxAge: Infinity,

    minEducation: 8,

    maxIncome: Infinity,
    maxProjectCost: 5000000,

    education: "no",

    maxLoan: "₹50,00,000",
    interest: "Bank applicable",
    emi: "As per bank loan",

    subsidy: "15%–35% Margin Money Subsidy",

    state: ["All India"],

    documents: [
      "Aadhaar Card",
      "PAN Card",
      "Bank Account Details",
      "Project Report",
      "Education Certificate",
      "Category Certificate if applicable",
    ],

    officialSource: "Ministry of MSME",
  },

  {
    name: "Education Support Scheme",
    purpose: "education",

    minAge: 16,
    maxAge: 40,

    minEducation: 0,

    maxIncome: 800000,
    maxProjectCost: 300000,

    education: "yes",

    maxLoan: "₹3,00,000",
    interest: "As applicable",
    emi: "As per loan terms",

    subsidy: "Education Assistance",

    state: ["All India"],

    documents: [
      "Aadhaar Card",
      "Income Certificate",
      "Bank Account Details",
      "Education / Admission Proof",
      "Education Certificate",
    ],

    officialSource: "Scheme Saathi",
  },
];

function App() {
  const [showForm, setShowForm] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [recommendedScheme, setRecommendedScheme] = useState(null);

  const [formData, setFormData] = useState({
    purpose: "",
    age: "",
    income: "",
    projectCost: "",
    education: "",
    state: "",
    district: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // If state changes, reset district
    if (name === "state") {
      setFormData({
        ...formData,
        state: value,
        district: "",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const age = Number(formData.age);
    const income = Number(formData.income);
    const projectCost = Number(formData.projectCost);

    const matchedSchemes = schemes.map((scheme) => {
      let score = 0;

      // ---------------- PURPOSE ----------------
      if (scheme.purpose === formData.purpose) {
        score += 30;
      }

      // ---------------- AGE ----------------
      if (
        age >= scheme.minAge &&
        age <= scheme.maxAge
      ) {
        score += 20;
      }

      // ---------------- INCOME ----------------
      if (income <= scheme.maxIncome) {
        score += 15;
      }

      // ---------------- PROJECT COST ----------------
      if (projectCost <= scheme.maxProjectCost) {
        score += 15;
      }

      // ---------------- EDUCATION ----------------
      if (
        scheme.education === "no" ||
        scheme.education === formData.education
      ) {
        score += 10;
      }

      // ---------------- STATE ----------------
      if (
        scheme.state.includes("All India") ||
        scheme.state.includes(formData.state)
      ) {
        score += 10;
      }

      return {
        ...scheme,
        match: Math.min(score, 100),
      };
    });

    matchedSchemes.sort((a, b) => b.match - a.match);

    console.log("Form Data:", formData);
    console.log("Matched Schemes:", matchedSchemes);

    setRecommendedScheme(matchedSchemes[0]);
    setShowResult(true);
  };

  // ================= RESULT PAGE =================

  if (showResult) {
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

                  <div>

                    {Number(formData.age) >=
                      recommendedScheme.minAge &&
                    Number(formData.age) <=
                      recommendedScheme.maxAge

                      ? "✓ Age eligibility"

                      : `✗ Age requirement: ${recommendedScheme.minAge}–${
                          recommendedScheme.maxAge === Infinity
                            ? "Above"
                            : recommendedScheme.maxAge
                        } years`
                    }

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

                    {recommendedScheme.education === "no" ||
                    recommendedScheme.education ===
                      formData.education

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


              {/* SUBSIDY */}

              <div className="result-section">

                <h3>
                  💰 Financial Benefit
                </h3>

                <p>
                  {recommendedScheme.subsidy}
                </p>

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

                <option value="business">
                  Start / Expand a Business
                </option>

                <option value="education">
                  Education
                </option>

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


            {/* EDUCATION */}

            <div className="form-group">

              <label>
                Are you currently pursuing education?
              </label>

              <select
                name="education"
                value={formData.education}
                onChange={handleChange}
                required
              >

                <option value="">
                  Select option
                </option>

                <option value="yes">
                  Yes
                </option>

                <option value="no">
                  No
                </option>

              </select>

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