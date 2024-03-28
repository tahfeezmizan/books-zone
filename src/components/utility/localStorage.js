import { toast } from 'react-toastify';

// get read books data
const getStoredBooks = () => {
    const storedBook = localStorage.getItem('read-book');
    if (storedBook) {
        return JSON.parse(storedBook);
    }
    return []
}

// get Wishlist Data
const getStoredWishlist = () => {
    const storedWishList = localStorage.getItem('wishlist-book');
    if (storedWishList) {
        return JSON.parse(storedWishList);
    }
    return []
}

const saveReadBook = bookId => {
    const storedBooks = getStoredBooks();
    const isExist = storedBooks.find(books => books == bookId);
    if (!isExist) {
        storedBooks.push(bookId);
        localStorage.setItem('read-book', JSON.stringify(storedBooks));
        toast.success('Add new books to read list')
    } else {
        toast.error('This book already exists')
    }
};

const saveWishList = bookId => {
    const storedWishListBook = getStoredWishlist();
    const isExist = storedWishListBook.find(book => book == bookId);
    const storedBooks = getStoredBooks();
    const isReadBookExist = storedBooks.find(books => books == bookId);
    if (isReadBookExist) {
        toast.error("Already read this book")
    } else if (!isExist) {
        storedWishListBook.push(bookId);
        localStorage.setItem('wishlist-book', JSON.stringify(storedWishListBook));
        toast.success("Book added to Wishlist")
    }
    else {
        toast.error('Already Exists');
    }

};

export { getStoredBooks, saveReadBook, saveWishList, getStoredWishlist }