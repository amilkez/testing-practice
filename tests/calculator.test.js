import { calculator } from '../utils/calculator';

describe('Calculate operations', () => {
  it('Adds two numbers', () => {
    expect(calculator.add(2, 2)).toBe(4);
  });

  it('Substracts a number', () => {
    expect(calculator.substract(2, 2)).toBe(0);
  });

  it('Multiplies two numbers', () => {
    expect(calculator.multiply(2, 3)).toBe(6);
  });

  it('Divides two numbers', () => {
    expect(calculator.divide(2, 2)).toBe(1);
  });
});
