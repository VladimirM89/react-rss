import { FC } from 'react';
import { Header } from '../Header/Header';
import { NavLink, Outlet } from 'react-router-dom';

export const RootLayout: FC = () => {
  return (
    <>
      <Header />
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/item'}>Item</NavLink>
      <Outlet />
    </>
  );
};
