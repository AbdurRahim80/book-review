import { useEffect, useState } from "react";
import { getBook } from "../../utilies/utility";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { useLoaderData } from "react-router-dom";
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const data = [
    {
        name: 'The Silent Patient',
        uv: 336,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Sing',
        uv: 384,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Educated',
        uv: 352,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Becoming',
        uv: 448,
        pv: 3908,
        amt: 2000,
    },


];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PageToRead = () => {

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

    console.log("For Chartsss", readBook[0]);
    return (
        <div>
            {
                readBook.map(read => console.log("Book Name", read.bookName, read.totalPages))

            }
            
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
        </div >
    );
};

export default PageToRead;