import { screen, waitFor } from '@testing-library/react';
import { renderWithProvider } from '../../test/test-utils/test-utils';
import { SearchList } from './SearchList';
import { MemoryRouter } from 'react-router-dom';
import { server } from '../../test/mocks/setupServer';
import App from '../../App';
import { charactersInfoSlice } from '../../features/characters/CharactersInfoSlice';

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
  vi.restoreAllMocks();
});

afterAll(() => server.close());

describe('Search component', () => {
  it('Search component renders list if list ', async () => {
    renderWithProvider(
      <MemoryRouter>
        <SearchList />
      </MemoryRouter>
    );
    const list = await screen.findByRole('list');
    expect(list).toBeInTheDocument();
  });

  it('Verify that the component renders the specified number of cards', async () => {
    renderWithProvider(
      <MemoryRouter>
        <SearchList />
      </MemoryRouter>
    );
    const list = await screen.findAllByRole('listitem');
    expect(list).toHaveLength(11);
  });

  it('Check that an appropriate message is displayed if no cards are present', async () => {
    const { store } = renderWithProvider(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    await waitFor(
      async () => {
        store.dispatch(charactersInfoSlice.actions.updateSuccess({ data: [], pagination: null }));
        const notFoundElement = await screen.findByText(/ITEM NOT FOUND/i);
        expect(notFoundElement).toBeInTheDocument();
      },
      { timeout: 2000 }
    );
  });
});
