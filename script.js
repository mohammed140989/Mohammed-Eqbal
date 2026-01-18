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
    // Year + Today
    safeSetText("year", new Date().getFullYear());
    safeSetText("today", new Date().toLocaleDateString("ar"));

    // Repo link (اختياري: ضع رابطك هنا)
    const repoLink = $("repoLink");
    if (repoLink) {
      // ضع رابط المستودع الحقيقي إن أردت:
      // repoLink.href = "https://github.com/USERNAME/REPO";
      repoLink.href = "#";
    }

    // Toast button
    const toastBtn = $("toastBtn");
    if (toastBtn) {
      toastBtn.addEventListener("click", () => showToast("✅ كل شيء يعمل بشكل ممتاز"));
    }

    // Contact form (تجريبي)
    const form = $("contactForm");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        showToast("✅ تم (تجريبي) — لا يتم إرسال بيانات");
      });
    }

    // Mobile menu
    const menuBtn = $("menuBtn");
    const links = $("links");
    if (menuBtn && links) {
      menuBtn.addEventListener("click", () => {
        links.classList.toggle("open");
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
