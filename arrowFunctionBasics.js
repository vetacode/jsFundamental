//syntax: let func = (arg1, arg2, ..., argN) => expression;

let sum = (a, b) => a + b;
/* This arrow function is a shorter form of:
let sum = function(a, b) {
  return a + b;
};
*/
console.log(sum(1, 2)); // 3

//Only accept one argument:
let double = (n) => n * 2;
// roughly the same as: let double = function(n) { return n * 2 }
console.log(double(3)); // 6

//used same as function expression
let age = 18;
let welcome =
  age < 18 ? () => console.log('Hello!') : () => console.log('Greetings!');
welcome();
