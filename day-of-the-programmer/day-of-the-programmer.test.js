const dayOfProgrammer = require('./day-of-the-programmer');

describe('day-of-the-programmer', () => {
    test('test case 1', () => {
        expect(dayOfProgrammer(2017)).toBe('13.09.2017');
    });
    
    test('test case 2', () => {
        expect(dayOfProgrammer(2016)).toBe('12.09.2016');
    });

    test('test case 3', () => {
        expect(dayOfProgrammer(1800)).toBe('12.09.1800');
    });

    test('test case 4', () => {
        expect(dayOfProgrammer(1918)).toBe('26.09.1918');
    });
});