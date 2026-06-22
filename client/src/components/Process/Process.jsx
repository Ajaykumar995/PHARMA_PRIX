import "./Process.css";
import {
  FaUserMd,
  FaFileMedical,
  FaReceipt,
  FaCreditCard,
  FaCapsules,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaUserMd />,
    title: "Consult",
    description: "Talk with our healthcare professionals.",
  },
  {
    icon: <FaFileMedical />,
    title: "Verify",
    description: "Prescription verification and guidance.",
  },
  {
    icon: <FaReceipt />,
    title: "Billing",
    description: "Transparent and quick billing process.",
  },
  {
    icon: <FaCreditCard />,
    title: "Payment",
    description: "Secure payment options available.",
  },
  {
    icon: <FaCapsules />,
    title: "Collect",
    description: "Receive your medicines safely.",
  },
];

function Process() {
  return (
    <section className="process">
      <div className="process-container">

        <div className="section-title">
          <span>OUR PROCESS</span>

          <h2>
            How We Serve You
          </h2>
        </div>

        <div className="process-grid">
          {steps.map((step, index) => (
            <div className="process-item" key={index}>

              <div className="process-icon">
                {step.icon}
              </div>

              <div className="step-number">
                0{index + 1}
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Process;