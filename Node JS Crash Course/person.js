// const person = {
//   name: "Shimul Mahmud",
//   age: 22,
//   dept: "CSE",
// };

// class
// console.log(__dirname, __filename);
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  welcome() {
    console.log(`My name is ${this.name} and i am ${this.age} `);
  }
}

module.exports = Person;
