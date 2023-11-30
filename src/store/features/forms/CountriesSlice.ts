import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CountryType } from '../../../types/countriesType';

type initialStateType = {
  data: Array<CountryType>;
};

const initialState: initialStateType = {
  data: [],
};

export const CountriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setCountries(state, action: PayloadAction<Array<CountryType>>) {
      state.data = action.payload;
    },
  },
});

export default CountriesSlice.reducer;
