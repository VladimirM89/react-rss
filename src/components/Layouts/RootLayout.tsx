import { FC } from 'react';
import { Header } from '../Header/Header';
import MainPage from '../../pages/MainPage/MainPage/MainPage';
import { Outlet } from 'react-router-dom';

export const RootLayout: FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <MainPage />
        <Outlet />
      </main>
    </div>
  );
};
