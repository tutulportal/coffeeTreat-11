import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main/Main';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Services from './pages/Services';
import Service from './pages/Service';
import Login from './pages/Login';
import Register from './pages/Register';

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
          element: <Services/>
        },
        {
          path: '/services/:id',
          loader: async ({params}) => fetch(`http://localhost:5000/services/single/${params.id}`),
          element: <Service/>
        },
      ]
    },
    {
      path: '*',
      element: <NotFound/>
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/register',
      element: <Register/>
    }
  ]);
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
