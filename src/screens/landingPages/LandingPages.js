import React from 'react'
import './LandingPages.css'
import Banner from '../banner/Banner'
import AboutMe from '../aboutMe/AboutMe'
import Benefits from '../benefits/Benefits'
import MySkills from '../mySkills/MySkills'
import MyProjects from '../myProjects/MyProjects'
function LandingPages() {
  return (
    <div className='landingPages'>
    <Banner />
    
       <AboutMe id="aboutMe"/>

 
      <Benefits id="benefits"/> 
   <MySkills/>  
    <MyProjects  id="myProjects"/>
    </div>
)
}

export default LandingPages