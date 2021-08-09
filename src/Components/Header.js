import React from 'react';
import Logo from '../images/COLOURWAY 2.png';
import IgIcon from '../images/IG logo.png';
import MailIcon from '../images/Mail Logo.png';
import { Button } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import IconButton from '@material-ui/core/IconButton';


const Header = () => {
    return (

        <nav id='nav'>
            
            <div className='logo-container'>
            
            <img id='logo' className='logo' alt="logo" src={Logo} />
            
            </div>
                <div className='icon-container'>

                    <a href='https://www.instagram.com/taco_not_taco_uk/' target='_blank' rel='external'><img className='icon' src={IgIcon} alt='' /></a>

                    <a href='mailto:robindunkerley@hotmail.com'><img className='icon' src={MailIcon} alt='' /></a>

                </div>
        </nav>
    )
}



export default Header
