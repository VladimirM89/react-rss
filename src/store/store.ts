import { combineReducers, configureStore } from '@reduxjs/toolkit';
import charactersInfoReducer from './reducers/CharactersInfoSlice';
import searchValueReducer from './reducers/SearchValueSlice';
import paginationSliceReducer from './reducers/PaginationSlice';

import { searchApi } from '../api/SearchApi';

const rootReducer = combineReducers({
  charactersInfoReducer,
  searchValueReducer,
  paginationSliceReducer,
  [searchApi.reducerPath]: searchApi.reducer,
});

export const setuptStore = () => {
  return configureStore({
    reducer: rootReducer,
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(searchApi.middleware),
  });
};

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
// setupListeners(store.dispatch);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setuptStore>;
export type AppDispatch = AppStore['dispatch'];
