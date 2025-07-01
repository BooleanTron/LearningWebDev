//forEach() = method used to iterate over each element of the array and apply a specified function(callback) to the element

let numbers = [1,2,3,4,5];
numbers.forEach(double);
numbers.forEach(display);
function display(element){
    console.log(element);
}
function double(element,index,array){
    array[index] = element * 2;
}