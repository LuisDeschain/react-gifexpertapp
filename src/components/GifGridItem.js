import React from 'react'

export const GifGridItem = ( { title, url} ) => { // Recibo cada prop suelta
    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    )
}
