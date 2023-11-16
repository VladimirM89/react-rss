import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SearchResponseInterface } from '../../interfaces/SearchResponseInterfaces';

const initialState: SearchResponseInterface = {
  data: [],
  pagination: null,
};

export const charactersInfoSlice = createSlice({
  name: 'charactersInfo',
  initialState,
  reducers: {
    update(state, action: PayloadAction<SearchResponseInterface>) {
      state.data = action.payload.data;
      state.pagination = action.payload.pagination;
    },
  },
});

export default charactersInfoSlice.reducer;
