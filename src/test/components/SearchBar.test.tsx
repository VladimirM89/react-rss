import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SEARCH_VALUE } from '../../constants/stringConstants';
import { createMockedUseRoter, renderWithProvider } from '../../test/test-utils/test-utils';
import { afterAll, afterEach, describe, expect, test, vi } from 'vitest';
import { SearchBar } from '../../components/SearchBar';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';

afterAll(() => localStorage.clear());

afterEach(() => {
  vi.resetAllMocks();
});

describe('Search Bar', () => {
  const user = userEvent.setup();

  test('Verify that clicking the Search button saves the entered value to the local storage', async () => {
    renderWithProvider(
      <RouterContext.Provider value={createMockedUseRoter({ pathname: '/' })}>
        <SearchBar />
      </RouterContext.Provider>
    );

    expect(localStorage.getItem(SEARCH_VALUE)).toBe('');

    const button = screen.getByRole('button', { name: 'Search' });
    expect(button).toBeInTheDocument();

    const input = screen.getByTestId('search-input');
    await user.type(input, 'test search bar');
    await user.click(button);
    expect(localStorage.getItem(SEARCH_VALUE)).toBe('test search bar');
  });
});
