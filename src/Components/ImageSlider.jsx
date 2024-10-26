import { React, useState } from "react";
import "../index.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Irinjalakuda from "../Assets/Irinjalakuda.jpg";
import Ernakulam from "../Assets/Ernakulam.jpg";
import Thrissur from "../Assets/Thrissur.jpg";

function ImageSlider() {
  const destinations = [
    {
      name: "Irinjalakuda",
      image: `${Irinjalakuda}`,
      description: "Historic church and cultural center",
    },
    {
      name: "Thrissur",
      image: `${Thrissur}`,
      description: "Famous for Thrissur Pooram festival",
    },
    {
      name: "Ernakulam",
      image: `${Ernakulam}`,
      description: "Major port city and commercial hub",
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % destinations.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + destinations.length) % destinations.length
    );
  };

  return (
    <div className="slider-container">
      <div
        className="slider-track"
        style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
      >
        {destinations.map((dest) => (
          <div key={dest.name} className="slide">
            <img
              src={dest.image}
              alt={dest.name}
              onClick={() => {
                window.location.pathname = '/bus-time';
              }}
            />
            <div className="location-label">{dest.name}</div>
          </div>
        ))}
      </div>

      <button className="slider-button prev" onClick={prevImage}>
        <ChevronLeft />
      </button>
      <button className="slider-button next" onClick={nextImage}>
        <ChevronRight />
      </button>

      <div className="slider-dots">
        {destinations.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentImageIndex ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
