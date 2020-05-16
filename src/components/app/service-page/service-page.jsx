import React, { Component } from 'react'
import "./service-page.scss"
import macbookMockup from '../../../img/macbook-mockup-png.png'
import battery from "../../../img/apple-macbook-png-4-Transparent-Images.png"
import screen from "../../../img/MacBook-Pro-PNG-Photo.png"
import Icons from '../icons'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom'




class ServicePage extends Component {





    render() {
        const sliderSettings = {
            dots: true,
            infinite: true,
            speed: 1500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000

        }

        return (
               <main>
            <Slider {...sliderSettings} style={{ textAlign: "center"}}>
                <section className="container service_content fadeIn">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div>
                                <img src={screen} className="service_content_img" alt="" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="service_content_wrap">
                                <h2>Cleaning topcase</h2>
                                <hr />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates officia saepe obcaecati illo harum laboriosam tenetur voluptate odit reprehenderit. Dolorem.</p>
                                    <Link to="/files/price.pdf" target="_blank" download >
                                        <button className="service_content_button">Download price </button>
                                    </Link>
                                    
                            </div>

                        </div>



                    </div>


                    
                </section>
                <section className="container service_content ">


                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div>
                                <img src={macbookMockup} className="service_content_img" alt="" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="service_content_wrap">
                                <h2>Replace screen</h2>
                                <hr />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates officia saepe obcaecati illo harum laboriosam tenetur voluptate odit reprehenderit. Dolorem.</p>
                                   <Link to="/files/price.pdf" target="_blank" download >
                                        <button className="service_content_button">Download price</button>
                                    </Link>
                            </div>

                        </div>



                    </div>


                    
                    </section>
                         <section className="container service_content ">


                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div>
                                <img src={battery} className="service_content_img" alt="" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="service_content_wrap">
                                <h2>Change battery</h2>
                                <hr />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates officia saepe obcaecati illo harum laboriosam tenetur voluptate odit reprehenderit. Dolorem.</p>
                                   <Link to="/files/price.pdf" target="_blank" download >
                                        <button className="service_content_button">Download price</button>
                                    </Link>
                            </div>

                        </div>



                    </div>


                    
                </section>
                
                </Slider>
                <Icons />
           </main>
        )
    }



}

export default ServicePage