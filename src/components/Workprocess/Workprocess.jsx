import React from 'react'
import './Workprocess.css'
import workingprocess from './workingprocess'
import {motion} from 'framer-motion'

const Workprocess = () => {
  const transition = { type: 'spring', duration: 3}
  const isIpad = window.innerWidth <= 1025 ? true : false;
  const isMob = window.innerWidth <= 768 ? true : false;
  
  return (
    <div className="wh-wrapper" style={{backgroundColor: '#D93B5B'}} >
      <div className='workprocess-section wrapper' id="work-process" > 
<motion.div
initial={{x: -150}}
whileInView={{x: 0}}
transition={transition}
className="workprocess-title">Our creative video production process
    <div className="workprocess-underline">
        <hr className='workprocess-line' /><div className="workprocess-circle"></div>
    </div>
</motion.div>
<div className="workprocess-contents">
  {
    workingprocess.map(({heading, para, id})=>{
      return(
<div key={id} className="workprocess-content">
<motion.div
initial={{top: "10rem"}}
whileInView={{top: isMob? "-1rem" : isIpad? "-2rem" : "-4.5rem"}}
transition={{ type: "spring", stiffness: 100 }}
className="background-circle"></motion.div>
  <h1 className="workprocess-content-heading">
{heading}
  </h1>
  <h4 className="workprocess-content-para">
    {para}
  </h4>
</div>
      )
    })
  }
</div>
<div className="workprocess-background">
            process
        </div>
</div>
    </div>
  )
}

export default Workprocess