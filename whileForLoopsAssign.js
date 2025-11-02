let i = 0;
while (++i < 5) console.log(i);
//The first value is i = 1, because ++i first increments i and then returns the new value. So the first comparison is 1 < 5 and the alert shows 1.
//Then follow 2, 3, 4… – the values show up one after another. The comparison always uses the incremented value, because ++ is before the variable.
//Finally, i = 4 is incremented to 5, the comparison while(5 < 5) fails, and the loop stops. So 5 is not shown.

//Which values does the while loop show?
let p = 0;
while (p++ < 5) console.log('nilai p:', p);
//The first value is again i = 1. The postfix form of i++ increments i and then returns the old value, so the comparison i++ < 5 will use i = 0 (contrary to ++i < 5).
//But the alert call is separate. It’s another statement which executes after the increment and the comparison. So it gets the current i = 1.
//Then follow 2, 3, 4…
//Let’s stop on i = 4. The prefix form ++i would increment it and use 5 in the comparison. But here we have the postfix form i++. So it increments i to 5, but returns the old value. Hence the comparison is actually while(4 < 5) – true, and the control goes on to alert.
//The value i = 5 is the last one, because on the next step while(5 < 5) is false.

//Which values get shown by the "for" loop?
for (let i = 0; i < 5; i++) console.log(i); //0,1,2,3,4
for (let i = 0; i < 5; ++i) console.log(i); //0,1,2,3,4

//Output even numbers in the loop
for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) console.log('even number:', i);
}

//Replace "for" with "while"
for (let i = 0; i < 3; i++) {
  console.log(`number ${i}!`);
}

let a = 0;
while (a < 3) {
  console.log(`number ${a++}!`);
}

//Repeat until the input is correct

//Output Prime Numbers
//An integer number greater than 1
//it cannot be divided without a remainder by anything except 1 and itself.

let n = 5;
n = Number(n);
for (let i = 2; i <= n; i++) {
  let isPrime = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) console.log(i);
}

let m = 10;
m = Number(m);

for (let a = 2; a <= m; a++) {
  let isPrime = true;
  for (let j = 2; j < a; j++) {
    if (a % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) console.log('angka prima:', a);
}

//Using label continue

let x = 10;
x = Number(x);

nextPrime: for (let i = 2; i <= x; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j === 0) continue nextPrime;
  }
  console.log('prima label:', i);
}
