const { calculateInterest } = require('../script');

describe('Interest Rate Calculator', () => {
    it('should calculate interest correctly for standard values', () => {
        const principal = 1000;
        const rate = 5;
        const years = 2;
        const expectedResult = 100; // (1000 * 5 * 2) / 100
        expect(calculateInterest(principal, rate, years)).toBe(expectedResult);
    });

    it('should calculate interest correctly for decimal rates', () => {
        const principal = 5000;
        const rate = 3.5;
        const years = 4;
        const expectedResult = 700; // (5000 * 3.5 * 4) / 100
        expect(calculateInterest(principal, rate, years)).toBe(expectedResult);
    });
});
