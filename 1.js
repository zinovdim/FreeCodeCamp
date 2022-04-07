//console.log ("hello, World!");

/*let text = "фрилансер"
  console.log(text.includes("лан", 4));*/


// let camper = "James";
// let camper = "David";
// console.log(camper);

// function multiplies (a,b) {
// console.log(a*b);
// }
// multiplies (5,4);

// const str = "Я первая строка\n" + "А я вторая строка\n" + "Ну и так далее";
// console.log(str);
// const myStr = "This is the start. " + "This is the end.example"; 

// console.log(myStr);
// // Declare the myGlobal variable below this line
// const myGlobal = 10;
// oopsGlobal = 5;

// function fun1(myGlobal) {
//   // Assign 5 to oopsGlobal Here
// var output = "";
// }

// // Only change code above this line

// function fun2() {
//   var output = "";
//   if (typeof myGlobal != "undefined") {
//     output += "myGlobal: " + myGlobal;
//   }
//   if (typeof oopsGlobal != "undefined") {
//     output += " oopsGlobal: " + oopsGlobal;
//   }
//   console.log(output);
// }
// fun1();
// fun2();

// function myTest() {
//   const loc = "foo";
//   console.log(loc);
// }

// myTest();
// console.log(loc);

// function some_test(a, b, c) { // Функция с 3 параметрами
//     return a + b + c; // Функция возвращает результат суммы чисел
// }

// var res = some_test(4, 6, 1);

// console.log(res);

// let sum = 0;

// function addSum(num) {
//   sum = sum + num;
// }

// addSum(3);

// let sum = 0;

// function addThree() {
//   sum = sum + 3;
// }

// // Only change code below this line
// addThree(2);

// // Setup
// let processed = 0;

// function processArg(num) {
//   return (num + 3) / 5;
// }

// // Only change code below this line
// processed = processArg(7);

// function sumAll(...args) { // args — имя массива
//   let sum = 0;

//   for (let arg of args) sum += arg;

//   return sum;
// }

// alert( sumAll(1) ); // 1
// alert( sumAll(1, 2) ); // 3
// alert( sumAll(1, 2, 3) ); // 6

// function showName(firstName, lastName, ...titles) {
//   alert( firstName + ' ' + lastName); // Юлий Цезарь

//   // Оставшиеся параметры пойдут в массив
//   // titles = ["Консул", "Император"]
//   alert( titles[0] ); // Консул
//   alert( titles[1] ); // Император
//   alert( titles.length ); // 2
// }

// showName("Юлий", "Цезарь", "Консул", "Император")

//  let arr1 = [1,2,3,4,8];
//  let arr2 = [5,6,7,8];

// function mergeArrays(arr1, arr2) {
//   let sorted = [...new Set(arr1.concat(arr2))].sort((a, b) => a - b);
//  //return sorted;
//  console.log(sorted);
//  }
//  mergeArrays(arr1, arr2);



// function multy (a,b) {
// return(a*b);
// }
// //console.log(multy);
// multy(5,10);
// console.log(multy);

let mult = (a,b) => a*b;
mult(5,4);
console.log(mult(5,4));

const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words);


// const prices = [array];
// let new_prices = array.map(x => x * 2);
// prices = [1,2,3,4];
// console.log(new_prices);

const x = [1, 2, 3, 4, 5, 6];
 
function maps(x) {
  const newMaps = x.map(a => a * 2);
 
  console.log(newMaps);
 // return newMaps
 }
  maps(x);

// let arr1 = [1,2,3,4,5,6];
// function prices(arr1) {
//   let new_prices = arr1.map(a => a * 2);
 
//   console.log(new_prices);
// }
// prices(arr1);

// const prices = [1, 5, 10, 20];
// let new_prices = [];
// for(let x=0; x < prices.length; x++) {
//    new_prices.push(prices[x] * 2);
// }
// console.log(new_prices);

function testStrict(val) {
  if (val===7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
  // console.log(testStrict);
}
// console.log(value);
testStrict(10);



