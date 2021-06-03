import React from 'react';
import Button from './Button';
import OurLogo from '../assets/SES_Text_Trans.png';
import '../styles/Header.css';


const Header = ({ leftBtnTxt, leftBtnLink, midBtnTxt, midBtnLink, rightBtnTxt, rightBtnLink }) => {
    return (
        <div className='header'>
            <div className="header__logo">
                <img src={OurLogo} alt='Our Logo'/>   
            </div>
            <div className="header__right">
            <Button imp='primary' text={leftBtnTxt} link={leftBtnLink} />
            <Button imp='secondary' text={midBtnTxt} link={midBtnLink} />
            <Button imp='tertiary' text={rightBtnTxt} link={rightBtnLink} />
            </div>
        </div>
    )
}

export default Header