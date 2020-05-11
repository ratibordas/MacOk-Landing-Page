import React from 'react'
import macbookMockup from '../../../img/macbook-mockup-png.png'
import "./home-page.scss"
import Icons from '../icons'


const HomePage = () => {
    return (
        <main>
            <section className="container main_content ">
                <div className="row flex-wrap justify-content-center aligh-items-center mx-auto">
                    <div className="col-lg-12">
                        <p className="main_text ">MACBOOK</p>
                               <div className="front_img fadeIn">
                    <img src={macbookMockup}  alt="mac ok" />
                </div>
                    </div>

                </div>

                   <Icons/>
        
            </section>
         


        </main>
    )
}

export default HomePage