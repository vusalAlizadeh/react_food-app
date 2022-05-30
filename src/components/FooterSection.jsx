import React from 'react'

const FooterSection = () => {
  return (
    <div className='footer-section'>
        <div className='footer-info'>
            <h3 className='info-title'>FoodiesHub.com</h3>
            <p>FoodiesHub is a place where you can please 
                your soul and tummy with delicious food recepies
                of all cuisine. And our service is absolutely free.
            </p>
            <p>&copy; 2022 | All Rights Reserved</p>
        </div>
        <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>foodieshub@gmail.com</p>
            <p>+994 55 123 45 67</p>
            <p>2393 Street NYC</p>
        </div>
        <div className="footer-socials">
            <h3>Socials</h3>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
        </div>
    </div>
  )
}

export default FooterSection;