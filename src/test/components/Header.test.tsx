import { render, screen } from '@testing-library/react';
import Header from '../../components/Header';
import { expect, test } from 'vitest';

test('Test axist App header', () => {
  render(<Header />);
  const message = screen.getByText(/^amine search app/i);
  expect(message).toBeVisible();
});
