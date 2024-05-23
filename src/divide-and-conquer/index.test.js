import { binarySearch } from "./index";
describe("Divide and Conquer", () => {
  const testArray = [1, 2, 3, 4, 5, 6];
  it("binarySearch", () => {
    expect(binarySearch(testArray, 4)).toBe(3);
    expect(binarySearch(testArray, 6)).toBe(5);
    expect(binarySearch(testArray, 11)).toBe(-1);
  });
});