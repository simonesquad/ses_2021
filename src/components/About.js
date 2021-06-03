import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Simone from '../assets/Simone.png';
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
            <Bio
            name='Simone Ballard'
            linkedin='https://www.linkedin.com/in/simoneaballard'
            profileImg={Simone}
            role='Chief Strategy Officer'
            text='As an environmental science advocate and experienced researcher with an established background from both the U.S. and the Netherlands, I wanted to find an agile platform for driving innovative technology adoption further. I met Philippe in 2019 via mutual connections in the environmental sector and our shared passion for emerging sustainable tech. We shared the vision immediately for combining our expertise to match technologies within communities towards impact. With my industry tested communication skills and an ability to identify promising tech, SES is ready for precision project development towards higher impact.'
            backgroundImg={Wave}
            />
            
         </div>
    )
}

export default About