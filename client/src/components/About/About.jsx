import "./About.css";
import { FaCheckCircle } from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        
        <div className="about-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800"
            alt="About Keerthy Medicals"
            className="about-img"
          />
          {/* Premium Floating Trust Badge */}
          <div className="experience-badge">
            {/* <h3>10+</h3> */}
            {/* <p>Years of Trust</p> */}
          </div>
        </div>

        <div className="about-content">
          <span className="section-subtitle">ABOUT US</span>

          <h2>
            Trusted Healthcare Partner
            <br />
            For Your Family
          </h2>

          <p>
            Keerthy Medicals has been serving communities with
            high-quality medicines and healthcare products,
            ensuring trust, affordability, and exceptional care. 
            Your health is our top priority.
          </p>

          <div className="about-features">
            <div className="feature-item">
              <FaCheckCircle className="check-icon" />
              <span>Experienced Pharmacists</span>
            </div>
            <div className="feature-item">
              <FaCheckCircle className="check-icon" />
              <span>100% Genuine Medicines</span>
            </div>
            <div className="feature-item">
              <FaCheckCircle className="check-icon" />
              <span>Affordable Pricing</span>
            </div>
            <div className="feature-item">
              <FaCheckCircle className="check-icon" />
              <span>24/7 Support Setup</span>
            </div>
          </div>

          <button className="about-btn">Learn More</button>
        </div>

      </div>
    </section>
  );
}

export default About;