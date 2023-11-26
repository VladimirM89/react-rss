import userEvent from '@testing-library/user-event';
import { server } from '../../test/mocks/setupServer';
import { createMockedUseRoter, renderWithProvider } from '../../test/test-utils/test-utils';
import { screen } from '@testing-library/dom';
import { beforeAll, afterEach, vi, afterAll, expect, describe, test } from 'vitest';
import Layout from '../../components/Layout';
import Page from '../../pages/index';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import { mockedCharactersData, mockedPagination, mockedCharacterData } from '../mocks/mockedData';

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
  vi.restoreAllMocks();
});

afterAll(() => server.close());

describe('Detail Card', () => {
  const user = userEvent.setup();

  test('Make sure that close button close detail card', async () => {
    const router = createMockedUseRoter({ pathname: '/', query: { details: '1' } });
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

    const items = await screen.findAllByTestId('card-link');

    expect(items.length).not.toBe(0);

    expect(items[0]).not.toBeUndefined();

    await user.click(items[0]);

    expect(router.push).toBeCalledWith({ pathname: '/', query: { details: '1' } });

    const closeButton = await screen.findByRole('button', { name: '✕' });
    expect(closeButton).toBeInTheDocument();

    await user.click(closeButton);

    expect(router.push).toBeCalledWith({ pathname: '/', query: {} });
  });

  test('Make sure that details card dispayed as expected', async () => {
    const router = createMockedUseRoter({ pathname: '/', query: { details: '1' } });
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

    const closeButton = await screen.findByRole('button', { name: '✕' });
    expect(closeButton).toBeInTheDocument();
    expect(screen.getByTestId('detail-block')).toBeInTheDocument();
    expect(screen.getByText('24 min per ep')).toBeInTheDocument();
    expect(screen.getByText('R - 17+ (violence & profanity)')).toBeInTheDocument();
    expect(screen.getByText('Finished Airing')).toBeInTheDocument();
  });
});
