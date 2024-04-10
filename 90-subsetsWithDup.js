// 90. Subsets II
// Given an integer array nums that may contain duplicates, return all possible subsets (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.


// Example 1:
// Input: nums = [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]

// Example 2:
// Input: nums = [0]
// Output: [[],[0]]


/**
 * Finds all unique subsets (power set) of an array containing duplicates.
 *
 * @param {number[]} nums The input array of numbers.
 * @return {number[][]} An array containing all unique subsets.
 */

function subsetsWithDup(nums) {
  const results = [];

  // Sort the array to ensure consistent element order within subsets.
  nums.sort((a, b) => a - b);

  function exploreSubsets(currentSubset, startIndex) {
    // Base case: If all elements are processed, add the current subset.
    if (startIndex === nums.length) {
      results.push([...currentSubset]);
      return;
    }

    // Include the current element (only the first occurrence).
    currentSubset.push(nums[startIndex]);
    exploreSubsets(currentSubset, startIndex + 1);
    currentSubset.pop(); // Remove the element for next iteration.

    // Skip consecutive duplicate elements.
    while (startIndex + 1 < nums.length && nums[startIndex] === nums[startIndex + 1]) {
      startIndex++;
    }

    // Explore possibilities without the current element (including duplicates).
    exploreSubsets(currentSubset, startIndex + 1);
  }

  // Start exploring subsets from an empty set.
  exploreSubsets([], 0);

  return results;
}

console.log(subsetsWithDup([1,2,2])); // [[],[1],[1,2],[1,2,2],[2],[2,2]]


// This code finds all unique subsets, also known as the power set, of an array containing duplicates. 
// A power set of a set is all possible subsets of that set. 
// For example, the power set of the set {1, 2} is {{}, {1}, {2}, {1, 2}}.


// The code works by first sorting the input array. 
// This ensures that the elements in each subset are in a consistent order. 
// Then, it uses a recursive function called `exploreSubsets` to generate all possible subsets. 
// The `exploreSubsets` function takes two arguments: `currentSubset` and `startIndex`. 
// The `currentSubset` is an array that represents the current subset being generated. 
// The `startIndex` is an index that keeps track of the position in the input array where the function should start considering elements for the current subset.


// The `exploreSubsets` function works as follows:
// 1. **Base Case:** If the `startIndex` is equal to the length of the input array, it means that all elements have been considered for the current subset. In this case, the function adds the `currentSubset` to the results array and returns.
// 2. **Include the current element:** The function adds the element at the `startIndex` to the `currentSubset`. Then, it calls itself recursively with an incremented `startIndex` to explore all possible subsets that include the current element. After the recursive call returns, the function removes the element from the `currentSubset` using `currentSubset.pop()` so that it can be used in other subsets.
// 3. **Skip consecutive duplicates:** The function checks if the element at the `startIndex` is the same as the element at the next index. If they are the same, it means that we are encountering consecutive duplicates. The function skips these duplicates by incrementing the `startIndex` until it finds a unique element.
// 4. **Explore possibilities without the current element:** The function calls itself recursively with an incremented `startIndex` to explore all possible subsets that do not include the current element. This allows the function to generate subsets that contain only the unique elements of the input array.
