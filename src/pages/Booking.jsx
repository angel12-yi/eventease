import { useState } from "react";
import { useLocation } from "react-router-dom";

function Booking() {
  const location = useLocation();

  const selectedPackage = location.state?.packageName || "";
  const selectedPrice = location.state?.packagePrice || "";

  const [formData, setFormData] = useState({
    event_type: "",
    event_date: "",
    event_time: "",
    guests: "",
    budget: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // ========================================
  // GET TODAY'S DATE
  // ========================================

  const getToday = () => {
    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };


  // ========================================
  // HANDLE INPUT CHANGES
  // ========================================

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Clear old validation message
    setStatus("");
  };


  // ========================================
  // VALIDATE DATE & TIME
  // ========================================

  const validateDateTime = () => {
    const today = getToday();

    // Check date
    if (!formData.event_date) {
      setStatus("❌ Please select an event date.");
      return false;
    }

    if (formData.event_date < today) {
      setStatus(
        "❌ Please select today or a future date."
      );
      return false;
    }


    // Check time
    if (!formData.event_time) {
      setStatus("❌ Please select an event time.");
      return false;
    }


    // If event is today, make sure time is not in the past
    if (formData.event_date === today) {
      const now = new Date();

      const currentHour = String(
        now.getHours()
      ).padStart(2, "0");

      const currentMinute = String(
        now.getMinutes()
      ).padStart(2, "0");

      const currentTime =
        `${currentHour}:${currentMinute}`;

      if (formData.event_time < currentTime) {
        setStatus(
          "❌ Please select a future time."
        );
        return false;
      }
    }


    // Restrict event time to 8 AM - 11 PM
    if (
      formData.event_time < "08:00" ||
      formData.event_time > "23:00"
    ) {
      setStatus(
        "❌ Event time must be between 8:00 AM and 11:00 PM."
      );
      return false;
    }

    return true;
  };


  // ========================================
  // SUBMIT BOOKING
  // ========================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate date and time first
    if (!validateDateTime()) {
      return;
    }

    setStatus("Submitting your booking...");

    try {
      const response = await fetch(
        "http://localhost:5000/api/bookings",
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
        setStatus(
          "✓ Your booking has been submitted successfully!"
        );

        // Clear form
        setFormData({
          event_type: "",
          event_date: "",
          event_time: "",
          guests: "",
          budget: "",
          message: "",
        });
      } else {
        setStatus(
          "❌ " + data.message
        );
      }

    } catch (error) {
      console.log(error);

      setStatus(
        "❌ Unable to connect to the server."
      );
    }
  };


  // ========================================
  // PAGE
  // ========================================

  return (
    <div className="booking-page">

      {/* ========================================
          HERO
      ======================================== */}

      <section className="booking-hero">

        <p className="section-label">
          EVENTEASE BOOKING
        </p>

        <h1>
          Let's plan something
          <br />
          <span>beautiful.</span>
        </h1>

        <p>
          Tell us about your celebration and our
          team will help bring your vision to life.
        </p>

      </section>


      {/* ========================================
          BOOKING FORM
      ======================================== */}

      <section className="booking-section">

        <form
          className="booking-form"
          onSubmit={handleSubmit}
        >


          {/* ========================================
              SELECTED PACKAGE
          ======================================== */}

          {selectedPackage && (

            <div className="selected-package">

              <p className="section-label">
                YOUR SELECTED PACKAGE
              </p>

              <div className="selected-package-content">

                <div>

                  <h2>
                    {selectedPackage}
                  </h2>

                  <p>
                    A beautiful package chosen
                    for your celebration.
                  </p>

                </div>

                <strong>
                  {selectedPrice}
                </strong>

              </div>

            </div>

          )}


          {/* ========================================
              EVENT DETAILS
          ======================================== */}

          <div className="booking-section">

            <div className="booking-block-heading">

              <span>
                01
              </span>

              <div>

                <p className="section-label">
                  EVENT DETAILS
                </p>

                <h2>
                  Tell us about your event.
                </h2>

              </div>

            </div>


            <div className="form-grid">


              {/* EVENT TYPE */}

              <div className="form-group">

                <label>
                  Event Type
                </label>

                <select
                  name="event_type"
                  value={formData.event_type}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select event type
                  </option>

                  <option value="Wedding">
                    Wedding
                  </option>

                  <option value="Birthday">
                    Birthday
                  </option>

                  <option value="Engagement">
                    Engagement
                  </option>

                  <option value="Corporate">
                    Corporate Event
                  </option>

                </select>

              </div>


              {/* NUMBER OF GUESTS */}

              <div className="form-group">

                <label>
                  Number of Guests
                </label>

                <input
                  type="number"
                  name="guests"
                  placeholder="e.g. 150"
                  value={formData.guests}
                  onChange={handleChange}
                  min="1"
                  required
                />

              </div>


              {/* EVENT DATE */}

              <div className="form-group">

                <label>
                  Event Date
                </label>

                <input
                  type="date"
                  name="event_date"
                  value={formData.event_date}
                  onChange={handleChange}
                  min={getToday()}
                  required
                />

                <small>
                  Please select today or a future date.
                </small>

              </div>


              {/* EVENT TIME */}

              <div className="form-group">

                <label>
                  Event Time
                </label>

                <input
                  type="time"
                  name="event_time"
                  value={formData.event_time}
                  onChange={handleChange}
                  min="08:00"
                  max="23:00"
                  required
                />

                <small>
                  Available between 8:00 AM and 11:00 PM.
                </small>

              </div>


              {/* BUDGET */}

              <div className="form-group full-width">

                <label>
                  Estimated Budget
                </label>

                <input
                  type="text"
                  name="budget"
                  placeholder="e.g. ₹75,000"
                  value={formData.budget}
                  onChange={handleChange}
                />

              </div>

            </div>

          </div>


          {/* ========================================
              MESSAGE / VISION
          ======================================== */}

          <div className="booking-section">

            <div className="booking-block-heading">

              <span>
                02
              </span>

              <div>

                <p className="section-label">
                  YOUR VISION
                </p>

                <h2>
                  Tell us what you have in mind.
                </h2>

              </div>

            </div>


            <div className="form-grid">

              <div className="form-group full-width">

                <label>
                  Message
                </label>

                <textarea
                  name="message"
                  rows="7"
                  placeholder="Tell us about your event, theme, decoration ideas, special requirements..."
                  value={formData.message}
                  onChange={handleChange}
                />

              </div>

            </div>

          </div>


          {/* ========================================
              SUBMIT
          ======================================== */}

          <div className="booking-submit">

            <div>

              <p>
                Ready to make it memorable?
              </p>

              <span>
                Our team will get back to you soon.
              </span>

            </div>

            <button type="submit">
              Submit Booking →
            </button>

          </div>


          {/* STATUS MESSAGE */}

          {status && (
            <p className="booking-status">
              {status}
            </p>
          )}

        </form>

      </section>

    </div>
  );
}

export default Booking;