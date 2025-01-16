import React, { useCallback, useState } from "react";
import MenuButton from "./MenuButton";
import styled from "styled-components";
import resume from "../resume/Debabrata_Datta_Resume.pdf";
import { NavHashLink } from "react-router-hash-link";
import { Link } from "react-scroll";

const Navbar = () => {
  console.log(resume);
  const [openMenuBar, setOpenMenuBar] = useState(false);
  const toggleMenu = () => {
    setOpenMenuBar(!openMenuBar);
  };
  const handleViewResume = useCallback(() => {
    // Open the PDF file in a new tab
    window.open(resume, "_blank");
  }, []);

  return (
    <nav>
      <Link to="#app" className="nav_catagory" smooth="true">
        Home
      </Link>
      <div className="content_wrapper">
        <MenuWrapper onClick={toggleMenu}>
          <MenuButton openMenuBar={openMenuBar} />
        </MenuWrapper>
        <div
          className={`section_wrapper ${openMenuBar ? "open_menu_bar" : ""}`}
        >
          <Link to="about" offset={-200} className="nav_catagory" smooth="true">
            About Me
          </Link>
          <Link to="skills" offset={-65} className="nav_catagory" smooth="true">
            Skills
          </Link>
          <Link
            to="project"
            offset={-65}
            className="nav_catagory"
            smooth="true"
          >
            Project
          </Link>
          <a
            target={"_blank"}
            className="nav_catagory"
            smooth="true"
            onClick={handleViewResume}
            rel="noopener noreferrer"
          >
            Resume
          </a>
          <Link to="contact_section" className="nav_catagory" smooth="true">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

const MenuWrapper = styled.div`
  position: absolute;
  z-index: 999;
  display: none;
  @media screen and (max-width: 675px) {
    right: 15px;
    top: 15px;
    display: block;
  }
`;

export default Navbar;
