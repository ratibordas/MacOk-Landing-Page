import React from 'react'
import "./about-page.scss"
import Icons from '../icons'

const AboutPage = () => {
        return (
            <section className="container about_content fadeIn">
                <div className="row">
                    <div className="col-12">
                       <h2 className="about_content_heading">About us</h2>
                    <hr/>
                    <p className="about_content_text ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae hic officiis veniam aliquam magni? Aliquam hic, illo odio voluptatibus vitae consequuntur quisquam amet! Eaque reiciendis nam modi ea impedit laboriosam inventore consequuntur? Nihil vero totam perferendis repellendus nostrum voluptatem fugiat.</p>
                     <h3 className="about_context_gratitude">Thank You for Your Trust!</h3>
                    </div>
                    



                </div>
                
                  <Icons/>
            </section>
        )
    
}

export default AboutPage