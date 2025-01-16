import React from "react";
import netmeds from "../Images/Projects_Cover/netmeds.png";
import myntra from "../Images/Projects_Cover/myntra.png";
import reliance from "../Images/Projects_Cover/reliance.png";
import wrike from "../Images/Projects_Cover/wrike.png";
import chakra from "../Images/Logo/chakra.png";
import css from "../Images/Logo/css.png";
import html from "../Images/Logo/html.png";
import javascript from "../Images/Logo/javascript.png";
import react from "../Images/Logo/react.png";
import redux from "../Images/Logo/redux.png";
import styledcomponents from "../Images/Logo/styled-components.png";
import ProjectTamplate from "./ProjectTamplate";

const projectList = [
  {
    title: "Shopping Bazaar",
    github: "https://github.com/imsukhdevhansda/shopping-bazaar",
    deploy: "https://myntra-clone-imdebabrata.vercel.app/",
    type: "Group Project",
    desc: "Shopping Bazaar is an E-commerce website for one-stop shop for all your fashion and lifestyle needs.",
    tech_stack: [html, css, javascript, react, redux, chakra, styledcomponents],
    pages: ["Login", "Home", "Mens", "Wishlist", "Bag", "Checkout"],
    cover: myntra,
  },
  {
    title: "Reliance Digital Store - Clone",
    github: "https://github.com/ImDebabrata/illegal-quiver-3898",
    deploy: "https://im-debabrata-reliance-digital.netlify.app",
    type: "Individual",
    desc: "Reliance Digital is an Indian consumer electronics retailer. It is a subsidiary of Reliance Retail, a wholly owned subsidiary of Reliance Industries.",
    tech_stack: [html, css, javascript],
    pages: ["Home", "Product(One plus Nord)", "Cart", "Contact Us"],
    cover: reliance,
  },
  {
    title: "Wrike - Clone",
    github: "https://github.com/Durgesh9871/teal-fuel-7913",
    deploy: "https://im-debabrata-wrike.netlify.app/price.html",
    type: "Group Project",
    desc: "Wrike, Inc. is an American project management application service provider based in San Jose, California.",
    tech_stack: [html, css, javascript],
    pages: ["Pricing"],
    cover: wrike,
  },

  {
    title: "Netmeds - Clone",
    github: "https://github.com/ImDebabrata/perfect-kitty-6112",
    deploy: "https://imdebabrata-netmeds.netlify.app",
    type: "Individual",
    desc: "Netmeds.com is one of India's most trusted pharmacies, dispensing quality medicines at reasonable prices to over 7 million happy customers – PAN India",
    tech_stack: [html, css, javascript, react, chakra],
    pages: ["Home"],
    cover: netmeds,
  },
];

const Project = () => {
  return (
    <div>
      <h2 id="project" className="section_heading">
        Projects
      </h2>
      <div id="project_container">
        {projectList.map((project, id) => (
          <ProjectTamplate key={id} id={id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
