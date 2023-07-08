import React from 'react'

const Projects = () => {
  return (
    <>
    <div className='project-main-container'>
     <div className='aboutme-heading'>
            <span className='aboutme-heading-text'>PROJECTS</span>
            <span className='aboutme-heading-text-para'>Here you will find some of the personal projects that I created for learning purpose.</span>
     </div>
     <div className='projects-main-flex'>
    {/* ishop */}
      <div className='each-project'>
        <div className='project-image'>
          <img src='https://rushikesh-kote-portfolio.netlify.app/static/media/EcommersProject.de12aae1514f0cdf2365.png' alt='not found ' />
        </div>
        <div className='projects-info'>
          <h3>iShop</h3>
          <p>Ishop is an E-commers app where users can create their own profile and add item to cart or buy items online by doing payments online via any UPI apps.</p>
          <button>Open Link</button>
        </div>
      </div>
      {/* ishop */}
      {/* https://rushikesh-kote-portfolio.netlify.app/static/media/BlogApp.2ad5dbbd81950fe8d1df.png */}
      <div className='each-project'>
      <div className='project-image'>
          <img src=' https://rushikesh-kote-portfolio.netlify.app/static/media/BlogApp.2ad5dbbd81950fe8d1df.png' alt='not found ' />
        </div>
        <div className='projects-info'>
          <h3>Shiren</h3>
          <p>Shiren is a Blog post app where admin can post the latest news related to Bollywood, Hollywood, Technology, Fitness & Food.</p>
          <button>Open Link</button>
        </div>
      </div>
      {/* ishop */}
      <div className='each-project'>
      <div className='project-image'>
          <img src='https://rushikesh-kote-portfolio.netlify.app/static/media/ToDoList.bfc30b6c4b886834b1f1.png' alt='not found ' />
        </div>
          <div className='projects-info'>
          <h3>ToDo List</h3>
          <p>Todo List is a app build in JavaScript where user can add all task he needs to do. Under the task heading he can add multiple sub task in list. Upon complition of any task he can mark that perticular task as completed. once the task is completed a line through will appear on the text.</p>
          <button>Open Link</button>
        </div>
      </div>
      {/* ishop */}
      <div className='each-project'>
      <div className='project-image'>
          <img src='https://rushikesh-kote-portfolio.netlify.app/static/media/EcommersProject.de12aae1514f0cdf2365.png' alt='not found ' />
        </div>
         <div className='projects-info'>
          <h3>Coding Ninja</h3>
          <p>Ishop is an E-commers app where users can create their own profile and add item to cart or buy items online by doing payments online via any UPI apps.</p>
          <button>Open Link</button>
        </div>
      </div>
     </div>
    </div>
    </>
  )
}

export default Projects