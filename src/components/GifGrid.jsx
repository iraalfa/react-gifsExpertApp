import React from 'react'
import PropTypes from 'prop-types';
import { useFetchGifts } from './hooks/useFetchGifts'
import GiftsGridItem from './GiftsGridItem'

const GifGrid = ({category}) => {

    const {data: images, loading} = useFetchGifts(category)

    console.log(loading);

    return (
        <>
        <h3 className="animate__animated.animate__fadeIn">{category}</h3>

            {/* {loading ? 'Cargando...' : 'data cargada'} */}
            { loading && <p className="animate__animated.animate__flash">Cargando</p>}

         <div className="card-grid">
                {
                    images.map(img => {
                        return <GiftsGridItem
                                    key={img.id}
                                    {...img}
                                />
                    })
                }
        </div>
          {/* images.map(img => {
                     return   <GiftsGridItem
                                key={img.id}
                                img={img}
                               />
                    }) */}
                {/* images.map( ({id, title}) => ( <li key={id}>{title}</li>)) */}
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}

export default GifGrid
