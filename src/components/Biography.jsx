import React from 'react'

const Biography = ({imgUrl}) => {
  return (
    <div className='container biography'>
       <div className="banner">
           <img src={imgUrl} alt="about_Img"/>
       </div>
         <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          At ZeeCare Medical Institute, we're here to help. We believe everyone
           deserves the best care possible, so we're dedicated to providing top-notch healthcare services with a caring touch. Founded on values like honesty, kindness,
           and doing our best, ZeeCare is all about making sure you get the care you need.
          </p>
          <p> <strong>Our Vision:</strong>ZeeCare Medical Institute envisions a world where every individual has access to comprehensive healthcare services 
          that prioritize their well-being and foster a culture of wellness within their communities.</p>
          <p><strong>Our Mission:</strong>Our mission at ZeeCare is to empower individuals to lead healthier lives by providing exceptional medical care, innovative treatments, 
          and wellness initiatives designed to promote holistic well-being.</p>
          <p>At ZeeCare, we offer a wide range of healthcare services to meet your needs. From regular check-ups and preventive care to specialized treatments and support 
          for chronic conditions, we're here to help you stay healthy and happy.</p>
          <p>At ZeeCare Medical Institute, we're more than just a healthcare provider—we're your partners in health. We're here to support you, care for you, and help you live your best life. So whatever your healthcare needs, 
          you can count on us to be there for you every step of the way.</p>
          
         </div>
    </div>
  )
}

export default Biography
