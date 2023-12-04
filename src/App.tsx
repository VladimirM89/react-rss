import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
// import { SearchPage } from './pages/SearchPage/SearchPage';
import MainPage from './pages/MainPage/MainPage/MainPage';

export const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
};

export default App;
