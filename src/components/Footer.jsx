function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">
          <h2>
            Event<span>Ease</span>
          </h2>

          <p>
            Plan your perfect event with ease.
            From intimate celebrations to grand occasions,
            we're here to make every moment memorable.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/events">Events</a>
          <a href="/venues">Venues</a>
          <a href="/services">Services</a>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>

          <p>📍 Kerala, India</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ hello@eventease.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 EventEase. All rights reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;