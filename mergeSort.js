const merge = (leftArray, rightArray) => {
  const mergedArray = [];
  let i = 0;
  let j = 0;


  // pushes the sorted values from both arrays into the
  // merged array until it iterates completely through
  // one of them
  while (i < leftArray.length && j < rightArray.length) {
    if (leftArray[i] < rightArray[j]) {
      mergedArray.push(leftArray[i]);
      i++;
    } else {
      mergedArray.push(rightArray[j]);
      j++;
    }
  }

  // these while loops pushes the rest of whatever array
  // is leftover
  // only one of these loops will

  while (i < leftArray.length) {
    mergedArray.push(leftArray[i]);
    i++;
  }

  while (j < rightArray.length) {
    mergedArray.push(rightArray[j]);
    j++;
  }

  return mergedArray;
};

var mergedExample = merge([1, 5, 6, 8, 9, 15], [2, 7, 238]);
console.assert(mergedExample[0] === 1, 'Should be a numerically sorted array');
console.assert(mergedExample[8] === 238, 'Should be a numerically sorted array');
console.log('nice');

const mergeSort = (inputArray) => {
  if (inputArray.length < 2) {
    return inputArray;
  }

  const middleIndex = Math.floor(inputArray.length / 2);
  const leftArray = inputArray.slice(0, middleIndex);
  const rightArray = inputArray.slice(middleIndex);


  return merge(mergeSort(leftArray), mergeSort(rightArray));
};

console.log(mergeSort([123, 4, 6, 456, 85675, 23, 324, 23, 1]));