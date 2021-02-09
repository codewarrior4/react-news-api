import React from 'react'
import moment from 'moment'
import {v4 as uuid } from 'uuid'
const Newsdetails = ({newss}) => {
    var desc= newss.description

    if(desc === null){
        desc = ""
    }
    console.log(desc)
    var description = desc.slice(0,130)
    return (
        <div className="w-full md:w-1/3 px-2 pb-12" key={uuid()}>
        <div className="h-full bg-white rounded overflow-hidden shadow-md hover:shadow-lg relative smooth">
            <a href={newss.url} target="_blank" className="no-underline hover:no-underline" rel="noreferrer">
                <img src={newss.urlToImage} alt={newss.title} className="h-48 w-full rounded-t shadow-lg" />
                <div className="p-6 h-auto md:h-48">
                    <p className="text-gray-600 text-xs md:text-sm">{newss.author}</p>
                    <div className="font-bold text-md text-gray-900">{newss.title}</div>
                    
                    <p className="text-gray-800 font-serif text-base mb-5">
                    {description} ...
                    </p>
                </div>
                <div className="flex items-center justify-between inset-x-0 bottom-0 p-6">
                    <b>Source {newss.source['name']}</b>
                    <p className="text-gray-600 text-xs md:text-sm">{moment(newss.publishedAt).calendar()} READ</p>
                </div>
            </a>
        </div>
    </div>
    )
}

export default Newsdetails
