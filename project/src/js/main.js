const $ = (selector) => document.querySelector(selector);

(async () => {
  // -- Mobile Menu Toggle Button ------
  const $body = $("body");
  const $btnToggle = $("#headerBtnToggle");

  $btnToggle.addEventListener("click", async (evt) => {
    evt.preventDefault();

    const isExpanded = $btnToggle.getAttribute("aria-expanded") == "true";

    console.log(isExpanded);

    $btnToggle.setAttribute("aria-expanded", !isExpanded ? "true" : "false");

    isExpanded
      ? $body.classList.remove("is-expanded")
      : $body.classList.add("is-expanded");
  });
})();
