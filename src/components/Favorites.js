import React from 'react'
import Card from './Card'

export default function Favorites(props) {

    const favorites = props.favorites.map(favorite => {
        return (<Card character={favorite} removeFromFavorites={props.removeFromFavorites} />)
    })
    return (
        <section className="favorites">
            {favorites}
        </section>
    )
}
