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
