import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import AOS from "aos";
import "aos/dist/aos.css";

const selectLastHalfYear = (contributions) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const shownMonths = 12;

  return contributions.filter((day) => {
    const date = new Date(day.date);
    const monthOfDay = date.getMonth();

    return (
      date.getFullYear() === currentYear &&
      monthOfDay > currentMonth - shownMonths &&
      monthOfDay <= currentMonth
    );
  });
};

const GitHubStats = () => {
  AOS.init();
  return (
    <div id="github_section">
      <h2 className="section_heading">GitHub Stats</h2>
      {/* Contribution status */}
      <div>
        <div data-aos="zoom-out-up">
          <GitHubCalendar
            style={{ margin: "auto" }}
            blockSize={16}
            fontSize={14}
            blockMargin={4}
            blockRadius={6}
            username="imdebabrata"
            // transformData={selectLastHalfYear}
          >
            <ReactTooltip delayShow={20} html />
          </GitHubCalendar>
        </div>
        {/* Streak Status */}
        <div className="stats_container">
          <img
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            src="https://github-readme-streak-stats.herokuapp.com/?user=ImDebabrata&theme=nightowl&border_radius=7"
            alt="Github stats"
          />
          <img
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            src="https://github-readme-stats.vercel.app/api?username=imdebabrata&show_icons=true&theme=tokyonight"
            alt="Github Stats"
          />
        </div>
      </div>
    </div>
  );
};

export default GitHubStats;
