// const deck = [
//   { card: "el 2", suit: "corazones", value: 2 },
//   { card: "el 3", suit: "corazones", value: 3 },
//   { card: "el 4", suit: "corazones", value: 4 },
//   { card: "el 5", suit: "corazones", value: 5 },
//   { card: "el 6", suit: "corazones", value: 6 },
//   { card: "el 7", suit: "corazones", value: 7 },
//   { card: "el 8", suit: "corazones", value: 8 },
//   { card: "el 9", suit: "corazones", value: 9 },
//   { card: "el 10", suit: "corazones", value: 10 },
//   { card: "la J", suit: "corazones", value: 11 },
//   { card: "la reina", suit: "corazones", value: 12 },
//   { card: "el rey", suit: "corazones", value: 13 },
//   { card: "el as", suit: "corazones", value: 14 },

//   { card: "el 2", suit: "picas", value: 2 },
//   { card: "el 3", suit: "picas", value: 3 },
//   { card: "el 4", suit: "picas", value: 4 },
//   { card: "el 5", suit: "picas", value: 5 },
//   { card: "el 6", suit: "picas", value: 6 },
//   { card: "el 7", suit: "picas", value: 7 },
//   { card: "el 8", suit: "picas", value: 8 },
//   { card: "el 9", suit: "picas", value: 9 },
//   { card: "el 10", suit: "picas", value: 10 },
//   { card: "la J", suit: "picas", value: 11 },
//   { card: "la reina", suit: "picas", value: 12 },
//   { card: "el rey", suit: "picas", value: 13 },
//   { card: "el as", suit: "picas", value: 14 },

//   { card: "el 2", suit: "tréboles", value: 2 },
//   { card: "el 3", suit: "tréboles", value: 3 },
//   { card: "el 4", suit: "tréboles", value: 4 },
//   { card: "el 5", suit: "tréboles", value: 5 },
//   { card: "el 6", suit: "tréboles", value: 6 },
//   { card: "el 7", suit: "tréboles", value: 7 },
//   { card: "el 8", suit: "tréboles", value: 8 },
//   { card: "el 9", suit: "tréboles", value: 9 },
//   { card: "10", suit: "tréboles", value: 10 },
//   { card: "la J", suit: "tréboles", value: 11 },
//   { card: "la reina", suit: "tréboles", value: 12 },
//   { card: "el rey", suit: "tréboles", value: 13 },
//   { card: "el as", suit: "tréboles", value: 14 },

//   { card: "el 2", suit: "diamantes", value: 2 },
//   { card: "el 3", suit: "diamantes", value: 3 },
//   { card: "el 4", suit: "diamantes", value: 4 },
//   { card: "el 5", suit: "diamantes", value: 5 },
//   { card: "el 6", suit: "diamantes", value: 6 },
//   { card: "el 7", suit: "diamantes", value: 7 },
//   { card: "el 8", suit: "diamantes", value: 8 },
//   { card: "el 9", suit: "diamantes", value: 9 },
//   { card: "el 10", suit: "diamantes", value: 10 },
//   { card: "la J", suit: "diamantes", value: 11 },
//   { card: "la reina", suit: "diamantes", value: 12 },
//   { card: "el rey", suit: "diamantes", value: 13 },
//   { card: "el as", suit: "diamantes", value: 14 },
// ];

// const shuffledDeck = [];

// const shuffle = () => {
//   while (shuffledDeck.length < deck.length) {
//     let randomCard = deck[Math.floor(Math.random() * deck.length)];

//     if (!shuffledDeck.includes(randomCard)) {
//       shuffledDeck.push(randomCard);
//     }
//   }
// };

// shuffle();

// let userCard = shuffledDeck[Math.floor(Math.random() * shuffledDeck.length)];

// const cardsToBeat = [];

// const nextCard = () => {
//   while (cardsToBeat.length < 3) {
//     let cardToBeat = shuffledDeck[Math.floor(Math.random() * deck.length)];

//     if (!cardsToBeat.includes(cardToBeat)) {
//       cardsToBeat.push(cardToBeat);
//     }
//   }
// };

// nextCard();

// console.log(`Tu carta es ${userCard.card} de ${userCard.suit}.`);

// let round = 0;
// let userCardValue = userCard.value;
// let cardToBeatValue = cardsToBeat[round].value;
// let userAnswer = "";
// let conditionToContinue = true;

