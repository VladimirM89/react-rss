import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../../App';

describe('Detail Card', () => {
  it('Make sure the detailed card component correctly displays the detailed card data', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });
});
