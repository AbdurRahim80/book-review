
import { Link, useLoaderData, useParams } from 'react-router-dom';

const BookDetails = () => {
    const bookDetails = useLoaderData();
    console.log(bookDetails)
    const { bookId } = useParams()
    const bookDetail = bookDetails.find(bookDeta => bookDeta.bookId === bookId);
    console.log(bookDetail);
    const { image, tags, bookName, review, author, category, rating, totalPages, publisher, yearOfPublishing } = bookDetail;

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10'>
            <div className='flex justify-center items-center bg-[#F3F3F3] p-10 rounded-lg'>
                <img src={image} className='w-[430px] h-[510px]' alt="" />
            </div>
            <div className='space-y-4'>
                <h1 className='fontPlayfairDisplay text-[#131313] text-3xl font-extrabold'>{bookName}</h1>
                <p className=''>By: <span>{author}</span></p>
                <hr />
                <p>{category}</p>
                <hr />
                <p><span className='font-semibold'>review: </span>{review}</p>
                <div className='flex items-center gap-1'>
                    <span className='font-semibold'>Tag: </span>
                    <div className='flex'>
                        {
                            tags.map((tag, index) => <div key={index} >
                                <div className='grid grid-cols-1 gap-6 py-2 text-[#23BE0A] font-semibold text-md'>
                                    <Link to='/' className='bg-[#23BE0A0D] flex gap-1 py-2 px-4 rounded-lg'>#<p>{tag}</p></Link>
                                </div>
                            </div>)
                        }
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
                        <p>{totalPages}</p>
                        <p>{publisher}</p>
                        <p>{yearOfPublishing}</p>
                        <p>{rating}</p>
                    </div>
                </div>
                <div className='flex gap-5 items-center'>
                    <Link className="">
                        <a className="py-[13px] px-4  rounded-xl border">Read</a>
                    </Link>
                    <Link className="">
                        <a className="btn bg-[#50B1C9] text-[#FFF]">Wishlist</a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;