const minNum = 1;
const maxNum = 50;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
console.log(answer);

let attempts = 0;
let guess;
let running = true;

while (running) {
  guess = window.prompt(`guess a number between ${minNum} and ${maxNum}`);
  guess = Number(guess);

  if (isNaN(guess)) {
    window.alert("enter a valid number!!!!");
  }
  else if (guess > 50 || guess < 1) {
    window.alert("enter a valid number!!!!");
  }
  else {
    if (guess === answer) {
      window.alert(`you guessed the correct answer!!!!! you took ${attempts} attempts`);
      running = false;
    }
    else {
      window.alert("your guess is incorrect!!!");
    }
  }

  attempts++;
}



