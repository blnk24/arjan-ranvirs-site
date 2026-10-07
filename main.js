// main.js

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (!toggle || !navLinks) return;

  navLinks.id = navLinks.id || "primary-navigation";

  toggle.setAttribute("type", "button");
  toggle.setAttribute("aria-controls", navLinks.id);

  function setMenuOpen(open) {
    navLinks.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute(
      "aria-label",
      open ? "Close navigation" : "Open navigation"
    );
  }

  setMenuOpen(false);

  toggle.addEventListener("click", () => {
    setMenuOpen(!navLinks.classList.contains("open"));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      setMenuOpen(false);
    });
  });

  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      navLinks.classList.contains("open")
    ) {
      setMenuOpen(false);
      toggle.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (
      !navLinks.contains(event.target) &&
      !toggle.contains(event.target)
    ) {
      setMenuOpen(false);
    }
  });

  const desktopQuery = window.matchMedia("(min-width: 769px)");

  desktopQuery.addEventListener("change", (event) => {
    if (event.matches) setMenuOpen(false);
  });
});
