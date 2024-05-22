import React from 'react';
import Bannar from '../coponents/bannar/Bannar';
import Books from '../coponents/Books/Books';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const booksData = useLoaderData();
    console.log(booksData);
    return (
        <div className='mb-10'>
            <Bannar/>
            <Books booksData ={booksData}/>
        </div>
    );
};

export default Home;