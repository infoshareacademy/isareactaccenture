//  Uzupełnij pozostałe testy


describe('add', () => {
    test('should return positive if both are positive', () => {
        const actual = add(1, 2);

        if (actual === 3) {
            return;
        } else {
            throw new Error('Assertion failed!, Should be 3');
        }
    });

    test('should return negative if both are negative', () => {
        const actual = add(-1, -2)

        if (actual === -3) {
            return
        } else {
            throw new Error('Assertion failed!, Should be -3');
        }
    });

});


describe('factorial', () => {
    test('should return 6 when arguemnt is 3', () => {
        const actual = factorial(3)

        if (actual === 6) {
            return
        } else {
            throw new Error('Assertion failed!, Should be 6');
        }
    });

    test('should return 1 when arguemnt is 0', () => {
        const actual = factorial(0)

        if (actual === 1) {
            return
        } else {
            throw new Error('Assertion failed!, Should be 1');
        }

    });
});

describe('multiplyOneHaveBePositiveAndNonZero', () => {
    test('should return positive value when both are positivies', () => {
        const actual = multiplyOneHaveBePositiveAndNonZero(3, 3)

        if (actual === 9) {
            return
        } else {
            throw new Error('Assertion failed!, Should be 9');
        }

    });

    test('should return error when one value is 0', () => {
        try {
            multiplyOneHaveBePositiveAndNonZero(3, 0)
        } catch (e) {
            if (e.message === 'Zero not allowed') {
                return;
            } else {
                throw new Error('Assertion failed!, Should be Error: Zero not allowed');
            }
        }
    });

    test('should return error when both value are negative', () => {
        try {
            multiplyOneHaveBePositiveAndNonZero(-3, -3)
        } catch (e) {
            if (e.message === 'Both numbers have to be positive.') {
                return;
            } else {
                throw new Error('Assertion failed!, Should be Error: Both numbers have to be positive.');
            }
        }
    });
});
