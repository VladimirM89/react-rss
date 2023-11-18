import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../../App';
import userEvent from '@testing-library/user-event';
import { SEARCH_VALUE } from '../../constants/stringConstants';
import { renderWithProvider } from '../../test/test-utils/test-utils';

afterAll(() => localStorage.clear());

afterEach(() => {
  vi.resetAllMocks();
});

describe('Search Bar', () => {
  const user = userEvent.setup();

  it('Verify that clicking the Search button saves the entered value to the local storage', async () => {
    renderWithProvider(
      <MemoryRouter>
        <App />
      </MemoryRouter>
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
