const digits = require('./index')


describe('every-possible-sum-of-digits Kata Test Suite', () => {

  test('When the input is 156 the output should be [ 6, 7, 11 ]', () => {
      const expected = [ 6, 7, 11 ]
      expect(digits(156)).toEqual(expect.arrayContaining(expected))
  })
  
  test('When the input is 81596 the output should be [ 9, 13, 17, 14, 6, 10, 7, 14, 11, 15 ]', () => {
    const expected = [ 9, 13, 17, 14, 6, 10, 7, 14, 11, 15 ]
    expect(digits(81596)).toEqual(expect.arrayContaining(expected))
  })
  
  test('When the input is 3852 the output should be [ 11, 8, 5, 13, 10, 7 ]', () => {
    const expected = [ 11, 8, 5, 13, 10, 7 ]
    expect(digits(3852)).toEqual(expect.arrayContaining(expected))
  })
  
  test('When the input is 3264128 the output should be [ 5, 9, 7, 4, 5, 11, 8, 6, 3, 4, 10, 10, 7, 8, 14, 5, 6, 12, 3, 9, 10 ]', () => {
      const expected = [ 5, 9, 7, 4, 5, 11, 8, 6, 3, 4, 10, 10, 7, 8, 14, 5, 6, 12, 3, 9, 10 ]
    expect(digits(3264128)).toEqual(expect.arrayContaining(expected))
  })
  
  test('When the input is 999999 the ouput should be [ 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18 ]', () => {
      const expected = [ 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18 ]
    expect(digits(999999)).toEqual(expect.arrayContaining(expected))
  })

})
