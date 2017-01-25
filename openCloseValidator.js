/********
** 
** Let's say:
** '(', '{', '[' are called "openers."
** ')', '}', ']' are called "closers."
** 
** Write an efficient function that tells us whether or not an input string's openers and closers are properly nested.
** 
** Examples:
** "{ [ ] ( ) }" should return true
** "{ [ ( ] ) }" should return false
** "{ [ }" should return false
** 
********/

const openersToClosers = {
  '{': '}',
  '(': ')',
  '[': ']',
};
const openers = new Set(['{', '(', '[']);
const closers = new Set(['}', ')', ']']);

const openCloseValidator = (string) => {
  // keep a stack of all of the parentheses, braces, and brackets
  let openersStack = [];

  for (var i = 0; i < string.length; i++) {
    let char = string[i];

    // if the char is an opener, add it to the stack
    if (openers.has(char)) {
      openersStack.push(char);
    }
    
    // if the last item in the openers stack and the closer
    // match, pop the last opener from the stack. Else,
    // return false.
    if (closers.has(char)) {
      let opener = openersStack.pop();

      if (openersToClosers[opener] !== char) {
        return false;
      }
    }
  }
  
  // if the loop finishes without returning true, that 
  // means all the openers and closers matched. WOO!
  return openersStack.length === 0;
};

console.log(openCloseValidator('{ [ ] ( ) }')); // true
console.log(openCloseValidator('{ [ ( ] ) }')); // false
console.log(openCloseValidator('{ [ }')); // false