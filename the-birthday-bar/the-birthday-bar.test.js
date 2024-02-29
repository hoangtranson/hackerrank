const birthday = require('./the-birthday-bar');

describe('the-birthday-bar', () => {
    test('test case 1', () => {
        expect(birthday([1, 2, 1, 3, 2], 3, 2)).toBe(2);
    });
    
    test('test case 2', () => {
        expect(birthday([1, 1, 1, 1, 1, 1], 3, 2)).toBe(0);
    });

    test('test case 3', () => {
        expect(birthday([4], 4, 1)).toBe(1);
    });
});
