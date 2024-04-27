import ReactDOM from 'react-dom/client';
import { createBrowserRouter,createHashRouter RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import Error from './pages/Error';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Blog from './pages/Blog';
import Resume from './pages/Resume';
import Cards from './components/Cards/Cards';
import CardDetail from './components/Cards/CardDetail'; 
import Works from './pages/Works';


const router = creatHashRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'About',
        element: <About />,
      },
      {
        path: 'Works',
        element: <Works />,
        // children: [
        //   {
        //     index: true,
        //     element: <Cards />,
        //   },
        //   {
        //     path: ':name',
        //     element: <CardDetail />,
        //   },
        // ]
      },
      {
        path: 'Works/:name',
        element: <CardDetail />,
      },
      {
        path: 'Contact',
        element: <Contact />,
      },
      {
        path: 'Resume',
        element: <Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
