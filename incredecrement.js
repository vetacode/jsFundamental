let a = 4;
a++;
console.log(a);
++a;
console.log(a);

let b = 6;
console.log('second b:', --b); //5
console.log('first b:', b--); //5
console.log('third b:', --b); //3

//The prefix form returns the new value while the postfix form returns the old value (prior to increment/decrement).

export default function calculator(a) {
  let x = 10;
  x += 2 * x + a;

  return console.log(--x), console.log(x++), console.log(++x);
}

calculator(3);

let x = 1,
  y = 1;

let w = ++x; // ?
let z = y++; // ?

console.log('x:', x);
console.log('y:', y);
console.log('w:', w);
console.log('z:', z);

let p = 0;
console.log('hasil p++:', p++);

console.log('hasil akhir p:', p);
