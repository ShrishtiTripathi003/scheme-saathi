// districts.js
export const districts = {
  "Uttar Pradesh": [
    "Agra",
    "Aligarh",
    "Ayodhya",
    "Azamgarh",
    "Bareilly",
    "Ghaziabad",
    "Gorakhpur",
    "Kanpur Nagar",
    "Lucknow",
    "Prayagraj",
    "Sitapur",
    "Varanasi",
  ],

  Maharashtra: [
    "Ahmednagar",
    "Akola",
    "Amravati",
    "Aurangabad",
    "Mumbai City",
    "Mumbai Suburban",
    "Nagpur",
    "Nashik",
    "Pune",
    "Thane",
  ],

  Bihar: [
    "Araria",
    "Arwal",
    "Aurangabad",
    "Bhagalpur",
    "Darbhanga",
    "Gaya",
    "Muzaffarpur",
    "Patna",
    "Purnia",
    "Vaishali",
  ],

  Rajasthan: [
    "Ajmer",
    "Alwar",
    "Bharatpur",
    "Bikaner",
    "Jaipur",
    "Jaisalmer",
    "Jodhpur",
    "Kota",
    "Udaipur",
  ],

  "Madhya Pradesh": [
    "Bhopal",
    "Indore",
    "Jabalpur",
    "Gwalior",
    "Ujjain",
    "Sagar",
    "Rewa",
  ],

  Delhi: [
    "Central Delhi",
    "East Delhi",
    "New Delhi",
    "North Delhi",
    "North East Delhi",
    "North West Delhi",
    "Shahdara",
    "South Delhi",
    "South East Delhi",
    "South West Delhi",
    "West Delhi",
  ],
};

// Automatically create state list from district data
export const ALL_STATES = Object.keys(districts);
