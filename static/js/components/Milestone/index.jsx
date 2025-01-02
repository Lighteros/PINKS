import React from "react";
import "./index.css";
import { MilestoneCover } from "../../assets/icons";
const Milestone = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="container milestone-wrap">
      <div className="milestone-title">Milestone</div>
      <div className="milestone-subtitle">
        In the Era of Artificial Intelligence, Computing Power is the Oil
      </div>
      <div className="milestone-desc">
        May 30, 2023, Nvidia's market value surpassed one trillion US dollars,
        becoming the world's highest-valued chip company, twice the value of
        TSMC. Just six months ago, its market value was only 270 billion US
        dollars, which increased by 2.5 times in just over six months due to the
        artificial intelligence boom. The global surge of ChatGPT owes much to
        Nvidia, which initially provided 10,000 A100 GPU chips for its core
        hardware. Just as smartphones need Qualcomm and MediaTek chips, AI large
        models require Nvidia chips.
      </div>
      <MilestoneCover className="milestone-cover" />
    </div>
  );
});

export default Milestone;
