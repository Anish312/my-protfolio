import React from 'react'
import './Benefits.css'
import reactImg from '../../files/rectImg.png'
import figmaImg from '../../files/figmaImg.png'
function Benefits() {
    
  return (
    <div className='benefits'>
    <div className='benefits-container'>
        
    <div className='benefits-head'>
        
    <h2 className='benefits-head-title' >Benefits</h2>
      <h1>The perfect combination of design and development expertise.</h1>
    </div>

      <div className='benefits-boxes'>
      <div className='benefits-boxes-left'>
        <div className='benefits-boxes-left-head'>
            <img className='figmaImg' src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt=""/>
            +
            <img className='reactImg'  src="https://ifactory.com.au/wp-content/uploads/2021/03/node.jpg" alt=""/>
        </div>
        <h4>Webflow developer at the intersection of design and code.</h4>
        <p>Proficient in React and Node.js development, I specialize in bringing your concepts to life by crafting dynamic and efficient web applications. My skill set allows me to seamlessly translate your ideas into fully functional platforms while ensuring top-notch performance. With a keen eye for detail, I guarantee that the end result aligns perfectly with your vision. Drawing from my expertise in React and Node.js, I'm not only adept at development but can also offer invaluable insights to enhance your project's architecture and functionality."</p>
      </div>
      <div className='benefits-boxes-right'>
      <div className='benefits-boxes-right-display'>
        <div className='benefits-right-box'>
            <h1>3</h1>
            <p className='benefits-right-box-p'>International companies</p>

        </div>
        <div className='benefits-right-box'>
        <h1>3+</h1>
        <p className='benefits-right-box-p'>of experience</p>

    </div>

      </div>
        <div>
              <div className='benefits-right-box'>
    <h1>6+</h1>
    <p className='benefits-right-box-p'>Projects done </p>

</div>
<div className='benefits-right-box'>
<h1>100%</h1>
<p className='benefits-right-box-p'>Passion</p>

</div>
        </div>
  

      </div>
      </div>
    </div>    
    </div>
  )
}

export default Benefits