const openLetterBtn = document.getElementById("openLetterBtn");
const introScreen = document.getElementById("introScreen");
const mainContent = document.getElementById("mainContent");
const envelope = document.getElementById("envelope");
const envelopeStage = document.querySelector(".envelope-stage");
const bgMusic = document.getElementById("bgMusic");

const revealElements = document.querySelectorAll(".reveal-on-scroll");
const typewriterBlocks = document.querySelectorAll(".typewriter-block");

openLetterBtn.addEventListener("click", () => {
  envelope.classList.add("open");
  envelopeStage.classList.add("open");

  bgMusic.play().catch(() => {
    console.log("La música necesita interacción del usuario.");
  });

  setTimeout(() => {
    introScreen.style.opacity = "0";
    introScreen.style.transition = "opacity 0.5s ease";
  }, 1000);

  setTimeout(() => {
    introScreen.style.display = "none";
    mainContent.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 1450);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");

      if (entry.target.classList.contains("typewriter-block") && !entry.target.dataset.typed) {
        runTypewriter(entry.target);
      }
    }
  });
}, {
  threshold: 0.15
});

revealElements.forEach((element) => {
  observer.observe(element);
});

function runTypewriter(element) {
  const originalText = element.textContent.trim();
  element.dataset.typed = "true";
  element.classList.add("typed", "typewriter-cursor");
  element.textContent = "";

  let index = 0;
  const speed = 16;

  const typing = setInterval(() => {
    element.textContent += originalText.charAt(index);
    index++;

    if (index >= originalText.length) {
      clearInterval(typing);
      element.classList.remove("typewriter-cursor");
    }
  }, speed);
}