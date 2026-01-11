import './WhyChoose.css';

export default function WhyChoose() {
  const points = [
    'Data-Driven Strategies',
    'Experienced Team',
    'Transparent Reporting',
    'Proven Track Record',
    '24/7 Support',
  ];

  const stats = [
    { value: '200%', label: 'Average ROI Increase', color: 'red' },
    { value: '95%', label: 'Client Satisfaction', color: 'blue' },
    { value: '500+', label: 'Successful Projects', color: 'purple' },
  ];

  return (
    <section className='why-section'>
      <div className='why-container'>
        <div className='why-left col-md-6 col-12'>
          <h2>Why Choose Velloq Digital?</h2>
          <p>
            We combine creativity, data analytics, and industry expertise to deliver marketing campaigns that truly make
            a difference.
          </p>

          <ul>
            {points.map((item, index) => (
              <li key={index}>
                <span className='check'>✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className='why-right col-md-5 col-12'>
          {stats.map((item, index) => (
            <div key={index} className={`stat ${item.color}`}>
              <h3>{item.value}</h3>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
