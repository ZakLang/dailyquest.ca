import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header component', () => {
  render(<App />);
  const linkElement = screen.getByText(/Personal Development Blog/i);
  expect(linkElement).toBeInTheDocument();
});
