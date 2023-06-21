import React from 'react'
import './SubWork.css'
import work1 from '../../assests/social-media.jpg'
import work2 from '../../assests/content-writing.jpg'

const SubWork = () => {
  return (
    <div className='sub-works'>
<div className="sub-work">
    <img src={work2} alt="" />
    <div className='work-layer'>
<div className="categoty-work">
    content writing
</div>
<h4 className="sub-work-details">
Ignite Your Brand's Story. Our team of skilled writers, strategists, and storytellers are here to bring your brand's story to life. From engaging website content to captivating blog posts, we create impactful content tailored to your brand's unique voice and vision. Let us be your wordsmiths, driving meaningful engagement and leaving a lasting impression. Unlock the power of words with Patco Productions. Contact us today to embark on a transformative journey.
</h4>
</div>
</div>
<div className="sub-work">
    <img src={work1} alt="" />
    <div className='work-layer'>
<div className="categoty-work">
    social media creatives
</div>
<h4 className="sub-work-details">
Embark on a creative journey with Patco Productions. We unleash imagination, collaborate on concepts, and create stunning visuals. Lights, camera, action bring ideas to life, and post-production brilliance adds the finishing touches. When it's time to unveil your project, we'll help you make a powerful impact. With continuous support and growth opportunities, we're dedicated to your success. Join us on this extraordinary creative adventure.
</h4>
</div>
</div>
    </div>
  )
}

export default SubWork