(() => {
  const $ = (id) => document.getElementById(id);

  function showToast(msg) {
    const toast = $("toast");
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toast.classList.remove("show"), 1700);
  }

  function safeSetText(id, text) {
    const el = $(id);
    if (el) el.textContent = text;
  }

  function init() {
    safeSetText("year", new Date().getFullYear());
    safeSetText("today", new Date().toLocaleDateString("ar"));

    const toastBtn = $("toastBtn");
    if (toastBtn) toastBtn.addEventListener("click", () => showToast("✅ الموقع يعمل بنجاح"));

    const form = $("contactForm");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        showToast("✅ تم الإرسال (تجريبي)");
      });
    }

    const menuBtn = $("menuBtn");
    const links = $("links");
    if (menuBtn && links) {
      menuBtn.addEventListener("click", () => links.classList.toggle("open"));
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
