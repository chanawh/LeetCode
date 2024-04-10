function largestPrimeFactor(n, factor = 2) {
  if (n === 1) {
    return factor;
  }
  if (n % factor === 0) {
    return largestPrimeFactor(n / factor, factor);
  } else {
    return largestPrimeFactor(n, factor + 1);
  }
}

console.log(largestPrimeFactor(600851475143)); // 6857

// 1. **Prime Number Check**: A number is prime if it has exactly two distinct positive divisors: 1 and itself. To check if a number `n` is prime, you can iterate from `2` to `sqrt(n)` and check if `n` is divisible by any number in this range. If it is, then `n` is not a prime number.
// 2. **Factorization**: The prime factorization of a number `n` can be obtained by dividing `n` by the smallest prime number (i.e., 2) and continue dividing the quotient by the next prime numbers until the quotient is a prime number. The last prime number will be the largest prime factor.
// 3. **Square Root**: The square root of a number `n` can be calculated using the `Math.sqrt(n)` function in JavaScript. This is useful for optimization when checking for prime numbers or factors.
// 4. **Recursion**: In recursion, a function calls itself until a base condition is met. In the context of finding the largest prime factor, the base case can be when the number itself is a prime number.

// This function starts with the smallest prime number `2` as the factor. 
// It checks if `n` is divisible by `factor`. If it is, it recursively calls itself with `n / factor` and the same `factor`. 
// If not, it increments the `factor` by `1` and recursively calls itself with the same `n` and the incremented `factor`. 
// The recursion stops when `n` becomes `1`, at which point it returns the `factor`, which is the largest prime factor of the original number.