// const assert = require('chai').assert;
// const funcs = require('../src/project-4.js');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const helpers = require('../src/project-4.js');

const expect = chai.expect;

chai.use(sinonChai);

describe('project 4 specs', function() {
	describe('multiplyArguments function', function() {
		it('should return 0 when no arguments are passed', function() {
			const expected = 0;

			const actual = helpers.multiplyArguments();

			expect(actual).to.equal(expected);
		});

		it('should return the argument when only one argument is passed', function() {
			const expected = 2;

			const actual = helpers.multiplyArguments(2);

			expect(actual).to.equal(expected);
		});

		it('should return the product of all arguments passed', function() {
			const expected = 24;

			const actual = helpers.multiplyArguments(2, 4, 3);

			expect(actual).to.equal(expected);
		});
	});

	describe('invokeCallback function', function() {
		it('should invoke the callback exactly one time', function() {
			const spy = sinon.spy();

			helpers.invokeCallback(spy);

			expect(spy).to.have.been.calledOnce;
		});
	});

	describe('sumArray function', function() {
		it('should invoke the callback exactly one time', function() {
			const spy = sinon.spy();
			const numbers = [1, 2, 3];

			helpers.sumArray(numbers, spy);

			expect(spy).to.have.been.calledOnce;
		});

		it('should calculate the sum of the elements of the array', function() {
			const spy = sinon.spy();
			const numbers = [2, 2, 3];
			const expected = 7;

			helpers.sumArray(numbers, spy);

			expect(spy).to.have.been.calledWith(expected);
		});
	});

	describe('forEach function', function() {
		it('should invoke the callback for each element in array', function() {
			const spy = sinon.spy();
			const numbers = [1, 2, 3, 4, 5];

			helpers.forEach(numbers, spy);

			expect(spy.callCount).to.equal(5);
		});

		it('should invoke the callback passing each element of the array', function() {
			const spy = sinon.spy();
			const numbers = [2, 4, 6];

			helpers.forEach(numbers, spy);

			expect(spy.getCall(0)).to.have.been.calledWith(2);
			expect(spy.getCall(1)).to.have.been.calledWith(4);
			expect(spy.getCall(2)).to.have.been.calledWith(6);
		});
	});
});