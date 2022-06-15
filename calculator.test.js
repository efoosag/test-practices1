const calculator = require('./calculator.js');

describe('Addition', () => {
  test('Result is not null', () => {
    expect(calculator.add(2, 3)).not.toBe(null);
  });

  test('Result is not null', () => {
    expect(calculator.add(2, 3)).not.toBe(undefined);
  });

  test('Result to be 5', () => {
    expect(calculator.add(2, 3)).toBe(5);
  });
});

describe('Substraction', () => {
  test('Result is not null', () => {
    expect(calculator.substract(2, 3)).not.toBe(null);
  });

  test('Result is not null', () => {
    expect(calculator.substract(2, 3)).not.toBe(undefined);
  });

  test('Result to be -1', () => {
    expect(calculator.substract(2, 3)).toBe(-1);
  });
});

describe('Division', () => {
  test('Result is not null', () => {
    expect(calculator.divide(3, 3)).not.toBe(null);
  });

  test('Result is not null', () => {
    expect(calculator.divide(2, 3)).not.toBe(undefined);
  });

  test('Result to be 10', () => {
    expect(calculator.divide(30, 3)).toBe(10);
  });
});

describe('Multiplication', () => {
  test('Result is not null', () => {
    expect(calculator.multiply(2, 3)).not.toBe(null);
  });

  test('Result is not null', () => {
    expect(calculator.multiply(2, 3)).not.toBe(undefined);
  });

  test('Result to be 6', () => {
    expect(calculator.multiply(2, 3)).toBe(6);
  });
});
