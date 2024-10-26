import { React, useLayoutEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../Assets/logo.png";
import gsap from "gsap";
import './Contact.css';
import Navbar from '../Components/Navbar';
import { Phone, Mail, MapPin} from "lucide-react";



const Contact = () => {
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

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
    <div className="contact-container">
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
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Say something to start a live chat!</p>
        
        <div className="info-item">
          <Phone/>
          <p>+91 12345 6789</p>
        </div>
        
        <div className="info-item">
          <Mail/>
          <p>demo@gmail.com</p>
        </div>
        
        <div className="info-item">
          <MapPin/>
          <p>132 Darwin ,Puthiyakavu, Mathilakam P.O, 680685, Kerala, India</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Afthab"
          />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Ahmed"
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Afthab@gmail.com"
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 12345 6789"
          />
        </div>

        <div className="form-group">
          <label>Select Subject?</label>
          <div className="radio-group">
            {['General Inquiry', 'Technical Inquiry', 'Regular Inquiry', 'Bug Submition'].map((option, index) => (
              <label key={index} className="radio-label">
                <input
                  type="radio"
                  name="subject"
                  value={option}
                  checked={formData.subject === option}
                  onChange={handleChange}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message.."
          />
        </div>

        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
      <Navbar/>
    </div>
  );
};

export default Contact;