window.addEventListener("scroll", () => {
  document.querySelector("nav").classList.toggle(
    "scrolled",
    window.scrollY > 50
  );
});
const accordions = document.querySelectorAll(".skill-accordion details");

accordions.forEach((item) => {
  item.addEventListener("toggle", () => {
    if (item.open) {
      accordions.forEach((other) => {
        if (other !== item) {
          other.removeAttribute("open");
        }
      });
    }
  });
});
