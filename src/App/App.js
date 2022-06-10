import { useCallback, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import useMediaQuery from "react-hook-media-query";

import StickyHeader from "../StickyHeader/StickyHeader";
import OrderMessage from "../OrderMessage/OrderMessage";
import Work from "../Work/Work";
import Shop from "../Shop/Shop";
import Image from "../Image/Image";
import SiteFooter from "../SiteFooter/SiteFooter";
import About from "../About/About";

const App = () => {
  const [stickyHeaderHeight, setStickyHeaderHeight] = useState(0);
  const isOSInDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [isDarkMode, setIsDarkMode] = useState(isOSInDarkMode);

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode((prevDarkMode) => !prevDarkMode);
  }, []);

  useEffect(() => {
    setIsDarkMode(isOSInDarkMode);
  }, [isOSInDarkMode]);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="app">
      <StickyHeader
        setStickyHeaderHeight={setStickyHeaderHeight}
        toggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
      />
      <main style={{ paddingTop: `calc(${stickyHeaderHeight}px + 2em)` }}>
        <OrderMessage />
        <Routes>
          <Route path="/" element={<Work />} />
          <Route path="/works/:category/:image" element={<Image />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  );
};

export default App;
