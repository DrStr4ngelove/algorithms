/// Divide and Conquer:
// This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data. This pattern can tremendously decrease time complexity.
// This pattern can be very useful when you have a sorted array and you are searching for a value.
// Example:
// Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1.
// search([1,2,3,4,5,6],4) // 3
// search([1,2,3,4,5,6],6) // 5
// search([1,2,3,4,5,6],11) // -1

export const binarySearch = (arr, val) => {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);
  while (arr[middle] !== val && left <= right) {
    if (val < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
    middle = Math.floor((left + right) / 2);
  }
  return arr[middle] === val ? middle : -1;
};
