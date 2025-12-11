/* =========================================================================
   Accessible site JS — partials loader, navbar, side-menu, dropdowns
   ========================================================================= */

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
  overlay.classList.remove("show");
  hamburger.setAttribute("aria-expanded", "false");

  releaseFocusTrap();
}

/* ================================
   SIDE MENU + DROPDOWNS
================================ */
function initSideMenu() {
  const navRoot = document.getElementById("side-menu");
  if (!navRoot) return;

  const dropdownTriggers = navRoot.querySelectorAll(
    "[aria-haspopup='true'], .dropdown-trigger, .has-dropdown"
  );

  dropdownTriggers.forEach(trigger => {
    const menu = document.getElementById(trigger.getAttribute("aria-controls"));
    if (!menu) return;

    trigger.setAttribute("role", "button");
    trigger.setAttribute("tabindex", "0");
    trigger.setAttribute("aria-expanded", "false");
    menu.setAttribute("role", "menu");
    menu.setAttribute("aria-hidden", "true");

    const toggle = e => {
      if (window.innerWidth > 768) return;
      if (e.type === "keydown" && e.key !== "Enter" && e.key !== " ") return;

      const isNowOpen = menu.classList.toggle("show");
      trigger.setAttribute("aria-expanded", isNowOpen ? "true" : "false");
      menu.setAttribute("aria-hidden", isNowOpen ? "false" : "true");

      e.preventDefault();
    };

    trigger.addEventListener("click", toggle);
    trigger.addEventListener("keydown", toggle);
  });
}

/* ================================
   CONTACT CARD — slide-in panel
================================ */
function initContactCard() {
  const contactLink = document.querySelector(".side-card");
  const contactCard = document.querySelector(".contact-card");
  const closeBtn = document.getElementById("contact-close");
  const overlay = document.getElementById("overlay");

  if (!contactLink || !contactCard || !overlay) return;

  contactLink.addEventListener("click", e => {
    e.preventDefault();
    closeMenu();
    openContact();
  });

  overlay.addEventListener("click", closeContact);
  if (closeBtn) closeBtn.addEventListener("click", closeContact);

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeContact();
  });
}

function openContact() {
  const contactCard = document.querySelector(".contact-card");
  const overlay = document.getElementById("overlay");
  if (!contactCard) return;

  contactCard.classList.add("open");
  overlay.classList.add("show");
  openFocusTrap(contactCard);
}

function closeContact() {
  const contactCard = document.querySelector(".contact-card");
  const overlay = document.getElementById("overlay");
  if (!contactCard) return;

  contactCard.classList.remove("open");

  // Only hide overlay if menu also closed
  const sideMenuOpen = document.getElementById("side-menu")?.classList.contains("open");
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
  if (!container) return;

  _trapContainer = container;
  _previouslyFocused = document.activeElement;

  const focusables = getFocusable(container);
  if (focusables.length) focusables[0].focus();

  _trapHandler = e => {
    if (e.key !== "Tab") return;

    const f = getFocusable(_trapContainer);
    if (!f.length) { e.preventDefault(); return; }

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