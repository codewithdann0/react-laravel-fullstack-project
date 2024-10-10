import { createBrowserRouter } from 'react-router-dom';
import Login from './views/NotFound';
import Signup from './views/signup';
import Users from './views/users';
import NotFound from './views/NotFound';
const router = createBrowserRouter([
  {
    path : '/login',
    element:<Login/>
  },
  {
    path : '/signup',
    element:<Signup/>
  },
  {
    path : '/users',
    element:<Users/>
  },
  {
    path : '*',
    element:<NotFound/>
  }
]);

export default router;