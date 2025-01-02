import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Milestone from "./components/Milestone";
import Power from "./components/Power";
import Technology from "./components/Technology";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";
import React, { useEffect, useRef } from "react";
import useMediaQuery from "./hook/useMediaQuery";
function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isMobile = useMediaQuery();

  const homeRef = useRef(null);
  const milestoneRef = useRef(null);
  const powerRef = useRef(null);
  const technologyRef = useRef(null);
  const roadmapRef = useRef(null);

  const scrollToComponent = (ref, mixHeight) => {
    console.log(ref.current.id)
    const mobileOffset = ref.current.id === "technology" ? 180 : 40;
    const positon = isMobile
      ? ref.current.offsetTop - mobileOffset
      : ref.current.offsetTop - (mixHeight / 2);
    window.scrollTo({
      top: positon,
      behavior: "smooth",
    });
  };

  return (
    <div className={`App ${isMobile ? "app-mobile" : "app-pc"}`}>
      <Header
        scrollToComponent={scrollToComponent}
        refs={{ homeRef, milestoneRef, powerRef, technologyRef, roadmapRef }}
      />
      <Home ref={homeRef} />
      <Milestone ref={milestoneRef} />
      <Power ref={powerRef} />
      <Technology ref={technologyRef} />
      <Roadmap ref={roadmapRef} />
      <Footer />
    </div>
  );
}

export default App;
