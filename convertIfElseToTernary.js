let result;
let a = 2;
let b = 3;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}
console.log(result);

let result2 = a + b < 4 ? 'Below' : 'Over';
console.log('Result2:', result2);
