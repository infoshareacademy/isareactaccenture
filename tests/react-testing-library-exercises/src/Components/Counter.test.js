// Napisz podane testy!
import Counter from './Counter';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Counter', () => {
    test('should have initial counter set to 0', () => {
        render(<Counter />);

        expect(screen.getByText('value: 0')).toBeInTheDocument();
    });

    test('should have increase counter when increase clicked', () => {
        render(<Counter />);

        fireEvent.click(screen.getByRole('button', { name: 'increase' }))

        expect(screen.getByText('value: 1')).toBeInTheDocument();
    });

    test('should have decrease counter when decrease clicked', () => {
        render(<Counter />);

        fireEvent.click(screen.getByRole('button', { name: 'decrease' }))

        expect(screen.getByText('value: -1')).toBeInTheDocument();
    });

    test('should have reset counter when reset clicked', () => {
        render(<Counter />);

        fireEvent.click(screen.getByRole('button', { name: 'increase' }))

        expect(screen.getByText('value: 1')).toBeInTheDocument();

        fireEvent.click(screen.getByRole('button', { name: 'reset' }))

        expect(screen.getByText('value: 0')).toBeInTheDocument();
    });
});
