const isOneDigit = (num) => num > 9;

const splitNumber = (num) => num.toString().split("");

const reduceMultiplication = (previousValue, currentValue) =>
  previousValue * currentValue;

const persistence = (num) => {
  let counter = 0;

  if (isOneDigit(num)) {
    let splittedNumber = splitNumber(num);

    while (splittedNumber.length > 1) {
      counter++;
      splittedNumber = splitNumber(
        splittedNumber.reduce(reduceMultiplication, 1)
      );
    }
  }

  return counter;
};

module.exports = persistence;
