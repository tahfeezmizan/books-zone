import React, { useEffect, useState } from 'react';
import SingleBooks from './SingleBooks';

const ListedBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    } ,[]);

    return (
        <div className='w-full lg:w-11/12 xl:w-8/12 mx-auto px-4 md:px-6 lg:px-0 py-10'>
            <div className="text-center mb-8">
                <h2 className='text-5xl pb-4 font-bold'>Books</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {
                    books.map(book => <SingleBooks key={book.bookId} books={book}></SingleBooks>)
                }
            </div>

            
        </div>
    );
};

export default ListedBooks;