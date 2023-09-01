// Zrób mock funckji postTask byś móc sprawdzić czy została ona wywołana i napisz testy.

import { addTodo } from './todos-service';
import { postTask } from './server';

jest.mock('./server', () => ({
    postTask: jest.fn()
}))

describe('Todo service', () => {
    test('should return success for valid task', () => {
        const result = addTodo('zrobić zakupy');

        expect(result).toEqual({
            success: true
        })
    });
    test('should post task for valid task', () => {
        addTodo('zrobić zakupy');

        expect(postTask).toHaveBeenCalledWith('zrobić zakupy');
    });
    test('should return error for invalid task', () => {
        const result = addTodo('');

        expect(result).toEqual({
            error: 'Given task is not valid'
        })
    });
})
