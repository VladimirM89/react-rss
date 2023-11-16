import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SearchPage } from './pages/SearchPage/SearchPage';

export const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<SearchPage />} />
    </Routes>
  );
};

export default App;
