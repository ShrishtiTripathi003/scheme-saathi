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
  EDUCATION_LEVELS,
  OCCUPATION_OPTIONS,
  PROJECT_TYPE_OPTIONS,
  PURPOSE_OPTIONS,
  getMatchedSchemes,
} from "./schemes";

import { districts } from "./districts";

import "./App.css";


// ============================================================
// TRANSLATION
// ============================================================

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
      "Tell us what you need and we'll compare relevant government schemes, eligibility conditions, benefits and application information.",
    hi:
      "हमें बताएं कि आपको किस सहायता की आवश्यकता है और हम संबंधित सरकारी योजनाओं, पात्रता शर्तों, लाभ और आवेदन जानकारी की तुलना करेंगे।",
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
    en: "Purpose-first matching",
    hi: "उद्देश्य के आधार पर मिलान",
  },

  feat1t: {
    en:
      "Your actual requirement is compared with the activities supported by each scheme.",
    hi:
      "आपकी वास्तविक आवश्यकता की तुलना प्रत्येक योजना की समर्थित गतिविधियों से की जाती है।",
  },

  feat2h: {
    en: "Eligibility separately checked",
    hi: "पात्रता अलग से जांची जाती है",
  },

  feat2t: {
    en:
      "A high match score does not automatically mean government eligibility.",
    hi:
      "उच्च मिलान स्कोर का अर्थ स्वतः सरकारी पात्रता नहीं है।",
  },

  feat3h: {
    en: "Documents & official source",
    hi: "दस्तावेज़ और आधिकारिक स्रोत",
  },

  feat3t: {
    en:
      "See documents, implementing agencies and the official scheme page.",
    hi:
      "दस्तावेज़, कार्यान्वयन एजेंसी और आधिकारिक योजना पृष्ठ देखें।",
  },

  formBack: {
    en: "Back",
    hi: "वापस",
  },

  formBadge: {
    en: "Government-aligned scheme matching",
    hi: "सरकारी नियम आधारित योजना मिलान",
  },

  formTitle: {
    en: "Tell us about yourself",
    hi: "अपने बारे में बताएं",
  },

  formSub: {
    en:
      "Only information relevant to scheme matching is requested.",
    hi:
      "केवल योजना मिलान के लिए आवश्यक जानकारी मांगी जाती है।",
  },

  partA: {
    en: "Part A — Your requirement",
    hi: "भाग A — आपकी आवश्यकता",
  },

  partB: {
    en: "Part B — Your profile",
    hi: "भाग B — आपकी प्रोफ़ाइल",
  },

  partC: {
    en: "Part C — Eligibility details",
    hi: "भाग C — पात्रता विवरण",
  },

  partD: {
    en: "Part D — Location",
    hi: "भाग D — स्थान",
  },

  purposeQ: {
    en: "What do you need help with?",
    hi: "आपको किस चीज़ में मदद चाहिए?",
  },

  category: {
    en: "Social category",
    hi: "सामाजिक श्रेणी",
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

  income: {
    en: "Annual family income",
    hi: "वार्षिक पारिवारिक आय",
  },

  projectCost: {
    en: "Estimated project / activity cost",
    hi: "अनुमानित परियोजना / गतिविधि लागत",
  },

  education: {
    en: "Highest education completed",
    hi: "उच्चतम शिक्षा",
  },

  newEnterprise: {
    en: "Is this a new enterprise / project?",
    hi: "क्या यह नया उद्यम / परियोजना है?",
  },

  previousSubsidy: {
    en:
      "Have you already received government subsidy for this unit/project?",
    hi:
      "क्या इस इकाई/परियोजना के लिए पहले सरकारी सब्सिडी मिली है?",
  },

  previousTarun: {
    en:
      "Have you successfully repaid a previous MUDRA Tarun loan?",
    hi:
      "क्या आपने पिछला MUDRA Tarun ऋण सफलतापूर्वक चुका दिया है?",
  },

  gender: {
    en: "Gender",
    hi: "लिंग",
  },

  artisanTrade: {
    en: "Traditional artisan trade",
    hi: "पारंपरिक शिल्प ट्रेड",
  },

  similarGovernmentLoan: {
    en:
      "Have you taken a similar government self-employment/business loan in the last 5 years?",
    hi:
      "क्या पिछले 5 वर्षों में समान सरकारी स्व-रोजगार/व्यवसाय ऋण लिया है?",
  },

  governmentEmployee: {
    en: "Are you a government employee?",
    hi: "क्या आप सरकारी कर्मचारी हैं?",
  },

  streetVendorProof: {
    en:
      "Do you have street-vendor identification/certificate or applicable proof?",
    hi:
      "क्या आपके पास स्ट्रीट वेंडर पहचान/प्रमाणपत्र या लागू प्रमाण है?",
  },

  farmerStatus: {
    en: "Are you currently a farmer?",
    hi: "क्या आप वर्तमान में किसान हैं?",
  },

  landAvailable: {
    en: "Is land available for the proposed activity?",
    hi: "क्या प्रस्तावित गतिविधि के लिए भूमि उपलब्ध है?",
  },

  agriculturalPump: {
    en: "Do you have an agricultural pump?",
    hi: "क्या आपके पास कृषि पंप है?",
  },

  student: {
    en: "I am currently a student",
    hi: "मैं वर्तमान में छात्र/छात्रा हूँ",
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

  optional: {
    en: "Optional",
    hi: "वैकल्पिक",
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
    hi: "आपके लिए मिली योजनाएं",
  },

  resultsSub: {
    en:
      "Match score shows relevance. Eligibility is checked separately.",
    hi:
      "मिलान स्कोर प्रासंगिकता बताता है। पात्रता अलग से जांची जाती है।",
  },

  bestMatch: {
    en: "Best match",
    hi: "सर्वश्रेष्ठ मिलान",
  },

  matchScore: {
    en: "Match score",
    hi: "मिलान स्कोर",
  },

  eligibility: {
    en: "Eligibility",
    hi: "पात्रता",
  },

  likelyEligible: {
    en: "Likely eligible",
    hi: "संभावित रूप से पात्र",
  },

  conditionsMissing: {
    en: "Conditions not met",
    hi: "कुछ शर्तें पूरी नहीं हुईं",
  },

  eligibilityBreakdown: {
    en: "Government eligibility checks",
    hi: "सरकारी पात्रता जांच",
  },

  whyMatch: {
    en: "Why this scheme matched",
    hi: "यह योजना क्यों मिली",
  },

  benefitsH: {
    en: "Benefits",
    hi: "लाभ",
  },

  documentsH: {
    en: "Documents you may need",
    hi: "संभावित ज़रूरी दस्तावेज़",
  },

  partnersH: {
    en: "Where to apply",
    hi: "कहाँ आवेदन करें",
  },

  loanAmount: {
    en: "Loan / financial support",
    hi: "ऋण / वित्तीय सहायता",
  },

  interest: {
    en: "Interest / rate",
    hi: "ब्याज / दर",
  },

  repayment: {
    en: "Repayment",
    hi: "भुगतान",
  },

  officialLink: {
    en: "Open official page",
    hi: "आधिकारिक पृष्ठ खोलें",
  },

  otherMatches: {
    en: "Other relevant schemes",
    hi: "अन्य संबंधित योजनाएं",
  },

  viewDetails: {
    en: "View details",
    hi: "विवरण देखें",
  },

  noMatch: {
    en:
      "No directly relevant scheme was found for this requirement.",
    hi:
      "इस आवश्यकता के लिए कोई सीधे संबंधित योजना नहीं मिली।",
  },

  disclaimer: {
    en:
      "Scheme Saathi is an independent guide, not a government website. Match scores and eligibility checks are indicative. Final eligibility is determined by the relevant implementing agency and current scheme guidelines.",
    hi:
      "स्कीम साथी एक स्वतंत्र मार्गदर्शक है, कोई सरकारी वेबसाइट नहीं। मिलान स्कोर और पात्रता जांच संकेतात्मक हैं। अंतिम पात्रता संबंधित कार्यान्वयन एजेंसी और वर्तमान योजना दिशानिर्देशों द्वारा निर्धारित होती है।",
  },
};


function t(key, lang) {
  return (
    STR[key]?.[lang] ??
    key
  );
}


// ============================================================
// HELPERS
// ============================================================

function labelOf(
  option,
  lang
) {
  if (!option) return "";

  if (
    typeof option.label ===
    "object"
  ) {
    return (
      option.label?.[lang] ??
      option.label?.en ??
      ""
    );
  }

  return option.label ?? "";
}


function iconForPurpose(
  value
) {
  switch (value) {
    case "business":
      return Store;

    case "street-vending":
      return Landmark;

    case "artisan":
      return Hammer;

    case "agriculture":
      return Wheat;

    case "solar":
      return Sparkles;

    case "livestock":
      return Wheat;

    default:
      return Store;
  }
}


// ============================================================
// STAMP
// ============================================================

function circlePath(
  cx,
  cy,
  r
) {
  return `
    M ${cx + r},${cy}
    A ${r},${r} 0 1,1 ${cx - r},${cy}
    A ${r},${r} 0 1,1 ${cx + r},${cy}
  `;
}


function StampSeal({
  percent,
  size = 116,
}) {
  const rawId = useId();

  const pathId =
    `seal-${rawId.replace(
      /:/g,
      ""
    )}`;

  const cx =
    size / 2;

  const cy =
    size / 2;

  const r =
    size / 2 -
    size * 0.16;

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
      className="ss-stamp"
      aria-label={`${percent}% match`}
      role="img"
    >
      <defs>
        <path
          id={pathId}
          d={circlePath(
            cx,
            cy,
            r
          )}
          fill="none"
        />
      </defs>

      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill="none"
        stroke="var(--stamp)"
        strokeWidth={
          size * 0.028
        }
      />

      <circle
        cx={cx}
        cy={cy}
        r={
          r -
          size * 0.075
        }
        fill="none"
        stroke="var(--stamp)"
        strokeWidth={
          size * 0.012
        }
        strokeDasharray={`${size * 0.02} ${size * 0.028}`}
      />

      <text
        x={cx}
        y={
          cy +
          size * 0.07
        }
        textAnchor="middle"
        fill="var(--stamp)"
        fontFamily="var(--font-display)"
        fontWeight="700"
        fontSize={
          size * 0.25
        }
      >
        {percent}%
      </text>

      <text
        x={cx}
        y={
          cy +
          size * 0.23
        }
        textAnchor="middle"
        fill="var(--stamp)"
        fontFamily="var(--font-mono)"
        fontSize={
          size * 0.065
        }
        letterSpacing="2"
      >
        MATCH
      </text>
    </svg>
  );
}


