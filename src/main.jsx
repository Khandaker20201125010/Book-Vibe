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
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
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
