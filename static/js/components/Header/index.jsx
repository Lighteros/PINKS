import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import "./index.css";
import Logo from "../Logo";
import MobileMenu from "./MobileMenu";
import MobileModal from "./MobileModal";
import HeaderMenus from "./HeaderMenus";
import useMediaQuery from "../../hook/useMediaQuery";

const SCROLL_BUFFER = 100;

function Header({ scrollToComponent, refs }) {
  const isMobile = useMediaQuery();
  const headerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [headerContentTop, setHeaderContentTop] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = useMemo(
    () => [
      { name: "home", ref: refs.homeRef },
      { name: "milestone", ref: refs.milestoneRef },
      { name: "power", ref: refs.powerRef },
      { name: "technology", ref: refs.technologyRef },
      { name: "roadmap", ref: refs.roadmapRef },
    ],
    [
      refs.homeRef,
      refs.milestoneRef,
      refs.powerRef,
      refs.technologyRef,
      refs.roadmapRef,
    ]
  );

  const closeMobileMenu = useCallback(() => {
    setIsMenuOpen(false);
    document.body.style.overflowY = "auto";
    document.body.style.height = "100%";
  }, []);

  const handleMenuItemClick = useCallback((ref) => {
    scrollToComponent(ref, headerHeight);
    closeMobileMenu();
  }, [scrollToComponent, headerHeight, closeMobileMenu]);

  const updateHeaderSize = useCallback(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMenuOpen((prev) => {
      const newState = !prev;
      document.body.style.overflow = newState ? "hidden" : "auto";
      document.body.style.height = newState ? "100%" : "auto";
      return newState;
    });
  }, []);

  useEffect(() => {
    updateHeaderSize();
    window.addEventListener("resize", updateHeaderSize);
    return () => window.removeEventListener("resize", updateHeaderSize);
  }, [updateHeaderSize]);

  useEffect(() => {
    const homeContent = document.querySelector(".home-content");
    if (homeContent) {
      const { top } = homeContent.getBoundingClientRect();
      setHeaderContentTop(top);
    }

    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);

      const active = sections.find(
        (section) =>
          section.ref.current &&
          section.ref.current.offsetTop <= currentPosition + SCROLL_BUFFER &&
          section.ref.current.offsetTop + section.ref.current.offsetHeight >
            currentPosition + SCROLL_BUFFER
      );
      setActiveSection(active ? active.name : "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <div
      className={`header ${
        scrollPosition > headerContentTop - headerHeight ? "scrolled" : ""
      }`}
      ref={headerRef}
    >
      <div className="container header-wrap">
        <div className="left-menus-wrap">
          <Logo title="HERA AI" color="white" />
          {!isMobile && (
            <HeaderMenus
              menus={sections}
              activeSection={activeSection}
              itemOnClick={handleMenuItemClick}
            />
          )}
        </div>
        <div className="right-menus-wrap">
          {!isMobile && (
            <div className="right-btn" onClick={() => window.open('https://play.google.com/store/apps/details?id=com.sapp.starcoin', '_target')}>
              DOC
            </div>
          )}
          <div className="right-btn" onClick={() => window.open('https://hera-pinks.vercel.app/', '_target')}>
          APP
          </div>
          {isMobile && (
            <MobileMenu isOpen={isMenuOpen} onClick={toggleMobileMenu} />
          )}
        </div>
      </div>

      {isMobile && (
        <MobileModal isOpen={isMenuOpen} onClose={closeMobileMenu}>
          <Logo title="StarNet" color="white" />
          <HeaderMenus
            menus={sections}
            activeSection={activeSection}
            itemOnClick={handleMenuItemClick}
          />
          <div className="right-btn" onClick={() => window.open('https://play.google.com/store/apps/details?id=com.sapp.starcoin', '_target')}>
            DOC
          </div>
        </MobileModal>
      )}
    </div>
  );
}

export default Header;
