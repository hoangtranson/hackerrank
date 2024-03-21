const viralAdvertising = require('./strange-advertising');

describe('viralAdvertising()', () => {
    test('Test case 1', () => {
        expect(viralAdvertising(3)).toBe(9);
    });

    test('Test case 2', () => {
        expect(viralAdvertising(5)).toBe(24);
    });

    test('Test case 3', () => {
        expect(viralAdvertising(4)).toBe(15);
    });

    test('Test case 4', () => {
        expect(viralAdvertising(2)).toBe(5);
    });

    test('Test case 5', () => {
        expect(viralAdvertising(1)).toBe(2);
    });
});