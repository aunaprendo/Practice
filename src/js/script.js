document.addEventListener("DOMContentLoaded", () => {
  loadPartials();
});

/* ================================
   PARTIALS LOADER
================================ */
async function loadPartials() {
  const includes = document.querySelectorAll("[data-include]");

  await Promise.all(
    Array.from(includes).map(async el => {
      const file = el.getAttribute("data-include");
      if (!file) return;
      try {
        const resp = await fetch(file);
        el.innerHTML = await resp.text();
      } catch (err) {
        console.error("Error loading partial:", err);
      }
    })
  );

  initNavbar();
  initSideMenu();
  initContactCard();
}

/* ================================
   GLOBAL HELPERS
================================ */
function getFocusable(container = document) {
  const selectors = [
    'a[href]:not([disabled])',
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])'
  ];
  return Array.from(container.querySelectorAll(selectors.join(","))).filter(
    el => !el.hasAttribute("disabled") && isVisible(el)
  );
}

function isVisible(el) {
  return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
}

/* ================================
   NAVBAR / HAMBURGER
================================ */
function initNavbar() {
  const hamburger = document.getElementById("hamburger");
  const overlay = document.getElementById("overlay");
  const sideMenu = document.getElementById("side-menu");

  if (!hamburger || !overlay || !sideMenu) return;

  hamburger.setAttribute("role", "button");
  hamburger.setAttribute("tabindex", "0");
  hamburger.setAttribute("aria-controls", "side-menu");
  hamburger.setAttribute("aria-expanded", "false");

  const onToggle = e => {
    if (e.type === "keydown" && e.key !== "Enter" && e.key !== " ") return;
    toggleMenu();
    e.preventDefault();
  };

  hamburger.addEventListener("click", onToggle);
  hamburger.addEventListener("keydown", onToggle);

  overlay.addEventListener("click", () => {
    closeMenu();
    closeContact();
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      closeMenu();
      closeContact();
    }
  });
}

function toggleMenu() {
  const hamburger = document.getElementById("hamburger");
  const sideMenu = document.getElementById("side-menu");
  const overlay = document.getElementById("overlay");

  if (!hamburger || !sideMenu || !overlay) return;

  const isOpen = sideMenu.classList.toggle("open");
  hamburger.classList.toggle("active", isOpen);
  overlay.classList.toggle("show", isOpen);
  hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");

  if (isOpen) openFocusTrap(sideMenu);
  else releaseFocusTrap();
}

function closeMenu() {
  const hamburger = document.getElementById("hamburger");
  const sideMenu = document.getElementById("side-menu");
  const overlay = document.getElementById("overlay");

  if (!hamburger || !sideMenu || !overlay) return;

  sideMenu.classList.remove("open");
  hamburger.classList.remove("active");
  hamburger.setAttribute("aria-expanded", "false");

  overlay.classList.remove("show");
  releaseFocusTrap();
}

/* ================================
   MOVE NAV LINKS → MOBILE
================================ */
function moveNavLinks() {
  const navLinks = document.getElementById("nav-links");
  const mobileNavLinks = document.getElementById("mobile-nav-links");

  if (!navLinks || !mobileNavLinks) return;
  if (window.innerWidth > 768) return;

  if (mobileNavLinks.childElementCount === 0) {
    const clone = navLinks.cloneNode(true);
    clone.querySelectorAll("[id]").forEach(n => n.removeAttribute("id"));
    mobileNavLinks.append(...Array.from(clone.children).reverse());
  }
}

/* ================================
   SIDE MENU
================================ */
function initSideMenu() {
  moveNavLinks();
  window.addEventListener("resize", moveNavLinks);
}

/* ================================
   CONTACT CARD (BEST PRACTICE)
================================ */
function initContactCard() {
  const overlay = document.getElementById("overlay");
  const closeBtn = document.getElementById("contact-close");

  /* 🔹 EVENT DELEGATION 🔹
     Any click on .side-card anywhere in the document
     will open the contact card */
  document.addEventListener("click", e => {
    const link = e.target.closest(".side-card");
    if (!link) return;

    e.preventDefault();
    closeMenu();
    openContact();
  });

  if (closeBtn) closeBtn.addEventListener("click", closeContact);
  if (overlay) overlay.addEventListener("click", closeContact);

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeContact();
  });
}

function openContact() {
  const contactCard = document.querySelector(".contact-card");
  const overlay = document.getElementById("overlay");
  if (!contactCard || !overlay) return;

  contactCard.classList.add("open");
  overlay.classList.add("show");
  openFocusTrap(contactCard);
}

function closeContact() {
  const contactCard = document.querySelector(".contact-card");
  const overlay = document.getElementById("overlay");
  if (!contactCard || !overlay) return;

  contactCard.classList.remove("open");

  const sideMenuOpen = document
    .getElementById("side-menu")
    ?.classList.contains("open");

  if (!sideMenuOpen) overlay.classList.remove("show");
  releaseFocusTrap();
}

/* ================================
   FOCUS TRAP
================================ */
let _previouslyFocused = null;
let _trapContainer = null;
let _trapHandler = null;

function openFocusTrap(container) {
  _trapContainer = container;
  _previouslyFocused = document.activeElement;

  const focusables = getFocusable(container);
  if (focusables.length) focusables[0].focus();

  _trapHandler = e => {
    if (e.key !== "Tab") return;

    const f = getFocusable(_trapContainer);
    if (!f.length) {
      e.preventDefault();
      return;
    }

    const first = f[0];
    const last = f[f.length - 1];

    if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    }
  };

  document.addEventListener("keydown", _trapHandler);
}

function releaseFocusTrap() {
  if (_trapHandler) document.removeEventListener("keydown", _trapHandler);
  _trapHandler = null;

  if (_previouslyFocused) _previouslyFocused.focus();
  _previouslyFocused = null;
  _trapContainer = null;
}

/* ================================
   DEBUG (OPTIONAL)
================================ */
window.__siteControls = {
  openContact,
  closeContact,
  toggleMenu
};