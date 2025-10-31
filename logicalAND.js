let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  console.log('The time is 12:30'); //both conditiion should be True, then return True and the conditiion runs
}

//AND && will returned the first falsy value
console.log(1 && 2 && null && 3); // null

//if all True, will return the last value
console.log(1 && 2 && 3); // 3, the last one

//Precedence: AND && is higher than OR ||

//Don’t replace if with || or &&
let x = 1;
// let x = -1;
x > 0 && console.log('Greater than zero!'); //it will only works if the x > 0
