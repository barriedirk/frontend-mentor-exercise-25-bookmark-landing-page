import { initializeTabs } from "./tabs.js";
import { initializeForm } from "./form.js";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

(async () => {
  // -- Mobile Menu Toggle Button ------
  const $body = $("body");
  const $btnToggle = $("#headerBtnToggle");
  const $$menuLinks = $$(".header__nav-link");

  $$menuLinks.forEach(($link) => {
    $link.addEventListener("click", () => {
      $body.classList.remove("is-expanded");
      $btnToggle.setAttribute("aria-expanded", "false");
    });
  });

  $btnToggle.addEventListener("click", async (evt) => {
    evt.preventDefault();

    const isExpanded = $btnToggle.getAttribute("aria-expanded") == "true";

    $btnToggle.setAttribute("aria-expanded", !isExpanded ? "true" : "false");

    isExpanded
      ? $body.classList.remove("is-expanded")
      : $body.classList.add("is-expanded");
  });

  initializeTabs();
  initializeForm();
})();
