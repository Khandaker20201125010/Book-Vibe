import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Roots/Root';
import Home from './components/Pages/Home/Home';
import Booklist from './components/Booklist/Booklist';
import Readpages from './components/Readpages/Readpages';
import Bookdetails from './components/Bookdetails/Bookdetails';
import Error from './components/Error/Error';
import Premium from './components/Premium/Premium';
import Whychoseus from './components/Whychoseus/Whychoseus';
import Bookshow from './components/Hooks/Bookshow/Bookshow';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        element:<Home></Home>,
     
      },
      {
        path: "/Listed Books",
        element:<Booklist></Booklist>
     
      },
     
      {
        path: "/Pages to Read",
        element:<Readpages></Readpages>
     
      },
      {
        path: "/Premium",
        element:<Premium></Premium>
     
      },
      {
        path: "/Whychoseus",
        element:<Whychoseus></Whychoseus>
     
      },
      {
        path: "/Bookdetails/:bookId",
        element:<Bookdetails></Bookdetails>
     
      },
      
     
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
