import { Link } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

    setStatus("Signing in...");

    try {
      const response = await fetch(
        "http://localhost:5000/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setStatus(`✨ Welcome back, ${data.user.name}!`);

        // Save logged-in user in browser
        localStorage.setItem(
          "eventeaseUser",
          JSON.stringify(data.user)
        );
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
            WELCOME BACK
          </p>

          <h1>
            Let's plan
            <br />
            something <span>beautiful.</span>
          </h1>

          <p className="auth-description">
            Sign in to continue planning your perfect
            event with EventEase.
          </p>

          <form onSubmit={handleSubmit}>

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

            {/* PASSWORD */}

            <div className="auth-group">

              <div className="password-label">

                <label>Password</label>

                <a href="#forgot">
                  Forgot password?
                </a>

              </div>

              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />

            </div>

            {/* BUTTON */}

            <button
              type="submit"
              className="auth-button"
            >
              Sign In →
            </button>

          </form>

          {status && (
            <p className="auth-status">
              {status}
            </p>
          )}

          <p className="auth-switch">
            Don't have an account?{" "}
            <Link to="/register">
              Create one
            </Link>
          </p>

        </div>

        {/* RIGHT SIDE */}

        <div className="auth-image">

          <div className="auth-image-overlay">

            <p>
              EVERY MOMENT
            </p>

            <h2>
              Worth
              <br />
              celebrating.
            </h2>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;