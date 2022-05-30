import React from 'react';
import ChiefCard from "./ChiefCard";



const ChiefSection = () => {

    const chiefs = [
        {
            name: "Juan Carlos",
            img: "/chiefs/chief-1.jpg",
            recipesCount: "10",
            cuisine: "Mexican",
        },
        {
            name: "John Doe",
            img: "/chiefs/chief-2.jpg",
            recipesCount: "05",
            cuisine: "Japanese",
        },
        {
            name: "Erich Maria",
            img: "/chiefs/chief-3.jpg",
            recipesCount: "13",
            cuisine: "Italian",
        },
        {
            name: "Chris Brown",
            img: "/chiefs/chief-4.jpg",
            recipesCount: "08",
            cuisine: "American"
        },
        {
            name: "Blake Lively",
            img: "/chiefs/chief-5.jpg",
            recipesCount: "09",
            cuisine: "French"
        },
        {
            name: "Ben Affleck",
            img: "/chiefs/chief-6.jpg",
            recipesCount: "04",
            cuisine: "Indian"
        }
    ]
  return (
    <div className='chief-section'>
        <h1 className='title'>Our Top Chiefs</h1>
        <div className='chief-container'>
            {chiefs.map((chief,index)=>(
                <ChiefCard chief={chief} key={index}/>
            ))}
        </div>
    </div>
  )
}

export default ChiefSection;