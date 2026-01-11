import './ContactPage.css';
import { AiOutlineMail } from 'react-icons/ai';
import { LuPhone } from 'react-icons/lu';
import { HiOutlineLocationMarker } from 'react-icons/hi';

function ContactPage() {
  const openMap = () => {
    window.open('https://www.google.com/maps?q=18.5204,73.8567', '_blank');
  };
  return (
    <div>
      <section className='hero-section'>
        <div className='hero-content'>
          <h1 className='hero-title'>Get in Touch</h1>

          <p className='hero-subtitle'>Ready to make your brand legendary? Let's start a conversation.</p>
        </div>
      </section>
      <div className='contact-container row  mx-auto my-5'>
        <section className='contact-section col-md-6'>
          <div className='contact-info'>
            <h2>Let's Talk</h2>
            <p>
              Have a project in mind? We'd love to hear about it. Fill out the form or reach out directly using the
              contact information below.
            </p>

            <div className='info-box email'>
              <div className='icon email-icon'>
                <AiOutlineMail />
              </div>
              <div>
                <h4>Email</h4>
                <p>vellogdigital@gmail.com</p>
              </div>
            </div>

            <div className='info-box phone'>
              <div className='icon phone-icon'>
                <LuPhone />
              </div>
              <div>
                <h4>Phone</h4>
                <p>+91 8208965538</p>
              </div>
            </div>

            <div className='info-box office'>
              <div className='icon office-icon'>
                <HiOutlineLocationMarker />
              </div>
              <div>
                <h4>Office</h4>
                <p>Rahatani, Pune, IN 411 017</p>
              </div>
            </div>

            <div className='business-hours'>
              <h4>Business Hours</h4>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </section>

        <section className='map-contact col-md-6 '>
          <div className='contact-form'>
            <h3>Send us a Message</h3>

            <form>
              <label>Full Name *</label>
              <input type='text' placeholder='John Doe' />

              <label>Email Address *</label>
              <input type='email' placeholder='john@example.com' />

              <label>Phone Number</label>
              <input type='text' placeholder='+1 (555) 123-4567' />

              <label>Company Name</label>
              <input type='text' placeholder='Your Company' />

              <label>Message *</label>
              <textarea placeholder='Tell us about your project...'></textarea>

              <button type='submit'>Send Message ➤</button>
            </form>
          </div>
        </section>
      </div>

      <section className='visit-office-wrapper'>
        <div className='visit-office-card'>
          <h2>Visit Our Office</h2>
          <p>We're located in the heart of Digital City</p>

          <div className='map-box' onClick={openMap}>
            <span className='map-icon'>
              <HiOutlineLocationMarker />
            </span>
            <p className='map-text'>Click to open Google Map</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
