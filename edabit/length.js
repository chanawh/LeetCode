// https://edabit.com/challenge/4MSbtYFBiRtxHEkY8
// Recursion: Length of a String


function length(str) {
  if (str == "") {
    return 0;
  } else {
    return 1 + length(str.slice(1));
  }
}

// Examples
console.log(length("apple")); // Output: 5
console.log(length("make"));  // Output: 4
console.log(length("a"));     // Output: 1
console.log(length(""));      // Output: 0