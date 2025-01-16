import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsGlobe } from "react-icons/bs";
const ProjectTamplate = ({
  title,
  deploy,
  github,
  type,
  desc,
  tech_stack,
  pages,
  cover,
  id,
}) => {
  AOS.init();

  return (
    <div
      data-aos={id % 2 === 0 ? "fade-right" : "fade-left"}
      className="project_template"
    >
      <div>
        <img className="project_cover_image" src={cover} alt={title} />
      </div>
      <div className="project_basic_info">
        <h4>{title}</h4>
        <p>{desc}</p>
        <p>Type: {type}</p>
        {/* More information about project */}
        <div>
          Pages:{" "}
          {pages.map((page, id) => (
            <div key={id} className="project_pages_box">
              {page}
            </div>
          ))}
        </div>
        <div className="tech_stack">
          <span>Tech Stack:</span>
          {tech_stack.map((tech, id) => (
            <div key={id}>
              <img src={tech} />
            </div>
          ))}
        </div>
        <div className="project_source_buttons">
          <div>
            <a target={"_blank"} href={github}>
              <button>
                GitHub <FaGithubSquare />
              </button>
            </a>
          </div>
          <div>
            <a target={"_blank"} href={deploy}>
              <button>
                Deploy <BsGlobe />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTamplate;
