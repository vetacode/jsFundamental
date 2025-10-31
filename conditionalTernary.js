let accessAllowed;
let age = 20;

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

console.log(accessAllowed);

//using ternary operator

let accessAllowed2 = age > 18 ? true : false;
let accessAllowed3 = age > 18;

console.log(accessAllowed2);
console.log(accessAllowed3);
