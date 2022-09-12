import React from 'react';
import star from './images/star.png';
import mtsf from './images/mtsf-tokyo.jpg';

function Card(){
    return(
        <article className='event-card'>
            <p className='event-status'>Sold Out</p>
            <img src={mtsf} className='event-thumb'/>
            <div className='event-rating'>
                <img src={star} className='star-icon' />
                <p>5.0 <span className='gray'>(7) • Japan</span></p>
            </div>
            <h4 className='event-title'>Making the Short Film</h4>
            <p className='event-pricing'><strong>From ¥39,000</strong> / person</p>
        </article>
    );
}

export default Card;