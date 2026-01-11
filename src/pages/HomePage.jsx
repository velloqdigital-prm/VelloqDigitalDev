import './HomePage.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Services from '../components/Services';
import WhyChoose from '../components/WhyChoose';
import Testimonials from '../components/Testimonials';
import Journey from '../components/Journey';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };
  const handleService = () => {
    navigate('/services');
    window.scrollTo(0, 0);
  };

  const stats = [
    { value: '500+', label: 'Clients Served' },
    { value: '95%', label: 'Client Retention' },
    { value: '200%', label: 'Avg. ROI Increase' },
    { value: '50+', label: 'Industry Awards' },
  ];
  return (
    <div className='home-page'>
      <section className='hero-section'>
        <div className='hero-content'>
          <h1 className='hero-title'>
            Make Your Brand <span>Legendary</span>
          </h1>

          <p className='hero-subtitle'>
            Transform your digital presence with data-driven marketing strategies that deliver measurable results and
            lasting impact.
          </p>

          <div className='hero-buttons'>
            <button className='btn primary' onClick={handleNavigate}>
              Get Started <span>→</span>
            </button>

            <button className='btn secondary text-primary' onClick={handleService}>
              Our Services
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className='stats'>
          {stats.map((item, i) => (
            <div className='stat-box' key={i}>
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
        <Services />
      </section>

      <section className='why-section'>
        <WhyChoose />
      </section>

      <section>
        <Testimonials />
      </section>

      <section>
        <Journey />
      </section>
    </div>
  );
}

export default Home;
