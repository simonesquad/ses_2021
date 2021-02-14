import React from 'react';
import '../styles/Header.css';
import Button from './Button';
import OurLogo from '../assets/SES_Text_Trans.png';
import TwoLogo from '../assets/SES_Logo.png';

const Header = ({ leftBtnTxt, leftBtnLink, rightBtnTxt, rightBtnLink, twoButtons }) => {
    return (
        <div className='header'>
            <div className="header__logos">
                <img src={TwoLogo} alt='TwoLogo'/>
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