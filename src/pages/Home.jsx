import React from 'react'
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ImproveSkills from '../components/ImproveSkills';
import QuoteSection from '../components/QuoteSection';
import ChiefSection from '../components/ChiefSection';
import FooterSection from '../components/FooterSection';


const Home = () => {
  return (
    <div className='main-container'>
    <Navbar/>
    <HeroSection/>
    <ImproveSkills/>
    <QuoteSection/>
    <ChiefSection/>
    <FooterSection/>
    </div>
    
    
  )
}

export default Home;