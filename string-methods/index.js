//**********************       STRING METHODS        ****************************************************************************************
////let username = "  BooleanTron  ";
//username = username.trim();
//username = username.toUpperCase();
//username = username.toLowerCase();
//username = username.repeat(5);
//let result = username.startsWith("B");

//console.log(username);
//console.log(result);
//console.log(username.charAt(0));
//console.log(username.indexOf("o"));
//console.log(username.length);
//
//let phonenumber = "123-456-7890";
//phonenumber = phonenumber.replaceAll("-", ",");
//phonenumber = phonenumber.padStart(15, "0");
//
//phonenumber = phonenumber.padEnd(15, "0");

//console.log(phonenumber);

//**********************       STRING SLICING       ****************************************************************************************
//const fullname = "Boolean Tron";

//let firstname = fullname.slice(0, fullname.indexOf(" "));
//console.log(firstname);

//*********************        METHOD CHAINING      ****************************************************************************************

//NO METHOD CHAINING 
let username = window.prompt("Enter your Username");

username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();

username = letter + extraChars;

console.log(username);

