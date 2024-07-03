import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import GuestLayout from  './Components/GuestLayout';
import { RouterProvider } from 'react-router-dom'
import router from '../router.jsx';
import {ContextProvider} from './context/ContextProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
<RouterProvider router={router}></RouterProvider>
</ContextProvider>
  </React.StrictMode>,
)
