import React from "react";
import * as image from "../Images/avatar.jpg";

const Avatar = () => {
  return (
    <div id="avatar_container">
      <div className="round_animation"></div>
      <div id="avatar">
        <img
          id="avatar_image"
          src={"https://avatars.githubusercontent.com/u/96492019?v=4"}
          alt=""
        />
      </div>
    </div>
  );
};

export default Avatar;
