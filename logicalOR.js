let firstName = '';
let lastName = '';
let nickName = 'SuperCoder';
console.log(firstName || lastName || nickName || 'Anonymous'); //Logical OR will return the original value of the variable

//Short-circuit evaluation feature

true || console.log('not printed'); //it will not print coz the truthy value has been returned (short-circuited) in the first evaluation
false || console.log('printed'); //only this result printed
