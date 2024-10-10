import { createBrowserRouter } from 'react-router-dom';
import Signup from './views/Signup'; // Ensure the path is correct
import Users from './views/Users'; // Ensure the path is correct
import NotFound from './views/NotFound'; // Ensure the path is correct
import DefaultLayout from './components/DefaultLayout'; // Import DefaultLayout
import GuestLayout from './components/GuestLayout'; // Make sure this file is named GuestLayout.jsx
import Dashboard from './views/Dashboard'; // Ensure the path is correct
import Login from './views/login';

const router = createBrowserRouter([
  {
    path: '/', // Change to distinguish authenticated routes
    element: <DefaultLayout />,
    children: [
      {path :'/' , element : <Navigator to="/users"/>},
      { path: '/dashboard', element: <Dashboard /> }, // Removed leading slash
      { path: '/users', element: <Users /> } // Removed leading slash
    ]
  },
  {
    path: '/', // Keep this for guest routes
    element: <GuestLayout />,
    children: [
      { path: '/login', element: <Login/> }, // Removed leading slash
      { path: '/signup', element: <Signup /> } // Removed leading slash
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
]);

export default router;
