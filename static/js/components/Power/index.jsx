import React from "react";
import "./index.css";
import {
  PowerCover1,
  PowerCover2,
  PowerCover3,
  PowerCoverBg,
} from "../../assets/icons";
const Power = React.forwardRef((props, ref) => {
  const powers = [
    {
      id: "1",
      title: "AI Engine",
      desc: "Computing power plays a very importantrole in the era of artifclal intellilgence andcan be seen as the energy source of artifclal intelligence. This is because artifclal intelligence algorithms require alarge amount of computational resources for training and inference, especially infelds such as deep learning, where theinvestment in computational resources directly affects the performance andaccuracy of the models.",
      cover: PowerCover1,
    },
    {
      id: "2",
      title: "Power Competition",
      desc: "Therefore, the competition for computing power has become an important aspect in the feld of artifcial intelligence. Major technology companles are actively investing in powerful computing infrastructures and algorithm research togain stronger computing capabilitles, thereby maintaining a competitive edge.",
      cover: PowerCover2,
    },
    {
      id: "3",
      title: "Fueling AI",
      desc: "Beyond the intrinsic value of computing power itself, investment in computing power also helps to propel the developmentof the entire artifcial intelligence ecosystem. Strong computational capabilities can accelerate the training andinference of models, allowing more data to be utilized, further driving the innovation and development of algorithms.",
      cover: PowerCover3,
    },
  ];

  const powerItem = (power) => {
    const Cover = power.cover;

    return (
      <div key={power.id} className="power-item-wrap">
        <div className="power-item-content-wrap">
          <div className="power-item-title">{power.title}</div>
          <div className="power-item-desc">{power.desc}</div>
        </div>
        <div className="power-item-cover-wrap">
          <PowerCoverBg className={["power-item-cover-bg"]} />
          <Cover />
        </div>
      </div>
    );
  };

  return (
    <div ref={ref} className="container power-wrap">
      <div className="power-title">
        The Importance of<br></br> Computing Power
      </div>
      <div className="power-subtitle">
          Catalyzing AI Advancements, Innovation, and Technological Breakthroughs
      </div>
      <div className="power-list-wrap">
        {powers.map((power) => powerItem(power))}
      </div>
    </div>
  );
});

export default Power;
