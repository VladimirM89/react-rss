import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../../App';
import userEvent from '@testing-library/user-event';
import { SEARCH_VALUE } from '../../constants/stringConstants';
import * as api from '../../api/SearchApi';

afterAll(() => localStorage.clear());

afterEach(() => {
  vi.resetAllMocks();
});

describe('Search Bar', () => {
  const user = userEvent.setup();
  it('Verify that clicking the Search button saves the entered value to the local storage', async () => {
    render(
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

  it('Check that the component retrieves the value from the local storage upon mounting', async () => {
    const spySearch = vi.spyOn(api, 'getCharacters');

    localStorage.setItem(SEARCH_VALUE, 'Initial');

    expect(spySearch).toBeCalledTimes(0);

    expect(localStorage.getItem(SEARCH_VALUE)).toBe('Initial');

    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(spySearch).toBeCalledTimes(1);

    expect(spySearch).toHaveBeenCalledWith({ q: 'Initial', limit: NaN, page: NaN });
  });
});
