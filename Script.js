// Oppgave 2: Variabler med ulike datatyper

// We use let for variables that can be changed, and const for constants.
let myString = "Hello World!"; // String (text)
const myNumber = 32; // Number )
let myBoolean = true; // Boolean (True/Untrue)
const myArray = [1, 2, 3, 4, 5]; // Array (list)

// Print the variables to the console to see their contents:
console.log(myString);
console.log(myNumber);
console.log(myBoolean);
console.log(myArray);

//oppgave 3 Prøv ut noen av operatorene vi så på i forrige forelesning:
/* - Matematiske operatorer: +, -, /, *
- Forkortede operatorer: ++, --, +=, -= */

//Mathematical operators
let a = 15;
let b = 20;
console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a * b);

// Abbreviated operators:
a++; // a = a + 1 (Increases with 1, now a is 16)
console.log(a);

b--; // b = b - 1 (reduce b with 1, now b is 19)
console.log(b);

// Forkortede operatorer med tilordning:
a += 5; // a = a + 5 (now a is 21)
console.log(a);

b -= 2; // b = b - 2 (now b is 17)
console.log(b);

//Oppgave 4 Variables:

let userName = "Elvis"; //Try "" to test whats wrong
let userAge = 18; //Age under 18 or whatever i type in
let userIsLoggedIn = false; //
let userIsBlocked = false; //Try true to see what happens and message say wrong else statement.
let goTopage = "/home"; //

//If/else statments:

if (userName !== "" && userAge >= 18 && userIsBlocked === false) {
  userIsLoggedIn = true;
  goTopage = "/home"; // Here we indicate that the page the user is taken to is "/home"
  console.log(
    "Welcome" +
      userName +
      "! You are now logged inn and being sent to " +
      goTopage +
      "."
  );
} else {
  console.log(
    "Wrong: Either the userName is empty, userAge is under 18 or userIsBlocked."
  );
}
//Oppgave 5

const userMale = true;

//Ternary Conditional

const userTitle = userMale ? "Mr." : "Mrs.";
console.log("userMale:", userTitle); // true its "Mr." and false its "Mrs."
