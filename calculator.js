const calculator = {
  add: (a, b) => {
    let result = 0;
    if (a !== null && b !== null) {
      result = a + b;
    }
    return result;
  },
  substract: (a, b) => {
    let result = 0;
    if (a !== null && b !== null) {
      result = a - b;
    }
    return result;
  },
  divide: (a, b) => {
    let result = 0;
    if (a !== null && b !== null) {
      result = a / b;
    }
    return result;
  },
  multiply: (a, b) => {
    let result = 0;
    if (a !== null && b !== null) {
      result = a * b;
    }
    return result;
  },
};

module.exports = calculator;
