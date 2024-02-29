const catAndMouse = require('./cats-and-a-mouse');

describe('cats-and-a-mouse', () => {
    test('test case 1', () => {
        expect(catAndMouse(1, 2, 3)).toBe('Cat B');
    });
    
    test('test case 2', () => {
        expect(catAndMouse(1, 3, 2)).toBe('Mouse C');
    });

    test('test case 3', () => {
        expect(catAndMouse(1, 1, 1)).toBe('Mouse C');
    });
});