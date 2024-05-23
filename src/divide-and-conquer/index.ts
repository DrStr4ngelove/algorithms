/*
Divide and Conquer:
  - This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data. 
  - This pattern can tremendously decrease time complexity.
  - This pattern can be very useful when you have a sorted array and you are searching for a value.
*/

export const iterativeBinarySearch = (arr: Array<number>, val: number): number => {
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

// Recursive Binary Search
export const recursiveBinarySearch = (arr: Array<number>, low: number, high: number, val: number): number => {
  // Precondition: arr is sorted
  const sortedArr = arr.sort((a, b) => a - b);
  // Base case
  if(high >= low){
    // Find the middle index
    let mid: number = low + Math.floor((high - low) / 2);
    if(sortedArr[mid] === val){
      return mid;
    }
    // If the element is smaller than the middle element, then it can only be present in the left subarray
    if(sortedArr[mid] > val){
      return recursiveBinarySearch(sortedArr, low, mid - 1, val);
    }
    // Else the element can only be present in the right subarray
    return recursiveBinarySearch(sortedArr, mid + 1, high, val);
  }
  // We reach here when the element is not present in the array
  return -1
  
}