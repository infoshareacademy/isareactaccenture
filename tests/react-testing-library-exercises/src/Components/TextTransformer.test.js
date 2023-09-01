// Napisz podane testy!
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TextTransformer from './TextTransformer';

describe('TextTransformer', () => {
    test('should transform inserted text', () => {
        render(<TextTransformer />);

        const input = screen.getByLabelText('Insert text');
        userEvent.type(input, 'accenture')

        expect(screen.getByText('Transformed text:')).toBeInTheDocument();
        expect(screen.getByText('__ACCENTURE__')).toBeInTheDocument();
    });

    test('should not override inserted text when prop has been set later', () => {
        const { rerender } = render(<TextTransformer />);

        const input = screen.getByLabelText('Insert text');
        userEvent.type(input, 'accenture')

        rerender(<TextTransformer value='infoshare' />)

        expect(screen.getByText('__ACCENTURE__')).toBeInTheDocument();
        expect(screen.queryByText('__INFOSHARE__')).not.toBeInTheDocument();
    });

    test('should transform text from props when prop has been set', () => {
        render(<TextTransformer value='infoshare' />);
        expect(screen.queryByText('__INFOSHARE__')).toBeInTheDocument();
    });

    test('should not show transformed text when state is empty', () => {
        render(<TextTransformer />);

        expect(screen.queryByText('Transformed text:')).not.toBeInTheDocument();
    })
});
