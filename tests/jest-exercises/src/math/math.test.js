import { factorial } from './math';

describe('factorial', () => {
    test('should return 1 for factorial from 1', () => {
        const result = factorial(1);

        expect(result).toBe(1);
    });

    test('should return correct value for factorial from 3', () => {
        const result = factorial(3);

        expect(result).toBe(6);
    });

    test('should return correct value for factorial from 4', () => {
        const result = factorial(4);

        expect(result).toBe(24);
    });

    const testCases = [
        [1, 1],
        [2, 2],
        [3, 6],
        [4, 24],
        [5, 120],
        [6, 720],
    ];

    // if we'd like to run one test for multiple scenarios
    // it won't run one test - but multiple!
    test.each(testCases)(
        'for factorial from %i, should return %i',
        (value, expected) => {
            expect(factorial(value)).toBe(expected);
        }
    );

    [
        {
            value: 1,
            expected: 1,
        },
        {
            value: 2,
            expected: 2,
        },
        {
            value: 3,
            expected: 6,
        },
        {
            value: 4,
            expected: 24,
        },
        {
            value: 5,
            expected: 120,
        },
    ].forEach(({ value, expected }) => {
        test(`should return ${expected} for factorial from ${value}`, () => {
            expect(factorial(value)).toBe(expected);
        });
    });
});
