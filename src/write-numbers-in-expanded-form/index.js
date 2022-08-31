function expandedForm(num) {
  const digits = num
    .toString()
    .split('')

  return digits
    .map((digit, index, arr) => geDigitInExpandedForm(digit, index, arr))
    .filter(digit => !digit.startsWith('0'))
    .join(' + ')
}


const geDigitInExpandedForm = (digit, index, digits) => digit.padEnd(digits.length - index, '0')


module.exports = expandedForm;
