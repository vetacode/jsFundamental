//Mencari bilangan ganjil
let i = 0;
for (; i < 10; i++) {
  if (i % 2 == 0) continue;
  console.log(i); //1,3,5,7,9
}

//itu adalah bentuk simple dari:

for (let a = 0; a < 10; a++) {
  if (a % 2) {
    console.log(a);
  }
}
