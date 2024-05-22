import { json } from "react-router-dom";
import toast from 'react-hot-toast'
export const getBook =()=>{
    let books = [];
    const storedBook = localStorage.getItem("books");
    if(storedBook){
        books = JSON.parse(storedBook);
    }
    return books
}

// save book data 

export const setBook = bookId=>{
    let books = getBook();
    const isExit = books.find(bId=> bId === bookId);
    if(isExit){
        return toast.error("Already add it!")
    }
    books.push(bookId);
    localStorage.setItem("books", JSON.stringify(books))
    toast.success("book add successful!")

}

