const assert = require('chai').assert;
const funcs = require('../src/project-3');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('Project-3 Functions', () => {
  describe('makeCat', () => {
    it('should be a function', () => {
      const makeCat = funcs.makeCat;
      assert.typeOf(makeCat, 'function');
    });
    it('should return 5 when passed "Jenny" and 5 in the argument', () => {
      const makeCat = funcs.makeCat;
      assert.equal(makeCat('Jenny', 5).age, 5);
    });
    it('should return "Meow!" string', () => {
      const makeCat = funcs.makeCat;
      assert.equal(makeCat('Jenny', 5).meow(), 'Meow!');
    });
  });
  describe('addProperty', () => {
    it('should be a function', () => {
      const addProperty = funcs.addProperty;
      assert.typeOf(addProperty, 'function');
    });
    it('should add the property to the object with a value of null', () => {
      var object = {
        x: 1,
        y: 2
      };
      var updatedObject = {
        x: 1,
        y: 2,
        z: null
      };
      const addProperty = funcs.addProperty;
      assert.deepEqual(addProperty(object, 'z'), updatedObject);
    });
  });
  describe('invokeMethod', () => {
    it('should be a function', () => {
      const invokeMethod = funcs.invokeMethod;
      assert.typeOf(invokeMethod, 'function');
    });
    it('should invoke the method on the object', () => {
      var object = {
        x: 0,
        incrementX: function() {
        this.x++;
        }
      };
      const invokeMethod = funcs.invokeMethod;
      invokeMethod(object, 'incrementX');
      assert.equal(object.x, 1);
    });
  });
});
