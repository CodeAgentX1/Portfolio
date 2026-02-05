//bot token
var telegram_bot_id = "8407000537:AAGjAGJAsF3Kw4AnahpAXWTt80-dUoP-uq4";
//chat id
var chat_id = 7538172991;

var u_name, email, phone, tg_user, message;

var ready = function () {
  u_name = document.getElementById("name").value;
  email = document.getElementById("email").value;
  phone = document.getElementById("phone").value;

  // Username'ni olish
  var tg_input = document.getElementById("tg_user").value;

  // Agar input bo'sh bo'lsa "Kiritilmagan" deb yozamiz
  if (tg_input.trim() === "") {
    tg_user = "Kiritilmagan";
  } else {
    tg_user = tg_input;
  }

  message = document.getElementById("message").value;

  // Botga boradigan xabar formati
  message =
    "🚀 Yangi xabar!\n\n" +
    "👤 Ismi: " +
    u_name +
    "\n" +
    "📧 Email: " +
    email +
    "\n" +
    "📞 Tel: " +
    phone +
    "\n" +
    "📱 TG: " +
    tg_user +
    "\n" +
    "💬 Izoh: " +
    message;
};

var sendtelegram = function () {
  ready();
  var settings = {
    async: true,
    crossDomain: true,
    url: "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "cache-control": "no-cache",
    },
    data: JSON.stringify({
      chat_id: chat_id,
      text: message,
    }),
  };

  $.ajax(settings).done(function (response) {
    alert("Xabaringiz yuborildi!"); // Foydalanuvchiga bildirishnoma
    console.log(response);
  });

  // Inputlarni tozalash
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("tg_user").value = "";
  document.getElementById("message").value = "";

  return false;
};
//Menu toggle
const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
const mobileNav = document.getElementById("mobile-nav");
const body = document.body;

// Menyuni ochish
openBtn.addEventListener("click", () => {
  mobileNav.classList.add("open");
  body.style.overflow = "hidden"; // Scrollni o'chirish
});

// Menyuni yopish (X tugmasi orqali)
closeBtn.addEventListener("click", () => {
  mobileNav.classList.remove("open");
  body.style.overflow = "auto"; // Scrollni yoqish
});

// Har qanday link bosilganda ham yopish
document.querySelectorAll(".m-link").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    body.style.overflow = "auto";
  });
});

//Qolganlari
AOS.init({ duration: 1000, once: true });

new Typed("#typed", {
  strings: [
    "Frontend Specialist",
    "UI/UX Enthusiast",
    "Web Developer",
    "Full-Stack Architect",
    "Agent Coder",
  ],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true,
});

window.addEventListener("scroll", () => {
  document
    .querySelector("header")
    .classList.toggle("scrolled", window.scrollY > 50);
});

document.querySelectorAll(".specialist-container").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty("--mx", `${x}%`);
    card.style.setProperty("--my", `${y}%`);
  });
  card.addEventListener("mouseleave", () => {
    card.style.setProperty("--mx", "50%");
    card.style.setProperty("--my", "50%");
  });
});
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");

  // Bir oz kutib (masalan 500ms) keyin o'chiradi, shunda effekt chiroyli chiqadi
  setTimeout(() => {
    preloader.classList.add("loader-hidden");
  }, 500);
});

const backToTopBtn = document.getElementById("backToTop");
const circle = document.querySelector(".progress-ring__circle");
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;

window.addEventListener("scroll", () => {
  // 1. Tugmani ko'rsatish/yashirish (300px dan keyin)
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }

  // 2. Progress aylanani hisoblash
  const scrollTotal =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrollProgress = window.scrollY / scrollTotal;
  const offset = circumference - scrollProgress * circumference;
  circle.style.strokeDashoffset = offset;
});

