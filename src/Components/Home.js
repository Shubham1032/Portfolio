import React from 'react'

const Home = () => {
  return (
    <>

    <div className='home-main-container'>
        <div className='homeContainer-child1'>
            <div className='homeChild1-subchild'>
            <h1 className='homeHeading'>HEY, I'M SHUBHAM SHARMA</h1>
            </div>
            <div className='homeChild1-subchild-text'>
            <p className='home-about-text'>A Fullstack focused Web Developer building the Frontend and Backend of Websites and Web Applications that leads to the success of the overall product</p>
            </div>
            <div className='homeChild1-subchild-project'>
                <a className='btn btn--bg'>Projects</a>
            </div>
        </div>
        <div className='homeContainer-child2'>
            <div className='linkdin-div'>
                <a href=''>
            <i class="fa-brands fa-linkedin fa-2xl"></i></a>
            </div>
            <div className='github-div'>
                <a href='https://github.com/Shubham1032'>
            <i class="fa-brands fa-github fa-2xl"></i></a>
            </div>
        </div>
        <div className='scroll-mouse-container'>
            <div className='mouse'></div>
        </div>
    </div>
    
    </>
  )
}

export default Home