import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main/Main';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main/>,
      children: [
        {
          path: '/',
          loader: async () => fetch('http://localhost:5000/services/3'),
          element: <Home/>
        },
        {
          path: '/services',
          loader: async () => fetch('http://localhost:5000/services/'),
          element: <></>
        },
      ]
    },
    {
      path: '*',
      element: <NotFound/>
    }
  ]);
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
