import React,{ useContext } from 'react'
import { Newscontext } from '../context/Newscontext'
import Newsdetails from './Newsdetails'
import {v4 as uuid} from 'uuid'
const Home = () => {
    const {News}=useContext(Newscontext)
    console.log(News)

    return News.length ? (
        <div>
                <div className="bg-gray-200">
                    
                    <div className="container w-full max-w-6xl mx-auto px-2 py-8">
                        <p className="text-gray-400 6xl">News Headlines</p>
                        <div className="flex flex-wrap -mx-2">
                            {News.map(newss =>{
                                return(<Newsdetails newss={newss} key={uuid()} />)
                            })}
                            

                        </div>
                    </div>
                </div>

        </div>) : 
        (<div>
            <div className="container w-full max-w-6xl mx-auto px-2 py-8">
                <p className="text-gray-400 6xl">No news now</p>
            </div>
        </div>)
    
}

export default Home
