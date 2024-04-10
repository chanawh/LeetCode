function sumEvenFibonacci(maxValue) {
  function fibonacci(n, a = 0, b = 1, sum = 0) {
      // Base case: If the current exceeds maxValue, return the sum
      if (a > maxValue) {
        return sum;
      }

      // Recursive case: If the current term is even, add it to the sum
      if (a % 2 === 0) {
        sum += a;
      }

      // Recurse with the next term in the sequence
      return fibonacci(n + 1, b, a + b, sum);
  }
  return fibonacci(0)
}

console.log(sumEvenFibonacci(4000000));

// Fibonacci Sequence: F(n) = F(n-1) + F(n-2)
//   Base cases: F(0) = 0, F(1) = 1
// Even Numbers: num % 2 === 0