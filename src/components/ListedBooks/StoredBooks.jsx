import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBooks } from "../utility/localStorage";


const StoredBooks = () => {
    const allBooks = useLoaderData();
    const [storedBook, setStoredBook] = useState([]);

    // const {bookName, author, image} = storedBook;

    useEffect(() => {
        const storedBookIds = getStoredBooks();
        if (allBooks.length > 0) {
            const readBooks = allBooks.filter(books => storedBookIds.includes(books.bookId));
            setStoredBook(readBooks)
        }
    }, [allBooks]);

    return (
        <div className='w-full lg:w-11/12 xl:w-8/12 mx-auto px-4 md:px-6 lg:px-0 py-10'>
            <div className="text-center mb-8 bg-gray-100 py-10 rounded-xl">
                <h2 className='text-4xl pb-4 font-bold'>Books</h2>
            </div>

            {/* Sort By button  */}
            <div className="flex items-center justify-center dropdown dropdown-bottom">
                <div tabIndex={0} role="button" className="btn m-1">Sort By</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </div>

            <div role="tablist" className="tabs tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Read Books</div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books" checked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Wishlist Books</div>
            </div>

        </div>
    );
};

export default StoredBooks;