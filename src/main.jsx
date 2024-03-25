import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Navigation from './components/Header/Navigation.jsx';
import Home from './components/Home/Home.jsx';
import ListedBooks from './components/ListedBooks/ListedBooks.jsx';
import PagesRead from './components/PagesRead/PagesRead.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import BooksDetails from './components/ListedBooks/BooksDetails.jsx';


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
        element: <ListedBooks></ListedBooks>
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
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
