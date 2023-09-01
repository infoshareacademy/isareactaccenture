// Uzupełnij testy

import getStudentNames, { validateStudent } from './getStudentNames';
import { students } from '../fixtures/selectors-data';

describe('getStudentNames', () => {
    test('should map students names', () => {
        const result = getStudentNames(students);

        expect(result).toEqual(['Jacek', 'Ewa', 'Zygmunt'])
    });
});

describe('validateStudent', () => {
    test('should be valid, when name contains only letters', () => {
        const result = validateStudent({ name: 'Onlyletters' });

        expect(result).toBeTruthy();
    });

    test('should be valid, when name is Marcin', () => {
        const result = validateStudent({ name: 'Marcin' });

        expect(result).toBeTruthy();
    });

    test('should be invalid, when name contains spaces', () => {
        const result = validateStudent({ name: 'M a r c i n' });

        expect(result).toBeFalsy();
    });

    test('should be invalid, when name contains numbers', () => {
        const result = validateStudent({ name: 'Marcin2000' });

        expect(result).toBeFalsy();
    });

    test('should be invalid, when name is written with big letters', () => {
        const result = validateStudent({ name: 'MARCIN' });

        expect(result).toBeFalsy();
    });
});
