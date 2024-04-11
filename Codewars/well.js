// https://www.codewars.com/kata/57f222ce69e09c3630000212/solutions/javascript

function well(x) {
    let goodCount = 0;

    for (let i = 0; i < x.length; i++) {
      if (x[i] === 'good') {
        goodCount++;
      }
    }

    if (goodCount === 0) {
        return 'Fail!';
    } else if (goodCount <= 2) {
        return 'Publish!';
    } else {
        return 'I smell a series!';
    }
}

// Array.prototype.filter(): This function creates a new array with all elements that pass the test implemented by the provided function. It can be used to filter out ‘good’ or ‘bad’ ideas from the array.
// Array.prototype.length: This property returns the number of elements in an array. It can be used to count the number of ‘good’ ideas in the array.
// Array.prototype.includes(): This function determines whether an array includes a certain value among its entries, returning true or false as appropriate. It can be used to check if ‘good’ or ‘bad’ ideas are present in the array.

// Array Iteration: You need to iterate over an array to check each element. This is a fundamental concept in JavaScript and most other programming languages.
// Conditional Statements: The use of if, else if, and else statements to perform different actions based on different conditions is a key concept in JavaScript.
// Equality Comparison: The === operator is used to compare values for equality in JavaScript. Understanding how it works is crucial.
// Counting Occurrences: This problem involves counting the number of occurrences of a particular value (‘good’) in an array. This is a common task in many programming problems.
// Return Statement: The return statement ends function execution and specifies a value to be returned to the function caller. Understanding when and how to use return is important.
// Function Creation: This problem involves creating a function (well(x)) that takes an array as an argument. Understanding how to define functions and how they work is a fundamental part of JavaScript programming.
// Variable Declaration and Assignment: The problem involves declaring a variable (goodCount) and assigning it a value. This is a basic concept in JavaScript.


// const well = x => {
//   const good_count = x.filter(x => x === 'good').length;
//   return good_count < 1 ? 'Fail!' : 
//          good_count < 3 ? 'Publish!' : 'I smell a series!';
// }

// Conciseness: This version of the function is more concise due to the use of arrow functions and the ternary operator.
// Use of Array.prototype.filter(): The filter() method is used to create a new array with all elements that pass the test implemented by the provided function. In this case, it’s used to create an array of ‘good’ ideas, and the length property of this array is used to count the number of ‘good’ ideas.
// Use of Ternary Operator: The ternary operator (condition ? exprIfTrue : exprIfFalse) is used to make the code more compact. It checks the conditions and returns the appropriate string based on the number of ‘good’ ideas.
// Single Pass: This code only needs to pass through the array once to count the ‘good’ ideas, making it more efficient.
// Functional Programming: This code is written in a functional programming style, which can lead to cleaner, more readable code.

// The `Array.prototype.filter()` method in JavaScript creates a new array with all elements that pass the test implemented by the provided function. Here is the syntax:
// array.filter(callbackFn[, thisArg])

// **Parameters:**
// - `callbackFn`: A function to execute for each element in the array. It should return a truthy value to keep the element in the resulting array, and a falsy value otherwise. The function is called with the following arguments:
//     - `element`: The current element being processed in the array.
//     - `index`: The index of the current element being processed in the array.
//     - `array`: The array filter() was called upon.
// - `thisArg` (Optional): A value to use as `this` when executing `callbackFn`.

// **Return value:**
// A shallow copy of the given array containing just the elements that pass the test. If no elements pass the test, an empty array is returned¹.

// **Example 1: Filtering out all small values**
// function isBigEnough(value) {
//     return value >= 10;
// }
// const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// // filtered is [12, 130, 44]

// **Example 2: Find all prime numbers in an array**
// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// function isPrime(num) {
//     for (let i = 2; num > i; i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return num > 1;
// }
// console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]

// **Example 3: Filtering invalid entries from JSON**
// const arr = [
//     { id: 15 },
//     { id: -1 },
//     { id: 0 },
//     { id: 3 },
//     { id: 12.2 },
//     {},
//     { id: null },
//     { id: NaN },
//     { id: "undefined" },
// ];
// let invalidEntries = 0;
// function filterByID(item) {
//     if (Number.isFinite(item.id) && item.id !== 0) {
//         return true;
//     }
//     invalidEntries++;
//     return false;
// }
// const arrByID = arr.filter(filterByID);
// console.log("Filtered Array\n", arrByID); // Filtered Array // [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]
// console.log("Number of Invalid Entries =", invalidEntries); // Number of Invalid Entries = 5