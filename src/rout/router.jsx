import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLay from "../layout/MainLay";
import BookListed from "../pages/booksListed/BookListed";
import PageToRead from "../pages/PageToRead/PageToRead";
import BookDetails from "../coponents/bookDetails/BookDetails";
import Read from "../coponents/read/Read";
import WishList from "../coponents/wishList/WishList";
import ErrorPage from "../coponents/errorPage/ErrorPage";
import AllAuthor from "../pages/AllAuthor";
import AllBooks from "../pages/AllBooks";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLay />,
        errorElement:<ErrorPage/>,
        children: [
            {
                index: true,
                element: <Home />,
                loader: () => fetch('../data.json')

            },
            {
                path: '/book/:bookId',
                element: <BookDetails />,
                loader: () => fetch(`../data.json`),
            }
            ,
            {
                path: '/listed_books',
                element: <BookListed />,
                loader: () => fetch(`../data.json`),
                children: [
                    {
                        index: true,
                        element: <Read />,
                        loader: () => fetch(`../data.json`)
                    },
                    {
                        path: 'wishlist',
                        element: <WishList />,
                        loader: () => fetch(`../data.json`)
                    }
                ]
            },
            {
                path: '/pages_to_read',
                element: <PageToRead />,
                loader: () => fetch(`../data.json`)
            },
            {
                path: '/allAuthor',
                element: <AllAuthor/>,
                loader: ()=> fetch('../data.json')
            },
            {
                path: '/allBooks',
                element: <AllBooks/>,
                loader: ()=> fetch('../data.json')
            }
        ]
    }
])

export default router;