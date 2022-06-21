import { reverseString } from '../utils/reverseString';

it('Reverse a string', () => {
  expect(reverseString('lara')).toMatch(/aral/);
});
