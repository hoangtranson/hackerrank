const pickingNumbers = require('./picking-numbers');

describe('pickingNumbers()', () => {
    test('Test case 1', () => {
        const a = [4, 6, 5, 3, 3, 1];
        expect(pickingNumbers(a)).toBe(3);
    });
    
    test('Test case 2', () => {
        const a = [1, 2, 2, 3, 1, 2];
        expect(pickingNumbers(a)).toBe(5);
    });
});