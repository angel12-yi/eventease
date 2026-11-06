import { Link } from "react-router-dom";
import { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setStatus("❌ Passwords do not match.");
      return;
    }

    setStatus("Creating account...");

    try {
      const response = await fetch(
        "http://localhost:5000/api/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            password: formData.password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setStatus("🎉 Account created successfully!");

        setFormData({
          name: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
        });
      } else {
        setStatus("❌ " + data.message);
      }
    } catch (error) {
      console.log(error);
      setStatus("❌ Unable to connect to the server.");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">

        {/* LEFT SIDE */}

        <div className="auth-content">

          <p className="section-label">
            JOIN EVENTEASE
          </p>

          <h1>
            Create your
            <br />
            <span>perfect</span> plan.
          </h1>

          <p className="auth-description">
            Create your EventEase account and start
            planning beautiful moments that you and
            your loved ones will remember.
          </p>

          <form onSubmit={handleSubmit}>

            {/* NAME */}

            <div className="auth-group">
              <label>Full Name</label>

              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* EMAIL */}

            <div className="auth-group">
              <label>Email Address</label>

              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* PHONE */}

            <div className="auth-group">
              <label>Phone Number</label>

              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            {/* PASSWORD */}

            <div className="auth-group">
              <label>Password</label>

              <input
                type="password"
                name="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            {/* CONFIRM PASSWORD */}

            <div className="auth-group">
              <label>Confirm Password</label>

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            {/* BUTTON */}

            <button
              type="submit"
              className="auth-button"
            >
              Create Account →
            </button>

          </form>

          {status && (
            <p className="auth-status">
              {status}
            </p>
          )}

          <p className="auth-switch">
            Already have an account?{" "}
            <Link to="/login">
              Sign in
            </Link>
          </p>

        </div>

        {/* RIGHT SIDE */}

        <div className="auth-image">

          <div className="auth-image-overlay">

            <p>
              YOUR STORY
            </p>

            <h2>
              Begins
              <br />
              here.
            </h2>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Register;