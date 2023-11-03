import { FC } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { RootLayout } from './components/Layouts/RootLayout';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import DetailedCard, { detailedCardLoader } from './components/DetailedCard/DetailedCard';
import { SearchPage } from './pages/SearchPage/SearchPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<SearchPage />}>
        {/* <Route path="/" element={<DetailLayout />}> */}
        <Route index loader={detailedCardLoader} element={<DetailedCard />} />
      </Route>
      {/* </Route> */}
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

export const App: FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
