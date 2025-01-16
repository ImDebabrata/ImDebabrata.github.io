import React, { useCallback } from "react";
import resume from "../resume/Debabrata_Datta_Resume.pdf"; // Path to your PDF file

const ResumeButtons = () => {
  const handleViewResume = useCallback(() => {
    // Open the PDF file in a new tab
    window.open(resume, "_blank");
  }, []);

  return (
    <div className="resume_buttons">
      <a
        target="_blank"
        onClick={handleViewResume}
        rel="noopener noreferrer"
      >
        View Resume
      </a>
    </div>
  );
};

export default ResumeButtons;
