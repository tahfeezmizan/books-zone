import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBooks, getStoredWishlist } from "../utility/localStorage";
import StoredReadBookDetials from "./StoredReadBookDetials";

const StoredBooks = () => {
    const allBooks = useLoaderData();
    const [readBook, setReadBook] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [sortBy, setSortBy] = useState(""); // State to hold the selected sorting criteria

    useEffect(() => {
        const storedBookIds = getStoredBooks();
        if (allBooks.length > 0) {
            const readBooks = allBooks.filter(books => storedBookIds.includes(books.bookId));
            setReadBook(readBooks);
        }
    }, [allBooks]);

    useEffect(() => {
        const storedWishListIds = getStoredWishlist();
        if (allBooks.length > 0) {
            const wishlist = allBooks.filter(wishlist => storedWishListIds.includes(wishlist.bookId));
            setWishlist(wishlist);
        }
    }, [allBooks]);

    // Sorting function for read books
    const sortReadBooks = (criteria) => {
        let sortedReadBooks = [...readBook];
        if (criteria === "rating") {
            sortedReadBooks.sort((a, b) => b.rating - a.rating);
        } else if (criteria === "pages") {
            sortedReadBooks.sort((a, b) => a.pages - b.pages);
        } else if (criteria === "publisherYear") {
            sortedReadBooks.sort((a, b) => a.publisherYear - b.publisherYear);
        }
        setReadBook(sortedReadBooks);
    };

    // Sorting function for wishlist
    const sortWishlist = (criteria) => {
        let sortedWishlist = [...wishlist];
        if (criteria === "rating") {
            sortedWishlist.sort((a, b) => b.rating - a.rating);
        } else if (criteria === "pages") {
            sortedWishlist.sort((a, b) => a.pages - b.pages);
        } else if (criteria === "publisherYear") {
            sortedWishlist.sort((a, b) => a.publisherYear - b.publisherYear);
        }
        setWishlist(sortedWishlist);
    };

    return (
        <div className='w-full lg:w-11/12 xl:w-8/12 mx-auto px-4 md:px-6 lg:px-0 py-10'>

            <div className="text-center mb-8 bg-gray-100 py-10 rounded-xl">
                <h2 className='text-4xl pb-4 font-bold'>Books</h2>
            </div>

            {/* Sort By button  */}
            <div className="flex items-center justify-center dropdown dropdown-bottom">
                <div tabIndex={0} role="button" className="btn m-1 text-center">Sort By</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a onClick={() => { setSortBy("rating"); sortReadBooks("rating"); sortWishlist("rating"); }}>Rating</a></li>
                    <li><a onClick={() => { setSortBy("pages"); sortReadBooks("pages"); sortWishlist("pages"); }}>Number of pages</a></li>
                    <li><a onClick={() => { setSortBy("publisherYear"); sortReadBooks("publisherYear"); sortWishlist("publisherYear"); }}>Publisher year</a></li>
                </ul>
            </div>

            <div role="tablist" className="tabs tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" checked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300  p-6">
                    {
                        readBook?.map(readBookData => <StoredReadBookDetials data={readBookData} key={readBookData.bookId}></StoredReadBookDetials>)
                    }
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 p-6">
                    {
                        wishlist?.map(wishListData => <StoredReadBookDetials data={wishListData} key={wishListData.bookId}></StoredReadBookDetials>)
                    }
                </div>
            </div>

        </div>
    );
};

export default StoredBooks;
