import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CharacterInterface } from '../../interfaces/SearchResponseInterfaces';
import { HYDRATE } from 'next-redux-wrapper';

export interface initialStateInterface {
  id: number | null;
  character: CharacterInterface | null;
  isLoading: boolean;
  isOpened: boolean;
}

const initialState: initialStateInterface = {
  id: null,
  character: null,
  isLoading: false,
  isOpened: false,
};

export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    setCharacterId(state, action: PayloadAction<number>) {
      state.isLoading = true;
      state.id = action.payload;
      state.isOpened = true;
    },
    updateSuccess(state, action: PayloadAction<CharacterInterface | null>) {
      state.character = action.payload;
      state.isLoading = false;
    },
    handleDetailView(state, action: PayloadAction<boolean>) {
      state.isOpened = action.payload;
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

export default characterSlice.reducer;
