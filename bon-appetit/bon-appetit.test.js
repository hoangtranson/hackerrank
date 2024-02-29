const bonAppetit = require('./bon-appetit');

describe('bon-appetit', () => {
    test('test case 1', () => {
        expect(bonAppetit([3, 10, 2, 9], 1, 12)).toBe('5');
    });
    
    test('test case 2', () => {
        expect(bonAppetit([3, 10, 2, 9], 1, 7)).toBe('Bon Appetit');
    });

    test('test case 3', () => {
        expect(bonAppetit([3, 10, 2, 9], 1, 10)).toBe('3');
    });
});