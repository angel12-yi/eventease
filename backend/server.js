const express = require("express");
const cors = require("cors");
const db = require("./db");
const bcrypt = require("bcryptjs");

const app = express();

const PORT = 5000;

// ========================================
// MIDDLEWARE
// ========================================

app.use(cors());
app.use(express.json());


// ========================================
// TEST ROUTE
// ========================================

app.get("/", (req, res) => {
  res.json({
    message: "EventEase Backend is running 🚀",
  });
});


// ========================================
// TEST DATABASE
// ========================================

app.get("/api/test-db", (req, res) => {
  const sql = "SELECT 1 AS result";

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);

      return res.status(500).json({
        message: "Database query failed",
      });
    }

    res.json({
      message: "Database is working!",
      result: result,
    });
  });
});


// ========================================
// ADD BOOKING
// ========================================

app.post("/api/bookings", (req, res) => {
  const {
    event_date,
    event_time,
    guests,
    budget,
    event_type,
    message,
  } = req.body;

  // Basic validation
  if (!event_date || !event_time || !guests || !event_type) {
    return res.status(400).json({
      message: "Please fill all required booking fields.",
    });
  }

  const notes = `Event Type: ${event_type || "Not specified"}\n${
    message || ""
  }`;

  const sql = `
    INSERT INTO bookings
    (
      user_id,
      event_id,
      venue_id,
      event_date,
      event_time,
      guests,
      budget,
      notes,
      status
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      null,
      null,
      null,
      event_date,
      event_time,
      guests,
      budget || null,
      notes,
      "Pending",
    ],
    (err, result) => {
      if (err) {
        console.log(err);

        return res.status(500).json({
          message: "Failed to save booking",
          error: err.message,
        });
      }

      res.status(201).json({
        message: "Booking saved successfully!",
        bookingId: result.insertId,
      });
    }
  );
});


// ========================================
// VIEW BOOKINGS
// ========================================

app.get("/api/bookings", (req, res) => {
  const sql = `
    SELECT *
    FROM bookings
    ORDER BY created_at DESC
  `;

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);

      return res.status(500).json({
        message: "Failed to fetch bookings",
      });
    }

    res.json(result);
  });
});


// ========================================
// ACCEPT BOOKING
// ========================================

app.put("/api/bookings/:id/accept", (req, res) => {
  const bookingId = req.params.id;

  const sql = `
    UPDATE bookings
    SET status = 'Accepted'
    WHERE id = ?
  `;

  db.query(sql, [bookingId], (err, result) => {
    if (err) {
      console.log(err);

      return res.status(500).json({
        message: "Failed to accept booking",
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Booking not found",
      });
    }

    res.json({
      message: "Booking accepted successfully!",
    });
  });
});


// ========================================
// DELETE BOOKING
// ========================================

app.delete("/api/bookings/:id", (req, res) => {
  const bookingId = req.params.id;

  const sql = `
    DELETE FROM bookings
    WHERE id = ?
  `;

  db.query(sql, [bookingId], (err, result) => {
    if (err) {
      console.log(err);

      return res.status(500).json({
        message: "Failed to delete booking",
        error: err.message,
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Booking not found",
      });
    }

    res.json({
      message: "Booking deleted successfully!",
    });
  });
});


// ========================================
// REGISTER USER
// ========================================

app.post("/api/register", async (req, res) => {
  const {
    name,
    email,
    phone,
    password,
  } = req.body;

  if (!name || !email || !phone || !password) {
    return res.status(400).json({
      message: "Please fill all fields",
    });
  }

  try {
    const checkSql =
      "SELECT * FROM users WHERE email = ?";

    db.query(
      checkSql,
      [email],
      async (err, results) => {
        if (err) {
          console.log(err);

          return res.status(500).json({
            message: "Database error",
          });
        }

        if (results.length > 0) {
          return res.status(400).json({
            message: "Email already registered",
          });
        }

        const hashedPassword =
          await bcrypt.hash(password, 10);

        const sql = `
          INSERT INTO users
          (name, email, phone, password)
          VALUES (?, ?, ?, ?)
        `;

        db.query(
          sql,
          [
            name,
            email,
            phone,
            hashedPassword,
          ],
          (err, result) => {
            if (err) {
              console.log(err);

              return res.status(500).json({
                message: "Registration failed",
              });
            }

            res.status(201).json({
              message: "Registration successful!",
              userId: result.insertId,
            });
          }
        );
      }
    );
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Something went wrong",
    });
  }
});


// ========================================
// LOGIN USER
// ========================================

app.post("/api/login", (req, res) => {
  const {
    email,
    password,
  } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "Please enter email and password",
    });
  }

  const sql =
    "SELECT * FROM users WHERE email = ?";

  db.query(
    sql,
    [email],
    async (err, results) => {
      if (err) {
        console.log(err);

        return res.status(500).json({
          message: "Database error",
        });
      }

      if (results.length === 0) {
        return res.status(401).json({
          message: "Invalid email or password",
        });
      }

      const user = results[0];

      const passwordMatch =
        await bcrypt.compare(
          password,
          user.password
        );

      if (!passwordMatch) {
        return res.status(401).json({
          message: "Invalid email or password",
        });
      }

      res.json({
        message: "Login successful!",

        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          phone: user.phone,
        },
      });
    }
  );
});


// ========================================
// START SERVER
// ========================================

app.listen(PORT, () => {
  console.log(
    `🚀 EventEase server running on http://localhost:${PORT}`
  );
});