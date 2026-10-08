/* =============================================
   PORTOFOLIO NOVAL FAUZAN
   File: js/script.js
   Fungsi: Menjalankan animasi saat elemen
   masuk ke area pandang layar (scroll).
   ============================================= */

document.addEventListener("DOMContentLoaded", function () {
  // Ambil semua elemen yang punya atribut data-animate
  var animatedElements = document.querySelectorAll("[data-animate]");

  // Beri delay animasi sesuai nilai atribut data-delay
  animatedElements.forEach(function (el) {
    var delay = el.getAttribute("data-delay") || 0;
    el.style.setProperty("--delay", delay + "ms");
  });

  // Jika browser mendukung IntersectionObserver
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    animatedElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: langsung tampilkan semua elemen
    animatedElements.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }
});
