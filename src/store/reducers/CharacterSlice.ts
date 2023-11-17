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
    update(state) {
      state.isLoading = true;
    },
    updateSuccess(state, action: PayloadAction<CharacterInterface>) {
      state.isLoading = false;
      state.data = action.payload;
    },
  },
});

export default characterSlice.reducer;
