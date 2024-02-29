const climbingLeaderboard = require('./climbing-the-leaderboard');

describe('climbingLeaderboard()', () => {
    test('Test case 1', () => {
        const ranked = [100, 90, 90, 80, 75, 60];
        const player = [50, 65, 77, 90, 102];
        expect(climbingLeaderboard(ranked, player)).toEqual([6, 5, 4, 2, 1]);
    });

    test('Test case 2', () => {
        const ranked = [100, 100, 50, 40, 40, 20, 10];
        const player = [5, 25, 50, 120];
        expect(climbingLeaderboard(ranked, player)).toEqual([6, 4, 2, 1]);
    });
});