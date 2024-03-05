const angryProfessor = require('./angry-professor');

describe('angryProfessor()', () => {
    test('Test case 1', () => {
        expect(angryProfessor(3, [-1, -3, 4, 2])).toBe('YES');
    });

    test('Test case 2', () => {
        expect(angryProfessor(2, [0, -1, 2, 1])).toBe('NO');
    });
    
    test('Test case 3', () => {
        expect(angryProfessor(4, [-93, -86, 49, -62, -90, -63, 40, 72, 11, 67])).toBe('NO');
    });

    test('Test case 4', () => {
        expect(angryProfessor(10, [23, -35, -2, 58, -67, -56, -42, -73, -19, 37])).toBe('YES');
    });

    test('Test case 5', () => {
        expect(angryProfessor(9, [13, 91, 56, -62, 96, -5, -84, -36, -46, -13])).toBe('YES');
    });

    test('Test case 6', () => {
        expect(angryProfessor(8, [45, 67, 64, -50, -8, 78, 84, -51, 99, 60])).toBe('YES');
    });
});