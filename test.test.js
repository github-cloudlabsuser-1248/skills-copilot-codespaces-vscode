const Calculator = require('./test.js');

// FILE: test.test.js


describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('adds two numbers correctly', () => {
        expect(calculator.add(1, 2)).toBe(3);
        expect(calculator.add(-1, -1)).toBe(-2);
        expect(calculator.add(0, 0)).toBe(0);
    });

    test('subtracts two numbers correctly', () => {
        expect(calculator.subtract(5, 3)).toBe(2);
        expect(calculator.subtract(-1, -1)).toBe(0);
        expect(calculator.subtract(0, 5)).toBe(-5);
    });

    test('multiplies two numbers correctly', () => {
        expect(calculator.multiply(2, 3)).toBe(6);
        expect(calculator.multiply(-1, -1)).toBe(1);
        expect(calculator.multiply(0, 5)).toBe(0);
    });

    test('divides two numbers correctly', () => {
        expect(calculator.divide(6, 3)).toBe(2);
        expect(calculator.divide(-4, -2)).toBe(2);
        expect(calculator.divide(0, 5)).toBe(0);
    });

    test('returns error message when dividing by zero', () => {
        expect(calculator.divide(5, 0)).toBe("Error! Division by zero.");
    });
});