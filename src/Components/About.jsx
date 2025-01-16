import React from "react";
import Typewriter from "typewriter-effect";
import Avatar from "./Avatar";
import ResumeButtons from "./ResumeButtons";

const About = () => {
  return (
    <div id="about">
      <Avatar />
      <div>
        <h1 className="type_writter">
          <Typewriter
            options={{
              strings: [
                "Hello World !",
                "नमस्ते दुनिया 🙏",
                "নমস্কার বিশ্ব 🙏",
              ],
              autoStart: true,
              loop: true,
              pauseFor: 2000,
            }}
          />
        </h1>
        <h2>My Name Is</h2>
        <h2>Debabrata</h2>
        <h3 className="type_writter_green">
          <Typewriter
            options={{
              strings: [
                "I'm a MERN Stack Developer",
                "I'm a Full Stack Developer",
              ],
              autoStart: true,
              loop: true,
              pauseFor: 5000,
            }}
          />
        </h3>
      </div>
      <div>
        <p>
          I'm a very passionate web developer focusing on the MERN stack, but I
          love exploring other technologies and frameworks that catch my
          interest! Working in a tech company as a developer is my dream if
          you're looking for a developer to add to your team, I'd love to hear
          from you!
        </p>
        <ResumeButtons />
      </div>
    </div>
  );
};

export default About;
