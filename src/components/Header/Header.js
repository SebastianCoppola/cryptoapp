import React from 'react';
import './Header.css';
import SearchBar from '../common/SearchBar';

const Header = () => {
    return (
        <div className='header'>
            <h1>Crypto-APP</h1>
            <div className="search-bar">
                <SearchBar />
            </div>
        </div>
    )
}
export default Header;
