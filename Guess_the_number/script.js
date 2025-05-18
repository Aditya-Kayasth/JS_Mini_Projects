const form = document.querySelector('form');
const rnum = Math.floor(Math.random() * 100) + 1;
const arr = [];
let remaining = 10; 

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const guess = parseInt(document.querySelector("#guessField").value);
  const result = document.querySelector(".lowOrHi"); 
  const lastResult = document.querySelector(".lastResult");
  const guessesSpan = document.querySelector(".guesses");

  if (isNaN(guess) || guess < 1 || guess > 100) {
    result.textContent = "Please enter a number between 1 and 100.";
    return;
  }

  if (remaining > 0) {
    arr.push(guess);
    guessesSpan.textContent = arr.join(", ");

    if (guess === rnum) {
      result.textContent = "🎉 You Won!";
      lastResult.textContent = remaining;
      form.querySelector("#guessField").disabled = true;
      form.querySelector("#subt").disabled = true;
    } else {
      remaining--;
      lastResult.textContent = remaining;
      if (remaining === 0) {
        result.textContent = `❌ Game Over! The number was ${rnum}`;
      } else {
        result.textContent = guess > rnum ? "📉 Try Lower" : "📈 Try Higher";
      }
    }
  }

  document.querySelector("#guessField").value = ""; 
  document.querySelector("#guessField").focus();   
});
