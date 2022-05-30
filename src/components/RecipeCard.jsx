import React from 'react'

const RecipeCard = ({recipe}) => {
  return (
    <div className='recipe-card'>
      <img src={recipe.image} alt="food"/>
      <div className='card-info'>
        <img src={recipe.authorImg} alt="chief"/>
        <h2 className='card-title'>{recipe.title}</h2>
        <p className='card-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <p className='food-recipe'>VIEW RECIPE</p>
      </div>
    </div>
  )
}

export default RecipeCard;