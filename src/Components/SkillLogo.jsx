import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SkillLogo = ({ name, url, id }) => {
  AOS.init();
  return (
    <div
      data-aos={id % 2 === 0 ? "fade-up" : "fade-down"}
      data-aos-anchor-placement={id % 2 === 0 ? "top-bottom" : "center-bottom"}
      className="logo_component"
    >
      <div className="skill_logo_container">
        <img
          className={name === "React" ? "react_logo" : undefined}
          src={url}
          alt="skill"
        />
      </div>
      <p>{name}</p>
      <div className="skill_name_animation"></div>
    </div>
  );
};

export default SkillLogo;
