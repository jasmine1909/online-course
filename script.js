const menu = document.getElementById("menu");
const navbar = document.querySelector(".navbar");
menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});
window.onscroll = () => {
  navbar.classList.remove("fa-times");
  navbar.classList.remove("active");
};
const login = document.querySelector("#login");
const loginForm = document.querySelector(".login-form");
const close = document.querySelector(".fa-times");
login.addEventListener("click", () => {
  loginForm.classList.add("popup");
});
close.addEventListener("click", () => {
  loginForm.classList.remove("popup");
});

//----------FAQ
const faqItemHead = document.querySelectorAll(".faq-item-head");
const faqItemBody = document.querySelectorAll(".faq-item-body");
faqItemHead.forEach((head, index) => {
  head.addEventListener("click", () => {
    let icon = head.querySelector(".faq-icon").firstElementChild;
    if (icon.className == "fas fa-chevron-down") {
      head.nextElementSibling.classList.add("show-para");
      icon.className = "fas fa-chevron-up";
    } else if (icon.className == "fas fa-chevron-up") {
      head.nextElementSibling.classList.remove("show-para");
      icon.className = "fas fa-chevron-down";
    }
  });
});
