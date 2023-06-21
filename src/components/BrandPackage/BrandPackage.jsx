import React from 'react'
import './BrandPackage.css'
import TRC from '../../assests/trc-logo.png'

const BrandPackage = () => {
  return (
    <div className='brand-section'>
<div className="brand-l">
<div className="brand-title">Looking for services in 
branding and packaging too?
    <div className="brand-underline">
        <hr className='brand-line' /><div className="brand-circle"></div>
    </div>
</div>
<div className="brand-desc">
A young group of designers and content creators, always on the lookout for challenging projects that satisfy our soul. We believe in embracing the journey and trust the process of innovation and creativity.
</div>
<button className="brand-btn"><a style={{textDecoration: "none"}} href="https://therunawaycrew.com/" target='_blank' >Contact us</a></button>
</div>
<div className="brand-r">
    <div className="logo-section">
        <img src={TRC} alt="" />
    </div>
    <div className="company-name">the runaway crew
</div>
<div className="company-work">
Design | Branding | Packaging
</div>
</div>
    </div>
  )
}

export default BrandPackage