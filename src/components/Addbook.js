import React,{useContext,useState} from 'react'
import { Bookcontext } from '../context/Bookcontext';

const Addbook = () => {
    const {addBook}=useContext(Bookcontext)

    const [title,setTitle]=useState('')
    const [author,setAuthor]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault()
        addBook(title,author);
        setTitle('')
        setAuthor('')
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Book title" value={title} onChange={(e)=>setTitle(e.target.value)} required/>

            <input type="text" placeholder="Book Author" value={author} onChange={(e)=>setAuthor(e.target.value)} required/>

            <input type="submit" value="Add book" />
        </form>
     );
}
 
export default Addbook;