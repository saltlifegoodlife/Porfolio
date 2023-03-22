const hamburger = document.getElementsByClassName("hamburger")[0];
const header = document.getElementsByClassName("header")[0];
const nav = document.querySelectorAll(".nav-a");

hamburger.addEventListener("click", () => {
  header.classList.toggle("active");
});

const hideNav = (() => {
  const handleRemover = () => {
    header.classList.remove("active");
  };

  const bindEvents = () => {
    const navs = document.querySelectorAll(".nav-a");
    navs.forEach((e) => {
      e.addEventListener("click", handleRemover);
    });
  };
  const init = () => {
    bindEvents();
  };
  return {
    init: init,
  };
})();

hideNav.init();

const FloatLabel = (() => {
  // add active class
  const handleFocus = (e) => {
    const target = e.target;
    target.parentNode.classList.add("active");
    target.setAttribute("placeholder", target.getAttribute("data-placeholder"));
  };

  // remove active class
  const handleBlur = (e) => {
    const target = e.target;
    if (!target.value) {
      target.parentNode.classList.remove("active");
    }
    target.removeAttribute("placeholder");
  };

  // register events
  const bindEvents = (element) => {
    const input = element.querySelector(".form-input");
    input.addEventListener("focus", handleFocus);
    input.addEventListener("blur", handleBlur);
  };

  // get DOM elements
  const init = () => {
    const fields = document.querySelectorAll(".field");
    fields.forEach((element) => {
      if (element.querySelector(".form-input").value) {
        element.classList.add("active");
      }

      bindEvents(element);
    });
  };

  return {
    init: init,
  };
})();

FloatLabel.init();
