class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age; 
  }

  speak() {
    console.log(`${this.name}: hello!`)
  }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();


class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get age() {
    return this._age;
    }
  set age(value) {
    this._age = value < 0 ? 0 : value;
  }
  speak() {
    console.log(`hello, my name is ${this.firstName} ${this.lastName}`);
  }
}

const me = new User('woobeen', 'kang', 28);
console.log(me.firstName);
console.log(me.lastName);
console.log(me.age);
me.speak();

class goodUser extends User{
  //필요한 함수를 override 할 수 있음
  speak() {
    super.speak();
    console.log(`Hey, you are such a good person, ${this.firstName} ${this.lastName}`);
  }
}

const you = new goodUser('goobeen', 'gang', 99);
you.speak();