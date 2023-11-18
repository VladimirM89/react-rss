import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CharacterInterface } from '../../interfaces/SearchResponseInterfaces';

interface initialStateInterface {
  data: CharacterInterface | null;
  isLoading: boolean;
}

const initialState: initialStateInterface = {
  data: null,
  isLoading: false,
};

export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    updateLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    updateSuccess(state, action: PayloadAction<CharacterInterface | null>) {
      state.isLoading = false;
      state.data = action.payload;
    },
  },
});

export default characterSlice.reducer;
