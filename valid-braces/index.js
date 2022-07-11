const OPEN_BRACES = ["{", "(", "["]
const CORRELATION_BRACES = {
  '}': '{',
  ')': '(',
  ']': '[',
}

const isOpenBrace = (brace) => {
  return OPEN_BRACES.includes(brace);
}

const isCorrelationBraces = (brace, lastOpenBrace) => {
  return lastOpenBrace !== CORRELATION_BRACES[brace]
}

const validBraces = (braces) => {
  const stack = []

  for (let i = 0; i < braces.length; i += 1) {
    const brace = braces[i]

    if (isOpenBrace(brace)) {
      stack.push(brace)
    } else if(isCorrelationBraces(brace, stack.pop())){
      return false;
    }
  }

  return stack.length === 0
}

module.exports = validBraces;