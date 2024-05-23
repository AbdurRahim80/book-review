import { useEffect, useState } from 'react';
import { getBook } from '../../utilies/utility';
import { Link, useLoaderData } from 'react-router-dom';
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { MdOutlineContactPage } from "react-icons/md";
// import PageToRead from '../../pages/PageToRead/PageToRead';
const Read = () => {
    const readLoader = useLoaderData()
    const [readBook, setReadBook] = useState([]);
    // const {bookId} = useParams()
    useEffect(() => {
        const storeRedadBook = getBook();
        if (readLoader.length > 0) {
            // const bookRead = readLoader.filter(readbk => 
            //     storeRedadBook.include(readbk.bookId))
            const bookRead = [];
            for (const id of storeRedadBook) {
                const book = readLoader.find(book => book.bookId === id)
                if (book) {
                    bookRead.push(book);
                }

            }
            setReadBook(bookRead)
            // console.log(readLoader,bookRead,storeRedadBook )
        }

    }, []);

    // const { image, tags, bookName, review, author, category, rating, totalPages, publisher, yearOfPublishing } = readbk;

    return (
        <div>
            <div className=''>
                {
                    readBook.map(readbk => <div key={readbk.bookId}>
                        <div className=' border p-2 my-5 rounded-lg'>
                            <div className='flex flex-col lg:flex-row gap-10  '>
                                <div className='flex justify-center items-center bg-[#F3F3F3] w-80 rounded-lg'>
                                    <img src={readbk.image} className='h-40' alt="" />
                                </div>
                                <div className='space-y-2'>
                                    <h1 className='fontPlayfairDisplay text-[#131313] text-lg font-extrabold'>{readbk.bookName}</h1>
                                    <p className='text-sm'>By: <span>{readbk.author}</span></p>

                                    <p className='text-sm'>{readbk.category}</p>

                                    <div className='flex items-center gap-1'>
                                        <span className='font-semibold text-sm'>Tag: </span>
                                        <div className='flex'>
                                            {
                                                readbk.tags.map((tag, index) => <div key={index} >
                                                    <div className='grid grid-cols-1 gap-6 py-2 text-[#23BE0A] font-semibold text-md'>
                                                        <Link to='/' className='bg-[#23BE0A0D] flex gap-1 py-2 px-4 rounded-lg'><span className='flex gap-1 text-xs'>#<p >{tag}</p></span></Link>
                                                    </div>
                                                </div>)
                                            }
                                            <div className=' flex gap-1 items-center text-xs'>
                                                <span><CiLocationOn size={20} /></span>
                                                <p>Year of Publishing: <span>{readbk.yearOfPublishing}</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex justify-start gap-6'>
                                        
                                        <p className='flex gap-2 text-sm'><span><AiOutlineUsergroupDelete size={20}/></span> Publisher: {readbk.publisher}</p>
                                        <p className='flex gap-2 text-sm'><span><MdOutlineContactPage size={20}/></span> Page: {readbk.totalPages}</p>
                                    </div>
                                    <div className='flex gap-5 items-center text-sm'>
                                        <Link>
                                            <button className='px-3 py-2 text-[#328EFF] bg-[#328EFF26] rounded-2xl'>Category: {readbk.category}</button>
                                        </Link>
                                        <Link>
                                            <button className='px-3 py-2 text-[#FFAC33] bg-[#FFAC3326] rounded-2xl'>Rating: {readbk.rating}</button>
                                        </Link>
                                        <Link>
                                            <button className='px-3 py-2 text-[#FFF] bg-[#23BE0A] rounded-2xl'>View Details</button>
                                        </Link>
                                
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            {/* <PageToRead name ={readbk.bookName} totalPages ={readbk.totalPages}/> */}
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Read;