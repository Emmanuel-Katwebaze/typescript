"use strict";
function add(a, b, c) {
    return c ? a + b + c : a + b;
}
console.log(add(2, 3, 5));
const sub = (num1, num2, num3 = 10) => num1 - num2 - num3; // has required parameter
console.log(sub(2, 3));
console.log(sub(2, 3, 5));
const mult = function (num1, num2) {
    return num1 * num2;
};
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let numbers = [1, 2, 3, 4, 5];
console.log(add2(2, 3, ...numbers));
// can also use console.log(add2(2, 3, 5, 6, 7)); where 2 and 3 refer to num1 and num2 and 5,6,7 refer to an array of numbers
// Generic
function getItems(items) {
    return new Array().concat(items);
}
let concatResult = getItems([1, 2, 3, 4, 5]);
// can also use inference let concatResult = getItems([1, 2, 3, 4, 5]);
let concatString = getItems(["a", "b", "c", "d"]);
