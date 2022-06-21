const caesarCipher = (str, offset) => {
  // * c(x) = (x + k)
  // ? after applying the function (x + k),

  // * translate all characters to numbers
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  // * add (k) to the current number

  const stringIndexShifted = str.split('').map((letter) => {
    const currentIndex = alphabet.indexOf(letter) + offset;
    const maxIndex = alphabet.length - 1;
    if (currentIndex > maxIndex) {
      return 0 + (currentIndex - maxIndex) - 1;
    } else {
      return currentIndex;
    }
  });

  // * the character (x) must be translated into a character again
  let newStr = '';
  stringIndexShifted.forEach((index) => (newStr += alphabet[index]));
  return newStr;
};

export { caesarCipher };
