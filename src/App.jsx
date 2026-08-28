import { useMemo, useState } from "react";

import {
  ArrowRight,
  Banknote,
  Building2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  FileText,
  Globe,
  GraduationCap,
  Hammer,
  Landmark,
  MapPin,
  Sparkles,
  Store,
  Users,
  Wallet,
  Wheat,
  XCircle,
} from "lucide-react";

import {
  ALL_STATES,
  CATEGORY_OPTIONS,
  EDUCATION_LEVELS,
  getMatchedSchemes,
  OCCUPATION_OPTIONS,
  PROJECT_TYPE_OPTIONS,
  PURPOSE_OPTIONS,
} from "./schemes";

import { districts } from "./districts";

import "./App.css";

/* ============================================================
   TRANSLATION
   ============================================================ */

const STR = {
  navTag: {
    en: "Your path to the right scheme",
    hi: "सही योजना तक आपका रास्ता",
  },

  langBtn: {
    en: "हिन्दी",
    hi: "English",
  },

  heroKicker: {
    en: "Government Scheme Assistance",
    hi: "सरकारी योजना सहायता",
  },

  heroTitle1: {
    en: "Find the right",
    hi: "अपने लिए सही",
  },

  heroTitle2: {
    en: "government scheme",
    hi: "सरकारी योजना",
  },

  heroTitle3: {
    en: "for you",
    hi: "खोजें",
  },

  heroText: {
    en:
      "Answer a short form and get matched schemes, benefits, documents and where to apply.",
    hi:
      "एक छोटा फ़ॉर्म भरें और अपनी जानकारी के अनुसार योजनाएं, लाभ, दस्तावेज़ और आवेदन की जानकारी पाएं।",
  },

  ctaStart: {
    en: "Find my scheme",
    hi: "मेरी योजना खोजें",
  },

  smallTag: {
    en: "Independent guide · Not an official portal",
    hi: "स्वतंत्र मार्गदर्शक · आधिकारिक पोर्टल नहीं",
  },

  feat1h: {
    en: "Matched to you",
    hi: "आपके अनुसार मिलान",
  },

  feat1t: {
    en:
      "We compare your purpose, age, income, education, category, occupation and location.",
    hi:
      "हम उद्देश्य, आयु, आय, शिक्षा, श्रेणी, व्यवसाय और स्थान की तुलना करते हैं।",
  },

  feat2h: {
    en: "Money, made clear",
    hi: "स्पष्ट वित्तीय जानकारी",
  },

  feat2t: {
    en:
      "See loan limits, interest, subsidies and benefits in one place.",
    hi:
      "ऋण सीमा, ब्याज, सब्सिडी और लाभ की जानकारी एक ही जगह देखें।",
  },

  feat3h: {
    en: "Know what to carry",
    hi: "ज़रूरी दस्तावेज़ जानें",
  },

  feat3t: {
    en:
      "Get a simple document checklist and application guidance.",
    hi:
      "ज़रूरी दस्तावेज़ों की सूची और आवेदन की जानकारी पाएं।",
  },

  formBadge: {
    en: "Your details",
    hi: "आपकी जानकारी",
  },

  formTitle: {
    en: "Tell us about yourself",
    hi: "अपने बारे में बताएं",
  },

  formSub: {
    en:
      "Your answers help us rank the most relevant government schemes.",
    hi:
      "आपके उत्तरों से हम आपके लिए सबसे उपयुक्त सरकारी योजनाओं को रैंक करते हैं।",
  },

  partA: {
    en: "PART A — WHAT YOU NEED",
    hi: "भाग A — आपको क्या चाहिए",
  },

  partB: {
    en: "PART B — YOUR DETAILS",
    hi: "भाग B — आपकी जानकारी",
  },

  partC: {
    en: "PART C — ADDITIONAL DETAILS",
    hi: "भाग C — अतिरिक्त जानकारी",
  },

  partD: {
    en: "PART D — YOUR LOCATION",
    hi: "भाग D — आपका स्थान",
  },

  purposeQ: {
    en: "What do you need help with?",
    hi: "आपको किस चीज़ में सहायता चाहिए?",
  },

  category: {
    en: "Category",
    hi: "श्रेणी",
  },

  occupation: {
    en: "Occupation",
    hi: "व्यवसाय",
  },

  projectType: {
    en: "Project type",
    hi: "परियोजना का प्रकार",
  },

  age: {
    en: "Age",
    hi: "आयु",
  },

  education: {
    en: "Highest education completed",
    hi: "उच्चतम शिक्षा",
  },

  income: {
    en: "Annual family income",
    hi: "वार्षिक पारिवारिक आय",
  },

  projectCost: {
    en: "Estimated project / education cost",
    hi: "अनुमानित परियोजना / शिक्षा लागत",
  },

  isStudent: {
    en: "I am currently a student",
    hi: "मैं वर्तमान में छात्र/छात्रा हूं",
  },

  percentile: {
    en: "Class 12 percentile",
    hi: "कक्षा 12 पर्सेंटाइल",
  },

  ownsLand: {
    en: "I own / cultivate agricultural land",
    hi: "मेरे पास कृषि भूमि है / मैं कृषि भूमि पर खेती करता/करती हूं",
  },

  state: {
    en: "State / UT",
    hi: "राज्य / केंद्र शासित प्रदेश",
  },

  district: {
    en: "District",
    hi: "जिला",
  },

  selectState: {
    en: "Select state first",
    hi: "पहले राज्य चुनें",
  },

  selectDistrict: {
    en: "Select district",
    hi: "जिला चुनें",
  },

  submit: {
    en: "Find my schemes",
    hi: "मेरी योजनाएं खोजें",
  },

  formBack: {
    en: "Back",
    hi: "वापस",
  },

  resultsBack: {
    en: "Change my answers",
    hi: "मेरे उत्तर बदलें",
  },

  resultsTitle: {
    en: "Your matched schemes",
    hi: "आपके लिए मिली योजनाएं",
  },

  resultsSub: {
    en:
      "These schemes are ranked using the information you provided.",
    hi:
      "इन योजनाओं को आपके द्वारा दी गई जानकारी के आधार पर रैंक किया गया है।",
  },

  bestMatch: {
    en: "BEST MATCH",
    hi: "सबसे अच्छा मिलान",
  },

  match: {
    en: "match",
    hi: "मिलान",
  },

  whyMatch: {
    en: "Why this scheme matches",
    hi: "यह योजना आपके लिए क्यों उपयुक्त है",
  },

  conditions: {
    en: "Eligibility signals",
    hi: "पात्रता संकेत",
  },

  benefitsH: {
    en: "Benefits",
    hi: "लाभ",
  },

  documentsH: {
    en: "Documents you'll need",
    hi: "ज़रूरी दस्तावेज़",
  },

  partnersH: {
    en: "Where to apply",
    hi: "कहाँ आवेदन करें",
  },

  maxLoan: {
    en: "Loan / financial support",
    hi: "ऋण / वित्तीय सहायता",
  },

  subsidy: {
    en: "Subsidy / support",
    hi: "सब्सिडी / सहायता",
  },

  officialLink: {
    en: "Open official page",
    hi: "आधिकारिक पृष्ठ खोलें",
  },

  otherMatches: {
    en: "Other schemes worth a look",
    hi: "अन्य उपयुक्त योजनाएं",
  },

  viewDetails: {
    en: "View details",
    hi: "विवरण देखें",
  },

  noMatch: {
    en:
      "We couldn't find a strong match. Try changing some answers.",
    hi:
      "हमें कोई मजबूत मिलान नहीं मिला। कुछ उत्तर बदलकर फिर कोशिश करें।",
  },

  disclaimer: {
    en:
      "Scheme Saathi is an independent guide, not a government website. Match scores are estimates — always confirm final eligibility on the official portal before applying.",
    hi:
      "स्कीम साथी एक स्वतंत्र मार्गदर्शक है, कोई सरकारी वेबसाइट नहीं। मिलान स्कोर अनुमानित हैं — आवेदन से पहले आधिकारिक पोर्टल पर अंतिम पात्रता अवश्य जांचें।",
  },
};

