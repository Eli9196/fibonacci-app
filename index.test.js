const { fibonacci } = require('./index');
//const { test } = require('jest');

// Test cases for the fibonacci function
describe('Fibonacci function', () => {
    it('Generates correct sequence for input 5', () => {
        const result1 = fibonacci(5);
        expect(result1).toEqual([0, 1, 1, 2, 3]);
    });

    it('Generates correct sequence for input 10', () => {
        const result2 = fibonacci(10);
        expect(result2).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    });

    it('Generates correct sequence for input 3', () => {
        const result3 = fibonacci(4);
        expect(result3).toEqual([0, 1, 1, 2]);
    });
});






