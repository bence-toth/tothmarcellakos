import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import StickyHeader from "../StickyHeader/StickyHeader";
import Work from "../Work/Work";
import Shop from "../Shop/Shop";
import Image from "../Image/Image";

import "./App.css";

const App = () => {
  const [stickyHeaderHeight, setStickyHeaderHeight] = useState(0);

  return (
    <div className="app">
      <StickyHeader setStickyHeaderHeight={setStickyHeaderHeight} />
      <main style={{ paddingTop: `calc(${stickyHeaderHeight}px + 1em)` }}>
        <Routes>
          <Route path="/" element={<Work />} />
          <Route path="/works/:category/:image" element={<Image />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<div>About page will come here</div>} />
          <Route
            path="/contact"
            element={<div>Contact page will come here</div>}
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;
