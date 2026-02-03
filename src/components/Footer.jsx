import { useNavigate } from 'react-router-dom';
import './Footer.css';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import logo2 from '../assets/LogoWithoutBackground.png';

export default function Footer() {
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
    window.screenTop(0, 0);
  };

  return (
    <footer className='footer'>
      <div className='footer-top'>
        {/* About */}
        <div className='footer-col'>
          <div className='logo-box'>
            <img src={logo2} alt='logo-box' />
          </div>

          <p>
            We are a full-service digital marketing agency dedicated to <br />
            helping brands grow their online presence and achieve legendary results.
          </p>

          <div className='socials'>
            <a href='https://www.facebook.com/share/1ZyjLcyAWN/' target='_blank' rel='noreferrer'>
              <Facebook size={18} />
            </a>
            <a href='https://twitter.com' target='_blank' rel='noreferrer'>
              <Twitter size={18} />
            </a>
            <a href='https://www.instagram.com/velloqdigital/?igsh=MTZyMGRmenE4aHc4YQ%3D%3D&utm_source=qr#' target='_blank' rel='noreferrer'>
              <Instagram size={18} />
            </a>
            <a href='https://in.linkedin.com/' target='_blank' rel='noreferrer'>
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className='footer-col'>
          <h4>Quick Links</h4>
          <ul>
            <li onClick={handleNavigation}>
              <a href='/'>Home</a>
            </li>
            <li onClick={handleNavigation}>
              <a href='/services'>Services</a>
            </li>
            <li onClick={handleNavigation}>
              <a href='/about'>About Us</a>
            </li>
            <li onClick={handleNavigation}>
              <a href='/contact'>Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className='footer-col'>
          <h4>Contact Us</h4>

          <p>
            <Mail size={16} />
            <a href='mailto:velloqdigital@gmail.com'>info@velloqdigital.com</a>
          </p>

          <p>
            <Phone size={16} />
            <a href='tel:+919130080955'>+91 91300 80955</a>
          </p>

          <p>
            <MapPin size={16} />
            <a href='https://maps.google.com' target='_blank' rel='noreferrer'>
              Rahatani, Pune, IN 411017
            </a>
          </p>
        </div>
      </div>

      <div className='footer-bottom'>© 2025 Velloq Digital. All rights reserved.</div>
    </footer>
  );
}
