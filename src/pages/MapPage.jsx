import React, { useLayoutEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../Assets/logo.png";
import gsap from "gsap";
import "./MapPage.css";
import BookingForm from "../Components/BookingForm";
import Map from "../Assets/Map.jpeg";
import Navbar from "../Components/Navbar";
import { ChevronLeft } from "lucide-react";

const MapPage = () => {

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
      <div className="map-container">
        <img
          src={Map}
          alt="Map showing route from Thrissur to Kodungallur"
          className="map-image"
        />
        <div className="back-button">
          <span
            className="back-arrow"
            onClick={() => {
              window.location.pathname = '/';
            }}
          >
            <ChevronLeft />
          </span>
        </div>
      </div>
      <BookingForm />
      <Navbar />
    </div>
  );
};

export default MapPage;
