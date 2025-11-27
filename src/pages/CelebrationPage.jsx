import './CelebrationPage.css';

function CelebrationPage() {
  const jobs = [
    {
      id: 1,
      title: 'Frontend Developer (React.js)',
      location: 'Pune, India',
      experience: '2 - 4 years',
      description:
        'Looking for a skilled React.js developer with experience in building dynamic and responsive web applications.',
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      location: 'Remote',
      experience: '1 - 3 years',
      description:
        'Creative designer with experience in Figma or Adobe XD to design modern and user-friendly interfaces.',
    },
    {
      id: 3,
      title: 'Backend Developer (Node.js)',
      location: 'Mumbai, India',
      experience: '3 - 5 years',
      description: 'Seeking a backend developer with strong skills in Node.js, Express, and MongoDB.',
    },
    {
      id: 4,
      title: 'Project Manager',
      location: 'Bangalore, India',
      experience: '5+ years',
      description:
        'Experienced project manager to lead a cross-functional team and ensure timely delivery of web projects.',
    },
  ];

  return (
    <div className='career-page'>
      <section>
        <h1 className='fade-in-up'>Celebrating the Power of Young Minds</h1>
      </section>

      <div className='career-container'>
        <h2 className='career-heading'>Current Job Openings</h2>
        <div className='career-grid'>
          {jobs.map((job) => (
            <div key={job.id} className='career-card'>
              <h3 className='career-title'>{job.title}</h3>
              <p className='career-location'>📍 {job.location}</p>
              <p className='career-experience'>💼 Experience: {job.experience}</p>
              <p className='career-description'>{job.description}</p>
              <button className='apply-btn'>Apply Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CelebrationPage;
