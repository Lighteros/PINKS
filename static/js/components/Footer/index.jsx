import React from "react";
import "./index.css";
import { Discord, Twitter, Telegram } from "../../assets/icons/index";
import Logo from "../Logo";
import { useNavigate } from "react-router-dom";
// import useMediaQuery from "../../hook/useMediaQuery";

function Footer() {
  // const isMobile = useMediaQuery();
  let navigate = useNavigate();

  function redirectToExternalLink(url) {
    if (url) {
      window.open(url, "_blank");
    } else {
      alert("Coming Soon");
    }
  }

  const handlePrivacyOnClick = () => {
    navigate("/policy_en.html");
  };

  return (
    <div className="container footer">
      <Logo title="StarNet" color="blank" />
      {/*{!isMobile && (*/}
        <div className="privacy-desc-wrap">
          © Copyright 2024｜All Rights Reserved
          <span className="privacy-btn" onClick={handlePrivacyOnClick}>
            Privacy Policy
          </span>
        </div>
      {/*)}*/}
      <div className="footer-right-wrap">
     nClick={() => redirectToExternalLink('https://discord.gg/G9Vea4Dy8d')}
        
        <Twitter
          className="icon-share"
          onClick={() => redirectToExternalLink('https://x.com/')}
        />
        <Telegram
          className="icon-share"
          onClick={() => redirectToExternalLink('https://t.me/')}
        />
      </div>
    </div>
  );
}

export default Footer;
