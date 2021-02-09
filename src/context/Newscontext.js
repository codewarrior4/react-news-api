import React,{useState,useEffect,createContext} from 'react'
// import axios from 'axios'
export const Newscontext=createContext()
const NewscontextProvider = (props) => {
    const apikey="1023ac67f8714c55adf350e1d6cc136c"
const [News,setNews]= useState([])

    useEffect(()=>{
        fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikey}`)
        .then(res=>res.json())
        .then(data=>setNews(data.articles))
        .catch(err=>console.log(err))
    },[])

    return ( 
        <Newscontext.Provider value={{News}}>
            {props.children}
        </Newscontext.Provider>
     );
}
 
export default NewscontextProvider;