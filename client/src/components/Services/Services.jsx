import "./Services.css";
import {
  FaTruck,
  FaClock,
  FaCapsules,
  FaAward,
  FaGlobe,
  FaIdCard,
} from "react-icons/fa";

const services = [
  {
    icon: <FaClock />,
    title: "24×7 Availability",
    description: "Healthcare support whenever you need it.",
  },
  {
    icon: <FaTruck />,
    title: "Home Delivery",
    description: "Fast and reliable medicine delivery.",
  },
  {
    icon: <FaCapsules />,
    title: "Affordable Medicines",
    description: "Quality medicines at competitive prices.",
  },
  {
    icon: <FaAward />,
    title: "Genuine Products",
    description: "Trusted branded healthcare products.",
  },
  {
    icon: <FaGlobe />,
    title: "National Sourcing",
    description: "Access to medicines across the country.",
  },
  {
    icon: <FaIdCard />,
    title: "Loyalty Cards",
    description: "Exclusive benefits for our customers.",
  },
];

function Services() {
  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="section-title">
          <span>OUR SERVICES</span>
          <h2>Why Choose Pharma Prix</h2>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;