const rotateLeft = require('./array-left-rotation');

describe('array-left-rotation', () => {
    test('test case 1', () => {
        expect(rotateLeft(4, [1, 2, 3, 4, 5])).toEqual([5, 1, 2, 3, 4]);
    });
    
    test('test case 2', () => {
        expect(rotateLeft(1, [1, 2, 3, 4, 5])).toEqual([2, 3, 4, 5, 1]);
    });

    test('test case 3', () => {
        expect(rotateLeft(0, [1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });
});