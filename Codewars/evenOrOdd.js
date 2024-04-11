// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript

function evenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// Test the function
console.log(evenOrOdd(7)); // Output: "Odd"
console.log(evenOrOdd(8)); // Output: "Even"

// function evenOrOdd(number) {
//   return number % 2 === 0 ? 'Even' : 'Odd';
// }

// 1. **Addition and Subtraction**:
//    - Even ± Even = Even
//    - Odd ± Odd = Even
//    - Even ± Odd = Odd

// 2. **Multiplication**:
//    - Even × Any Number = Even
//    - Odd × Odd = Odd

// 3. **Modulus Operator**:
//    - Even % 2 = 0
//    - Odd % 2 = 1

// 4. **Division**:
//    - Even / 2 = Another integer
//    - Odd / 2 = An integer with a remainder of 1

// 5. **Power**:
//    - Even^Any Number = Even (except for 0^0 which is undefined)
//    - Odd^Any Number = Odd

// 6. **Checking if a number is even or odd**:
//    - A number is even if it's divisible by 2 (i.e., number % 2 == 0)
//    - A number is odd if it's not divisible by 2 (i.e., number % 2 != 0)