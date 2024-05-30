import React from 'react'

const Hero = ({ title, imgUrl }) => { // Receive props as an object
  return (

       <div className='hero container'>

         <div className="banner">
              <h1>{title}</h1>
              <p>
                 ZeeCare medical institute is a state-of-the-art facility dedicated
                 to providing comprehensive healthcare services with compassion and
                 expertise.Our team of skilled professionals is committed to 
                 delivering personalised care tailored to each patient's needs.
                 At ZeeCare, we prioritise your well-being, ensuring a harmonious 
                 journey towards optimal health and wellness
              </p>
         </div>
         <div className="banner">
          <img src={imgUrl} alt="hero" className='animated-image'/>
          <span>
             <img src="/Vector.png" alt="Vector"/>
          </span>
         </div>

       </div>
    
  )
}

export default Hero
