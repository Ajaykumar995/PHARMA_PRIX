import "./Team.css";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const teamMembers = [
  {
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600",
    name: "Dr. John Mathew",
    role: "Chief Pharmacist",
  },
  {
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600",
    name: "Dr. Sarah Joseph",
    role: "Healthcare Director",
  },
  {
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600",
    name: "Dr. David Thomas",
    role: "Medical Advisor",
  },
];

function Team() {
  return (
    <section className="team">
      <div className="team-container">

        <div className="section-title">
          <span>OUR TEAM</span>

          <h2>
            Meet Our Healthcare Experts
          </h2>
        </div>

        <div className="team-grid">

          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>

              <div className="team-image">
                <img
                  src={member.image}
                  alt={member.name}
                />

                <div className="team-socials">
                  <a href="#">
                    <FaFacebookF />
                  </a>

                  <a href="#">
                    <FaLinkedinIn />
                  </a>

                  <a href="#">
                    <FaInstagram />
                  </a>
                </div>
              </div>

              <div className="team-content">
                <h3>{member.name}</h3>

                <p>{member.role}</p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Team;