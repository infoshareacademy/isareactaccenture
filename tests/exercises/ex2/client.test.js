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

  });

  test('should 15% discount if client is internal', () => {

  });

  test('should return 25% discount if client is internal and spent more than 500', () => {

  });
});

describe('calculateNewOrderValue', () => {
  test('should return value decreased by discount', () => {

  });

  test('should return value decreased by discount when cleint is INTERNAL', () => {

  });

  test('should return value decreased by discount when order amoint is less than 500', () => {

  });
});
