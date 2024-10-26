import React, { useState } from "react";
import "../App.css";
import Navbar from "./Navbar";

const SuccessPopup = ({ onClose }) => (
  <div className="popup-overlay">
    <div className="popup-content">
      <div className="success-icon">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 16V7a2 2 0 00-2-2H5a2 2 0 00-2 2v9m18 0v3a2 2 0 01-2 2H5a2 2 0 01-2-2v-3m18 0H3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <h2>Your Courier has been booked Successfully</h2>
      <p>Your can track your shipment with tracking id: #20287352341</p>
      <button className="track-button" onClick={onClose}>
        Track Courier
      </button>
    </div>
  </div>
);

const Payment = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePayNow = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="checkout-container">
      <header className="checkout-header">
        <button className="back-button">{"<"}</button>
        <h1>Checkout</h1>
      </header>
      <section className="order-section">
        <h2>Your Order</h2>

        <div className="address-item">
          <div className="status-dot"></div>
          <div className="address-details">
            <p className="name">Johnson Smith</p>
            <p className="address">
              4517 Washington Ave. Manchester, Kentucky 39495
            </p>
            <p className="phone">(209) 555-0104</p>
          </div>
        </div>

        <div className="address-item">
          <div className="status-dot"></div>
          <div className="address-details">
            <p className="name">Arlene McCoy</p>
            <p className="address">8502 Preston Rd. Inglewood, Maine 98380</p>
            <p className="phone">(308) 555-0121</p>
          </div>
        </div>
      </section>
      <section className="payment-section">
        <h2>Select Payment Method</h2>

        <div className="payment-option selected">
          <div className="payment-left">
            <div className="mastercard-logo"></div>
            <span className="card-number">5689 4700 2589 9658</span>
          </div>
          <div className="radio-button selected"></div>
        </div>

        <button className="add-card-button">
          <span>+</span> Add Card
        </button>

        <div className="payment-option">
          <div className="payment-left">
            <div className="paypal-logo"></div>
            <span>Paypal</span>
          </div>
          <div className="radio-button"></div>
        </div>
      </section>
      <section className="summary-section">
        <div className="summary-row">
          <span>Shipping Fee</span>
          <span>$3.00</span>
        </div>
        <div className="summary-row">
          <span>Discount</span>
          <span>$0.80</span>
        </div>
        <div className="summary-row total">
          <span>Total</span>
          <span>$2.20</span>
        </div>
      </section>
      <button className="pay-button" onClick={handlePayNow}>
        Pay Now
      </button>
      {showPopup && <SuccessPopup onClose={handleClosePopup} />}{" "}
      <Navbar/>
    </div>
  );
};

export default Payment;
