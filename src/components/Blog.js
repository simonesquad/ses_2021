import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Blog = () => {
    return (
        <div className='blog__page'>
            <Header 
            leftBtnTxt='Home'
            leftBtnLink='/'
            rightBtnTxt='Team'
            rightBtnLink='/team'
            twoButtons='true'
            />
            <Footer />
        </div>
    )
}

export default Blog