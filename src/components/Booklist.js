import React,{useContext} from 'react';
import { Bookcontext } from '../context/Bookcontext';
import Bookdetails from './Bookdetails'

const BookList = () => {
    const {Books} = useContext(Bookcontext)
    return Books.length ?
    ( 
        <div className="">
            <div className="book-list">
                <ul>
                    {Books.map(book =>{
                        return (<Bookdetails book={book} key={book.id} />) 
                    })}
                </ul>
            </div>
        </div>
     ):
     
     (
        <div className="empty">
            No books to read for now.. :)
        </div>
     )
}
 
export default BookList;