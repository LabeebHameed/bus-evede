import { React, useLayoutEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../Assets/logo.png";
import gsap from "gsap";
import "./BusTime.css";
import Navbar from "../Components/Navbar";
import { ChevronLeft } from "lucide-react";

const RouteList = () => {
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

  const [selectedSort, setSelectedSort] = useState("Time");

  const sortOptions = ["Time", "Optimal Route", "Cheap", "Fast", "Sale"];

  const routes = [
    {
      busNumber: "KL 15 U 7458",
      provider: "KSRTC",
      departureTime: "6:40 Kodugalure",
      arrivalTime: "8:10 Guruvayoor",
      duration: "1h 30m",
    },
    {
      busNumber: "KL 15 U 7458",
      provider: "KSRTC",
      departureTime: "7:00 Kodugalure",
      arrivalTime: "8:30 Guruvayoor",
      duration: "1h 30m",
    },
    {
      busNumber: "KL 15 U 7458",
      provider: "KSRTC",
      departureTime: "7:20 Kodugalure",
      arrivalTime: "8:50 Guruvayoor",
      duration: "1h 30m",
    },
    {
      busNumber: "KL 15 U 7458",
      provider: "KSRTC",
      departureTime: "7:40 Kodugalure",
      arrivalTime: "9:10 Guruvayoor",
      duration: "1h 30m",
    },{
      busNumber: "KL 15 U 7458",
      provider: "KSRTC",
      departureTime: "8:00 Kodugalure",
      arrivalTime: "9:30 Guruvayoor",
      duration: "1h 30m",
    },{
      busNumber: "KL 15 U 7458",
      provider: "KSRTC",
      departureTime: "8:20 Kodugalure",
      arrivalTime: "9:50 Guruvayoor",
      duration: "1h 30m",
    },{
      busNumber: "KL 15 U 7458",
      provider: "KSRTC",
      departureTime: "8:40 Kodugalure",
      arrivalTime: "10:10 Guruvayoor",
      duration: "1h 30m",
    },{
      busNumber: "KL 15 U 7458",
      provider: "KSRTC",
      departureTime: "9:00 Kodugalure",
      arrivalTime: "10:30 Guruvayoor",
      duration: "1h 30m",
    },{
      busNumber: "KL 15 U 7458",
      provider: "KSRTC",
      departureTime: "9:20 Kodugalure",
      arrivalTime: "10:50 Guruvayoor",
      duration: "1h 30m",
    },{
      busNumber: "KL 15 U 7458",
      provider: "KSRTC",
      departureTime: "9:40 Kodugalure",
      arrivalTime: "11:10 Guruvayoor",
      duration: "1h 30m",
    },
  ];

  return (
    <div className="container">
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
      <div className="header">
        <div className="header-top">
          <button
            className="back-button"
            onClick={() => (window.location.pathname = "/")}
          >
            <ChevronLeft />
          </button>
          <div className="route-info">KDL - Kodugallur → GVY - Guruvayoor</div>
        </div>
        <div className="sort-label">
          <h2> Sorted by </h2>
        </div>
        <div className="sort-container">
          {sortOptions.map((option) => (
            <button
              key={option}
              className={`sort-option ${
                selectedSort === option ? "selected" : ""
              }`}
              onClick={() => setSelectedSort(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="routes-list">
        {routes.map((route, index) => (
          <div key={index} className="route-item">
            <div className="bus-info">
              <div className="provider">{route.provider} →</div>
              <div className="bus-number">{route.busNumber}</div>
            </div>
            <div className="time-info">
              <div className="times-row">
                <span className="time">{route.departureTime}</span>
                <span className="separator">—</span>
                <span className="time">{route.arrivalTime}</span>
              </div>
              <div className="duration">{route.duration}</div>
            </div>
          </div>
        ))}
      </div>
      <Navbar />
    </div>
  );
};

export default RouteList;
