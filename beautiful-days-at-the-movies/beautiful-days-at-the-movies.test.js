const beautifulDays = require('./beautiful-days-at-the-movies');

describe('beautifulDays()', () => {
    test('Test case 1', () => {
        expect(beautifulDays(20, 23, 6)).toBe(2);
    });

    test('Test case 2', () => {
        expect(beautifulDays(13, 45, 3)).toBe(33);
    });
});