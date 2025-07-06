//.filter() = creates a new array by filtering out elements

const numbers = [1, 2, 3, 4, 5, 6, 7];

function isEven(element){
    return element % 2 === 0;
}
function isOdd(element){
    return element % 2 !== 0;
}

const evenNums = numbers.filter(isEven);
console.log(evenNums);
const oddNums = numbers.filter(isOdd);
console.log(oddNums);