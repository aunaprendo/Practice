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

