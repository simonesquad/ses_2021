import React from 'react'
import '../styles/BlogPost.css'

const BlogPost = ({name, link, img, text, backgroundImg}) => {
    return (
        <div className='post' style={{
            backgroundImage: `url(${backgroundImg})`
        }}>
        <div className="post__container">
            <div className="picture">
            <img src={img} alt="profile"/>
            </div>
            <div className="text">
                <div className="title">
                <a href={link}>{name}
                </a>
                </div>
            <p>{text}</p>
            </div>
        </div>
    </div>
    )
}

export default BlogPost