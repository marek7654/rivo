import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './pages/layouts/Root';
//import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    //errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App;
