import { analyzeArray } from '../utils/analizeArray';

it('Returns an object with properties: average, min, max and length', () => {
  const object = analyzeArray([1, 8, 3, 4, 2, 6]);

  expect(object).toEqual({
    min: 1,
    max: 8,
    average: 4,
    length: 6,
  });
});
