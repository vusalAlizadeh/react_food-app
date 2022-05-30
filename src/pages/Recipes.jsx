import React from 'react'
import FooterSection from '../components/FooterSection';
import Navbar from '../components/Navbar';
import PreviousSearch from '../components/PreviousSearch';
import RecipeCard from '../components/RecipeCard';
const Recipes = () => {
  const recipes = [
    {
        title: "Chicken Pan Pizza",
        image: "/gallery/img_1.jpg",
        authorImg: "/chiefs/chief-1.jpg",
    }, 
    {
        title: "Spaghetti and Meatballs",
        image: "/gallery/img_4.jpg",
        authorImg: "/chiefs/chief-2.jpg",
    },
    {
        title: "American Cheese Burger",
        image: "/gallery/img_5.jpg",
        authorImg: "/chiefs/chief-3.jpg",
    },
    {
        title: "Mutton Biriyani",
        image: "/gallery/img_6.jpg",
        authorImg: "/chiefs/chief-5.jpg",
    },
    {
        title: "Japanese Sushi",
        image: "/gallery/img_10.jpg",
        authorImg: "/chiefs/chief-6.jpg",
    },
    {
        title: "Chicken Pan Pizza",
        image: "/gallery/img_1.jpg",
        authorImg: "/chiefs/chief-1.jpg",
    }, 
    {
        title: "Spaghetti and Meatballs",
        image: "/gallery/img_4.jpg",
        authorImg: "/chiefs/chief-2.jpg",
    },
    {
        title: "American Cheese Burger",
        image: "/gallery/img_5.jpg",
        authorImg: "/chiefs/chief-3.jpg",
    },
    {
        title: "Mutton Biriyani",
        image: "/gallery/img_6.jpg",
        authorImg: "/chiefs/chief-5.jpg",
    },
    {
        title: "Japanese Sushi",
        image: "/gallery/img_10.jpg",
        authorImg: "/chiefs/chief-6.jpg",
    },
    {
        title: "American Cheese Burger",
        image: "/gallery/img_5.jpg",
        authorImg: "/chiefs/chief-3.jpg",
    },
    {
        title: "Mutton Biriyani",
        image: "/gallery/img_6.jpg",
        authorImg: "/chiefs/chief-5.jpg",
    }
].sort(() => Math.random() - 0.5)
  return (
      <>
        <Navbar/>
        <div className='container-recipes'>
          <PreviousSearch/>
          <div className='recipe-card-container'>
          {recipes.map((item,index)=>(
            <RecipeCard key={index} recipe={item}/>
          ))}
          </div>
        </div>
        <FooterSection/>
      </>
  )
}

export default Recipes;