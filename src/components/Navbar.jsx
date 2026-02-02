import React from 'react';

const Navbar = () => {
  return (
    <header>
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#services">What I Do</a>
        <a href="#works">Portfolio</a>
        <a href="#contact" className="contact-btn" style={{ backgroundColor: '#a855f7', color: 'white', padding: '10px 20px', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold', transition: 'transform 0.3s' }}>Contact</a>
      </nav>
    </header>
  );
};

export default Navbar;
