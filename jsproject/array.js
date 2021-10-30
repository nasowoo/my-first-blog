'use strict';

//Array 

//1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

//2. Index position
const fruits = ['🍎','🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[fruits.length -1]);


//3. Looping - print all fruits
//a. for
for (let i = 0; i < fruits.length; i++)
console.log(fruits[i]);
//b. for of
for(let fruit of fruits) {
  console.log(fruit);
}
//c. forEach
fruits.forEach((fruit) => console.log(fruit));

//4. Add, del, copy
//a. push (add to the end)
fruits.push('🍕', '🍔');
console.log(fruits);
//pop (del from the end)
fruits.pop();
console.log(fruits);
//unshift (add to the beginning)
fruits.unshift('🍟');
console.log(fruits);
//shift (del from the beginning)
fruits.shift();
console.log(fruits);
//note! shift, unshift are slower than pop, push -> 배열이 길면 길수록 pop, push를 권장!
//splice: remove(and add) an item by index position
fruits.push('🥩');
console.log(fruits);
fruits.splice(1, 1, '🍙');
console.log(fruits);

//combine two arrays
const fruits2 = ['🥗'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//5. Seraching
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍙'));
console.log(fruits.includes('🍖'));
console.log(fruits.lastIndexOf('🍎'));

