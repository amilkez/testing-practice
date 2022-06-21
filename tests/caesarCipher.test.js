import { caesarCipher } from '../utils/caesarCipher';

describe('Caesar Cipher', () => {
  it('Takes a string and returns it with each character shifted 1 place', () => {
    expect(caesarCipher('abczefyzz', 1)).toMatch(/bcdafgzaa/);
  });
  it('Takes a string and returns it with each character shifted 5 places', () => {
    expect(caesarCipher('abczefyzz', 5)).toMatch(/fghejkdee/);
  });
});
