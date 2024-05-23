import { iterativeBinarySearch, recursiveBinarySearch, merge, mergeSort } from "./index";
describe("Divide and Conquer", () => {
  let testArray: Array<number>;
  beforeEach(() => {
    testArray = [1, 2, 3, 4, 5, 6];
  })
  describe("Binary Search", () => {
    it("iterativeBinarySearch Returns expeected results from sorted array", () => {
      expect(iterativeBinarySearch(testArray, 4)).toBe(3);
      expect(iterativeBinarySearch(testArray, 6)).toBe(5);
      expect(iterativeBinarySearch(testArray, 11)).toBe(-1);
    });
    it("iterativeBinarySearch Returns expeected results from unsorted array", () => {
      // structuredClone is used to create a deep copy of the array
      const reversedSortedArray = structuredClone(testArray).sort((a,b) => b-a);
      expect(iterativeBinarySearch(reversedSortedArray, 4)).toBe(3);
      expect(iterativeBinarySearch(reversedSortedArray, 6)).toBe(5);
      expect(iterativeBinarySearch(reversedSortedArray, 11)).toBe(-1);
    });
    it("recursiveBinarySearch Returns expeected results from sorted arry with correct params", () => {
      const low = 0;
      const high = testArray.length - 1;
      expect(recursiveBinarySearch(testArray, low, high, 4)).toBe(3);
      expect(recursiveBinarySearch(testArray, low, high,6)).toBe(5);
      expect(recursiveBinarySearch(testArray, low, high,11)).toBe(-1);
    });
    it("recursiveBinarySearch Returns expected results from unsorted arry with correct params", () => {
      const reversedSortedArray = testArray.sort((a,b) => b-a);
      const low = 0;
      const high = reversedSortedArray.length - 1;
      expect(recursiveBinarySearch(reversedSortedArray, low, high, 4)).toBe(3);
      expect(recursiveBinarySearch(reversedSortedArray, low, high,6)).toBe(5);
      expect(recursiveBinarySearch(reversedSortedArray, low, high,11)).toBe(-1);
    });
    it("recursiveBinarySearch Returns -1 when low and high are reversed", () => {
      const high = 0;
      const low = testArray.length - 1;
      expect(recursiveBinarySearch(testArray, low, high, 1)).toBe(-1);
    });
    it("recursiveBinarySearch Returns -1 when low and high are out of bounds", () => {
      const high = -11;
      const low = - 1;
      expect(recursiveBinarySearch(testArray, low, high, 3)).toBe(-1);
    });
  })
  describe("Merge Sort", () => {
    it("merge Returns expected results", () => {
      const arr1: Array<number>  = [1, 3, 5];
      const arr2: Array<number>  = [2, 4, 6];
      const expected: Array<number>  = testArray;
      expect(merge(arr1, arr2)).toEqual(expected);
    });
    it("merge Returns expected results with empty arrays", () => {
      const arr1: Array<number> = [];
      const arr2: Array<number> = [];
      const expected: Array<number> = [];
      expect(merge(arr1, arr2)).toEqual(expected);
    });
    it("merge Returns expected results with one empty second array", () => {
      const arr1: Array<number> = [1, 3, 5];
      const arr2: Array<number> = [];
      const expected: Array<number> = [1, 3, 5];
      expect(merge(arr1, arr2)).toEqual(expected);
    });
    it("merge Returns expected results with one empty first array", () => {
      const arr1: Array<number> = [];
      const arr2: Array<number> = [2, 4, 6];
      const expected: Array<number> = [2, 4, 6];
      expect(merge(arr1, arr2)).toEqual(expected);
    });
    it("merge Returns expected results with one element in each array", () => {
      const arr1: Array<number> = [1];
      const arr2 : Array<number>= [2];
      const expected: Array<number> = [1, 2];
      expect(merge(arr1, arr2)).toEqual(expected);
    });
    it("mergeSort Returns expected results from sorted array", () => {
      const arr: Array<number> = [1, 3, 5, 2, 4, 6];
      const expected: Array<number> = testArray;
      expect(mergeSort(arr)).toEqual(expected);
    })
    it("mergeSort Returns expected results from unsorted array", () => {
      // structuredClone is used to create a deep copy of the array
      const arr: Array<number> = structuredClone(testArray).sort((b,a) => a-b)
      const expected: Array<number> = testArray;
      expect(mergeSort(arr)).toEqual(expected);
    })
  })
});
