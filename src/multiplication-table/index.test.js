const multiplicationTable = require("./index");

describe("persistance-bugger Kata Test Suite", () => {
  test("When the input was 3 the oput should be [[1,2,3], [2,4,6], [3,6,9]]", () => {
    expect(multiplicationTable(3)).toStrictEqual([
      [1, 2, 3],
      [2, 4, 6],
      [3, 6, 9],
    ]);
  });
});
