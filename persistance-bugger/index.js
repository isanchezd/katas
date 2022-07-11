const isOneDigit = (number) => number <= 9

const getDigits = (number) => number.toString().split('').map((digit) => parseInt(digit))

const multiplicate = (a, b) => a * b

const persistence = (number) => {
  if(!isOneDigit(num)) {
    persistence(getDigits(num).reduce(multiplicate, 1))
  }

  return number
}

module.exports = persistence
