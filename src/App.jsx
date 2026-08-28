import {
  useEffect,
  useId,
  useMemo,
  useState,
} from "react";

import {
  ArrowRight,
  Banknote,
  Building2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
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
  districts,
  EDUCATION_LEVELS,
  getMatchedSchemes,
  OCCUPATION_OPTIONS,
  PROJECT_TYPE_OPTIONS,
  PURPOSE_OPTIONS,
} from "./schemes";

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
    en: "Answer a short form and get matched schemes, benefit details, documents, and where to apply.",
    hi: "एक छोटा फ़ॉर्म भरें और अपनी जानकारी के अनुसार योजनाएं, लाभ, दस्तावेज़ और आवेदन की जानकारी पाएं।",
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
    en: "We compare your purpose, age, income, education, category, occupation and location.",
    hi: "हम उद्देश्य, आयु, आय, शिक्षा, श्रेणी, व्यवसाय और स्थान की तुलना करते हैं।",
  },

  feat2h: {
    en: "Money, made clear",
    hi: "स्पष्ट वित्तीय जानकारी",
  },

  feat2t: {
    en: "See loan limits, interest, subsidies and repayment information in one place.",
    hi: "ऋण सीमा, ब्याज, सब्सिडी और भुगतान की जानकारी एक ही जगह देखें।",
  },

  feat3h: {
    en: "Papers & partners",
    hi: "दस्तावेज़ व सहभागी",
  },

  feat3t: {
    en: "Know the documents and the type of office or institution that handles the scheme.",
    hi: "ज़रूरी दस्तावेज़ और आवेदन संभालने वाले कार्यालय या संस्थान की जानकारी पाएं।",
  },

  formBack: {
    en: "Back",
    hi: "वापस",
  },

  formBadge: {
    en: "Smart scheme matching",
    hi: "स्मार्ट योजना मिलान",
  },

  formTitle: {
    en: "Application form",
    hi: "आवेदन पत्र",
  },

  formSub: {
    en: "Fill in your details and we will rank schemes based on your answers.",
    hi: "अपनी जानकारी भरें और हम आपके उत्तरों के आधार पर योजनाओं को क्रमबद्ध करेंगे।",
  },

  partA: {
    en: "Part A — What you need",
    hi: "भाग अ — आपको किस चीज़ की जरूरत है",
  },

  partB: {
    en: "Part B — Your details",
    hi: "भाग ब — आपकी जानकारी",
  },

  partC: {
    en: "Part C — Special conditions",
    hi: "भाग स — विशेष शर्तें",
  },

  partD: {
    en: "Part D — Location",
    hi: "भाग द — स्थान",
  },

  purposeQ: {
    en: "What do you need help with?",
    hi: "आपको किस चीज़ में मदद चाहिए?",
  },

  category: {
    en: "Category",
    hi: "श्रेणी",
  },

  occupation: {
    en: "Occupation",
    hi: "व्यवसाय",
  },

  age: {
    en: "Age",
    hi: "आयु",
  },

  income: {
    en: "Annual family income",
    hi: "वार्षिक पारिवारिक आय",
  },

  projectCost: {
    en: "Estimated project / education cost",
    hi: "अनुमानित परियोजना / शिक्षा लागत",
  },

  projectType: {
    en: "Project type",
    hi: "परियोजना का प्रकार",
  },

  education: {
    en: "Highest education completed",
    hi: "पूर्ण की गई उच्चतम शिक्षा",
  },

  isStudent: {
    en: "I am currently a student",
    hi: "मैं वर्तमान में छात्र हूँ",
  },

  percentile: {
    en: "Last exam percentile",
    hi: "पिछली परीक्षा का प्रतिशत",
  },

  ownsLand: {
    en: "My family owns agricultural land",
    hi: "मेरे परिवार के पास कृषि भूमि है",
  },

  state: {
    en: "State / union territory",
    hi: "राज्य / केंद्र शासित प्रदेश",
  },

  district: {
    en: "District",
    hi: "ज़िला",
  },

  selectDistrict: {
    en: "Select district",
    hi: "ज़िला चुनें",
  },

  selectState: {
    en: "Select state first",
    hi: "पहले राज्य चुनें",
  },

  submit: {
    en: "Find my scheme",
    hi: "मेरी योजना खोजें",
  },

  resultsBack: {
    en: "Back to form",
    hi: "फ़ॉर्म पर वापस जाएं",
  },

  resultsTitle: {
    en: "Your matched schemes",
    hi: "आपकी मिलान योजनाएं",
  },

  resultsSub: {
    en: "Eligible schemes are shown first, followed by other potentially relevant schemes.",
    hi: "पात्र योजनाएं पहले दिखाई जाती हैं, उसके बाद अन्य संभावित योजनाएं।",
  },

  bestMatch: {
    en: "Best match",
    hi: "सर्वश्रेष्ठ मिलान",
  },

  likelyEligible: {
    en: "Likely eligible",
    hi: "संभावित रूप से पात्र",
  },

  conditionsMissing: {
    en: "Some conditions are not met",
    hi: "कुछ शर्तें पूरी नहीं हुईं",
  },

  eligibilityBreakdown: {
    en: "Eligibility breakdown",
    hi: "पात्रता विवरण",
  },

  whyMatch: {
    en: "Why this matches you",
    hi: "यह योजना आपके लिए क्यों उपयुक्त है",
  },

  maxLoan: {
    en: "Maximum benefit / loan",
    hi: "अधिकतम लाभ / ऋण",
  },

  interestRate: {
    en: "Interest / subsidy",
    hi: "ब्याज / सब्सिडी",
  },

  repayment: {
    en: "Repayment",
    hi: "भुगतान",
  },

  benefitsH: {
    en: "What you get",
    hi: "आपको क्या मिलेगा",
  },

  documentsH: {
    en: "Documents you'll need",
    hi: "ज़रूरी दस्तावेज़",
  },

  partnersH: {
    en: "Where to apply",
    hi: "कहाँ आवेदन करें",
  },

  officialLink: {
    en: "Open official source",
    hi: "आधिकारिक स्रोत खोलें",
  },

  otherMatches: {
    en: "Other schemes worth a look",
    hi: "अन्य उपयुक्त योजनाएं",
  },

  viewDetails: {
    en: "View details",
    hi: "विवरण देखें",
  },

  prototypeNotice: {
    en: "Prototype coverage: district options currently include selected districts.",
    hi: "प्रोटोटाइप कवरेज: अभी कुछ चुनिंदा ज़िलों के विकल्प उपलब्ध हैं।",
  },

  disclaimer: {
    en: "Scheme Saathi is an independent guide, not a government website. Match scores are estimates and do not constitute official eligibility. Always confirm the latest eligibility, documents and application process on the official source before applying.",
    hi: "स्कीम साथी एक स्वतंत्र मार्गदर्शक है, कोई सरकारी वेबसाइट नहीं। मिलान स्कोर अनुमानित हैं और आधिकारिक पात्रता नहीं माने जाते। आवेदन से पहले आधिकारिक स्रोत पर नवीनतम पात्रता, दस्तावेज़ और आवेदन प्रक्रिया अवश्य जांचें।",
  },
};

