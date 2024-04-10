function sumOfMultiples(number, sum = 0) {
  // Base case: if number is less than 0, return the accumulated sum
  if (number < 0) {
    return sum;
  }
  // Check if number is divisible by 3 or 5, add it to the sum
  if (number % 3 === 0 || number % 5 === 0) {
    sum += number;
  }
  // Recursively call the function with the next number (number - 1)
  return sumOfMultiples(number - 1, sum);
}

const limit = 1000;
const result = sumOfMultiples(limit - 1); // Adjust for 0-based indexing
console.log("The sum of multiples of 3 or 5 below", limit, "is:", result);


function sumOfMultiples(n) {
  if (n <= 0) {
      return 0;
  } else {
      n = n - 1;
      return (n % 3 === 0 || n % 5 === 0) ? n + sumOfMultiples(n) : sumOfMultiples(n);
  }
}

// Test the function
console.log(sumOfMultiples(10)); // Output: 23
console.log(sumOfMultiples(1000));
