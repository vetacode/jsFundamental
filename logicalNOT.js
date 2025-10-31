console.log(!true); // false
console.log(!0); // true

//A double NOT !! is sometimes used for converting a value to boolean type:
console.log(!!'non-empty string'); // true
console.log(!!null); // false

//so that is the same as using Boolean():
console.log(Boolean('non-empty string')); // true
console.log(Boolean(null)); // false
