import React from 'react';
import photoGrid from './images/photo-grid.png';

function Hero(){
    return(
        <section id="hero-section">
            <img src={photoGrid} className="photo-grid"/>
            <h1 className='hero-header'>Become a Filmmaker</h1>
            <p className='hero-body'>Join classes that empower you with the skillset you need to get out and make your own films!</p>
        </section>
    );
    
}

export default Hero;