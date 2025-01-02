import React from "react";
import "./index.css";
import useMediaQuery from "../../hook/useMediaQuery";
const Technology = React.forwardRef((props, ref) => {
  const isMobile = useMediaQuery();
  const technologys = [
    {
      id: "1",
      title: "Decentralized Architecture",
      desc: "The Al computing power oil feld adopts a decentralized approach, where each user can provide computing power through their own mobile devices. without relying on centralized institutions. This decentralized method can enhance the enthusiasm of computing power providers and ensure thefairness of resource allocation",
    },
    {
      id: "2",
      title: "Blockchain Technology",
      desc: "The Al computing power oil feld employs blockchain technology to ensurethe platform's security and privacy. Blockchain technology can secure the safety and privacy of data, while also facilitating decentralized transactionsand settlements, thereby enhancing the platform's efhciency and quality",
    },
    {
      id: "3",
      title: "Computing Power Sharing Platform",
      desc: "The Al computing power oil feld has established a computing power sharing platform, where users can freely provide and obtain computing power on the platform without relying on centralized institutions. The computing power sharing platform enhances both the effciency and flexibility of computing power utilization",
    },
    {
      id: "4",
      title: "Smart Contract",
      desc: "Computing power plays a very important role in the era of artifcial intelligence and can be seen as the energy source of artifcial intelligence. This is because artifcial intelligence algorithms require a large amount of computational resources for training and inference, especially in felds such as deep learning, where the investment in computational resources directly affects the performance and accuracy of the models",
    },
  ];

  const technologyItem = (technology, index) => {
    return (
      <div key={technology.id} className="technology-item-wrap">
        <div className="technology-item-inline-wrap">
          <div className="corner" id="top-left"></div>
          <div className="corner" id="top-right"></div>
          {index === 3 ? <div className="corner" id="bottom-left"></div> : null}
          <div className="technology-item-title">{technology.title}</div>
          <div className="technology-item-desc">{technology.desc}</div>
        </div>
      </div>
    );
  };

  const BreakWord = () => {
    return isMobile ? <br></br> : null;
  };

  return (
    <div ref={ref} className="container technology-wrap" id="technology">
      <div className="corner" id="bottom-left"></div>
      <div className="corner" id="bottom-right"></div>
      <div className="technonly-title-wrap">
        <div className="corner" id={isMobile ? 'title-top-left':'top-left'}></div>
        <div className="corner" id={isMobile ? 'title-top-right':'top-right'}></div>
        <div className="technology-title">
          Technology <BreakWord /> Framework
        </div>
        <div className="technology-subtitle">
          Uniting AI and Blockchain for Tomorrow's Innovations
        </div>
      </div>
      {!isMobile && <div className="pc-fixed-wrap"></div>}
      <div className="technology-list-wrap">
        {technologys.map((technology, index) =>
          technologyItem(technology, index)
        )}
      </div>
    </div>
  );
});

export default Technology;
