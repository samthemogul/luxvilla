import { render, screen, fireEvent } from '@testing-library/react';
import Page from './app/page.jsx'

describe('Counter', () => {
    test('renders initial count', () => {
        render(<Page />);
        const countElement = screen.getByText(/Welcome to Luxvilla:/);
        expect(countElement).toBeInTheDocument();
        expect(countElement.textContent).toContain('Welcome to Luxvilla: 0');
    });

    test('increments count when button is clicked', () => {
        render(<Page />);
        const incrementButton = screen.getByText('Increase');
        const countElement = screen.getByText(/Count:/);

        fireEvent.click(incrementButton);
        expect(countElement.textContent).toContain('Welcome to Luxvilla: 1');

        fireEvent.click(incrementButton);
        expect(countElement.textContent).toContain('Welcome to Luxvilla: 2');
    });

    test('decrements count when button is clicked', () => {
        render(<Page />);
        const decrementButton = screen.getByText('Decrease');
        const countElement = screen.getByText(/Count:/);

        fireEvent.click(decrementButton);
        expect(countElement.textContent).toContain('Welcome to Luxvilla: -1');

        fireEvent.click(decrementButton);
        expect(countElement.textContent).toContain('Welcome to Luxvilla: -2');
    });
});
