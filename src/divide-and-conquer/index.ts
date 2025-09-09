/***
Divide and Conquer:
  - This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data. 
  - This pattern can tremendously decrease time complexity.
  - This pattern can be very useful when you have a sorted array and you are searching for a value.
***/

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
  - Applications of Binary Search Algorithm:
    - Binary search can be used as a building block for more complex algorithms used in machine learning, such as algorithms for training neural networks or finding the optimal hyperparameters for a model.
    - It can be used for searching in computer graphics such as algorithms for ray tracing or texture mapping.
    - It can be used for searching a database.
*/

export const iterativeBinarySearch = (
    arr: Array<number>,
    val: number
): number => {
    // Precondition: arr is sorted
    const sortedArr = arr.sort((a, b) => a - b)
    // Access to any element of the data structure takes constant time: O(n)
    // Divide search space in half each time: O(log n)
    let high: number = arr.length - 1
    let low: number = 0
    let mid: number = low + Math.floor((high - low) / 2)
    // While the search space has not been exhausted
    while (low <= high) {
        // Early exit if the value is found
        if (sortedArr[mid] === val) {
            return mid
        }
        // If the value is not found, adjust the search space
        else if (sortedArr[mid] < val) {
            // Search the right half
            low = mid + 1
        } else {
            // Search the left half
            high = mid - 1
        }
        // Update the mid point
        mid = low + Math.floor((high - low) / 2)
    }
    return -1
}

// Recursive Binary Search
export const recursiveBinarySearch = (
    arr: Array<number>,
    low: number,
    high: number,
    val: number
): number => {
    // Precondition: arr is sorted
    const sortedArr = arr.sort((a, b) => a - b)
    // Base case
    if (high >= low) {
        // Find the middle index
        let mid: number = low + Math.floor((high - low) / 2)
        if (sortedArr[mid] === val) {
            return mid
        }
        // If the element is smaller than the middle element, then it can only be present in the left subarray
        if (sortedArr[mid] > val) {
            return recursiveBinarySearch(sortedArr, low, mid - 1, val)
        }
        // Else the element can only be present in the right subarray
        return recursiveBinarySearch(sortedArr, mid + 1, high, val)
    }
    // We reach here when the element is not present in the array
    return -1
}

/* 
Merge Sort:
  - Merge sort is a combination of two things - merging and sorting!
  - Exploits the fact that arrays of 0 or 1 element are always sorted
  - Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array
  - Time Complexity:
    - Best Case: O(n log n), When the array is already sorted or nearly sorted.
    - Average Case: O(n log n), When the array is randomly ordered.
    - Worst Case: O(n log n), When the array is sorted in reverse order.
    - Space Complexity: O(n), Additional space is required for the temporary array used during merging.
  - Applications of Merge Sort:
    - Sorting large datasets
    - External sorting (when the dataset is too large to fit in memory)
    - Inversion counting (counting the number of inversions in an array)
    - Finding the median of an array
*/

export const mergeSort = (arr: Array<number>): Array<number> => {
    // Base case
    if (arr.length <= 1) return arr
    // Recursive case
    const mid: number = Math.floor(arr.length / 2)
    // Divide the array into two halves
    const left: Array<number> = mergeSort(arr.slice(0, mid))
    const right: Array<number> = mergeSort(arr.slice(mid))
    // Merge the two halves
    return merge(left, right)
}

// Merge two sorted arrays into one sorted array
export const merge = (
    arr1: Array<number>,
    arr2: Array<number>
): Array<number> => {
    // Create an empty array to store the results
    let results: Array<number> = []
    let i: number = 0
    let j: number = 0
    // While there are still values we haven't looked at...
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            // If the value in the first array is smaller than the value in the second array,
            // push the value in the first array into the results and move on to the next value in the first array
            results.push(arr1[i])
            // Move on to the next value in the first array
            i++
        } else {
            // If the value in the first array is larger than the value in the second array,
            // push the value in the second array into the results and move on to the next value in the second array
            results.push(arr2[j])
            // Move on to the next value in the second array
            j++
        }
    }
    // If there are any remaining values in the first array, push them into the results
    while (i < arr1.length) {
        results.push(arr1[i])
        i++
    }
    // If there are any remaining values in the second array, push them into the results
    while (j < arr2.length) {
        results.push(arr2[j])
        j++
    }

    // Return the results
    return results
}

/*
Quick Sort:
  - Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
  - Works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array
  - Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot
  - Time Complexity:
    - Best Case: O(n log n), When the pivot element is always the median element.
    - Average Case: O(n log n), When the pivot element is the middle element.
    - Worst Case: O(n^2), When the pivot element is the smallest or largest element.
    - Space Complexity: O(log n), Additional space is required for the recursive call stack.
  - Applications of Quick Sort:
    - Sorting large datasets
    - In-place sorting
    - External sorting (when the dataset is too large to fit in memory)
    - Quick sort is often used in programming languages to implement sort functions.
*/
export const quickSort = (
    arr: Array<number>,
    low: number,
    high: number
): Array<number> => {
    if (low < high) {
        // pi is partitioning index, arr[p] is now at right place
        const pi: number = partition(arr, low, high)
        // Separately sort elements before partition and after partition
        quickSort(arr, low, pi - 1)
        quickSort(arr, pi + 1, high)
    }
    return arr
}

export const partition = (
    arr: Array<number>,
    low: number,
    high: number
): number => {
    // Base case
    const pivot: number = arr[high]
    // the right position of the pivot element so far
    let i: number = low - 1
    for (let j = low; j < high; j++) {
        // If the current element is smaller than the pivot element
        if (arr[j] < pivot) {
            // Increment the right position of the pivot element
            i++
            // Swap the current element with the element at the right position of the pivot element
            ;[arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }
    // Swap the pivot element with the element at the right position of the pivot element
    ;[arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]
    // Return the partition index
    return i + 1
}

/*
Power Calculation:
  - Given a base and an exponent, calculate the power of the base raised to the exponent.
  - Time Complexity: O(log |n|)
  - Auxiliary Space: O(log |n|) , for recursive call stack
*/
export const recursiveCalcPower = (base: number, exponent: number): number => {
    let temp: number
    // Base case
    if (exponent === 0) {
        return 1
    }
    // Recursive case
    temp = recursiveCalcPower(base, parseInt((exponent / 2).toString(), 10))
    const squaredTemp: number = temp * temp
    // If the exponent is even
    if (exponent % 2 === 0) {
        return squaredTemp
    } else {
        // If the exponent is positive
        if (exponent > 0) {
            return base * squaredTemp
        } else {
            // If the exponent is negative
            return squaredTemp / base
        }
    }
}
/*
binaryOperatorCalcPower:
  - Time Complexity: O(log n)
  - Auxiliary Space: O(1)
*/
export const binaryOperatorCalcPower = (
    base: number,
    exponent: number
): number => {
    let result: number = 1
    let n: number = Math.abs(exponent)
    while (n > 0) {
        if (n % 2 === 1) {
            result *= base
        }
        base *= base
        n = Math.floor(n / 2)
    }
    return exponent > 0 ? result : 1 / result
}

// bubble sort
export const bubbleSort = (arr: Array<number>): Array<number> => {
    let isSwapped: boolean
    for (let i = 0; i < arr.length; i++) {
        isSwapped = false
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                isSwapped = true
            }
        }
        if (!isSwapped) break
    }
    return arr
}
