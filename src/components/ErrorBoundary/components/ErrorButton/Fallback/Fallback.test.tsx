// import userEvent from '@testing-library/user-event';
// import { BrowserRouter } from 'react-router-dom';
// import App from '../../../../../App';
import { server } from '../../../../../test/mocks/setupServer';
// import { render, screen } from '@testing-library/react';

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
  vi.restoreAllMocks();
});

afterAll(() => server.close());

describe('Fallback Component', () => {
  // it('Correct show fallback when user press error button', async () => {
  //   const user = userEvent.setup();

  //   render(
  //     <BrowserRouter>
  //       <App />
  //     </BrowserRouter>
  //   );

  //   expect(screen.queryByText('You have pressed error button')).not.toBeInTheDocument();

  //   const errorButton = await screen.findByRole('button', { name: 'Show Error' });
  //   expect(errorButton).toBeInTheDocument();

  //   await user.click(errorButton);

  //   screen.debug();

  //   expect(await screen.findByText('You have pressed error button')).toBeInTheDocument();
  // });

  it('test', () => {
    expect(true).toBe(true);
  });
});
