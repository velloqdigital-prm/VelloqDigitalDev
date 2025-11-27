import './AboutPage.css';
import heroimg from '../assets/chimg2.jpg';
import heartimg from '../assets/childheart.jpg';
import meaningchild from '../assets/meaningchild.jpg';
import betterimg from '../assets/betterimg.jpg';
import successimg from '../assets/successimg.jpg';

function AboutPage() {
  return (
    <div className='about-back '>
      <div>
        <section className='hero-section'>
          <div className='hero-overlay'></div>
          <img src={heroimg} alt='Hero Background' className='hero-bg' />

          <div className='hero-content text-center'>
            <h1 className='fade-in-up'>Why We Celebrate Children’s Day ?</h1>
            <h6 className='fade-in-up delay-1 text-white'>
              India celebrates this special day to honor Pandit Jawaharlal Nehru, our first Prime Minister, who believed
              that children are the real strength and foundation of a nation. Fondly called{' '}
              <strong>“Chacha Nehru”</strong>, he loved children deeply and always encouraged education, equality, and
              happiness for every child.
            </h6>
            <br />
            <br />
          </div>
        </section>

        <section className='about-intro my-md-5'>
          <div className='d-md-flex align-items-center justify-content-center gap-5 mt-md-0 mt-5'>
            <div className='intro-text col-md-5'>
              <h2>The Heart Behind Children’s Day</h2>

              <h5>
                <i>Pandit Jawaharlal Nehru’s Love for Children</i>
              </h5>
              <p>
                Pandit Nehru, lovingly called “Chacha Nehru”, had deep affection for children. He often said,
                <br /> <br /> “The children of today will make the India of tomorrow.” <br />
                <br />
                He believed that every child deserves equal opportunity to grow, learn, and dream freely. Children’s Day
                celebrates his vision of a joyful, safe, and educated childhood for every boy and girl. <br />
              </p>
            </div>

            <div className='intro-image-container col-md-5'>
              <img className='intro-image w-100' src={heartimg} alt='About us image' />
            </div>
          </div>
        </section>

        <section className='about-intro my-md-5'>
          <div className='d-md-flex align-items-center justify-content-center gap-5 mt-md-0 mt-5'>
            <div className='intro-image-container col-md-5'>
              <img className='intro-image w-100' src={meaningchild} alt='About us image' />
            </div>
            <div className='intro-text col-md-5'>
              <h2>The True Meaning of Children’s Day</h2>

              <h5>
                <i>Celebrating Innocence, Learning, and Dreams</i>
              </h5>
              <p>
                Children’s Day is not just a holiday; it’s a celebration of childhood itself. It reminds parents,
                teachers, and society to value and respect children’s voices.tion: A smiling group of children studying,
                playing, or holding Indian flags.
                <br />
                <br />
                Across India, schools and organizations host fun events, games, storytelling sessions, and cultural
                programs that spread joy and learning.
              </p>
            </div>
          </div>
        </section>

        <section className='about-intro my-md-5'>
          <div className='d-md-flex align-items-center justify-content-center gap-5 mt-md-0 mt-5'>
            <div className='intro-text col-md-5'>
              <h2>Together for a Better Tomorrow</h2>

              <h5>
                <i>Our Vision and Mission</i>
              </h5>
              <p>
                To build a world where every child is educated, safe, and free to dream big.
                <br /> <br /> To empower children through quality education, emotional support, and awareness programs
                that encourage kindness, creativity, and sustainability.
                <br />
              </p>
            </div>

            <div className='intro-image-container col-md-5'>
              <img className='intro-image w-100' src={betterimg} alt='About us image' />
            </div>
          </div>
        </section>

        <section className='about-intro py-md-5'>
          <div className='d-md-flex align-items-center justify-content-center gap-5 mt-md-0 mt-5'>
            <div className='intro-image-container col-md-5'>
              <img className='intro-image w-100' src={successimg} alt='About us image' />
            </div>
            <div className='intro-text col-md-5'>
              <h2>Spreading Smiles and Success</h2>

              <h5>
                <i>Celebrating the Spirit of Childhood</i>
              </h5>
              <p>
                Across India, Children’s Day is celebrated in schools, NGOs, and communities with dance, music, drama,
                art, and storytelling. Teachers dress up as kids, students take the stage, and laughter fills the air.
                <br />
                <br />
                It’s a day to remind ourselves that children are not just the future — they are the joy of today.
                <br />
                <br />
                “Every child is a different kind of flower, and all together, they make this world a beautiful garden.”
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;
