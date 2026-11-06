import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">

        <div className="hero-content">

          <p className="hero-small-title">
            YOUR MOMENT. OUR MAGIC.
          </p>

          <h1>
            Creating Moments
            <br />
            <span>Worth Remembering.</span>
          </h1>

          <p className="hero-description">
            From dreamy weddings to unforgettable celebrations,
            EventEase brings your vision to life with creativity,
            elegance, and effortless planning.
          </p>

          <div className="hero-buttons">

            <Link to="/events" className="primary-button">
              Explore Events
            </Link>

            <Link to="/booking" className="secondary-button">
              Plan Your Event
            </Link>

          </div>

        </div>

        <div className="hero-decoration">
          <div className="hero-circle"></div>
          <div className="hero-card">
            <span>✦</span>
            <p>Make Every<br />Moment Special</p>
          </div>
        </div>

      </section>


      {/* INTRODUCTION */}

      <section className="intro-section">

        <div className="section-label">
          WELCOME TO EVENTEASE
        </div>

        <h2>
          We turn your special moments
          <br />
          into unforgettable memories.
        </h2>

        <p>
          EventEase is your trusted partner for creating beautiful,
          memorable, and stress-free events. Whether it's your dream
          wedding, a birthday celebration, a corporate gathering, or
          an intimate engagement, we're here to make every detail
          extraordinary.
        </p>

      </section>


      {/* EVENT TYPES */}

      <section className="events-preview">

        <div className="section-heading">

          <div>
            <p className="section-label">WHAT WE PLAN</p>

            <h2>
              Celebrate Every
              <br />
              Occasion
            </h2>
          </div>

          <Link to="/events" className="text-link">
            View All Events →
          </Link>

        </div>


        <div className="event-grid">

          <div className="event-card wedding-card">
            <div className="event-overlay">
              <span>01</span>
              <h3>Weddings</h3>
              <p>Begin your forever with a celebration as beautiful as your love.</p>
              <Link to="/events">Explore →</Link>
            </div>
          </div>


          <div className="event-card birthday-card">
            <div className="event-overlay">
              <span>02</span>
              <h3>Birthdays</h3>
              <p>Make every birthday a moment worth celebrating.</p>
              <Link to="/events">Explore →</Link>
            </div>
          </div>


          <div className="event-card corporate-card">
            <div className="event-overlay">
              <span>03</span>
              <h3>Corporate Events</h3>
              <p>Professional events designed to leave a lasting impression.</p>
              <Link to="/events">Explore →</Link>
            </div>
          </div>


          <div className="event-card engagement-card">
            <div className="event-overlay">
              <span>04</span>
              <h3>Engagements</h3>
              <p>Celebrate the beginning of something beautiful.</p>
              <Link to="/events">Explore →</Link>
            </div>
          </div>

        </div>

      </section>


      {/* WHY CHOOSE US */}

      <section className="why-section">

        <div className="why-image">
          <div className="image-placeholder">
            <span>EVENTEASE</span>
          </div>
        </div>

        <div className="why-content">

          <p className="section-label">
            WHY EVENTEASE?
          </p>

          <h2>
            Your vision.
            <br />
            Our expertise.
          </h2>

          <p>
            Planning an event should be exciting, not stressful.
            Our team takes care of every detail so you can focus
            on what truly matters — enjoying your special day.
          </p>

          <div className="features">

            <div className="feature">
              <div className="feature-number">01</div>
              <div>
                <h3>Creative Planning</h3>
                <p>
                  Unique concepts designed around your personality
                  and style.
                </p>
              </div>
            </div>

            <div className="feature">
              <div className="feature-number">02</div>
              <div>
                <h3>Attention to Detail</h3>
                <p>
                  We take care of every little detail to create
                  a flawless experience.
                </p>
              </div>
            </div>

            <div className="feature">
              <div className="feature-number">03</div>
              <div>
                <h3>Stress-Free Experience</h3>
                <p>
                  Sit back, relax, and enjoy your event while
                  we handle everything.
                </p>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* CALL TO ACTION */}

      <section className="cta-section">

        <p className="section-label">
          LET'S CREATE SOMETHING BEAUTIFUL
        </p>

        <h2>
          Your perfect event
          <br />
          starts here.
        </h2>

        <p>
          Tell us your vision and we'll take care of the rest.
        </p>

        <Link to="/booking" className="primary-button">
          Start Planning →
        </Link>

      </section>

    </div>
  );
}

export default Home;