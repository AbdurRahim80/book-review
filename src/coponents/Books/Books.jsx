
import Book from '../Book/Book';
import PropTypes from 'prop-types';

const Books = ({ booksData }) => {
    console.log(typeof booksData);
    return (
        <div>
            <h2 className=' text-[#131313] text-2xl font-bold mt-10 text-center'>Books</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    booksData.map(book => <Book key={book.bookId} book={book} />)
                }
            </div>

        </div>
    );
};
Books.propTypes = {
    booksData: PropTypes.object.isRequired
};
export default Books;
