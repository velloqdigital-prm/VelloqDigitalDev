import './Footer.css';
import facebbok from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import twitter from '../assets/twitter.png';
import linkedin from '../assets/linkedin.png';

function Footer() {
  return (
    <div>
      <footer className='footer'>
        <div className='d-flex col-md-12 footer-page justify-content-md-evenly gap-md-5 flex-wrap'>
          <div className='d-flex flex-column  text-white align-items-center justify-content-center gap-3 p-4 '>
            <h4>Connect with Rupali</h4>
            <div className='d-flex align-items-center justify-content-center social-icons'>
              <a href='https://www.facebook.com/' target='_blank' rel='noreferrer'>
                <img src={facebbok} alt='Facebook' />
              </a>

              <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
                <img src={instagram} alt='Instagram' />
              </a>
              <a href='https://x.com/' target='_blank' rel='noreferrer'>
                <img src={twitter} />
              </a>
              <a href='https://www.linkedin.com/in/' target='_blank' rel='noreferrer'>
                <img src={linkedin} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