function t(key, lang) {
  return STR[key]?.[lang] || key;
}

/* ============================================================
   SEAL
   ============================================================ */

function describeFullCircle(cx, cy, r) {
  return `
    M ${cx + r},${cy}
    A ${r},${r} 0 1,1 ${cx - r},${cy}
    A ${r},${r} 0 1,1 ${cx + r},${cy}
  `;
}

function StampSeal({
  percent,
  size = 120,
  animate = true,
}) {
  const rawId = useId();

  const pathId = `seal-${rawId.replace(/[:]/g, "")}`;

  const cx = size / 2;
  const cy = size / 2;
  const r = size / 2 - size * 0.16;

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
      className={
        animate
          ? "ss-stamp ss-stamp-animate"
          : "ss-stamp"
      }
      role="img"
      aria-label={`${percent}% match`}
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
        fontSize={size * 0.072}
        letterSpacing="2"
      >
        <textPath
          href={`#${pathId}`}
          startOffset="1%"
        >
          SCHEME SAATHI • MATCH • SCHEME SAATHI • MATCH •
        </textPath>
      </text>

      <text
        x={cx}
        y={cy + size * 0.02}
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontWeight="700"
        fontSize={size * 0.26}
        fill="var(--stamp)"
      >
        {percent}%
      </text>

      <text
        x={cx}
        y={cy + size * 0.155}
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize={size * 0.065}
        letterSpacing="3"
        fill="var(--stamp)"
      >
        MATCH
      </text>
    </svg>
  );
}

