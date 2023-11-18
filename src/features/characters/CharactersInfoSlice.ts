import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  CharacterInterface,
  SearchResponseInterface,
  PaginationInterface,
} from '../../interfaces/SearchResponseInterfaces';

export interface initialStateInterface {
  data: Array<CharacterInterface>;
  pagination: PaginationInterface | null;
  isLoading: boolean;
}

const initialState: initialStateInterface = {
  data: [],
  pagination: null,
  isLoading: false,
};

export const charactersInfoSlice = createSlice({
  name: 'charactersInfo',
  initialState,
  reducers: {
    update(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    updateSuccess(state, action: PayloadAction<SearchResponseInterface>) {
      state.isLoading = false;
      state.data = action.payload.data;
      state.pagination = action.payload.pagination;
    },
  },
});

export default charactersInfoSlice.reducer;
