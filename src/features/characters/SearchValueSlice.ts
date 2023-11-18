import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getItemFromLocalStorage } from '../../utils/localStorage';
import { SEARCH_VALUE } from '../../constants/stringConstants';

interface initialStateInterface {
  searchValue: string;
}

const initialState: initialStateInterface = {
  searchValue: getItemFromLocalStorage(SEARCH_VALUE) || '',
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
