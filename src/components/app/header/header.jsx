import React, { Component } from 'react'
import "./header.scss"
import DrawerToggleButton from './side-drawer/DrawerToggleButton';
import SideDrawer from './side-drawer/SideDrawer'
import Backdrop from './Backdrop/Backdrop';
import { Link } from 'react-router-dom'

 

class Header extends Component {

    state = {
        sideDrawerOpen: false,
       
    }

 
 

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen }
        })
    }

    backdropToggleClickHandler = () => {
        this.setState({ sideDrawerOpen: false })
    }

    render() {
     
        let backdrop = undefined;
        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropToggleClickHandler} />
        }

        return (
            <header className=" header fadeIn">
                <nav className="d-flex flex-wrap flex-row header_content"  >
                    <DrawerToggleButton drawerClickHandler={this.drawerToggleClickHandler} />
                    <h1>MacOk</h1>

                    <div className="header_content_list">
                        <Link className="header_content_list_item" to="/MacOk-Landing-Page">
                            Home
                        </Link>
                        <Link to="/MacOk-Landing-Page/about" className="header_content_list_item">
                           About
                        </Link>
                        <Link to="/MacOk-Landing-Page/service" className="header_content_list_item">
                            Service
                        </Link>

                    </div>

                </nav>

                <SideDrawer show={this.state.sideDrawerOpen} />
                {backdrop}

            </header>
        )
    }

}

export default Header



