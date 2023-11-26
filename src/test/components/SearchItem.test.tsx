import { screen } from '@testing-library/react';
import { server } from '../../test/mocks/setupServer';
import { createMockedUseRoter, renderWithProvider } from '../../test/test-utils/test-utils';
import userEvent from '@testing-library/user-event';
import { mockedCharacterData, mockedCharactersData } from '../../test/mocks/mockedData';
import { afterAll, afterEach, beforeAll, describe, expect, test, vi } from 'vitest';
import { SearchItem } from '../../components/SearchItem';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import { ClassAttributes, ImgHTMLAttributes } from 'react';
import { JSX } from 'react/jsx-runtime';
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

describe('SearchItem component tests', () => {
  const user = userEvent.setup();

  test('Search item renders corrently', () => {
    renderWithProvider(
      <RouterContext.Provider value={createMockedUseRoter({ pathname: '/' })}>
        <SearchItem item={mockedCharacterData} />
      </RouterContext.Provider>
    );
    const item = screen.getByRole('listitem');
    expect(item).toBeInTheDocument();
  });

  test('Search item component renders the relevant card data', () => {
    vi.mock('next/image', () => ({
      __esModule: true,
      default: (
        props: JSX.IntrinsicAttributes &
          ClassAttributes<HTMLImageElement> &
          ImgHTMLAttributes<HTMLImageElement>
      ) => <img {...props} />,
    }));

    renderWithProvider(
      <RouterContext.Provider value={createMockedUseRoter({ pathname: '/' })}>
        <SearchItem item={mockedCharacterData} />
      </RouterContext.Provider>
    );

    const title = screen.getByText(/sunabouzu/i, { selector: 'p' });

    const score = screen.getByText(/7.38/i, { selector: 'p' });

    const image = screen.getByAltText(/Sunabouzu/i);

    expect(title).toBeInTheDocument();
    expect(score).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(screen.getByRole('img').getAttribute('src')).toBe(
      'https://cdn.myanimelist.net/images/anime/6/75536.jpg'
    );
  });

  test('Check that clicking triggers an additional API call to fetch detailed information and Validate that clicking on a card opens a detailed card component;', async () => {
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

    const card = await screen.findAllByTestId('card-link');

    await user.click(card[0]);

    expect(await screen.findByTestId('detail-block')).toBeInTheDocument();
  });
});
