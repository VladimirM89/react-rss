import React from 'react';
import ReactDOM from 'react-dom/client';
import './common.scss';
import './variable.scss';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import DetailCard from './components/DetailCard/DetailCard';
import { RootLayout } from './components/Layouts/RootLayout';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { SearchPage } from './pages/SearchPage/SearchPage';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<SearchPage />}>
        <Route index element={<DetailCard />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

const store = setupStore();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
