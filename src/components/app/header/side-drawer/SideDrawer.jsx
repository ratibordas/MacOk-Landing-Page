import React from 'react'
import "./SideDrawer.scss"
import { Link } from 'react-router-dom'
import instagram from '../../../../img/instagram-brands.svg'
import telegram from '../../../../img/telegram-brands.svg'
import whatsapp from '../../../../img/whatsapp-brands.svg'
import viber from '../../../../img/viber-brands.svg'

const SideDrawer = (props) => {

    let addDrawerClass = "side-drawer";
    if (props.show) {
        addDrawerClass = "side-drawer open"
    }


    return (
        <nav className={addDrawerClass}  >
            <ul>
                <li><Link className="header_mobile_content_list_item" to="/">Home</Link></li>
                <li><Link to="/about" className="header_mobile_content_list_item"> About </Link></li>
                <li><Link to="/service" className="header_mobile_content_list_item">Service</Link></li>
                <li><Link to="/files/price.pdf" target="_blank" download className="header_mobile_content_list_item">Price&#8595;</Link></li>
            </ul>
            <ul style={{ marginTop: "14rem" }}>


                <li>
                    <img src={instagram} alt="instagram" className="header_content_icon" />
                </li>
                <li>
                    <img src={viber} alt="instagram" className="header_content_icon" />
                </li>
                <li>
                    <img src={telegram} alt="instagram" className="header_content_icon" />
                </li>
                <li>
                    <img src={whatsapp} alt="instagram" className="header_content_icon" />
                </li>

            </ul>


                

        </nav>
    )

}

export default SideDrawer

