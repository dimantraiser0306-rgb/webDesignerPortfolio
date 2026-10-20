const btn = document.querySelector(".adapt_btn");
const adaptNav = document.querySelector(".adapt_nav");

btn.addEventListener("click", function () {
  adaptNav.classList.toggle("open");
});

const down = document.querySelector(".down");
down.addEventListener("click", function () {
  window.scrollTo({
    top: document.body.scrollHeight, // Высота всей страницы (самый низ)
    behavior: "smooth",
  });
});
