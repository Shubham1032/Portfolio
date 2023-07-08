import React from 'react'
import myimage from '../image/myimage.jpeg'
import AboutMe from '../Components/AboutMe'
import Projects from '../Components/Projects'

const Navbar_first = () => {
const homeScroll = () => {
  
}
const aboutScroll = () => {
// window.scrollTo(<AboutMe/>)
// window.scrollTo()
window.scrollTo({
  top: 520,

  behavior: "smooth",
});
}
const projectsScroll = () => {
  window.scrollTo({
    top: 1920,
  
    behavior: "smooth",
  });

}
  return (
    <>
     <div className='navMain-container'>
        <div className='nav-mainChild1'>
            <img src={myimage} className='myimage mainChild1-subChild'/>
            <div className='mainChild1-subChild mainChild1-subChild1'>SHUBHAM SHARMA</div>
        </div>
        <div className='nav-mainChild2'>
            <div className='mainChild2-subChild mainChild2-subChild1' onClick={homeScroll}>HOME</div>
            <div className='mainChild2-subChild mainChild2-subChild1' onClick={aboutScroll}>ABOUT</div>
            <div className='mainChild2-subChild mainChild2-subChild1' onClick={projectsScroll}>PROJECTS</div>
            <div className='mainChild2-subChild mainChild2-subChild1'>CONTACT</div>
        </div>
     </div>
    </>
  )
}

export default Navbar_first