import { MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:israfilsharif58@gmail.com" data-cursor="disable">
                israfilsharif58@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:01730210443" data-cursor="disable">
                01730210443
              </a>
            </p>
            <h4>Education</h4>
            <p>HSC (Science)<br />SSC (Science)</p>
          </div>

          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Israfil Sharif</span>
            </h2>
            <h5>
              <MdCopyright /> 2025
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
