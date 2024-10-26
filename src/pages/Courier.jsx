import { React, useLayoutEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../Assets/logo.png";
import gsap from "gsap";
import "./Courier.css";
import Navbar from "../Components/Navbar";
import { Package, Truck } from "lucide-react";

const Courier = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#logo", {
        opacity: 0,
        y: "+=30",
      }).to("#logo", {
        opacity: 0,
        y: "-=30",
        delay: 0.3,
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <AnimatePresence>
        <motion.div
          className="intro"
          ref={comp}
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 2 }}
        >
          <img id="logo" src={logo} alt="Logo" />
        </motion.div>
      </AnimatePresence>
      <div className="header_courier">
        <div className="tracking-section">
          <h1>Track your package</h1>
          <div className="tracking-input">
            <Package />
            <input type="text" placeholder="Tracking Number" />
          </div>
        </div>
      </div>
      <div className="tracker-container">
        <div className="shipment-section">
          <h2>Current Shipment</h2>
          <div className="shipment-card">
            <div className="shipment-header">
              <Package />
              <div className="shipment-details">
                <p className="tracking-number">#HWDSF776567DS</p>
                <p className="date">On the way • 24 June</p>
              </div>
              <span className="arrow">›</span>
            </div>
            <div className="progress-bar">
              <div className="progress-dots">
                <span className="dot completed"></span>
                <span className="dot completed"></span>
                <span className="dot completed"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            </div>
            <div className="locations">
              <span className="from">
                From
                <br />
                Delhi, India
              </span>
              <span className="to">
                To
                <br />
                California, US
              </span>
            </div>
          </div>
        </div>

        <div className="shipment-section">
          <h2>Recent Shipment</h2>
          {[1, 2].map((_, index) => (
            <div key={index} className="shipment-card minimal">
              <Package />
              <div className="shipment-details">
                <p className="tracking-number">#HWDSF776567DS</p>
                <p className="date">On the way • 24 June</p>
              </div>
              <span className="arrow">›</span>
            </div>
          ))}
        </div>

        <div className="courier-section">
          <h2>Courier</h2>
          <p className="courier-text">
            Send your courier by bus for an affordable and reliable option. It's
            a budget-friendly way to ensure your packages arrive safely!
          </p>
          <button className="send-courier-btn">
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Truck />{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            Send Courier
          </button>
        </div>
        <Navbar />
      </div>
    </>
  );
};

export default Courier;
