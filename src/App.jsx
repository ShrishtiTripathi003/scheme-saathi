import { useMemo, useState } from "react";
import "./App.css";
import { districts } from "./districts";
import {
  AVAILABLE_LANGUAGES,
  getTranslations,
} from "./translations";

import {
  schemes,
  getMatchedSchemes,
  PURPOSE_OPTIONS,
  CATEGORY_OPTIONS,
  OCCUPATION_OPTIONS,
  PROJECT_TYPE_OPTIONS,
  EDUCATION_LEVELS,
  SCHEME_OPTIONS_BY_PURPOSE,
} from "./schemes";

// ============================================================
// STATE COORDINATES
// ============================================================

const stateCapitals = {
  "Andhra Pradesh": { lat: 16.5062, lng: 80.648 },
  "Arunachal Pradesh": { lat: 27.0844, lng: 93.6053 },
  Assam: { lat: 26.1445, lng: 91.7362 },
  Bihar: { lat: 25.5941, lng: 85.1376 },
  Chhattisgarh: { lat: 21.2514, lng: 81.6296 },
  Goa: { lat: 15.4909, lng: 73.8278 },
  Gujarat: { lat: 23.2156, lng: 72.6369 },
  Haryana: { lat: 30.7333, lng: 76.7794 },
  "Himachal Pradesh": { lat: 31.1048, lng: 77.1734 },
  Jharkhand: { lat: 23.3441, lng: 85.3096 },
  Karnataka: { lat: 12.9716, lng: 77.5946 },
  Kerala: { lat: 8.5241, lng: 76.9366 },
  "Madhya Pradesh": { lat: 23.2599, lng: 77.4126 },
  Maharashtra: { lat: 19.076, lng: 72.8777 },
  Manipur: { lat: 24.817, lng: 93.9368 },
  Meghalaya: { lat: 25.5788, lng: 91.8933 },
  Mizoram: { lat: 23.7271, lng: 92.7176 },
  Nagaland: { lat: 25.6751, lng: 94.1086 },
  Odisha: { lat: 20.2961, lng: 85.8245 },
  Punjab: { lat: 30.7333, lng: 76.7794 },
  Rajasthan: { lat: 26.9124, lng: 75.7873 },
  Sikkim: { lat: 27.3389, lng: 88.6065 },
  "Tamil Nadu": { lat: 13.0827, lng: 80.2707 },
  Telangana: { lat: 17.4065, lng: 78.4772 },
  Tripura: { lat: 23.8315, lng: 91.2868 },
  "Uttar Pradesh": { lat: 26.8467, lng: 80.9462 },
  Uttarakhand: { lat: 30.3165, lng: 78.0322 },
  "West Bengal": { lat: 22.5726, lng: 88.3639 },
  "Andaman and Nicobar Islands": {
    lat: 11.7401,
    lng: 92.6586,
  },
  Chandigarh: {
    lat: 30.7333,
    lng: 76.7794,
  },
  "Dadra and Nagar Haveli and Daman and Diu": {
    lat: 20.3974,
    lng: 72.8328,
  },
  Delhi: {
    lat: 28.6139,
    lng: 77.209,
  },
  "Jammu and Kashmir": {
    lat: 34.0837,
    lng: 74.7973,
  },
  Ladakh: {
    lat: 34.1526,
    lng: 77.5771,
  },
  Lakshadweep: {
    lat: 10.8505,
    lng: 72.1833,
  },
  Puducherry: {
    lat: 11.9416,
    lng: 79.8083,
  },
};

// ============================================================
// PARTNERS
//
// IMPORTANT:
// These IDs must match the scheme IDs in schemes.js.
// ============================================================

const mockPartners = [
  {
    id: 1,
    name: "Rural Development Agency",
    type: "State Channel Agency",
    lat: 26.8467,
    lng: 80.9462,
    location: "Lucknow, Uttar Pradesh",
    supportedSchemes: [
      "nsfdc-mfs",
      "nsfdc-amy",
      "nsfdc-term-loan",
      "nsfdc-uny",
    ],
    fundUtilization: 68,
    npaStatus: "Active",
  },
  {
    id: 2,
    name: "Regional Rural Bank",
    type: "RRB",
    lat: 25.5941,
    lng: 85.1376,
    location: "Patna, Bihar",
    supportedSchemes: [
      "nsfdc-mfs",
      "nsfdc-amy",
      "nsfdc-term-loan",
    ],
    fundUtilization: 74,
    npaStatus: "Active",
  },
  {
    id: 3,
    name: "District Cooperative Bank",
    type: "Bank",
    lat: 19.076,
    lng: 72.8777,
    location: "Mumbai, Maharashtra",
    supportedSchemes: [
      "nsfdc-term-loan",
      "nsfdc-uny",
    ],
    fundUtilization: 92,
    npaStatus: "Active",
  },
  {
    id: 4,
    name: "State MSME Finance Corporation",
    type: "State Channel Agency",
    lat: 22.5726,
    lng: 88.3639,
    location: "Kolkata, West Bengal",
    supportedSchemes: [
      "nsfdc-mfs",
      "nsfdc-amy",
      "nsfdc-uny",
    ],
    fundUtilization: 78,
    npaStatus: "Active",
  },
  {
    id: 5,
    name: "Partner NBFC-MFI",
    type: "NBFC-MFI",
    lat: 12.9716,
    lng: 77.5946,
    location: "Bengaluru, Karnataka",
    supportedSchemes: [
      "nsfdc-mfs",
      "nsfdc-amy",
      "nsfdc-uny",
    ],
    fundUtilization: 61,
    npaStatus: "Active",
  },
  {
    id: 6,
    name: "Education Finance Bank",
    type: "PSB",
    lat: 28.6139,
    lng: 77.209,
    location: "New Delhi",
    supportedSchemes: ["nsfdc-els"],
    fundUtilization: 70,
    npaStatus: "Active",
  },
  {
    id: 7,
    name: "Regional Credit Agency",
    type: "RRB",
    lat: 17.4065,
    lng: 78.4772,
    location: "Hyderabad, Telangana",
    supportedSchemes: [
      "nsfdc-els",
      "nsfdc-uny",
    ],
    fundUtilization: 55,
    npaStatus: "NPA",
  },
  {
    id: 8,
    name: "District Rural Finance Office",
    type: "State Channel Agency",
    lat: 26.9124,
    lng: 75.7873,
    location: "Jaipur, Rajasthan",
    supportedSchemes: [
      "nsfdc-mfs",
      "nsfdc-amy",
      "nsfdc-term-loan",
    ],
    fundUtilization: 81,
    npaStatus: "Active",
  },
  {
    id: 9,
    name: "Participating Commercial Bank",
    type: "Bank",
    lat: 28.6139,
    lng: 77.209,
    location: "New Delhi",
    supportedSchemes: [
      "pmegp",
      "mudra",
      "pm-svanidhi",
      "kcc",
    ],
    fundUtilization: 64,
    npaStatus: "Active",
  },
];

