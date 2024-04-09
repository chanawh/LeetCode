// 6. Zigzag Conversion
// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"
// Write the code that will take a string and make this conversion given a number of rows:
// string convert(string s, int numRows);
 

// Example 1:
// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"

// Example 2:
// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I

// Example 3:
// Input: s = "A", numRows = 1
// Output: "A"


// **Problem:** Convert a string into a zigzag pattern across a specified number of rows.
// **Solutions:**
// - **Simulate Row-by-Row Traversal:** Simple, but might be less efficient for large strings.
// - **Build Zigzag Pattern Directly:** More efficient with correct formula, but less intuitive.
// - **Sort the Rows:** Leverages sorting for simplicity, but might have overhead.
// - **Use Queue for Zigzag Traversal:** Clean structure, but potential overhead from queue operations.

// **Time Complexity:** Generally O(n) for all approaches.
// **Space Complexity:** Varies with approach (consider string length and space constraints).

// **Factors for Approach Selection:** Efficiency, readability, maintainability.
// **Additional Considerations:** Handle edge cases, address potential bottlenecks, test for correctness and robustness.


// Function to convert a string into a zigzag pattern based on the number of rows
function convert(s, numRows) {
  // Handle base cases: single row or short string
  if (numRows === 1 || s.length <= numRows) {
    return s; // No conversion needed
  }

  // Initialize variables for rows, current row, and direction
  const rows = []; // Array to store characters in zigzag rows
  let currentRow = 0; // Index of the current row being filled
  let goingDown = false; // Flag to track filling direction (initially top-down)

  // Loop through each character in the string
  for (let i = 0; i < s.length; i++) {
    // Check if current row needs to be created
    if (!rows[currentRow]) {
      rows[currentRow] = []; // Create an empty array for the current row
    }

    // Add character to the current row
    rows[currentRow].push(s[i]);

    // Change direction at the top or bottom row
    if (currentRow === 0 || currentRow === numRows - 1) {
      goingDown = !goingDown; // Flip direction when reaching an edge
    }

    // Move to the next row based on the direction
    currentRow += goingDown ? 1 : -1;
  }

  // Combine rows and return the final zigzag string
  return rows.flat().join('');
}


s = "PAYPALISHIRING";
numRows = 3;
convert(s, numRows); // "PAHNAPLSIIGYIR"
