//1. Stirng concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

let counter = 2;
const preIncrement = ++counter;
//counter = counter + 1;
//preIncrement = counter; 와 동일한 의미!
//preDecrement도 동일!

console.log(`${preIncrement}, ${counter}`);

//||와 $$는 무거운 것(heavy한 operation)들은 맨 뒤에!
//!는 True > False or False  > True

// Equality '==', '==='(strict- 권장)
//why? '5'와 5를 같은 것으로 인식하기 때문!

//if, switch(- case 여러개)

for (let i = 0; i < 11; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(`${i}`);
}

for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(`${i}`);
}


//function calculate(command, a, b)
//command: add, substract, divaide, mltiply, rmainder

function calculate(command, a, b) {
  switch (command) {
    case 'add':
      return a + b;
    case 'substract':
      return a - b;
    case 'divide':
      return a / b;
    case 'multiply':
      return a * b;
    case 'remainder':
      return a % b;
    default:
      throw Error('unknown command')
  }
}
console.log(calculate('good', a, b));
