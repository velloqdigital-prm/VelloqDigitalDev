import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../assets/VelloqDigital.png';

export default function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/contact');
    setOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <header className='main-header'>
        <div
          className='logo'
          onClick={() => {
            navigate('/');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' />
        </div>

        {!isMobile && (
          <nav className='nav-menu'>
            {links.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        )}

        {!isMobile && (
          <button className='cta-btn' onClick={handleNavigate}>
            Get Started
          </button>
        )}

        {isMobile && (
          <button className='menu-btn' onClick={() => setOpen(true)}>
            ☰
          </button>
        )}
      </header>

      {/* MOBILE MENU */}
      {isMobile && (
        <>
          <div className={`offcanvas ${open ? 'show' : ''}`}>
            <button className='close-btn' onClick={() => setOpen(false)}>
              ✕
            </button>

            {links.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                {item.name}
              </NavLink>
            ))}

            <button className='cta-btn mobile' onClick={handleNavigate}>
              Get Started
            </button>
          </div>

          {open && <div className='overlay' onClick={() => setOpen(false)} />}
        </>
      )}
    </>
  );
}
