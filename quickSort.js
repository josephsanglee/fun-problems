const partition = (array, start, end) => {
  // For this implementation, pivot will always be the number at the end of the array
  const pivot = array[end];

  // The index of the pivot initially is the start value given. As the array
  // is partitioned, the index of the pivot will increase as values less than
  // the pivot will move "behind" the pivot index.
  let pivotIndex = start;

  // i must be less than end because the end value will be the pivot! There's 
  // no point in comparing the pivot value against itself.
  for (var i = start; i < end; i++) {
    let value = array[i];

    // if the value at the current index is less than the pivot, swap
    // the value at this index with the value at the pivot, then increase
    // the pivotIndex by 1. 
    if (value <= pivot) {
      [array[pivotIndex], array[i]] = [array[i], array[pivotIndex]];
      pivotIndex++;
    }
  }

  [array[end], array[pivotIndex]] = [array[pivotIndex], pivot];

  return pivotIndex;
};

const quickSort = (array, start = 0, end = array.length - 1) => {

  if (start < end) {
    pivotIndex = partition(array, start, end);
    quickSort(array, start, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, end);
  }
};


var arr = [7, 2, 1, 6, 8, 5, 3, 4];

quickSort(arr);
console.log(arr);