// ============================================================
// CHECK ROW
// ============================================================

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

      <span
        className={
          ok
            ? ""
            : "ss-text-muted"
        }
      >
        {children}
      </span>
    </div>
  );
}


// ============================================================
// PERFORATION
// ============================================================

function Perforation() {
  return (
    <div
      className="ss-perforation"
      aria-hidden="true"
    />
  );
}


// ============================================================
// NAVBAR
// ============================================================

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
            <h2>
              Scheme Saathi
            </h2>

            <p>
              {t(
                "navTag",
                lang
              )}
            </p>
          </div>

        </div>


        <button
          type="button"
          className="ss-lang-btn"
          onClick={() =>
            setLang(
              lang ===
                "en"
                ? "hi"
                : "en"
            )
          }
        >
          <Globe
            size={15}
          />

          {t(
            "langBtn",
            lang
          )}
        </button>

      </div>

    </nav>
  );
}


// ============================================================
// HOME
// ============================================================

function HomeView({
  lang,
  setLang,
  onStart,
}) {
  const features = [
    {
      Icon: Sparkles,
      h: "feat1h",
      p: "feat1t",
    },
    {
      Icon: CheckCircle2,
      h: "feat2h",
      p: "feat2t",
    },
    {
      Icon: FileText,
      h: "feat3h",
      p: "feat3t",
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
            🇮🇳{" "}
            {t(
              "heroKicker",
              lang
            )}
          </div>

          <h1 className="ss-hero-title">

            {t(
              "heroTitle1",
              lang
            )}{" "}

            <span className="ss-hero-accent">
              {t(
                "heroTitle2",
                lang
              )}
            </span>{" "}

            {t(
              "heroTitle3",
              lang
            )}

          </h1>

          <p className="ss-hero-text">
            {t(
              "heroText",
              lang
            )}
          </p>

          <button
            type="button"
            className="ss-btn-primary"
            onClick={
              onStart
            }
          >
            {t(
              "ctaStart",
              lang
            )}

            <ArrowRight
              size={18}
            />
          </button>

          <p className="ss-small-tag">
            {t(
              "smallTag",
              lang
            )}
          </p>

        </div>


        <div
          className="ss-hero-doc"
          aria-hidden="true"
        >

          <div className="ss-doc-header">

            <FileText
              size={16}
            />

            <span>
              Scheme Saathi
            </span>

          </div>

          <div
            className="ss-doc-line"
            style={{
              width: "78%",
            }}
          />

          <div
            className="ss-doc-line"
            style={{
              width: "54%",
            }}
          />

          <div
            className="ss-doc-line"
            style={{
              width: "66%",
            }}
          />

          <Perforation />

          <div className="ss-doc-stamp-wrap">

            <StampSeal
              percent={94}
              size={104}
            />

            <div>

              <strong>
                Verified-style match
              </strong>

              <span
                className="ss-text-muted"
                style={{
                  display:
                    "block",
                  fontSize:
                    "0.8rem",
                }}
              >
                Illustrative only
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
            p,
          }) => (
            <div
              className="ss-feature"
              key={h}
            >

              <div className="ss-feature-icon">
                <Icon
                  size={20}
                />
              </div>

              <h3>
                {t(h, lang)}
              </h3>

              <p>
                {t(p, lang)}
              </p>

            </div>
          )
        )}

      </section>


      <footer className="ss-footer ss-footer-dark">
        <p>
          {t(
            "disclaimer",
            lang
          )}
        </p>
      </footer>

    </div>
  );
}


