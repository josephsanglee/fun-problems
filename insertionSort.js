const insertionSort = (array) => {
  //iterate through each value in the array
  for (var i = 0; i < array.length; i++) {
    //for each value, grab the value and create a "hole"
    let value = array[i];
    var hole = i;

    //that the previously sorted values should fill up the
    // hole until the value is greater than the previous
    //sorted value
    while (hole > 0 && value < array[hole - 1]) {
      array[hole] = array[hole - 1];
      hole--;
    }

    array[hole] = value;
  }


  return array;
};

//  Time Complexity:
//    Best: O(n)
//    Average: O(n^2)
//    Worst: O(n^2)

console.log(insertionSort([12, 5, 78, 3, 43, 2, 1]));