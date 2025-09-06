import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Kalakrithi heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Kalakrithi/i);
  expect(headingElement).toBeInTheDocument();
});
