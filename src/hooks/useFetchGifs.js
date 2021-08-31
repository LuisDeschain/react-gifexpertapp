import { useState, useEffect } from 'react'; 
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = ( category ) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect( () => {
        getGifs( category )
            .then( imgs => {
                setState({
                    data: imgs,
                    loading: false
                })
            })
    }, [ category ]) // Se volverá a ejecutar si la categoría cambia

    return state // Es { data: [], loading: true};
}