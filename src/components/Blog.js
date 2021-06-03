import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Blog = () => {
    return (
        <div className='blog__page'>
            <Header 
            leftBtnTxt='Home'
            leftBtnLink='/'
            midBtnTxt='Team'
            midBtnLink='/team'
            rightBtnTxt='Contact'
            rightBtnLink='/contact'
            />
            <Footer />
        </div>
    )
}

export default Blog