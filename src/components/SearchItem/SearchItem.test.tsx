import { screen, waitFor } from '@testing-library/react';
import { server } from '../../test/mocks/setupServer';
import { renderWithProvider } from '../../test/test-utils/test-utils';
import { SearchItem } from './SearchItem';
import {
  MemoryRouter,
  Route,
  RouterProvider,
  createMemoryRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import * as api from '../../features/api/apiSlice';
import { SearchPage } from '../../pages/SearchPage/SearchPage';
import DetailCard from '../DetailCard/DetailCard';
import userEvent from '@testing-library/user-event';
import { mockedCharacterData } from '../../test/mocks/mockedData';

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

  it('Search item renders corrently', () => {
    renderWithProvider(
      <MemoryRouter>
        <SearchItem item={mockedCharacterData} />
      </MemoryRouter>
    );
    const item = screen.getByRole('listitem');
    expect(item).toBeInTheDocument();
  });

  it('Search item component renders the relevant card data', () => {
    renderWithProvider(
      <MemoryRouter>
        <SearchItem item={mockedCharacterData} />
      </MemoryRouter>
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

  it('Check that clicking triggers an additional API call to fetch detailed information and Validate that clicking on a card opens a detailed card component;', async () => {
    const spy = vi.spyOn(api, 'useGetCharacterByIdQuery');

    const routes = createRoutesFromElements(
      <>
        <Route path="/" element={<SearchPage />}>
          <Route index element={<DetailCard />} />
        </Route>
      </>
    );

    const router = createMemoryRouter(routes);

    renderWithProvider(<RouterProvider router={router} />);

    const card = await screen.findAllByTestId('card-link');

    await user.click(card[0]);

    expect(spy).toBeCalledWith(1, { skip: false });

    await waitFor(() => {
      expect(screen.getByTestId('detail-block')).toBeInTheDocument();
    });
  });
});
