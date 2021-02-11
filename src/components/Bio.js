import React from 'react'
import '../styles/Bio.css'

const Bio = ({name, profileImg, text, backgroundImg}) => {
    return (
        <div className='bio' style={{
            backgroundImage: `url(${backgroundImg})`
        }}>
        <div className="bio__container">
            <div className="picture">
            <img src={profileImg} alt="profile"/>
            </div>
        </div>
        <div className="bio__container">
            <div className="text">
            <h3>{name}</h3>
            <p>{text}</p>
            </div>
        </div>
    </div>
    )
}

export default Bio