import React from "react";
import "../index.css";
import { House, Map, User, Package } from "lucide-react";

function Navbar() {
  const data = [
    {
      path: "/",
      title: "Home",
      icon: <House />,
    },
    {
      path: "/map",
      title: "Maps",
      icon: <Map />,
    },
    {
      path: "/courier",
      title: "Courier",
      icon: <Package />,
    },
    {
      path: "/contact",
      title: "Contact Us",
      icon: <User />,
    },
  ];

  return (
    <div>
      <nav className="bottom-nav">
        {data.map((val, key) => {
          return (
            <button
              key={key}
              className={
                window.location.pathname == val.path
                  ? "nav-button active"
                  : "nav-button"
              }
              onClick={() => {
                window.location.pathname = val.path;
              }}
            >
              {val.icon}
              <span>{val.title}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}

export default Navbar;
