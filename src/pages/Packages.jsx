import { useNavigate } from "react-router-dom";

function Packages() {
  const navigate = useNavigate();

  const packages = [
    {
      name: "Essential",
      price: "₹35,000",
      description:
        "Everything you need for a simple and beautiful celebration.",
      features: [
        "Basic Event Decoration",
        "Photography",
        "Catering",
        "Music System",
      ],
    },

    {
      name: "Signature",
      price: "₹75,000",
      description:
        "Our most popular package for memorable celebrations.",
      popular: true,
      features: [
        "Premium Event Decoration",
        "Professional Photography",
        "Premium Catering",
        "DJ & Music",
        "Makeup & Styling",
        "Event Coordination",
      ],
    },

    {
      name: "Grand Celebration",
      price: "₹1,50,000",
      description:
        "A complete luxury experience planned from start to finish.",
      features: [
        "Luxury Decoration",
        "Photography & Videography",
        "Premium Catering",
        "DJ & Entertainment",
        "Makeup & Styling",
        "Complete Event Coordination",
      ],
    },
  ];

  return (
    <div className="packages-page">

      {/* ========================================
          HEADER
      ======================================== */}

      <section className="packages-header">

        <p className="section-label">
          OUR PACKAGES
        </p>

        <h1>
          Choose Your
          <br />
          <span>Perfect Celebration.</span>
        </h1>

        <p>
          Thoughtfully designed packages to make your
          special moments beautiful, effortless and memorable.
        </p>

      </section>


      {/* ========================================
          PACKAGE CARDS
      ======================================== */}

      <section className="packages-grid">

        {packages.map((item, index) => (

          <div
            className={`package-card ${
              item.popular ? "featured-package" : ""
            }`}
            key={index}
          >

            {/* POPULAR BADGE */}

            {item.popular && (
              <div className="popular-badge">
                MOST POPULAR
              </div>
            )}


            {/* PACKAGE NUMBER */}

            <p className="package-number">
              0{index + 1}
            </p>


            {/* PACKAGE NAME */}

            <h2>
              {item.name}
            </h2>


            {/* DESCRIPTION */}

            <p className="package-description">
              {item.description}
            </p>


            {/* PRICE */}

            <div className="package-price">

              <span>
                Starting from
              </span>

              <strong>
                {item.price}
              </strong>

            </div>


            {/* FEATURES */}

            <div className="package-features">

              <p className="features-title">
                PACKAGE INCLUDES
              </p>

              {item.features.map((feature, featureIndex) => (

                <div
                  className="package-feature"
                  key={featureIndex}
                >

                  <span>
                    ✦
                  </span>

                  <p>
                    {feature}
                  </p>

                </div>

              ))}

            </div>


            {/* CHOOSE PACKAGE BUTTON */}

            <button
              className="package-button"
              onClick={() =>
                navigate("/booking", {
                  state: {
                    packageName: item.name,
                    packagePrice: item.price,
                  },
                })
              }
            >
              Choose Package →
            </button>

          </div>

        ))}

      </section>


      {/* ========================================
          BOTTOM CTA
      ======================================== */}

      <section className="packages-cta">

        <p className="section-label">
          NEED SOMETHING DIFFERENT?
        </p>

        <h2>
          Let's create a package
          <br />
          <span>just for you.</span>
        </h2>

        <p>
          Tell us what you have in mind and we'll
          create a personalized event experience.
        </p>

        <button
          className="primary-button"
          onClick={() => navigate("/contact")}
        >
          Contact Us →
        </button>

      </section>

    </div>
  );
}

export default Packages;