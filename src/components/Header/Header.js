import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header=()=> {
        return (
        <div className="navbar">
        <nav>
                <Link to="/">Home</Link>               
                <Link to="/review">Review</Link>          
                <Link to="/dashboard">Dashboard</Link>          
                <Link to="/blogs">Blogs</Link>          
                <Link to="/about">About</Link>               
        </nav>
        </div>
        )
}

export default Header;