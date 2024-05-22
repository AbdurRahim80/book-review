import React, { useEffect, useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { NavLink, Outlet } from 'react-router-dom';
import { getBook } from '../../utilies/utility';

const BookListed = () => {
    const [tagIndex, setTagIndex] = useState(0);



    // const [readBook, setReadBook] = useState();

    // useEffect(() => {
    //     const storeRedadBook = getBook();
    //     setReadBook(storeRedadBook);
    // }, [])
    // console.log(readBook);


    return (
        <div>
            <h1 className='text-3xl font-black bg-[#1313130D] p-6 rounded-lg text-center'>Books</h1>
            <div className="dropdown  dropdown-bottom flex justify-center items-center mt-3">
                <div tabIndex={0} role="button" className="btn m-1 text-[#FFF] bg-[#23BE0A]">Sort By <RiArrowDropDownLine size={30} /></div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu  shadow rounded-box w-52">
                    <li><a>Rating</a></li>
                    <li><a>Number of pages</a></li>
                    <li><a>Publisher year</a></li>
                </ul>
            </div>
            <div>
                <div className="flex items-center  overflow-x-auto mt-40 overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
                    <NavLink
                        to=''
                        onClick={() => setTagIndex(0)}
                        rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  rounded-t-lg  dark:border-gray-600 dark:text-gray-600
                    ${tagIndex === 0 ? 'border border-b-0' : "border-b"}
                    `}>
                        <span>Read Books</span>
                    </NavLink>
                    <NavLink
                        to='/listed_books/wishlist'
                        onClick={() => setTagIndex(1)}
                        rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg dark:border-gray-600 
                    ${tagIndex === 1 ? 'border border-b-0' : "border-b"}
                    dark:text-gray-900`}>
                        <span>Wishlist Books</span>
                    </NavLink>
                </div>
            </div>
            <Outlet/>
        </div>
    );
};

export default BookListed;