// checkRound = () => {
//   if (userAnswer === "mayor" && cardToBeatValue < userCardValue) {
//     alert("Enhorabuena, vamos a por la siguiente.");
//     round++;
//   } else if (userAnswer === "menor" && cardToBeatValue > userCardValue) {
//     alert("Enhorabuena, vamos a por la siguiente.");
//     round++;
//   } else {
//     alert("Te equivocaste, lo sentimos.");
//     conditionToContinue = false;
//   }

//   if (round > 3) {
//     alert("El juego ha terminado, lo conseguiste.");
//   }
// };

// const playGame = () => {
//   do {
//     alert(
//       `A continuación te daremos una carta. Tienes tres oportunidades para decir si la siguiente carta de la baraja en salir va a ser de mayor o menor valor que la tuya. Escribe "mayor" o "menor" para hacernos saber tu estimación antes de que resolvamos el misterio. Si fallas puedes volver a intentarlo con otra carta.`
//     );
//     alert(`Tu carta es ${userCard.card} de ${userCard.suit}.`);
//     userAnswer = prompt(`Qué dirías, ¿mayor o menor?`);
//     alert(
//       `La primera carta que ha salido es ${cardsToBeat[round].card} de ${cardsToBeat[round].suit}.`
//     );
//     checkRound();
//     userAnswer = prompt(`Una vez más, ¿mayor o menor?`);
//     alert(
//       `La segunda carta que ha salido es ${cardsToBeat[round].card} de ${cardsToBeat[round].suit}.`
//     );
//     checkRound();
//     userAnswer = prompt(`La última, ¿mayor o menor?`);
//     alert(
//       `La tercera carta que ha salido es ${cardsToBeat[round].card} de ${cardsToBeat[round].suit}.`
//     );
//   } while (conditionToContinue === true);
// };

// playGame();

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

alert(
  `A continuación te daremos una carta. Tienes tres oportunidades para decir si la siguiente carta de la baraja en salir va a ser de mayor o menor valor que la tuya. Escribe "mayor" o "menor" para hacernos saber tu estimación antes de que resolvamos el misterio. Si fallas puedes volver a intentarlo con otra carta.`
);

const startGame = () => {
  do {
    generateCards();
    deck = deck.sort(() => Math.random() - 0.5);
    currentCard = getRandomCard();
    console.log(`Carta actual: ${currentCard}`);
    const userChoice = prompt(
      "¿La siguiente carta será mayor o menor?"
    ).toLowerCase();
    const nextCard = getRandomCard();
    const currentValue = values.indexOf(currentCard.charAt(0));
    const nextValue = values.indexOf(nextCard.charAt(0));
    if (nextValue > currentValue && userChoice === "mayor") {
      console.log(`Acertaste. La siguiente carta fue: ${nextCard}`);
      score++;
    } else if (nextValue < currentValue && userChoice === "menor") {
      console.log(`Acertaste. La siguiente carta fue: ${nextCard}`);
      score++;
    } else {
      console.log(`Fallaste. La siguiente carta fue: ${nextCard}`);
      console.log(`Carta actual: ${currentCard}`);
    }
    round++;
    deck = [];
    if (confirm("¿Quieres jugar de nuevo?")) {
      startGame();
    } else {
      console.log(`Tu puntuación final es: ${score} en ${round} rondas.`);
    }
  } while (rounds < 5);
};

startGame();

// retryButton.addEventListener("click", () => {
//   instructionsDisplay.textContent = "E";
// });
// const startGame = () => {
//   do {
//     generateCards();
//     deck = deck.sort(() => Math.random() - 0.5);
//     currentCard = getRandomCard();
//     console.log(`Carta actual: ${currentCard}`);
//     const userChoice = prompt(
//       "¿La siguiente carta será mayor o menor?"
//     ).toLowerCase();
// const nextCard = getRandomCard();
// const currentValue = values.indexOf(currentCard.charAt(0));
// const nextValue = values.indexOf(nextCard.charAt(0));
// if (nextValue > currentValue && userChoice === "mayor") {
//   alert(`Acertaste. La siguiente carta fue: ${nextCard}`);
//   score++;
// } else if (nextValue < currentValue && userChoice === "menor") {
//   alert(`Acertaste. La siguiente carta fue: ${nextCard}`);
//   score++;
// } else {
//   alert(`Fallaste. La siguiente carta fue: ${nextCard}`);
//   alert(`Carta actual: ${currentCard}`);
// }
// round++;
//     deck = [];
//     if (confirm("¿Quieres jugar de nuevo?")) {
//       startGame();
//     } else {
//       alert(`Tu puntuación final es: ${score} en ${round} rondas.`);
//     }
//   } while (rounds < 5);
// };

// startGame();
