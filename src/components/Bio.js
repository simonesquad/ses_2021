import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import '../styles/Bio.css'

const Bio = ({name, linkedin, profileImg, role, text, backgroundImg}) => {
    return (
        <div className='bio' style={{
            backgroundImage: `url(${backgroundImg})`
        }}>
        <div className="bio__container">
            <div className="picture">
            <img src={profileImg} alt="profile"/>
            </div>
            <div className="text">
                <div className="title">
                <h2>{name}</h2>
                <a href={linkedin}>
                <LinkedInIcon/>
                </a>
                </div>
            <h4>{role}</h4>
            <p>{text}</p>
            </div>
        </div>
    </div>
    )
}

export default Bio