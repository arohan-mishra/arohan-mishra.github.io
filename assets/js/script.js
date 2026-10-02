const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");

menuButton?.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".site-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

const flipCard = document.querySelector("[data-flip-card]");
const touchLikePointer = window.matchMedia("(hover: none), (pointer: coarse)");

function toggleFlipCard() {
  const isFlipped = flipCard.classList.toggle("is-flipped");
  flipCard.setAttribute("aria-pressed", String(isFlipped));
}

flipCard?.addEventListener("click", () => {
  if (touchLikePointer.matches) {
    toggleFlipCard();
  }
});

flipCard?.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    toggleFlipCard();
  }
});
