/**
 * Satyanarayan Katha & Pooja Invitation Website
 * Single Source of Truth Config and Application Logic
 * UI & Aesthetic based on reference/invitation.webp
 */

// ==========================================================================
// 1. EVENT CONFIG (Single Source of Truth)
// ==========================================================================
const EVENT = {
  date: "23 Dec 2026",
  dateFormatted: "23 Dec 2026",
  timeEn: "10.30 AM onwards",
  mapsQuery: "Meena Nagar Ground, Hari Om Nagar, Navghar, 60 Feet Road, Tarkhad, Vasai West",
  mapsUrl: "https://maps.app.goo.gl/NJvVxjqobtQUjBYR8",
  rsvpPhone: "+918652597350",
  rsvpDisplay: "+91 8652597350",
  timezone: "Asia/Kolkata"
};

// ==========================================================================
// 2. TRANSLATIONS (English, Hindi, Marathi, Kannada)
// ==========================================================================
const T = {
  en: {
    pujaTitle: "॥ श्री सत्यनारायण पूजा ॥",
    hostLine: "Dhotre family cordially invites you to the sacred Satyanarayan Katha & Pooja",
    p1: "With the blessings of Sri Satyanarayan, we cordially invite you and your family & friends to join us for the sacred Satyanarayan Katha & Pooja.",
    p2: "Your gracious presence will make this auspicious occasion even more special.",
    shubhNimantran: "शुभ निमंत्रण",
    invitedByTitle: "Invited by:",
    hostsText: "Dhotre Family / The Hosts",
    dateLabel: "DATE",
    dateSubLabel: "दिनांक",
    dateVal: "23 Dec 2026",
    timeLabel: "TIME",
    timeSubLabel: "समय",
    timeVal: "10.30 AM onwards",
    venueLabel: "VENUE",
    venueSubLabel: "स्थान",
    venueVal: "Meena Nagar Ground, Hari Om Nagar, Navghar, 60 Feet Road, Tarkhad, Vasai West",
    mapBtn: "Open in Google Maps",
    timelineTitle: "Katha & Pooja Ceremony Timeline",
    step1: "Arrival & Gathering",
    step2: "Pooja Commencement",
    step3: "Katha (Story Telling)",
    step4: "Aarti & Mahaprasad",
    welcomeTitle: "Family Welcome / RSVP",
    welcomeSub: "Kindly grace us with your presence and blessings.",
    callBtn: "Call to RSVP",
    whatsappBtn: "RSVP via WhatsApp",
    waMsg: "Namaste! We are happy to confirm our presence for the Satyanarayan Katha & Pooja on 23 Dec 2026.",
    change: "Change language"
  },
  hi: {
    pujaTitle: "॥ श्री सत्यनारायण पूजा ॥",
    hostLine: "धोत्रे परिवार आप सभी को श्री सत्यनारायण कथा एवं पूजा में सादर आमंत्रित करता है",
    p1: "भगवान श्री सत्यनारायण की कृपा से, हम आपको और आपके परिवार व मित्रों को पवित्र श्री सत्यनारायण कथा एवं पूजा में सादर आमंत्रित करते हैं।",
    p2: "आपकी गरिमामयी उपस्थिति इस शुभ अवसर को और भी विशेष बना देगी।",
    shubhNimantran: "शुभ निमंत्रण",
    invitedByTitle: "निमंत्रक:",
    hostsText: "धोत्रे परिवार एवं आप्तस्नेही",
    dateLabel: "दिनांक",
    dateSubLabel: "DATE",
    dateVal: "23 दिसम्बर 2026",
    timeLabel: "समय",
    timeSubLabel: "TIME",
    timeVal: "सुबह 10:30 बजे से",
    venueLabel: "स्थान",
    venueSubLabel: "VENUE",
    venueVal: "मीना नगर ग्राउंड, हरि ओम नगर, नवघर, 60 फीट रोड, तारखड, वसई (पश्चिम)",
    mapBtn: "गूगल मैप में खोलें",
    timelineTitle: "कथा एवं पूजा कार्यक्रम समय-सारणी",
    step1: "आगमन एवं स्वागत",
    step2: "पूजा प्रारंभ",
    step3: "सत्यनारायण कथा",
    step4: "आरती एवं महाप्रसाद",
    welcomeTitle: "सस्नेह स्वागत / RSVP",
    welcomeSub: "कृपया अपनी गरिमामयी उपस्थिति देकर हमें अनुगृहीत करें।",
    callBtn: "कॉल करें",
    whatsappBtn: "व्हाट्सएप पर सूचित करें",
    waMsg: "नमस्ते! हम 23 दिसम्बर 2026 को श्री सत्यनारायण पूजा में उपस्थित रहेंगे।",
    change: "भाषा बदलें"
  },
  mr: {
    pujaTitle: "॥ श्री सत्यनारायण पूजा ॥",
    hostLine: "धोत्रे परिवार आपणास श्री सत्यनारायण कथा व पूजेसाठी सस्नेह आमंत्रित करत आहे",
    p1: "भगवान श्री सत्यनारायणाच्या कृपाशीर्वादाने, आम्ही आपणास आणि आपल्या कुटुंबीयांना व मित्रमंडळींना पवित्र श्री सत्यनारायण कथा व पूजेसाठी सस्नेह आमंत्रित करतो.",
    p2: "आपल्या उपस्थितीने हा मंगल प्रसंग अधिक खास होईल.",
    shubhNimantran: "शुभ निमंत्रण",
    invitedByTitle: "निमंत्रक:",
    hostsText: "धोत्रे परिवार व आप्तेष्ट",
    dateLabel: "दिनांक",
    dateSubLabel: "DATE",
    dateVal: "23 डिसेंबर 2026",
    timeLabel: "वेळ",
    timeSubLabel: "TIME",
    timeVal: "सकाळी 10:30 वाजल्यापासून",
    venueLabel: "स्थळ",
    venueSubLabel: "VENUE",
    venueVal: "मीना नगर मैदान, हरी ओम नगर, नवघर, 60 फूट रोड, तारखड, वसई पश्चिम",
    mapBtn: "गूगल मॅपमध्ये उघडा",
    timelineTitle: "कथा व पूजा सोहळा रूपरेषा",
    step1: "आगमन व स्वागत",
    step2: "पूजा प्रारंभ",
    step3: "सत्यनारायण कथा",
    step4: "आरती व महाप्रसाद",
    welcomeTitle: "सस्नेह स्वागत / RSVP",
    welcomeSub: "आपल्या उपस्थितीने व आशीर्वादाने हा सोहळा संपन्न करावा, ही नम्र विनंती.",
    callBtn: "कॉल करा",
    whatsappBtn: "व्हॉट्सॲपवर कळवा",
    waMsg: "सस्नेह नमस्कार! आम्ही 23 डिसेंबर 2026 रोजी श्री सत्यनारायण पूजेसाठी उपस्थित राहणार आहोत.",
    change: "भाषा बदला"
  },
  kn: {
    pujaTitle: "॥ ಶ್ರೀ ಸತ್ಯನಾರಾಯಣ ಪೂಜೆ ॥",
    hostLine: "ಧೋತ್ರೆ ಕುಟುಂಬವು ನಿಮ್ಮನ್ನು ಶ್ರೀ ಸತ್ಯನಾರಾಯಣ ಕಥಾ ಮತ್ತು ಪೂಜೆಗೆ ಆತ್ಮೀಯವಾಗಿ ಆಹ್ವಾನಿಸುತ್ತದೆ",
    p1: "ಶ್ರೀ ಸತ್ಯನಾರಾಯಣ ಸ್ವಾಮಿಯ ಕೃಪೆಯಿಂದ, ನಿಮ್ಮನ್ನು ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬ ಹಾಗೂ ಸ್ನೇಹಿತರನ್ನು ಪವಿತ್ರ ಸತ್ಯನಾರಾಯಣ ಕಥಾ ಮತ್ತು ಪೂಜೆಗೆ ಆತ್ಮೀಯವಾಗಿ ಆಹ್ವಾನಿಸುತ್ತೇವೆ.",
    p2: "ನಿಮ್ಮ ಗೌರವಪೂರ್ವಕ ಉಪಸ್ಥಿತಿ ಈ ಶುಭ ಸಂದರ್ಭವನ್ನು ಇನ್ನಷ್ಟು ವಿಶೇಷಗೊಳಿಸುತ್ತದೆ.",
    shubhNimantran: "ಶುಭ ನಿಮಂತ್ರಣ",
    invitedByTitle: "ಆಹ್ವಾನಿಸುವವರು:",
    hostsText: "ಧೋತ್ರೆ ಕುಟುಂಬ ಮತ್ತು ಆತ್ಮೀಯರು",
    dateLabel: "ದಿನಾಂಕ",
    dateSubLabel: "DATE",
    dateVal: "23 ಡಿಸೆಂಬರ್ 2026",
    timeLabel: "ಸಮಯ",
    timeSubLabel: "TIME",
    timeVal: "ಬೆಳಿಗ್ಗೆ 10:30 ರಿಂದ",
    venueLabel: "ಸ್ಥಳ",
    venueSubLabel: "VENUE",
    venueVal: "ಮೀನಾ ನಗರ ಮೈದಾನ, ಹರಿ ಓಂ ನಗರ, ನವಘರ್, 60 ಅಡಿ ರಸ್ತೆ, ತಾರ್ಖಡ್, ವಸೈ ಪಶ್ಚಿಮ",
    mapBtn: "ಗೂಗಲ್ ಮ್ಯಾಪ್‌ನಲ್ಲಿ ತೆರೆಯಿರಿ",
    timelineTitle: "ಕಥಾ ಮತ್ತು ಪೂಜಾ ಕಾರ್ಯಕ್ರಮದ ವಿವರ",
    step1: "ಆಗಮನ ಮತ್ತು ಸ್ವಾಗತ",
    step2: "ಪೂಜಾ ಪ್ರಾರಂಭ",
    step3: "ಸತ್ಯನಾರಾಯಣ ಕಥಾ ಶ್ರವಣ",
    step4: "ಆರತಿ ಮತ್ತು ಮಹಾಪ್ರಸಾದ",
    welcomeTitle: "ಹಾರ್ದಿಕ ಸ್ವಾಗತ / RSVP",
    welcomeSub: "ನಿಮ್ಮ ಪಾವನ ಉಪಸ್ಥಿತಿ ಮತ್ತು ಆಶೀರ್ವಾದದೊಂದಿಗೆ ನಮ್ಮನ್ನು ಹರಸಿ.",
    callBtn: "ಕರೆ ಮಾಡಿ",
    whatsappBtn: "ವಾಟ್ಸಾಪ್ ಮೂಲಕ ತಿಳಿಸಿ",
    waMsg: "ನಮಸ್ಕಾರ! ನಾವು 23 ಡಿಸೆಂಬರ್ 2026 ರಂದು ನಡೆಯುವ ಸತ್ಯನಾರಾಯಣ ಪೂಜೆಯಲ್ಲಿ ಪಾಲ್ಗೊಳ್ಳುತ್ತೇವೆ.",
    change: "ಭಾಷೆ ಬದಲಿಸಿ"
  }
};