// ============================================================
// HELPERS
// ============================================================

function haversineDistance(
  lat1,
  lng1,
  lat2,
  lng2
) {
  const earthRadius = 6371;

  const dLat =
    ((lat2 - lat1) * Math.PI) / 180;

  const dLng =
    ((lng2 - lng1) * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(
      (lat1 * Math.PI) / 180
    ) *
      Math.cos(
        (lat2 * Math.PI) / 180
      ) *
      Math.sin(dLng / 2) ** 2;

  const c =
    2 *
    Math.atan2(
      Math.sqrt(a),
      Math.sqrt(1 - a)
    );

  return Number(
    (earthRadius * c).toFixed(2)
  );
}

function findNearestEligiblePartner(
  scheme,
  userLat,
  userLng
) {
  if (
    !scheme ||
    userLat == null ||
    userLng == null
  ) {
    return null;
  }

  const eligiblePartners =
    mockPartners.filter(
      (partner) => {
        const schemeEligible =
          partner.supportedSchemes.includes(
            scheme.id
          );

        const validType = [
          "State Channel Agency",
          "PSB",
          "RRB",
          "NBFC-MFI",
          "Bank",
        ].includes(
          partner.type
        );

        const operational =
          partner.npaStatus !==
            "NPA" &&
          partner.npaStatus !==
            "Overdue";

        const fundEligible =
          partner.fundUtilization <
          90;

        return (
          schemeEligible &&
          validType &&
          operational &&
          fundEligible
        );
      }
    );

  if (
    !eligiblePartners.length
  ) {
    return null;
  }

  return eligiblePartners
    .map((partner) => ({
      ...partner,
      distance:
        haversineDistance(
          userLat,
          userLng,
          partner.lat,
          partner.lng
        ),
    }))
    .sort(
      (a, b) =>
        a.distance - b.distance
    )[0];
}

function calculateEMI(
  principal,
  annualRate,
  months
) {
  if (!principal || !months) {
    return 0;
  }

  if (!annualRate) {
    return Math.round(
      principal / months
    );
  }

  const r =
    annualRate / 12 / 100;

  const emi =
    (principal *
      r *
      (1 + r) ** months) /
    ((1 + r) ** months - 1);

  return Math.round(emi);
}

/*
 * Get a numeric rate only when the scheme has an explicit rate.
 * Variable/lender-determined schemes fall back to 8 for the editable
 * EMI calculator so the UI remains functional. The displayed scheme
 * interest always uses the scheme's actual text field.
 */
function getEMIRate(scheme) {
  if (
    typeof scheme?.interestRate ===
    "number"
  ) {
    return scheme.interestRate;
  }

  const rateMap = {
    "nsfdc-mfs": 6.5,
    "nsfdc-amy": 15,
    "nsfdc-term-loan": 8,
    "nsfdc-uny": 13,
    "nsfdc-els": 6.5,
    "pm-vishwakarma": 5,
    "pm-svanidhi": 7,
    kcc: 7,
  };

  return (
    rateMap[scheme?.id] ?? 8
  );
}

function getSchemeDisplayLoan(
  scheme
) {
  if (
    typeof scheme?.maxLoan ===
    "number"
  ) {
    return `₹${scheme.maxLoan.toLocaleString(
      "en-IN"
    )}`;
  }

  return (
    scheme?.loanAmount ||
    "As applicable"
  );
}

function getPurposeIcon(
  purpose
) {
  const icons = {
    business: "🏪",
    "street-vending": "🏛️",
    artisan: "🔨",
    agriculture: "🌾",
    solar: "☀️",
    livestock: "🐄",
    education: "🎓",
  };

  return icons[purpose] || "📋";
}

// ============================================================
// APP
// ============================================================

function App() {
  const [page, setPage] =
    useState("home");

  const [showLogin, setShowLogin] =
    useState(false);

  const [name, setName] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [otp, setOtp] =
    useState("");

  const [otpSent, setOtpSent] =
    useState(false);

  const [loggedIn, setLoggedIn] =
    useState(false);

  const [language, setLanguage] =
    useState("English");

  const t = useMemo(
    () =>
      getTranslations(language),
    [language]
  );

  const [
    formData,
    setFormData,
  ] = useState({
    purpose: "",
    category: "SC",
    occupation: "",
    projectType: "",
    age: "",
    education: "",
    income: "",
    projectCost: "",
    state: "",
    district: "",
    pincode: "",
    artisanTrade: "",
    farmerStatus: "",
    streetVendorProof: "",
    landAvailable: "",
    existingAgriculturalPump: "",
    isNewEnterprise: "",
    previousGovernmentSubsidy: "",
    previousTarunLoanRepaid: "",
    similarGovernmentLoanLast5Years: "",
    governmentEmployee: "",
    gender: "",
  });

  const [
    recommendedScheme,
    setRecommendedScheme,
  ] = useState(null);

  const [emiLoan, setEmiLoan] =
    useState("");

  const [emiRate, setEmiRate] =
    useState(8);

  const [emiTenure, setEmiTenure] =
    useState(60);

  // ==========================================================
  // LOCATION
  // ==========================================================

  const userCoordinates = useMemo(
    () =>
      stateCapitals[
        formData.state
      ] || null,
    [formData.state]
  );

  const districtOptions = useMemo(
    () =>
      districts[
        formData.state
      ] || null,
    [formData.state]
  );

  // ==========================================================
  // RELEVANT VERIFIED SCHEMES
  // ==========================================================

  const relevantSchemes =
    useMemo(() => {
      if (!formData.purpose) {
        return [];
      }

      return (
        SCHEME_OPTIONS_BY_PURPOSE[
          formData.purpose
        ] || []
      );
    }, [formData.purpose]);

  // ==========================================================
  // NEAREST PARTNER
  // ==========================================================

  const nearestPartner =
    useMemo(() => {
      if (
        !recommendedScheme ||
        !userCoordinates
      ) {
        return null;
      }

      return findNearestEligiblePartner(
        recommendedScheme,
        userCoordinates.lat,
        userCoordinates.lng
      );
    }, [
      recommendedScheme,
      userCoordinates,
    ]);

  const emi =
    calculateEMI(
      Number(emiLoan),
      Number(emiRate),
      Number(emiTenure)
    );

  // ==========================================================
  // LOGIN
  // ==========================================================

  function handleSendOtp(e) {
    e.preventDefault();

    if (!name.trim()) {
      alert(
        "Please enter your name."
      );
      return;
    }

    if (
      !/^[6-9]\d{9}$/.test(
        phone
      )
    ) {
      alert(
        "Please enter a valid 10-digit Indian mobile number."
      );
      return;
    }

    setOtpSent(true);
  }

  function handleVerifyOtp(e) {
    e.preventDefault();

    if (otp !== "123456") {
      alert(
        "Invalid OTP. Use 123456 for this demo."
      );
      return;
    }

    setLoggedIn(true);
    setShowLogin(false);
    setOtpSent(false);
    setOtp("");
    setPage("form");
  }

  function logout() {
    setLoggedIn(false);
    setName("");
    setPhone("");
    setEmail("");
    setOtp("");
    setOtpSent(false);
    setRecommendedScheme(null);
    setPage("home");
  }

  function goToForm() {
    if (loggedIn) {
      setPage("form");
    } else {
      setShowLogin(true);
    }
  }

  // ==========================================================
  // FORM
  // ==========================================================

  function handleChange(e) {
    const {
      name: fieldName,
      value,
    } = e.target;

    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
      ...(fieldName === "state"
        ? { district: "" }
        : {}),
    }));
  }

  function selectPurpose(
    purpose
  ) {
    setFormData((prev) => ({
      ...prev,
      purpose,
      projectType:
        purpose === "education"
          ? "education"
          : purpose === "agriculture"
          ? "agriculture"
          : purpose === "solar"
          ? "solar"
          : purpose === "livestock"
          ? "livestock"
          : purpose === "artisan"
          ? "manufacturing"
          : purpose ===
            "street-vending"
          ? "trading"
          : "",
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !/^\d{6}$/.test(
        formData.pincode
      )
    ) {
      alert(
        "Please enter a valid 6-digit PIN code."
      );
      return;
    }

    // --------------------------------------------------------
    // REAL SCHEME ENGINE
    // --------------------------------------------------------

    const matchedSchemes =
      getMatchedSchemes(
        formData
      );

    if (
      !matchedSchemes.length
    ) {
      setRecommendedScheme(null);

      alert(
        "No eligible scheme was found for the information provided. Please review your age, category, income, purpose, project type and other details."
      );

      return;
    }

    const best =
      matchedSchemes[0];

    setRecommendedScheme(best);

    // --------------------------------------------------------
    // EMI
    // --------------------------------------------------------

    const requestedCost =
      Number(
        formData.projectCost
      );

    const numericMaxLoan =
      typeof best.maxLoan ===
      "number"
        ? best.maxLoan
        : null;

    const estimatedLoan =
      numericMaxLoan != null
        ? Math.min(
            numericMaxLoan,
            Math.round(
              requestedCost * 0.9
            )
          )
        : Math.round(
            requestedCost * 0.9
          );

    setEmiLoan(
      String(
        estimatedLoan ||
          requestedCost ||
          0
      )
    );

    setEmiRate(
      getEMIRate(best)
    );

    setPage("result");
  }

  // ==========================================================
  // LOGIN MODAL
  // ==========================================================

  const loginModal =
    showLogin ? (
      <div
        className="login-overlay"
        onClick={() =>
          setShowLogin(false)
        }
      >
        <div
          className="login-modal"
          onClick={(e) =>
            e.stopPropagation()
          }
        >
          <button
            className="modal-close"
            onClick={() =>
              setShowLogin(false)
            }
          >
            ×
          </button>

          <div className="login-modal-badge">
            {t.login_modal_badge}
          </div>

          <h2>
            {t.login_modal_title}
          </h2>

          <p className="login-subtitle">
            {t.login_modal_subtitle}
          </p>

          {!otpSent ? (
            <form
              onSubmit={
                handleSendOtp
              }
            >
              <div className="login-field">
                <label>
                  {t.name_label}
                </label>

                <input
                  type="text"
                  value={name}
                  onChange={(e) =>
                    setName(
                      e.target.value
                    )
                  }
                  placeholder={
                    t.name_placeholder
                  }
                  required
                />
              </div>

              <div className="login-field">
                <label>
                  {t.mobile_label}
                </label>

                <input
                  type="tel"
                  value={phone}
                  onChange={(e) =>
                    setPhone(
                      e.target.value.replace(
                        /\D/g,
                        ""
                      )
                    )
                  }
                  placeholder={
                    t.mobile_placeholder
                  }
                  maxLength={10}
                  required
                />
              </div>

              <div className="login-field">
                <label>
                  {t.email_label}{" "}
                  <span className="optional-text">
                    {t.optional}
                  </span>
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) =>
                    setEmail(
                      e.target.value
                    )
                  }
                  placeholder={
                    t.email_placeholder
                  }
                />
              </div>

              <button
                className="login-submit"
                type="submit"
              >
                {t.send_otp}
              </button>
            </form>
          ) : (
            <form
              onSubmit={
                handleVerifyOtp
              }
            >
              <div className="otp-sent-box">
                {t.otp_sent_prefix}{" "}
                {phone}
              </div>

              <div className="login-field">
                <label>
                  {t.enter_otp_label}
                </label>

                <input
                  type="text"
                  inputMode="numeric"
                  value={otp}
                  onChange={(e) =>
                    setOtp(
                      e.target.value.replace(
                        /\D/g,
                        ""
                      )
                    )
                  }
                  placeholder={
                    t.otp_placeholder
                  }
                  maxLength={6}
                  required
                />
              </div>

              <button
                className="login-submit"
                type="submit"
              >
                {t.verify_continue}
              </button>

              <button
                type="button"
                className="resend-btn"
                onClick={() => {
                  setOtp("");
                  setOtpSent(
                    false
                  );
                }}
              >
                {t.change_mobile}
              </button>

              <p className="demo-otp">
                {t.demo_otp_label}{" "}
                <strong>
                  123456
                </strong>
              </p>
            </form>
          )}
        </div>
      </div>
    ) : null;

  // ==========================================================
  // HOME
  // ==========================================================

  if (page === "home") {
    return (
      <>
        <div className="app home-app">
          <nav className="navbar">
            <div className="logo">
              <span>🤝</span>

              <div>
                <h2>
                  Scheme Saathi
                </h2>

                <p>
                  {t.nav_tagline}
                </p>
              </div>
            </div>

            <div className="nav-right">
              <select
                className="language-select"
                value={language}
                onChange={(e) =>
                  setLanguage(
                    e.target.value
                  )
                }
              >
                {AVAILABLE_LANGUAGES.map(
                  (lang) => (
                    <option
                      key={lang}
                      value={lang}
                    >
                      {lang}
                    </option>
                  )
                )}
              </select>

              {loggedIn ? (
                <button
                  className="login-btn"
                  onClick={
                    logout
                  }
                >
                  {t.logout}
                </button>
              ) : (
                <button
                  className="login-btn"
                  onClick={() =>
                    setShowLogin(
                      true
                    )
                  }
                >
                  {t.login}
                </button>
              )}
            </div>
          </nav>

          <main className="hero">
            <div className="hero-content">
              <div className="badge">
                {t.hero_badge}
              </div>

              <h1>
                {t.hero_title_1}{" "}
                <span>
                  {
                    t.hero_title_highlight
                  }
                </span>{" "}
                {t.hero_title_2}
              </h1>

              <p className="hero-text">
                {t.hero_text}
              </p>

              <button
                className="primary-btn"
                onClick={
                  goToForm
                }
              >
                {t.hero_cta}{" "}
                <span>→</span>
              </button>

              <p className="small-text">
                {t.hero_disclaimer}
              </p>
            </div>

            <div className="hero-card">
              <div className="card-header">
                <div className="card-icon">
                  📄
                </div>

                <div>
                  <h3>
                    SCHEME MATCH
                  </h3>

                  <p>
                    Personalized
                    recommendation
                    preview
                  </p>
                </div>
              </div>

              <div className="match-box">
                <div className="match-preview-lines">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="preview-result">
                  <div className="preview-badge">
                    94%
                  </div>

                  <div>
                    <small>
                      {
                        t.match_preview_label
                      }
                    </small>

                    <h3>
                      {
                        t.match_preview_title
                      }
                    </h3>
                  </div>
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
                {t.feature1_title}
              </h3>

              <p>
                {t.feature1_text}
              </p>
            </div>

            <div className="feature">
              <div className="feature-icon">
                💰
              </div>

              <h3>
                {t.feature2_title}
              </h3>

              <p>
                {t.feature2_text}
              </p>
            </div>

            <div className="feature">
              <div className="feature-icon">
                📋
              </div>

              <h3>
                {t.feature3_title}
              </h3>

              <p>
                {t.feature3_text}
              </p>
            </div>

            <div className="feature">
              <div className="feature-icon">
                🌐
              </div>

              <h3>
                {t.feature4_title}
              </h3>

              <p>
                {t.feature4_text}
              </p>
            </div>
          </section>
        </div>

        {loginModal}
      </>
    );
  }

  // ==========================================================
  // FORM
  // ==========================================================

  if (page === "form") {
    return (
      <div className="form-page">
        <div className="form-container">
          <button
            className="back-btn"
            onClick={() =>
              setPage("home")
            }
          >
            {t.back}
          </button>

          <div className="form-header">
            <div className="form-badge">
              {t.form_badge}
            </div>

            <h1>
              {t.form_title}
            </h1>

            <p>
              {t.form_subtitle}
            </p>
          </div>

          <form
            onSubmit={
              handleSubmit
            }
          >
            {/* ==================================================
                PURPOSE
            ================================================== */}

            <section className="form-section">
              <label>
                {t.need_question}
              </label>

              <div className="choice-grid">
                {PURPOSE_OPTIONS.map(
                  (purpose) => (
                    <button
                      key={
                        purpose.value
                      }
                      type="button"
                      className={
                        formData.purpose ===
                        purpose.value
                          ? "choice active"
                          : "choice"
                      }
                      onClick={() =>
                        selectPurpose(
                          purpose.value
                        )
                      }
                    >
                      <span>
                        {getPurposeIcon(
                          purpose.value
                        )}
                      </span>

                      <span>
                        {
                          purpose
                            .label
                            .en
                        }
                      </span>
                    </button>
                  )
                )}
              </div>

              {/* VERIFIED SCHEME NAMES */}

              {formData.purpose &&
                relevantSchemes.length >
                  0 && (
                  <div className="scheme-options-preview">
                    <label>
                      Relevant Government
                      Schemes
                    </label>

                    <div className="scheme-name-list">
                      {relevantSchemes.map(
                        (scheme) => (
                          <div
                            key={
                              scheme.value
                            }
                            className="scheme-option-item"
                          >
                            ✓{" "}
                            {
                              scheme.label
                            }
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}

              <div className="form-two-column">
                <div>
                  <label>
                    {t.label_category}
                  </label>

                  <select
                    name="category"
                    value={
                      formData.category
                    }
                    onChange={
                      handleChange
                    }
                    required
                  >
                    <option value="">
                      Select category
                    </option>

                    {CATEGORY_OPTIONS.map(
                      (
                        category
                      ) => (
                        <option
                          key={
                            category.value
                          }
                          value={
                            category.value
                          }
                        >
                          {
                            category.label
                          }
                        </option>
                      )
                    )}
                  </select>
                </div>

                <div>
                  <label>
                    {t.label_occupation}
                  </label>

                  <select
                    name="occupation"
                    value={
                      formData.occupation
                    }
                    onChange={
                      handleChange
                    }
                    required
                  >
                    <option value="">
                      {t.select_occupation}
                    </option>

                    {OCCUPATION_OPTIONS.map(
                      (
                        occupation
                      ) => (
                        <option
                          key={
                            occupation.value
                          }
                          value={
                            occupation.value
                          }
                        >
                          {
                            occupation
                              .label
                              .en
                          }
                        </option>
                      )
                    )}
                  </select>
                </div>
              </div>

              <label>
                {t.label_project_type}
              </label>

              <select
                name="projectType"
                value={
                  formData.projectType
                }
                onChange={
                  handleChange
                }
                required
              >
                <option value="">
                  {t.select_project_type}
                </option>

                {PROJECT_TYPE_OPTIONS.map(
                  (type) => (
                    <option
                      key={
                        type.value
                      }
                      value={
                        type.value
                      }
                    >
                      {
                        type.label
                          .en
                      }
                    </option>
                  )
                )}
              </select>
            </section>

            {/* ==================================================
                PERSONAL / FINANCIAL
            ================================================== */}

            <section className="form-section">
              <div className="form-two-column">
                <div>
                  <label>
                    {t.label_age}
                  </label>

                  <input
                    type="number"
                    name="age"
                    value={
                      formData.age
                    }
                    onChange={
                      handleChange
                    }
                    min="1"
                    max="100"
                    required
                  />
                </div>

                <div>
                  <label>
                    {
                      t.label_education_level
                    }
                  </label>

                  <select
                    name="education"
                    value={
                      formData.education
                    }
                    onChange={
                      handleChange
                    }
                    required
                  >
                    <option value="">
                      {
                        t.select_education_level
                      }
                    </option>

                    {EDUCATION_LEVELS.map(
                      (level) => (
                        <option
                          key={
                            level.value
                          }
                          value={
                            level.value
                          }
                        >
                          {
                            level.label
                              .en
                          }
                        </option>
                      )
                    )}
                  </select>
                </div>

                <div>
                  <label>
                    {t.label_income}
                  </label>

                  <div className="money-input">
                    <span>₹</span>

                    <input
                      type="number"
                      name="income"
                      value={
                        formData.income
                      }
                      onChange={
                        handleChange
                      }
                      min="0"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label>
                    {
                      t.label_project_cost
                    }
                  </label>

                  <div className="money-input">
                    <span>₹</span>

                    <input
                      type="number"
                      name="projectCost"
                      value={
                        formData.projectCost
                      }
                      onChange={
                        handleChange
                      }
                      min="0"
                      required
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* ==================================================
                ADDITIONAL SCHEME-SPECIFIC DATA
            ================================================== */}

            {formData.purpose ===
              "artisan" && (
              <section className="form-section">
                <label>
                  PM Vishwakarma
                  Trade
                </label>

                <input
                  type="text"
                  name="artisanTrade"
                  value={
                    formData.artisanTrade
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Enter your traditional trade"
                />
              </section>
            )}

            {formData.purpose ===
              "street-vending" && (
              <section className="form-section">
                <label>
                  Street Vendor
                  Identification /
                  Proof
                </label>

                <select
                  name="streetVendorProof"
                  value={
                    formData.streetVendorProof
                  }
                  onChange={
                    handleChange
                  }
                >
                  <option value="">
                    Select
                  </option>
                  <option value="yes">
                    Yes
                  </option>
                  <option value="no">
                    No
                  </option>
                </select>
              </section>
            )}

            {(formData.purpose ===
              "agriculture" ||
              formData.purpose ===
                "solar" ||
              formData.purpose ===
                "livestock") && (
              <section className="form-section">
                <div className="form-two-column">
                  <div>
                    <label>
                      Farmer status
                    </label>

                    <select
                      name="farmerStatus"
                      value={
                        formData.farmerStatus
                      }
                      onChange={
                        handleChange
                      }
                    >
                      <option value="">
                        Select
                      </option>
                      <option value="yes">
                        Yes
                      </option>
                      <option value="no">
                        No
                      </option>
                    </select>
                  </div>

                  {formData.purpose ===
                    "solar" && (
                    <div>
                      <label>
                        Existing
                        agricultural
                        pump
                      </label>

                      <select
                        name="existingAgriculturalPump"
                        value={
                          formData.existingAgriculturalPump
                        }
                        onChange={
                          handleChange
                        }
                      >
                        <option value="">
                          Select
                        </option>
                        <option value="yes">
                          Yes
                        </option>
                        <option value="no">
                          No
                        </option>
                      </select>
                    </div>
                  )}

                  {formData.purpose ===
                    "livestock" && (
                    <div>
                      <label>
                        Land
                        arrangement
                      </label>

                      <select
                        name="landAvailable"
                        value={
                          formData.landAvailable
                        }
                        onChange={
                          handleChange
                        }
                      >
                        <option value="">
                          Select
                        </option>
                        <option value="yes">
                          Yes
                        </option>
                        <option value="no">
                          No
                        </option>
                      </select>
                    </div>
                  )}
                </div>
              </section>
            )}

            {formData.purpose ===
              "business" && (
              <section className="form-section">
                <div className="form-two-column">
                  <div>
                    <label>
                      Is this a new
                      enterprise?
                    </label>

                    <select
                      name="isNewEnterprise"
                      value={
                        formData.isNewEnterprise
                      }
                      onChange={
                        handleChange
                      }
                    >
                      <option value="">
                        Select
                      </option>
                      <option value="yes">
                        Yes
                      </option>
                      <option value="no">
                        No
                      </option>
                    </select>
                  </div>

                  <div>
                    <label>
                      Previous
                      government
                      subsidy for
                      this unit?
                    </label>

                    <select
                      name="previousGovernmentSubsidy"
                      value={
                        formData.previousGovernmentSubsidy
                      }
                      onChange={
                        handleChange
                      }
                    >
                      <option value="">
                        Select
                      </option>
                      <option value="yes">
                        Yes
                      </option>
                      <option value="no">
                        No
                      </option>
                    </select>
                  </div>
                </div>
              </section>
            )}

            {/* ==================================================
                LOCATION
            ================================================== */}

            <section className="form-section">
              <div className="form-three-column">
                <div>
                  <label>
                    {t.label_state}
                  </label>

                  <select
                    name="state"
                    value={
                      formData.state
                    }
                    onChange={
                      handleChange
                    }
                    required
                  >
                    <option value="">
                      {t.select_state}
                    </option>

                    {Object.keys(
                      stateCapitals
                    ).map(
                      (state) => (
                        <option
                          key={state}
                          value={state}
                        >
                          {state}
                        </option>
                      )
                    )}
                  </select>
                </div>

                <div>
                  <label>
                    {t.label_district}
                  </label>

                  {districtOptions ? (
                    <select
                      name="district"
                      value={
                        formData.district
                      }
                      onChange={
                        handleChange
                      }
                      required
                    >
                      <option value="">
                        {
                          t.select_district
                        }
                      </option>

                      {districtOptions.map(
                        (
                          district
                        ) => (
                          <option
                            key={
                              district
                            }
                            value={
                              district
                            }
                          >
                            {
                              district
                            }
                          </option>
                        )
                      )}
                    </select>
                  ) : (
                    <input
                      type="text"
                      name="district"
                      value={
                        formData.district
                      }
                      onChange={
                        handleChange
                      }
                      placeholder={
                        t.enter_district
                      }
                      required
                    />
                  )}
                </div>

                <div>
                  <label>
                    {t.label_pincode}
                  </label>

                  <input
                    type="text"
                    inputMode="numeric"
                    name="pincode"
                    value={
                      formData.pincode
                    }
                    onChange={(e) =>
                      setFormData(
                        (prev) => ({
                          ...prev,
                          pincode:
                            e.target.value.replace(
                              /\D/g,
                              ""
                            ),
                        })
                      )
                    }
                    placeholder={
                      t.pincode_placeholder
                    }
                    maxLength={6}
                    required
                  />
                </div>
              </div>

              <p className="location-note">
                {t.location_note}
              </p>
            </section>

            <button
              className="submit-btn"
              type="submit"
            >
              {t.submit_cta}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ==========================================================
  // RESULT
  // ==========================================================

  if (
    page === "result" &&
    recommendedScheme
  ) {
    const mapUrl =
      userCoordinates
        ? `https://www.openstreetmap.org/export/embed.html?bbox=${
            userCoordinates.lng -
            4
          }%2C${
            userCoordinates.lat -
            3
          }%2C${
            userCoordinates.lng +
            4
          }%2C${
            userCoordinates.lat +
            3
          }&layer=mapnik&marker=${
            userCoordinates.lat
          }%2C${
            userCoordinates.lng
          }`
        : null;

    const checks =
      Array.isArray(
        recommendedScheme.checks
      )
        ? recommendedScheme.checks
        : [];

    const isStrongMatch =
      recommendedScheme.match >=
      70;

    return (
      <div className="form-page">
        <div className="result-container">
          <button
            className="back-btn"
            onClick={() =>
              setPage("form")
            }
          >
            {t.back}
          </button>

          <div className="form-header">
            <div className="form-badge">
              {t.form_badge}
            </div>

            <h1>
              {t.result_title}
            </h1>

            <p>
              {t.result_subtitle}
            </p>
          </div>

          {!isStrongMatch && (
            <div className="match-warning">
              {t.low_match_warning}
            </div>
          )}

          <div className="scheme-result-card">
            <div className="result-top">
              <div>
                <span
                  className={
                    isStrongMatch
                      ? "best-match"
                      : "best-match partial"
                  }
                >
                  {isStrongMatch
                    ? t.best_match
                    : t.partial_match}
                </span>

                <h2>
                  {
                    recommendedScheme.name
                  }
                </h2>

                <p>
                  {
                    recommendedScheme.description
                  }
                </p>
              </div>

              <div className="match-score">
                <strong>
                  {
                    recommendedScheme.match
                  }
                  %
                </strong>

                <span>
                  {
                    t.result_match_label
                  }
                </span>
              </div>
            </div>

            {/* =================================================
                ELIGIBILITY
            ================================================= */}

            <div className="result-section">
              <h3>
                {t.eligibility_title}
              </h3>

              <div className="eligibility-list">
                {checks.length >
                0 ? (
                  checks.map(
                    (check) => (
                      <div
                        key={
                          check.key
                        }
                        className={
                          check.ok
                            ? "check-pass"
                            : "check-fail"
                        }
                      >
                        {check.ok
                          ? "✓"
                          : "✗"}{" "}
                        {
                          check.label
                            .en
                        }
                      </div>
                    )
                  )
                ) : (
                  <div className="check-pass">
                    ✓ Scheme
                    eligibility
                    requirements
                    satisfied.
                  </div>
                )}
              </div>
            </div>

            {/* =================================================
                SCHEME DETAILS
            ================================================= */}

            <div className="scheme-details">
              <div className="detail-box">
                <span>💰</span>

                <small>
                  {t.max_loan}
                </small>

                <strong>
                  {getSchemeDisplayLoan(
                    recommendedScheme
                  )}
                </strong>
              </div>

              <div className="detail-box">
                <span>📊</span>

                <small>
                  {t.interest_rate}
                </small>

                <strong>
                  {
                    recommendedScheme.interest
                  }
                </strong>
              </div>

              <div className="detail-box">
                <span>⏳</span>

                <small>
                  {t.moratorium}
                </small>

                <strong>
                  {
                    recommendedScheme
                      .repayment ||
                    "As applicable"
                  }
                </strong>
              </div>
            </div>

            {/* =================================================
                DOCUMENTS
            ================================================= */}

            <div className="result-section">
              <h3>
                {t.documents_title}
              </h3>

              <ul className="documents-list">
                {(
                  recommendedScheme.documents ||
                  []
                ).map((doc) => (
                  <li key={doc}>
                    {doc}
                  </li>
                ))}
              </ul>
            </div>

            {/* =================================================
                BENEFITS
            ================================================= */}

            {recommendedScheme
              .benefits?.length >
              0 && (
              <div className="result-section">
                <h3>
                  Benefits
                </h3>

                <ul className="documents-list">
                  {recommendedScheme.benefits.map(
                    (benefit) => (
                      <li key={benefit}>
                        {benefit}
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}

            {/* =================================================
                EMI
            ================================================= */}

            <div className="result-section">
              <h3>
                {t.calculator_title}
              </h3>

              <div className="emi-controls">
                <div>
                  <label>
                    {t.loan_amount}
                  </label>

                  <input
                    type="number"
                    value={emiLoan}
                    onChange={(e) =>
                      setEmiLoan(
                        e.target.value
                      )
                    }
                    min="0"
                  />
                </div>

                <div>
                  <label>
                    {
                      t.interest_rate_pct
                    }
                  </label>

                  <input
                    type="number"
                    value={emiRate}
                    step="0.1"
                    min="0"
                    onChange={(e) =>
                      setEmiRate(
                        e.target.value
                      )
                    }
                  />
                </div>

                <div>
                  <label>
                    {
                      t.tenure_months
                    }
                  </label>

                  <input
                    type="number"
                    value={emiTenure}
                    min="1"
                    onChange={(e) =>
                      setEmiTenure(
                        e.target.value
                      )
                    }
                  />
                </div>
              </div>

              <div className="emi-result">
                <span>
                  {
                    t.estimated_emi
                  }
                </span>

                <strong>
                  ₹
                  {emi.toLocaleString(
                    "en-IN"
                  )}
                </strong>
              </div>
            </div>

            {/* =================================================
                GEO-SPATIAL
            ================================================= */}

            <div className="result-section">
              <h3>
                {t.partner_title}
              </h3>

              <p>
                {
                  t.partner_desc_prefix
                }{" "}
                <strong>
                  {
                    recommendedScheme.name
                  }
                </strong>{" "}
                {
                  t.partner_desc_suffix
                }
              </p>

              {nearestPartner ? (
                <>
                  <div className="partner-card">
                    <div className="partner-card-header">
                      <div>
                        <div className="partner-card-name">
                          {
                            nearestPartner.name
                          }
                        </div>

                        <div className="partner-card-type">
                          {
                            nearestPartner.type
                          }
                        </div>
                      </div>

                      <div className="partner-distance">
                        {
                          nearestPartner.distance
                        }{" "}
                        km
                      </div>
                    </div>

                    <div className="partner-info-grid">
                      <div className="partner-info-item">
                        <span className="partner-info-label">
                          Location
                        </span>

                        <span className="partner-info-value">
                          {
                            nearestPartner.location
                          }
                        </span>
                      </div>

                      <div className="partner-info-item">
                        <span className="partner-info-label">
                          Fund
                          Utilization
                        </span>

                        <span className="partner-info-value">
                          {
                            nearestPartner.fundUtilization
                          }
                          %
                        </span>
                      </div>

                      <div className="partner-info-item">
                        <span className="partner-info-label">
                          NPA Status
                        </span>

                        <span className="partner-info-value partner-status-active">
                          {
                            nearestPartner.npaStatus
                          }
                        </span>
                      </div>

                      <div className="partner-info-item">
                        <span className="partner-info-label">
                          Distance
                        </span>

                        <span className="partner-info-value">
                          {
                            nearestPartner.distance
                          }{" "}
                          km
                        </span>
                      </div>
                    </div>

                    <div className="partner-schemes">
                      <strong>
                        Supported Scheme:
                      </strong>{" "}
                      {
                        nearestPartner.supportedSchemes
                          .map(
                            (id) =>
                              schemes.find(
                                (scheme) =>
                                  scheme.id ===
                                  id
                              )?.name ||
                              id
                          )
                          .join(", ")
                      }
                    </div>
                  </div>

                  <div className="map-section">
                    <h4>
                      {t.map_title}
                    </h4>

                    {mapUrl ? (
                      <div className="partner-map">
                        <iframe
                          title="Nearest channel partner map"
                          src={
                            mapUrl
                          }
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="partner-empty">
                        {
                          t.map_unavailable
                        }
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <div className="partner-empty">
                  <strong>
                    {
                      t.no_partner_title
                    }
                  </strong>

                  <p>
                    {
                      t.no_partner_desc
                    }
                  </p>
                </div>
              )}
            </div>

            {/* =================================================
                APPLICATION TRACKING
            ================================================= */}

            {loggedIn && (
              <div className="tracking-card">
                <h3>
                  {
                    t.tracking_title
                  }
                </h3>

                <div className="tracking-row">
                  <span>
                    {
                      t.tracking_name
                    }
                  </span>

                  <strong>
                    {name}
                  </strong>
                </div>

                <div className="tracking-row">
                  <span>
                    {
                      t.tracking_mobile
                    }
                  </span>

                  <strong>
                    +91 {phone}
                  </strong>
                </div>

                {email && (
                  <div className="tracking-row">
                    <span>
                      {
                        t.tracking_email
                      }
                    </span>

                    <strong>
                      {email}
                    </strong>
                  </div>
                )}

                <div className="tracking-row">
                  <span>
                    {
                      t.tracking_scheme
                    }
                  </span>

                  <strong>
                    {
                      recommendedScheme.name
                    }
                  </strong>
                </div>

                <div className="tracking-row">
                  <span>
                    {
                      t.tracking_location
                    }
                  </span>

                  <strong>
                    {formData.district
                      ? `${formData.district}, `
                      : ""}
                    {
                      formData.state
                    }{" "}
                    {formData.pincode
                      ? `- ${formData.pincode}`
                      : ""}
                  </strong>
                </div>
              </div>
            )}

            <button
              className="submit-btn result-home-btn"
              onClick={() =>
                setPage("home")
              }
            >
              {t.back_home}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default App;
