import React from 'react';
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    console.log(book);
    const { bookId, image, tags, bookName, author, category, rating } = book;

    return (
        <div>
            <Link
            to={`book/${bookId}`}
             className="card card-compact  bg-base-100 border p-6 mt-5">
                <figure className='bg-[#F3F3F3] p-4 rounded-lg'><img src={image} alt="Shoes" className='w-32 h-40' /></figure>
                <div className="card-body">
                    <div className='flex justify-between'>
                        {
                            tags.map((tag, index) => <div key={index} >
                                <div className='grid grid-cols-1 gap-6 py-2 text-[#23BE0A] font-semibold text-md'>
                                    <Link to='/' className='bg-[#23BE0A0D] py-2 px-4 rounded-lg'><p>{tag}</p></Link>
                                </div>
                            </div>)
                        }
                    </div>
                    <h1 className='fontPlayfairDisplay text-2xl font-bold'>{bookName}</h1>
                    <p>By: <span className='font-semibold'>{author}</span></p>
                    <hr className='' />
                    <div className='flex justify-between items-center'>
                        <p>{category}</p>
                        <p className='flex justify-end gap-1'>{rating} <span><CiStar size={20} /></span></p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Book;
