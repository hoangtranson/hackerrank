const pageCount = require('./drawing-book');

describe('drawing-book', () => {
    test('test case 1', () => {
        expect(pageCount(6, 2)).toBe(1);
    });
    
    test('test case 2', () => {
        expect(pageCount(5, 4)).toBe(0);
    });

    test('test case 3', () => {
        expect(pageCount(6, 5)).toBe(1);
    });
});