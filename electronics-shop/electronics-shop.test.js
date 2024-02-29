const getMoneySpent = require('./electronics-shop');

describe('electronics-shop', () => {
    test('test case 1', () => {
        expect(getMoneySpent([3, 1], [5, 2, 8], 10)).toBe(9);
    });
    
    test('test case 2', () => {
        expect(getMoneySpent([4], [5], 5)).toBe(-1);
    });

    test('test case 3', () => {
        expect(getMoneySpent([40, 50, 60], [5, 8, 12], 60)).toBe(58);
    });
});