// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className='header'>
                <h1>Call a Friend</h1>
                <p>your friendly contact app</p>
            </div>
            <hr className='h-line' />
        </div>
    )
}

export default Header;