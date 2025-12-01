/* =========================================================================
   Accessible site JS — partials loader, navbar, side-menu, dropdowns
   - 2-space indentation
   - robust, defensive, and keyboard accessible
   ========================================================================= */

document.addEventListener("DOMContentLoaded", () => {
  loadPartials();
});

/* ================================
   PARTIALS LOADER
================================ */
async function loadPartials() {
  const includes = document.querySelectorAll("[data-include]");

  for (const el of includes) {
    const file = el.getAttribute("data-include");
    if (!file) continue;

    try {
      const resp = await fetch(file);
      if (!resp.ok) {
        console.warn(`Failed to fetch ${file}: ${resp.status}`);
        continue;
      }

      const html = await resp.text();
      el.innerHTML = html;
    } catch (err) {
      console.error("Error loading partial:", err);
    }
  }

  // Run init functions **after all partials are injected**
  if (document.getElementById("hamburger")) initNavbar();
  if (document.querySelector(".side-menu")) initSideMenu();
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
  if (!hamburger.hasAttribute("aria-expanded")) hamburger.setAttribute("aria-expanded", "false");

  const onToggle = e => {
    if (e.type === "keydown" && e.key !== "Enter" && e.key !== " ") return;
    toggleMenu();
    e.preventDefault();
  };

  hamburger.addEventListener("click", onToggle);
  hamburger.addEventListener("keydown", onToggle);

  overlay.addEventListener("click", closeMenu);

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeMenu();
  });
}

/* Toggle side-menu */
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
    const items = Array.from(clone.children).reverse();
    mobileNavLinks.append(...items);
  }
}

/* ================================
   SIDE MENU + DROPDOWNS
================================ */
function initSideMenu() {
  moveNavLinks();
  window.addEventListener("resize", moveNavLinks);

  const dropdownTriggers = Array.from(document.querySelectorAll(".dropdown-trigger"));

  dropdownTriggers.forEach((trigger) => {
    let menu = trigger.nextElementSibling;
    if (!menu || !menu.classList.contains("dropdown-menu")) {
      const ctrl = trigger.getAttribute("aria-controls");
      if (ctrl) menu = document.getElementById(ctrl);
    }
    if (!menu) return;

    trigger.setAttribute("role", "button");
    trigger.setAttribute("tabindex", "0");
    menu.setAttribute("role", "menu");
    menu.setAttribute("aria-hidden", "true");
    trigger.setAttribute("aria-expanded", "false");

    const toggle = (e) => {
      // Mobile only
      if (window.innerWidth > 768) return;
      if (e.type === "keydown" && e.key !== "Enter" && e.key !== " ") return;

      const isNowOpen = menu.classList.toggle("show");
      trigger.setAttribute("aria-expanded", isNowOpen ? "true" : "false");
      menu.setAttribute("aria-hidden", isNowOpen ? "false" : "true");

      if (isNowOpen) {
        const focusables = getFocusable(menu);
        if (focusables.length) focusables[0].focus();
      } else {
        trigger.focus();
      }
      e && e.preventDefault();
    };

    trigger.addEventListener("click", toggle);
    trigger.addEventListener("keydown", toggle);

    // Click outside closes dropdown (mobile only)
    document.addEventListener("click", (ev) => {
      if (window.innerWidth > 768) return;
      if (!menu.classList.contains("show")) return;
      if (trigger.contains(ev.target) || menu.contains(ev.target)) return;
      menu.classList.remove("show");
      trigger.setAttribute("aria-expanded", "false");
      menu.setAttribute("aria-hidden", "true");
    });

    // Escape closes
    document.addEventListener("keydown", (ev) => {
      if (ev.key !== "Escape") return;
      if (menu.classList.contains("show")) {
        menu.classList.remove("show");
        trigger.setAttribute("aria-expanded", "false");
        menu.setAttribute("aria-hidden", "true");
        trigger.focus();
      }
    });
  });
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
    if (f.length === 0) { e.preventDefault(); return; }

    const first = f[0];
    const last = f[f.length - 1];

    if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    } else if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    }
  };

  document.addEventListener("keydown", _trapHandler);
}

function releaseFocusTrap() {
  if (_trapHandler) document.removeEventListener("keydown", _trapHandler);
  _trapHandler = null;

  if (_previouslyFocused && typeof _previouslyFocused.focus === "function") _previouslyFocused.focus();
  _previouslyFocused = null;
  _trapContainer = null;
}

/* ================================
   DEBUG API
================================ */
window.__siteControls = {
  openMenu: () => {
    const sideMenu = document.getElementById("side-menu");
    const overlay = document.getElementById("overlay");
    const hamburger = document.getElementById("hamburger");
    if (!sideMenu || !overlay || !hamburger) return;

    sideMenu.classList.add("open");
    overlay.classList.add("show");
    hamburger.classList.add("active");
    hamburger.setAttribute("aria-expanded", "true");
    openFocusTrap(sideMenu);
  },
  closeMenu,
  toggleMenu
};