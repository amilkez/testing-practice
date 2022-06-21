const capitalize = (str) => {
  const arrOfLetters = str.split('');
  const firstLetter = arrOfLetters.shift().toUpperCase();
  arrOfLetters.unshift(firstLetter);
  return arrOfLetters.join('');
};

export { capitalize };
