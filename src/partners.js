// ============================================================
// SCHEME SAATHI
// partners.js
//
// Application channels for the MVP Partner Locator.
//
// We intentionally store ORGANISATION TYPES / CHANNELS here,
// rather than inventing local branch addresses.
//
// Later this can be replaced with a verified district-level DB.
// ============================================================

export const PARTNER_CHANNELS = {
  pmegp: [
    {
      name: "District Industries Centre (DIC)",
      type: "district-office",
      description:
        "District-level enterprise facilitation and PMEGP channel.",
    },
    {
      name: "Khadi and Village Industries Board (KVIB)",
      type: "state-agency",
      description:
        "State-level PMEGP implementing channel where applicable.",
    },
    {
      name: "Khadi and Village Industries Commission (KVIC)",
      type: "central-agency",
      description:
        "National PMEGP implementing agency.",
    },
    {
      name: "Participating Bank",
      type: "bank",
      description:
        "Loan sanction and financing are handled by the participating lender.",
    },
  ],

  mudra: [
    {
      name: "Public Sector Bank",
      type: "bank",
      description:
        "Apply through an eligible public-sector banking channel.",
    },
    {
      name: "Private Sector Bank",
      type: "bank",
      description:
        "Apply through an eligible participating private bank.",
    },
    {
      name: "Regional Rural Bank",
      type: "rrb",
      description:
        "Eligible RRBs can provide MUDRA credit.",
    },
    {
      name: "Small Finance Bank",
      type: "bank",
      description:
        "Eligible small-finance banking channel.",
    },
    {
      name: "NBFC / MFI",
      type: "financial-institution",
      description:
        "Eligible NBFC/MFI channel subject to lender participation.",
    },
  ],

  "pm-vishwakarma": [
    {
      name: "Common Service Centre (CSC)",
      type: "csc",
      description:
        "Use an eligible CSC for registration and assisted application.",
    },
    {
      name: "Participating Bank",
      type: "bank",
      description:
        "Eligible lending institutions handle credit support.",
    },
  ],

  "pm-svanidhi": [
    {
      name: "Urban Local Body (ULB)",
      type: "local-body",
      description:
        "Municipal / urban local-body channel for vendor identification and scheme support.",
    },
    {
      name: "Participating Lending Institution",
      type: "financial-institution",
      description:
        "Eligible bank or lending institution handles the loan.",
    },
  ],

  "pm-kusum": [
    {
      name: "State Implementing Agency (SIA)",
      type: "state-agency",
      description:
        "Primary state-level implementation channel for relevant PM-KUSUM component.",
    },
    {
      name: "DISCOM",
      type: "discom",
      description:
        "Relevant electricity distribution company may be involved depending on component.",
    },
    {
      name: "Empanelled Solar Pump Vendor",
      type: "vendor",
      description:
        "For applicable solar-pump components, use the state/vendor information on the official PM-KUSUM portal.",
    },
  ],

  "nlm-edp": [
    {
      name: "State Animal Husbandry Department",
      type: "state-agency",
      description:
        "State-level implementation and project support channel.",
    },
    {
      name: "Participating Bank / Financial Institution",
      type: "financial-institution",
      description:
        "Project financing is handled through the applicable lender.",
    },
  ],

  kcc: [
    {
      name: "Scheduled Commercial Bank",
      type: "bank",
      description:
        "Eligible commercial banking channel for agricultural credit.",
    },
    {
      name: "Regional Rural Bank",
      type: "rrb",
      description:
        "Eligible RRB agricultural-credit channel.",
    },
    {
      name: "Cooperative Bank",
      type: "cooperative",
      description:
        "Eligible cooperative banking channel.",
    },
  ],
};


// ============================================================
// GET CHANNELS
// ============================================================

export function getPartnerChannels(
  schemeId
) {
  return (
    PARTNER_CHANNELS[
      schemeId
    ] ?? []
  );
}


// ============================================================
// MAP SEARCH
// ============================================================

export function getMapSearchUrl(
  partnerName,
  district,
  state
) {
  const query = encodeURIComponent(
    `${partnerName}, ${district}, ${state}, India`
  );

  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}