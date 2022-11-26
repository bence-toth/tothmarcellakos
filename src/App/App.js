import { useCallback, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import useMediaQuery from "react-hook-media-query";

import StickyHeader from "../StickyHeader/StickyHeader";
import Work from "../Work/Work";
import Image from "../Image/Image";
import SiteFooter from "../SiteFooter/SiteFooter";
import About from "../About/About";

import "./App.css";

const App = () => {
  const [stickyHeaderHeight, setStickyHeaderHeight] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("isDarkMode") === "true" || false
  );

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode((prevDarkMode) => !prevDarkMode);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("isDarkMode", "true");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("isDarkMode", "false");
    }
  }, [isDarkMode]);

  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion)");

  return (
    <div className="app">
      <StickyHeader
        setStickyHeaderHeight={setStickyHeaderHeight}
        toggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
      />
      <main
        style={
          !prefersReducedMotion
            ? { paddingTop: `calc(${stickyHeaderHeight}px + 2em)` }
            : { paddingTop: "2em" }
        }
      >
        <Routes>
          <Route path="/" element={<Work />} />
          <Route path="/works/:category/:image" element={<Image />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  );
};

export default App;
