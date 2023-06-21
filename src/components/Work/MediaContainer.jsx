import MainWorkSection from "./MainWorkSection"
import SubWork from "./SubWork"




const MediaContainer = ({loading, content}) => {
    
 if(loading){
  return(
    <div style={{position:"relative" , height:"100vh",background:"blue", width:"100vw", display: 'flex', justifyContent:"center", alignItems:'center'}} className="loader-container">
<h1 style={{colr: "#fff"}}>Loading...</h1>
    </div>
  )
 }else{
  return (
   <div className="media-container-section">
     <div className="media-container">
{
  content.map((curElem)=>{
    return(
     
     <MainWorkSection  key={curElem.id} curElem={curElem} loading={loading} />
      
    )
  })
}
</div>
<div className="media-container-1">
  <SubWork/>
</div>
   </div>
  )
 }
 
}

export default MediaContainer