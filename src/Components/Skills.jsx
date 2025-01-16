import React from "react";
import SkillLogo from "./SkillLogo";
import chakra from "../Images/Logo/chakra.png";
import css from "../Images/Logo/css.png";
import express from "../Images/Logo/express.png";
import git from "../Images/Logo/git.png";
import github from "../Images/Logo/github.png";
import html from "../Images/Logo/html.png";
import javascript from "../Images/Logo/javascript.png";
import mongodb from "../Images/Logo/mongodb.png";
import nodejs from "../Images/Logo/nodejs.png";
import react from "../Images/Logo/react.png";
import redux from "../Images/Logo/redux.png";
import typescript from "../Images/Logo/typescript.png";
import styledcomponents from "../Images/Logo/styled-components.png";
const mySkills = [
  {
    name: "HTML",
    logo: html,
  },
  {
    name: "CSS",
    logo: css,
  },
  {
    name: "javaScript",
    logo: javascript,
  },
  {
    name: "React",
    logo: react,
  },
  {
    name: "Redux",
    logo: redux,
  },
  {
    name: "MongoDB",
    logo: mongodb,
  },
  {
    name: "ExpressJS",
    logo: express,
  },
  {
    name: "NodeJS",
    logo: nodejs,
  },
  {
    name: "Git",
    logo: git,
  },
  {
    name: "GitHub",
    logo: github,
  },
  {
    name: "TypeScript",
    logo: typescript,
  },
  {
    name: "Chakra UI",
    logo: chakra,
  },
  {
    name: "Styled-Components",
    logo: styledcomponents,
  },
];

const Skills = () => {
  return (
    <div className="Skill_container">
      <h2 id="skills" className="section_heading">
        Technical Skills
      </h2>
      <div className="skillsGrid">
        {mySkills.map((skill, id) => (
          <SkillLogo key={id} name={skill.name} url={skill.logo} id={id} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
