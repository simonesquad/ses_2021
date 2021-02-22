import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ContactForm from './ContactForm';
import Horizon from '../assets/sunset.jpg'


const Contact = () => {
    return (
        <div className='contact__page'>
            <Header
            leftBtnTxt='Home'
            leftBtnLink='/'
            rightBtnTxt='About'
            rightBtnLink='/about'
            twoButtons='true'
            />
            <Footer />
            <ContactForm 
            backgroundImg= {Horizon}
            />
            
        </div>
    )
}

export default Contact