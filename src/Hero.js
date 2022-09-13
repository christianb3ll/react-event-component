import React from 'react';
import photoGrid from './images/photo-grid.png';

function Hero(){
    return(
        <section id='hero-section'>
            {/* <img src={photoGrid} className='photo-grid'/> */}
            <div className='photo-grid'>
                <div className='col rellax' data-rellax-speed='2'>
                    <img src={require('./images/image-grid/anita-with-boom-pole.jpg')}/>
                </div>
                <div className='col rellax' data-rellax-speed='-1'>
                    <img src={require('./images/image-grid/freya-mtsf.jpg')}/>
                    <img src={require('./images/image-grid/directing-sq.jpg')}/>
                </div>
                <div className='col rellax' data-rellax-speed='2'>
                    <img src={require('./images/image-grid/ruby-mtsf.jpg')}/>
                    <img src={require('./images/image-grid/rory-mtsf.jpg')}/>
                </div>
                <div className='col rellax' data-rellax-speed='-4'>
                    <img src={require('./images/image-grid/the-team.jpg')}/>
                </div>
            </div>
            <h1 className='hero-header'>Become a Filmmaker</h1>
            <p className='hero-body'>Join classes that empower you with the skillset you need to get out and make your own films!</p>
        </section>
    );
    
}

export default Hero;