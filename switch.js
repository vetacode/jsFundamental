'use strict';

let day = 'Sunday';
switch (day) {
  case 'Sunday':
    console.log('Yeay it is  Holiday');
    break;
  case 'Monday':
    console.log('Work Work Work!');
    break;
  default:
    console.log(`You have to visit calendar NOW!`);
}

// The values must be of the same type to match
let arg = '1';
switch (arg) {
  case '0':
  case '1':
    console.log('One or zero');
    break;

  case '2':
    console.log('Two');
    break;

  case 3:
    console.log('Never executes!');
    break;
  default:
    console.log('An unknown value');
}

let browser = 'Chrome';
switch (browser) {
  case 'Edge':
    console.log("You've got the Edge!");
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    console.log('Okay we support these browsers too');
    break;

  default:
    console.log('We hope that this page looks ok!');
}

if (browser === 'Edge') {
  console.log("You've got the Edge!");
} else if (
  browser === 'Chrome' ||
  browser === 'Firefox' ||
  browser === 'Safari' ||
  browser === 'Opera'
) {
  console.log('Okay we support these browsers too');
} else console.log('We hope that this page looks ok!');

//convert to switch!
let a = 2;

// if (a == 0) {
//   alert(0);
// }
// if (a == 1) {
//   alert(1);
// }

// if (a == 2 || a == 3) {
//   alert('2,3');
// }

switch (a) {
  case 0:
    console.log(0);
    break;
  case 1:
    console.log(1);
    break;
  case 2:
  case 3:
    console.log('2 or 3');
    break;
}
