import React from 'react'
import 'animate.css'

const GiftsGridItem = ({title, url}) => {
    // console.log(img)
    return (
        <div className="card animate__animated.animate__flash">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}

export default GiftsGridItem
