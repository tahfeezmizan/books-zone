import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLoaderData, useParams } from 'react-router-dom';
import { saveReadBook, saveWishList } from '../utility/localStorage';

const BooksDetails = () => {
    const books = useLoaderData();
    const { bookId } = useParams();
    const bookIdInt = parseInt(bookId)
    const book = books.find(book => book.bookId === bookIdInt);
    const { image, bookName, author, tags, category, review, totalPages, publisher, yearOfPublishing, rating } = book

    const handleWishlist = () => {
        saveWishList(bookIdInt)
        
    }

    const handleReadBook = () => {
        saveReadBook(bookIdInt)
    }

    return (
        <div className='w-full lg:w-11/12 xl:w-8/12 mx-auto px-4 md:px-6 lg:px-0 py-10'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="bg-gray-100 rounded-2xl flex items-center justify-center p-10 mb-6">
                    <img className="max-w-96 max-h-96 rounded" src={image} alt="" />
                </div>

                <div className="">
                    <h2 className="text-5xl font-bold mb-4">{bookName}</h2>
                    <p className='font-medium text-xl pb-5 border-b'>By: {author}</p>
                    <p className="text-xl font-medium py-4 border-b">{category}</p>

                    <p className="font-normal py-4"><span className='font-bold'>Review:</span> {review}</p>

                    <div className="flex gap-4 items-center py-4 border-b">
                        <h3 className='font-bold'>Tags</h3>
                        {
                            tags.map((tag, index) => <span className='bg-green-100 rounded-full font-medium text-green-500 px-4 py-2' key={index}>#{tag}</span>)
                        }
                    </div>
                    <div className="py-6">
                        <p>Number of Pages: <span className='font-semibold'>{totalPages}</span></p>
                        <p>publisher: <span className='font-semibold'>{publisher}</span></p>
                        <p>Year of Publishing: <span className='font-semibold'>{yearOfPublishing}</span></p>
                        <p>rating: <span className='font-semibold'>{rating}</span></p>
                    </div>
                    <div className="">
                        <button onClick={handleReadBook} className='btn btn-outline mr-4'>Read</button>
                        <button onClick={handleWishlist} className='btn bg-[#50B1C9] text-white'>Wishlist</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BooksDetails;