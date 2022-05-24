import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <ul className="navbar">
            <li><Link to='/' className='link'>HOME</Link></li> 
            <li><Link to='/coins' className='link'>COINS</Link></li>
            <li><Link to='/about' className='link'>ABOUT</Link></li>
            <li><Link to='/contact' className='link'>CONTACT</Link></li>
        </ul>
    )
}
export default Navbar;
