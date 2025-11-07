//Basic syntax of for loop:
// for (begin; condition; step) {
//   // ... loop body ...
// }

for (let i = 0; i < 3; i++) {
  console.log(i);
}

//the algorithm steps:
// Run begin
// → (if condition → run body and run step) //0
// → (if condition → run body and run step) //1
// → (if condition → run body and run step) //2
// → false condition (i == 3) -> stop iterating

//Bentuk lain supaya variable bisa diakses diluar
let i = 0;
for (i = 0; i < 3; i++) {
  // use an existing variable
  console.log(i); // 0, 1, 2
}
console.log(i); // 3, visible, because declared outside of the loop

//bentuk lebih simplenya:
let p = 0;
for (; p < 3; p++) console.log('nilai p:', p);

//juga bisa remove bagian step:
let q = 0;
for (; q < 3; ) console.log('bilai q:', q++);

//bisa juga hilangkan semua bagian (begin;condition;step)
let z = 0;
// for (;;) console.log('nilai z;', z); //akan membuat infinite loops

for (let i = 0; i <= 5; i++) {
  console.log(i);
}
