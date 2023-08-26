import React from 'react'
import './AboutMe.css'
function AboutMe() {
  return (
    <div  id="aboutMe" className='aboutMe'>
    <div className='aboutMe-container'>
        <div className='aboutMe-head'>
          <h1>About me</h1>
        </div>
        <p>"Hello! I'm a passionate Full Stack developer with over 3+ year of 
          hands-on experience in crafting web applications that seamlessly blend
           functionality and aesthetics. Throughout my journey, I've had the privilege
            of working on a diverse range of projects, totaling more than 10 successful 
            creations. My focus on ReactJS empowers me to build dynamic and responsive
             user interfaces that deliver exceptional user experiences. Combining the power 
             of Firebase with my development skills, I create robust backends that ensure data 
             integrity, real-time updates, and secure authentication. I'm deeply committed to
              staying current with the latest industry trends and best practices, allowing
               me to bring cutting-edge solutions to every project I undertake. 
        </p>
      
    </div>
     <p className='aboutMe-big-text'>About</p>
    </div>
  )
}

export default AboutMe 