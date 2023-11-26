import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

export interface initialStateInterface {
  searchValue: string;
}

const initialState: initialStateInterface = {
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
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      };
    },
  },
});

export default SearchValueSlice.reducer;
