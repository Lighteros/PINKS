import React from "react";
import "./DetailHeader.css";
import Logo from "../Logo";

function DetailHeader() {
  return (
    <div
      className="header"
    >
      <div className="container header-wrap">
        <div className="left-menus-wrap">
          <Logo title="HERA AI" color="white" />
        </div>
      </div>
    </div>
  );
}

export default DetailHeader;
