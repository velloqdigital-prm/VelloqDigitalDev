import React, { useState } from 'react';
import './ThemePage.css';
import blog from '../assets/theme.jpg';
import img1 from '../assets/img 1.jpg';
import img2 from '../assets/img 2.jpg';
import img3 from '../assets/img 3.jpg';
import img4 from '../assets/img 4.jpg';

function ThemePage() {
  const blogPosts = [
    {
      id: 1,
      img: img1,
      title: 'Every Child Deserves a Chance',
      content:
        'Every child, regardless of background or ability, deserves access to quality education. Inclusive education helps children learn together, respect differences, and grow with empathy.',
    },
    {
      id: 2,
      img: img2,
      title: 'Mental Well-being Comes First',
      content:
        'Happy minds create bright futures.In today’s fast-paced world, emotional health is just as important as academic success.This theme promotes kindness, friendship, and confidence among children.',
    },
    {
      id: 3,
      img: img3,
      title: 'Digital Safety is the New Life Skill',
      content:
        'With children spending more time online, it’s vital to teach them how to use the internet safely. Awareness about cyberbullying, privacy, and responsible use of technology empowers young users.',
    },
    {
      id: 4,
      img: img4,
      title: 'Caring for Our Planet Starts Young',
      content:
        'Small steps by children — planting trees, saving water, and reducing plastic — create a big impact. Environmental care builds responsibility and love for nature from an early age.',
    },
  ];

  return (
    <div>
      <section className='hero-section'>
        <div className='hero-overlay'></div>
        <img src={blog} alt='Hero Background' className='hero-bg' />

        <div className='hero-content text-center'>
          <h1 className='fade-in-up'>Celebrating the Power of Young Minds</h1>
          <h6 className='fade-in-up delay-1 text-white'>
            Inclusive Education, Mental Well-being, Digital Safety, and Environmental Care.
            <br />
            This year’s Children’s Day focuses on building a safe, happy, and sustainable world for every child. It
            encourages us to look beyond celebrations and work together to ensure that every child gets equal
            opportunities to learn, grow, and dream freely.
          </h6>
          <br />
          <br />
        </div>
      </section>
      <div className='blog-content'>
        {blogPosts.map((post) => (
          <div key={post.id} className='blog-post'>
            <img src={post.img} alt={post.title} className='blog-post-image' />
            <h2 className='blog-post-title'>{post.title}</h2>
            <p className='blog-post-content'>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ThemePage;
