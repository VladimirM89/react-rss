import { afterAll, afterEach, beforeAll, describe, expect, test, vi } from 'vitest';
import { server } from '../mocks/setupServer';
import { screen } from '@testing-library/react';
import { mockedCharacterData, mockedCharactersData, mockedPagination } from '../mocks/mockedData';
import Page from '../../pages/index';
import { createMockedUseRoter, renderWithProvider } from '../test-utils/test-utils';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import Layout from '../../components/layout';

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
  vi.restoreAllMocks();
});

afterAll(() => server.close());

describe('Home page', () => {
  test('should render the full page', async () => {
    renderWithProvider(
      <RouterContext.Provider value={createMockedUseRoter({ pathname: '/' })}>
        <Layout>
          <Page
            characters={{ data: mockedCharactersData, pagination: mockedPagination }}
            detailCharacter={mockedCharacterData}
          />
        </Layout>
      </RouterContext.Provider>
    );

    expect(screen.getByText(/Amine Search App/)).toBeInTheDocument();
    expect(screen.getByTestId('search-input')).toBeInTheDocument();
    expect(screen.getByTestId('list')).toBeInTheDocument();
    const cardsList = screen.getAllByTestId('card-link');
    expect(cardsList.length).toBe(11);
    expect(screen.getByTestId('pagination')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Show Error' })).toBeInTheDocument();
  });

  test('should render page with character list without pagination', async () => {
    renderWithProvider(
      <RouterContext.Provider value={createMockedUseRoter({ pathname: '/' })}>
        <Layout>
          <Page
            characters={{ data: mockedCharactersData, pagination: null }}
            detailCharacter={mockedCharacterData}
          />
        </Layout>
      </RouterContext.Provider>
    );

    expect(screen.getByText(/Amine Search App/)).toBeInTheDocument();
    expect(screen.getByTestId('search-input')).toBeInTheDocument();
    expect(screen.getByTestId('list')).toBeInTheDocument();
    const cardsList = screen.getAllByTestId('card-link');
    expect(cardsList.length).toBe(11);
    expect(screen.queryByTestId('pagination')).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Show Error' })).toBeInTheDocument();
  });

  test('should render approprite component without card list', async () => {
    renderWithProvider(
      <RouterContext.Provider value={createMockedUseRoter({ pathname: '/' })}>
        <Layout>
          <Page
            characters={{ data: [], pagination: mockedPagination }}
            detailCharacter={mockedCharacterData}
          />
        </Layout>
      </RouterContext.Provider>
    );

    expect(screen.getByText(/^Amine Search App/i)).toBeInTheDocument();
    expect(screen.getByTestId('search-input')).toBeInTheDocument();
    expect(screen.queryByTestId('list')).not.toBeInTheDocument();
    expect(screen.queryByTestId('pagination')).not.toBeInTheDocument();
    expect(screen.getByText(/^ITEM NOT FOUND.../i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Show Error' })).toBeInTheDocument();
  });
});
