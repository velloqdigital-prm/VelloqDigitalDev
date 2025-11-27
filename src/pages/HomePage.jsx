import './HomePage.css';
import heroimg from '../assets/ch img 1.jpg';
import passport from '../assets/banner 1.jpg';
import nehru from '../assets/nehru.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import Img1 from '../assets/home1.jpg';
import Img2 from '../assets/home2.jpg';
import Img3 from '../assets/home3.jpg';
import Img4 from '../assets/home4.jpg';
import Img5 from '../assets/home5.jpg';
import Imge1 from '../assets/child1.jpg';
import Imge2 from '../assets/betterimg.jpg';
import Imge3 from '../assets/banner 2.jpg';
import Imge4 from '../assets/child3.jpg';
import Imge5 from '../assets/childheart.jpg';
import Imge6 from '../assets/child4.jpg';
import Imge7 from '../assets/child6.jpg';
import Imge8 from '../assets/child7.jpg';
import Imge9 from '../assets/child2.jpg';
import Imge10 from '../assets/chimg2.jpg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Home() {
  return (
    <div className='home-page'>
      <section className='hero-section'>
        <div className='hero-overlay'></div>
        <img src={heroimg} alt='Hero Background' className='hero-bg' />

        <div className='hero-content text-center'>
          <h1 className='fade-in-up'>Happy Children’s Day 14th November!</h1>
          <h6 className='fade-in-up delay-1'>
            India celebrates this special day to honor Pandit Jawaharlal Nehru, our first Prime Minister, who believed
            that children are the real strength and foundation of a nation. Fondly called{' '}
            <strong>“Chacha Nehru”</strong>, he loved children deeply and always encouraged education, equality, and
            happiness for every child.
          </h6>
          <i className=''>— Pandit Jawaharlal Nehru</i>
          <br />
          <br />

          <a href='#about' className='btn btn-gradient fade-in-up delay-2'>
            Let's Celebrate
          </a>
        </div>
      </section>

      <section id='about' className='about-section py-5 '>
        <div className=' d-flex flex-wrap align-items-center justify-content-evenly'>
          <div className='about-text col-md-5 col-12 fade-in-up'>
            <h2 className='name-head'>
              Happy Children’s Day
              <br /> Celebrating the Heartbeat of Our Nation!
            </h2>
            <h4 className='subtitle '>“Let’s Build a World Where Every Child Shines”</h4>
            <p className='para text-dark'>
              Every child is a bundle of joy, a spark of curiosity, and a dream waiting to unfold.
              <br />
              On <strong>14th November</strong>, India celebrates <strong>Children’s Day</strong> to honor the birth
              anniversary of<strong> Pandit Jawaharlal Nehru</strong>, the first Prime Minister of independent India.
              <br />
              Lovingly known as Chacha Nehru, he believed that{' '}
              <strong>children are the real strength and foundation of a nation</strong> — their dreams, laughter, and
              innocence shape the future of India.
              <br />
              <br />
              This day is not just a festival; it’s a <strong>reminder </strong>— to nurture our children with{' '}
              <strong>care, respect, and love </strong>, and to give them the tools to
              <strong>learn, grow, and dream without limits.</strong>
            </p>
          </div>
          <div className='about-img col-md-5 col-12 mt-4 mt-md-0 fade-in-right'>
            <img src={passport} alt='Mahendra Devlekar' className='img-fluid rounded-4 shadow-lg' />
          </div>
        </div>
      </section>

      <section id='about' className='about-section py-5 nehru-abt'>
        <div className=' d-flex flex-wrap align-items-center justify-content-evenly'>
          <div className='about-img col-md-5 col-12 mt-4 mt-md-0 fade-in-right'>
            <img src={nehru} alt='Mahendra Devlekar' className='img-fluid rounded-4 shadow-lg' />
          </div>
          <div className='about-text col-md-5 col-12 fade-in-up'>
            <h2 className='name-head'>A Tribute to Pandit Jawaharlal Nehru</h2>
            <h4 className='subtitle '>“The Man Who Saw the Future in Every Child”</h4>
            <p className='para text-dark'>
              Pandit Nehru had an unshakable faith in the power of youth.
              <br />
              He believed that children symbolize<strong> honesty, creativity, and hope</strong> — qualities that can
              shape the destiny of an entire nation.
              <br />
              He spent time with children, listened to them, and treated them as the torchbearers of India’s progress.
              <br />
              <br />
              That’s why we celebrate his birthday as <strong>Children’s Day (Bal Diwas)</strong> — to continue his
              mission of creating a nation where every child has <strong>education, happiness, and equality.</strong>
              <br />
              “The children of today will make the India of tomorrow.” –<i> Pandit Nehru</i>
            </p>
          </div>
        </div>
      </section>

      <section className='slider-bg py-5'>
        <h2 className='text-center mb-4'>Moments of Celebrations</h2>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={30}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          className='mySwiper'
        >
          {[Imge1, Imge2, Imge3, Imge4, Imge5, Imge6, Imge7, Imge8, Imge9, Imge10].map((img, i) => (
            <SwiperSlide key={i}>
              <img src={img} alt={`Slide ${i + 1}`} className='slider-img img-fluid rounded-4 shadow' />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className='cards-section py-5 text-center'>
        <h2 className='fade-in-up text-dark'>The Spirit of Celebration</h2>
        <h5 className='mb-4 text-dark'>
          Children’s Day is celebrated with immense joy across schools, homes, and communities.
          <br /> It’s a day when classrooms turn into playgrounds and lessons turn into laughter.
        </h5>
        <div className='container d-flex flex-wrap justify-content-center gap-4'>
          {[
            {
              img: Img1,
              title: 'Cultural Events',
              desc: 'Songs, dances, dramas, and storytelling that highlight unity and happiness.',
            },
            {
              img: Img2,
              title: 'Fun Competitions',
              desc: 'Fancy dress, drawing, and quiz contests that encourage creativity.',
            },
            {
              img: Img3,
              title: 'Games & Sports',
              desc: 'Fun races and team games that teach sportsmanship and teamwork.',
            },
            {
              img: Img4,
              title: 'Teachers’ Performances',
              desc: 'Teachers express their love through songs, skits, and surprises for their students.',
            },
            {
              img: Img5,
              title: 'Sweet Distribution',
              desc: 'Chocolates and gifts remind every child that they are special and loved.',
            },
          ].map((card, i) => (
            <div key={i} className='animated-card fade-in-up mt-md-2'>
              <div className='card-image-wrapper'>
                <img src={card.img} alt={card.title} className='img-fluid card-img-top' />
              </div>
              <div className='card-body'>
                <h4>{card.title}</h4>
                <p>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
