// .reduce() = reduce the elements of the array to a single value

const prices = [5, 30, 10, 25, 15, 20];
const total = prices.reduce(sum);
console.log(total);

function sum(accumulator, currentValue) {
    return accumulator + currentValue;
}

const grades = [75, 60, 55, 90, 80, 95];

const maximum = grades.reduce(max);
console.log(maximum);

function max(accumulator, currentValue) {
    return Math.max(accumulator, currentValue);
}