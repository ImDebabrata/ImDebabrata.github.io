import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaLinkedin,
  FaGithubSquare,
  FaWhatsappSquare,
  FaPhoneSquareAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ResumeButtons from "./ResumeButtons";
// import {FaWhatsappSquare}

const Contact = () => {
  AOS.init();
  return (
    <div id="contact_section">
      <h2>Get in Touch</h2>
      <h3>Debabrata Datta</h3>
      <ResumeButtons/>
      <span>
        {" "}
        <FaPhoneSquareAlt />
        +919436798788
      </span>
      {/* <span>
        <FaPhoneSquareAlt />
        +918787483752
      </span> */}
      <br />
      <br />
      <span>
        <MdEmail />
        debabratakgt@hotmail.com
      </span>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="social_media_icon_wrapper"
      >
        <div>
          <a target={"_blank"} href="https://www.linkedin.com/in/imdebabrata/">
            <FaLinkedin color="blue" />
          </a>
        </div>
        <div>
          <a target={"_blank"} href="https://github.com/ImDebabrata">
            <FaGithubSquare color="black" />
          </a>
        </div>
        <div>
          <a target={"_blank"} href="mailto:debabratakgt@hotmail.com">
            <MdEmail color="black" />
          </a>
        </div>
        <div>
          <a target={"_blank"} href="https://wa.me/+919436798788?text=">
            <FaWhatsappSquare color="green" />
          </a>
        </div>
      </div>
      <sub>💻 Built & Design By Debabrata &#169; 2022 ❤️</sub>
    </div>
  );
};

export default Contact;
