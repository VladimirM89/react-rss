import { Outlet } from 'react-router-dom';
import { SearchPage } from '../../pages/SearchPage/SearchPage';

export const DetailLayout = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SearchPage />
      <Outlet />
    </div>
  );
};
