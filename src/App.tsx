import { FC } from 'react';
import { SearchPage } from './pages/SearchPage/SearchPage';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { RootLayout } from './components/Layouts/RootLayout';
import { DetailLayout } from './components/Layouts/DetailLayout';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<SearchPage />} />
      <Route path="contact" element={<p>CONTACTS</p>} />
      <Route path="details" element={<DetailLayout />}>
        <Route path="1" element={<p>Detailed card 1</p>} />
        <Route path="2" element={<p>Detailed card 2</p>} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

export const App: FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
