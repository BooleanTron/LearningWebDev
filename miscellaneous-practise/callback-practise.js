//callback = a funtion that is passed as an argument in another function - it is like "hey if you are done then do this" - used to carry out asynchronous operations like reading a file, network requests and interacting with databases
//

function hello(callback) {
  console.log("hello!");
  callback();
}
function goodbye() {
  console.log("goodbye");
}

hello(goodbye);

function sum(callback, x, y) {
  let result = x + y;
  callback(result);
}

function displayConsole(result) {
  console.log(result);
}

sum(displayConsole, 1, 2);
