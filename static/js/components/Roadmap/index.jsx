import React from "react";
import "./index.css";
import { RoadMapCircle, RoadMapLine } from "../../assets/icons";
import { ReactComponent as Timeline } from "./TimeLine.svg";
import useMediaQuery from "../../hook/useMediaQuery";
const Roadmap = React.forwardRef((props, ref) => {
  const isMobile = useMediaQuery();
  const roadmaps = [
    {
      id: "1",
      title: "January 1st, 2024",
      desc: "Launch of the Starcoin Computing Power Oil Field Project",
    },
    {
      id: "2",
      title: "Q1 2024",
      desc: "Achievement of the Star Computing Power Model 1.0",
    },
    {
      id: "3",
      title: "Q1 to Q3 2024",
      desc: "Launch of the Star Test Mainnet",
    },
    {
      id: "4",
      title: "Q4 2024",
      desc: "Launch of the Star Computing Power Application Store: Star Store",
    },
  ];

  const roadmapItem = (roadmap) => {
    return (
      <div key={roadmap.id} className="roadmap-item-wrap">
        <div className="roadmap-item-line-wrap">
          <RoadMapCircle />
          <RoadMapLine />
        </div>
        <div className="roadmap-item-content-wrap">
          <div className="roadmap-item-title">{roadmap.title}</div>
          <div className="roadmap-item-desc">{roadmap.desc}</div>
        </div>
      </div>
    );
  };


  const MobileRender = () => {
    return (
      <div ref={ref} className="container roadmap-wrap">
        <div className="roadmap-title">Roadmap</div>
        <div className="roadmap-list-wrap">
          {roadmaps.map((roadmap) => roadmapItem(roadmap))}
        </div>
      </div>
    );
  };

  return isMobile ? (
    <MobileRender />
  ) : (
    <div ref={ref}>
      <Timeline  className="pc-timeline" />
    </div>
  );
});

export default Roadmap;
