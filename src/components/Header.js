import React from 'react';
import Button from './Button';
import OurLogo from '../assets/SES_Text_Trans.png';
import '../styles/Header.css';


const Header = ({ leftBtnTxt, leftBtnLink, rightBtnTxt, rightBtnLink, twoButtons }) => {
    return (
        <div className='header'>
            <div className="header__logo">
                <img src={OurLogo} alt='Our Logo'/>   
            </div>
            <div className="header__right">
            <Button imp='primary' text={leftBtnTxt} link={leftBtnLink} />
                {twoButtons && (
            <Button imp='secondary' text={rightBtnTxt} link={rightBtnLink} />
                )}
            </div>
        </div>
    )
}

export default Header