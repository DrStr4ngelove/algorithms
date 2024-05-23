/*
Divide and Conquer:
  - This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data. 
  - This pattern can tremendously decrease time complexity.
  - This pattern can be very useful when you have a sorted array and you are searching for a value.
*/

/* 
Binary Search:
  - Binary search is a much faster form of search
  - Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time.
  - Disadvantages of Binary Search:
    - The array should be sorted.
    - Binary search requires that the data structure being searched be stored in contiguous memory locations. 
    - Binary search requires that the elements of the array be comparable, meaning that they must be able to be ordered.
  - Time Complexity: 
    - Best Case: O(1)
    - Average Case: O(log N)
    - Worst Case: O(log N)
    - Auxiliary Space: O(1), If the recursive call stack is considered then the auxiliary space will be O(logN).
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

/* 
Merge Sort:
  - Merge sort is a combination of two things - merging and sorting!
  - Exploits the fact that arrays of 0 or 1 element are always sorted
  - Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array
  - Time Complexity: O(n log n)
  - Space Complexity: O(n)
*/
export const merge = (arr1: Array<number>, arr2: Array<number>): Array<number> => {
  // Create an empty array to store the results
  let results: Array<number> = [];
  let i: number = 0;
  let j: number = 0;
  // While there are still values we haven't looked at...
  while(i < arr1.length && j < arr2.length){
    if(arr2[j] > arr1[i]){
      // If the value in the first array is smaller than the value in the second array, push the value in the first array into the results and move on to the next value in the first array
      results.push(arr1[i]);
      i++;
    } else {
      // If the value in the first array is larger than the value in the second array, push the value in the second array into the results and move on to the next value in the second array
      results.push(arr2[j]);
      j++;
    }
  }
  // If there are any remaining values in the first array, push them into the results
  while(i < arr1.length){
    results.push(arr1[i]);
    i++;
  }
  // If there are any remaining values in the second array, push them into the results
  while(j < arr2.length){
    results.push(arr2[j]);
    j++;
  }
  return results;
}

export const mergeSort = (arr: Array<number>): Array<number> => {
  // Base case
  if(arr.length <= 1) return arr;
  // Recursive case
  const mid: number = Math.floor(arr.length / 2);
  // Divide the array into two halves
  const left: Array<number> = mergeSort(arr.slice(0, mid));
  const right: Array<number> = mergeSort(arr.slice(mid));
  // Merge the two halves
  return merge(left, right);
}