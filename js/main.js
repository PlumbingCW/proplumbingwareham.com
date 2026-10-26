(function () {
  "use strict";
  var t = document.getElementById("mob-toggle");
  var d = document.getElementById("mob-drawer");
  var o = document.getElementById("mob-overlay");
  var c = document.getElementById("drawer-close");
  function openMenu() {
    d.classList.add("is-open"); o.classList.add("is-open");
    d.removeAttribute("aria-hidden");
    t.setAttribute("aria-expanded", "true");
    t.setAttribute("aria-label", "Close navigation menu");
    document.documentElement.style.overflow = "hidden";
  }
  function closeMenu() {
    d.classList.remove("is-open"); o.classList.remove("is-open");
    d.setAttribute("aria-hidden", "true");
    t.setAttribute("aria-expanded", "false");
    t.setAttribute("aria-label", "Open navigation menu");
    document.documentElement.style.overflow = "";
  }
  if (t && d && o) {
    t.addEventListener("click", function () {
      if (t.getAttribute("aria-expanded") === "true") { closeMenu(); } else { openMenu(); }
    });
    if (c) { c.addEventListener("click", closeMenu); }
    o.addEventListener("click", closeMenu);
    var links = d.querySelectorAll("a");
    for (var i = 0; i < links.length; i++) { links[i].addEventListener("click", closeMenu); }
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") { closeMenu(); } });
    window.addEventListener("resize", function () { if (window.innerWidth > 768) { closeMenu(); } });
  }
  var qs = document.querySelectorAll(".faq-q");
  for (var j = 0; j < qs.length; j++) {
    qs[j].addEventListener("click", function () {
      var item = this.parentNode;
      var isOpen = item.classList.toggle("open");
      this.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }
  var fc = document.getElementById("float-call");
  var ft = document.querySelector(".site-footer");
  if (fc && ft && "IntersectionObserver" in window) {
    new IntersectionObserver(function (es) {
      es.forEach(function (e) { fc.classList.toggle("is-hidden", e.isIntersecting); });
    }, { threshold: 0.05 }).observe(ft);
  }
})();
