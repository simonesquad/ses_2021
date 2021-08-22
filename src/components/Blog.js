import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BlogPost from './BlogPost';
import Wave from '../assets/w_y.jpg';
import AWG from '../assets/awgs.jpg';

const Blog = () => {
    return (
        <div className='blog__page'>
            <Header 
            leftBtnTxt='Home'
            leftBtnLink='/'
            midBtnTxt='About'
            midBtnLink='/team'
            rightBtnTxt='Contact'
            rightBtnLink='/contact'
            />
            <Footer />
            <BlogPost 
            name='Atmospheric Water Generators'
            link='https://simone-a-ballard.medium.com/out-of-thin-air-atmospheric-water-generators-can-help-reduce-water-insecurity-worldwide-a47447d36826'
            img={AWG}
            text='Atmospheric Water Generation (AWG) is a category covering a diversity of technologies that can produce potable drinking water directly from the air. These technologies have expanded the capacity to generate one’s own water source even in remote locations, and are growing in popularity as water and infrastructure challenges continue to grow worldwide.'
            backgroundImg={Wave}
            />
            
        </div>
    )
}

export default Blog