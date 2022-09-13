import React from 'react';
import star from './images/star.png';

function Card(props){
    let badgeText;
    if (props.item.openSpots === 0) {
        badgeText = 'Sold Out';
    } else if (props.item.location === 'Online') {
        badgeText = 'Online';
    }
    return(
        <article className='event-card'>
            {badgeText && <p className='event-status'>{badgeText}</p>}
            <img src={require("./images/" + props.item.coverImg)} className='event-thumb'/>
            <div className='event-rating'>
                <img src={star} className='star-icon' />
                <p>{props.item.stats.rating} <span className='gray'>({props.item.stats.reviewCount}) • {props.item.location}</span></p>
            </div>
            <h4 className='event-title'>{props.item.title}</h4>
            <p className='event-pricing'><strong>From ¥{props.item.price}</strong> / person</p>
        </article>
    );
}

export default Card;
