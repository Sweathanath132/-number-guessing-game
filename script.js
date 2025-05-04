let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
  const guess = parseInt(document.getElementById("guessInput").value);
  const message = document.getElementById("message");

  if (isNaN(guess) || guess < 1 || guess > 100) {
    message.textContent = "Please enter a valid number between 1 and 100.";
    return;
  }

  if (guess === randomNumber) {
    message.textContent = `🎉 Correct! The number was ${randomNumber}. Reload to play again.`;
  } else if (guess < randomNumber) {
    message.textContent = "🔼 Too low! Try again.";
  } else {
    message.textContent = "🔽 Too high! Try again.";
  }
}