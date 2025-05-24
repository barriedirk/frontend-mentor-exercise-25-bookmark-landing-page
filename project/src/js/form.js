const $ = (selector) => document.querySelector(selector);

export const initializeForm = () => {
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const $input = $(".form__input");
    const $error = $(".error-message");

    if (!$input.checkValidity()) {
      e.preventDefault();

      $error.style.display = "block";
      $input.classList.add("error-highlight");
    } else {
      $error.style.display = "none";
      $input.classList.remove("error-highlight");
    }
  });
};
