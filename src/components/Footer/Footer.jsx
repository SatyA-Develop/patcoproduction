import React from 'react'
import './Footer.css'
import phone from '../../assests/phone.png'
import email from '../../assests/email (1).png'
import map from '../../assests/map.png'
import footerLogo from  '../../assests/footer-logo.png'
import FB from '../../assests/facebook.png'
import Insta from '../../assests/Asset 1.svg'
import BE from '../../assests/Asset 2.svg'
import Pinterest from '../../assests/pinterest.png'
import Linkedin from '../../assests/linkedin.png'
// import TRC from '../../assests/trc-logo.png'
import { motion } from 'framer-motion';

const Footer = () => {
    const transition = { type: 'spring', duration: 3}
    const isMob = window.innerWidth <= 768 ? true : false;
  return (
    <div className="wh-wrapper" style={{backgroundColor: "#1c3a2d"}} >
        <div className='footer-section wrapper' id='contact' >
        <div className="footer-l">
        <motion.div
        initial={{x: "-100%"}}
        whileInView={{x: "0"}}
        transition={transition}
        className="footer-title">contact us
    <div className="footer-underline">
        <hr className='footer-line' /><div className="footer-circle"></div>
    </div>
</motion.div>
<div className="contact-sections wrapper">
    <div className="contact-section">
   <a className='contact-section' href="tel:8169961396" target='_blank' rel="noreferrer">
   <img src={phone} alt="" className="contact-icon" />
        <div className="contact-details">+91 8169961396</div>
   </a>
    </div>
    <div className="contact-section">
        <a className='contact-section' href="mailto:patcoproductions@gmail.com" target='_blank' rel="noreferrer" >
        <img src={email} alt="" className="contact-icon" />
        <div className="contact-details">patcoproductions@gmail.com</div>
        </a>
    </div>
    <div className="contact-section">
    <a className='contact-section' href="https://goo.gl/maps/gY6dpvQp459cBwCMA" target='_blank' rel="noreferrer">
    <img src={map} alt="" className="contact-icon" />
        <div className="contact-details">66, Harminder Singh Road, Aram Nagar Part-1, 
Versova, Mumbai-400061</div>
    </a>
    </div>
    {/* <div className="contact-section">
    <img src={TRC} alt="" className="contact-icon trc-icon" />
        <div className="contact-details trc-details">A young group of designers and content creators, always on the lookout for challenging projects that satisfy our soul. We believe in embracing the journey and trust the process of innovation and creativity.</div>
        <button className="trc-btn"><a style={{textDecoration: "none"}} href="https://therunawaycrew.com/" target='_blank' >Contact us</a></button>
    </div> */}
</div>
        </div>
<div className="footer-r">
    <motion.div
     initial={{right: "-20rem"}}
     whileInView={{right: isMob ? "unset" : "-3rem"}}
     transition={transition}
    className="footer-logo">
<img src={footerLogo} alt="" />
    </motion.div>
    <a href="#"><motion.img
    initial={{x: isMob ? "unset" : "-10rem"}}
    whileInView={{x: isMob ? "unset" :  "0"}}
    transition={{ type: 'spring', duration: 4}}
    className='social-icons linkedin' src={Linkedin} alt="" /></a>
    <a href=""><motion.img
    initial={{x: isMob ? "unset" :  "-10rem"}}
    whileInView={{x:isMob ? "unset" :  "0"}}
    transition={{ type: 'spring', duration: 3}} className='social-icons instagram' src={Insta} alt="" /></a>
    <a href=""><motion.img
    initial={{x:isMob ? "unset" :  "-10rem"}}
    whileInView={{x:isMob ? "unset" :  "0"}}
    transition={{ type: 'spring', duration: 2}} className='social-icons behance' src={BE} alt="" /></a>
    <a href=""><motion.img
    initial={{x:isMob ? "unset" :  "-10rem"}}
    whileInView={{x:isMob ? "unset" :  "0"}}
    transition={{ type: 'spring', duration: 3}} className='social-icons facebook' src={FB} alt="" /></a>
    <a href=""><motion.img
    initial={{x:isMob ? "unset" :  "-10rem"}}
    whileInView={{x:isMob ? "unset" :  "0"}}
    transition={{ type: 'spring', duration: 4}} className='social-icons pinterest' src={Pinterest} alt="" /></a>
</div>
    </div>
    </div>
  )
}

export default Footer