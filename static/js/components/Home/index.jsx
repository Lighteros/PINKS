import React from "react";
import "./index.css";
import { ArrowDown } from "../../assets/icons";
import VideoBg from "./VideoBg";
const Home = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <VideoBg >
        <div className="home-content">
          <div className="home-title">HERA AI</div>
          <div className="home-desc">
            AI Power of the Crowd Share and Be Shared
          </div>
          <div className="home-arrow-desc">
            Powering the Future: Harnessing the AI Era's 'Oil' - Computational
            Power!
          </div>
          <ArrowDown />
        </div>
      </VideoBg>
    </div>
  );
});

export default Home;
