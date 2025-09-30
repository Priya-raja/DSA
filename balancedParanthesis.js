function isValid(s) {
  const stack = [];
  const mapping = {")": "(", "}": "{", "]": "["};

  for (const char of s) {
    if (char in mapping) {
      if (stack.length === 0 || stack[stack.length - 1] !== mapping[char]) {
        return false;
      }
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
}

// Example usage:
console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true


// Time Complexity: O(n) where n is the length of the string
// Space Complexity: O(n) in the worst case when all characters are opening brackets

// Recognize pattern: Stack, String Manipulation, nested structures. want to check the last opened bracket is closed properly
//Stacks are effective for managing the ordering of nested sequences, as the order in which we must process the sequences 
// matches the order in which they are popped from the stack.
