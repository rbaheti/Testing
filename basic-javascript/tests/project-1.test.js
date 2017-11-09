const assert = require('chai').assert;
const funcs = require('../src/project-1');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test to see if the expected return output is of a specified type, as well as the correct outcome.

describe('Project-1 Functions', () => {
  describe('`multiplyByTen`', () => {
    it('should be a function', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert.typeOf(multiplyByTen, 'function');
    });
    // begin here
    it('should return 20 when passed 2 in the argument', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert.equal(multiplyByTen(2), 20);
    });
  });
  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it('should return 10 when passed 15 in the argument', () => {
      const subtractFive = funcs.subtractFive;
      assert.equal(subtractFive(15), 10);
    });
  });
  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
    it('should return true when passed "abc" and "cdf"in the argument', () => {
      const areSameLength = funcs.areSameLength;
      assert.equal(areSameLength('abc', 'cdf'), true);
    });
  });
  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });
    it('should return true when passed 3 and 3 in the argument', () => {
      const areEqual = funcs.areEqual;
      assert.equal(areEqual(3, 3), true);
    });
  });
  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should return true when passed 3 in the argument', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.equal(lessThanNinety(3), true);
    });
    it('should return false when passed 93 in the argument', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.equal(lessThanNinety(93), false);
    });
  });
  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should return true when passed 52 in the argument', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.equal(greaterThanFifty(52), true);
    });
    it('should return false when passed 5 in the argument', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.equal(greaterThanFifty(5), false);
    });
  });
  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });
    it('should return 5 when passed 2 and 3 in the argument', () => {
      const add = funcs.add;
      assert.equal(add(2, 3), 5);
    });
  });
  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it('should return 2 when passed 4 and 2 in the argument', () => {
      const subtract = funcs.subtract;
      assert.equal(subtract(4, 2), 2);
    });
    it('should return -1 when passed 2 and 3 in the argument', () => {
      const subtract = funcs.subtract;
      assert.equal(subtract(2, 3), -1);
    });
  });
  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });
    it('should return 2 when passed 4 and 2 in the argument', () => {
      const divide = funcs.divide;
      assert.equal(divide(4, 2), 2);
    });
    it('should return 0 when passed 0 and 2 in the argument', () => {
      const divide = funcs.divide;
      assert.equal(divide(0, 2), 0);
    });
    it('should return NaN when passed 2 and 0 in the argument', () => {
      const divide = funcs.divide;
      assert.equal(divide(2, 0), Infinity);
    });
  });
  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function');
    });
    it('should return 9 when passed 3 and 3 in the argument', () => {
      const multiply = funcs.multiply;
      assert.equal(multiply(3, 3), 9);
    });
    it('should return 3 when passed 3 and 1 in the argument', () => {
      const multiply = funcs.multiply;
      assert.equal(multiply(3, 1), 3);
    });
    it('should return 0 when passed 3 and 0 in the argument', () => {
      const multiply = funcs.multiply;
      assert.equal(multiply(3, 0), 0);
    });
  });
  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
    it('should return 0 when passed 10 and 5 in the argument', () => {
      const getRemainder = funcs.getRemainder;
      assert.equal(getRemainder(10, 5), 0);
    });
    it('should return 1 when passed 10 and 9 in the argument', () => {
      const getRemainder = funcs.getRemainder;
      assert.equal(getRemainder(10, 9), 1);
    });
  });
  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
    it('should return true when passed 10 in the argument', () => {
      const isEven = funcs.isEven;
      assert.equal(isEven(10), true);
    });
    it('should return false when passed 5 in the argument', () => {
      const isEven = funcs.isEven;
      assert.equal(isEven(5), false);
    });
  });
  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
    it('should return true when passed 5 in the argument', () => {
      const isOdd = funcs.isOdd;
      assert.equal(isOdd(5), true);
    });
    it('should return false when passed 6 in the argument', () => {
      const isOdd = funcs.isOdd;
      assert.equal(isOdd(6), false);
    });
  });

  describe('square', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
    });

    it('should return 9 when passed 3 in the argument', () => {
      const square = funcs.square;
      assert.equal(square(3), 9);
    });
  });
  describe('cube', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'function');
    });
    it('should return 27 when passed 3 in the argument', () => {
      const cube = funcs.cube;
      assert.equal(cube(3), 27);
    });
  });

  describe('raiseToPower', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
    it('should return 4 when passed 2 and 2 in the argument', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.equal(raiseToPower(2, 2), 4);
    });
  });

  describe('roundNumber', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
    it('should return 21 when passed 20.5 in the argument', () => {
      const roundNumber = funcs.roundNumber;
      assert.equal(roundNumber(20.5), 21);
    });
  });

  describe('roundUp', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
    it('should return 21 when passed 20.1 in the argument', () => {
      const roundUp = funcs.roundUp;
      assert.equal(roundUp(20.1), 21);
    });
  });

  describe('addExclamationPoint', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function');
    });
    it('should return "Hello World!" when passed "Hello World" in the argument', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.equal(addExclamationPoint('Hello World'), 'Hello World!');
    });
  });

  describe('combineNames', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function');
    });
    it('should return "Bob Pinto" when passed "Bob" and "Pinto" in the argument', () => {
      const combineNames = funcs.combineNames;
      assert.equal(combineNames('Bob', 'Pinto'), 'Bob Pinto');
    });
  });

  describe('getGreeting', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function');
    });
    it('should return "Hello Bob!" when passed "Bob" in the argument', () => {
      const getGreeting = funcs.getGreeting;
      assert.equal(getGreeting('Bob'), 'Hello Bob!');
    });
  });

  describe('getRectangleArea', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function');
    });
    it('should return 8 when passed 2 and 4 in the argument', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.equal(getRectangleArea(2, 4), 8);
    });
  });

  describe('getTriangleArea', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function');
    });
    it('should return 4 when passed 2 and 4 in the argument', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.equal(getTriangleArea(2, 4), 4);
    });
  });

  describe('getCircleArea', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function');
    });
    it('should return 28.274333882308138 when passed 3 in the argument', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.equal(getCircleArea(3), 28.274333882308138);
    });
  });

  describe('getRectangularPrismVolume', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
    it('should return 8 when passed 2, 2 and 2 in the argument', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.equal(getRectangularPrismVolume(2, 2, 2), 8);
    });
  });
});
