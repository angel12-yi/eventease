import { useEffect, useState } from "react";

function ViewBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [actionLoading, setActionLoading] = useState(null);


  // ========================================
  // FETCH BOOKINGS
  // ========================================

  const fetchBookings = () => {
    setLoading(true);

    fetch("http://localhost:5000/api/bookings")
      .then((response) => response.json())
      .then((data) => {
        setBookings(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setMessage("❌ Unable to load bookings.");
        setLoading(false);
      });
  };


  // ========================================
  // LOAD BOOKINGS WHEN PAGE OPENS
  // ========================================

  useEffect(() => {
    fetchBookings();
  }, []);


  // ========================================
  // ACCEPT BOOKING
  // ========================================

  const handleAccept = async (id) => {
    setActionLoading(id);
    setMessage("");

    try {
      const response = await fetch(
        `http://localhost:5000/api/bookings/${id}/accept`,
        {
          method: "PUT",
        }
      );

      const data = await response.json();

      if (response.ok) {

        setMessage(
          "✓ Booking accepted successfully!"
        );

        // Update the booking on the webpage
        setBookings((previousBookings) =>
          previousBookings.map((booking) =>
            booking.id === id
              ? {
                  ...booking,
                  status: "Accepted",
                }
              : booking
          )
        );

      } else {
        setMessage(
          "❌ " + data.message
        );
      }

    } catch (error) {
      console.log(error);

      setMessage(
        "❌ Unable to connect to the server."
      );
    }

    setActionLoading(null);
  };


  // ========================================
  // DELETE BOOKING
  // ========================================

  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this booking? This will permanently remove it from the database."
    );

    if (!confirmDelete) {
      return;
    }

    setActionLoading(id);
    setMessage("");

    try {

      const response = await fetch(
        `http://localhost:5000/api/bookings/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (response.ok) {

        setMessage(
          "✓ Booking deleted successfully!"
        );

        // Remove booking from webpage immediately
        setBookings((previousBookings) =>
          previousBookings.filter(
            (booking) => booking.id !== id
          )
        );

      } else {

        setMessage(
          "❌ " + data.message
        );

      }

    } catch (error) {

      console.log(error);

      setMessage(
        "❌ Unable to connect to the server."
      );

    }

    setActionLoading(null);
  };


  // ========================================
  // PAGE
  // ========================================

  return (
    <div className="view-bookings-page">

      {/* HEADER */}

      <div className="view-bookings-header">

        <p className="section-label">
          EVENTEASE ADMIN
        </p>

        <h1>
          Booking
          <br />
          <span>Requests.</span>
        </h1>

        <p>
          Manage event booking requests
          submitted through EventEase.
        </p>

      </div>


      {/* STATUS MESSAGE */}

      {message && (
        <div className="admin-message">
          {message}
        </div>
      )}


      {/* LOADING */}

      {loading ? (

        <p className="booking-loading">
          Loading bookings...
        </p>

      ) : bookings.length === 0 ? (

        <div className="booking-empty">

          <p>
            No bookings found.
          </p>

        </div>

      ) : (

        <div className="bookings-table-container">

          <table className="bookings-table">

            <thead>

              <tr>

                <th>ID</th>
                <th>Event</th>
                <th>Date</th>
                <th>Time</th>
                <th>Guests</th>
                <th>Budget</th>
                <th>Notes</th>
                <th>Status</th>
                <th>Actions</th>

              </tr>

            </thead>


            <tbody>

              {bookings.map((booking) => (

                <tr key={booking.id}>

                  <td>
                    #{booking.id}
                  </td>


                  <td>
                    {booking.notes
                      ? booking.notes
                          .split("\n")[0]
                          .replace("Event Type: ", "")
                      : "Event"}
                  </td>


                  <td>
                    {booking.event_date}
                  </td>


                  <td>
                    {booking.event_time}
                  </td>


                  <td>
                    {booking.guests}
                  </td>


                  <td>
                    {booking.budget
                      ? `₹${booking.budget}`
                      : "Not specified"}
                  </td>


                  <td>
                    {booking.notes || "-"}
                  </td>


                  <td>

                    <span
                      className={`booking-status-badge ${
                        booking.status === "Accepted"
                          ? "accepted"
                          : "pending"
                      }`}
                    >
                      {booking.status || "Pending"}
                    </span>

                  </td>


                  <td>

                    <div className="booking-actions">

                      {/* ACCEPT */}

                      {booking.status !== "Accepted" && (

                        <button
                          className="accept-button"
                          onClick={() =>
                            handleAccept(booking.id)
                          }
                          disabled={
                            actionLoading === booking.id
                          }
                        >
                          {actionLoading === booking.id
                            ? "..."
                            : "✓ Accept"}
                        </button>

                      )}


                      {/* DELETE */}

                      <button
                        className="delete-button"
                        onClick={() =>
                          handleDelete(booking.id)
                        }
                        disabled={
                          actionLoading === booking.id
                        }
                      >
                        🗑 Delete
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      )}

    </div>
  );
}

export default ViewBookings;