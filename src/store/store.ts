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

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
