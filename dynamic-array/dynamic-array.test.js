const dynamicArray = require('./dynamic-array');

describe('dynamic-array', () => {
    test('test case 1', () => {
        expect(dynamicArray(2, [
            [1, 0, 5],
            [1, 1, 7],
            [1, 0, 3],
            [2, 1, 0],
            [2, 1, 1]
        ])).toEqual([7, 3]);
    });
    
    test('test case 2', () => {
        expect(dynamicArray(2, [
            [1, 0, 5],
            [1, 1, 7],
            [1, 0, 3],
            [2, 0, 0],
            [2, 0, 1]
        ])).toEqual([5, 7]);
    });

    test('test case 3', () => {
        expect(dynamicArray(2, [
            [1, 0, 5],
            [1, 1, 7],
            [1, 0, 3],
            [2, 0, 0],
            [2, 1, 1]
        ])).toEqual([5, 3]);
    });
});