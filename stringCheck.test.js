const stringCheck = require('./stringCheck.js');

test('Check String Length', () => {
  expect(stringCheck.length('boy')).toBe(3);
});

test('Check if String Length is between 1 and 10', () => {
  expect(stringCheck.range('boy')).toBeTruthy();
});

test('Check if String is Reversed', () => {
  expect(stringCheck.reverse('boy')).toEqual('yob');
});
