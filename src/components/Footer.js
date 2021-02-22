import React from 'react';
import TwoLogo from '../assets/SES_Logo.png';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer__logos">
                <img src={TwoLogo} alt='TwoLogo'/>
            </div>
        </div>
    )
}

export default Footer