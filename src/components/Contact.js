import React from 'react';
import Header from './Header';
import Item from './Item';
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
            <Item 
            title='Contact Us!'
            desc='Email either Philippe or Simone at source.eausolaire@gmail.com'
            backgroundImg= {Building}
            />
        </div>
    )
}

export default Contact