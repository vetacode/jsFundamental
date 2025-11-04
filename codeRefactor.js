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

//The code should easy to read and indicate the meaning. Refactored code:
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