// ============================================================
// FORM
// ============================================================

function FormView({
  lang,
  setLang,
  formData,
  handleChange,
  handleSubmit,
  onBack,
}) {
  const adult =
    Number(
      formData.age
    ) >= 18;


  const progress = [
    [
      "purpose",
      "category",
    ].every(
      (key) =>
        String(
          formData[key] ??
            ""
        ).length > 0
    ),

    [
      "age",
      "income",
      "projectCost",
      "education",
    ].every(
      (key) =>
        String(
          formData[key] ??
            ""
        ).length > 0
    ),

    true,

    [
      "state",
      "district",
    ].every(
      (key) =>
        String(
          formData[key] ??
            ""
        ).length > 0
    ),
  ];


  const trades = [
    "Carpenter",
    "Boat Maker",
    "Armourer",
    "Blacksmith",
    "Hammer and Tool Kit Maker",
    "Locksmith",
    "Goldsmith",
    "Potter",
    "Sculptor",
    "Stone Worker",
    "Cobbler",
    "Mason",
    "Basket / Mat / Broom Maker",
    "Traditional Toy Maker",
    "Barber",
    "Garland Maker",
    "Washerman",
    "Tailor",
    "Fishing Net Maker",
  ];


  return (
    <div className="ss-shell">

      <NavBar
        lang={lang}
        setLang={setLang}
      />

      <div className="ss-page">

        <button
          type="button"
          className="ss-back-btn"
          onClick={onBack}
        >
          <ChevronLeft
            size={16}
          />

          {t(
            "formBack",
            lang
          )}
        </button>


        <div className="ss-page-header">

          <div className="ss-badge">
            🎯{" "}
            {t(
              "formBadge",
              lang
            )}
          </div>

          <h1>
            {t(
              "formTitle",
              lang
            )}
          </h1>

          <p>
            {t(
              "formSub",
              lang
            )}
          </p>

        </div>


        <div className="ss-progress">

          {progress.map(
            (done, index) => (
              <div
                key={index}
                className={`ss-progress-dot ${
                  done
                    ? "ss-progress-dot-on"
                    : ""
                }`}
              />
            )
          )}

        </div>


        <form
          className="ss-form"
          onSubmit={
            handleSubmit
          }
        >

          {/* ==================================================
              PART A
              ================================================== */}

          <fieldset className="ss-part">

            <legend>
              {t(
                "partA",
                lang
              )}
            </legend>


            <div className="ss-form-group">

              <label>
                {t(
                  "purposeQ",
                  lang
                )}
              </label>


              <div className="ss-purpose-grid">

                {PURPOSE_OPTIONS.map(
                  (option) => {
                    const Icon =
                      iconForPurpose(
                        option.value
                      );

                    return (
                      <label
                        key={
                          option.value
                        }
                        className={`ss-purpose-card ${
                          formData.purpose ===
                          option.value
                            ? "ss-purpose-card-on"
                            : ""
                        }`}
                      >

                        <input
                          type="radio"
                          name="purpose"
                          value={
                            option.value
                          }
                          checked={
                            formData.purpose ===
                            option.value
                          }
                          onChange={
                            handleChange
                          }
                          required
                        />

                        <Icon
                          size={18}
                        />

                        <span>
                          {labelOf(
                            option,
                            lang
                          )}
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
                  {t(
                    "category",
                    lang
                  )}
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
                    —
                  </option>

                  {CATEGORY_OPTIONS.map(
                    (
                      option
                    ) => (
                      <option
                        key={
                          option.value
                        }
                        value={
                          option.value
                        }
                      >
                        {
                          option.label
                        }
                      </option>
                    )
                  )}

                </select>

              </div>


              {adult && (
                <div className="ss-form-group">

                  <label>
                    {t(
                      "occupation",
                      lang
                    )}
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
                      —
                    </option>

                    {OCCUPATION_OPTIONS.map(
                      (
                        option
                      ) => (
                        <option
                          key={
                            option.value
                          }
                          value={
                            option.value
                          }
                        >
                          {labelOf(
                            option,
                            lang
                          )}
                        </option>
                      )
                    )}

                  </select>

                </div>
              )}

            </div>


            <div className="ss-form-row">

              <div className="ss-form-group">

                <label>
                  {t(
                    "projectType",
                    lang
                  )}
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
                    —
                  </option>

                  {PROJECT_TYPE_OPTIONS.map(
                    (
                      option
                    ) => (
                      <option
                        key={
                          option.value
                        }
                        value={
                          option.value
                        }
                      >
                        {labelOf(
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
              {t(
                "partB",
                lang
              )}
            </legend>


            <div className="ss-form-row">

              <div className="ss-form-group">

                <label>
                  {t(
                    "age",
                    lang
                  )}
                </label>

                <input
                  type="number"
                  name="age"
                  min="1"
                  max="100"
                  value={
                    formData.age
                  }
                  onChange={
                    handleChange
                  }
                  required
                />

              </div>


              <div className="ss-form-group">

                <label>
                  {t(
                    "education",
                    lang
                  )}
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
                    —
                  </option>

                  {EDUCATION_LEVELS.map(
                    (
                      option
                    ) => (
                      <option
                        key={
                          option.value
                        }
                        value={
                          option.value
                        }
                      >
                        {labelOf(
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
                  {t(
                    "income",
                    lang
                  )}
                </label>

                <div className="ss-input-wrapper">

                  <span>
                    ₹
                  </span>

                  <input
                    type="number"
                    name="income"
                    min="0"
                    value={
                      formData.income
                    }
                    onChange={
                      handleChange
                    }
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

                  <span>
                    ₹
                  </span>

                  <input
                    type="number"
                    name="projectCost"
                    min="0"
                    value={
                      formData.projectCost
                    }
                    onChange={
                      handleChange
                    }
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
              {t(
                "partC",
                lang
              )}
            </legend>


            <div className="ss-form-row">

              <div className="ss-form-group">

                <label>
                  {t(
                    "newEnterprise",
                    lang
                  )}
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


              <div className="ss-form-group">

                <label>
                  {t(
                    "previousSubsidy",
                    lang
                  )}
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


            <div className="ss-form-row">

              <div className="ss-form-group">

                <label>
                  {t(
                    "gender",
                    lang
                  )}
                </label>

                <select
                  name="gender"
                  value={
                    formData.gender
                  }
                  onChange={
                    handleChange
                  }
                >

                  <option value="">
                    Select
                  </option>

                  <option value="female">
                    Female
                  </option>

                  <option value="male">
                    Male
                  </option>

                  <option value="other">
                    Other
                  </option>

                </select>

              </div>


              <div className="ss-form-group">

                <label>
                  {t(
                    "previousTarun",
                    lang
                  )}
                </label>

                <select
                  name="previousTarunLoanRepaid"
                  value={
                    formData.previousTarunLoanRepaid
                  }
                  onChange={
                    handleChange
                  }
                >

                  <option value="">
                    {t(
                      "optional",
                      lang
                    )}
                  </option>

                  <option value="yes">
                    Yes
                  </option>

                  <option value="no">
                    No
                  </option>

                  <option value="not-applicable">
                    Not applicable
                  </option>

                </select>

              </div>

            </div>


            <div className="ss-form-row">

              <div className="ss-form-group">

                <label>
                  {t(
                    "artisanTrade",
                    lang
                  )}
                </label>

                <select
                  name="artisanTrade"
                  value={
                    formData.artisanTrade
                  }
                  onChange={
                    handleChange
                  }
                >

                  <option value="">
                    {t(
                      "optional",
                      lang
                    )}
                  </option>

                  {trades.map(
                    (
                      trade
                    ) => (
                      <option
                        key={
                          trade
                        }
                        value={
                          trade
                        }
                      >
                        {trade}
                      </option>
                    )
                  )}

                </select>

              </div>


              <div className="ss-form-group">

                <label>
                  {t(
                    "streetVendorProof",
                    lang
                  )}
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
                    {t(
                      "optional",
                      lang
                    )}
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


            <div className="ss-form-row">

              <div className="ss-form-group">

                <label>
                  {t(
                    "similarGovernmentLoan",
                    lang
                  )}
                </label>

                <select
                  name="similarGovernmentLoanLast5Years"
                  value={
                    formData.similarGovernmentLoanLast5Years
                  }
                  onChange={
                    handleChange
                  }
                >

                  <option value="">
                    {t(
                      "optional",
                      lang
                    )}
                  </option>

                  <option value="yes">
                    Yes
                  </option>

                  <option value="no">
                    No
                  </option>

                </select>

              </div>


              <div className="ss-form-group">

                <label>
                  {t(
                    "governmentEmployee",
                    lang
                  )}
                </label>

                <select
                  name="governmentEmployee"
                  value={
                    formData.governmentEmployee
                  }
                  onChange={
                    handleChange
                  }
                >

                  <option value="">
                    {t(
                      "optional",
                      lang
                    )}
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


            <div className="ss-form-row">

              <div className="ss-form-group">

                <label>
                  {t(
                    "farmerStatus",
                    lang
                  )}
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
                    {t(
                      "optional",
                      lang
                    )}
                  </option>

                  <option value="yes">
                    Yes
                  </option>

                  <option value="no">
                    No
                  </option>

                </select>

              </div>


              <div className="ss-form-group">

                <label>
                  {t(
                    "landAvailable",
                    lang
                  )}
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
                    {t(
                      "optional",
                      lang
                    )}
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


            <div className="ss-form-row">

              <div className="ss-form-group">

                <label>
                  {t(
                    "agriculturalPump",
                    lang
                  )}
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
                    {t(
                      "optional",
                      lang
                    )}
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


            <label className="ss-checkbox-row">

              <input
                type="checkbox"
                name="isStudent"
                checked={
                  formData.isStudent
                }
                onChange={
                  handleChange
                }
              />

              {t(
                "student",
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
              {t(
                "partD",
                lang
              )}
            </legend>


            <div className="ss-form-row">

              <div className="ss-form-group">

                <label>
                  {t(
                    "state",
                    lang
                  )}
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
                    —
                  </option>

                  {ALL_STATES.map(
                    (
                      state
                    ) => (
                      <option
                        key={
                          state
                        }
                        value={
                          state
                        }
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
                  onChange={
                    handleChange
                  }
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

                  {Array.isArray(
                    districts[
                      formData.state
                    ]
                  ) &&
                    districts[
                      formData.state
                    ].map(
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

              </div>

            </div>

          </fieldset>


          <button
            type="submit"
            className="ss-btn-primary ss-btn-full"
          >
            {t(
              "submit",
              lang
            )}

            <ArrowRight
              size={18}
            />
          </button>

        </form>

      </div>

    </div>
  );
}


// ============================================================
// RESULTS
// ============================================================

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
        (scheme) =>
          scheme.id !==
          activeScheme.id
      )
      .slice(0, 3);


  return (
    <div className="ss-shell">

      <NavBar
        lang={lang}
        setLang={setLang}
      />

      <div className="ss-page">

        <button
          type="button"
          className="ss-back-btn"
          onClick={onBack}
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
            🎯{" "}
            {t(
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
                {
                  activeScheme.description
                }
              </p>


              <div
                className={
                  activeScheme.eligible
                    ? "ss-status ss-status-good"
                    : "ss-status ss-status-warning"
                }
              >

                {activeScheme.eligible ? (
                  <>
                    <CheckCircle2
                      size={15}
                    />

                    {t(
                      "likelyEligible",
                      lang
                    )}
                  </>
                ) : (
                  <>
                    <XCircle
                      size={15}
                    />

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


          {/* MATCH SCORE */}

          <div className="ss-result-section">

            <h3>
              <Sparkles
                size={16}
              />

              {t(
                "matchScore",
                lang
              )}

              :{" "}

              {
                activeScheme.match
              }%

            </h3>

          </div>


          {/* ELIGIBILITY */}

          <div className="ss-result-section">

            <h3>

              <CheckCircle2
                size={16}
              />

              {t(
                "eligibilityBreakdown",
                lang
              )}

            </h3>


            <div className="ss-eligibility-grid">

              {Array.isArray(
                activeScheme.checks
              ) &&
                activeScheme.checks.map(
                  (
                    check
                  ) => (
                    <CheckRow
                      key={
                        check.key
                      }
                      ok={
                        check.ok
                      }
                    >
                      {
                        check.label[
                          lang
                        ]
                      }
                    </CheckRow>
                  )
                )}

            </div>

          </div>


          {/* WHY MATCH */}

          {activeScheme.reasons?.length >
            0 && (
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
                  (
                    reason,
                    index
                  ) => (
                    <li
                      key={
                        index
                      }
                    >

                      <CheckCircle2
                        size={15}
                      />

                      {
                        reason[
                          lang
                        ]
                      }

                    </li>
                  )
                )}

              </ul>

            </div>
          )}


          {/* WARNINGS */}

          {activeScheme.warnings?.length >
            0 && (
            <div className="ss-result-section">

              <h3>
                <XCircle
                  size={16}
                />

                {t(
                  "conditionsMissing",
                  lang
                )}
              </h3>


              <ul className="ss-list">

                {activeScheme.warnings.map(
                  (
                    warning,
                    index
                  ) => (
                    <li
                      key={
                        index
                      }
                    >
                      {
                        warning[
                          lang
                        ]
                      }
                    </li>
                  )
                )}

              </ul>

            </div>
          )}


          {/* MONEY */}

          <div className="ss-scheme-details">

            <div className="ss-detail-box">

              <Wallet
                size={18}
              />

              <small>
                {t(
                  "loanAmount",
                  lang
                )}
              </small>

              <strong>
                {
                  activeScheme.loanAmount ??
                  "—"
                }
              </strong>

            </div>


            <div className="ss-detail-box">

              <Banknote
                size={18}
              />

              <small>
                {t(
                  "interest",
                  lang
                )}
              </small>

              <strong>
                {
                  activeScheme.interest ??
                  "—"
                }
              </strong>

            </div>


            <div className="ss-detail-box">

              <Building2
                size={18}
              />

              <small>
                {t(
                  "repayment",
                  lang
                )}
              </small>

              <strong>
                {
                  activeScheme.emi ??
                  "—"
                }
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

              {(activeScheme.benefits ??
                []
              ).map(
                (
                  benefit,
                  index
                ) => (
                  <li
                    key={
                      index
                    }
                  >
                    {benefit}
                  </li>
                )
              )}

            </ul>

          </div>


          {/* DOCUMENTS */}

          <div className="ss-result-section">

            <h3>

              <FileText
                size={16}
              />

              {t(
                "documentsH",
                lang
              )}

            </h3>


            <ul className="ss-doc-checklist">

              {(activeScheme.documents ??
                []
              ).map(
                (
                  document,
                  index
                ) => (
                  <li
                    key={
                      index
                    }
                  >
                    {document}
                  </li>
                )
              )}

            </ul>

          </div>


          {/* APPLY */}

          <div className="ss-result-section">

            <h3>

              <MapPin
                size={16}
              />

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

              {(
                activeScheme.implementingAgency ??
                []
              ).map(
                (
                  agency,
                  index
                ) => (
                  <div
                    className="ss-partner-card"
                    key={
                      index
                    }
                  >

                    <Users
                      size={15}
                    />

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

                {
                  activeScheme.officialSource
                }

                <ExternalLink
                  size={14}
                />

              </a>
            )}

          </div>

        </div>


        {/* ALTERNATES */}

        {alternates.length >
          0 && (
          <div className="ss-alternates">

            <h3>
              {t(
                "otherMatches",
                lang
              )}
            </h3>


            <div className="ss-alternates-grid">

              {alternates.map(
                (
                  scheme
                ) => (
                  <button
                    key={
                      scheme.id
                    }
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
                        {
                          scheme.name
                        }
                      </strong>

                      <span className="ss-text-muted">

                        {
                          scheme.match
                        }%

                        {" "}

                        {t(
                          "matchScore",
                          lang
                        )}

                        <ChevronRight
                          size={13}
                        />

                      </span>

                    </div>


                    <span className="ss-alt-score">
                      {
                        scheme.match
                      }%
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


// ============================================================
// MAIN APP
// ============================================================

export default function App() {

  useEffect(() => {
    const id =
      "scheme-saathi-fonts";

    if (
      !document.getElementById(
        id
      )
    ) {
      const link =
        document.createElement(
          "link"
        );

      link.id = id;
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap";

      document.head.appendChild(
        link
      );
    }
  }, []);


  const [lang, setLang] =
    useState("en");


  const [view, setView] =
    useState("home");


  const [results, setResults] =
    useState([]);


  const [
    activeResultId,
    setActiveResultId,
  ] = useState(null);


  const [formData, setFormData] =
    useState({
      purpose: "",
      category: "",
      occupation: "",
      projectType: "",

      age: "",
      income: "",
      projectCost: "",
      education: "",

      isNewEnterprise: "",
      previousGovernmentSubsidy: "",
      previousTarunLoanRepaid: "",

      gender: "",

      artisanTrade: "",
      similarGovernmentLoanLast5Years:
        "",
      governmentEmployee: "",

      streetVendorProof: "",

      farmerStatus: "",
      landAvailable: "",
      existingAgriculturalPump:
        "",

      isStudent: false,

      state: "",
      district: "",
    });


  // ==========================================================
  // CHANGE
  // ==========================================================

  const handleChange = (
    event
  ) => {
    const {
      name,
      value,
      type,
      checked,
    } = event.target;


    setFormData(
      (previous) => {

        const next = {
          ...previous,

          [name]:
            type ===
            "checkbox"
              ? checked
              : value,
        };


        // ----------------------------------------------------
        // AGE ↔ OCCUPATION
        // ----------------------------------------------------

        if (
          name === "age" &&
          Number(value) <
            18
        ) {
          next.occupation =
            "";
        }


        // ----------------------------------------------------
        // STATE ↔ DISTRICT
        // ----------------------------------------------------

        if (
          name === "state"
        ) {
          next.district =
            "";
        }


        return next;
      }
    );
  };


  // ==========================================================
  // SUBMIT
  // ==========================================================

  const handleSubmit = (
    event
  ) => {
    event.preventDefault();


    try {

      const matched =
        getMatchedSchemes(
          formData
        );


      const safeResults =
        Array.isArray(
          matched
        )
          ? matched
          : [];


      setResults(
        safeResults
      );


      setActiveResultId(
        safeResults[0]
          ?.id ?? null
      );


      setView(
        "results"
      );


      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    } catch (error) {

      console.error(
        "SCHEME MATCHING ERROR:",
        error
      );

      alert(
        "Something went wrong while matching schemes. Please check the browser console."
      );
    }
  };


  // ==========================================================
  // ACTIVE RESULT
  // ==========================================================

  const activeScheme =
    useMemo(
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

      {view ===
        "home" && (
        <HomeView
          lang={lang}
          setLang={
            setLang
          }
          onStart={() =>
            setView(
              "form"
            )
          }
        />
      )}


      {view ===
        "form" && (
        <FormView
          lang={lang}
          setLang={
            setLang
          }
          formData={
            formData
          }
          handleChange={
            handleChange
          }
          handleSubmit={
            handleSubmit
          }
          onBack={() =>
            setView(
              "home"
            )
          }
        />
      )}


      {view ===
        "results" &&
        activeScheme && (
          <ResultsView
            lang={lang}
            setLang={
              setLang
            }
            formData={
              formData
            }
            results={
              results
            }
            activeScheme={
              activeScheme
            }
            setActiveResultId={
              setActiveResultId
            }
            onBack={() =>
              setView(
                "form"
              )
            }
          />
        )}


      {view ===
        "results" &&
        !activeScheme && (
        <div className="ss-shell">

          <NavBar
            lang={lang}
            setLang={
              setLang
            }
          />

          <div className="ss-page">

            <button
              type="button"
              className="ss-back-btn"
              onClick={() =>
                setView(
                  "form"
                )
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
                ℹ️
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