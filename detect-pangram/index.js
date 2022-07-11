
// First solution
/* const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'
const cleanStringSpaces = str => str.split(' ').join('')

function isPangram(str) {
  let alphabetChars = ALPHABET.split('')
  // FIXME: Names soooo long
  const stringWithOutSpacesAndLowercase = cleanStringSpaces(str).toLowerCase()
  const isCharInTheAlphabetChars = char => alphabetChars.includes(char)
    
  for(let i = 0; i < stringWithOutSpacesAndLowercase.length; i++) {
    const currentChar =  stringWithOutSpacesAndLowercase[i]
    
    if(isCharInTheAlphabetChars(currentChar)) {
       alphabetChars = alphabetChars.filter(char => char !== currentChar)
    }
  }
  
  return alphabetChars.length === 0 
} */


// Second solution
// Final solution
const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'
const cleanStringSpaces = str => str.split(' ').join('')

function isPangram(string){
  const alphabetChars = ALPHABET.split('')
  const stringWithOutSpacesAndLowercase = cleanStringSpaces(string).toLowerCase()
  const isCharInTheAlphabetChars = char => stringWithOutSpacesAndLowercase.includes(char)
	const result = alphabetChars.every(isCharInTheAlphabetChars);

  return result
}