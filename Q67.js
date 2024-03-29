"use strict";
// Question 67: Arithmetic with mixed types: Write a function that takes two parameters: a number and a string that reperesent a number(e.g., "6". Return their sum as a number.
// This function adds a number and a string that reperesents a number function
function sumofNumandStr(num1, numstr) {
    return num1 + Number(numstr);
}
console.log(sumofNumandStr(10, "34"));
