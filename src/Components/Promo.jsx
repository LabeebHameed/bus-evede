import React from 'react'
import KSRTC_OOTY from "../Assets/KSRTC_OOTY.jpg";
import Womens_Day from "../Assets/Womens_Day.jpg";
import '../App.css'

function Promo() {

    const promos = [
        {
          name: "Women's Day SALE",
          description: "50% off",
          image: `${Womens_Day}`,
        },
        {
          name: "OOTY TRIP KSRTC",
          description: "60% off",
          image: `${KSRTC_OOTY}`,
        },
      ];
    
  return (
    <div className="promos-section">
    <h2>Promo and discounts</h2>
    <div className="promo-cards">
      {promos.map((promo) => (
        <div key={promo.name} className="promo-card">
          <img src={promo.image} alt={promo.name} />
          <div className="promo-content">
            <h3>{promo.name}</h3>
            <span className="discount">{promo.discount}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Promo
