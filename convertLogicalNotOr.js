//convert to logical NOT and OR
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return console.log('Did parents allow you?');
//   }
// }

function checkAge(age) {
  return age > 18 ? true : console.log('Did parents allow you?');
}

function checkAge(age) {
  return age > 18 || 'Did parents allow you?';
}
console.log(checkAge(20)); //true
console.log(checkAge(15)); //Did parents allow you?
