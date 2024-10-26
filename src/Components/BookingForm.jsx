import { React, useState } from "react";
import { MapPin } from "lucide-react";

function BookingForm() {
  const [selectedTransport, setSelectedTransport] = useState("KSRTC");

  return (
    <div className="booking-section">
      <h2>SELECT YOUR ROUTE</h2>

      <div className="location-inputs">
        <div className="input-group">
          <MapPin />
          <input type="text" placeholder="From" />
        </div>
        <div className="input-group">
          <MapPin />
          <input type="text" placeholder="To" />
        </div>
      </div>

      <div className="transport-toggles">
        <button
          className={`transport-button ${
            selectedTransport === "KSRTC" ? "active" : ""
          }`}
          onClick={() => setSelectedTransport("KSRTC")}
        >
          KSRTC
        </button>
        <button
          className={`transport-button ${
            selectedTransport === "PRIVATE" ? "active" : ""
          }`}
          onClick={() => setSelectedTransport("PRIVATE")}
        >
          PRIVATE
        </button>
      </div>

      <button
        className="search-button"
        onClick={() => (window.location.pathname = "/bus-time")}
      >
        Let's Go!
      </button>
    </div>
  );
}

export default BookingForm;
