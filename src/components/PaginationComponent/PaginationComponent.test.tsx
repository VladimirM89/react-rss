import { BrowserRouter } from 'react-router-dom';
import { server } from '../../test/mocks/setupServer';
import App from '../../App';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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
  it('Make sure the component updates URL query parameter when page changes', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const searchParams = new URLSearchParams(location.search);
    const currentLimitValue = searchParams.get('limit');

    expect(currentLimitValue).toBe(null);
    expect(await screen.findByTestId('pagination')).toBeInTheDocument();

    const select = screen.getByRole('combobox');
    expect(select).toBeInTheDocument();

    const defaultSelect = screen.getByRole('option', { name: '25' }) as HTMLOptionElement;
    expect(defaultSelect.selected).toBe(true);

    const newSelect = screen.getByRole('option', { name: '10' }) as HTMLOptionElement;

    await user.selectOptions(select, newSelect);
    expect(newSelect.selected).toBe(true);

    const newSearchParams = new URLSearchParams(location.search);
    const newLimitValue = newSearchParams.get('limit');

    expect(newLimitValue).toBe('10');
  });
});
