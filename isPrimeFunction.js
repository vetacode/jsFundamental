let x = 10;
x = Number(x);

nextPrime: for (let i = 2; i <= x; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j === 0) continue nextPrime;
  }
  console.log('prima label:', i);
}

//above code can be refactored into 2 function

function isPrime(num) {
  for (let j = 2; j < num; j++) {
    if (num % j === 0) return false;
  }
  return true;
}

let y = 15;
y = Number(y);

function printPrimes(upTo) {
  for (let i = 2; i <= upTo; i++) {
    if (isPrime(i)) console.log('angka prima function:', i);
  }
}

printPrimes(y);
