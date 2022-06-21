import { capitalize } from '../utils/capitalize';

describe('Capitalize', () => {
  it('Capitalizes the first letter in a string', () => {
    expect(capitalize('lara')).toMatch(/Lara/);
  });
  it('Capitalizes the first letter in a serie of strings', () => {
    expect(capitalize('lara croft is an insane explorer')).toMatch(
      /Lara croft is an insane explorer/,
    );
  });
});