const ALLOWED_LANGS = ["en", "hi", "mr", "kn"];
const STORAGE_KEY = "poojaLang";

// DOM Elements
const popupBackdrop = document.getElementById("lang-popup-backdrop");
const popupCard = document.getElementById("popup-card");
const popupCloseBtn = document.getElementById("popup-close-btn");
const changeLangBtn = document.getElementById("change-lang-btn");
const changeLangText = document.getElementById("change-lang-text");

// Text elements
const pujaHeading = document.getElementById("puja-heading");
const inviteP1 = document.getElementById("invite-p1");
const inviteP2 = document.getElementById("invite-p2");
const shubhNimantranText = document.getElementById("shubh-nimantran-text");
const invitedByLabel = document.getElementById("invited-by-label");
const invitedByHosts = document.getElementById("invited-by-hosts");

// Details Card elements
const labelDate = document.getElementById("label-date");
const subLabelDate = document.getElementById("sublabel-date");
const valDate = document.getElementById("val-date");
const labelTime = document.getElementById("label-time");
const subLabelTime = document.getElementById("sublabel-time");
const valTime = document.getElementById("val-time");
const labelVenue = document.getElementById("label-venue");
const subLabelVenue = document.getElementById("sublabel-venue");
const valVenue = document.getElementById("val-venue");

