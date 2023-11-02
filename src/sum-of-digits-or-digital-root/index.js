function digitalRoot(number) {
  const digits = number.toString().split("").map(Number);
  const newNumber = digits.reduce(
    (total, currentDigit) => (total += currentDigit)
  );

  return digits.length > 1 ? digitalRoot(newNumber) : newNumber;
}

/* 

First solution

function digitalRoot(number) {
  let digits = number.toString().split("").map(Number);
  let result = 0;

  while (digits.length > 1) {
    const number = digits.reduce(
      (accum, currentValue) => (accum += currentValue)
    );
    digits = number.toString().split("").map(Number);
  }

  result = Number(digits.join(""));

  return result;
} 

*/

export default digitalRoot;
