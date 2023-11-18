// import userEvent from '@testing-library/user-event';
// import { BrowserRouter } from 'react-router-dom';
// import App from '../../../../../App';
import { MemoryRouter } from 'react-router-dom';
import { server } from '../../../../../test/mocks/setupServer';
import { renderWithProvider } from '../../../../../test/test-utils/test-utils';
import App from '../../../../../App';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
  vi.restoreAllMocks();
});

afterAll(() => server.close());

describe('Fallback Component', () => {
  const user = userEvent.setup();

  it('Correct show fallback when user press error button', async () => {
    renderWithProvider(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(screen.queryByText('You have pressed error button')).not.toBeInTheDocument();

    const errorButton = await screen.findByRole('button', { name: 'Show Error' });
    expect(errorButton).toBeInTheDocument();

    await user.click(errorButton);

    screen.debug();

    expect(await screen.findByText('You have pressed error button')).toBeInTheDocument();
  });
});
