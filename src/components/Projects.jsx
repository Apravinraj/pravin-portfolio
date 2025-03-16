import React from 'react'
import photo3 from "/assets/url.png"
import photo4 from "/assets/cart.png"
import photo5 from "/assets/logo-blood.jpg"
import photo6 from "/assets/e-learn.jpeg"


const Projects = () => {
  return (
    <section id="project" className="project">
    
        
            <h1>Projects</h1>
       
        
        <div className="cards">
           
            
                <div>
                    <a href="" target="_blank">
                        <div>
                        <img src={photo3} alt=""/>   
                               

                            <h3>URL TABBER</h3>
                            <p>A Chrome extension to easily save tabs in Google local storage.</p>
                        </div>
                    </a>
                    

                    <a href="https://shopping-cartbot.netlify.app/" target="_blank">
                        <div>
                        <img src={photo4} alt=""/>
                        <h3>SHOPPING CART BOT</h3>
                        <p>A shopping cart website allows users to create and manage a grocery list.</p>
                        </div>
                    </a>

                    <a href="https://simple-blood-donation.netlify.app/" target="_blank">
                        <div>
                        <img src={photo5} alt=""/>   
                        <h3>BLOOD DONATION NOTIFICATION SYSTEM</h3>
                        <p>A system that alerts registered donors about urgent blood donation needs.</p>
                        </div>
                    </a>

                    <a href="https://simple-e-learning.netlify.app/" target="_blank">
                        <div>
                        <img src={photo6} alt=""/>   
                        <h3>E-LEARNING WEBSITE</h3>
                        <p>An online learning platform with courses and tutorials.</p>
                        </div>
                    </a>
                    
                </div>
            
        </div>
</section>
  )
}

export default Projects
