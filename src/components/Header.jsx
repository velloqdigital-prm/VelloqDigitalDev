import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.jpg';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen(!menuOpen);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className='navbar'>
      <div className='logo'>
        <NavLink to='/' onClick={handleLinkClick}>
          <img src={logo} alt='Logo' className='logo-img' />
        </NavLink>
      </div>

      <button className='menu-toggle' onClick={handleToggle}>
        ☰
      </button>

      <div className={`overlay ${menuOpen ? 'show' : ''}`} onClick={handleLinkClick}></div>

      <nav className={`side-menu ${menuOpen ? 'open' : ''}`}>
        <NavLink to='/' onClick={handleLinkClick}>
          Home
        </NavLink>
        <NavLink to='/about' onClick={handleLinkClick}>
          About
        </NavLink>
        <NavLink to='/theme' onClick={handleLinkClick}>
          Theme
        </NavLink>
        <NavLink to='/gallery' onClick={handleLinkClick}>
          Gallery
        </NavLink>
        <NavLink to='/contact' onClick={handleLinkClick}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
}
