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
        rightBtnTxt='Contact'
        rightBtnLink='/contact'
        twoButtons='true'
        />
        <Footer />
        <div className="itemsContainer">
        <Item
        title=''
        desc=''
        backgroundImg={Solar}
        />
       <Item
        title=''
        desc=''
        backgroundImg={Water}
        />
       <Item
        title=''
        desc=''
        backgroundImg= {Container}
        /> 
        </div>
        </div>
    )
}

export default HomePage