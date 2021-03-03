import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import '../styles/Bio.css'

const Bio = ({name, linkedin, profileImg, text, backgroundImg}) => {
    return (
        <div className='bio' style={{
            backgroundImage: `url(${backgroundImg})`
        }}>
        <div className="bio__container">
            <div className="picture">
            <img src={profileImg} alt="profile"/>
            </div>
            <div className="text">
            <a href={linkedin}>{name}</a>
            <LinkedInIcon />
            <p>{text}</p>
            </div>
        </div>
    </div>
    )
}

export default Bio