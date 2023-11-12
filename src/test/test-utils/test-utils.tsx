import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import SearchProvider, { SearchContextType } from '../../context/SearchContext';
import { render } from '@testing-library/react';

export const renderComponentWithProvider = (component: ReactNode, value: SearchContextType) => {
  return render(
    <MemoryRouter>
      <SearchProvider value={value}>{component}</SearchProvider>
    </MemoryRouter>
  );
};
