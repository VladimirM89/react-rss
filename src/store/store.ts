import { PreloadedState, combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  // charactersInfoReducer,
  // searchValueReducer,
  // paginationSliceReducer,
  // characterSliceReducer,
  // [apiSlice.reducerPath]: apiSlice.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,

    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
