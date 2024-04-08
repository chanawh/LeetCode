// 1. Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

//  Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]


// - **Understanding the Problem:** We're given an array `nums` of integers and a target integer `target`. The goal is to find two **distinct** indices (`i` and `j`) within the array such that the values at those indices add up to the target.
// - **Efficiency:** Aim for an efficient solution that avoids unnecessary computations. Two common approaches are:
//     - **Brute Force (Naive):** Iterate through all possible pairs of elements in the array, checking if their sum equals the target. This is simple but has a time complexity of O(n^2).
//     - **Hash Table:** Create a hash table (object in JavaScript) to store seen numbers and their indices. For each element, check if the complement (target minus the current element) exists in the hash table. If so, we've found the pair. This approach has an average time complexity of O(n) but requires extra space for the hash table.


function twoSum(nums, target) {
  const seen = {}; // Hash table to store seen numbers and their indices

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]; // Calculate the complement

    if (complement in seen) {  // Check if the complement exists in the hash table
      return [seen[complement], i]; // Return the indices if found
    }

    seen[nums[i]] = i; // Add the current number and its index to the hash table
  }

  return []; // No solution found
}

const exampleNums = [2, 7, 11, 15];
const exampleTarget = 9;
const result = twoSum(exampleNums, exampleTarget);


// **Explanation:**
// 1. **`seen` Object:** We create an empty object `seen` to act as a hash table. It will store numbers we've encountered and their corresponding indices in the array.
// 2. **Iteration:** We loop through `nums` using a `for` loop.
// 3. **Complement Calculation:** For each element `nums[i]`, we calculate its complement, which is the number needed to add up to the target.
// 4. **Hash Table Lookup:** We check if the `complement` exists as a key in the `seen` object.
//     - If it does (`complement in seen`), it means we've already seen the number that would complete the pair. We return an array containing the indices stored in `seen[complement]` (the index of the complement) and `i` (the index of the current number).
// 5. **Hash Table Update:** If we haven't found a match yet (`complement` not in `seen`), we add the current number `nums[i]` as a key and its index `i` as the value to the `seen` object. This way, if we encounter the complement later, we can identify the matching pair.
// 6. **No Solution:** If the loop completes without finding a match, we return an empty array `[]` to indicate that no solution exists.

// **Key Points:**
// - This solution avoids redundant calculations by leveraging the hash table to efficiently look up complements.
// - The time complexity is O(n) on average, as we iterate through the array once to find the pair.
// - Space complexity is O(n) due to the `seen` object, which may store all numbers from the input array in the worst case.

// **Additional Considerations:**
// - If dealing with very large arrays, consider space-efficient data structures like a Set to store seen numbers. However, this might require adapting the logic for complement checking.
// - For specific use cases with certain characteristics (e.g., sorted arrays), explore alternative approaches like two-pointer techniques that might offer better performance depending on the constraints.