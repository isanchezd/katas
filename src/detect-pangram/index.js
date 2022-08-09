const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'
const cleanStringSpaces = str => str.split(' ').join('')

function isPangram(string){
  const alphabetChars = ALPHABET.split('')
  const stringWithOutSpacesAndLowercase = cleanStringSpaces(string).toLowerCase()
  const isCharInTheAlphabetChars = char => stringWithOutSpacesAndLowercase.includes(char)
	const result = alphabetChars.every(isCharInTheAlphabetChars);

  return result
}

module.exports = isPangram