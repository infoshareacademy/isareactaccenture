// Zrób mock funckji getRandomNumber by zawsze zwracał taka wartość jaką potrzebuijesz i napisz testy.
import { getRandomNumber } from './math';
import { generateId } from './generator'

jest.mock('./math', () => ({
    getRandomNumber: jest.fn()
}))

describe('generateId', () => {
    beforeEach(() => expect.hasAssertions())

    test('should generate id with given seed', () => {
        getRandomNumber.mockReturnValue(50)

        const result = generateId('accenture');

        expect(result).toBe('id_accenture-50')
    });

    test('should generate id with given empty seed', () => {
        getRandomNumber.mockReturnValue(50)

        const result = generateId('');

        expect(result).toBe('id_-50')
    });
});