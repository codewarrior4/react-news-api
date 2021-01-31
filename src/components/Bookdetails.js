import React,{useContext} from 'react';
import { Bookcontext } from '../context/Bookcontext';

const BookDetails = ({book}) => {
   const {dispatch}= useContext(Bookcontext)

    return ( 
        <li key={book.id} onClick={()=>dispatch({type:"REMOVE_BOOK",id:book.id})}>
            <div className="title">
                {book.title}
            </div>
            <div className="author">
                {book.author}
            </div>
            
        </li>
     );
}
 
export default BookDetails;