function rollDice() {
  const noOfDice = document.getElementById("noOfDice").value;
  const result = document.getElementById("result");
  const diceImages = document.getElementById("DiceImages");
  const values = [];
  const images = [];
  for (let number = 1; number <= noOfDice; number++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src="dice-images/${value}.png">`);
  }


  result.textContent = `Dices: ${values.join(",")}`;
  diceImages.innerHTML = images.join("");
}
