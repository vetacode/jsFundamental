console.log(console.log(1) || 2 || console.log(3));
//console.log(1) return 1, then it return undefined when outer console.log calling it return the first next truthy value which is 2, then conosle log 2.
//the 3rd console.log never runs coz the outer console.log has got the returned truthy value (2)

let age = 14;
if (age >= 14 && age <= 90) {
  console.log('you are in!');
} else {
  console.log('Sorry, maybe in the next life chapter');
}
