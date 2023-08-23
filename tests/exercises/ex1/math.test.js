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

    });

});


describe('factorial', () => {
    test('should return 6 when arguemnt is 3', () => {

    });

    test('should return 0 when arguemnt is 1', () => {

    });
});

describe('multiplyOneHaveBePositiveAndNonZero', () => {
    test('should return positive value when both are positivies', () => {

    });

    test('should return error when one value is 0', () => {

    });

    test('should return error when both value are negative', () => {

    });
});
