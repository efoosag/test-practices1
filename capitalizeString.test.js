const capitalizeString = require('./capitalizeString.js');

test('Capitalize first letter', () => {
  expect(capitalizeString('tunde')).toEqual('T');
});
