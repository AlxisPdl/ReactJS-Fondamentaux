import React from 'react'
import './card.css'

export default function Card(props) {
    const { title = "Cute Kitty",
            image = "chat.jpg",
            description = "Voici un chat mignon" } = props;

    return (
        <div className='cardchat'>
            <h2>{title}</h2>
            <img src={image} alt={title} />
            <p>{description}</p>
        </div>
    )
}
