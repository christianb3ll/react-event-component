import React from 'react';
import logo from './images/elfs-logo.png';

function Navbar(){
    return(
        <nav>
            <img src={logo} className='logoImage'/>
        </nav>
    );
}

export default Navbar;