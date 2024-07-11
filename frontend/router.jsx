import {Navigate, createBrowserRouter} from  'react-router-dom';
import Product from './src/Components/Product';
import Login from './src/Components/Login';
import Register from './src/Components/Register';
import NotFound from './src/Components/NotFound';
import Defaultlayout from './src/Components/Defaultlayout';
import Dashboard from './src/views/Dashboard';
import GuestLayout from './src/Components/GuestLayout';
import Home from './src/views/Home';
const router = createBrowserRouter([

    {
          path:'/dashboard',
          element:<Defaultlayout/>,
          children:[
            {
                  path:'/dashboard',
                  element: <Dashboard/>
            }, 
          ]
    },


    {
         path:'/',
         element:<GuestLayout/>,
         children:[

            {
                path:'/',
                element: <Navigate to='/home'></Navigate>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
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