import { render, screen } from '@testing-library/react';
import { afterAll, afterEach, beforeAll, expect, vi, describe, test } from 'vitest';
import { server } from '../mocks/setupServer';
import { Fallback } from '../../components/Fallback';

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
  vi.restoreAllMocks();
});

afterAll(() => server.close());

describe('Fallback Component', () => {
  test('Correct show fallback ', async () => {
    render(<Fallback />);

    expect(await screen.findByText('You have pressed error button')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Reload page' }));
  });
});
