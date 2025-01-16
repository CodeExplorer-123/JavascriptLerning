// ****************************************************************************************************************

// Topic : create object

// const obj = {
//     name:"Akash Singh",
//     age:25,
//     fun : function(){
//         console.log(`name is ${this.name} and age is ${this.age}`);
//     }
// }

// console.log(obj);
// console.log(obj.age);
// console.log(obj.fun());
// obj.fun();

// *******************************************************************************************************************

// Topic : prototype

// Example : Array is a type of object

// const arr = ["apple", "car", "mango", "tree"];
// console.log(typeof arr);
// console.log(arr);
// //arr.length property is coming from prototype
// console.log(arr.length);

// ***********************************************************************************************************************

// Topic : Adding Prototype

// Example

// const employee = {
//   calTax() {
//     console.log("tax rate is 10%");
//   },
// };

// const akash = {
//   salary: 5000,
//   age:25,
// };

// akash.__proto__ = employee;

// console.log(akash);

// Example : when object and prototype have same method

// const employee = {
//   calTax() {
//     console.log("tax rate is 10%");
//   },
// };

// const akash = {
//   salary: 5000,
//   age: 25,
//   claTax() {
//     console.log("tax rate is 20%");
//   },
// };

// akash.__proto__ = employee;

// console.log(akash.claTax);

// *****************************************************************************************************************************

// Topic : class

// Example
// class Car {
//   start() {
//     console.log("car started");
//   }
//   stop() {
//     console.log("car stoped");
//   }

//   setBrand(brand) {
//     this.brand = brand;
//   }
// }

// const car1 = new Car();
// car1.start();
// car1.stop();
// car1.setBrand("b1");
// console.log(car1);

// ************************************************************************************************************************

// Topic : constructor

// Example

// class Student {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   printDetail() {
//     console.log(`Name is ${this.name} And Age is ${this.age}`);
//   }
// }

// const student1 = new Student("akash", 25);
// student1.printDetail();

// student1.name = "Akash Singh";
// student1.printDetail();

// Topic : Inheritance

// Example

// class Person {
//   eat() {
//     console.log("eat");
//   }
// }

// class Engineer extends Person {
//   work() {
//     console.log("work");
//   }
// }

// const engineer = new Person();
// engineer.eat();

// Topic : super keyword

// Example

// class Person {
//   constructor() {
//     console.log("hello");
//     this.name = "human";
//   }

//   printName() {
//     console.log(this.name);
//   }
//   eat() {
//     console.log("eat");
//   }
// }

// class Engineer extends Person {
//   constructor() {
//     super();
//     console.log("child constructor");
//     super.printName();
//   }
//   work() {
//     console.log("work");
//   }
// }

// const engineer = new Engineer();
// engineer.work();

// ****************************************************************************************************************

// Topic : Error Handling

// Example : try-catch

// let a = 10;
// let b = 20;
// try {
//   console.log(c);
// } catch (e) {
//   console.log(e);
// }
// console.log(a + b);