function t(field, lang) {
  return STR[field]?.[lang] ?? field;
}


/* ============================================================
   HELPERS
   ============================================================ */

function getLabel(option, lang) {
  if (!option) return "";

  if (typeof option === "string") {
    return option;
  }

  if (typeof option.label === "object") {
    return option.label?.[lang] ?? option.label?.en ?? "";
  }

  return option.label ?? option.value ?? "";
}


function getValue(option) {
  if (typeof option === "string") {
    return option;
  }

  return option?.value ?? "";
}


function getPurposeIcon(value) {
  switch (value) {
    case "business":
      return Store;

    case "education":
      return GraduationCap;

    case "street_vendor":
    case "street-vendor":
      return Landmark;

    case "artisan":
      return Hammer;

    case "agriculture":
      return Wheat;

    case "livestock":
      return Wheat;

    case "solar":
      return Sparkles;

    case "food_processing":
    case "food":
      return Store;

    default:
      return Store;
  }
}


/* ============================================================
   STAMP
   ============================================================ */

function describeFullCircle(cx, cy, r) {
  return `
    M ${cx + r},${cy}
    A ${r},${r} 0 1,1 ${cx - r},${cy}
    A ${r},${r} 0 1,1 ${cx + r},${cy}
  `;
}


function StampSeal({ percent = 0, size = 120 }) {
  const safePercent = Math.max(
    0,
    Math.min(100, Number(percent) || 0)
  );

  const cx = size / 2;
  const cy = size / 2;
  const r = size / 2 - size * 0.16;

  const pathId = `seal-path-${size}-${safePercent}`;

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
      className="ss-stamp"
      role="img"
      aria-label={`${safePercent}% match`}
    >
      <defs>
        <path
          id={pathId}
          d={describeFullCircle(cx, cy, r)}
          fill="none"
        />
      </defs>

      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill="none"
        stroke="var(--stamp)"
        strokeWidth={size * 0.028}
      />

      <circle
        cx={cx}
        cy={cy}
        r={r - size * 0.075}
        fill="none"
        stroke="var(--stamp)"
        strokeWidth={size * 0.012}
        strokeDasharray={`${size * 0.02} ${size * 0.028}`}
      />

      <text
        fill="var(--stamp)"
        fontFamily="var(--font-mono)"
        fontSize={size * 0.22}
        fontWeight="700"
        textAnchor="middle"
        x={cx}
        y={cy + size * 0.075}
      >
        {safePercent}%
      </text>

      <text
        fill="var(--stamp)"
        fontFamily="var(--font-mono)"
        fontSize={size * 0.075}
        textAnchor="middle"
        x={cx}
        y={cy + size * 0.25}
      >
        MATCH
      </text>
    </svg>
  );
}


