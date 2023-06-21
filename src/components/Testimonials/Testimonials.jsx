import React, {useState} from 'react'
import './Testimonials.css'
import Testimonial from './Testi'
import { BsArrowLeft } from 'react-icons/bs';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from "framer-motion"
import { useSwipeable } from 'react-swipeable';

const Testimonials = () => {
    const[select,setSelect]= useState(0);
    const[color,setColor] = useState(0)
    const colorArr = ['#3853A4','#bf6783','#FFD400','#FFBE9D']
    const colorArrLength = colorArr.length
    const tLength = Testimonial.length;
    const transition = { type: 'spring', duration: 3}
   
    const handlers = useSwipeable({
        onSwiped: (eventData) => {
            if(eventData.dir === "Right"){
                select === 0 ? setSelect(tLength - 1): setSelect((prev)=> prev - 1 ); select === 0 ? setColor(colorArrLength - 1): setColor((prev)=> prev - 1)
            }
            if(eventData.dir === "Left"){
                select === tLength - 1 ? setSelect(0): setSelect((prev)=> prev + 1); select === colorArrLength - 1 ? setColor(0): setColor((prev)=> prev + 1)
            }
        }
      });
  return (
    <div className="wh-wrapper" style={{backgroundColor: ' #8e3ccb'}}>
        <div className='testimonial-section wrapper'>
      
      <div {...handlers} style={{cursor:"grabbing"}}  className="testimonial-l">
          <motion.div
          style={{background: colorArr[color]}}
          key={select}
          initial={{opacity: 1 , x: -200}}
          animate={{opacity: 1 ,zIndex: 0, x: 0}}
          exit={{opacity: 1 ,zIndex: 1, x: 200}}
          transition={transition}
          className="t-box-bg" ></motion.div>
      <motion.div
      key={select}
        initial={{opacity: 1 , x: -200}}
        animate={{opacity: 1 , x: 0}}
        exit={{opacity: 1 ,zIndex: 2, x: 200}}
        transition={transition}
      className="testimonial-box">
      <img className='testi-img'  src={Testimonial[select].person} alt="" />
      <div className="t-desc">{Testimonial[select].review}</div>
      <div className="testi-name">{Testimonial[select].name}</div>
      <div className="testi-position">{Testimonial[select].designation}</div>
      </motion.div>
      </div>
      <div className="testimonial-r">
      <motion.div
      initial={{x: "100%"}}
      whileInView={{x: "0"}}
      transition={transition}
      className="testimonial-title">Testimonials
          <div className="testimonial-underline">
              <hr className='testimonial-line' /><div className="testimonial-circle"></div>
          </div>
      </motion.div>
      <div className="testimonial-heading">
          what they <br /> say about <br /> our passion?
      </div>
      <div className="control-arrow">
      <div className="arrow-box"
      onClick={()=>{
          select === 0 ? setSelect(tLength - 1): setSelect((prev)=> prev - 1 ); select === 0 ? setColor(colorArrLength - 1): setColor((prev)=> prev - 1)
      }}
      ><BsArrowLeft className='arrow-c' /></div>
      <div className="arrow-box"
      onClick={()=>{
          select === tLength - 1 ? setSelect(0): setSelect((prev)=> prev + 1); select === colorArrLength - 1 ? setColor(0): setColor((prev)=> prev + 1)
      }}
      ><BsArrowRight className='arrow-c' /></div>
      </div>
      </div>
          </div>
    </div>
  )
}

export default Testimonials