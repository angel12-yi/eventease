import { useState } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    name: "Event Decoration",
    category: "Decoration",
    description:
      "Beautiful themes, stage designs, floral arrangements and complete venue decoration.",
    icon: "✦",
    price: "From ₹15,000",
  },
  {
    id: 2,
    name: "Professional Photography",
    category: "Photography",
    description:
      "Capture every important moment with our professional event photographers.",
    icon: "◉",
    price: "From ₹12,000",
  },
  {
    id: 3,
    name: "Premium Catering",
    category: "Catering",
    description:
      "Delicious menus with traditional Kerala cuisine and modern catering options.",
    icon: "◇",
    price: "From ₹500 / plate",
  },
  {
    id: 4,
    name: "Music & DJ",
    category: "Music & DJ",
    description:
      "Keep your celebration alive with professional DJs, music systems and lighting.",
    icon: "♫",
    price: "From ₹8,000",
  },
  {
    id: 5,
    name: "Makeup & Styling",
    category: "Makeup",
    description:
      "Professional makeup and styling services for brides, guests and special occasions.",
    icon: "♡",
    price: "From ₹5,000",
  },
  {
    id: 6,
    name: "Videography",
    category: "Videography",
    description:
      "Cinematic event videos that let you relive your most special moments.",
    icon: "▶",
    price: "From ₹15,000",
  },
  {
    id: 7,
    name: "Entertainment",
    category: "Entertainment",
    description:
      "Live performances, artists, games and entertainment for guests of all ages.",
    icon: "★",
    price: "From ₹10,000",
  },
  {
    id: 8,
    name: "Floral Design",
    category: "Decoration",
    description:
      "Elegant floral arrangements, bouquets and customized flower decorations.",
    icon: "❀",
    price: "From ₹7,000",
  },
];

const categories = [
  "All",
  "Decoration",
  "Photography",
  "Catering",
  "Music & DJ",
  "Makeup",
  "Videography",
  "Entertainment",
];

function Services() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredServices =
    selectedCategory === "All"
      ? services
      : services.filter(
          (service) => service.category === selectedCategory
        );

  return (
    <div className="services-page">

      {/* HERO */}

      <section className="services-hero">

        <div className="services-hero-content">

          <p className="section-label">
            EVERYTHING YOU NEED
          </p>

          <h1>
            We take care
            <br />
            <span>of every detail.</span>
          </h1>

          <p>
            From the first idea to the final goodbye,
            our carefully selected services make your event
            effortless and unforgettable.
          </p>

        </div>

      </section>


      {/* SERVICES */}

      <section className="services-section">

        <div className="services-heading">

          <div>
            <p className="section-label">
              OUR SERVICES
            </p>

            <h2>
              Bring your
              <br />
              vision to life.
            </h2>
          </div>

          <p className="services-count">
            {filteredServices.length} Services
          </p>

        </div>


        {/* FILTERS */}

        <div className="service-filters">

          {categories.map((category) => (

            <button
              key={category}
              className={
                selectedCategory === category
                  ? "service-filter active"
                  : "service-filter"
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>

          ))}

        </div>


        {/* SERVICE GRID */}

        <div className="service-grid">

          {filteredServices.map((service) => (

            <div
              className="service-card"
              key={service.id}
            >

              <div className="service-icon">
                {service.icon}
              </div>

              <p className="service-category">
                {service.category}
              </p>

              <h3>{service.name}</h3>

              <p className="service-description">
                {service.description}
              </p>

              <div className="service-bottom">

                <span className="service-price">
                  {service.price}
                </span>

                <Link
                  to="/booking"
                  className="service-link"
                >
                  Choose →
                </Link>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* PROCESS */}

      <section className="service-process">

        <div className="process-heading">

          <p className="section-label">
            HOW IT WORKS
          </p>

          <h2>
            From idea to
            <br />
            <span>unforgettable.</span>
          </h2>

        </div>


        <div className="process-grid">

          <div className="process-step">

            <span>01</span>

            <h3>Tell us your vision</h3>

            <p>
              Share your event type, date, guest count
              and everything you have imagined.
            </p>

          </div>


          <div className="process-step">

            <span>02</span>

            <h3>Choose your services</h3>

            <p>
              Select the services that match your event
              and your budget.
            </p>

          </div>


          <div className="process-step">

            <span>03</span>

            <h3>We make it happen</h3>

            <p>
              Our team coordinates every detail so you
              can enjoy your special day.
            </p>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="services-cta">

        <p className="section-label">
          READY TO START?
        </p>

        <h2>
          Let's create
          <br />
          something beautiful.
        </h2>

        <p>
          Tell us what you're planning and we'll help
          you turn your idea into an unforgettable event.
        </p>

        <Link
          to="/booking"
          className="primary-button"
        >
          Start Planning →
        </Link>

      </section>

    </div>
  );
}

export default Services;