import { useState } from "react";
import { Link } from "react-router-dom";

const venues = [
  {
    id: 1,
    name: "The Grand Palace",
    location: "Kottayam, Kerala",
    category: "Banquet Hall",
    capacity: "500 Guests",
    price: "₹75,000",
    image: "/images/venue-palace.jpg",
  },
  {
    id: 2,
    name: "Green Valley Resort",
    location: "Idukki, Kerala",
    category: "Resort",
    capacity: "300 Guests",
    price: "₹60,000",
    image: "/images/venue-resort.jpg",
  },
  {
    id: 3,
    name: "The Garden Pavilion",
    location: "Kochi, Kerala",
    category: "Outdoor",
    capacity: "250 Guests",
    price: "₹45,000",
    image: "/images/venue-garden.jpg",
  },
  {
    id: 4,
    name: "Royal Convention Centre",
    location: "Thrissur, Kerala",
    category: "Convention Hall",
    capacity: "800 Guests",
    price: "₹95,000",
    image: "/images/venue-convention.jpg",
  },
  {
    id: 5,
    name: "Palm Beach Resort",
    location: "Alappuzha, Kerala",
    category: "Beach",
    capacity: "200 Guests",
    price: "₹70,000",
    image: "/images/venue-beach.jpg",
  },
  {
    id: 6,
    name: "The Heritage Courtyard",
    location: "Kozhikode, Kerala",
    category: "Outdoor",
    capacity: "180 Guests",
    price: "₹40,000",
    image: "/images/venue-heritage.jpg",
  },
];

const categories = [
  "All",
  "Banquet Hall",
  "Resort",
  "Outdoor",
  "Convention Hall",
  "Beach",
];

function Venues() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredVenues = venues.filter((venue) => {
    const matchesCategory =
      selectedCategory === "All" ||
      venue.category === selectedCategory;

    const matchesSearch =
      venue.name.toLowerCase().includes(search.toLowerCase()) ||
      venue.location.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="venues-page">

      {/* HERO */}

      <section className="venues-hero">

        <div className="venues-hero-content">

          <p className="section-label">
            FIND YOUR PERFECT SPACE
          </p>

          <h1>
            Beautiful venues
            <br />
            <span>for beautiful moments.</span>
          </h1>

          <p>
            Discover stunning venues across Kerala for weddings,
            celebrations, corporate events and more.
          </p>

        </div>

      </section>


      {/* VENUES */}

      <section className="venues-section">

        <div className="venues-heading">

          <div>
            <p className="section-label">
              OUR VENUE COLLECTION
            </p>

            <h2>
              Find a place
              <br />
              you'll love.
            </h2>
          </div>

          <p className="venue-count">
            {filteredVenues.length} Venues Available
          </p>

        </div>


        {/* SEARCH */}

        <div className="venue-search">

          <input
            type="text"
            placeholder="Search by venue or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <span>⌕</span>

        </div>


        {/* FILTER */}

        <div className="venue-filters">

          {categories.map((category) => (

            <button
              key={category}
              className={
                selectedCategory === category
                  ? "venue-filter active"
                  : "venue-filter"
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>

          ))}

        </div>


        {/* VENUE GRID */}

        <div className="venue-grid">

          {filteredVenues.map((venue) => (

            <div className="venue-card" key={venue.id}>

              <div
                className="venue-image"
                style={{
                  backgroundImage: `url(${venue.image})`,
                }}
              >

                <span className="venue-type">
                  {venue.category}
                </span>

                <span className="venue-price">
                  From {venue.price}
                </span>

              </div>


              <div className="venue-content">

                <h3>{venue.name}</h3>

                <p className="venue-location">
                  📍 {venue.location}
                </p>

                <div className="venue-info">

                  <span>
                    👥 {venue.capacity}
                  </span>

                  <span>
                    ✦ Premium
                  </span>

                </div>

                <Link
                  to="/booking"
                  className="venue-button"
                >
                  Book This Venue →
                </Link>

              </div>

            </div>

          ))}

        </div>


        {/* NO RESULTS */}

        {filteredVenues.length === 0 && (

          <div className="no-venues">

            <h3>No venues found</h3>

            <p>
              Try another location or category.
            </p>

          </div>

        )}

      </section>


      {/* CTA */}

      <section className="venues-cta">

        <p className="section-label">
          NEED HELP CHOOSING?
        </p>

        <h2>
          Let us find the
          <br />
          perfect venue for you.
        </h2>

        <p>
          Tell us about your event and our team will
          recommend venues based on your requirements.
        </p>

        <Link
          to="/contact"
          className="primary-button"
        >
          Talk to Our Team →
        </Link>

      </section>

    </div>
  );
}

export default Venues;