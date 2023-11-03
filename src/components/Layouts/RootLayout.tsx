import { FC } from 'react';
import { Header } from '../Header/Header';
import { Outlet } from 'react-router-dom';

export const RootLayout: FC = () => {
  return (
    <>
      <Header />
      <main>
        {/* <SearchPage /> */}
        <Outlet />
      </main>
    </>
  );
};
