import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const QuoteSection = () => {
  return (
    <div className='quote-section'>
        <p className='info'>
            <FontAwesomeIcon icon={faQuoteLeft}/>
            Food is everything we are. It's an extension
             of nationalist feeling, ethnic feeling, your personal
              history, your province, your region, your tribe, your grandma. 
              It's inseparable from those from the get-go.
        </p>
        <p className='author'>- Anthony Bourdain</p>
    </div>
  )
}

export default QuoteSection;