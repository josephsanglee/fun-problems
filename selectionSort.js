const selectionSort = (values) => {

  for (var i = 0; i < values.length; i++) {
    let minIndex = i;
    let minValue = values[i];

    for (var j = i + 1; j < values.length; j++) {
      if (values[j] < minValue) {
        minIndex = j;
        minValue = values[j];
      }
    }

    let currentValue = values[i];
    values[i] = minValue;
    values[minIndex] = currentValue;
  }
  
  return values;
};

console.log(selectionSort([12, 151, 23, 1]));