// Maps & Timeline & RSVP elements
const mapsLink = document.getElementById("maps-link");
const mapsBtnText = document.getElementById("maps-btn-text");
const timelineHeading = document.getElementById("timeline-heading");
const step1El = document.getElementById("step-1");
const step2El = document.getElementById("step-2");
const step3El = document.getElementById("step-3");
const step4El = document.getElementById("step-4");

const welcomeTitle = document.getElementById("welcome-title");
const welcomeSub = document.getElementById("welcome-sub");
const rsvpCallBtn = document.getElementById("rsvp-call-btn");
const rsvpCallText = document.getElementById("rsvp-call-text");
const rsvpWaBtn = document.getElementById("rsvp-wa-btn");
const rsvpWaText = document.getElementById("rsvp-wa-text");

const petalsContainer = document.getElementById("petals-container");
const langButtons = document.querySelectorAll(".lang-btn");

let isInitialChoice = true;
let currentLang = "en";

// ==========================================================================
// 3. STORAGE & URL HELPERS (Safe Storage Wrapper)
// ==========================================================================
function getStoredLang() {
  try {
    const val = localStorage.getItem(STORAGE_KEY);
    if (val && ALLOWED_LANGS.includes(val)) {
      return val;
    }
  } catch (e) {
    // localStorage blocked
  }
  return null;
}

