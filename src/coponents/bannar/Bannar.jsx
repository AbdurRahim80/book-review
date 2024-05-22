import React from 'react';
import bannar from '../../../src/coponents/bannar/bannar.png';
import { Link } from 'react-router-dom';
const Bannar = () => {
    return (
            <div className='flex flex-col lg:flex-row justify-between items-center gap-2 p-24 mt-10 bg-[#1313130D] rounded-2xl'>
                <div className='space-y-10'>
                    <h1 className='text-5xl font-bold text-[#131313] fontPlayfairDisplay'>Books to freshen up your bookshelf</h1>
                    <Link to='/listed_books' className="btn bg-[#23BE0A] text-[#FFF] hover:bg-[#575db8cc] text-xl">View The List</Link>
                </div>
                <div>
                    <img src={bannar} alt="" />
                </div>
            </div>
    )
};

export default Bannar;