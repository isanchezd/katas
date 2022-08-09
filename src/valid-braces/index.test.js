const validBraces = require('./index')


describe('valid-braces Kata Test Suite', () => {
  
  test('When the input is ())) should be falsy', () => {
    expect(validBraces('()))')).toBeFalsy()
  })
  
  test('When the input is () should be truthy', () => {
    expect(validBraces('()')).toBeTruthy()
  })
  
  test('When the input is [] should be truthy', () => {
    expect(validBraces('[]')).toBeTruthy()
  })
  
  test('When the input is {} should be truthy', () => {
    expect(validBraces('{}')).toBeTruthy()
  })
  
  test('When the input is (){}[] should be truthy', () => {
    expect(validBraces('(){}[]')).toBeTruthy()
  })
  
  test('When the input is ([{}]) should be truthy', () => {
    expect(validBraces('([{}])')).toBeTruthy()
  })
  
  test('When the input is (} should be falsy', () => {
    expect(validBraces('(}')).toBeFalsy()
  })
  
  test('When the input is [(]) should be falsy', () => {
    expect(validBraces('[(])')).toBeFalsy()
  })
  
  test('When the input is ({})[({})] should be truthy', () => {
    expect(validBraces('({})[({})]')).toBeTruthy()
  })
  
  test('When the input is (}) should be falsy', () => {
    expect(validBraces('(})')).toBeFalsy()
  })
  
  test('When the input is (({{[[]]}})) should be truthy', () => {
    expect(validBraces('(({{[[]]}}))')).toBeTruthy()
  })
  
  test('When the input is {}({})[] should be truthy', () => {
    expect(validBraces('{}({})[]')).toBeTruthy()
  })
  
  test('When the input is )(}{][ should be falsy', () => {
    expect(validBraces(')(}{][')).toBeFalsy()
  })
  
  test('When the input is ())({}}{()][][ should be Falsy', () => {
    expect(validBraces('())({}}{()][][')).toBeFalsy()
  })
  
  test('When the input is (((({{  should be falsy', () => {
    expect(validBraces('(((({{')).toBeFalsy()
  })
  
  test('When the input is }}]]))}])  should be falsy', () => {
    expect(validBraces('}}]]))}])')).toBeFalsy()
  })

})