function saveStoredLang(lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch (e) {
    // localStorage blocked
  }
}

function getQueryLang() {
  try {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get("lang");
    if (lang && ALLOWED_LANGS.includes(lang.toLowerCase())) {
      return lang.toLowerCase();
    }
  } catch (e) {
    // URL parsing fallback
  }
  return null;
}

// ==========================================================================
// 4. CONTENT RENDERING (Strictly textContent - Zero innerHTML)
// ==========================================================================
function applyLanguage(lang) {
  if (!ALLOWED_LANGS.includes(lang)) {
    lang = "en";
  }
  currentLang = lang;

  const data = T[lang] || T.en;

  // Set document lang attribute
  document.documentElement.lang = lang;

  // Render text strictly using textContent
  if (pujaHeading) pujaHeading.textContent = data.pujaTitle;
  if (inviteP1) inviteP1.textContent = data.p1;
  if (inviteP2) inviteP2.textContent = data.p2;

  if (shubhNimantranText) shubhNimantranText.textContent = data.shubhNimantran;
  if (invitedByLabel) invitedByLabel.textContent = data.invitedByTitle;
  if (invitedByHosts) invitedByHosts.textContent = data.hostsText;

  // Details Cards
  if (labelDate) labelDate.textContent = data.dateLabel;
  if (subLabelDate) subLabelDate.textContent = data.dateSubLabel;
  if (valDate) valDate.textContent = data.dateVal;

  if (labelTime) labelTime.textContent = data.timeLabel;
  if (subLabelTime) subLabelTime.textContent = data.timeSubLabel;
  if (valTime) valTime.textContent = data.timeVal;

  if (labelVenue) labelVenue.textContent = data.venueLabel;
  if (subLabelVenue) subLabelVenue.textContent = data.venueSubLabel;
  if (valVenue) valVenue.textContent = data.venueVal;

  // Google Maps button & links
  if (mapsBtnText) mapsBtnText.textContent = data.mapBtn;
  if (mapsLink) mapsLink.href = EVENT.mapsUrl;

  // Timeline steps
  if (timelineHeading) timelineHeading.textContent = data.timelineTitle;
  if (step1El) step1El.textContent = data.step1;
  if (step2El) step2El.textContent = data.step2;
  if (step3El) step3El.textContent = data.step3;
  if (step4El) step4El.textContent = data.step4;

  // Welcome & RSVP
  if (welcomeTitle) welcomeTitle.textContent = data.welcomeTitle;
  if (welcomeSub) welcomeSub.textContent = data.welcomeSub;
  if (rsvpCallText) rsvpCallText.textContent = data.callBtn;
  if (rsvpWaText) rsvpWaText.textContent = data.whatsappBtn;

  if (rsvpCallBtn) {
    rsvpCallBtn.href = "tel:" + EVENT.rsvpPhone;
  }
  if (rsvpWaBtn) {
    const cleanPhone = EVENT.rsvpPhone.replace(/[^0-9]/g, "");
    rsvpWaBtn.href = "https://wa.me/" + cleanPhone + "?text=" + encodeURIComponent(data.waMsg);
  }

  if (changeLangText) changeLangText.textContent = data.change;
}

