import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBooks, getStoredWishlist } from "../utility/localStorage";
import StoredReadBookDetials from "./StoredReadBookDetials";

const StoredBooks = () => {
    const allBooks = useLoaderData();
    const [readBook, setReadBook] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [sortBy, setSortBy] = useState("");
    const [check, setCheck] = useState(true);
    console.log(check)

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

    // Sorting function for both read books and wishlist
    const sortBooks = (books, sorting) => {
        let sortedBooks = [...books];
        if (sorting === "rating") {
            sortedBooks.sort((a, b) => b.rating - a.rating);
        } else if (sorting === "totalPages") {
            sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
        } else if (sorting === "yearOfPublishing") {
            sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        }
        return sortedBooks;
    };

    // Handler for sorting
    const handleSort = (sorting) => {
        setSortBy(sorting);
        const sortedReadBooks = sortBooks(readBook, sorting);
        const sortedWishlist = sortBooks(wishlist, sorting);
        setReadBook(sortedReadBooks);
        setWishlist(sortedWishlist);
    };

    return (
        <div className='w-full lg:w-11/12 xl:w-8/12 mx-auto px-4 md:px-6 lg:px-0 py-10'>

            <div className="text-center mb-8 bg-gray-100 py-10 rounded-xl">
                <h2 className='text-4xl pb-4 font-bold'>Books</h2>
            </div>

            {/* Sort By button  */}
            <div className="flex items-center justify-center dropdown dropdown-bottom mb-52">
                <div tabIndex={0} role="button" className="btn m-1 text-center">Sort By</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><p onClick={() => handleSort("rating")}>Rating</p></li>
                    <li><p onClick={() => handleSort("totalPages")}>Number of Pages</p></li>
                    <li><p onClick={() => handleSort("yearOfPublishing")}>Publisher Year</p></li>
                </ul>
            </div>

            <div role="tablist" className="tabs tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" onClick={() => setCheck(!check)} checked={check} />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300  p-6">
                    {readBook.map(readBookData => <StoredReadBookDetials data={readBookData} key={readBookData.bookId}></StoredReadBookDetials>)}
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books" onClick={() => setCheck(!check)} checked={!check}/>
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 p-6">
                    {wishlist.map(wishListData => <StoredReadBookDetials data={wishListData} key={wishListData.bookId}></StoredReadBookDetials>)}
                </div>
            </div>

        </div>
    );
};

export default StoredBooks;
