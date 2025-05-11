import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider,Route} from 'react-router-dom';
import NewUser from './components/NewUser.jsx';
import ErrorPage from './components/ErrorPage.jsx';


const router = createBrowserRouter([{
  path:"/",
  element: <App/>,
  errorElement:<ErrorPage/>
},
{
  path:"newuser",
  element:<NewUser/>
},

])

createRoot(document.getElementById('root')).render(

  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
