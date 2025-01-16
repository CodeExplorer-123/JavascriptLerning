//**********************************************************************************************************

//Topic : Synchronous Code

//example :

// console.log("one");
// console.log("two");
// console.log("three");

//****************************************************************************************************************

//Topic : setTimeout() function

// console.log("Step 1: Start");

// setTimeout(() => {
//   console.log("Step 2: This message is delayed by 2 seconds");
// }, 2000);  // 2000 milliseconds = 2 seconds

// console.log("Step 3: End");

//****************************************************************************************************************

//Topic : Callback function

//example

// function sum(a,b){
//     console.log(a+b);
// }

// function calcualtor(a,b,sumCallback){
//     sumCallback(a,b);
// }

// calcualtor(10,20,sum);

//example

// function claculator(a,b,sumCallback){
//     sumCallback(a,b);
// }

// claculator(50,100,(a,b)=>{
//     console.log(a+b);
// })

//****************************************************************************************************************

// Topic : Synchronous Callback

//example

// function greet(name, callback) {
//     console.log("Hello " + name);

//     callback();
//   }

//   function goodbye() {
//     console.log("Goodbye!");
//   }

// greet("Akash", goodbye);

//****************************************************************************************************************

// Topic : Asynchronous Callback

//example

// function printName(name){
//     console.log("Hello Mr"+" "+name);
// }

// function processName(callback){
//     console.log("Start");
//     setTimeout(()=>{
//         callback("Akash Singh");
//     },4000);
//     console.log("End")
// }

// processName(printName);

//****************************************************************************************************************

// Callback hell

//example

// function getName(id, callback) {
//     setTimeout(() => {
//       const name = "Akash Singh";
//       callback(name);
//     });
//   }

//   function getEmpId(name, callback) {
//     setTimeout(() => {
//       const empId = 1138;
//       callback(empId);
//     });
//   }

//   function getAddress(empId, callback) {
//     setTimeout(() => {
//       const city = "Banaras";
//       callback(city);
//     });
//   }

//   getName(1, (name) => {
//     console.log(name);
//     getEmpId(name, (empId) => {
//       console.log(empId);
//       getAddress(empId, (city) => {
//         console.log(city);
//       });
//     });
//   });

//****************************************************************************************************************

// Topic : Promise

// Example

// function getName(id) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (id > 0) {
//           const name = "Akash Singh";
//           resolve(name);
//         } else {
//           reject("Id cannot be negative");
//         }
//       }, 2000);
//     });
//   }

//   function getEmployeeId(name) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const empId = 1138;
//         resolve(empId);
//       }, 2000);
//     });
//   }

//   function getAddress(empId) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const city = "Banaras";
//         resolve(city);
//       }, 2000);
//     });
//   }

//   getName(1)
//     .then((name) => {
//       console.log(name);
//       return getEmployeeId(name);
//     })
//     .then((empId) => {
//       console.log(empId);
//       return getAddress(empId);
//     })
//     .then((address) => {
//       console.log(address);
//     })
//     .catch((error) => {
//       console.log(error);
//     });

// *********************************************************************************************************************

// Topic : async await

// Example

// function getName(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (id > 0) {
//         const name = "Akash Singh";
//         resolve(name);
//       } else {
//         reject("Id cannot be negative");
//       }
//     }, 2000);
//   });
// }

// function getEmployeeId(name) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const empId = 1138;
//       resolve(empId);
//     }, 2000);
//   });
// }

// function getAddress(empId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const city = "Banaras";
//       resolve(city);
//     }, 2000);
//   });
// }

// async function fetchEmployeeDetails(id){
//   try{
//     const name = await getName(id);
//     console.log(name);

//     const empId = await getEmployeeId(name);
//     console.log(empId);

//     const city = await getAddress(empId);
//     console.log(city);
//   }catch(error){
//     console.log(error);
//   }
// }

// fetchEmployeeDetails(1);