// 3. Bosilganda tepaga chiqish
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//Language
const translations = {
  en: {
    nav_home: "Home",
    nav_expertise: "Expertise",
    nav_projects: "Projects",
    nav_experts: "Experts",
    nav_services: "Services",
    nav_contact: "Contact",
    welcome: "WELCOME TO THE FUTURE",
    i_am: "I am a",
    hero_desc:
      "I build more than websites—I craft digital experiences that feel bold, fast, and unforgettable.",
    view_projects: "VIEW PROJECTS",
    about_title: "More About Me",
    exp_approach: "Experience & Approach",
    developer: "Developer",
    spec_badge: "Full-Stack Architect",
    spec_text:
      "I deliver digital products from initial strategy to final production. I combine elegant UI on the frontend with robust architecture on the backend.",
    stat_proto: "Prototypes & MVPs",
    stat_ind: "Industries Covered",
    stat_resp: "Responsive Score",
    btn_start: "Start a Project",
    btn_work: "View My Work",
    top_projects: "TOP 3 PROJECTS",
    work_1_desc: "A modern and fast E-commerce ecosystem.",
    work_2_desc: "Dynamic platform for online pizza ordering.",
    work_3_desc: "Innovative digital solution for finance.",
    view_live: "View Live",
    core_experts: "CORE EXPERTS",
    strengths: "MY STRENGTHS",
    s_speed: "High Speed",
    s_speed_d: "Optimized performance with 100/100 Google PageSpeed scores.",
    s_cyber: "Cyber Security",
    s_cyber_d: "Projects are 100% secured against modern cyber threats.",
    s_ai: "AI Integration",
    s_ai_d:
      "Integrating cutting-edge Artificial Intelligence into your business.",
    get_in_touch: "GET IN TOUCH",
    ph_name: "Your Name",
    ph_email: "Your Email",
    ph_phone: "Phone Number",
    ph_tg: "Telegram @username",
    ph_msg: "Tell me about your project",
    btn_send: "Send Message",
    footer: "© 2026 Ismoiljon | Built with Passion and Clean Code",
  },
  uz: {
    nav_home: "Bosh sahifa",
    nav_expertise: "Tajriba",
    nav_projects: "Loyihalar",
    nav_experts: "Ekspertlar",
    nav_services: "Xizmatlar",
    nav_contact: "Aloqa",
    welcome: "KELAJAKKA XUSH KELIBSIZ",
    i_am: "Men",
    hero_desc:
      "Men shunchaki sayt yaratmayman — men unutilmas va tezkor raqamli tajriba yarataman.",
    view_projects: "LOYIHALARNI KO'RISH",
    about_title: "Men haqimda",
    exp_approach: "Tajriba va Yondashuv",
    spec_badge: "Full-Stack Arxitektor",
    spec_text:
      "Men raqamli mahsulotlarni strategiyadan to yakuniy ishlab chiqarishgacha yetkazib beraman. Frontendda nafis UI va backendda mustahkam arxitekturani birlashtiraman.",
    developer: "Dasturchi",
    stat_proto: "Prototip va MVP",
    stat_ind: "Sanoat yo'nalishlari",
    stat_resp: "Moslashuvchanlik",
    btn_start: "Loyiha boshlash",
    btn_work: "Ishlarimni ko'rish",
    top_projects: "TOP 3 LOYIHALAR",
    work_1_desc: "Zamonaviy va tezkor E-tijorat tizimi.",
    work_2_desc: "Onlayn pitsa buyurtma qilish uchun dinamik platforma.",
    work_3_desc: "Moliya uchun innovatsion raqamli yechim.",
    view_live: "Saytni ko'rish",
    core_experts: "ASOSIY EKSPERTLAR",
    strengths: "MENING KUCHLI TOMONLARIM",
    s_speed: "Yuqori Tezlik",
    s_speed_d:
      "Google PageSpeed-da 100/100 ball bilan optimallashtirilgan ishlash.",
    s_cyber: "Kiber Xavfsizlik",
    s_cyber_d: "Loyihalar zamonaviy kiber tahdidlardan 100% himoyalangan.",
    s_ai: "AI Integratsiyasi",
    s_ai_d:
      "Sizning biznesingizga sun'iy intellekt texnologiyalarini joriy etish.",
    get_in_touch: "BOG'LANISH",
    ph_name: "Ismingiz",
    ph_email: "Email manzilingiz",
    ph_phone: "Telefon raqamingiz",
    ph_tg: "Telegram foydalanuvchi nomi",
    ph_msg: "Loyiha haqida batafsil ma'lumot bering...",
    btn_send: "Xabar yuborish",
    footer: "© 2026 Ismoiljon | Toza kod va ishtiyoq bilan yaratildi",
  },
  ru: {
    nav_home: "Главная",
    nav_expertise: "Опыт",
    nav_projects: "Проекты",
    nav_experts: "Эксперты",
    nav_services: "Услуги",
    nav_contact: "Контакт",
    welcome: "ДОБРО ПОЖАЛОВАТЬ В БУДУЩЕЕ",
    i_am: "Я",
    hero_desc:
      "Я создаю не просто сайты, а незабываемые и быстрые цифровые впечатления.",
    view_projects: "СМОТРЕТЬ ПРОЕКТЫ",
    about_title: "Обо мне",
    exp_approach: "Опыт и подход",
    spec_badge: "Фулл-Стак Архитектор",
    spec_text:
      "Я создаю цифровые продукты от стратегии до финального производства. Сочетаю элегантный UI и надежную архитектуру.",
    developer: "разработчик",
    stati_proto: "Прототипы и MVP",
    stat_ind: "Отраслей охвачено",
    stat_resp: "Адаптивность",
    btn_start: "Начать проект",
    btn_work: "Мои работы",
    top_projects: "ТОП 3 ПРОЕКТА",
    work_1_desc: "Современная и быстрая E-commerce система.",
    work_2_desc: "Динамическая платформа для заказа пиццы онлайн.",
    work_3_desc: "Инновационное цифровое решение для финансов.",
    view_live: "Смотреть live",
    core_experts: "ГЛАВНЫЕ ЭКСПЕРТЫ",
    strengths: "МОИ ПРЕИМУЩЕСТВА",
    s_speed: "Высокая скорость",
    s_speed_d: "Оптимизация производительности на 100/100 в Google PageSpeed.",
    s_cyber: "Кибербезопасность",
    s_cyber_d: "Проекты на 100% защищены от современных киберугроз.",
    s_ai: "AI Интеграция",
    s_ai_d: "Интеграция передового искусственного интеллекта в ваш бизнес.",
    get_in_touch: "СВЯЗАТЬСЯ",
    ph_name: "Ваше имя",
    ph_email: "Ваш Email",
    ph_phone: "Номер телефона",
    ph_tg: "Telegram @username",
    ph_msg: "Расскажите о вашем проекте...",
    btn_send: "Отправить сообщение",
    footer: "© 2026 Исмоилжон | Создано со страстью и чистым кодом",
  },
};

