import React from 'react'

const HeroSection = () => {

    const images = [
        "/gallery/img_1.jpg",
        "/gallery/img_2.jpg",
        "/gallery/img_3.jpg",
        "/gallery/img_4.jpg",
        "/gallery/img_5.jpg",
        "/gallery/img_6.jpg",
        "/gallery/img_7.jpg",
        "/gallery/img_8.jpg",
        "/gallery/img_9.jpg"
    ]
  return (
    <div className='hero-section'>
        <div className="hero-info">
            <h1 className='hero-title'>What Are We About</h1>
            <p className='hero-info-text'>FoodiesHub is a place where you can please your soul 
            and tummy with delicious food recepies of all cuisine. And our service is absolutely free. So start exploring now.
            </p>
            <button className='hero-btn'>Explore Now</button>
        </div>
        <div className="hero-images">
            {images.map((image,index)=>(
                <div className='custom-image' key={index}>
                    <img src={image} alt="food"></img>
                </div>
            ))}
        </div>
    </div>
  )
}

export default HeroSection;