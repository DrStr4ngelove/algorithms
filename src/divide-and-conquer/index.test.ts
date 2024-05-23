import { iterativeBinarySearch, recursiveBinarySearch } from "./index";
describe("Divide and Conquer", () => {
  const testArray = [1, 2, 3, 4, 5, 6];
  it("Returns expeected results from iterativeBinarySearch from sorted array", () => {
    expect(iterativeBinarySearch(testArray, 4)).toBe(3);
    expect(iterativeBinarySearch(testArray, 6)).toBe(5);
    expect(iterativeBinarySearch(testArray, 11)).toBe(-1);
  });
  it("Returns expeected results from iterativeBinarySearch from unsorted array", () => {
    const reversedSortedArray = testArray.sort((a,b) => b-a);
    expect(iterativeBinarySearch(reversedSortedArray, 4)).toBe(3);
    expect(iterativeBinarySearch(reversedSortedArray, 6)).toBe(5);
    expect(iterativeBinarySearch(reversedSortedArray, 11)).toBe(-1);
  });
  it("Returns expeected results from recursiveBinarySearch from sorted arry with correct params", () => {
    const low = 0;
    const high = testArray.length - 1;
    expect(recursiveBinarySearch(testArray, low, high, 4)).toBe(3);
    expect(recursiveBinarySearch(testArray, low, high,6)).toBe(5);
    expect(recursiveBinarySearch(testArray, low, high,11)).toBe(-1);
  });
  it("Returns expected results from recursiveBinarySearch from unsorted arry with correct params", () => {
    const reversedSortedArray = testArray.sort((a,b) => b-a);
    const low = 0;
    const high = reversedSortedArray.length - 1;
    expect(recursiveBinarySearch(reversedSortedArray, low, high, 4)).toBe(3);
    expect(recursiveBinarySearch(reversedSortedArray, low, high,6)).toBe(5);
    expect(recursiveBinarySearch(reversedSortedArray, low, high,11)).toBe(-1);
  });
  it("Returns -1 when low and high are reversed", () => {
    const high = 0;
    const low = testArray.length - 1;
    expect(recursiveBinarySearch(testArray, low, high, 1)).toBe(-1);
  });
  it("Returns -1 when low and high are out of bounds", () => {
    const high = -11;
    const low = - 1;
    expect(recursiveBinarySearch(testArray, low, high, 3)).toBe(-1);
  });
});
