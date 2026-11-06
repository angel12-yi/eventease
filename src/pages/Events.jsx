import { useState } from "react";
import { Link } from "react-router-dom";

const events = [
  {
    id: 1,
    title: "Dream Weddings",
    category: "Wedding",
    description:
      "Elegant and unforgettable weddings planned around your love story.",
    image: "/images/wedding.jpg",
  },
  {
    id: 2,
    title: "Birthday Celebrations",
    category: "Birthday",
    description:
      "Fun, creative and memorable birthday celebrations for every age.",
    image: "/images/birthday.jpg",
  },
  {
    id: 3,
    title: "Beautiful Engagements",
    category: "Engagement",
    description:
      "Celebrate the beginning of your forever with a beautiful engagement.",
    image: "/images/engagement.jpg",
  },
  {
    id: 4,
    title: "Corporate Events",
    category: "Corporate",
    description:
      "Professional and impressive events designed for your organization.",
    image: "/images/corporate.jpg",
  },
  {
    id: 5,
    title: "Baby Showers",
    category: "Baby Shower",
    description:
      "Sweet and memorable celebrations for welcoming your little one.",
    image: "/images/baby-shower.jpg",
  },
  {
    id: 6,
    title: "Graduation Celebrations",
    category: "Graduation",
    description:
      "Celebrate achievements and unforgettable milestones in style.",
    image: "/images/graduation.jpg",
  },
];

const categories = [
  "All",
  "Wedding",
  "Birthday",
  "Engagement",
  "Corporate",
  "Baby Shower",
  "Graduation",
];

function Events() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredEvents =
    selectedCategory === "All"
      ? events
      : events.filter(
          (event) => event.category === selectedCategory
        );

  return (
    <div className="events-page">

      {/* PAGE HERO */}

      <section className="events-page-hero">

        <div>
          <p className="section-label">
            CELEBRATE LIFE'S MOMENTS
          </p>

          <h1>
            Events made
            <br />
            <span>extraordinary.</span>
          </h1>

          <p>
            Whatever the occasion, we'll help you create
            an experience that you and your guests will never forget.
          </p>
        </div>

      </section>


      {/* EVENTS SECTION */}

      <section className="all-events-section">

        <div className="events-header">

          <div>
            <p className="section-label">
              FIND YOUR PERFECT EVENT
            </p>

            <h2>
              What are you
              <br />
              celebrating?
            </h2>
          </div>

          <p className="events-count">
            {filteredEvents.length} Events
          </p>

        </div>


        {/* FILTERS */}

        <div className="category-filters">

          {categories.map((category) => (
            <button
              key={category}
              className={
                selectedCategory === category
                  ? "filter-button active"
                  : "filter-button"
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}

        </div>


        {/* EVENT CARDS */}

        <div className="all-events-grid">

          {filteredEvents.map((event) => (

            <div className="large-event-card" key={event.id}>

              <div
                className="large-event-image"
                style={{
                  backgroundImage: `url(${event.image})`,
                }}
              >
                <span className="event-category">
                  {event.category}
                </span>
              </div>

              <div className="large-event-content">

                <h3>{event.title}</h3>

                <p>{event.description}</p>

                <Link to="/booking" className="event-book-link">
                  Plan This Event →
                </Link>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* CTA */}

      <section className="events-cta">

        <p className="section-label">
          CAN'T FIND WHAT YOU'RE LOOKING FOR?
        </p>

        <h2>
          Have something
          <br />
          unique in mind?
        </h2>

        <p>
          Tell us about your idea and we'll create
          something completely personalized for you.
        </p>

        <Link to="/booking" className="primary-button">
          Tell Us Your Idea →
        </Link>

      </section>

    </div>
  );
}

export default Events;