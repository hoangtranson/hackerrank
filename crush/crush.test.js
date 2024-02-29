const arrayManipulation = require('./crush');

describe('crush', () => {
    test('test case 1', () => {
        expect(arrayManipulation(5, [
            [1, 2, 100],
            [2, 5, 100],
            [3, 4, 100]
        ])).toBe(200);
    });
    
    test('test case 2', () => {
        expect(arrayManipulation(10, [
            [1, 5, 3],
            [4, 8, 7],
            [6, 9, 1]
        ])).toBe(10);
    });

    test('test case 3', () => {
        expect(arrayManipulation(10, [
            [1, 5, 3],
            [4, 8, 7],
            [6, 9, 1],
            [2, 7, 8]
        ])).toBe(18);
    });
});