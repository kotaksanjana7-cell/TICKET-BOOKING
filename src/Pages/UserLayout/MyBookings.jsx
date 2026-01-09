import { useEffect, useState } from "react";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchMyBookings = async () => {
      try {
        const res = await fetch(
          "http://localhost:5000/api/bookings/my-bookings",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        const data = await res.json();
        setBookings(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchMyBookings();
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h2 style={{ textAlign: "center" }}>My Bookings</h2>

      {bookings.length === 0 && (
        <p style={{ textAlign: "center", marginTop: "50px" }}>
          No bookings found
        </p>
      )}

      {bookings.map((b) => (
        <div
          key={b.id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "15px",
            marginBottom: "15px",
            background: "#fff",
          }}
        >
          <h3>{b.event_title}</h3>
          <p><b>Location:</b> {b.location}</p>
          <p><b>Date:</b> {b.date}</p>
          <p><b>Status:</b> {b.status}</p>
          <p><b>Total:</b> ₹{b.total_price}</p>
        </div>
      ))}
    </div>
  );
};

export default MyBookings;
