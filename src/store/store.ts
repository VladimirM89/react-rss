import { PreloadedState, combineReducers, configureStore } from '@reduxjs/toolkit';
import controlledForm from './features/forms/FormSlice';
import countries from './features/forms/CountriesSlice';

const rootReducer = combineReducers({
  controlledForm,
  countries,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,

    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
