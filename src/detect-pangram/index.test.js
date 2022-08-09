const isPangram = require('./index')

describe('detect-pangram Kata Test Suite', () => {
    
    test("test1", () => {
      const string = "The quick brown fox jumps over the lazy dog.";
      expect(isPangram(string)).toBeTruthy();
    });
    test("test2", () => {
      var string = "This is not a pangram.";
      expect(isPangram(string)).toBeFalsy();
    });
})

