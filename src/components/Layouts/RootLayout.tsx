/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from 'react';
import { Header } from '../Header/Header';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { CountriesSlice } from '../../store/features/forms/CountriesSlice';
import { countriesList } from '../../utils/countriesList';
import styles from './RootLayout.module.scss';
import LinkToMainComponent from '../LinkToMainComponent/LinkToMainComponent';
import cn from 'classnames';

export const RootLayout: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(CountriesSlice.actions.setCountries(countriesList));
  }, []);

  const location = useLocation();

  return (
    <div className={cn(styles.content_wrapper, 'wrapper')}>
      <Header />
      {location.pathname === '/' && (
        <nav className={styles.navigation}>
          <NavLink to="/controlledForm" className={styles.nav_link}>
            Controlled Form
          </NavLink>
          <NavLink to="/uncontrolledForm" className={styles.nav_link}>
            Uncontrolled Form
          </NavLink>
        </nav>
      )}
      <main className={styles.main_content}>
        <Outlet />
        {location.pathname !== '/' && <LinkToMainComponent />}
      </main>
    </div>
  );
};
