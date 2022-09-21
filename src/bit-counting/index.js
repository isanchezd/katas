const getBinaryNumber = number => number.toString(2)

function countBits(n) {
  const binaryNumber = getBinaryNumber(n)   
  
  return binaryNumber
  .split('')
  .filter(digitBinaryNumber => Number(digitBinaryNumber) === 1).length
}

module.exports = countBits