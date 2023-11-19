import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { server } from '../../test/mocks/setupServer';
import { renderWithProvider } from '../../test/test-utils/test-utils';
import App from '../../App';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as api from '../../features/api/apiSlice';

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
  vi.restoreAllMocks();
});

afterAll(() => server.close());

describe('Pagination component', () => {
  const user = userEvent.setup();
  it('Pagination is displayed cerrectly', async () => {
    renderWithProvider(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(await screen.findByTestId('pagination')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByTestId('pages')).toBeInTheDocument();
  });

  it('Make sure the component updates URL query parameter when limit and page changes', async () => {
    const spy = vi.spyOn(api, 'useGetAllCharactersQuery');
    renderWithProvider(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const initialSearchParams = new URLSearchParams(location.search);
    const initialLimitValue = initialSearchParams.get('limit');
    const initialPageValue = initialSearchParams.get('page');

    expect(initialLimitValue).toBe(null);
    expect(initialPageValue).toBe(null);

    const select = await screen.findByRole('combobox');
    expect(select).toBeInTheDocument();

    const newSelect = screen.getByRole('option', { name: '10' }) as HTMLOptionElement;

    await user.selectOptions(select, newSelect);

    const currentSearchParams = new URLSearchParams(location.search);
    const currentLimitValue = currentSearchParams.get('limit');
    const currentPageValue = currentSearchParams.get('page');

    expect(spy).toBeCalledWith({
      page: currentPageValue,
      limit: currentLimitValue,
    });

    expect(currentLimitValue).toBe('10');

    const secondPageButton = await screen.findByRole('button', { name: '2' });

    await user.click(secondPageButton);

    expect(spy).toBeCalledWith({ page: String(2), limit: currentLimitValue });

    const newSearchParams = new URLSearchParams(location.search);
    const newPageValue = newSearchParams.get('page');

    await waitFor(() => {
      expect(newPageValue).toBe('2');
    });
  });

  it('test', () => {
    expect(true).toBe(true);
  });
});
