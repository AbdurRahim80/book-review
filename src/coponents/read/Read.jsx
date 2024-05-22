import { useEffect, useState } from 'react';
import { getBook } from '../../utilies/utility';
import { Link, useLoaderData } from 'react-router-dom';

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
                            <div className='grid grid-cols-1 lg:grid-cols-2  gap-6 '>
                                <div className='flex justify-center items-center bg-[#F3F3F3]  rounded-lg'>
                                    <img src={readbk.image} className='' alt="" />
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
                                            <div className='text-xs'>
                                                <p>Year of Publishing: <span>{readbk.yearOfPublishing}</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className='flex gap-10'>
                                        <div className='space-y-3'>
                                            <p>Number of Pages:</p>
                                            <p>Publisher:</p>
                                            <p>Year of Publishing:</p>
                                            <p>Rating:</p>
                                        </div>
                                        <div className='space-y-3 font-semibold'>
                                            <p>{readbk.totalPages}</p>
                                            <p>{readbk.publisher}</p>
                                            <p>{readbk.yearOfPublishing}</p>
                                            <p>{readbk.rating}</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-5 items-center'>
                                        <Link
                                            onClick={() => handleBook(bookId)}
                                            className="">
                                            <a className="py-[13px] px-4  rounded-xl border">Read</a>
                                        </Link>
                                        <Link className="">
                                            <a className="btn bg-[#50B1C9] text-[#FFF]">Wishlist</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Read;