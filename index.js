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

const submitForm = document.getElementsByClassName("contact-form")[0];
const firstName = document.getElementById("fName");
const lastName = document.getElementById("lName");
const message = document.getElementById("message");
const sender = document.getElementById("email");

submitForm.addEventListener("submit", (e) => {
  console.log("Sending message...");
  e.preventDefault();
  Email.send({
    SecureToken: "175ddd3f-18b0-4ccc-b7ec-6156c67dadc9",
    To: "rossh.beckham@gmail.com",
    From: "rossh.beckham@gmail.com",
    Subject: "New Message from Portfolio",
    Body:
      "First Name: " +
      firstName.value +
      "<br> Last Name: " +
      lastName.value +
      "<br> Email: " +
      sender.value +
      "<br> Message: " +
      message.value,
  }).then(message);
  submitForm.reset();
});
