import { FC } from 'react';
import { Header } from '../Header/Header';
import { NavLink, Outlet } from 'react-router-dom';

export const RootLayout: FC = () => {
  return (
    <>
      <Header />
      <nav>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/contact'}>contact</NavLink>
        <NavLink to={'/details'}>details</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};
