import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const PreviousSearch = () => {
  const searches = ['pizza', 'burger', 'cookies', 'juice',
   'biriyani', 'salad', 'ice cream', 'lasagna', 'pudding', 'soup'] 

  return (
    <div className='previous-search'>
      <h2 className='title'>Previous Searches</h2>
      <div className='search-container'>
        {searches.map((item,index)=>(
          <div key={index} className="search-item">{item}</div>
        ))}
      </div>
      <div className="search-input">
        <input type="text" placeholder='Search...'/>
        <button><FontAwesomeIcon icon={faSearch}/></button>
      </div>
    </div>
  )
}

export default PreviousSearch;