import React from 'react';
import { getGifts } from '../../helpers/getGifts';

/* custom hook para cargar automaticamente las busquedas de gifts
   lo que hacemos es que cuando se cargue el componente por primera vez
   hace una peticion para obtener los gifts y los coloca en las images */

export const useFetchGifts = (category) => {
    const [state, setState ] = React.useState({
        data: [],
        loading: true,
    })
/*
    en el useEffect = llamada fetch en el componente getGifts.
                      con .then le pasamos las imgs que recibimos de category y las
                      pasamos al state en data y poniendo loading en false, porque ya se ha hecho la carga.
*/
    React.useEffect(() => {
        getGifts(category).then(imgs => {
            setState({
                 data:imgs,
                 loading: false
            })
        })
    })

    // React.useEffect(() => {
    //     getGifts(category)
    //     .then(imgs => {
    //             setTimeout(() => {
    //                 setState({
    //                     data: imgs,
    //                     loading: false,
    //                 })
    //             }, 3000)
    //     });
    // }, [category ])

    return state
}