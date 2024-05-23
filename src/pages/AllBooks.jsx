import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllBooks = () => {
    const books = useLoaderData()
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4 '>
            {
                books.map(book => <div key={book.bookId}>
                    <div className='bg-slate-200 p-2 rounded-lg'>
                        <img src={book.image} className='w-[560px] h-[500px] ' alt="" />
                    </div>
                </div>)
            }
        </div>
    );
};

export default AllBooks;