/* ============================================================
   PERFORATION
   ============================================================ */

function Perforation() {
  return <div className="ss-perforation" />;
}


/* ============================================================
   CHECK ROW
   ============================================================ */

function CheckRow({ ok, children }) {
  return (
    <div className="ss-check-row">
      {ok ? (
        <CheckCircle2 size={16} />
      ) : (
        <XCircle size={16} />
      )}

      <span>{children}</span>
    </div>
  );
}


/* ============================================================
   NAVBAR
   ============================================================ */

function NavBar({ lang, setLang }) {
  return (
    <nav className="ss-nav">
      <div className="ss-nav-inner">

        <div className="ss-logo">
          <div className="ss-logo-mark">
            SS
          </div>

          <div>
            <h2>Scheme Saathi</h2>

            <p>
              {t("navTag", lang)}
            </p>
          </div>
        </div>

        <button
          className="ss-lang-btn"
          type="button"
          onClick={() =>
            setLang(
              lang === "en"
                ? "hi"
                : "en"
            )
          }
        >
          <Globe size={15} />

          {t("langBtn", lang)}
        </button>

      </div>
    </nav>
  );
}


/* ============================================================
   HOME
   ============================================================ */

function HomeView({
  lang,
  setLang,
  onStart,
}) {
  const features = [
    {
      Icon: Sparkles,
      h: "feat1h",
      text: "feat1t",
    },
    {
      Icon: Banknote,
      h: "feat2h",
      text: "feat2t",
    },
    {
      Icon: FileText,
      h: "feat3h",
      text: "feat3t",
    },
  ];

  return (
    <div className="ss-shell">

      <NavBar
        lang={lang}
        setLang={setLang}
      />

      <header className="ss-hero">

        <div className="ss-hero-copy">

          <div className="ss-kicker">
            🇮🇳 {t("heroKicker", lang)}
          </div>

          <h1 className="ss-hero-title">

            {t("heroTitle1", lang)}{" "}

            <span className="ss-hero-accent">
              {t("heroTitle2", lang)}
            </span>{" "}

            {t("heroTitle3", lang)}

          </h1>

          <p className="ss-hero-text">
            {t("heroText", lang)}
          </p>

          <button
            className="ss-btn-primary"
            type="button"
            onClick={onStart}
          >
            {t("ctaStart", lang)}
            <ArrowRight size={18} />
          </button>

          <p className="ss-small-tag">
            {t("smallTag", lang)}
          </p>

        </div>


        <div
          className="ss-hero-doc"
          aria-hidden="true"
        >

          <div className="ss-doc-header">
            <FileText size={16} />
            <span>Scheme Saathi</span>
          </div>

          <div
            className="ss-doc-line"
            style={{ width: "78%" }}
          />

          <div
            className="ss-doc-line"
            style={{ width: "56%" }}
          />

          <div
            className="ss-doc-line"
            style={{ width: "68%" }}
          />

          <Perforation />

          <div className="ss-doc-stamp-wrap">

            <StampSeal
              percent={94}
              size={104}
            />

            <div>
              <strong>
                Government Scheme
              </strong>

              <span
                className="ss-text-muted"
                style={{
                  display: "block",
                  fontSize: "0.8rem",
                }}
              >
                {lang === "en"
                  ? "Illustrative match"
                  : "उदाहरण मिलान"}
              </span>
            </div>

          </div>

        </div>

      </header>


      <section className="ss-features">

        {features.map(
          ({
            Icon,
            h,
            text: textKey,
          }) => (
            <div
              className="ss-feature"
              key={h}
            >

              <div className="ss-feature-icon">
                <Icon size={20} />
              </div>

              <h3>
                {t(h, lang)}
              </h3>

              <p>
                {t(textKey, lang)}
              </p>

            </div>
          )
        )}

      </section>


      <footer className="ss-footer ss-footer-dark">
        <p>
          {t("disclaimer", lang)}
        </p>
      </footer>

    </div>
  );
}