// Dropdown funksiyasi
function toggleDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function changeLanguage(lang) {
  localStorage.setItem("selectedLang", lang);
  applyLanguage(lang);
  toggleDropdown(); // Tanlangandan keyin yopiladi
}

function applyLanguage(lang) {
  const translation = translations[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translation[key]) el.textContent = translation[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translation[key]) el.setAttribute("placeholder", translation[key]);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("selectedLang") || "en";
  applyLanguage(savedLang);
});

//New jS edits done above
//Menu toggle
//Dropdown funksiyasi
function toggleMobileDropdown() {
  const dropdown = document.getElementById("mobileDropdown");
  dropdown.classList.toggle("show");

  // Iconkani aylantirish (ixtiyoriy)
  const icon = event.currentTarget.querySelector(".fa-chevron-down");
  if (icon) {
    icon.style.transform = dropdown.classList.contains("show")
      ? "rotate(180deg)"
      : "rotate(0deg)";
    icon.style.transition = "0.3s";
  }
}

// Mobile dropdown ichidagi tillar bosilganda dropdownni yopish
document
  .querySelectorAll(".mobile-dropdown-content .lang-option")
  .forEach((option) => {
    option.addEventListener("click", () => {
      document.getElementById("mobileDropdown").classList.remove("show");
    });
  });
