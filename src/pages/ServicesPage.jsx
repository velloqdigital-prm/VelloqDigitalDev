import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ServicesPage.css';
import { IoSearch } from 'react-icons/io5';
import { FiShare2, FiFileText, FiMail } from 'react-icons/fi';
import { CgRadioChecked } from 'react-icons/cg';
import { LuLightbulb } from 'react-icons/lu';

function ServicesPage() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  const servicesData = [
    {
      id: 1,
      title: 'SEO Optimization',
      description:
        'Our comprehensive SEO services help your business rank higher in search results. We conduct keyword research, optimize on-page elements, build quality backlinks, and provide detailed analytics to track your success.',
      features: ['Keyword Research', 'On-Page Optimization', 'Link Building', 'Technical SEO', 'Local SEO'],
      icon: <IoSearch />,
      bg: 'blue',
      reverse: false,
    },
    {
      id: 2,
      title: 'Social Media Marketing',
      description:
        'We create and execute social media strategies that resonate with your target audience. From content creation to community management, we handle all aspects of your social media presence.',
      features: [
        'Content Strategy',
        'Community Management',
        'Paid Advertising',
        'Analytics & Reporting',
        'Influencer Partnerships',
      ],
      icon: <FiShare2 />,
      bg: 'red',
      reverse: true,
    },
    {
      id: 3,
      title: 'Content Marketing',
      description:
        'Quality content is the heart of digital marketing. Our team creates engaging blog posts, articles, videos, and infographics that attract, inform, and convert your target audience.',
      features: [
        'Blog Writing',
        'Video Production',
        'Infographic Design',
        'E-books & Whitepapers',
        'Email Newsletters',
      ],
      icon: <FiFileText />,
      bg: 'purple',
      reverse: false,
    },
    {
      id: 4,
      title: 'PPC Advertising',
      description:
        'Maximize your ROI with our expert PPC management. We create and optimize campaigns across Google Ads, Facebook Ads, and other platforms to drive targeted traffic and conversions.',
      features: ['Campaign Strategy', 'Ad Creation', 'Bid Management', 'A/B Testing', 'Conversion Tracking'],
      icon: <CgRadioChecked />,
      bg: 'blue',
      reverse: true,
    },
    {
      id: 5,
      title: 'Email Marketing',
      description:
        'Our email marketing campaigns are designed to nurture leads, engage customers, and increase conversions through personalized and automated communication.',
      features: [
        'Campaign Strategy',
        'Email Automation',
        'Template Design',
        'Audience Segmentation',
        'Performance Tracking',
      ],
      icon: <FiMail />,
      bg: 'red',
      reverse: false,
    },
    {
      id: 6,
      title: 'Brand Strategy',
      description:
        'We help define and strengthen your brand identity through strategic planning, positioning, and consistent messaging across all digital channels.',
      features: ['Brand Positioning', 'Market Research', 'Visual Identity', 'Messaging Strategy', 'Brand Guidelines'],
      icon: <LuLightbulb />,
      bg: 'purple',
      reverse: true,
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Discovery',
      desc: 'We analyze your business, goals, and target audience',
      color: '#2563eb',
    },
    {
      number: '02',
      title: 'Strategy',
      desc: 'We develop a customized marketing plan for your needs',
      color: '#dc2626',
    },
    {
      number: '03',
      title: 'Execution',
      desc: 'We implement campaigns with precision and creativity',
      color: '#9333ea',
    },
    {
      number: '04',
      title: 'Optimization',
      desc: 'We continuously refine for maximum performance',
      color: '#db2777',
    },
  ];

  return (
    <div>
      <section className='hero-section'>
        <div className='hero-content'>
          <h1 className='hero-title'>Our Services</h1>
          <p className='hero-subtitle'>
            Comprehensive digital marketing solutions designed to elevate your brand and drive measurable results
          </p>
        </div>
      </section>

      <section className='services-container py-5'>
        {servicesData.map((service) => (
          <div
            key={service.id}
            className={`row align-items-center service-card shadow rounded mb-5 overflow-hidden ${
              service.reverse ? 'flex-row-reverse' : ''
            }`}
            data-aos='fade-up'
          >
            <div className='col-md-6 content'>
              <div className={`service-emoji ${service.bg}`}>{service.icon}</div>

              <h2>{service.title}</h2>
              <p className='text-muted'>{service.description}</p>

              <h6>Key Features:</h6>
              <ul className='list-unstyled feature-list'>
                {service.features.map((item, i) => (
                  <li key={i} className='list-show'>
                    <span className={`service-list circle-tick ${service.bg}`}> ✔ </span> <p>{item}</p>
                  </li>
                ))}
              </ul>

              <button className='btn btn-danger' onClick={handleNavigate}>
                Get Started →
              </button>
            </div>

            <div className={`col-md-6 visual ${service.bg}`}>
              <span className='visual-icon'>{service.icon}</span>
            </div>
          </div>
        ))}
      </section>

      <section className='process-section'>
        <h2>Our Process</h2>
        <p className='subtitle'>A proven methodology that delivers exceptional results</p>

        <div className='process-grid'>
          {steps.map((step, index) => (
            <div key={index} className='process-card'>
              <div className='step-circle' style={{ backgroundColor: step.color }}>
                {step.number}
              </div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='cta-section'>
        <h1>Ready to Transform Your Digital Presence?</h1>
        <p> Let's create a customized strategy that drives real results for your business.</p>
        <button className='cta-btn' onClick={handleNavigate}>
          Contact Us Today <span>→</span>
        </button>
      </section>
    </div>
  );
}

export default ServicesPage;