/* ============================================================
   CHECK ROW
   ============================================================ */

function CheckRow({
  ok,
  children,
}) {
  return (
    <div className="ss-check-row">
      {ok ? (
        <CheckCircle2
          size={17}
          className="ss-icon-ok"
        />
      ) : (
        <XCircle
          size={17}
          className="ss-icon-no"
        />
      )}

      <span className={!ok ? "ss-text-muted" : ""}>
        {children}
      </span>
    </div>
  );
}

function Perforation() {
  return (
    <div
      className="ss-perforation"
      aria-hidden="true"
    />
  );
}

/* ============================================================
   APP
   ============================================================ */

export default function App() {

  const [lang, setLang] = useState("en");

  const [view, setView] = useState("home");

  const [results, setResults] = useState([]);

  const [activeResultId, setActiveResultId] =
    useState(null);

  const [formData, setFormData] = useState({
    purpose: "",
    age: "",
    income: "",
    projectCost: "",
    educationLevel: "",
    category: "",
    occupation: "",
    projectType: "",
    isStudent: false,
    ownsLand: false,
    percentile: "",
    state: "",
    district: "",
  });

  useEffect(() => {
    const id = "ss-fonts-link";

    if (!document.getElementById(id)) {
      const link = document.createElement("link");

      link.id = id;
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap";

      document.head.appendChild(link);
    }
  }, []);

  const handleChange = (e) => {

    const {
      name,
      value,
      type,
      checked,
    } = e.target;

    const nextValue =
      type === "checkbox"
        ? checked
        : value;

    setFormData((previous) => ({
      ...previous,

      [name]: nextValue,

      ...(name === "state"
        ? { district: "" }
        : {}),

      ...(name === "purpose" &&
      value !== "business"
        ? { projectType: "" }
        : {}),
    }));
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    const matched =
      getMatchedSchemes(formData);

    setResults(matched);

    setActiveResultId(
      matched[0]?.id || null
    );

    setView("results");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const activeScheme = useMemo(
    () =>
      results.find(
        (result) =>
          result.id === activeResultId
      ) || results[0],

    [results, activeResultId]
  );

  return (
    <div className="ss-app">

      {view === "home" && (
        <HomeView
          lang={lang}
          setLang={setLang}
          onStart={() => setView("form")}
        />
      )}

      {view === "form" && (
        <FormView
          lang={lang}
          setLang={setLang}
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          onBack={() => setView("home")}
        />
      )}

      {view === "results" &&
        activeScheme && (
          <ResultsView
            lang={lang}
            setLang={setLang}
            formData={formData}
            results={results}
            activeScheme={activeScheme}
            setActiveResultId={
              setActiveResultId
            }
            onBack={() => setView("form")}
          />
        )}
    </div>
  );
}

/* ============================================================
   NAVBAR
   ============================================================ */

function NavBar({
  lang,
  setLang,
}) {
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
      Icon: ClipboardList,
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
            <span>SCHEME MATCH</span>
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
              animate={false}
            />

            <div>
              <strong>
                PM Vishwakarma
              </strong>

              <span
                className="ss-text-muted"
                style={{
                  display: "block",
                  fontSize: "0.8rem",
                }}
              >
                Illustrative match
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
            text,
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
                {t(text, lang)}
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

  const showProjectType =
    formData.purpose === "business";

  const showStudentQuestions =
    formData.purpose === "education" ||
    formData.occupation === "student";

  const showLandQuestion =
    formData.purpose === "agriculture" ||
    formData.occupation === "farmer";

  const showPercentile =
    formData.isStudent;

  const partsDone = [
    formData.purpose &&
      formData.category &&
      formData.occupation,

    formData.age &&
      formData.income &&
      formData.projectCost &&
      formData.educationLevel,

    true,

    formData.state &&
      formData.district,
  ];

  return (
    <div className="ss-shell">

      <NavBar
        lang={lang}
        setLang={setLang}
      />

      <div className="ss-page">

        <button
          className="ss-back-btn"
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
            (done, index) => (
              <div
                key={index}
                className={
                  `ss-progress-dot ${
                    done
                      ? "ss-progress-dot-on"
                      : ""
                  }`
                }
              />
            )
          )}

        </div>

        <form
          onSubmit={handleSubmit}
          className="ss-form"
        >

          {/* PART A */}

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
                  ({
                    value,
                    label,
                  }) => {

                    const Icon =
                      value === "business"
                        ? Store
                        : value === "education"
                        ? GraduationCap
                        : value === "street-vending"
                        ? Landmark
                        : value === "artisan"
                        ? Hammer
                        : Wheat;

                    return (
                      <label
                        key={value}
                        className={
                          `ss-purpose-card ${
                            formData.purpose === value
                              ? "ss-purpose-card-on"
                              : ""
                          }`
                        }
                      >

                        <input
                          type="radio"
                          name="purpose"
                          value={value}
                          checked={
                            formData.purpose === value
                          }
                          onChange={
                            handleChange
                          }
                          required
                        />

                        <Icon size={18} />

                        <span>
                          {label[lang]}
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
                        key={option}
                        value={option}
                      >
                        {option}
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
                        key={option.value}
                        value={option.value}
                      >
                        {option.label[lang]}
                      </option>
                    )
                  )}

                </select>

              </div>

            </div>

            {showProjectType && (
              <div className="ss-form-group">

                <label>
                  {t(
                    "projectType",
                    lang
                  )}
                </label>

                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    —
                  </option>

                  {PROJECT_TYPE_OPTIONS.map(
                    (option) => (
                      <option
                        key={option.value}
                        value={option.value}
                      >
                        {option.label[lang]}
                      </option>
                    )
                  )}

                </select>

              </div>
            )}

          </fieldset>

          <Perforation />

          {/* PART B */}

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
                  name="educationLevel"
                  value={
                    formData.educationLevel
                  }
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    —
                  </option>

                  {EDUCATION_LEVELS.map(
                    (option) => (
                      <option
                        key={option.value}
                        value={option.value}
                      >
                        {option.label[lang]}
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
                  {t(
                    "projectCost",
                    lang
                  )}
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

          {/* PART C */}

          <fieldset className="ss-part">

            <legend>
              {t("partC", lang)}
            </legend>

            {(showStudentQuestions ||
              formData.occupation === "student") && (
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
            )}

            {showPercentile &&
              formData.isStudent && (
                <div
                  className="ss-form-group"
                  style={{ maxWidth: 320 }}
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

            {showLandQuestion && (
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
            )}

            {!showStudentQuestions &&
              !showLandQuestion && (
                <p className="ss-helper-text">
                  No additional special
                  conditions are needed for
                  your selected purpose.
                </p>
              )}

          </fieldset>

          <Perforation />

          {/* PART D */}

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
                  {t(
                    "district",
                    lang
                  )}
                </label>

                <select
                  name="district"
                  value={
                    formData.district
                  }
                  onChange={handleChange}
                  required
                  disabled={
                    !formData.state
                  }
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
                    districts[
                      formData.state
                    ]?.map(
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

            <p className="ss-prototype-note">
              <MapPin size={14} />
              {t(
                "prototypeNotice",
                lang
              )}
            </p>

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

  const alternates =
    results
      .filter(
        (result) =>
          result.id !== activeScheme.id
      )
      .slice(0, 4);

  return (
    <div className="ss-shell">

      <NavBar
        lang={lang}
        setLang={setLang}
      />

      <div className="ss-page">

        <button
          className="ss-back-btn"
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
              "formBadge",
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

              <div
                className={
                  activeScheme.eligible
                    ? "ss-status ss-status-good"
                    : "ss-status ss-status-warning"
                }
              >

                {activeScheme.eligible
                  ? (
                    <>
                      <CheckCircle2 size={15} />

                      {t(
                        "likelyEligible",
                        lang
                      )}
                    </>
                  )
                  : (
                    <>
                      <XCircle size={15} />

                      {t(
                        "conditionsMissing",
                        lang
                      )}
                    </>
                  )}

              </div>

            </div>

            <StampSeal
              percent={
                activeScheme.match
              }
              size={116}
            />

          </div>

          <Perforation />

          {/* ELIGIBILITY */}

          <div className="ss-result-section">

            <h3>
              <CheckCircle2 size={16} />

              {t(
                "eligibilityBreakdown",
                lang
              )}
            </h3>

            <div className="ss-eligibility-grid">

              {activeScheme.checks.map(
                (check) => (
                  <CheckRow
                    key={check.key}
                    ok={check.ok}
                  >
                    {check.label[lang]}
                  </CheckRow>
                )
              )}

            </div>

          </div>

          {/* WHY MATCH */}

          <div className="ss-result-section">

            <h3>
              ✨{" "}
              {t(
                "whyMatch",
                lang
              )}
            </h3>

            <ul className="ss-reasons-list">

              {activeScheme.reasons.map(
                (reason, index) => (
                  <li key={index}>
                    <CheckCircle2
                      size={15}
                    />

                    {reason[lang]}
                  </li>
                )
              )}

            </ul>

          </div>

          {/* MONEY */}

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
                {activeScheme.maxLoan}
              </strong>

            </div>

            <div className="ss-detail-box">

              <Banknote size={18} />

              <small>
                {t(
                  "interestRate",
                  lang
                )}
              </small>

              <strong>
                {activeScheme.interest}
              </strong>

            </div>

            <div className="ss-detail-box">

              <Building2 size={18} />

              <small>
                {t(
                  "repayment",
                  lang
                )}
              </small>

              <strong>
                {activeScheme.repayment}
              </strong>

            </div>

          </div>

          {/* BENEFITS */}

          <div className="ss-result-section">

            <h3>
              💰{" "}
              {t(
                "benefitsH",
                lang
              )}
            </h3>

            <ul className="ss-list">

              {activeScheme.benefits.map(
                (benefit, index) => (
                  <li key={index}>
                    {benefit}
                  </li>
                )
              )}

            </ul>

          </div>

          {/* DOCUMENTS */}

          <div className="ss-result-section">

            <h3>
              <FileText size={16} />

              {t(
                "documentsH",
                lang
              )}
            </h3>

            <ul className="ss-doc-checklist">

              {activeScheme.documents.map(
                (document, index) => (
                  <li key={index}>
                    {document}
                  </li>
                )
              )}

            </ul>

          </div>

          {/* PARTNERS */}

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
              {formData.district},{" "}
              {formData.state}
            </p>

            <div className="ss-partner-list">

              {activeScheme.partners.map(
                (partner, index) => (
                  <div
                    className="ss-partner-card"
                    key={index}
                  >

                    <Users size={15} />

                    {partner}

                  </div>
                )
              )}

            </div>

            <a
              className="ss-official-link"
              href={
                activeScheme.sourceUrl
              }
              target="_blank"
              rel="noreferrer"
            >

              {t(
                "officialLink",
                lang
              )}

              {" — "}

              {activeScheme.sourceName}

              <ExternalLink
                size={14}
              />

            </a>

          </div>

        </div>

        {/* ALTERNATES */}

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

                        {scheme.eligible
                          ? "✓ "
                          : ""}

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
                      {scheme.match}%
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