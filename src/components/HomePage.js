import React from 'react';
import '../styles/HomePage.css';
import Item from './Item';
import Header from './Header';
import Footer from './Footer';
import Solar from '../assets/solar_panels.jpg';
import Water from '../assets/water_.jpg';
import Container from '../assets/container_housing.jpg';

const HomePage = () => {
    return (
        <div className="homePage">
        <Header 
        leftBtnTxt='About'
        leftBtnLink='/about'
        midBtnTxt='Blog'
        midBtnLink='/blog'
        rightBtnTxt='Contact'
        rightBtnLink='/contact'
        />
        <Footer />
        <div className="itemsContainer">
        <Item
        title='Welcome to SES... where we aim to connect'
        desc=''
        backgroundImg={Solar}
        />
       <Item
        title=''
        desc='leading sustainable tech with communities most in need'
        backgroundImg={Water}
        />
       <Item
        title=''
        desc='our mission is global...will you join us?'
        backgroundImg= {Container}
        /> 
        </div>
        </div>
    )
}

export default HomePage