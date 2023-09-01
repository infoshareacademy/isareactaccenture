// Uzupełnij testy

describe('getNextOrderNumber', () => {
    test('should return correct first order number', () => {
        // arrange
        const service = new ClientService();
        const client = {
            orders: [],
        };

        const expected = 'ISA-#1';

        // act
        const actual = service.getNextOrderNumber(client);

        // assert
        if (actual === expected) {
            return;
        } else {
            throw new Error(
                `Assertion failed! Actual="${actual}", where should be "${expected}"`
            );
        }
    });

    test('should return correct n-th order number', () => {
        // arrange
        const service = new ClientService();
        const client = {
            orders: [100, 300, 500],
        };

        const expected = 'ISA-#4';

        // act
        const actual = service.getNextOrderNumber(client);

        // assert
        if (actual === expected) {
            return;
        } else {
            throw new Error(
                `Assertion failed! Actual="${actual}", where should be "${expected}"`
            );
        }
    });
});

describe('calculateDiscount', () => {
    test('should return 10% discount if orders exceeded 500', () => {
        // arrange
        const service = new ClientService();
        const client = {
            orders: [100, 401],
        };

        const expected = 0.1;

        // act
        const actual = service.calculateDiscount(client);

        // assert
        if (actual === expected) {
            return;
        } else {
            throw new Error(
                `Assertion failed! Actual="${actual}", where should be "${expected}"`
            );
        }
    });

    test('should return no discount if orders value is less then 500', () => {
        // arrange
        const service = new ClientService();
        const client = {
            orders: [100, 399],
        };

        const expected = 0;

        // act
        const actual = service.calculateDiscount(client);

        // assert
        if (actual === expected) {
            return;
        } else {
            throw new Error(
                `Assertion failed! Actual="${actual}", where should be "${expected}"`
            );
        }
    });

    test('should 15% discount if client is internal', () => {
        // arrange
        const service = new ClientService();
        const client = {
            type: 'INTERNAL',
            orders: [100, 399],
        };

        const expected = 0.15;

        // act
        const actual = service.calculateDiscount(client);

        // assert
        if (actual === expected) {
            return;
        } else {
            throw new Error(
                `Assertion failed! Actual="${actual}", where should be "${expected}"`
            );
        }
    });

    test('should return 25% discount if client is internal and spent more than 500', () => {
        // arrange
        const service = new ClientService();
        const client = {
            type: 'INTERNAL',
            orders: [100, 401],
        };

        const expected = 0.25;

        // act
        const actual = service.calculateDiscount(client);

        // assert
        if (actual === expected) {
            return;
        } else {
            throw new Error(
                `Assertion failed! Actual="${actual}", where should be "${expected}"`
            );
        }
    });
});

describe('calculateNewOrderValue', () => {
    test('should return value decreased by discount', () => {
        // arrange
        const service = new ClientService();
        const client = {
            orders: [100, 500],
        };

        const expected = 540;

        // act
        const actual = service.calculateNewOrderValue(client, 600);

        // assert
        if (actual === expected) {
            return;
        } else {
            throw new Error(
                `Assertion failed! Actual="${actual}", where should be "${expected}"`
            )
        }
    });

    test('should return value decreased by discount when cleint is INTERNAL', () => {
        // arrange
        const service = new ClientService();
        const client = {
            type: 'INTERNAL',
            orders: [100, 500],
        };

        const expected = 450;

        // act
        const actual = service.calculateNewOrderValue(client, 600);

        // assert
        if (actual === expected) {
            return;
        } else {
            throw new Error(
                `Assertion failed! Actual="${actual}", where should be "${expected}"`
            )
        }
    });

    test('should return value decreased by discount when order amoint is less than 500', () => {
        // arrange
        const service = new ClientService();
        const client = {
            orders: [100, 300],
        };

        const expected = 400;

        // act
        const actual = service.calculateNewOrderValue(client, 400);

        // assert
        if (actual === expected) {
            return;
        } else {
            throw new Error(
                `Assertion failed! Actual="${actual}", where should be "${expected}"`
            )
        }
    });
});
