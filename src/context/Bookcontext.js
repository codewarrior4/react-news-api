import React,{createContext,useReducer} from 'react';
import { bookReducer } from '../reducers/bookreducer';

export const Bookcontext=createContext();

const BookContextProvider = (props) => {

    const [Books, dispatch] = useReducer(bookReducer,[])

    // const addBook=(title,author)=>{
    //     let curid = Books[Books.length -1].id
    //     setBooks([...Books,{
    //         title,author,id:curid +1
    //     }])
    // }

    // const removeBook=(id)=>{
    //     setBooks(Books.filter(Book =>Book.id !==id))
    // }

    return (  
        <Bookcontext.Provider value={{Books,dispatch}}>
            {props.children}
        </Bookcontext.Provider>
    );
}
 
export default BookContextProvider;