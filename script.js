const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");
const hangmanImage = document.querySelector(".hangman-box img");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = document.querySelector("button");

let currentWord, correctLetters, WrongGuessCount;
const maxGuesses = 6;

const resetGame = () => {
  correctLetters = [];
  WrongGuessCount = 0;
  hangmanImage.src = "images/hangman-0.svg";
  guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
  wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter">_</li>`).join("");
  keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);
  gameModal.classList.remove("show");
}
const initGame = (button, clickedLetter) => {
  if(currentWord.includes(clickedLetter)) {
    [...currentWord].forEach((letter, index) => {
      if(letter === clickedLetter) {
        correctLetters.push(letter);
        wordDisplay.querySelectorAll("li")[index].innerText = letter;
        wordDisplat.querySelectorAll("li")[index].classList.add("guessed");
      }
    });
  } else {
    WrongGuessCount++;
    hangmanImage.src = `images/hangman-${WrongGuessCount}.svg`;
  }
  button.disbaled = true;
  guessesText.innerText = `${WrongGuessCount} / ${maxGuesses}`;
  if(WrongGuessCount === maxGuesses) return gameOver(false);
  if(correctLetters.length === currentWord.length) return gameOver(true);
}
for (let i = 97; i <= 122; i++) {
  const button = document.createElement("button");
  button.innerText = String.fromCharCode(i);
  keyboardDiv.append(button);
  button.addEventListener("click", (e) => initGame(e.target, String.fromCharCode(i)));
}
getRandomWord();
playAgainBtn.addEventListener("click", getRandomWord);