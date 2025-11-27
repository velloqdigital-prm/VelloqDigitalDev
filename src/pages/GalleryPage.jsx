import './GalleryPage.css';
import eventbg from '../assets/gallery1.jpg';
import img1 from '../assets/child1.jpg';
import img2 from '../assets/child2.jpg';
import img3 from '../assets/child3.jpg';
import img4 from '../assets/child4.jpg';
import img5 from '../assets/child5.jpg';
import img6 from '../assets/child6.jpg';
import img7 from '../assets/child7.jpg';
import img8 from '../assets/child8.jpg';
import img9 from '../assets/child9.jpg';
import img10 from '../assets/chimg2.jpg';
import img11 from '../assets/child10.jpg';
import img12 from '../assets/childheart.jpg';

function GalleryPage() {
  const eventArray = [
    { id: 1, img: img1, title: 'Colors of Childhood' },
    { id: 2, img: img2, title: 'Learning, Love & Laughter' },
    { id: 3, img: img3, title: 'Spreading Love Everywhere' },
    { id: 4, img: img4, title: 'Joy in Every Frame' },
    { id: 5, img: img5, title: 'Little Moments, Big Memories' },
    { id: 6, img: img6, title: 'Love, Laughter, and Friendship' },
    { id: 7, img: img11, title: 'Every Smile Tells a Story' },

    { id: 8, img: img7, title: 'Together We Create Memories That Shine' },
    { id: 9, img: img8, title: 'Love, Laughter, and Friendship' },
    { id: 10, img: img9, title: 'Where Every Picture Speaks of Love' },
    { id: 11, img: img10, title: 'Smiles That Light Up the World' },
    { id: 12, img: img12, title: 'The Heart of Celebration' },
  ];

  return (
    <div className='event-page'>
      <section className='hero-section'>
        <div className='hero-overlay'></div>
        <img src={eventbg} alt='Hero Background' className='hero-bg' />

        <div className='hero-content text-center'>
          <h1 className='fade-in-up'>Moments Full of Smiles and Sparkles!</h1>
          <h6 className='fade-in-up delay-1 text-white'>
            Every smile tells a story, every laugh echoes hope.
            <br />
            This gallery captures the pure happiness, energy, and innocence of childhood — the heart of our Children’s
            Day celebration. Through these moments, we celebrate not just children, but the spirit of love, unity, and
            endless dreams that they bring to our world.
          </h6>
          <br />
          <br />
        </div>
      </section>

      <div className='event-container'>
        {eventArray.map((event) => (
          <div className='event-card' key={event.id}>
            <img src={event.img} alt={event.title} className='event-image' />
            <h3 className='event-title'>{event.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GalleryPage;
