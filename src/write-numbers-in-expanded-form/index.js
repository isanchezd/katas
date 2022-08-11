function expandedForm(num) {
  const numInExpandedForm = num
    .toString()
    .split("")
    .reverse()
    .map((unit, index) =>
      unit != 0 ? geNumberInExpandedForm(unit, index) : null
    )
    .filter((unit) => unit !== null)
    .reverse()
    .reduce((previousUnit, unit) => `${previousUnit} + ${unit}`);

  return numInExpandedForm;
}

const geNumberInExpandedForm = (number, units) => `${number}${getZeros(units)}`;

function getZeros(units) {
  let zeros = "";

  for (let i = 1; i <= units; i++) {
    zeros += "0";
  }

  return zeros;
}

module.exports = expandedForm;
