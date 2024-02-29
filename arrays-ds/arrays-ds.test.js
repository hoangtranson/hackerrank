const reverseArray = require('./arrays-ds');

describe('arrays-ds', () => {
    test('test case 1', () => {
        expect(reverseArray([1, 4, 3, 2])).toEqual([2, 3, 4, 1]);
    });
    
    test('test case 2', () => {
        expect(reverseArray([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
    });

    test('test case 3', () => {
        expect(reverseArray([1, 2, 3, 4, 5, 6])).toEqual([6, 5, 4, 3, 2, 1]);
    });
});