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
          element: <Home/>
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
