import React,{useContext} from 'react';
import { Bookcontext } from '../context/Bookcontext';

const Navbar = () => {

    const {Books} = useContext(Bookcontext)
    return ( 
        <div className="navbar">
            <h1>Warrior Reading List</h1>
            <p>Currently you have {Books.length} books to read</p>


        </div>
     );
}
 
export default Navbar;