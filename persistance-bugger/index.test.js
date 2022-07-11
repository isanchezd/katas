const persistence = require('./index')

test('When the input is 39 the ouput should be 3', () => {
  expect(persistence(39)).toEqual(3)
})

test('When the input is 4 the ouput should be 0', () => {
  expect(persistence(4)).toEqual(0)
})

test('When the input is 25 the ouput should be 2', () => {
  expect(persistence(25)).toEqual(2)
})

test('When the input is 999 the ouput should be 4', () => {
  expect(persistence(999)).toEqual(4)
})
