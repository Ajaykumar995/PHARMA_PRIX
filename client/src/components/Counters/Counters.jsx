import "./Counters.css";
import CountUp from "react-countup";
import { FaUsers, FaCapsules, FaHospital, FaUserMd } from "react-icons/fa";

const stats = [
  {
    icon: <FaUsers />,
    end: 50000,
    suffix: "+",
    title: "Happy Customers",
  },
  {
    icon: <FaCapsules />,
    end: 10000,
    suffix: "+",
    title: "Pharma Products",
  },
  {
    icon: <FaHospital />,
    end: 30,
    suffix: "+",
    title: "Years Experience",
  },
  {
    icon: <FaUserMd />,
    end: 100,
    suffix: "+",
    title: "Healthcare Experts",
  },
];

function Counters() {
  return (
    <section className="counters">
      <div className="counters-container">

        {stats.map((stat, index) => (
          <div className="counter-card" key={index}>

            <div className="counter-icon">
              {stat.icon}
            </div>

            <h2>
  {stat.end}
  {stat.suffix}
</h2>

            <p>{stat.title}</p>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Counters;