function checkAge(age) {
  if (age >= 14 && age <= 90) {
    return true;
  }
  return false; //no need for else statement
}

console.log(checkAge(13)); //false
console.log(checkAge(14)); //true
console.log(checkAge(50)); //true
console.log(checkAge(91)); //false
