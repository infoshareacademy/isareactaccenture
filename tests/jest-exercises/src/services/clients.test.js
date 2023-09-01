// Napisz testy dla filterClients i getLatestRegisteredClient

import { filterClients, getLatestRegisteredClient } from './clients';
import { clients } from '../fixtures/clients-data';

describe('filterClients', () => {
    test('should filter internal clients', () => {
        const result = filterClients(clients, { type: 'INTERNAL' });

        expect(result.length).toEqual(3)
    })

    test('should filter extrnal clients', () => {
        const result = filterClients(clients, { type: 'EXTERNAL' });

        expect(result.length).toEqual(2)
    })

    test('should not filter clients when type is not provided', () => {
        const result = filterClients(clients, { type: undefined });

        expect(result.length).toEqual(5)
    })
})

describe('getLatestRegisteredClient', () => {
    test('should return latest registered client', () => {
        const result = getLatestRegisteredClient(clients);

        expect(result.name).toEqual('Andrzej')
    })

    test('should return 1 client when there are 2 with the same dates', () => {
        const newClients = [
            ...clients,
            { id: 6, name: 'Andrzej Drugi', type: 'EXTERNAL', registered: new Date(2020, 10, 9) },
        ]
        const result = getLatestRegisteredClient(clients);

        expect(result.name).toEqual('Andrzej')
    })
})