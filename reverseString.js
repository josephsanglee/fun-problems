const reverseString = (string) => {
  const chars = string.split('');
  let startIndex = 0;
  let endIndex = string.length - 1;

  while (startIndex < endIndex) {
    [chars[startIndex], chars[endIndex]] = [chars[endIndex], chars[startIndex]];
    startIndex++;
    endIndex--;
  }

  return chars.join('');
};

console.log(reverseString('hello world'));