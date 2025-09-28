const navBtn = document.querySelector("#ham-icon");
const navMenu = document.querySelector(".navbar__list");

navBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

