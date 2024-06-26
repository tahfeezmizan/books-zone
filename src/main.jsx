import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CollectionBooks from './components/CollectionBook/CollectionBooks.jsx';
import ContactUs from './components/ContactUs/ContactUs.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import BooksDetails from './components/ListedBooks/BooksDetails.jsx';
import StoredBooks from './components/ListedBooks/StoredBooks.jsx';
import PagesRead from './components/PagesRead/PagesRead.jsx';
import Root from './components/Root/Root.jsx';
import './index.css';


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
        loader: () => fetch('/books.json'),
      },
      {
        path: '/pageread',
        element: <PagesRead></PagesRead>,
        loader: () => fetch('/books.json'),
      },
      {
        path: '/collectionbooks',
        element: <CollectionBooks></CollectionBooks>,
        loader: () => fetch('/books.json'),
      },
      {
        path: '/contact',
        element: <ContactUs></ContactUs>
      },
      {
        path: '/booksdetails/:bookId',
        element: <BooksDetails></BooksDetails>,
        loader: () => fetch('/books.json'),
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
