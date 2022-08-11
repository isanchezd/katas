function expandedForm(num) {
  const numInExpandedForm = num
    .toString()
    .split("")
    .reverse()
    .map((digit, index) =>
        digit !== '0' ? geDigitInExpandedForm(digit, index) : null
    )
    .filter((digit) => digit !== null)
    .reverse()
    .reduce((previousDigit, digit) => `${previousDigit} + ${digit}`);

  return numInExpandedForm;
}

const geDigitInExpandedForm = (digit, units) => `${digit}${getZeros(units)}`;

const getZeros = (units) => '0'.repeat(units)


module.exports = expandedForm;
