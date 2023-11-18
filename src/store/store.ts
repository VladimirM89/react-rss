import { combineReducers, configureStore } from '@reduxjs/toolkit';
import charactersInfoReducer from '../features/characters/CharactersInfoSlice';
import searchValueReducer from '../features/characters/SearchValueSlice';
import paginationSliceReducer from '../features/characters/PaginationSlice';
import characterSliceReducer from '../features/characters/CharacterSlice';

import { apiSlice } from '../features/api/apiSlice';

const rootReducer = combineReducers({
  charactersInfoReducer,
  searchValueReducer,
  paginationSliceReducer,
  characterSliceReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  });
};

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
// setupListeners(store.dispatch);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
