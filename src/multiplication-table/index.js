function multiplicationTable(size) {
  const table = [];
  const COEFICENTS = getCoeficents(size);

  for (let iterator = 0; iterator < size; iterator++) {
    const monomial = iterator + 1;
    table.push(getMultiplicationRow(monomial, COEFICENTS));
  }

  return table;
}

function getCoeficents(size) {
  return [...Array(size).keys()].map((digit) => digit + 1);
}

function getMultiplicationRow(monomial, coeficents) {
  return Array.from(coeficents, (coeficent) => coeficent * monomial);
}

module.exports = multiplicationTable;
