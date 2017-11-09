const assert = require('chai').assert;
const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('Project-2 Functions', () => {
  describe('isPrime', () => {
    it('should be a function', () => {
      const isPrime = funcs.isPrime;
      assert.typeOf(isPrime, 'function');
    });
    it('should return true when passed 3 in the argument', () => {
      const isPrime = funcs.isPrime;
      assert.equal(isPrime(3), true);
    });
    it('should return false when passed 1 in the argument', () => {
      const isPrime = funcs.isPrime;
      assert.equal(isPrime(1), false);
    });
    it('should return false when passed 0 in the argument', () => {
      const isPrime = funcs.isPrime;
      assert.equal(isPrime(0), false);
    });
  });
  describe('returnLast', () => {
    it('should be a function', () => {
      const returnLast = funcs.returnLast;
      assert.typeOf(returnLast, 'function');
    });
    it('should return 3 when passed [1,2,5,3] in the argument', () => {
      const returnLast = funcs.returnLast;
      assert.equal(returnLast([1, 2, 5, 3]), 3);
    });
  });
  describe('getArrayLength', () => {
    it('should be a function', () => {
      const getArrayLength = funcs.getArrayLength;
      assert.typeOf(getArrayLength, 'function');
    });
    it('should return 3 when passed [3,2,4] in the argument', () => {
      const getArrayLength = funcs.getArrayLength;
      assert.equal(getArrayLength([3, 2, 4]), 3);
    });
  });
  describe('wordsToSentence', () => {
    it('should be a function', () => {
      const wordsToSentence = funcs.wordsToSentence;
      assert.typeOf(wordsToSentence, 'function');
    });
    it('should return "I eat fish" when passed ["I","eat","fish"] in the argument', () => {
      const wordsToSentence = funcs.wordsToSentence;
      assert.equal(wordsToSentence(['I', 'eat', 'fish']), 'I eat fish');
    });
  });
});
