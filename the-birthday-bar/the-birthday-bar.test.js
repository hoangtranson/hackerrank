const birthday = require('./the-birthday-bar');

test('test case 0', () => {
    expect(birthday([1, 2, 1, 3, 2], 3, 2)).toBe(2);
});