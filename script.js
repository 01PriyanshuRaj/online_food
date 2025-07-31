document.querySelector(".menu")?.addEventListener("click", () => {
  document.querySelectorAll(".target").forEach((item) => {
    item.classList.toggle("change");
  });
});

const icons = document.querySelectorAll(".section-1-icons i");
let i = 1;

setInterval(() => {
  i++;
  const icon = document.querySelector(".section-1-icons i.change");
  if (!icon) {
    // fallback: if nothing has .change, start from first
    icons[0].classList.add("change");
    i = 1;
    return;
  }

  icon.classList.remove("change");

  if (i > icons.length) {
    icons[0].classList.add("change");
    i = 1;
  } else if (icon.nextElementSibling) {
    icon.nextElementSibling.classList.add("change");
  } else {
    // safety: if next sibling is missing, wrap around
    icons[0].classList.add("change");
    i = 1;
  }
}, 4000);
