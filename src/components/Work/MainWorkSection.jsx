import React from 'react'
import { NavLink } from 'react-router-dom';
import './MainWork.css'


const MainWorkSection = ({curElem}) => {
    const {  image, category } = curElem;
    // if(loading){
    //   return(
    //     <h1>Loading...</h1>
    //   )
    // }
  return (
    <div className='work-category-img' >
    <img className='image-work'  src={image} alt="" />
    <div className='work-layer'>
<div className="categoty-work">{category}</div>
<NavLink style={{textDecoration: 'none'}} to={`/category/${category}`}>
<button className="view-work">
  view all
</button>
</NavLink>
    </div>
</div>
  )
}

export default MainWorkSection