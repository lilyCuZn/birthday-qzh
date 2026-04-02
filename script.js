const heroSurpriseButton = document.getElementById("hero-surprise-button");
const openModalButton = document.getElementById("open-modal-button");
const closeModalButton = document.getElementById("close-modal-button");
const modalBackdrop = document.getElementById("modal-backdrop");
const surpriseModal = document.getElementById("surprise-modal");
const heartContainer = document.getElementById("heart-container");

function createHeartBurst(count = 18) {
  const icons = ["❤", "💖", "✨", "🌸"];

  for (let index = 0; index < count; index += 1) {
    const heart = document.createElement("span");
    heart.className = "heart";
    heart.textContent = icons[Math.floor(Math.random() * icons.length)];
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDelay = `${Math.random() * 0.5}s`;
    heart.style.fontSize = `${18 + Math.random() * 20}px`;

    heartContainer.appendChild(heart);

    window.setTimeout(() => {
      heart.remove();
    }, 3000);
  }
}

function openModal() {
  surpriseModal.classList.remove("hidden");
  surpriseModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  createHeartBurst(24);
}

function closeModal() {
  surpriseModal.classList.add("hidden");
  surpriseModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

heroSurpriseButton?.addEventListener("click", () => {
  document.querySelector(".surprise-section")?.scrollIntoView({ behavior: "smooth" });
  createHeartBurst();
});

openModalButton?.addEventListener("click", openModal);
closeModalButton?.addEventListener("click", closeModal);
modalBackdrop?.addEventListener("click", closeModal);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !surpriseModal.classList.contains("hidden")) {
    closeModal();
  }
});
