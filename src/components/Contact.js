import React from 'react';
import Header from './Header';
import ContactForm from './ContactForm';
import Building from '../assets/w_w.jpg'


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
            <ContactForm 
            backgroundImg= {Building}
            />
            
        </div>
    )
}

export default Contact