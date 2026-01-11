import './Testimonials.css';

export default function Testimonials() {
  const data = [
    {
      quote:
        '“Velloq Digital transformed our online presence completely. Our website traffic increased by 300% in just 6 months!”',
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
    },
    {
      quote:
        '“The team at Velloq Digital is exceptional. Their strategic approach to social media marketing doubled our engagement rates.”',
      name: 'Michael Chen',
      role: 'Marketing Director, GrowthCo',
    },
    {
      quote: '“Professional, creative, and results-driven. Velloq Digital helped us achieve legendary results!”',
      name: 'Emily Rodriguez',
      role: 'Founder, Retail Plus',
    },
  ];

  return (
    <section className='testimonial-section'>
      <h2 className='testimonial-title'>What Our Clients Say</h2>

      <div className='testimonial-row'>
        {data.map((item, i) => (
          <div className='testimonial-card' key={i}>
            <div className='stars'>★★★★★</div>
            <p className='quote'>{item.quote}</p>
            <p className='name'>{item.name}</p>
            <p className='role'>{item.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
