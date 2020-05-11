import React from 'react'
import "./footer.scss"


const Footer = () => (

   <footer className="container-fluid footer_content ">
                <div className="row ">
                    <div className="col-lg-4">
                        <p className="footer_content_text me">Create by @ratibordas</p>
                    </div>
                    <div className="col-lg-4 ">
                        <button className="footer_content_button">Go to shop!</button>
                    </div>
                    <div className="col-lg-4">
                        <p className="footer_content_text" >information on the availability
        of MacBook models, please, check by phone <br/> <a href="/" className="phone"> +7-928-000-0000 </a> </p>
                    </div>
                </div>
            </footer>



)


export default Footer