// https://edabit.com/challenge/z6Pxiw289JtaE2ndL
// Find the Index (Part #2)


function search(arr, item) {
  // Base case: Reached end of array without finding item
  if (arr.length === 0) {
    return -1;
  }

  // Check current element and return index if found
  if (arr[0] === item) {
    return 0;
  }

  // Recursively search remaining elements (slice removes first element)
  let index = search(arr.slice(1), item);

  // If item is not found, return -1
  if (index === -1) {
    return -1;
  }

  // If item is found, add 1 to the index (because we removed the first element)
  return index + 1;
}

// Example
const arr = [1, 2, 3, 4];
const item = 3;
console.log(search(arr, item));