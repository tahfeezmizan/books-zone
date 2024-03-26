import React from 'react';
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SingleBooks = ({ books }) => {
    const { bookId, image, bookName, author, tags, category, rating } = books;
    console.log(books);
    return (
        <Link to={`booksdetails/${bookId}`}>
            <div onClick={`booksdetails${bookId}`} className="p-6 border border-gray-200 rounded-2xl">
                <div className="bg-gray-100 rounded-2xl flex items-center justify-center p-10 mb-6">
                    <img className="max-w-64 max-h-60 rounded" src={image} alt="" />
                </div>

                <div className="flex gap-4">
                    {
                        tags.map(tag => <span key={tag.index} className='bg-green-100 rounded-full font-medium text-green-500 px-4 py-2'>{tag}</span>)
                    }
                </div>
                <h2 className="py-4 text-2xl font-bold">{bookName}</h2>
                <p className='font-medium mb-5'>By: {author}</p>

                <div className=" flex gap-6 justify-between font-medium border-t border-dashed pt-5">
                    <p className="flex items-center gap-2">{category}</p>
                    <p className="flex items-center gap-2">{rating} <FaRegStar /></p>
                </div>
            </div>
        </Link>
    );
};

export default SingleBooks;