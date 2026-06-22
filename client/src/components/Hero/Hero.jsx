import "./Hero.css";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay">
        <div className="hero-content">
          <motion.span 
            // className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* #1 ONLINE PHARMACY */}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Top Medical Supplies &
            <br />
            Healthcare Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your trusted healthcare partner providing genuine medicines, 
            wellness products, and expert care for your family.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Using anchor tags for smooth scrolling */}
            <a href="#about" className="primary-btn">
              About Us
            </a>
            <a href="#contact" className="secondary-btn">
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;