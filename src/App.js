import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './pages/layouts/Root';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/Home';
import { productsLoader } from './components/products/ProductsSection';
import TmpPage from './pages/Tmp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage />, loader: productsLoader },
      { path: 'tmp', element: <TmpPage /> },
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App;
