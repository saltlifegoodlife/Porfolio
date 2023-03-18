const hamburger = document.getElementsByClassName("hamburger")[0];
const header = document.getElementsByClassName("header")[0];

hamburger.addEventListener("click", () => {
  console.log("clicked");
  header.classList.toggle("active");
});
