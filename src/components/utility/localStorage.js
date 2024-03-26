const getStoredBooks = () => {
    const storedBook = localStorage.getItem('book');
    if(storedBook){
        return JSON.parse(storedBook);
    }
    return []
}

const saveReadBook = bookId => {
    const storedBooks = getStoredBooks();
    const isExist = storedBooks.find(books => books === bookId);
    if(!isExist) {
        storedBooks.push(bookId);
        localStorage.setItem('book', JSON.stringify(storedBooks));
    }
}

const saveWishList = bookId => {
    const storedWishListBook = getStoredBooks();
    const isExist = storedWishListBook.find(book => book => bookId);
    if(!isExist){
        storedWishListBook.push(bookId);
        localStorage.setItem('book', JSON.stringify(storedWishListBook));
    }

}
export {getStoredBooks, saveReadBook, saveWishList}