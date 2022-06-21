const analyzeArray = (arr) => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;
  //   const average =
  let total = 0;
  for (const num of arr) {
    total += num;
  }

  const average = total / length;

  return { min, max, length, average };
};

export { analyzeArray };
