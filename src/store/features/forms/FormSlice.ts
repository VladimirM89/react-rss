import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FormInterface } from '../../../types/FormTypes';

export type InitialStateType = {
  name: string;
  age: string;
  country: string;
  email: string;
  password: string;
  gender: string;
  file: string;
  agreement: boolean;
};

const initialState: Array<InitialStateType> = [];

export const FormSlice = createSlice({
  name: 'controlledForm',
  initialState,
  reducers: {
    updateForm(
      state,
      action: PayloadAction<{ data: Omit<FormInterface, 'file'>; base64Img: string }>
    ) {
      const value: InitialStateType = {
        name: action.payload.data.name,
        age: action.payload.data.age,
        country: action.payload.data.country,
        email: action.payload.data.email,
        password: action.payload.data.password,
        gender: action.payload.data.gender,
        agreement: action.payload.data.agreement,
        file: action.payload.base64Img,
      };

      if (state.length <= 1) {
        state.push(value);
      } else {
        state.shift();
        state.push(value);
      }
    },
  },
});

export default FormSlice.reducer;
