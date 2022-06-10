import { useCallback, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import StickyHeader from "../StickyHeader/StickyHeader";
import OrderMessage from "../OrderMessage/OrderMessage";
import Work from "../Work/Work";
import Shop from "../Shop/Shop";
import Image from "../Image/Image";
import SiteFooter from "../SiteFooter/SiteFooter";
import About from "../About/About";

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
