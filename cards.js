const suits = ["♠️", "♣️", "♦️", "♥️"];
const values = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];
let deck = [];
let score = 0;
let round = 1;
let currentCard;

const generateCards = () => {
  for (let suit in suits) {
    for (let value in values) {
      deck.push(values[value] + suits[suit]);
    }
  }
};

const getRandomCard = () => {
  return deck[Math.floor(Math.random() * deck.length)];
};

const instructionsDisplay = document.querySelector(".text-display");
const retryButton = document.querySelector(".retry");
const guessMoreButton = document.querySelector(".more");
const guessLessButton = document.querySelector(".less");
const startGameButton = document.querySelector(".start");
const userCardDisplay = document.querySelector(".user-card");
const currentCardDisplay = document.querySelector(".current-card");

setTimeout(() => {
  instructionsDisplay.innerHTML = "Qué va a ser: ¿mayor o menor?";
  instructionsDisplay.style.fontSize = "4vh";
  generateCards();
  deck = deck.sort(() => Math.random() - 0.5);
  currentCard = getRandomCard();
  userCardDisplay.innerHTML = currentCard;
}, 3000);

guessMoreButton.addEventListener("click", () => {
  const nextCard = getRandomCard();
  currentCardDisplay.innerHTML = nextCard;
  const currentValue = values.indexOf(currentCard.charAt(0));
  const nextValue = values.indexOf(nextCard.charAt(0));
  if (nextValue > currentValue) {
    instructionsDisplay.innerHTML = "Acertaste.";
    score++;
  } else if (nextValue < currentValue) {
    instructionsDisplay.innerHTML = "Fallaste.";
    score++;
  } else {
    instructionsDisplay.innerHTML = "Libraste.";
  }
  round++;
  console.log(score, round);
});

guessLessButton.addEventListener("click", () => {
  const nextCard = getRandomCard();
  currentCardDisplay.innerHTML = nextCard;
  const currentValue = values.indexOf(currentCard.charAt(0));
  const nextValue = values.indexOf(nextCard.charAt(0));
  if (nextValue > currentValue) {
    instructionsDisplay.innerHTML = "Fallaste.";
    score++;
  } else if (nextValue < currentValue) {
    instructionsDisplay.innerHTML = "Acertaste.";
    score++;
  } else {
    instructionsDisplay.innerHTML = "Libraste.";
  }
  round++;
});

if (round > 10) {
  instructionsDisplay.innerHTML = `Acertaste. Has acertado ${score} veces.`;
}
