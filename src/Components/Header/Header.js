import React from 'react';
import logo from '../../Image/Logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
          <img src={logo} alt=""/>
          <nav>
              <a href="/home">Home</a>
              <a href="/destination">Destination</a>
              <a href="/blog">Blog</a>
              <a href="/contact">Content</a>
              <a className="btn btn-warning" href="login">Login</a>
          </nav>
        </div>
    );
};

export default Header;