/* ============================================================
   FORM
   ============================================================ */

function FormView({
  lang,
  setLang,
  formData,
  handleChange,
  handleSubmit,
  onBack,
}) {
  const partsDone = [
    ["purpose", "category", "occupation"],
    [
      "age",
      "income",
      "projectCost",
      "education",
    ],
    [],
    ["state", "district"],
  ];

  const isPartDone = (keys) =>
    keys.length === 0
      ? true
      : keys.every(
          (key) =>
            String(
              formData[key] ?? ""
            ).length > 0
        );

  return (
    <div className="ss-shell">

      <NavBar
        lang={lang}
        setLang={setLang}
      />

      <div className="ss-page">

        <button
          className="ss-back-btn"
          type="button"
          onClick={onBack}
        >
          <ChevronLeft size={16} />
          {t("formBack", lang)}
        </button>


        <div className="ss-page-header">

          <div className="ss-badge">
            🎯 {t("formBadge", lang)}
          </div>

          <h1>
            {t("formTitle", lang)}
          </h1>

          <p>
            {t("formSub", lang)}
          </p>

        </div>


        <div className="ss-progress">

          {partsDone.map(
            (keys, index) => (
              <div
                key={index}
                className={`ss-progress-dot ${
                  isPartDone(keys)
                    ? "ss-progress-dot-on"
                    : ""
                }`}
              />
            )
          )}

        </div>


        <form
          className="ss-form"
          onSubmit={handleSubmit}
        >

          {/* ==================================================
              PART A
              ================================================== */}

          <fieldset className="ss-part">

            <legend>
              {t("partA", lang)}
            </legend>


            <div className="ss-form-group">

              <label>
                {t("purposeQ", lang)}
              </label>


              <div className="ss-purpose-grid">

                {PURPOSE_OPTIONS.map(
                  (option) => {
                    const value =
                      getValue(option);

                    const label =
                      getLabel(
                        option,
                        lang
                      );

                    const Icon =
                      option.icon ||
                      getPurposeIcon(
                        value
                      );

                    return (
                      <label
                        key={value}
                        className={`ss-purpose-card ${
                          formData.purpose === value
                            ? "ss-purpose-card-on"
                            : ""
                        }`}
                      >

                        <input
                          type="radio"
                          name="purpose"
                          value={value}
                          checked={
                            formData.purpose ===
                            value
                          }
                          onChange={
                            handleChange
                          }
                          required
                        />

                        <Icon size={18} />

                        <span>
                          {label}
                        </span>

                      </label>
                    );
                  }
                )}

              </div>

            </div>


            <div className="ss-form-row">

              <div className="ss-form-group">

                <label>
                  {t("category", lang)}
                </label>

                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    —
                  </option>

                  {CATEGORY_OPTIONS.map(
                    (option) => (
                      <option
                        key={getValue(option)}
                        value={getValue(option)}
                      >
                        {getLabel(
                          option,
                          lang
                        )}
                      </option>
                    )
                  )}

                </select>

              </div>


              <div className="ss-form-group">

                <label>
                  {t("occupation", lang)}
                </label>

                <select
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    —
                  </option>

                  {OCCUPATION_OPTIONS.map(
                    (option) => (
                      <option
                        key={getValue(option)}
                        value={getValue(option)}
                      >
                        {getLabel(
                          option,
                          lang
                        )}
                      </option>
                    )
                  )}

                </select>

              </div>

            </div>


            <div className="ss-form-row">

              <div className="ss-form-group">

                <label>
                  {t("projectType", lang)}
                </label>

                <select
                  name="projectType"
                  value={
                    formData.projectType
                  }
                  onChange={handleChange}
                >

                  <option value="">
                    —
                  </option>

                  {PROJECT_TYPE_OPTIONS.map(
                    (option) => (
                      <option
                        key={getValue(option)}
                        value={getValue(option)}
                      >
                        {getLabel(
                          option,
                          lang
                        )}
                      </option>
                    )
                  )}

                </select>

              </div>

            </div>

          </fieldset>


          <Perforation />


          {/* ==================================================
              PART B
              ================================================== */}

          <fieldset className="ss-part">

            <legend>
              {t("partB", lang)}
            </legend>


            <div className="ss-form-row">

              <div className="ss-form-group">

                <label>
                  {t("age", lang)}
                </label>

                <input
                  type="number"
                  name="age"
                  min="1"
                  max="100"
                  value={formData.age}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="ss-form-group">

                <label>
                  {t("education", lang)}
                </label>

                <select
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    —
                  </option>

                  {EDUCATION_LEVELS.map(
                    (option) => (
                      <option
                        key={getValue(option)}
                        value={getValue(option)}
                      >
                        {getLabel(
                          option,
                          lang
                        )}
                      </option>
                    )
                  )}

                </select>

              </div>

            </div>


            <div className="ss-form-row">

              <div className="ss-form-group">

                <label>
                  {t("income", lang)}
                </label>

                <div className="ss-input-wrapper">

                  <span>₹</span>

                  <input
                    type="number"
                    name="income"
                    min="0"
                    value={formData.income}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>


              <div className="ss-form-group">

                <label>
                  {t("projectCost", lang)}
                </label>

                <div className="ss-input-wrapper">

                  <span>₹</span>

                  <input
                    type="number"
                    name="projectCost"
                    min="0"
                    value={
                      formData.projectCost
                    }
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>

            </div>

          </fieldset>


          <Perforation />


          {/* ==================================================
              PART C
              ================================================== */}

          <fieldset className="ss-part">

            <legend>
              {t("partC", lang)}
            </legend>


            <label className="ss-checkbox-row">

              <input
                type="checkbox"
                name="isStudent"
                checked={
                  formData.isStudent
                }
                onChange={handleChange}
              />

              {t(
                "isStudent",
                lang
              )}

            </label>


            {formData.isStudent && (
              <div
                className="ss-form-group"
                style={{
                  maxWidth: 320,
                }}
              >

                <label>
                  {t(
                    "percentile",
                    lang
                  )}
                </label>

                <input
                  type="number"
                  name="percentile"
                  min="0"
                  max="100"
                  value={
                    formData.percentile
                  }
                  onChange={handleChange}
                />

              </div>
            )}


            <label className="ss-checkbox-row">

              <input
                type="checkbox"
                name="ownsLand"
                checked={
                  formData.ownsLand
                }
                onChange={handleChange}
              />

              {t(
                "ownsLand",
                lang
              )}

            </label>

          </fieldset>


          <Perforation />


          {/* ==================================================
              PART D
              ================================================== */}

          <fieldset className="ss-part">

            <legend>
              {t("partD", lang)}
            </legend>


            <div className="ss-form-row">

              <div className="ss-form-group">

                <label>
                  {t("state", lang)}
                </label>

                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    —
                  </option>

                  {ALL_STATES.map(
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


              <div className="ss-form-group">

                <label>
                  {t("district", lang)}
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
                      ? t(
                          "selectDistrict",
                          lang
                        )
                      : t(
                          "selectState",
                          lang
                        )}
                  </option>

                  {formData.state &&
                    Array.isArray(
                      districts[
                        formData.state
                      ]
                    ) &&
                    districts[
                      formData.state
                    ].map(
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

            </div>

          </fieldset>


          <button
            className="ss-btn-primary ss-btn-full"
            type="submit"
          >
            {t("submit", lang)}
            <ArrowRight size={18} />
          </button>

        </form>

      </div>

    </div>
  );
}


/* ============================================================
   RESULTS
   ============================================================ */

function ResultsView({
  lang,
  setLang,
  formData,
  results,
  activeScheme,
  setActiveResultId,
  onBack,
}) {
  const alternates = results
    .filter(
      (scheme) =>
        scheme.id !== activeScheme.id
    )
    .slice(0, 3);


  const reasons =
    Array.isArray(
      activeScheme.reasons
    )
      ? activeScheme.reasons
      : [];


  const warnings =
    Array.isArray(
      activeScheme.warnings
    )
      ? activeScheme.warnings
      : [];


  const benefits =
    Array.isArray(
      activeScheme.benefits
    )
      ? activeScheme.benefits
      : [];


  const documents =
    Array.isArray(
      activeScheme.documents
    )
      ? activeScheme.documents
      : [];


  const agencies =
    Array.isArray(
      activeScheme.implementingAgency
    )
      ? activeScheme.implementingAgency
      : [];


  return (
    <div className="ss-shell">

      <NavBar
        lang={lang}
        setLang={setLang}
      />

      <div className="ss-page">

        <button
          className="ss-back-btn"
          type="button"
          onClick={onBack}
        >
          <ChevronLeft size={16} />
          {t(
            "resultsBack",
            lang
          )}
        </button>


        <div className="ss-page-header">

          <div className="ss-badge">
            🎯 {t(
              "resultsTitle",
              lang
            )}
          </div>

          <h1>
            {t(
              "resultsTitle",
              lang
            )}
          </h1>

          <p>
            {t(
              "resultsSub",
              lang
            )}
          </p>

        </div>


        {/* ==================================================
            MAIN RESULT CARD
            ================================================== */}

        <div className="ss-result-card">

          <div className="ss-result-top">

            <div>

              <span className="ss-best-tag">
                {t(
                  "bestMatch",
                  lang
                )}
              </span>

              <h2>
                {activeScheme.name}
              </h2>

              <p className="ss-text-muted">
                {activeScheme.description}
              </p>

            </div>


            <StampSeal
              percent={
                activeScheme.matchScore
              }
              size={116}
            />

          </div>


          <Perforation />


          {/* MATCH SCORE */}

          <div className="ss-result-section">

            <h3>
              <Sparkles size={16} />
              {activeScheme.matchScore}%{" "}
              {t(
                "match",
                lang
              )}
            </h3>

            <div
              className="ss-match-bar"
              style={{
                width: "100%",
              }}
            >

              <div
                className="ss-match-bar-fill"
                style={{
                  width: `${Math.max(
                    0,
                    Math.min(
                      100,
                      activeScheme.matchScore ||
                        0
                    )
                  )}%`,
                }}
              />

            </div>

          </div>


          {/* ==================================================
              ELIGIBILITY
              ================================================== */}

          <div className="ss-result-section">

            <h3>
              <CheckCircle2 size={16} />

              {t(
                "conditions",
                lang
              )}
            </h3>


            <div className="ss-eligibility-grid">

              {reasons.map(
                (reason, index) => (
                  <CheckRow
                    key={`reason-${index}`}
                    ok={true}
                  >
                    {reason}
                  </CheckRow>
                )
              )}


              {warnings.map(
                (warning, index) => (
                  <CheckRow
                    key={`warning-${index}`}
                    ok={false}
                  >
                    {warning}
                  </CheckRow>
                )
              )}


              {reasons.length === 0 &&
                warnings.length === 0 && (
                  <CheckRow ok={true}>
                    {lang === "en"
                      ? "No additional matching notes."
                      : "कोई अतिरिक्त मिलान जानकारी नहीं।"}
                  </CheckRow>
                )}

            </div>

          </div>


          {/* ==================================================
              MONEY
              ================================================== */}

          <div className="ss-scheme-details">

            <div className="ss-detail-box">

              <Wallet size={18} />

              <small>
                {t(
                  "maxLoan",
                  lang
                )}
              </small>

              <strong>
                {activeScheme.loanAmount ||
                  "—"}
              </strong>

            </div>


            <div className="ss-detail-box">

              <Banknote size={18} />

              <small>
                {t(
                  "subsidy",
                  lang
                )}
              </small>

              <strong>
                {activeScheme.subsidy ||
                  "—"}
              </strong>

            </div>


            <div className="ss-detail-box">

              <Building2 size={18} />

              <small>
                {lang === "en"
                  ? "Scheme category"
                  : "योजना श्रेणी"}
              </small>

              <strong>
                {activeScheme.category ||
                  "—"}
              </strong>

            </div>

          </div>


          {/* ==================================================
              WHY MATCH
              ================================================== */}

          <div className="ss-result-section">

            <h3>
              ✨{" "}
              {t(
                "whyMatch",
                lang
              )}
            </h3>


            <ul className="ss-reasons-list">

              {reasons.map(
                (reason, index) => (
                  <li key={index}>

                    <CheckCircle2
                      size={15}
                    />

                    {reason}

                  </li>
                )
              )}


              {warnings.map(
                (warning, index) => (
                  <li key={`w-${index}`}>

                    <XCircle
                      size={15}
                    />

                    {warning}

                  </li>
                )
              )}

            </ul>

          </div>


          {/* ==================================================
              BENEFITS
              ================================================== */}

          <div className="ss-result-section">

            <h3>
              💰{" "}
              {t(
                "benefitsH",
                lang
              )}
            </h3>


            <ul className="ss-list">

              {benefits.map(
                (benefit, index) => (
                  <li key={index}>
                    {benefit}
                  </li>
                )
              )}

            </ul>

          </div>


          {/* ==================================================
              DOCUMENTS
              ================================================== */}

          <div className="ss-result-section">

            <h3>

              <FileText size={16} />

              {t(
                "documentsH",
                lang
              )}

            </h3>


            <ul className="ss-doc-checklist">

              {documents.map(
                (document, index) => (
                  <li key={index}>
                    {document}
                  </li>
                )
              )}

            </ul>

          </div>


          {/* ==================================================
              WHERE TO APPLY
              ================================================== */}

          <div className="ss-result-section">

            <h3>

              <MapPin size={16} />

              {t(
                "partnersH",
                lang
              )}

            </h3>


            <p
              className="ss-text-muted"
              style={{
                marginBottom:
                  "0.75rem",
              }}
            >
              {formData.district
                ? `${formData.district}, ${formData.state}`
                : formData.state}
            </p>


            <div className="ss-partner-list">

              {agencies.map(
                (agency, index) => (
                  <div
                    className="ss-partner-card"
                    key={index}
                  >

                    <Users size={15} />

                    {agency}

                  </div>
                )
              )}

            </div>


            {activeScheme.officialUrl && (
              <a
                className="ss-official-link"
                href={
                  activeScheme.officialUrl
                }
                target="_blank"
                rel="noreferrer"
              >

                {t(
                  "officialLink",
                  lang
                )}

                {" — "}

                {activeScheme.officialSource ||
                  "Official source"}

                <ExternalLink
                  size={14}
                />

              </a>
            )}

          </div>

        </div>


        {/* ==================================================
            ALTERNATE SCHEMES
            ================================================== */}

        {alternates.length > 0 && (
          <div className="ss-alternates">

            <h3>
              {t(
                "otherMatches",
                lang
              )}
            </h3>


            <div className="ss-alternates-grid">

              {alternates.map(
                (scheme) => (
                  <button
                    key={scheme.id}
                    type="button"
                    className="ss-alt-card"
                    onClick={() =>
                      setActiveResultId(
                        scheme.id
                      )
                    }
                  >

                    <div>

                      <strong>
                        {scheme.name}
                      </strong>

                      <span className="ss-text-muted">

                        {t(
                          "viewDetails",
                          lang
                        )}

                        <ChevronRight
                          size={13}
                        />

                      </span>

                    </div>


                    <span className="ss-alt-score">
                      {scheme.matchScore}%
                    </span>

                  </button>
                )
              )}

            </div>

          </div>
        )}


        <footer className="ss-footer">

          <p>
            {t(
              "disclaimer",
              lang
            )}
          </p>

        </footer>

      </div>

    </div>
  );
}


/* ============================================================
   MAIN APP
   ============================================================ */

export default function App() {

  const [lang, setLang] =
    useState("en");


  const [view, setView] =
    useState("home");


  const [formData, setFormData] =
    useState({
      purpose: "",
      category: "",
      projectType: "",
      occupation: "",

      age: "",
      income: "",
      projectCost: "",
      education: "",

      isStudent: false,
      percentile: "",

      ownsLand: false,

      state: "",
      district: "",
    });


  const [results, setResults] =
    useState([]);


  const [activeResultId, setActiveResultId] =
    useState(null);


  /* ==========================================================
     FORM CHANGE
     ========================================================== */

  const handleChange = (event) => {

    const {
      name,
      value,
      type,
      checked,
    } = event.target;


    setFormData((previous) => {

      const next = {
        ...previous,

        [name]:
          type === "checkbox"
            ? checked
            : value,
      };


      /* Reset district whenever state changes */

      if (name === "state") {
        next.district = "";
      }


      return next;
    });
  };


  /* ==========================================================
     SUBMIT
     ========================================================== */

  const handleSubmit = (event) => {

    event.preventDefault();


    const matched =
      getMatchedSchemes(
        formData
      );


    setResults(
      Array.isArray(matched)
        ? matched
        : []
    );


    if (
      Array.isArray(matched) &&
      matched.length > 0
    ) {

      setActiveResultId(
        matched[0].id
      );

      setView("results");

    } else {

      setActiveResultId(null);

      setView("results");
    }
  };


  /* ==========================================================
     ACTIVE RESULT
     ========================================================== */

  const activeScheme = useMemo(
    () =>
      results.find(
        (scheme) =>
          scheme.id ===
          activeResultId
      ) ||
      results[0] ||
      null,
    [
      results,
      activeResultId,
    ]
  );


  return (
    <div className="ss-app">

      {/* ======================================================
          HOME
          ====================================================== */}

      {view === "home" && (
        <HomeView
          lang={lang}
          setLang={setLang}
          onStart={() =>
            setView("form")
          }
        />
      )}


      {/* ======================================================
          FORM
          ====================================================== */}

      {view === "form" && (
        <FormView
          lang={lang}
          setLang={setLang}
          formData={formData}
          handleChange={
            handleChange
          }
          handleSubmit={
            handleSubmit
          }
          onBack={() =>
            setView("home")
          }
        />
      )}


      {/* ======================================================
          RESULTS
          ====================================================== */}

      {view === "results" &&
        activeScheme && (
          <ResultsView
            lang={lang}
            setLang={setLang}
            formData={formData}
            results={results}
            activeScheme={
              activeScheme
            }
            setActiveResultId={
              setActiveResultId
            }
            onBack={() =>
              setView("form")
            }
          />
        )}


      {/* ======================================================
          NO RESULTS
          ====================================================== */}

      {view === "results" &&
        !activeScheme && (
          <div className="ss-shell">

            <NavBar
              lang={lang}
              setLang={setLang}
            />

            <div className="ss-page">

              <button
                className="ss-back-btn"
                type="button"
                onClick={() =>
                  setView("form")
                }
              >
                <ChevronLeft
                  size={16}
                />

                {t(
                  "resultsBack",
                  lang
                )}
              </button>


              <div className="ss-page-header">

                <div className="ss-badge">
                  ⚠️
                </div>

                <h1>
                  {t(
                    "noMatch",
                    lang
                  )}
                </h1>

                <p>
                  {t(
                    "disclaimer",
                    lang
                  )}
                </p>

              </div>

            </div>

          </div>
        )}

    </div>
  );
}