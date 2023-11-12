import { FC } from 'react';
import {
  // createBrowserRouter,
  // createRoutesFromElements,
  Route,
  // RouterProvider,
  Routes,
} from 'react-router-dom';
// import { RootLayout } from './components/Layouts/RootLayout';
// import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
// import DetailCard, { detailCardLoader } from './components/DetailCard/DetailCard';
import { SearchPage } from './pages/SearchPage/SearchPage';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<RootLayout />}>
//       <Route path="/" element={<SearchPage />}>
//         <Route index loader={detailCardLoader} element={<DetailCard />} />
//       </Route>
//       <Route path="*" element={<NotFoundPage />} />
//     </Route>
//   )
// );

export const App: FC = () => {
  // return <RouterProvider router={router} />;
  return (
    <Routes>
      <Route path="/" element={<SearchPage />} />
    </Routes>
  );
};

export default App;
