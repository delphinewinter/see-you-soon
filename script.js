"use strict";

// audio autoplay
window.addEventListener("load", function () {
  const audio = document.getElementById("bg-music");
  audio.volume = 0.5; // soft background volume

  // Set starting time to 30 seconds (or any desired start time)
  audio.currentTime = 0.1;

  audio.play().catch(() => {
    document.body.addEventListener(
      "click",
      () => {
        audio.play();
      },
      { once: true }
    );
  });
});

const modal1 = document.querySelector("#modal1");
const modal2 = document.querySelector("#modal2");
const modal3 = document.querySelector("#modal3");
const modal4 = document.querySelector("#modal4");

const themeBTN = document.querySelector(".theme-btn");
const themeIMG = document.querySelector(".theme-img");

const btnOpenModal1 = document.querySelector(".show-modal-1");
const btnOpenModal2 = document.querySelector(".show-modal-2");
const btnOpenModal3 = document.querySelector(".show-modal-3");
const btnOpenModal4 = document.querySelector(".show-modal-4");

const closeModal1 = document.querySelector(".close-btn-1");
const closeModal2 = document.querySelector(".close-btn-2");
const closeModal3 = document.querySelector(".close-btn-3");
const closeModal4 = document.querySelector(".close-btn-4");

const guess1 = document.querySelector(".guess-1");
const guess2 = document.querySelector(".guess-2");
const guess3 = document.querySelector(".guess-3");
const guess4 = document.querySelector(".guess-4");

const guessans1 = document.querySelector(".g-ans-1");
const guessans2 = document.querySelector(".g-ans-2");
const guessans3 = document.querySelector(".g-ans-3");
const guessans4 = document.querySelector(".g-ans-4");

const submitQuiz = document.querySelector(".submit-quiz-btn");

// quiz
let guess1Check, guess2Check, guess3Check, guess4Check;

const checkAnswers = () => {
  if (!guess1Check && !guess2Check && !guess3Check && !guess4Check) {
    document.querySelector(".no-caps").textContent = "you fr twin🧠";
  } else {
    document.querySelector(".no-caps").textContent = "do better bro💔";
  }

  guess1Check =
    guess1.value != "davis"
      ? (guessans1.textContent = "❌wrong lil bro")
      : (guessans1.textContent = "✅you chill like that");

  guess2Check =
    guess2.value != "prom"
      ? (guessans2.textContent = "❌wrong lil bro")
      : (guessans2.textContent = "✅you chill like that");
  guess3Check =
    guess3.value != "delphine"
      ? (guessans3.textContent = "❌you not slick")
      : (guessans3.textContent = "✅you wise");
  guess4Check =
    guess4.value != "spicy"
      ? (guessans4.textContent = "❌you dont have taste")
      : (guessans4.textContent = "✅mhmmmmm");
};

submitQuiz.addEventListener("click", (e) => {
  e.preventDefault();

  checkAnswers();
});

// themee

let currentTheme = 1;

themeBTN.addEventListener("click", function () {
  currentTheme++;

  if (currentTheme > 4) {
    currentTheme = 1;
  }

  document.body.style.backgroundImage = `url('theme-${currentTheme}.jpg')`;
});

// Modal

btnOpenModal1.addEventListener("click", () =>
  modal1.classList.remove("hidden")
);
btnOpenModal2.addEventListener("click", () =>
  modal2.classList.remove("hidden")
);
btnOpenModal3.addEventListener("click", () =>
  modal3.classList.remove("hidden")
);
btnOpenModal4.addEventListener("click", () =>
  modal4.classList.remove("hidden")
);

closeModal1.addEventListener("click", function () {
  modal1.classList.add("hidden");
});
closeModal2.addEventListener("click", function () {
  modal2.classList.add("hidden");
});
closeModal3.addEventListener("click", function () {
  modal3.classList.add("hidden");
});
closeModal4.addEventListener("click", function () {
  modal4.classList.add("hidden");
});
