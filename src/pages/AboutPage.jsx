import './AboutPage.css';
import { FaChartLine } from 'react-icons/fa';
import { LuUsers } from 'react-icons/lu';
import { BiBullseye } from 'react-icons/bi';
import { FiAward } from 'react-icons/fi';
import { FiUsers } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

function AboutPage() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };
  return (
    <div className='about-back '>
      <div>
        <section className='hero-section'>
          <div className='hero-content'>
            <h1 className='hero-title'>About Velloq Digital</h1>
            <p className='hero-subtitle'>
              We are a full-service digital marketing agency dedicated to helping brands grow their online presence and
              achieve legendary results.
            </p>
          </div>
        </section>

        <section className='mission-section'>
          <div className='mission-container'>
            <div className='mission-left col-md-6'>
              <h2>Our Mission</h2>

              <p className='intro'>
                To transform businesses through innovative digital marketing strategies that deliver measurable results
                and create lasting impact.
              </p>

              <p>
                Founded in 2020, we've been helping businesses navigate the digital landscape with innovative strategies
                and measurable results. Our team of experts brings together creativity, data analytics, and industry
                expertise to deliver campaigns that truly make a difference.
              </p>
            </div>

            <div className='mission-card col-md-5'>
              <div className='mission-item'>
                <div className='icon blue'>
                  <LuUsers />
                </div>
                <div>
                  <h4>Client-Focused</h4>
                  <span>Your success is our priority</span>
                </div>
              </div>

              <div className='mission-item'>
                <div className='icon red'>
                  <BiBullseye />
                </div>
                <div>
                  <h4>Result-Driven</h4>
                  <span>We deliver measurable outcomes</span>
                </div>
              </div>

              <div className='mission-item'>
                <div className='icon purple'>
                  <FiAward />
                </div>
                <div>
                  <h4>Award-Winning</h4>
                  <span>Recognized industry excellence</span>
                </div>
              </div>

              <div className='mission-item'>
                <div className='icon pink'>
                  <FaChartLine />
                </div>
                <div>
                  <h4>Growth-Oriented</h4>
                  <span>Strategies that scale</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='values-section'>
          <div className='values-header'>
            <h2>Our Core Values</h2>
            <p>The principles that guide everything we do</p>
          </div>

          <div className='values-grid'>
            <div className='value-card'>
              <h4>Innovation</h4>
              <p>
                We stay ahead of digital trends and continuously explore new strategies to keep our clients at the
                forefront of their industries.
              </p>
            </div>

            <div className='value-card'>
              <h4>Transparency</h4>
              <p>
                Clear communication and honest reporting are the foundations of our client relationships. You always
                know where you stand.
              </p>
            </div>

            <div className='value-card'>
              <h4>Excellence</h4>
              <p>
                We set high standards and never compromise on quality. Every campaign is crafted with meticulous
                attention to detail.
              </p>
            </div>
          </div>
        </section>

        <section className='team-section'>
          <div className='team-header'>
            <h2>Meet Our Team</h2>
            <p>The talented people behind our success</p>
          </div>

          <div className='team-grid'>
            <div className='team-card blue'>
              <div className='team-icon blue-bg'>
                <FiUsers />
              </div>

              <h4>Alex Thompson</h4>
              <span>Founder & CEO</span>

              <p>With over 15 years in digital marketing, Alex leads our vision to make every brand legendary.</p>
            </div>

            {/* CARD 2 */}
            <div className='team-card red'>
              <div className='team-icon red-bg'>
                <FiUsers />
              </div>

              <h4>Jessica Martinez</h4>
              <span>Head of Strategy</span>

              <p>Jessica brings data-driven insights and creative solutions to every campaign.</p>
            </div>

            {/* CARD 3 */}
            <div className='team-card purple'>
              <div className='team-icon purple-bg'>
                <FiUsers />
              </div>

              <h4>David Kim</h4>
              <span>Creative Director</span>

              <p>David crafts compelling visual stories that resonate with audiences across all platforms.</p>
            </div>
          </div>
        </section>

        <section className='impact-section'>
          <h2>Our Impact</h2>

          <div className='impact-grid'>
            <div className='impact-item'>
              <span className='number blue'>500+</span>
              <p>Clients Served</p>
            </div>

            <div className='impact-item'>
              <span className='number red'>95%</span>
              <p>Client Retention</p>
            </div>

            <div className='impact-item'>
              <span className='number purple'>200%</span>
              <p>Avg. ROI Increase</p>
            </div>

            <div className='impact-item'>
              <span className='number pink'>50+</span>
              <p>Industry Awards</p>
            </div>
          </div>
        </section>

        <section className='cta-section'>
          <h1>Join Us on the Journey</h1>
          <p> Let's work together to make your brand legendary</p>
          <button className='cta-btn' onClick={handleNavigate}>
            Get in Touch <span>→</span>
          </button>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;
