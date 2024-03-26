import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Root from './components/Root/Root.jsx';
import Navigation from './components/Header/Navigation.jsx';
import Home from './components/Home/Home.jsx';
import PagesRead from './components/PagesRead/PagesRead.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import BooksDetails from './components/ListedBooks/BooksDetails.jsx';
import StoredBooks from './components/ListedBooks/StoredBooks.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/listedbook',
        element: <StoredBooks></StoredBooks>,
        loader: () => fetch('../books.json'),
      },
      {
        path: '/pageread',
        element: <PagesRead></PagesRead>
      },
      {
        path: '/booksdetails/:bookId',
        element: <BooksDetails></BooksDetails>,
        loader: () => fetch('../books.json'),
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>,
)
