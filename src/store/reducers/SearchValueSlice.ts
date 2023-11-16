import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: '',
};

export const SearchValueSlice = createSlice({
  name: 'searchValue',
  initialState,
  reducers: {
    update(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export default SearchValueSlice.reducer;
