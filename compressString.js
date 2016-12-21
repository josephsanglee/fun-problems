const compressString = (string) => {
  let compressedString = '';
  let count = 1;

  for (var i = 0; i < string.length; i++) {
    let currentChar = string[i];
    let nextChar = string[i + 1];

    if (currentChar === nextChar) {
      count++;
    } else {
      compressedString += count + currentChar;
      count = 1;
    }
  }

  return compressedString;
};

console.log(compressString('aaaaabbbbeeeiiiddddmmmeee'));