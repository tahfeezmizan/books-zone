import { toast } from 'react-toastify';

// get read books data
const getStoredBooks = () => {
    const storedBook = localStorage.getItem('book read');
    if (storedBook) {
        return JSON.parse(storedBook);
    }
    return []
}

// get Wishlist Data
const getStoredWishlist = () => {
    const storedWishList = localStorage.getItem('wishlist book');
    if (storedWishList) {
        return JSON.parse(storedWishList);
    }
    return []
}

const saveReadBook = bookId => {
    const storedBooks = getStoredBooks();
    const isExist = storedBooks.find(books => books === bookId);
    if (!isExist) {
        storedBooks.push(bookId);
        localStorage.setItem('book read', JSON.stringify(storedBooks));
        toast.success('add books')
    }else{
        toast.error('Alread Add Book')
    }
};

const saveWishList = bookId => {
    const storedWishListBook = getStoredWishlist();
    const isExist = storedWishListBook.find(book => book === bookId);
    if (!isExist) {
        storedWishListBook.push(bookId);
        localStorage.setItem('wishlist book', JSON.stringify(storedWishListBook));
        toast.success("Welcome You get a Annda")
    }else{
        toast.error('Already Exists');
    }

};

export { getStoredBooks, saveReadBook, saveWishList }