import { afterAll, afterEach, beforeAll, describe, expect, test, vi } from 'vitest';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import { server } from '../../test/mocks/setupServer';
import { createMockedUseRoter, renderWithProvider } from '../../test/test-utils/test-utils';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PaginationComponent from '../../components/PaginationComponent';
import { mockedCharacterData, mockedCharactersData, mockedPagination } from '../mocks/mockedData';
import Layout from '../../components/Layout';
import Page from '../../pages/index';

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
  test('Pagination is displayed correctly if it exist', async () => {
    renderWithProvider(
      <RouterContext.Provider value={createMockedUseRoter({ pathname: '/' })}>
        <PaginationComponent pagination={mockedPagination} />
      </RouterContext.Provider>
    );

    expect(await screen.findByTestId('pagination')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByTestId('pages')).toBeInTheDocument();
  });

  test('Pagination is not displayed when props in null', async () => {
    renderWithProvider(
      <RouterContext.Provider value={createMockedUseRoter({ pathname: '/' })}>
        <PaginationComponent pagination={null} />
      </RouterContext.Provider>
    );

    expect(screen.queryByTestId('pagination')).not.toBeInTheDocument();
  });

  test('Make sure the component updates URL query parameter when limit and page changes', async () => {
    // const spy = vi.spyOn(api, 'useGetAllCharactersQuery');
    const router = createMockedUseRoter({ pathname: '/' });
    renderWithProvider(
      <RouterContext.Provider value={router}>
        <Layout>
          <Page
            characters={{ data: mockedCharactersData, pagination: mockedPagination }}
            detailCharacter={mockedCharacterData}
          />
        </Layout>
      </RouterContext.Provider>
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

    await waitFor(() => {
      expect(router.push).toBeCalledWith({ pathname: '/', query: { page: 1, limit: '10' } });
    });

    const secondPageButton = await screen.findByRole('button', { name: '2' });

    fireEvent.click(secondPageButton);

    await waitFor(() => {
      expect(router.push).toBeCalledWith({ pathname: '/', query: { page: 2 } });
    });
  });
});
