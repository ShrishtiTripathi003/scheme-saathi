// translations.js
// Minimal i18n layer for Scheme Saathi.
//
// GAP THIS FIXES: the language <select> in the navbar previously changed
// state but never touched any rendered text, so "multi-lingual" was
// cosmetic only. This file wires it up for real.
//
// SCOPE NOTE: English and Hindi are fully translated below. The other
// languages listed in AVAILABLE_LANGUAGES fall back to English rather
// than crashing or showing blanks. To add a language, copy the English
// block, translate the values, and add it under its key here — no other
// code changes are needed.

export const AVAILABLE_LANGUAGES = [
  "English",
  "हिन्दी",
  "বাংলা",
  "ગુજરાતી",
  "मराठी",
  "தமிழ்",
  "తెలుగు",
  "ಕನ್ನಡ",
  "മലയാളം",
  "ਪੰਜਾਬੀ",
];

export const translations = {
  English: {
    nav_tagline: "Your path to the right government scheme",
    login: "Login",
    logout: "Logout",

    hero_badge: "🇮🇳 Government Scheme Assistance",
    hero_title_1: "Find the right",
    hero_title_highlight: "government scheme",
    hero_title_2: "for you",
    hero_text:
      "Answer a short form and get matched schemes, benefit details, documents, and where to apply.",
    hero_cta: "Find my scheme",
    hero_disclaimer: "Independent guide · Not an official portal",
    match_preview_label: "Illustrative match",
    match_preview_title: "Best scheme for your needs",

    feature1_title: "Matched to you",
    feature1_text:
      "We compare your purpose, age, income, education and location.",
    feature2_title: "Money, made clear",
    feature2_text:
      "See loan limits, interest, subsidies and repayment information in one place.",
    feature3_title: "Papers & partners",
    feature3_text:
      "Know the documents and the type of office or institution that handles the scheme.",
    feature4_title: "Multi-Lingual",
    feature4_text:
      "Built for multilingual accessibility and easier public-service discovery.",

    back: "← Back",
    form_badge: "🎯 Smart scheme matching",
    form_title: "Application form",
    form_subtitle:
      "Fill in your details and we will rank schemes based on your answers.",

    section_need: "What you need",
    need_question: "What do you need help with?",
    purpose_business: "Start / expand a business",
    purpose_education: "Education",
    purpose_vending: "Street vending",
    purpose_artisan: "Artisan / traditional trade",
    purpose_agri: "Agriculture / farming",
    label_category: "Category",
    label_occupation: "Occupation",
    select_occupation: "Select occupation",
    occ_vendor: "Street vendor",
    occ_farmer: "Farmer",
    occ_artisan: "Artisan",
    occ_student: "Student",
    occ_entrepreneur: "Entrepreneur",
    label_project_type: "Project type",
    select_project_type: "Select project type",

    section_details: "Your details",
    label_age: "Age",
    label_education_level: "Highest education completed",
    select_education_level: "Select education level",
    edu_below8: "Below 8th standard",
    edu_8_10: "8th–10th standard",
    edu_12: "12th standard",
    edu_grad: "Graduate",
    edu_pg: "Postgraduate",
    label_income: "Annual family income",
    label_project_cost: "Estimated project / education cost",

    section_location: "Location details",
    label_state: "State / Union Territory",
    select_state: "Select State / UT",
    label_district: "District",
    select_district: "Select district",
    enter_district: "Enter district",
    label_pincode: "PIN code",
    pincode_placeholder: "6-digit PIN code",
    location_note:
      "📍 Your selected state is used to identify nearby eligible channel partners.",

    submit_cta: "Find my scheme →",

    result_title: "Your recommended scheme",
    result_subtitle:
      "We found the most suitable scheme based on your information.",
    best_match: "✓ Best Match",
    partial_match: "~ Partial Match",
    result_match_label: "Match",
    result_desc:
      "Personalized recommendation based on your purpose, income, cost, education, category and location.",
    low_match_warning:
      "Your profile only partially matches this scheme. Please verify eligibility with the channel partner before applying.",

    eligibility_title: "Why you're eligible",
    check_purpose: "Purpose suitability",
    check_age: "Age within range",
    check_income: "Income within scheme limit",
    check_project_cost: "Project cost within limit",
    check_education: "Education criteria met",
    check_project_type: "Project type supported",
    check_category: "Category eligible for this scheme",

    max_loan: "Maximum Loan",
    interest_rate: "Interest Rate",
    moratorium: "Moratorium",
    documents_title: "📄 Required Documents",

    calculator_title: "💰 Financial Calculator",
    loan_amount: "Loan Amount",
    interest_rate_pct: "Interest Rate (%)",
    tenure_months: "Tenure (months)",
    estimated_emi: "Estimated EMI",

    partner_title: "📍 Nearby Channel Partner",
    partner_desc_prefix: "Finding the nearest eligible channel partner for",
    partner_desc_suffix: "based on your selected state.",
    map_title: "🗺️ Location Map",
    map_unavailable: "Map unavailable for this location.",
    no_partner_title: "No eligible channel partners found.",
    no_partner_desc:
      "No partner currently satisfies the scheme, operational and fund-utilization conditions for this location.",

    tracking_title: "👤 Application Tracking",
    tracking_mobile: "Verified mobile",
    tracking_email: "Email",
    tracking_scheme: "Recommended scheme",
    tracking_location: "Location",
    back_home: "Back to Home",

    login_modal_badge: "🔐 Secure User Identification",
    login_modal_title: "Welcome to Scheme Saathi",
    login_modal_subtitle:
      "Verify your mobile number to save applications, track requests and reduce duplicate submissions.",
    name_label: "Full Name *",
    name_placeholder: "Enter your full name",
    mobile_label: "Mobile Number *",
    mobile_placeholder: "Enter 10-digit mobile number",
    email_label: "Email",
    optional: "(Optional)",
    email_placeholder: "Enter your email",
    send_otp: "Send OTP →",
    otp_sent_prefix: "OTP sent to +91",
    enter_otp_label: "Enter OTP *",
    otp_placeholder: "Enter 6-digit OTP",
    verify_continue: "Verify & Continue →",
    change_mobile: "Change mobile number",
    demo_otp_label: "Demo OTP:",
    tracking_name: "Name",
  },

  हिन्दी: {
    nav_tagline: "सही सरकारी योजना तक आपका रास्ता",
    login: "लॉगिन",
    logout: "लॉगआउट",

    hero_badge: "🇮🇳 सरकारी योजना सहायता",
    hero_title_1: "सही",
    hero_title_highlight: "सरकारी योजना",
    hero_title_2: "खोजें",
    hero_text:
      "एक छोटा फ़ॉर्म भरें और मिलान की गई योजनाएँ, लाभ विवरण, दस्तावेज़ और आवेदन कहाँ करें — यह जानें।",
    hero_cta: "मेरी योजना खोजें",
    hero_disclaimer: "स्वतंत्र मार्गदर्शिका · आधिकारिक पोर्टल नहीं",
    match_preview_label: "उदाहरण मिलान",
    match_preview_title: "आपकी ज़रूरत के लिए सबसे अच्छी योजना",

    feature1_title: "आपके अनुसार मिलान",
    feature1_text:
      "हम आपके उद्देश्य, आयु, आय, शिक्षा और स्थान की तुलना करते हैं।",
    feature2_title: "स्पष्ट वित्तीय जानकारी",
    feature2_text:
      "ऋण सीमा, ब्याज, सब्सिडी और भुगतान की जानकारी एक ही जगह देखें।",
    feature3_title: "दस्तावेज़ और भागीदार",
    feature3_text:
      "जानें कि कौन-से दस्तावेज़ चाहिए और कौन-सी संस्था योजना संभालती है।",
    feature4_title: "बहुभाषी",
    feature4_text:
      "आसान जन-सेवा पहुँच के लिए बहुभाषी सुविधा के साथ बनाया गया।",

    back: "← वापस",
    form_badge: "🎯 स्मार्ट योजना मिलान",
    form_title: "आवेदन फ़ॉर्म",
    form_subtitle:
      "अपना विवरण भरें, हम आपके उत्तरों के आधार पर योजनाओं को रैंक करेंगे।",

    section_need: "आपको क्या चाहिए",
    need_question: "आपको किस चीज़ में मदद चाहिए?",
    purpose_business: "व्यवसाय शुरू / बढ़ाना",
    purpose_education: "शिक्षा",
    purpose_vending: "स्ट्रीट वेंडिंग",
    purpose_artisan: "कारीगर / पारंपरिक व्यापार",
    purpose_agri: "कृषि / खेती",
    label_category: "श्रेणी",
    label_occupation: "व्यवसाय",
    select_occupation: "व्यवसाय चुनें",
    occ_vendor: "स्ट्रीट वेंडर",
    occ_farmer: "किसान",
    occ_artisan: "कारीगर",
    occ_student: "छात्र",
    occ_entrepreneur: "उद्यमी",
    label_project_type: "परियोजना प्रकार",
    select_project_type: "परियोजना प्रकार चुनें",

    section_details: "आपका विवरण",
    label_age: "आयु",
    label_education_level: "उच्चतम शिक्षा",
    select_education_level: "शिक्षा स्तर चुनें",
    edu_below8: "8वीं से नीचे",
    edu_8_10: "8वीं–10वीं",
    edu_12: "12वीं",
    edu_grad: "स्नातक",
    edu_pg: "स्नातकोत्तर",
    label_income: "वार्षिक पारिवारिक आय",
    label_project_cost: "अनुमानित परियोजना / शिक्षा लागत",

    section_location: "स्थान विवरण",
    label_state: "राज्य / केंद्र शासित प्रदेश",
    select_state: "राज्य/UT चुनें",
    label_district: "ज़िला",
    select_district: "ज़िला चुनें",
    enter_district: "ज़िला दर्ज करें",
    label_pincode: "पिन कोड",
    pincode_placeholder: "6 अंकों का पिन कोड",
    location_note:
      "📍 आस-पास के पात्र चैनल भागीदारों की पहचान के लिए आपके राज्य का उपयोग किया जाता है।",

    submit_cta: "मेरी योजना खोजें →",

    result_title: "आपकी अनुशंसित योजना",
    result_subtitle: "आपकी जानकारी के आधार पर सबसे उपयुक्त योजना मिली।",
    best_match: "✓ सर्वश्रेष्ठ मिलान",
    partial_match: "~ आंशिक मिलान",
    result_match_label: "मिलान",
    result_desc:
      "आपके उद्देश्य, आय, लागत, शिक्षा, श्रेणी और स्थान के आधार पर व्यक्तिगत सिफारिश।",
    low_match_warning:
      "आपकी प्रोफ़ाइल इस योजना से केवल आंशिक रूप से मेल खाती है। आवेदन से पहले चैनल भागीदार से पात्रता सत्यापित करें।",

    eligibility_title: "आप पात्र क्यों हैं",
    check_purpose: "उद्देश्य उपयुक्तता",
    check_age: "आयु सीमा में",
    check_income: "आय योजना सीमा के भीतर",
    check_project_cost: "परियोजना लागत सीमा के भीतर",
    check_education: "शिक्षा मानदंड पूरे",
    check_project_type: "परियोजना प्रकार समर्थित",
    check_category: "इस योजना हेतु श्रेणी पात्र",

    max_loan: "अधिकतम ऋण",
    interest_rate: "ब्याज दर",
    moratorium: "स्थगन अवधि",
    documents_title: "📄 आवश्यक दस्तावेज़",

    calculator_title: "💰 वित्तीय कैलकुलेटर",
    loan_amount: "ऋण राशि",
    interest_rate_pct: "ब्याज दर (%)",
    tenure_months: "अवधि (महीने)",
    estimated_emi: "अनुमानित ईएमआई",

    partner_title: "📍 निकटतम चैनल भागीदार",
    partner_desc_prefix: "के लिए निकटतम पात्र चैनल भागीदार खोजा जा रहा है",
    partner_desc_suffix: "आपके चयनित राज्य के आधार पर।",
    map_title: "🗺️ स्थान मानचित्र",
    map_unavailable: "इस स्थान के लिए मानचित्र उपलब्ध नहीं है।",
    no_partner_title: "कोई पात्र चैनल भागीदार नहीं मिला।",
    no_partner_desc:
      "इस स्थान के लिए कोई भागीदार योजना, परिचालन और निधि-उपयोग शर्तों को पूरा नहीं करता।",

    tracking_title: "👤 आवेदन ट्रैकिंग",
    tracking_mobile: "सत्यापित मोबाइल",
    tracking_email: "ईमेल",
    tracking_scheme: "अनुशंसित योजना",
    tracking_location: "स्थान",
    back_home: "होम पर वापस जाएँ",

    login_modal_badge: "🔐 सुरक्षित पहचान सत्यापन",
    login_modal_title: "स्कीम साथी में आपका स्वागत है",
    login_modal_subtitle:
      "आवेदन सहेजने, अनुरोध ट्रैक करने और दोहराव रोकने के लिए अपना मोबाइल नंबर सत्यापित करें।",
    name_label: "पूरा नाम *",
    name_placeholder: "अपना पूरा नाम दर्ज करें",
    mobile_label: "मोबाइल नंबर *",
    mobile_placeholder: "10 अंकों का मोबाइल नंबर दर्ज करें",
    email_label: "ईमेल",
    optional: "(वैकल्पिक)",
    email_placeholder: "अपना ईमेल दर्ज करें",
    send_otp: "OTP भेजें →",
    otp_sent_prefix: "OTP भेजा गया +91",
    enter_otp_label: "OTP दर्ज करें *",
    otp_placeholder: "6 अंकों का OTP दर्ज करें",
    verify_continue: "सत्यापित करें और जारी रखें →",
    change_mobile: "मोबाइल नंबर बदलें",
    demo_otp_label: "डेमो OTP:",
    tracking_name: "नाम",
  },
};

export function getTranslations(language) {
  return translations[language] || translations.English;
}