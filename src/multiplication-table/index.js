function multiplicationTable(size) {
  const table = Array(size).fill([]);

  return table.map((item, index) => getMultiplicationRow(index + 1, size));
}

function getBaseNumbers(size) {
  return Array.from({ length: size }, (value, index) => index + 1);
}

function getMultiplicationRow(operator, size) {
  return Array.from(getBaseNumbers(size), (digit) => digit * operator);
}

module.exports = multiplicationTable;
