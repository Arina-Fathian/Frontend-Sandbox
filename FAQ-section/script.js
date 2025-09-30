const faqItem = document.querySelectorAll(".faq__item");

faqItem.forEach((item) => {
  const btn = item.querySelector(".faq-question-container");
  const icon = btn.querySelector(".faq-opnimg");
  btn.addEventListener("click", () => {
    faqItem.forEach((other) => {
      if (other !== item) other.classList.remove("open");
    });
    item.classList.toggle("open");
  });
});
