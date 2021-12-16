// console.log("Hello World!!");
//single line comment
/*Multiline
comment*/
//NAMING CONVENTIONS:
//there must be NO SPACE in a variable or a function name ( NOT AT ALL SPACE IN ANY NAME)
//last name WRONG - there must be no space
//my function ( ) DEAD WRONG --
//1. camelCase --- myFunction()....firstName....lastName....dateOfBirth
//2. pascalCase -- MyFunction()....FirstName....LastName....DateOfBirth
//3. snake_case -- my_function()...first_name...last_name...date_of_birth
//4. kebab-case -- my-function()...first-name...last-name...date-of-birth

//FUNCTIONS IN JAVASCRIPT

// ; IS CALLED IN STATEMENT TERMINATOR

//DEFINITION OF THE FUNCTION
/*
greeting();

function greeting() {
  console.log("Hello World!");
}

function myfunction() {
  console.log("This is my function");
}
*/
//Variables
// a place in memory where we can keep something for somtime
// variable has a data type...
// integer x;
// string y
//strong typed language - int x;

//Date types: weakly typed language - Dynamically typed language
/*
var x;
x = 10;
console.log(x);
*/
/*
var pi = 3.14159;
var radius = 4.2;
var area;
area = pi * radius * radius;
console.log("Area is " + area);
*/
/*
let s = "Hello WOrld"; // string

let a = true;
let b = false; //boolean : means true or false

//truthy & falsy
// A truthy value is a value that comes out true on !!
// !!42 gives true - that is why this is called truthy value
// !!0 gives false- what is why this is called falsy value

let o = new Object();

let n = null; // defined and stored null in it..
let u = undefined; // not being defined.no value being given to it..
*/
// let s = "anystring";
// if ("") {
//   console.log("Hello S");
// } else {
//   console.log("no Truthy");
// }

//OPERATORS:
//ASSIGNMENT OPERATOR; =
//let X = 12;
//COMPARISON OPERATOR: ==

// STRICT COMPARIOSN OPERATOR: === (since JS doesn't use int,str, or float this is needed sometimes if you dont want a int 10 to be equal to a string "10")

// let a = 10;
// if (a == "10") {
//   console.log("GOOD");
// } else {
//   console.log("BAD");
// }

// let a = 10;
// if (a === "10") {
//   console.log("GOOD");
// } else {
//   console.log("BAD");
// }

//ADDITION, SUBTRACTION, MULTIPLICATION, DIVIDE
// += ADDITION ASSIGNMENT

// let x = 10;
// x += 5;
// console.log(x);
// > < <= >= !=
//BINARY OPERATORS: which requires two operands
//UNARY OPERATORS: Increment/decrement, !x
//INCREMENT/DECREMENT:

// let x = 10;
// //x++, //x+=1; // x=x+1;
// console.log(x);
// let x = 10;
// console.log(++x);
// console.log(x);

//PRE-INCREMENT OR POST INCREMENT
//++x Pre-increment -- increment the values first and then use in this statement
//x++ Post-Increment -- use in this statement and THEN increment for next statement

// let x = 10;
// console.log(x++); //10 11
// // x=11
// console.log(++x); //12 12
// //x=12
// console.log(x++); //12 13
// //x=13

// let x = 10;
// if (x >= 10) {
//   console.log("GREATER");
// } else {
//   console.log("SMALLER");
// }

//TERNARY OPERATOR: 3 OPERANDS ---     opd1 ? opd2 : opd3 ;
//opd1 is conidition
//opd2 is the value if considition is true
//opd3 is the value if condition is false

// let x = 10;
// x > 5 ? console.log("Greater") : console.log("Smaller");

// let x = 5;
// let y = 0;
// if (x > 10) {
//   y = 100;
// } else {
//   y = 200;
// }
// console.log(y);

// let x = 5;
// let y = 0;
// y = x > 10 ? 100 : 200;
// console.log(y);

// let age = 16;
// let message = "";
// message = age >= 18 ? "Adult" : "Kid";
// console.log(message);

//condition ? value_if_true : value_if_false;

// && || AND OR

// let age = 18;
// let height = 5.4;

// if (age > 18 && height >= 5) {
//   console.log("You are allowed");
// } else {
//   console.log("Not allowed");
// }

// age >= 18 && height >= 5.0
//   ? console.log("ALLOWED")
//   : console.log("NOT ALLOWED");

//true && true = true; false && true = false
//LOGICAL OR || true || true = true; false || true = true

//Switch operator

// let month = "December";
// switch (month) {
//   case "January":
//     console.log("January is cold");
//     console.log("Prepare accordingly");
//     break;
//   case "Febuary":
//     console.log("Febuary is also cold");
//     console.log("Prepare in FEB accordingly");
//     break;
//   case "March":
//     console.log("March is mild lul");
//     console.log("Prepare for March");
//     break;
//   default:
//     console.log("Wrong month");
// }

// var s1 = "some text"; //string
// var s2 = "some text"; // string s2='A';
// var s3 = `some text`; //string ...backticks ``
// var s4 = `1234` + 5; //string // 12345// concatenation
// var s5 = 1234 + 5; // Number // 1239
// var s6 = 56; //number
// var s7 = 4.53; // number// double-precision float
// var b1 = true; //boolean
// var b2 = false; //boolean
// var b3 = !b2; // boolean
// var c; // undefined
// var d = null; //null//null

// for loop is generally used in situations where we know how many times the loop will execut

//for(initialization; Condition; increment/decrement)

//1.inititalization 2.condition 3. if condition is true just do it! 4. go to increment/decrement
//5. goto condition again(3.) 6. exit out of loop
// for (var i = 10; i >= 1; i--) {
//   console.log(i);
// }

// var total = 0;
// for (var i = 1; i <= 10; i++) {
//   total += i;
//   console.log("i", i, "total", total);
// }
// var total = 0;
// for (var i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// for (var i = 0; i < 3; i++) {
//   for (var j = 0; j < 3; j++) {
//     console.log("i", i, "j", j);
//   }
// }

// for (var i = 0; i < 3; i++) {
//   for (var j = 0; j < i; j++) {
//     console.log("i", i, "j", j);
//   }
// }

//Matrix ... matrices ....
