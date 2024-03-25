const saveThePrisoner = require('./save-the-prisoner');

describe('saveThePrisoner', () => {
    test('Test case 1', () => {
        expect(saveThePrisoner(5, 2, 1)).toBe(2);
    });

    test('Test case 2', () => {
        expect(saveThePrisoner(5, 2, 2)).toBe(3);
    });

    test('Test case 3', () => {
        expect(saveThePrisoner(7, 19, 2)).toBe(6);
    });

    test('Test case 4', () => {
        expect(saveThePrisoner(3, 7, 3)).toBe(3);
    });

    test('Test case 5', () => {
        expect(saveThePrisoner(352926151, 380324688, 94730870)).toBe(122129406);
    });

    test('Test case 6', () => {
        expect(saveThePrisoner(94431605, 679262176, 5284458)).toBe(23525398);
    });

    test('Test case 7', () => {
        expect(saveThePrisoner(208526924, 756265725, 150817879)).toBe(72975907);
    });
});