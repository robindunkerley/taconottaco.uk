import React from 'react';
import PropTypes from 'prop-types';
import LogoBlack from '../images/MONO BLACK.png';

const Block = (props) => {
    return (
    <div className="description">
        <div className='logo-2-container'>
            <img id='logo-2' src={props.logo} alt='' />
        </div>
        <div>
            <p>{props.in}</p>
        </div>
    </div>
    )
}


export default Block
