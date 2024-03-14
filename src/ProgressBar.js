// ProgressBar.js
import React, { useState, useEffect } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress === 100) {
          clearInterval(timer);
          return 100;
        } else {
          return prevProgress + 1;
        }
      });
    }, 80);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="enclose">
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}>
          <div className="progress-label">{progress}%</div>
        </div>
      </div>
      <div className="spn">
      <span>{progress === 100 ? "Complete" : "Loading..."}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
