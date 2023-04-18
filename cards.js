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

retryButton.addEventListener("click", () => {
  instructionsDisplay.innerHTML = "";
});
// const startGame = () => {
//   do {
//     generateCards();
//     deck = deck.sort(() => Math.random() - 0.5);
//     currentCard = getRandomCard();
//     console.log(`Carta actual: ${currentCard}`);
//     const userChoice = prompt(
//       "¿La siguiente carta será mayor o menor?"
//     ).toLowerCase();
//     const nextCard = getRandomCard();
//     const currentValue = values.indexOf(currentCard.charAt(0));
//     const nextValue = values.indexOf(nextCard.charAt(0));
//     if (nextValue > currentValue && userChoice === "mayor") {
//       console.log(`Acertaste. La siguiente carta fue: ${nextCard}`);
//       score++;
//     } else if (nextValue < currentValue && userChoice === "menor") {
//       console.log(`Acertaste. La siguiente carta fue: ${nextCard}`);
//       score++;
//     } else {
//       console.log(`Fallaste. La siguiente carta fue: ${nextCard}`);
//       console.log(`Carta actual: ${currentCard}`);
//     }
//     round++;
//     deck = [];
//     if (confirm("¿Quieres jugar de nuevo?")) {
//       startGame();
//     } else {
//       console.log(`Tu puntuación final es: ${score} en ${round} rondas.`);
//     }
//   } while (rounds < 5);
// };

// startGame();
