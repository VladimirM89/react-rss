import { FC, useEffect } from 'react';
import { Header } from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { CountriesSlice } from '../../store/features/forms/CountriesSlice';
import { countriesList } from '../../utils/countriesList';

export const RootLayout: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log('Main page');
    dispatch(CountriesSlice.actions.setCountries(countriesList));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
