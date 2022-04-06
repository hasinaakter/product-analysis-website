import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='navbar'>
                <Link to="/home">HOME</Link>
                <Link to="/review">REVIEW</Link>
                <Link to ="/dashboard">DASHBOARD</Link>
                <Link to ="/blog">BLOG</Link>
                <Link to="/about">ABOUT</Link>

            </nav>
        </div>
    );
};

export default Header;