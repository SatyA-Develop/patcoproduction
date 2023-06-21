import React, {useState, useEffect} from 'react'
import './Work.css'
import axios from 'axios';
import { motion } from 'framer-motion';
import MediaContainer from './MediaContainer';

const Work = () => {
  const transition = { type: 'spring', duration: 3}
  const [loading,setLoading] = useState(false)
  const[content,setContent] = useState([]);
  useEffect(() => {
    setLoading(true)
  axios.get('https://patcoapi-production.up.railway.app/api/products')
  .then((res)=> {
    setContent(res.data.myData)
  setLoading(false)
  }
  )
  }, [])

 
  return (
    <div className="wh-wrapper" style={{backgroundColor: "#D93B5B"}}>
      <div className='work-section wrapper' id='work' >
<motion.div
initial={{x: "-100%"}}
whileInView={{x: "0"}}
transition={transition}
className="work-title">our work
    <div className="work-underline">
        <hr className='work-line' /><div className="work-circle"></div>
    </div>
</motion.div>
<MediaContainer loading={loading} content={content} />

 
    </div>
    </div>
  )
}

export default Work