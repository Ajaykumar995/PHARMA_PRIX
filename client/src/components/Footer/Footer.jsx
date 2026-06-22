import "./Footer.css";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Add Link here

import {
  useSettings,
} from "../../context/SettingsContext";

function Footer() {

  const navigate =
    useNavigate();

  const {
    settings,
  } = useSettings();

  const [clickCount,
    setClickCount] =
    useState(0);

  if (!settings)
    return null;

  const handleAdminAccess =
    () => {

      const count =
        clickCount + 1;

      setClickCount(
        count
      );

      if (count >= 5) {

        navigate(
          "/admin/login"
        );

        setClickCount(0);
      }

      setTimeout(() => {

        setClickCount(0);

      }, 3000);
    };

  const whatsappMessage =
    `Hello ${settings.storeName},
    
I would like to enquire about your medicines/services.

Please assist me.

Thank you.`;

  return (
    <>
      <footer
        className="footer"
        id="contact"
      >

        <div className="footer-container">

          {/* Brand */}

          <div className="footer-column brand-column">

            <h2
              onClick={
                handleAdminAccess
              }
              style={{
                cursor:
                  "pointer",
                userSelect:
                  "none",
              }}
            >
              {
                settings.storeName
              }
            </h2>

            <p>
              Founded on the belief
              that affordable,
              high-quality healthcare
              should be accessible
              to everyone, anytime.
              Your health, our
              priority.
            </p>

            <div className="social-icons">

              {settings.facebook && (
                <a
                  href={
                    settings.facebook
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebookF />
                </a>
              )}

              {settings.instagram && (
                <a
                  href={
                    settings.instagram
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
              )}

              {settings.youtube && (
                <a
                  href={
                    settings.youtube
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaYoutube />
                </a>
              )}

              {settings.linkedin && (
                <a
                  href={
                    settings.linkedin
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              )}

            </div>

          </div>

          {/* Quick Links */}

          <div className="footer-column">

            <h3>
              Quick Links
            </h3>

            <ul className="footer-links">

              <li>
                <a href="#home">
                  Home
                </a>
              </li>

              <li>
                <a href="#about">
                  About Us
                </a>
              </li>

              <li>
                <a href="#services">
                  Services
                </a>
              </li>

              <li>
                <Link to="/products">Products</Link>
              </li>

              <li>
                <a href="#contact">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Services */}

          <div className="footer-column">

            <h3>
              Our Services
            </h3>

            <ul className="footer-links">

              <li>
                24×7 Availability
              </li>

              <li>
                Branded Medicines
              </li>

              <li>
                Affordable Pricing
              </li>

              <li>
                Home Delivery
              </li>

              <li>
                Loyalty Programs
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div className="footer-column">

            <h3>
              Contact Info
            </h3>

            <div className="contact-item">

              <div className="contact-icon">
                <FaPhoneAlt />
              </div>

              <span>
                {
                  settings.phone
                }
              </span>

            </div>

            <div className="contact-item">

              <div className="contact-icon">
                <FaEnvelope />
              </div>

              <span>
                {
                  settings.email
                }
              </span>

            </div>

            <div className="contact-item">

              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>

              <span>
                {
                  settings.address
                }
              </span>

            </div>

          </div>

        </div>

        <div className="footer-bottom">

          <p>

            ©
            {" "}
            {new Date().getFullYear()}
            {" "}

            {
              settings.storeName
            }

            . All Rights Reserved.

          </p>

        </div>

      </footer>

      {/* WhatsApp */}

      {settings.whatsapp && (

        <a
          href={`https://wa.me/${settings.whatsapp}?text=${encodeURIComponent(
            whatsappMessage
          )}`}
          className="floating-whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>

      )}

    </>
  );
}

export default Footer;