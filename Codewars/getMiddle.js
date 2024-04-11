// https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript

function getMiddle(s)
{
  if (s.length % 2 === 0) {
    return (s[(s.length / 2) - 1] + (s[s.length / 2]));
  } else {
    return s[Math.floor(s.length / 2)];
  }
}

// 1. **String Length**: You can get the length of a string in JavaScript using the `.length` property. For example, `"hello".length` would return `5`.
// 2. **Check if Length is Even or Odd**: You can check if a number is even or odd by using the modulus operator (`%`). If a number `n` is even, `n % 2` will be `0`. If `n` is odd, `n % 2` will be `1`.
// 3. **Access String Characters**: You can access individual characters in a string using bracket notation, similar to how you would access elements in an array. For example, `"hello"[1]` would return `"e"`.
// 4. **Calculate Middle Index**: If the length of the string is odd, the middle index will be `length / 2` (rounded down). If the length is even, there will be two middle characters at indices `length / 2 - 1` and `length / 2`.
// 5. **Return Middle Character(s)**: Use the calculated index to return the middle character(s) of the string. If the length is odd, return the single middle character. If the length is even, return the two middle characters.


// function getMiddle(s)
// {
//   return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
// }


// function getMiddle(s) {
//   let middleIndex = Math.floor(s.length / 2);
//   return s.length % 2 === 0 ? s.slice(middleIndex - 1, middleIndex + 1) : s.slice(middleIndex, middleIndex + 1);
// }


// function getMiddle(s) {
//   let middleIndex = Math.floor(s.length / 2);
//   return s.length % 2 === 0 ? s.charAt(middleIndex - 1) + s.charAt(middleIndex) : s.charAt(middleIndex);
// }

// 1. **slice(startIndex, endIndex)**: This method extracts a section of a string and returns it as a new string. The original string is not modified. The `startIndex` is inclusive and the `endIndex` is exclusive. If `endIndex` is not provided, the slice includes all characters from `startIndex` to the end of the string³.
// 2. **charAt(index)**: This method returns the character at the specified index in a string. The index of the first character is 0, the second character is 1, and so on¹.

// - `slice` can return a substring (more than one character), while `charAt` can only return one character¹.
// - `slice` can accept negative indices, which count from the end of the string, while `charAt` cannot¹.
// - If the index is out of range, `charAt` returns an empty string, while `slice` returns an empty string if the `startIndex` is greater than or equal to `endIndex`¹.
// - Performance-wise, `charAt` is faster than `slice` when accessing a single character¹.

// In terms of best practices, `charAt` is more readable and specific when you want to access a single character. However, if you need to extract a substring, `slice` would be the appropriate method to use¹.

// 1. **substr(start, length)**: This method begins extraction at `start` and extracts `length` characters¹. The `start` parameter can be negative, which means it starts from the end of the string¹. However, `substr` is considered a "legacy function" and its use is not recommended in new code¹.
// 2. **slice(startIndex, endIndex)**: This method extracts a section of a string from `startIndex` to `endIndex` (exclusive) and returns it as a new string¹. If `endIndex` is not provided, `slice` extracts to the end of the string¹. Both `startIndex` and `endIndex` can be negative, which means counting from the end of the string¹. If `startIndex` is greater than `endIndex`, `slice` returns an empty string¹.

// - `substr` uses `(start, length)` whereas `slice` uses `(startIndex, endIndex).
// - `substr` is considered a "legacy function" and its use is not recommended in new code.
// - `slice` supports negative indices for both `startIndex` and `endIndex`, while `substr` only supports a negative `start`.
// - If `startIndex` is greater than `endIndex`, `slice` returns an empty string, while `substr` does not have this behavior.

// In general, `slice` is more commonly used and is recommended for new code as it is not considered a "legacy function" and has more predictable behavior.
