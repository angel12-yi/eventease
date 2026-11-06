function Contact() {
  return (
    <div className="contact-page">

      {/* HEADER */}
      <section className="contact-header">
        <p className="section-label">GET IN TOUCH</p>

        <h1>
          Let's Plan Your
          <br />
          <span>Perfect Event.</span>
        </h1>

        <p>
          Have an event in mind? Tell us about it and
          let's create something beautiful together.
        </p>
      </section>


      {/* CONTACT CONTENT */}
      <section className="contact-section">

        {/* CONTACT DETAILS */}
        <div className="contact-info">

          <p className="section-label">CONTACT US</p>

          <h2>
            We'd love to
            <br />
            hear from you.
          </h2>

          <p className="contact-description">
            Whether you're planning a wedding, birthday,
            corporate event or any special celebration,
            our team is here to help.
          </p>

          <div className="contact-details">

            <div className="contact-item">
              <span>📍</span>
              <div>
                <h3>Location</h3>
                <p>Kerala, India</p>
              </div>
            </div>

            <div className="contact-item">
              <span>📞</span>
              <div>
                <h3>Phone</h3>
                <p>+91 98765 43210</p>
              </div>
            </div>

            <div className="contact-item">
              <span>✉️</span>
              <div>
                <h3>Email</h3>
                <p>hello@eventease.com</p>
              </div>
            </div>

          </div>

        </div>


        {/* FORM */}
        <div className="contact-form">

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you! We will contact you soon.");
            }}
          >

            <div className="form-row">

              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  placeholder="Your first name"
                  required
                />
              </div>

              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  placeholder="Your last name"
                  required
                />
              </div>

            </div>


            <div className="form-group">
              <label>Email</label>

              <input
                type="email"
                placeholder="your@email.com"
                required
              />
            </div>


            <div className="form-group">
              <label>Phone Number</label>

              <input
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                required
              />
            </div>


            <div className="form-group">
              <label>Event Type</label>

              <select required>
                <option value="">Select event type</option>
                <option>Wedding</option>
                <option>Birthday</option>
                <option>Engagement</option>
                <option>Corporate Event</option>
                <option>Other</option>
              </select>
            </div>


            <div className="form-group">
              <label>Message</label>

              <textarea
                rows="5"
                placeholder="Tell us about your event..."
                required
              ></textarea>
            </div>


            <button
              type="submit"
              className="contact-submit"
            >
              Send Message →
            </button>

          </form>

        </div>

      </section>

    </div>
  );
}

export default Contact;