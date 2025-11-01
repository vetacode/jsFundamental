let i = 0;

while (i < 3) {
  console.log('iterasi pre++:', i);
  i++;
  console.log('iterasi post++', i);
}

//the condition is evaluated and converted to a boolean by 'while', therefore 0 is a falsy:
let x = 3;
while (x) console.log(x--); //single line no need {}

//do..while //The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.
let p = 0;
do {
  console.log('nilai p:', p++);
} while (p < 3);
//do..while only used when we need the body of the loop to execute at least once regardless of the condition being truthy. Usually, the other form is preferred: while(…) {…}.

//while – The condition is checked before each iteration.
//do..while – The condition is checked after each iteration.
//for (;;) – The condition is checked before each iteration, additional settings available.
