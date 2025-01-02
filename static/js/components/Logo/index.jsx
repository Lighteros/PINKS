import React from "react";
import "./index.css";
import IMAGES from "../../assets/images";
import { useNavigate } from "react-router-dom";

function Header({ title, color }) {

  let navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="logo-wrap" onClick={goToHome} >
      <img className="logo" src={IMAGES.Logo} alt="Logo" />
      <span className="name" style={{ color: color }}>
        {title}
      </span>
    </div>
  );
}

export default Header;
