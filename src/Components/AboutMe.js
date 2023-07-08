import React from 'react'

const AboutMe = () => {
  return (
    <>
    <div className='aboutme-main-ctn'>
        <div className='aboutme-heading'>
            <span className='aboutme-heading-text'>about me</span>
            <span className='aboutme-heading-text-para'>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</span>
        </div>
        <div className='about-knowme-contanier'>
         <div className='getToknowMe'>
            <h2>Get to know me!</h2>
            <p>I'm a<span className='keyLetters'> Fullstack Web Developer</span> building the Front-end and Back-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in theProjects section.</p>
            <p>I'm open to <span className='keyLetters'>Job opportunities </span>where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <span className='keyLetters'>contact me</span>.</p>
            <div className='homeChild1-subchild-project'>
                <a className='btn btn--bg'>Contact Me</a>
            </div>
         </div>
         <div className='MySkills'>
            <h2>My Skills</h2>
            <div className='allSkills'>
            <div className='skills__skill'>HTML</div>     
            <div className='skills__skill'>CSS</div>     
            <div className='skills__skill'>JavaScript</div>     
            <div className='skills__skill'>NodeJS</div>     
            <div className='skills__skill'>ExpressJS</div>     
            <div className='skills__skill'>ReactJs</div>     
            <div className='skills__skill'>MongoDB</div>          
            </div>
         </div>
        </div>

    </div>
    
    </>
  )
}

export default AboutMe