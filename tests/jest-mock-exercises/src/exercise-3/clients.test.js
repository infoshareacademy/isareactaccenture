// Zammockuj getClients i napisz testy!

import { filterClients, getLatestRegisteredClient } from './clients';
import { getClients } from './clients-data';
import { logger } from './logger';
import data from '../../data/db.json';

jest.mock('./clients-data', () => ({
    getClients: jest.fn()
}))

jest.mock('./logger', () => ({
    logger: {
        error: jest.fn()
    }
}))


describe('filterClients', () => {
    afterEach(() => {
        jest.resetAllMocks();
    });

    test('should filter only INTERNAL clients for INTERNAL type', async () => {
        getClients.mockImplementation(() => Promise.resolve(data.clients));

        const result = await filterClients({ type: 'INTERNAL' });

        expect(result.length).toEqual(3)
    });

    test('should return empty clients when empty list fetched', async () => {
        getClients.mockImplementation(() => Promise.resolve([]));

        const result = await filterClients({ type: 'INTERNAL' });

        expect(result.length).toEqual(0)
    });

    test('should return empty list when fetching clients failed', async () => {
        getClients.mockImplementation(() => Promise.reject(Error('buggg')));

        const result = await filterClients({ type: 'INTERNAL' });

        expect(result.length).toEqual(0)
    });

    test('should log error when fetching clients failed', async () => {
        const error = Error('buggg');
        getClients.mockImplementation(() => Promise.reject(error));

        await filterClients({ type: 'INTERNAL' });

        expect(logger.error).toHaveBeenCalledWith('fetching clients failed!', error)
    });

    test('should not log error when fetching clients successful', async () => {
        getClients.mockImplementation(() => Promise.resolve([]));

        await filterClients({ type: 'INTERNAL' });

        expect(logger.error).not.toHaveBeenCalled();
    });
});
