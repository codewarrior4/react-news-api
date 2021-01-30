import React,{createContext,useState} from 'react';

export const Bookcontext=createContext();

const BookContextProvider = (props) => {

    const [Books, setBooks] = useState([
        {author:"Adebayo",title:"Book one",id:1},
        {author:"Mayowa",title:"Book two",id:2},
        {author:"Michael",title:"Book three",id:3},
        {author:"Temitope",title:"Book four",id:4},
        {author:"Abiodun",title:"Book five",id:5}
    ])

    const addBook=(title,author)=>{
        let curid = Books[Books.length -1].id
        setBooks([...Books,{
            title,author,id:curid +1
        }])
    }

    const removeBook=(id)=>{
        setBooks(Books.filter(Book =>Book.id !==id))
    }

    return (  
        <Bookcontext.Provider value={{Books,addBook,removeBook}}>
            {props.children}
        </Bookcontext.Provider>
    );
}
 
export default BookContextProvider;