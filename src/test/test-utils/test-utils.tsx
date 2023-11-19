import { PropsWithChildren, ReactElement } from 'react';
// import { MemoryRouter } from 'react-router-dom';
// import SearchProvider, { SearchContextType } from '../../context/SearchContext';
import { RenderOptions, render } from '@testing-library/react';
import { AppStore, RootState, setupStore } from '../../store/store';
import { Provider } from 'react-redux';
import { PreloadedState } from '@reduxjs/toolkit';

// export const renderComponentWithProvider = (component: ReactNode, value: SearchContextType) => {
//   return render(
//     <MemoryRouter>
//       <SearchProvider value={value}>{component}</SearchProvider>
//     </MemoryRouter>
//   );
// };

// export const renderWithProvider = (component: ReactNode) => {
//   const store = setupStore();
//   return render(<Provider store={store}>{component}</Provider>);
// };

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export function renderWithProvider(
  ui: ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<object>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
