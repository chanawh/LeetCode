// 3. Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


function lengthOfLongestSubstring(s) {
  // Initialize `longest` to 0 (to store the maximum length), `windowStart` to 0 (to keep track of the window's left edge), and `charSet` as a Set (to store unique characters within the window).
  let longest = 0;
  let windowStart = 0;
  let charSet = new Set();

  // Iterate through the string (`s`) using a for loop.
  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i]; // Inside the loop, we get the current character (`currentChar`).

    // Use a `while` loop to check if `currentChar` already exists in the `charSet`. If it does, it means a repetition is found within the window.
    // Inside the `while` loop, we remove the leftmost character (`s[windowStart]`) from both the `charSet` and increment `windowStart` to shrink the window from the left.
    while (charSet.has(currentChar)) {
      charSet.delete(s[windowStart]);
      windowStart++; 
    }

    charSet.add(currentChar); // After handling repetitions, we add the `currentChar` to the `charSet`.

    longest = Math.max(longest, charSet.size); // Update `longest` if the current window size (`charSet.size`) is greater than the current longest.
  }

    return longest; // After iterating through the entire string, we return the value of `longest`, which represents the length of the longest substring without repeating characters.
}


// 1. **Break it down:** We need to find the longest substring (a continuous sequence of characters) where all characters are unique (no repetitions).
// 2. **Identify patterns:** We can use a "sliding window" technique. Imagine a window that slides across the string, keeping track of the characters within that window. As we slide, we need to ensure there are no repeating characters inside the window.
// 3. **Track and Update:** We need to track two things: the current window's length and the longest substring length seen so far.


// 1. We initialize `longest` to 0 (to store the maximum length), `windowStart` to 0 (to keep track of the window's left edge), and `charSet` as a Set (to store unique characters within the window).
// 2. We iterate through the string (`s`) using a for loop.
// 3. Inside the loop, we get the current character (`currentChar`).
// 4. We use a `while` loop to check if `currentChar` already exists in the `charSet`. If it does, it means a repetition is found within the window.
// 5. Inside the `while` loop, we remove the leftmost character (`s[windowStart]`) from both the `charSet` and increment `windowStart` to shrink the window from the left.
// 6. After handling repetitions, we add the `currentChar` to the `charSet`.
// 7. We update `longest` if the current window size (`charSet.size`) is greater than the current longest.
// 8. Finally, after iterating through the entire string, we return the value of `longest`, which represents the length of the longest substring without repeating characters.


// This approach utilizes the "sliding window" technique with a Set to efficiently track unique characters within the window, resulting in a time complexity of O(n) and space complexity of O(k), where n is the string length and k is the number of unique characters in the string.