// ==========================================================================
// 5. POPUP CONTROLS & TRANSITIONS
// ==========================================================================
function openPopup(isReopen = false) {
  isInitialChoice = !isReopen;

  if (isReopen) {
    popupCloseBtn.style.display = "flex";
  } else {
    popupCloseBtn.style.display = "none";
  }

  popupBackdrop.style.display = "flex";
  void popupBackdrop.offsetWidth; // Reflow

  popupBackdrop.classList.remove("closing");
  document.body.classList.add("popup-open");

  // Focus trap: set initial focus to first button
  const firstBtn = popupCard.querySelector(".lang-btn");
  if (firstBtn) {
    firstBtn.focus();
  }
}

function closePopup() {
  popupBackdrop.classList.add("closing");
  document.body.classList.remove("popup-open");

  setTimeout(() => {
    popupBackdrop.style.display = "none";
    popupBackdrop.classList.remove("closing");
  }, 320);

  // Trigger gentle entrance fade-in
  document.body.classList.remove("play-entrance");
  void document.body.offsetWidth;
  document.body.classList.add("play-entrance");
}

function selectLanguage(lang) {
  applyLanguage(lang);
  saveStoredLang(lang);
  closePopup();
  changeLangBtn.focus();
}

// ==========================================================================
// 6. ACCESSIBILITY & FOCUS TRAP
// ==========================================================================
popupCard.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    const focusable = popupCard.querySelectorAll("button:not([style*='display: none'])");
    const firstFocusable = focusable[0];
    const lastFocusable = focusable[focusable.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === firstFocusable) {
        lastFocusable.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastFocusable) {
        firstFocusable.focus();
        e.preventDefault();
      }
    }
  } else if (e.key === "Escape") {
    if (!isInitialChoice) {
      closePopup();
    }
  }
});

popupBackdrop.addEventListener("click", (e) => {
  if (e.target === popupBackdrop && !isInitialChoice) {
    closePopup();
  }
});

popupCloseBtn.addEventListener("click", () => {
  if (!isInitialChoice) {
    closePopup();
  }
});

changeLangBtn.addEventListener("click", () => {
  openPopup(true);
});

langButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const lang = btn.getAttribute("data-lang");
    selectLanguage(lang);
  });
});

// ==========================================================================
// 7. AESTHETIC FALLING MARIGOLD & ROSE PETALS ANIMATION
// ==========================================================================
function initFallingPetals() {
  if (!petalsContainer) return;

  const PETAL_COUNT = 18;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < PETAL_COUNT; i++) {
    const petal = document.createElement("div");
    const isRose = i % 2 === 1;
    petal.className = "petal " + (isRose ? "petal-rose" : "petal-marigold");

    const leftPercent = (Math.random() * 94 + 3).toFixed(1) + "%";
    const duration = (8 + Math.random() * 8).toFixed(1) + "s";
    const delay = (Math.random() * 10).toFixed(1) + "s";
    const size = isRose ? (14 + Math.random() * 8).toFixed(0) + "px" : (12 + Math.random() * 8).toFixed(0) + "px";
    const sway = (20 + Math.random() * 32).toFixed(0) + "px";

    petal.style.setProperty("--left", leftPercent);
    petal.style.setProperty("--duration", duration);
    petal.style.setProperty("--delay", delay);
    petal.style.setProperty("--size", size);
    petal.style.setProperty("--sway", sway);

    fragment.appendChild(petal);
  }

  petalsContainer.appendChild(fragment);
}

// ==========================================================================
// 8. INITIALIZATION LIFECYCLE
// ==========================================================================
function init() {
  initFallingPetals();

  const queryLang = getQueryLang();
  const storedLang = getStoredLang();

  if (queryLang) {
    applyLanguage(queryLang);
    popupBackdrop.style.display = "none";
  } else if (storedLang) {
    applyLanguage(storedLang);
    popupBackdrop.style.display = "none";
  } else {
    applyLanguage("en");
    openPopup(false);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
