import React from 'react'
import PropTypes from 'prop-types';
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

GiftsGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}

export default GiftsGridItem
