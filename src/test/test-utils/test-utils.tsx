import { ReactNode } from 'react';
// import { MemoryRouter } from 'react-router-dom';
// import SearchProvider, { SearchContextType } from '../../context/SearchContext';
import { render } from '@testing-library/react';
import { setupStore } from '../../store/store';
import { Provider } from 'react-redux';

// export const renderComponentWithProvider = (component: ReactNode, value: SearchContextType) => {
//   return render(
//     <MemoryRouter>
//       <SearchProvider value={value}>{component}</SearchProvider>
//     </MemoryRouter>
//   );
// };

export const renderWithProvider = (component: ReactNode) => {
  const store = setupStore();
  return render(<Provider store={store}>{component}</Provider>);
};
