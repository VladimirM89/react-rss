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
import { RootLayout } from './components/Layouts/RootLayout';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import ControlledFormPage from './pages/ControlledFormPage/ControlledFormPage';
import UncontrolledFormPage from './pages/UncontrolledFormPage/UncontrolledFormPage';
import MainPage from './pages/MainPage/MainPage/MainPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<MainPage />} />
      <Route path="/controlledForm" element={<ControlledFormPage />} />
      <Route path="/uncontrolledForm" element={<UncontrolledFormPage />} />
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
