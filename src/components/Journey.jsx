import { useNavigate } from 'react-router-dom';
import './Journey.css';

export default function Journey() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  return (
    <section className='cta-section'>
      <h2>Ready to Make Your Brand Legendary?</h2>
      <p>Let's discuss how we can help your business grow and achieve remarkable results.</p>
      <button className='cta-btn' onClick={handleNavigate}>
        Start Your Journey <span>→</span>
      </button>
    </section>
  );
}
