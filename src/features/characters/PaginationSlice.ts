import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface initialStateInterface {
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
});

export default PaginationSlice.reducer;
