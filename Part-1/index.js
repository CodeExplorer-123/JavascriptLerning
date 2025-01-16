// *******************************************************************************************************************

// Topic : let

// Example

// let name = "akash";
// {
//     console.log(name);
// }

// Example : Block Scope

// {
//   let name = "akash";
//   console.log(name);
// }

// Example : Ressignment

// let x = 10;
// x=11;
// console.log(x);

// Example : Redeclaration (No)

// let x = 10;
// let x = 11;

// *******************************************************************************************************************

// Topic : const

// Example : Block Scope

// {
//   const name = "akash";
//   console.log(name);
// }

// Example : Ressignment (No)

// const x = 10;
// x = 11;

// Example : Redeclaration (No)

// const x = 10;
// const x = 11;

// *******************************************************************************************************************

// Topic : var

// Example : Function Scope

// {
//   var x = 10;
// }

// console.log(x);

// Example : Ressignment

// var x = 10;
// x = 15;
// console.log(x);

// Example : Redeclaration

// var x = 10;
// var x = 15;

// console.log(x);

// *************************************************************************************************************************

// Topic : Hoisting

// Example : variable Hoisting

// console.log(x);
// var x = 100;
// console.log(x);

// Here, var x is hoisted to the top, so x exists but is initially undefined until it’s assigned the value 100.

// Example : function Hoisting

// console.log(substract(10,20));

// function substract(a,b){
//     return b-a;
// }




