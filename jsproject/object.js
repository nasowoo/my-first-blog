//Objects
//object = { key : value };

const obj1 = {}; //object literal;
const obj2 = new Object(); //'object constructor'


//computed properties
//key should be always stirng
//runtime에서 결정될 때 사용 .을 쓰는게 맞음

const person1 = { name : 'woobeen', age : 20 };
console.log(person1['age']);
console.log(person1.age);
person1['birthDate'] = true;
console.log(person1.birthDate);
