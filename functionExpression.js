let favCoffee = function () {
  console.log('Fore');
}; //function expression have semicolon at the end, unlike function declaration

favCoffee();

//Perbedaan function declaration vs expression
//Declaration
let age = 16; // take 16 as an example

if (age < 18) {
  welcome(); //(runs)

  function welcome() {
    console.log('Hello!'); //Function Declaration is available everywhere in the block where it's declared
  }

  welcome(); //(runs)
} else {
  function welcome() {
    console.log('Greetings!');
  }
}

// Here we're out of curly braces,
// so we can not see Function Declarations made inside of them.

// welcome(); // Error: welcome is not defined

//Solusinya pakai function expression

let welcome;
age = 20;
if (age < 18) {
  welcome = function () {
    console.log('Hello!');
  };
} else {
  welcome = function () {
    console.log('Greetings!');
  };
}

welcome(); // ok now

//simplifying the code:

welcome =
  age < 18
    ? function () {
        console.log('Hello From Simpler Code!');
      }
    : function () {
        console.log('Greetngs From Simpler Code!');
      };

welcome(); // ok now
