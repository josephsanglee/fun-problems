/*
Create an algorithm that takes a mathematical expression in the form of a string
as input and outputs the evaluation of that expression.

ex: (1 + (8 * (3 - 1) * (2 / 1)))); // 33

*/

const dijkstrasTwoStack = (inputString) => {
  const valueStack = [];
  const operatorStack = [];

  for (var i = 0; i < inputString.length; i++) {
    let value = inputString[i];
    //if value, push to valueStack
    if (parseInt(value)) {
      valueStack.push(parseInt(value));
    }

    //if operator, push to operatorStack
    if (value === '+' || value === '*' || value === '-' || value === '/') {
      operatorStack.push(value);
    }

    //if ), pop 2 values and 1 operator, evaluate, push back to value stack
    if (value === ')') {
      let val1 = valueStack.pop();
      let val2 = valueStack.pop();
      let operator = operatorStack.pop();

      if (operator === '+') {
        valueStack.push(val1 + val2);
      } else if (operator === '*') {
        valueStack.push(val1 * val2);
      } else if (operator === '-') {
        valueStack.push(val2 - val1);
      } else if (operator === '/') {
        valueStack.push(val2 / val1);
      }
    }
  }

  return valueStack[0];
};

console.log(dijkstrasTwoStack('(1 + (8 * (3 - 1) * (2 / 1))))'));