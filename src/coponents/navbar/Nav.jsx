import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/listed_books'>Listed Books</NavLink></li>
                            <li><NavLink to='/pages_to_read'>Pages to Read</NavLink></li>
                            <li><NavLink to = '/allAuthor'>All Author</NavLink></li>
                            <li><NavLink to = '/allBooks'>All Books</NavLink></li>
                        </ul>
                    </div>
                    <Link className="btn btn-ghost text-2xl font-bold text-[#131313]">Book Vibe</Link>
                </div>
                <div className="navbar-center  hidden lg:flex">
                    <ul className=" flex items-center gap-10 text-[#131313CC]">
                        <li><NavLink 
                        to='/'
                        className={({isActive})=> isActive? "border p-2 border-[#23BE0A] rounded-lg": "bold"}
                        >Home</NavLink></li>
                        <li><NavLink 
                        to='/listed_books'
                        className={({isActive})=> isActive? "border p-2 border-[#23BE0A] rounded-lg": "bold"}
                        >Listed Books</NavLink></li>
                        <li><NavLink 
                        to='/pages_to_read'
                        className={({isActive})=> isActive? "border p-2 border-[#23BE0A] rounded-lg": "bold"}
                        >Pages to Read</NavLink></li>
                        <li><NavLink 
                        to='/allAuthor'
                        className={({isActive})=> isActive? "border p-2 border-[#23BE0A] rounded-lg": "bold"}
                        >All author</NavLink></li>
                        <li><NavLink 
                        to='/allBooks'
                        className={({isActive})=> isActive? "border p-2 border-[#23BE0A] rounded-lg": "bold"}
                        >All Books</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    <div className="">
                        <a className="btn bg-[#23BE0A] text-[#FFF]">Sign In</a>
                    </div>
                    <div className="">
                        <a className="btn bg-[#59C6D2] text-[#FFF]">Sign Up</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;