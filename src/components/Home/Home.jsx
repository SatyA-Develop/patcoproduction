import './Home.css'
import Video from '../../media/video.mp4'
import { motion } from 'framer-motion'

const Home = () => {
 const transition = { type: 'spring', duration: 3}


  return (
    <>
    {/* <hr style={{visibility:'hidden', marginTop:'0' }}  id="home" /> */}
    <div className="wh-wrapper" id="home"  style={{backgroundColor: "#3853A4"}} >
    <div className='home-section wrapper'>
<video className='video-container' autoPlay muted infinity loop src={Video}  />

<div className="landing-text">
  <h2 className='main-container' >
    {/* Patco Productions */}
    <motion.div
     initial={{opacity: 1 , x: -200}}
     animate={{opacity: 1 ,zIndex: 0, x: 0}}
     exit={{opacity: 1 ,zIndex: 1, x: 200}}
     transition={transition}
    className='text-container'>
    <span>P</span>
    <span>A</span>
    <span>T</span>
    <span>C</span>
    <span>O</span>
    </motion.div>
    <motion.div
     initial={{opacity: 1 , x: 400}}
     animate={{opacity: 1 ,zIndex: 0, x: 0}}
     exit={{opacity: 1 ,zIndex: 1, x: 200}}
     transition={transition}
    className="text-container">
    <span>P</span>
    <span>R</span>
    <span>O</span>
    <span>D</span>
    <span>U</span>
    <span>C</span>
    <span>T</span>
    <span>I</span>
    <span>O</span>
    <span>N</span>
    <span>S</span>
    </motion.div>
    </h2>
</div>
  

    </div>
    </div>
    </>
    
  )
}

export default Home