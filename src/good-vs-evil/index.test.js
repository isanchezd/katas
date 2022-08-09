const goodVsEvil = require('./index')

describe('Good vs Evil Kata Test Suite', () => {
  
  test('With the input the evil should be win', () => {
    expect(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1')).toEqual('Battle Result: Evil eradicates all trace of Good')
  })

  test('With the input the good should be win', () => {
    expect(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0')).toEqual('Battle Result: Good triumphs over Evil')
  })

  test('With the input not be a winner', () => {
    expect(goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0')).toEqual('Battle Result: No victor on this battle field')
  })

})


