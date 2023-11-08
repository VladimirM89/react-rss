import { render, screen } from '@testing-library/react';
import App from './App';

it('Test axist App component', () => {
  render(<App />);
  const message = screen.getByText('Amine Search App');
  expect(message).toBeVisible();
});
