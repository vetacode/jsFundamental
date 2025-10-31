console.log(null == undefined);
console.log(null === undefined);

//For maths and other comparisons < > <= >=
//null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN.

console.log(null > 0); // (1) false
console.log(null == 0); // (2) false
console.log(null >= 0); // (3) true

//equality check == and comparisons > < >= <= work differently. Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false.

//On the other hand, the equality check == for undefined and null is defined such that, without any conversions, they equal each other and don’t equal anything else. That’s why (2) null == 0 is false.

console.log('undefined 1:', undefined > 0); // false (1)
console.log('undefined 2:', undefined < 0); // false (2)
console.log('undefined 3:', undefined == 0); // false (3)
