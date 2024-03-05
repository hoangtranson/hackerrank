const utopianTree = require('./utopian-tree');

describe('utopianTree()', () => {
    test('Test case 1', () => {
        expect(utopianTree(0)).toBe(1);
    });

    test('Test case 2', () => {
        expect(utopianTree(1)).toBe(2);
    });

    test('Test case 3', () => {
        expect(utopianTree(4)).toBe(7);
    });

    test('Test case 4', () => {
        expect(utopianTree(5)).toBe(14);
    });
});