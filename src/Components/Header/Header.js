import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div className='nav-div pt-4 pb-4'>
            <nav>
                <div className='nav-links'>
                    <NavLink className="link" to="/">HOME</NavLink>
                    <NavLink className="link" to="/reviews">REVIEWS</NavLink>
                    <NavLink className="link" to="/dashboard">DASHBOARD</NavLink>
                    <NavLink className="link" to="/blogs">BLOGS</NavLink>
                    <NavLink className="link" to="/about">ABOUT</NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Header;