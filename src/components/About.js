import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Philippe from '../assets/Philippe.png';
import Wave from '../assets/w_y.jpg';
import Bio from './Bio';
import '../styles/About.css';

<script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer></script>

const About = () => {
    return (
        <div className="about__page">
             <Header 
            leftBtnTxt='Home'
            leftBtnLink='/'
            midBtnTxt='Blog'
            midBtnLink='/blog'
            rightBtnTxt='Contact'
            rightBtnLink='/contact'
            />
            <Footer />
            <Bio 
            name='Philippe Thevenin'
            linkedin='https://www.linkedin.com/in/philippemthevenin/'
            profileImg={Philippe}
            role='Chief Technology Operations Officer and Founder'
            text='As a proven and resilient project leader, I aim to apply my diverse industrial engineering background to projects with impact worldwide. In early 2019 I secured a technology partnership with the innovative solar hydro-panel company Source Global PBC. Since then I have been steadily building a network with promising technology providers and community leaders, with particular interest towards applications in the UAE, EU, Canada, the U.S., and Mexico. At SES we are initially focused on ventures that combine solar energy with freshwater generation, as well as accelerating sustainable housing adoption.'
            backgroundImg={Wave}
            />
            
         </div>
    )
}

export default About