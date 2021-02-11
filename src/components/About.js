import React from 'react';
import Header from './Header';
import Simone from '../assets/Simone.png';
import Philippe from '../assets/Philippe.png';
import Wave from '../assets/w_y.jpg';
import '../styles/About.css';
import Bio from './Bio';

const About = () => {
    return (
        <div className="about__page">
             <Header 
            leftBtnTxt='Home'
            leftBtnLink='/'
            rightBtnTxt='Contact'
            rightBtnLink='/contact'
            twoButtons='true'
            />
            <Bio 
            name='Philippe Thevenin'
            profileImg={Philippe}
            text='has been passionately working towards applying his industrial engineering background to projects with impact worldwide. His specifc interests include projects that combine solar energy and freshwater generation, towards a circular no-waste economy. Likewise, he is interested in accelerating the uptake of sustainable housing initiatives in areas where the housing pressure is high. Having traveled extensively and pursued onsite trainings in the UAE, Canada, and Mexico, he is ready to drive further technology applications to communities in need.'
            backgroundImg={Wave}
            />
            <Bio
            name='Simone Ballard'
            profileImg={Simone}
            text='teamed up with Philippe over their shared passion for emerging technology in the environmental sector. With an environmental education from both the U.S. and the Netherlands, and experience working on a variety of interdisciplinary startup initiatives, she wanted to find a vehicle for driving innovation further. Bringing her industry tested communications skills and eye for emergent tech challenges and opportunities to the table, she is ready to assist in precision project development towards higher impact.'
            backgroundImg={Wave}
            />
         </div>
    )
}

export default About