import React from 'react'
import photo2 from "/assets/about.png"
const About = () => {
  return (
    <div id="about" className="about-sec">
      
        
      <div>
            <div className='abt-text-wrapper'>
              <h1>About Me</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ea consequuntur fuga, a totam voluptate hic iure veritatis et aliquid harum quisquam, corrupti tempore aut dolore necessitatibus temporibus reprehenderit doloremque!</p>
            </div>

            <div>
                <img src={photo2} alt=""/>   
            </div>
      </div>
</div>
  )
}

export default About
