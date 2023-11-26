import { screen, waitFor } from '@testing-library/react';
import { SearchList } from '../../components/SearchList';
import { server } from '../../test/mocks/setupServer';
import { afterAll, afterEach, beforeAll, describe, expect, test, vi } from 'vitest';
import { mockedCharactersData, mockedPagination, mockedCharacterData } from '../mocks/mockedData';
import { createMockedUseRoter, renderWithProvider } from '../test-utils/test-utils';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
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
  test('Search component renders list if list', async () => {
    renderWithProvider(
      <RouterContext.Provider value={createMockedUseRoter({ pathname: '/' })}>
        <SearchList
          characters={mockedCharactersData}
          pagination={mockedPagination}
          detailCard={mockedCharacterData}
        />
      </RouterContext.Provider>
    );

    expect(screen.getByTestId('list')).toBeInTheDocument();
  });

  test('Verify that the component renders the specified number of cards', async () => {
    renderWithProvider(
      <RouterContext.Provider value={createMockedUseRoter({ pathname: '/' })}>
        <SearchList
          characters={mockedCharactersData}
          pagination={mockedPagination}
          detailCard={mockedCharacterData}
        />
      </RouterContext.Provider>
    );
    const list = screen.getAllByTestId('card-link');
    expect(list).toHaveLength(11);
  });

  test('Check that an appropriate message is displayed if no cards are present', async () => {
    const { store } = renderWithProvider(
      <RouterContext.Provider value={createMockedUseRoter({ pathname: '/' })}>
        <SearchList characters={[]} pagination={null} detailCard={mockedCharacterData} />
      </RouterContext.Provider>
    );

    await waitFor(async () => {
      store.dispatch(charactersInfoSlice.actions.updateSuccess({ data: [], pagination: null }));
      const notFoundElement = screen.getByText(/^ITEM NOT FOUND/i);
      expect(notFoundElement).toBeInTheDocument();
    });
  });
});
