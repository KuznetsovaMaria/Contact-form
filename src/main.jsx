import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './pages/App.jsx';
import SuccessMsg from './pages/SuccessPage.jsx';
import ErrorPage from './pages/NotFoundPage.jsx';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';

const router = createBrowserRouter([
  {
    errorElement: <ErrorPage />,
    children: [
      { path: '/Contact-form/', element: <App /> },
      {
        path: '/Contact-form/form-submitted',
        element: <SuccessMsg />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
