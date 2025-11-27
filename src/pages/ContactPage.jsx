import './ContactPage.css';
import contactbg from '../assets/banner 3.webp';

function ContactPage() {
  return (
    <div>
      <section className='hero-section'>
        <div className='hero-overlay'></div>
        <img src={contactbg} alt='Hero Background' className='hero-bg' />

        <div className='hero-content text-center'>
          <h1 className='fade-in-up'>Get in Touch With Us</h1>
          <h6 className='fade-in-up delay-1 text-white'>
            We’d love to hear from you! Whether you have questions, ideas, or would like to contribute to our Children’s
            Day celebration — your voice matters. Reach out to us and join our mission to educate, empower, and
            celebrate every child.
          </h6>
          <br />
          <br />
        </div>
      </section>

      <section className='contact-section'>
        <div className='contact-overlay'></div>
        <div className='contact-container'>
          <h1>We’re Here to Listen!</h1>
          <h5>
            Have a question or want to participate in our 2025 Children’s Day events? <br />
            Fill out the form below and our team will get back to you soon!
          </h5>

          <form className='contact-form'>
            <div className='input-group'>
              <label htmlFor='name'>First Name *</label>
              <input type='text' id='name' name='name' required />
            </div>

            <div className='input-group'>
              <label htmlFor='email'>Email Address *</label>
              <input type='email' id='email' name='email' required />
            </div>

            <div className='input-group'>
              <label htmlFor='phone'>Phone Number *</label>
              <input type='tel' id='phone' name='phone' required />
            </div>

            <div className='input-group'>
              <label htmlFor='message'>Message</label>
              <textarea id='message' name='message' maxLength='180'></textarea>
            </div>

            <div className='consent'>
              <input type='checkbox' id='consent' required />
              <label htmlFor='consent'>
                I agree and consent to receive all communications, including notifications, promotional messages, and
                calls at the provided number.
              </label>
            </div>

            <button type='submit' className='submit-btn'>
              Send Message
            </button>
          </form>
        </div>
      </section>

      <section className='map-contact'>
        <div className='map'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.3039780285054!2d72.50934387464376!3d23.011691916413897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f46ab4d2c9%3A0x58f9da8e34a3e928!2sSneh%20Desai%20%7C%20Life%20Coach%20And%20Business%20Coach!5e0!3m2!1sen!2sin!4v1698300792819!5m2!1sen!2sin'
            width='90%'
            height='450'
            style={{ border: 0 }}
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            title='Google Map'
          ></iframe>
        </div>

        <div className='contact-details'>
          <h2>Let’s Connect and Create Smiles Together</h2>
          <p>
            We’re always open to collaborations, suggestions, and support for children’s welfare.
            <br /> If you’d like to host an event, volunteer, or share your creative ideas for Children’s Day — feel
            free to contact us through the details below:
          </p>
          <p>
            <strong>📍 Address:</strong>
            <br />
            <a
              href='https://www.google.com/maps?q=601,+Suryansh+Gateway,+beside+Iscon+Gathiya,+Bhadaj,+Ahmedabad,+Gujarat+380060'
              target='_blank'
              rel='noopener noreferrer'
              className='contact-link'
            >
              601, Suryansh Gateway, beside Iscon Gathiya, circle, Bhadaj, Ahmedabad, Gujarat 380060
            </a>
          </p>

          <p>
            <strong>📞 Phone:</strong>
            <br />
            <a href='tel:+919904004444' className='contact-link'>
              +91 99876 54321
            </a>
          </p>

          <p>
            <strong>📧 Email:</strong>
            <br />
            <a href='mailto:support@snehworld.com' className='contact-link'>
              support@snehworld.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
