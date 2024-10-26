import { React, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { MapPin, Calendar, Users, ArrowRight } from "lucide-react";
import "./Home.css";
import ImageSlider from "../Components/ImageSlider";
import BookingForm from "../Components/BookingForm";
import Navbar from "../Components/Navbar";
import Promo from "../Components/Promo";
import Map from "../Assets/Map.jpeg";
import logo from "../Assets/logo.png";
import { motion, AnimatePresence } from "framer-motion";

const searchHistory = [
  {
    from: "Kodungallur",
    to: "Paravur",
    date: "10 April",
    day: "Wed",
    passengers: 2,
    type: "Round Trip",
  },
  {
    from: "Thrissur",
    to: "Ernakulam",
    date: "12 April",
    day: "Fri",
    passengers: 2,
    type: "Round Trip",
  },
  {
    from: "Alappuzha",
    to: "Kottayam",
    date: "12 April",
    day: "Fri",
    passengers: 2,
    type: "One Way",
  },
];

const Home = () => {
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
    <div className="app-container">
      <div className="main-container">
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
        <div id="main">
          {/* Image Slider */}
          <ImageSlider />
          {/* Booking Form */}
          <BookingForm />
          {/* Promos Section */}
          <Promo />
          {/* Route Map */}
          <div className="map-section">
            <h2>Route Map</h2>
            <div className="map-container">
              <img
                src={Map}
                alt="Route Map"
                className="route-map"
                onClick={() => {
                  window.location.pathname = "/map";
                }}
              />
            </div>
          </div>

          {/* Search History */}
          <div className="history-section">
            <h2>Search History</h2>
            <div className="history-list">
              {searchHistory.map((item, index) => (
                <div key={index} className="history-item">
                  <div className="route-info">
                    <div className="location">
                      <MapPin className="icon" />
                      <span>{item.from}</span>
                    </div>
                    <div className="location">
                      <MapPin className="icon" />
                      <span>{item.to}</span>
                    </div>
                  </div>
                  <div className="trip-info">
                    <div className="date">
                      <Calendar className="icon" />
                      <span>{item.date}</span>
                      <span className="day">({item.day})</span>
                    </div>
                    <div className="passengers">
                      <Users className="icon" />
                      <span>{item.passengers}</span>
                    </div>
                    <span className="trip-type">{item.type}</span>
                  </div>
                  <ArrowRight className="arrow-icon" />
                </div>
              ))}
            </div>
          </div>
          <Navbar />
          {/* Bottom Navigation */}
        </div>
      </div>
    </div>
  );
};

export default Home;
