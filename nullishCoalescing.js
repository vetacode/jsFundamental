//The nullish coalescing operator ?? provides a short way to choose the first “defined” value from a list.

let firstName = null;
let lastName = null;
let nickName = 'Supercoder';

// shows the first defined value:
console.log(firstName ?? lastName ?? nickName ?? 'Anonymous'); // Supercoder

let firstName2 = null;
let lastName2 = null;
let nickName2 = 'Supercoder';

// shows the first truthy value:
console.log(firstName || lastName || nickName || 'Anonymous'); // Supercoder

//The important difference between them is that:
// || returns the first truthy value. doesn’t distinguish between false, 0, an empty string "" and null/undefined. They are all the same – falsy values. If any of these is the first argument of ||, then we’ll get the second argument as the result.
// ?? returns the first defined value.

let height = 0;

console.log(height || 100); // 100
console.log(height ?? 100); // 0

//The precedence of the ?? operator is the same as ||. They both equal 3 in the MDN table.
//Due to safety reasons, JavaScript forbids using ?? together with && and || operators, unless the precedence is explicitly specified with parentheses.

let y = 1 && 2 ?? 3; // Syntax error

let x = (1 && 2) ?? 3; // Works
console.log(x); // 2