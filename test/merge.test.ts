import { merge } from "../src/utils/merge";


describe("merge function", () => {
  test("merges three collections correctly", () => {
    const c1 = [1, 4, 6];
    const c2 = [2, 5, 7];
    const c3 = [9, 8, 3]; 

    const result = merge(c1, c2, c3);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
