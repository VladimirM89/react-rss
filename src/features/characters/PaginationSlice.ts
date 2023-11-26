import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

export interface initialStateInterface {
  page: number;
  limit: number;
}

const initialState: initialStateInterface = {
  page: 1,
  limit: 25,
};

export const PaginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    changePage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    changeLimit(state, action: PayloadAction<number>) {
      state.page = 1;
      state.limit = action.payload;
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

export default PaginationSlice.reducer;
