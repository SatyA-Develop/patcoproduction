import './About.css'
import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
    const transition = { type: 'spring', duration: 1}
  return (
    <div className="wh-wrapper" style={{backgroundColor: '#3853a4'}} >
        <div id='about' className='about-section wrapper'>
       <div className='about-container'>
       <motion.div
       initial={{transform:'translateX(-100%)'}}
       whileInView={{transform:'translateX(0)'}}
       transition={transition}
       className="about-l">
<div className="about-title">about us
    <div className="about-underline">
        <hr className='about-line' /><div className="about-circle"></div>
    </div>
</div>
<div className="about-exp">
“Delivering Stunning
 <br /> Visual Narratives”
</div>
<div className="about-pride">
From concept to final edit, we tailor our production process to suit your unique needs, ensuring the highest quality results. 
</div>
        </motion.div>
        <motion.div
         initial={{transform:'translateX(100%)'}}
         whileInView={{transform:'translateX(0)'}}
         transition={transition}
        className="about-r">
            <div className="story-container">
                <span>patco productions</span>has earned its reputation in the market for its services. We aim to grow as the most prominent firm for our Customers, Business Associates & Stakeholders and we take pride that the intense vision of our experienced personnel encourages us to create a niche in the industry by serving clients across the globe.
            </div>
            <div className="story-title">OUR STORY
    <div className="story-underline">
        <hr className='story-line' /><div className="story-circle"></div><div className="story-circle story-circle2"></div>
    </div>
</div>
        </motion.div>
       </div>
        <div className="about-background">
            about
        </div>
    </div>
    </div>
  )
}

export default About