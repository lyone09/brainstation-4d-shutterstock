import React from 'react'
import './TrendingCard.scss'

export default function TrendingCard(props) {
    console.log(props)
    return (
        <div className='card'>
            <img className='card-img' src={ props.image }alt='trending img'/>
            <h3 className='card-label'>{props.title}</h3>
        </div>
    )
}


