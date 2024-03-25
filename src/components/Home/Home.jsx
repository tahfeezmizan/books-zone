import React from 'react';
import Banner from './Banner';
import ListedBooks from '../ListedBooks/ListedBooks';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ListedBooks></ListedBooks>
        </div>
    );
};

export default Home;