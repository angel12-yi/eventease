function Gallery() {
  const galleryItems = [
    {
      title: "Dreamy Wedding",
      category: "Wedding",
      image: "/images/wedding.jpg",
    },
    {
      title: "Birthday Celebration",
      category: "Birthday",
      image: "/images/birthday.jpg",
    },
    {
      title: "Elegant Engagement",
      category: "Engagement",
      image: "/images/engagement.jpg",
    },
    {
      title: "Corporate Event",
      category: "Corporate",
      image: "/images/corporate.jpg",
    },
    {
      title: "Beautiful Decoration",
      category: "Decoration",
      image: "/images/event-planning.jpg",
    },
    {
      title: "Grand Celebration",
      category: "Wedding",
      image: "/images/wedding.jpg",
    },
  ];

  return (
    <div className="gallery-page">

      {/* HEADER */}
      <section className="gallery-header">
        <p className="section-label">
          OUR GALLERY
        </p>

        <h1>
          Moments Worth
          <br />
          <span>Remembering.</span>
        </h1>

        <p>
          A glimpse into the beautiful celebrations,
          unforgettable moments and magical experiences
          created by EventEase.
        </p>
      </section>


      {/* FILTERS */}
      <div className="gallery-filters">
        <button className="active">All</button>
        <button>Wedding</button>
        <button>Birthday</button>
        <button>Engagement</button>
        <button>Corporate</button>
        <button>Decoration</button>
      </div>


      {/* GALLERY */}
      <section className="gallery-grid">

        {galleryItems.map((item, index) => (
          <div
            className={`gallery-item gallery-item-${index + 1}`}
            key={index}
          >

            <img
              src={item.image}
              alt={item.title}
            />

            <div className="gallery-overlay">

              <span>
                {item.category}
              </span>

              <h2>
                {item.title}
              </h2>

              <p>
                View Moment →
              </p>

            </div>

          </div>
        ))}

      </section>


      {/* CTA */}
      <section className="gallery-cta">

        <p className="section-label">
          YOUR STORY STARTS HERE
        </p>

        <h2>
          Let's create something
          <br />
          <span>beautiful together.</span>
        </h2>

        <p>
          Have an event in mind? Let EventEase turn
          your vision into a memorable celebration.
        </p>

        <a
          href="/booking"
          className="primary-button"
        >
          Plan Your Event →
        </a>

      </section>

    </div>
  );
}

export default Gallery;