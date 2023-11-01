import { FC } from 'react';
import { SearchPage } from './pages/SearchPage/SearchPage';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { RootLayout } from './components/Layouts/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<SearchPage />} />
      <Route path="item" element={<p>ITEM PAGE</p>} />
    </Route>
  )
);

export const App: FC = () => {
  return <RouterProvider router={router} />;
  // return <SearchPage />;
};

export default App;
