const reverseString = (str) => {
  const newStr = str.split('').reverse().join('');
  return newStr;
};

export { reverseString };
