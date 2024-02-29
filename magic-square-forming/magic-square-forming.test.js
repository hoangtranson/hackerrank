const formingMagicSquare = require('./magic-square-forming');

describe('magic-square-forming', () => {
    test('test case 1', () => {
        expect(formingMagicSquare([
            [5, 3, 4],
            [1, 5, 8],
            [6, 4, 2]
        ])).toBe(7);
    });
    
    test('test case 2', () => {
        expect(formingMagicSquare([
            [4, 9, 2],
            [3, 5, 7],
            [8, 1, 5]
        ])).toBe(1);
    });

    test('test case 3', () => {
        expect(formingMagicSquare([
            [4, 8, 2],
            [4, 5, 7],
            [6, 1, 6]
        ])).toBe(4);
    });
});