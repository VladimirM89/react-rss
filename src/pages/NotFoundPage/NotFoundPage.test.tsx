import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { App } from '../../App';

it('The 404 page is displayed when navigating to an invalid route.', () => {
  render(
    <MemoryRouter initialEntries={['/test404page']}>
      <App />
    </MemoryRouter>
  );

  const notFound = screen.queryByText(/This page not found/);
  expect(notFound).not.toBeInTheDocument();
});
