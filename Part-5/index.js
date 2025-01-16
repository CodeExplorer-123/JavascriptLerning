// *******************************************************************************************************

// Topic : Function

// Example

// function sum(a,b){
//     let c = a+b;
//     return c;
// }

// let ans = sum(10,20);
// console.log(ans);

// Example

// const sum = (a,b)=>{
//     return a+b;
// }

// const ans = sum(45,100);
// console.log(ans);

// ***********************************************************************************************************

// Topic : Arrow Function

// Example

// const sum = (a,b) => a+b;
// console.log(sum(40,60));

// Example

// const sum = (a,b) => {
//     return a+b;
// }

// console.log(sum(40,60));

// **************************************************************************************************************

// Topic : forEach

// Example

// const numbers = [1,2,3,4,5,6];

// numbers.forEach((num)=>{
//     console.log(num);
// })

// Example

// const numbers = [1, 2, 3, 4, 5, 6];

// numbers.forEach(function sum(num) {
//   console.log(num);
// });

// Example

// const numbers = [1, 2, 3, 4, 5, 6];

// numbers.forEach((num, index) => {
//   console.log(num, index);
// });

// Example

// const numbers = [1, 2, 3, 4, 5, 6];

// numbers.forEach((num, index, args) => {
//   console.log(num, index, args);
// });

// *****************************************************************************************************************

// Topic : map() function

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const squaredNumber = numbers.map((val) => {
//   return val * val;
// });

// console.log(squaredNumber);

// **********************************************************************************************************************

// Topic : filter() function

// Example

// const number = [1,2,3,4,5,6,7,8,9,10];

// const evenNumber = number.filter((num)=>num%2==0)

// console.log(evenNumber);

// Example

// const number = [1,2,3,4,5,6,7,8,9,10];

// const evenNumber = number.filter((num)=>{
//     return num%2==0;
// })

// console.log(evenNumber);

// Example

// const arr = [1,2,3,4,5,6,7,8,9,10,11,12];

// const result = arr.filter((num)=>{
//     return num>3;
// })

// console.log(result);

// *********t********************************************************************************************************************

// Topic : Reduce

// Example : sum of array

// const arr = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
// const res = arr.reduce((accumulator, currentvale) => {
//   return accumulator + currentvale;
// });
// console.log(res);


// Example : largest element in array

// const arr = [5,10,11.5,-15,-20];
// const largestElement = arr.reduce((accumulator,currrentValue)=>{
//     return currrentValue>accumulator?currrentValue:accumulator;
// })
// console.log(largestElement);

