let message;
// let login = 'Director';
let login = '';
// let login = 'user';

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}
console.log(message);

let message2 =
  login == 'Employee'
    ? 'Hello'
    : login == 'Director'
    ? 'Greetings'
    : login == ''
    ? 'No Login'
    : '';

console.log(message2);
