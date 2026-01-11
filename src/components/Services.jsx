import './Services.css';
import { IoSearch } from 'react-icons/io5';
import { FiShare2 } from 'react-icons/fi';
import { FiFileText } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { BiBullseye } from 'react-icons/bi';
import { LuLightbulb } from 'react-icons/lu';

export default function Services() {
  const services = [
    {
      title: 'SEO Optimization',
      desc: 'Boost your visibility on search engines with data-driven SEO strategies.',
      color: 'blue',
      icon: <IoSearch />,
    },
    {
      title: 'Social Media Marketing',
      desc: 'Engage your audience and build a strong brand presence.',
      color: 'pink',
      icon: <FiShare2 />,
    },
    {
      title: 'Content Marketing',
      desc: 'Tell your brand story with compelling content that converts.',
      color: 'purple',
      icon: <FiFileText />,
    },
    {
      title: 'PPC Advertising',
      desc: 'Drive immediate results with strategic pay-per-click campaigns.',
      color: 'blue',
      icon: <BiBullseye />,
    },
    {
      title: 'Email Marketing',
      desc: 'Connect with customers through personalized email campaigns.',
      color: 'pink',
      icon: <HiOutlineMail />,
    },
    {
      title: 'Brand Strategy',
      desc: 'Develop a strong brand identity that stands out.',
      color: 'purple',
      icon: <LuLightbulb />,
    },
  ];

  return (
    <section>
      <section className='services-section section'>
        <div className='services-header'>
          <h2>Our Services</h2>
          <p>Comprehensive digital marketing solutions tailored to your business needs</p>
        </div>

        <div className='services-grid'>
          {services.map((service, i) => (
            <div className={`service-card  ${service.color}`} key={i}>
              <div className='icon'>{service.icon}</div>
              <h4>{service.title}</h4>
              <p>{service.desc}</p>
              <span className='learn-more'>Learn More →</span>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
