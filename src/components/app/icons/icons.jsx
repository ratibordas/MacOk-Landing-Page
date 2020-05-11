import React from 'react'
import "./icons.scss"
import instagram from '../../../img/instagram-brands.svg'
import telegram from '../../../img/telegram-brands.svg'
import whatsapp from '../../../img/whatsapp-brands.svg'
import viber from '../../../img/viber-brands.svg'


const Icons = () => (

        <ul className="main_content_icons">
                    <li>
                        <img src={instagram} alt="instagram" className="main_content_icon" />
                    </li>
                    <li>
                        <img src={viber} alt="viber" className="main_content_icon" />
                    </li>
                    <li>
                        <img src={telegram} alt="telegram" className="main_content_icon" />
                    </li>
                    <li>
                        <img src={whatsapp} alt="whatsapp" className="main_content_icon" />
                    </li>

                </ul>


)


export default Icons



