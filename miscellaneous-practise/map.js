//.map() = accepts a callback and applies that function to all elements of the array and then returns a new array

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(square);

console.log(numbers);
console.log(squares);

function square(element){
    return Math.pow(element,2);
}

const students = ["spongebob", "patrick", "squidward", "sandy"];
function upperCase(element){
    return element.toUpperCase();
}

const upperCaseStudents = students.map(upperCase);
console.log(upperCaseStudents);

const dates = ["2024-09-15", "2024-09-16", "2024-09-17"];
function formatDates(element){
    const parts = element.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

const formattedDates = dates.map(formatDates);
console.log(formattedDates);k

