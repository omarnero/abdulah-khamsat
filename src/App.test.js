import { render, screen } from '@testing-library/react';
import App from './App';

test('renders brand logo or title text', () => {
  render(<App />);
  const titleElements = screen.getAllByText(/شدام/i);
  expect(titleElements.length).toBeGreaterThan(0);
});
