import React from "react";
import patience from "../Images/Logo/Patience.png";
import empathy from "../Images/Logo/empathy.png";
import problemSolving from "../Images/Logo/problem_solving.png";
import teamCollaboration from "../Images/Logo/team_collaboration.png";
import SkillLogo from "./SkillLogo";

const mySoftSkills = [
  { name: "Problem Solving", logo: problemSolving },
  { name: "Team Collaboration", logo: teamCollaboration },
  { name: "Empathy", logo: empathy },
  { name: "Patience", logo: patience },
];

const SoftSkills = () => {
  return (
    <div className="Skill_container">
      <h2 className="section_heading">Soft Skills</h2>
      <div className="skillsGrid">
        {mySoftSkills.map((skill, id) => (
          <SkillLogo key={id} name={skill.name} url={skill.logo} id={id} />
        ))}
      </div>
    </div>
  );
};

export default SoftSkills;
