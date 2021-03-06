import React from 'react'
import '../styles/Item.css'

const Item = ({title, desc, backgroundImg}) => {
    return (
        <div className='item' style={{
            backgroundImage: `url(${backgroundImg})`
        }}>
        <div className="item__container">
        <div className="item__text">
                <p>{title}</p>
                <p>{desc}</p>
                </div>
        </div>
    </div>
    )
}

export default Item