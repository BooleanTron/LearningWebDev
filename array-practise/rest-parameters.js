// rest parameters allow a function to work with a variable number of arguments by bundling them into an array- to use it just use spread operator and declare your "function this way   func(...arguments){}
//
//
function openFridge(...food) {
  console.log(food);
}


const food1 = "apple";
const food2 = "pizza";
const food3 = "hamburger";

//openFridge(food1, food2, food3, "mango");

function listFood(...food) {
  return food;
}

let array = listFood(food1, food2, food3, "mango");
//console.log(array);
//

function sum(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}

let total = sum(1, 4, 6, 8);

console.log(total);


