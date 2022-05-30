import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"
const ChiefCard = ({chief}) => {
  return (
    <div className='custom-chief'>
        <div className='chief-img'>
          <img src={chief.img} alt="chief-img"/>
        </div>
        <div className="chief-info">
          <h2 className='chief-name'>{chief.name}</h2>
          <p className='chief-recipes'><span>Recipes: </span><b>{chief.recipesCount}</b></p>
          <p className='chief-cuisine'><span>Cuisine: </span><b>{chief.cuisine}</b></p>
          <div className='chief-contact'>
            <FontAwesomeIcon icon={faFacebook}/>
            <FontAwesomeIcon icon={faTwitter}/>
            <FontAwesomeIcon icon={faInstagram}/>
          </div>
        </div>
    </div>
  )
}
export default ChiefCard;