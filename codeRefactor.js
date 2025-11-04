// here we add whiskey
for (let i = 0; i < 10; i++) {
  let drop = getWhiskey();
  smell(drop);
  add(drop, glass);
}

// here we add juice
for (let t = 0; t < 3; t++) {
  let tomato = getTomato();
  examine(tomato);
  let juice = press(tomato);
  add(juice, glass);
}

// ...

//The code should easy to read and dunction should tell themeselves what's going on. Refactored code:
addWhiskey(glass);
addJuice(glass);

function addWhiskey(container) {
  for (let i = 0; i < 10; i++) {
    let drop = getWhiskey();
    //...
  }
}

function addJuice(container) {
  for (let t = 0; t < 3; t++) {
    let tomato = getTomato();
    //...
  }
}

//Good comments:
/*
 eturns x raised to the n-th power.

 @param {number} x The number to raise.
 @param {number} n The power, must be a natural number.
  @return {number} x raised to the n-th power.
 */
function pow(x, n) {
  // ...
}

/*
Comment this:
Overall architecture, high-level view.
Function usage.
Important solutions, especially when not immediately obvious.

Avoid comments:
That tell “how code works” and “what it does”.
Put them in only if it’s impossible to make the code so simple and self-descriptive that it doesn’t require them.
*/
