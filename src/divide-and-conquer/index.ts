/*
Divide and Conquer:
  - This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data. 
  - This pattern can tremendously decrease time complexity.
  - This pattern can be very useful when you have a sorted array and you are searching for a value.
*/

export const binarySearch = (arr: Array<number>, val: number): number => {
  // Precondition: arr is sorted
  const sortedArr = arr.sort((a, b) => a - b);
  // Access to any element of the data structure takes constant time: O(n)
  // Divide search space in half each time: O(log n)
  let high: number = arr.length - 1;
  let low: number = 0;
  let mid: number = low + Math.floor((high - low) / 2);
  // While the search space has not been exhausted
  while (low <= high) {
    // Early exit if the value is found
    if (sortedArr[mid] === val) {
      return mid;
    }
    // If the value is not found, adjust the search space 
    else if (sortedArr[mid] < val) { // Search the right half
      low = mid + 1;
    } else { // Search the left half
      high = mid - 1;
    }
    // Update the mid point
    mid = low + Math.floor((high - low) / 2);
  }
  return -1;
};