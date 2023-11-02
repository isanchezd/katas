import digitalRoot from "./index";

describe("sum-of-digits-or-digital-root Kata Test Suite", () => {
  test("When the input is 16 the ouput should be 7", () => {
    expect(digitalRoot(16)).toEqual(7);
  });

  test("When the input is 456 the ouput should be 6", () => {
    expect(digitalRoot(456)).toEqual(6);
  });

});
