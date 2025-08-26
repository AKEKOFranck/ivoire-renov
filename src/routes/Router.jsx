import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Work from '../pages/Work';
import About from '../pages/About';
import Info from '../pages/Info';
import Build1 from '../pagesWorks/Build1';
import Build2 from '../pagesWorks/Build2';
import Build3 from '../pagesWorks/Build3';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/Work',
        element:<Work/>
      },
      {
        path:'/About',
        element:<About/>
      },
      {
        path:'/Info',
        element:<Info/>
      },
      {
        path:'/Build1',
        element:<Build1/>
      },
      {
        path:'/Build2',
        element:<Build2/>
      },
      {
        path:'/Build3',
        element:<Build3/>
      },
     
    ]
  }
]);

export default router;