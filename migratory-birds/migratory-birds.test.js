const migratoryBirds = require('./migratory-birds');

describe('migratory-birds', () => {
    test('test case 1', () => {
        expect(migratoryBirds([1, 4, 4, 4, 5, 3])).toBe(4);
    });
    
    test('test case 2', () => {
        expect(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4])).toBe(3);
    });

    test('test case 3', () => {
        expect(migratoryBirds([1, 2, 3, 4, 5])).toBe(1);
    });
});