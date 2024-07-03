import {Navigate, createBrowserRouter} from  'react-router-dom';
import GuestLayout from './src/Components/Guestlayout';
import Product from './src/Components/Product';
import Login from './src/Components/Login';
import Register from './src/Components/Register';
import Users from './src/Components/Users';
import NotFound from './src/Components/NotFound';
import Defaultlayout from './src/Components/Defaultlayout';
import Dashboard from './src/views/Dashboard';
import Home from './src/views/Home';
const router = createBrowserRouter([

    {
          path:'/',
          element:<Defaultlayout/>,
          children:[
            {
                  path:'/',
                  element: <Navigate to="/users"/>
            },

            {
                path:'/dashboard',
                element:<Dashboard/>
            },
            {
                path:'/users',
                element:<Users/>
            },
            
          ]
    },
    {
         path:'/',
         element:<GuestLayout/>,
         children:[
            {
                path:'/register',
                element:<Register/>
            },
        
            {
                path:'/login',
                element:<Login/>
            }
         ]
    },
   
    {
       path:'*',
       element:<NotFound></NotFound>
    },
   
    {
        path:'/product',
        element:<Product                                                                                                                                                                                                                                                                                                                 />
    }
])

export default router;