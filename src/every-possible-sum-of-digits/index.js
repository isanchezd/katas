const sum = (augend, addend) =>  augend + addend
const getDigits = num => String(num).split("").map(Number)

const digits = number => {
    const digits = getDigits(number)
    const result = []

    for(let i = 0; i < digits.length; i++) {
        for(let j = i + 1; j < digits.length; j++) {
            result.push(sum(digits[i] , digits[j]))
        }
    }

    return result
}

module.exports = digits