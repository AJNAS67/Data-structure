//check  Palindrome or not with out string reverse
function Palindrome(str) {
  let i = 0;
  let j = str.length - 1;
  while (i != j) {
    if (str[i] != str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}
console.log(Palindrome("ajnas"));
function isPalindrome(str) {
  // Convert the string to lowercase and remove non-alphanumeric characters
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Use two pointers to compare characters at opposite ends of the string
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    if (str[i] !== str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

console.log(isPalindrome("MalayalaM"));

function isPalindrome1(str) {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}
console.log(isPalindrome1("malayalam"));
function isValid(s) {
  const stack = [];
  const pairs = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    console.log(char,'char');
    if (pairs[char]) {
      stack.push(char);
    } else {
      const top = stack.pop();
      if (pairs[top] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
console.log('ppppppp');
console.log(isValid("([][])")); // Output: true
console.log(isValid("()[]{}")); // Output: true
console.log(isValid("(]")); // Output: false
console.log(isValid("([)]")); // Output: false
console.log(isValid("{[]}")); // Output: true



