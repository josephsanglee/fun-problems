/*
I like parentheticals (a lot).
"Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing."

Write a function that, given a sentence like the one above, along with 
the position of an opening parenthesis, finds the corresponding closing parenthesis.

Example: if the example string above is input with the number 10 (position of the first parenthesis),
the output should be 79 (position of the last parenthesis).
*/

const findClosingParenthesis = (string, openPos) => {
  if (openPos > string.length) {
    throw new Error('Index of openPos is greater than the length of the string');
  } else if (string.length < 2) {
    throw new Error('String is too short to contain an open and close parentheses');
  }
  // in order to find the position of the closing parenthesis,
  // that means the number of opening parentheses must be equal
  // to the number of closing parentheses.

  let openParenCount = 1;
  let closeParenCount = 0;

  for (let i = openPos + 1; i < string.length; i++) {
    let char = string[i];

    if (char === '(') {
      openParenCount++;
    }

    if (char === ')') {
      closeParenCount++;
    }

    if (openParenCount === closeParenCount) return i;
  }

  //return -1 if the number of closing and opening parentheses don't match
  return -1;
};

let string = 'Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.';
console.log(findClosingParenthesis(string, 10));