let a = 4;
a++;
console.log(a);
++a;
console.log(a);

let b = 6;
console.log('second b:', --b);
console.log('first b:', b--);

//The prefix form returns the new value while the postfix form returns the old value (prior to increment/decrement).

export default function () {
  let x = 10;

  return console.log(x);
}
