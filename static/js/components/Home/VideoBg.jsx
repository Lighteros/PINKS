import React, { useState, useEffect } from "react";
import "./VideoBg.css";
import AIBangAvatar_PC from "../../assets/AIBangAvatar_PC.webm";
import AIBangLoop_PC from "../../assets/AIBangLoop_PC.webm";
import AIBangAvatar_MB from "../../assets/AIBangAvatar_MB.webm";
import AIBangLoop_MB from "../../assets/AIBangLoop_MB.webm";
import useMediaQuery from "../../hook/useMediaQuery";
function VideoBg({ children }) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const firstVideo = document.getElementById("firstVideo");
    const secondVideo = document.getElementById("secondVideo");

    firstVideo.addEventListener("ended", () => {
      secondVideo.play();
      firstVideo.style.opacity = 0;
    });
    firstVideo.load();
    secondVideo.load();
  }, [isMobile]);

  return (
    <div className="video-background">
      <video
        id="firstVideo"
        autoPlay
        muted
        playsInline
        style={{ zIndex: 1 }}
      >
        <source
          src={isMobile ? AIBangAvatar_MB : AIBangAvatar_PC}
          type="video/webm"
        />
      </video>
      <video
        id="secondVideo"
        muted
        playsInline
        loop
        style={{ zIndex: 0 }}
      >
        <source
          src={isMobile ? AIBangLoop_MB : AIBangLoop_PC}
          type="video/webm"
        />
      </video>
      {children}
    </div>
  );
}

export default VideoBg;
