import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Check if user is already logged in
  useEffect(() => {
    const savedUser = localStorage.getItem("eventeaseUser");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("eventeaseUser");
    setUser(null);

    navigate("/");
  };

  return (
    <nav className="navbar">

      <div className="navbar-container">

        {/* LOGO */}

        <Link to="/" className="logo">
          Event<span>Ease</span>
        </Link>


        {/* NAVIGATION */}

        <div className="nav-links">

          <Link to="/">
            Home
          </Link>

          <Link to="/events">
            Events
          </Link>

          <Link to="/venues">
            Venues
          </Link>

          <Link to="/services">
            Services
          </Link>

          <Link to="/packages">
            Packages
          </Link>

          <Link to="/gallery">
            Gallery
          </Link>

          <Link to="/contact">
            Contact
          </Link>

        </div>


        {/* RIGHT SIDE */}

        <div className="nav-actions">

          {/* BOOK NOW */}

          <Link
            to="/booking"
            className="nav-button"
          >
            Book Now
          </Link>


          {/* LOGIN / LOGOUT */}

          {user ? (

            <div className="nav-user">

              <span className="nav-welcome">
                Hi, {user.name}
              </span>

              <button
                className="nav-logout"
                onClick={handleLogout}
              >
                Logout
              </button>

            </div>

          ) : (

            <Link
              to="/login"
              className="nav-login"
            >
              Login
            </Link>

          )}

        </div>

      </div>

    </nav>
  );
}

export default Navbar;