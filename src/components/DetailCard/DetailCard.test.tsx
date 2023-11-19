import { waitFor } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import {
  createRoutesFromElements,
  Route,
  createMemoryRouter,
  RouterProvider,
} from 'react-router-dom';
import { SearchPage } from '../../pages/SearchPage/SearchPage';
import { server } from '../../test/mocks/setupServer';
import { renderWithProvider } from '../../test/test-utils/test-utils';
import DetailCard from './DetailCard';
import { screen } from '@testing-library/dom';

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

  const routes = createRoutesFromElements(
    <>
      <Route path="/" element={<SearchPage />}>
        <Route index element={<DetailCard />} />
      </Route>
    </>
  );

  const router = createMemoryRouter(routes);

  it('Make sure the detailed card component correctly displays the detailed card data and close after press button', async () => {
    renderWithProvider(<RouterProvider router={router} />);

    const items = await screen.findAllByTestId('card-link');

    expect(items.length).not.toBe(0);
    expect(items[0]).not.toBeUndefined();

    await user.click(items[0]);

    await waitFor(() => {
      expect(screen.getByTestId('detail-block')).toBeInTheDocument();
      expect(screen.getByText('24 min per ep')).toBeInTheDocument();
      expect(screen.getByText('R - 17+ (violence & profanity)')).toBeInTheDocument();
      expect(screen.getByText('TV 26 episodes')).toBeInTheDocument();
      expect(screen.getByText('Finished Airing')).toBeInTheDocument();
    });

    const closeButton = await screen.findByRole('button', { name: '✕' });
    expect(closeButton).toBeInTheDocument();

    await user.click(closeButton);

    expect(screen.queryByTestId('detail-block')).not.toBeInTheDocument();
    expect(screen.queryByText('24 min per ep')).not.toBeInTheDocument();
    expect(screen.queryByText('R - 17+ (violence & profanity)')).not.toBeInTheDocument();
    expect(screen.queryByText('TV 26 episodes')).not.toBeInTheDocument();
    expect(screen.queryByText('Finished Airing')).not.toBeInTheDocument();
  });

  it('test', () => {
    expect(true).toBe(true);
  });
});
